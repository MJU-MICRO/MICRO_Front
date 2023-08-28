import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Search from './Search';
import application from '../../assets/Header/application.svg';
import message from '../../assets/Header/message.svg';
import recruitmentImg from '../../assets/Header/recruitmentImg.svg';
import organizationImg from '../../assets/Header/organizationImg.svg';
import arrowRight from '../../assets/Header/arrow-right.svg';
import Modal from 'component/Common/Modal';
import { useAuth } from 'contexts/AuthContext';
import * as Styled from './HeaderStyles';
import newPost from '../../assets/Header/newPost.svg';
import ProfileMenu from './ProfileMenu';
import logo from '../../assets/logo.svg';
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ApplicationHovered, setApplicationHovered] = useState(false);
  const [MessageHovered, setMessageHovered] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { user, login, loginError, getUserInfo, accessToken, loading } =
    useAuth();

  const openPostModal = () => {
    setIsPostModalOpen(true);
  };

  const closePostModal = () => {
    setIsPostModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleProfileMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleEmailChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSearchInputChange = () => {
    console.log('hi');
  };
  const StyledNavLink = styled(NavLink)`
    .logo-image {
      width: 120px;
      height: auto;
      margin-top: 5px;
    }
  `;
  const handleLogin = async () => {
    try {
      await login(email, password);
      if (localStorage.getItem('accessToken') !== null) {
        console.log('유저', user);
        closeModal();
      }
    } catch (error) {
      console.log('로그인 에러', loginError);
      console.log('Login error', error);
    }
  };

  const postModalContent = (
    <>
      <Styled.PostModalContentWrapper>
        <Styled.ContentWrapper>
          <div>
            <Styled.PostImg src={recruitmentImg} alt='recruitment' />
            <Styled.PostText>모집 공고 올리기</Styled.PostText>
          </div>
          <Styled.LinkImg src={arrowRight} alt='arrowRight' />
        </Styled.ContentWrapper>
        <Styled.ContentWrapper>
          <div>
            <Styled.PostImg src={organizationImg} alt='organization' />
            <Styled.PostText>단체 등록하기</Styled.PostText>
          </div>
          <Styled.LinkImg src={arrowRight} alt='arrowRight' />
        </Styled.ContentWrapper>
      </Styled.PostModalContentWrapper>
    </>
  );

  const modalContent = (
    <>
      <Styled.ModalWrapper>
        <Styled.LoginBoxWrapper>
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
        </Styled.LoginBoxWrapper>

        <Styled.Lines />
        <Styled.ButtonBox>
          <Styled.LoginButton onClick={handleLogin}>로그인</Styled.LoginButton>
        </Styled.ButtonBox>
        <Styled.JoinBox>
          <h3>아직 회원이 아니신가요?</h3>
          <h4>가입하기</h4>
        </Styled.JoinBox>
      </Styled.ModalWrapper>
    </>
  );

  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderUl>
        <Styled.HeaderLeft>
          <li>
            <StyledNavLink to='/'>
              <img src={logo} alt='Logo' className='logo-image' />
            </StyledNavLink>
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
          {user !== null ? (
            <>
              <Styled.UserWrapper>
                <li>
                  <NavLink
                    to='/applicationManagement'
                    onMouseEnter={() => setApplicationHovered(true)}
                    onMouseLeave={() => setApplicationHovered(false)}>
                    <Styled.IconWrapper>
                      <img src={application} alt='application' />
                    </Styled.IconWrapper>
                  </NavLink>
                  <Styled.IconHover1
                    style={{
                      visibility: ApplicationHovered ? 'visible' : 'hidden'
                    }}>
                    모든 지원서 관리하기
                  </Styled.IconHover1>
                </li>
                <li>
                  <NavLink
                    to='/message'
                    onMouseEnter={() => setMessageHovered(true)}
                    onMouseLeave={() => setMessageHovered(false)}>
                    <Styled.IconWrapper>
                      <img src={message} alt='message' />
                    </Styled.IconWrapper>
                  </NavLink>
                  <Styled.IconHover2
                    style={{
                      visibility: MessageHovered ? 'visible' : 'hidden'
                    }}>
                    찜한 단체 모집 공고 보기
                  </Styled.IconHover2>
                </li>
                <li>
                  <Styled.PostWrapper onClick={openPostModal}>
                    <div>
                      <img src={newPost} alt='newPost' />
                    </div>
                    <h2>새 포스트</h2>
                  </Styled.PostWrapper>
                </li>
                <li>
                  <Styled.UserProfileImg
                    src={user.profileImageUrl}
                    alt='profile'
                    onClick={toggleProfileMenu}
                  />
                  {isProfileMenuOpen && <ProfileMenu />}
                </li>
              </Styled.UserWrapper>
            </>
          ) : (
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
            '놀명뭐하니는 명지대학교 동아리, 학생 단체, 소모임을 위한 공간이에요.'
          }
        />
      )}
      {isPostModalOpen && (
        <Modal
          closeModal={closePostModal}
          width={'30.1875rem'}
          height={'fit-content'}
          header={'어떤 이야기를 나누고 싶나요?'}
          children={postModalContent}
          description={''}
        />
      )}
    </Styled.HeaderWrapper>
  );
};

export default Header;
