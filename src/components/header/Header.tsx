import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Search from './Search';
import applicationIcon from '../assets/Header/application.svg';
import noticeIcon from '../assets/Header/notice.svg';
import Modal from 'components/common/Modal';
import { useAuth } from 'contexts/AuthContext';
import * as Styled from './HeaderStyles';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, loginError } = useAuth();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEmailChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const handleSearchInputChange = () => {
    console.log('hi');
  };

  const handleLogin = () => {
    login(email, password);
    console.log(loginError);
    if (loginError === null) {
      closeModal();
    }
  };

  const modalContent = (
    <>
      <Styled.Wrapper>
        <Styled.LoginBox>
          <Styled.LoginBox>
            <h1>아이디</h1>
            <input
              placeholder='학교 이메일 아이디 입력'
              value={email}
              onChange={handleEmailChange}
            />
            <div>@mju.ac.kr</div>
          </Styled.LoginBox>
          <Styled.LoginBox>
            <h1>비밀번호</h1>
            <input
              placeholder='비밀번호 입력'
              type='password'
              value={password}
              onChange={handlePasswordChange}
            />
          </Styled.LoginBox>
          {loginError && <Styled.ErrorBox>{loginError}</Styled.ErrorBox>}
        </Styled.LoginBox>

        <Styled.Lines />
        <Styled.ButtonBox>
          <Styled.LoginButton onClick={handleLogin}>로그인</Styled.LoginButton>
        </Styled.ButtonBox>
        <Styled.JoinBox>
          <h3>아직 회원이 아니신가요?</h3>
          <h4>가입하기</h4>
        </Styled.JoinBox>
      </Styled.Wrapper>
    </>
  );

  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderUl>
        <Styled.HeaderLeft>
          <li>
            <NavLink to='/'>놀명뭐하니</NavLink>
          </li>
          <li>
            <Search
              placeholder='놀명뭐하니 검색하기'
              onSearch={handleSearchInputChange}
            />
          </li>
        </Styled.HeaderLeft>
        <Styled.HeaderLink>
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
        </Styled.HeaderLink>
        <Styled.Line></Styled.Line>
        <Styled.HeaderUser>
          {loginError === null ? (
            <>
              <li>
                <a className='login' onClick={openModal}>
                  로그인
                </a>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => 'signUp' + (isActive ? 'a' : '')}
                  to='/signUp'>
                  회원가입
                </NavLink>
              </li>
            </>
          ) : (
            '시발'
          )}
        </Styled.HeaderUser>
      </Styled.HeaderUl>
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          width={'30.1875rem'}
          height={'fit-content'}
          header={'놀명뭐하니 로그인'}
          children={modalContent}
          description={
            '놀명뭐하니는 명지대학교 동아리, 학생 단체, 소모임을 위한  공간이에요.'
          }
        />
      )}
    </Styled.HeaderWrapper>
  );
};

export default Header;
