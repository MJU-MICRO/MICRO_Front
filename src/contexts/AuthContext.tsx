import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import UserProps from '../interfaces/UserProps';
import { useNavigate } from 'react-router-dom';

interface AuthContextProps {
  user: UserProps | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  getUserInfo: () => void;
  loginError: string | null;
  setLoginError: (message: string) => void;
  accessToken: string | null;
  loading: boolean;
  setLoading: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [loginError, setLoginError] = useState<string | null>(null);
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const login = async (email: string, password: string) => {
    try {
      const modifiedEmail = `${email}@mju.ac.kr`;
      const response = await axios.post('api/auth/login', {
        email: modifiedEmail,
        password
      });

      const { accessToken, refreshToken } = response.data.data;
      localStorage.setItem('accessToken', accessToken);
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      console.log('로그인 완료');
      console.log('엥', response.data.data);
      if (localStorage.getItem('accessToken')) {
        axios
          .get('/api/user/my', {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          })
          .then((response) => {
            console.log('getUserAPI 요청');
            setUser(response.data.data);
            setLoginError('');
            setLoading(false);
            navigate('/');
          })
          .catch((error) => {
            if (error.response || error.response.status === 401) {
              // 만료된 액세스 토큰으로 인한 401 Unauthorized 에러
              // 리프레시 토큰으로 새로운 액세스 토큰 발급
              console.log('refreshToken 재발급 요청');
              refreshAccessToken();
            } else {
              console.log('api/user/my 요청 실패', error);
            }
          });
      }
    } catch (error) {
      console.log('Login error:', error);
      setLoginError('로그인에 실패했습니다. 다시 시도해주세요.'); // 에러 메시지 설정
    }

    return user;
  };

  const getUserInfo = () => {
    if (!accessToken) return;

    axios
      .get('/api/user/my', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then((response) => {
        console.log('getUserAPI 요청');
        setUser(response.data.data);
      })
      .catch((error) => {
        if (error.response || error.response.status === 401) {
          // 만료된 액세스 토큰으로 인한 401 Unauthorized 에러
          // 리프레시 토큰으로 새로운 액세스 토큰 발급
          console.log('refreshToken 재발급 요청');
          refreshAccessToken();
        } else {
          console.log('api/user/my 요청 실패', error);
        }
      });
  };

  const refreshAccessToken = () => {
    if (!refreshToken) return;

    axios
      .post('https://nolmyong.com/api/auth/refresh', {
        refreshToken
      })
      .then((response) => {
        console.log(response.data.data);
        const { accessToken, refreshToken } = response.data.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        console.log('refreshToken 재발급 요청');
        getUserInfo();
      })
      .catch((error) => {
        console.log('Refresh token 재발급 실패 :', error);
      });
  };

  const logout = async () => {
    if (!accessToken) return;

    try {
      await axios.post(
        'https://nolmyong.com/api/user/logout',
        { accessToken },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );

      localStorage.removeItem('accessToken');
      setUser(null);
      navigate('/');
    } catch (error) {
      console.log('Logout error:', error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, [setUser, accessToken]);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        getUserInfo,
        loginError,
        setLoginError,
        accessToken,
        loading,
        setLoading
      }}>
      {children}
    </AuthContext.Provider>
  );
};
