import { useAuth } from 'contexts/AuthContext';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import myProfile from '../../assets/header/myProfile.svg';
import setting from '../../assets/header/setting.svg';
import organizationSetting from '../../assets/header/organizationSetting.svg';
import logout from '../../assets/header/Logout.svg';

const ProfileMenu = () => {
  const { user } = useAuth();
  return (
    <Container>
      <UserContainer>
        <UserImg src={user?.profileImageUrl} alt='UserImg' />
        <UserContentContainer>
          <UserName>{user?.name}</UserName>
          <UserEmail>{user?.email}</UserEmail>
        </UserContentContainer>
      </UserContainer>
      <MenuContainer>
        <Menu>
          <NavLink to='/myProfile'>
            <MenuImg src={myProfile} alt='MenuImg' />내 프로필
          </NavLink>
        </Menu>
        <Menu>
          <NavLink to='/setting'>
            <MenuImg src={setting} alt='MenuImg' />
            설정
          </NavLink>
        </Menu>
        <Menu>
          <NavLink to='/organizationSetting'>
            <MenuImg src={organizationSetting} alt='MenuImg' />
            단체 설정
          </NavLink>
        </Menu>
        <Menu>
          <MenuImg src={logout} alt='MenuImg' />
          로그아웃
        </Menu>
      </MenuContainer>
    </Container>
  );
};

export default ProfileMenu;

const Container = styled.div``;
const MenuContainer = styled.div``;
const Menu = styled.div``;
const MenuImg = styled.img``;
const UserContainer = styled.div``;
const UserImg = styled.img``;
const UserContentContainer = styled.div``;
const UserName = styled.div``;
const UserEmail = styled.div``;
