import { useAuth } from 'contexts/AuthContext';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import myProfile from '../../assets/Header/myProfile.svg';
import setting from '../../assets/Header/setting.svg';
import organizationSetting from '../../assets/Header/organizationSetting.svg';
import logoutImg from '../../assets/Header/Logout.svg';

const ProfileMenu = () => {
  const { user, logout } = useAuth();

  const logoutHandler = () => {
    logout();
  };

  return (
    <Container>
      <UserContainer>
        <UserImg src={user?.profileImageUrl} alt='UserImg' />
        <UserContentContainer>
          <UserName>{user?.name}</UserName>
          <UserEmail>@{user?.email.split('@')[0]}</UserEmail>
        </UserContentContainer>
      </UserContainer>
      <MenuContainer>
        <NavLink to='/myProfile'>
          <Menu>
            <MenuImg src={myProfile} alt='MenuImg' />
            <div>내 프로필</div>
          </Menu>
        </NavLink>

        <NavLink to='/setting'>
          <Menu>
            <MenuImg src={setting} alt='MenuImg' />
            <div>설정</div>
          </Menu>
        </NavLink>

        <NavLink to='/organizationSetting'>
          <Menu>
            <MenuImg src={organizationSetting} alt='MenuImg' />
            <div>단체 설정</div>
          </Menu>
        </NavLink>

        <Menu onClick={logoutHandler}>
          <MenuImg src={logoutImg} alt='MenuImg' />
          <div>로그아웃</div>
        </Menu>
      </MenuContainer>
    </Container>
  );
};

export default ProfileMenu;

const Container = styled.div`
  position: absolute;
  top: 4rem;

  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;

  justify-content: center;
  width: 10.125rem;
  height: fit-content;
  border-radius: 0.625rem;
  border: 0px solid rgba(0, 0, 0, 0);

  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
`;
const MenuContainer = styled.div`
  margin-top: 1rem;
`;
const Menu = styled.div`
  color: rgba(0, 0, 0, 1);
  font-family: Gmarket Sans TTF;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  border-radius: 0.5rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  width: 100%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease-in-out;
  }
`;
const MenuImg = styled.img`
  width: 0.9375rem;
  height: 0.9375rem;
`;
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const UserImg = styled.img`
  width: 2.8125rem;
  height: 2.8125rem;
  border-radius: 50%;
  object-fit: cover;
  color: rgba(0, 0, 0, 1);
  margin-right: 0.6rem;
`;
const UserContentContainer = styled.div``;
const UserName = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-family: Gmarket Sans TTF;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 0.5rem;
`;
const UserEmail = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-family: Gmarket Sans TTF;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
