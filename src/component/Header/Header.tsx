import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Search from './Search';
import applicationIcon from '../assets/Header/application.svg';
import noticeIcon from '../assets/Header/notice.svg';

const Header = () => {
  const handleSearchInputChange = () => {
    console.log('hi');
  };

  return (
    <HeaderWrapper>
      <HeaderUl>
        <HeaderLeft>
          <li>
            <NavLink to='/'>놀명뭐하니</NavLink>
          </li>
          <li>
            <Search
              placeholder='놀명뭐하니 검색하기'
              onSearch={handleSearchInputChange}
            />
          </li>
        </HeaderLeft>
        <HeaderLink>
          <li>
            <NavLink
              className={({ isActive }) => 'nav-link' + (isActive ? 'a' : '')}
              to='/recruitmentList'>
              모집 공고
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => 'nav-link' + (isActive ? 'a' : '')}
              to='/organizationList'>
              단체 리스트
            </NavLink>
          </li>
        </HeaderLink>
        <Line></Line>
        <HeaderUser>
          <li>
            <NavLink
              className={({ isActive }) => 'login' + (isActive ? 'a' : '')}
              to='/signUp'>
              로그인
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => 'signUp' + (isActive ? 'a' : '')}
              to='/signUp'>
              회원가입
            </NavLink>
          </li>
        </HeaderUser>
      </HeaderUl>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  a:link,
  a:visited,
  a:hover {
    text-decoration: none;
  }
  width: 100%;
  height: 3.25rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(3.5px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1000;
  position: fixed;
  top: 0;
`;

const HeaderUl = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  margin-right: 35.56rem;

  li:first-child {
    :link,
    :visited,
    :hover {
      color: black;
    }
    padding-right: 1.94rem;
  }
`;

const HeaderLink = styled.div`
  display: flex;
  align-items: center;

  li:first-child {
    margin-right: 3.19rem;
  }

  .nav-link {
    color: rgba(0, 0, 0, 0.3);
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .nav-linka,
  .nav-link:hover {
    color: rgba(0, 143, 213, 0.8);
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-bottom: 0.89rem;
    border-bottom: 0.16rem solid #008fd5;
    transition: color 0.1s ease-out;
  }
`;

const HeaderUser = styled.div`
  display: flex;
  align-items: center;

  .login {
    margin-right: 1.57rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: #fff;
    color: rgba(0, 0, 0, 0.8);
  }

  .login:hover {
    background: rgba(237, 237, 237, 0.5);
    transition: all 0.2s ease-in;
  }

  .signUp {
    color: #008fd5;
    background: rgba(0, 143, 213, 0.05);
  }

  .signUp:hover {
    background: rgba(0, 143, 213, 0.05);
    box-shadow: 0px 0px 20px 0px rgba(0, 143, 213, 0.25);
    transition: all 0.2s ease-in;
  }

  .login,
  .signUp {
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 0.9625rem; /* 118.462% */
    border-radius: 0.9375rem;
    padding: 0.55rem 1.25rem;
  }

  .logina {
  }
`;

const Line = styled.div`
  margin-left: 3.2rem;
  margin-right: 3.2rem;
  width: 0.0625rem;
  height: 1.875rem;
  background: #00000024;
  border-radius: 2rem;
`;
