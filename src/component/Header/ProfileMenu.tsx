import { useAuth } from 'contexts/AuthContext';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import myProfile from '../../assets/Header/myProfile.svg';
import setting from '../../assets/Header/setting.svg';
import organizationSetting from '../../assets/Header/organizationSetting.svg';
import logoutImg from '../../assets/Header/Logout.svg';

import Modal from 'component/Common/Modal';
import { useApprovedGroups } from 'contexts/GroupContext';
import { ApprovedGroup } from 'interfaces/ApprovedProps';

const ProfileMenu = () => {
  const [isOrganizationModalOpen, setIsOrganizationModalOpen] = useState(false);
  const { user, logout } = useAuth();

  const logoutHandler = () => {
    logout();
  };
  const openOrganizationModal = () => {
    setIsOrganizationModalOpen(true);
  };

  const closeOrganizationModal = () => {
    setIsOrganizationModalOpen(false);
  };

  const OrganizationSelectModal = ({
    closeModal
  }: {
    closeModal: () => void;
  }) => {
    const approvedGroups = useApprovedGroups();
    const { user } = useAuth();
    const matchingGroup = approvedGroups.find(
      (group: ApprovedGroup) => group.presidentId === user?.id
    );
    const history = useNavigate();

    const handleContainerClick = () => {
      history(`/organizationSetting/${matchingGroup?.id}`);
      closeModal(); // Close the modal
    };

    const children = matchingGroup ? (
      <ModalContainer onClick={handleContainerClick}>
        <img src={matchingGroup?.logoImageUrl} alt='groupLogo' />
        <div>{matchingGroup?.groupName}</div>
      </ModalContainer>
    ) : (
      <div>아직 나의 단체가 없어요. 🤗</div>
    );

    return (
      <Modal
        closeModal={closeModal}
        width={'fit-content'}
        height={'20rem'}
        header={'나의 단체 선택하기'}
        description={''}
        children={children}
      />
    );
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

        <Menu onClick={openOrganizationModal}>
          <MenuImg src={organizationSetting} alt='MenuImg' />
          <div>단체 설정</div>
        </Menu>
        {isOrganizationModalOpen && (
          <OrganizationSelectModal closeModal={closeOrganizationModal} />
        )}

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
  width: 1.3rem;
  height: 1.3rem;
  margin-right: 1rem;
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
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 2rem 10rem;
  img {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;
