import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import UserProps from '../interfaces/UserProps';

interface AuthContextProps {
  user: UserProps | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  getUserInfo: () => void;
  loginError: string | null;
  setLoginError: (message: string) => void;
  accessToken: string | null;
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
  const [accessToken, setAccessToken] = useState<string | null>(
    localStorage.getItem('accessToken') || null
  );
  const [refreshToken, setRefreshToken] = useState<string | null>(
    localStorage.getItem('refreshToken') || null
  );

  const login = (email: string, password: string) => {
    const modifiedEmail = `${email}@mju.ac.kr`;
    axios
      .post('api/auth/login', {
        email: modifiedEmail,
        password
      })
      .then((response) => {
        console.log(response.data.data);
        const { accessToken, refreshToken } = response.data.data;
        localStorage.setItem('accessToken', accessToken);
        setRefreshToken(refreshToken); // 이 부분 추가
        getUserInfo();
      })
      .catch((error) => {
        console.log('Login error:', error);
        setLoginError('로그인에 실패했습니다. 다시 시도해주세요.'); // 에러 메시지 설정
      });
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
        setUser(response.data.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          // 만료된 액세스 토큰으로 인한 401 Unauthorized 에러
          // 리프레시 토큰으로 새로운 액세스 토큰 발급
          refreshAccessToken();
        } else {
          console.log(accessToken);
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
        const { accessToken, refreshToken } = response.data.data;
        localStorage.setItem('accessToken', accessToken);
        setRefreshToken(refreshToken); // 이 부분 추가
        getUserInfo();
      })
      .catch((error) => {
        console.log('Refresh token도 만료되었습니다. :', error);
        // 리프레시 토큰도 만료된 경우 또는 다른 에러 처리
      });
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setUser(null);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        getUserInfo,
        loginError,
        setLoginError,
        accessToken
      }}>
      {children}
    </AuthContext.Provider>
  );
};
