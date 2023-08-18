import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import UserProps from '../interfaces/UserProps';

interface AuthContextProps {
  user: UserProps | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  getAccessToken: () => string | null;
  getUserInfo: () => void;
  loginError: string | null;
  setLoginError: (message: string) => void;
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

  const login = (email: string, password: string) => {
    // Adding @mju.ac.kr to the email
    const modifiedEmail = `${email}@mju.ac.kr`;
    axios
      .post('api/auth/login', {
        email: modifiedEmail,
        password
      })
      .then((response) => {
        const { accessToken } = response.data.data;
        localStorage.setItem('accessToken', accessToken);
      })
      .catch((error) => {
        console.error('Login error:', error);
        setLoginError('로그인에 실패했습니다. 다시 시도해주세요.'); // 에러 메시지 설정
      });
  };

  const getAccessToken = () => localStorage.getItem('accessToken');

  const getUserInfo = () => {
    const accessToken = getAccessToken();
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
        console.error('Fetch user info error:', error);
      });
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setUser(null);
  };

  useEffect(() => {
    getUserInfo();
    console.log(user);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        getAccessToken,
        getUserInfo,
        loginError,
        setLoginError
      }}>
      {children}
    </AuthContext.Provider>
  );
};
