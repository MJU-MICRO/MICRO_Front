import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Search from './Search';
import application from '../../assets/Header/application.svg';
import message from '../../assets/Header/message.svg';
import Modal from 'component/Common/Modal';
import { useAuth } from 'contexts/AuthContext';
import * as Styled from './HeaderStyles';
import newPost from '../../assets/Header/newPost.svg';
import ProfileMenu from './ProfileMenu';
import logo from '../../assets/logo.svg';
import LoginModalContent from './LoginModalContent';
import PostModalContent from './PostModalContent';

import MyOrganization from '../Setting/MyProfile/MyOrganization';
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ApplicationHovered, setApplicationHovered] = useState(false);
  const [MessageHovered, setMessageHovered] = useState(false);
  const { user, login, loginError } = useAuth();
  const [isOrganizationContent, setIsOrganizationContent] = useState(false);

  const openPostModal = () => {
    setIsPostModalOpen(true);
    setIsOrganizationContent(false); // Set to false when opening the modal
  };

  const openOrganizationModal = () => {
    setIsPostModalOpen(true);
    setIsOrganizationContent(true); // Set to true when opening the modal
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

  const handleLogin = async () => {
    try {
      await login(email, password);
      if (localStorage.getItem('accessToken') !== null) {
        closeModal();
      }
    } catch (error) {
      console.log('로그인 에러', loginError);
      console.log('Login error', error);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isProfileMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isProfileMenuOpen]);

  const modalContent = (
    <LoginModalContent
      email={email}
      password={password}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      loginError={loginError}
      handleLogin={handleLogin}
    />
  );

  const postModalContent = (
    <PostModalContent openOrganizationModal={openOrganizationModal} />
  );

  const organizationModalContent = (
    <>
      <Styled.PostModalContentWrapper>
        <MyOrganization />
      </Styled.PostModalContentWrapper>
    </>
  );

  return (
    <Styled.HeaderWrapper ref={headerRef}>
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
          header={
            isOrganizationContent ? '단체 선택' : '어떤 이야기를 나누고 싶나요?'
          }
          children={
            isOrganizationContent ? organizationModalContent : postModalContent
          }
          description={''}
        />
      )}
    </Styled.HeaderWrapper>
  );
};

export default Header;

const StyledNavLink = styled(NavLink)`
  .logo-image {
    width: 120px;
    height: auto;
    margin-top: 5px;
  }
`;
