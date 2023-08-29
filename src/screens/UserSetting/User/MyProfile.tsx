import UserApplicationBlock from 'component/Setting/MyProfile/UserApplicationBlock';
import UserDataBlock from 'component/Setting/MyProfile/UserDataBlock';
import UserLikeBlock from 'component/Setting/MyProfile/UserLIkeBlock';
import UserOrganizationBlock from 'component/Setting/MyProfile/UserOrganizationBlock';
import React, { useState } from 'react';
import styled from 'styled-components';

const MyProfile = () => {
  const [selectedMenu, setSelectedMenu] = useState('liked');

  return (
    <Container>
      <UserDataContainer>
        <UserDataBlock />
      </UserDataContainer>
      <RightWrapper>
        <UserOrganizationContainer>
          <UserOrganizationBlock />
        </UserOrganizationContainer>
        <MenuButtons>
          <MenuButton
            className={selectedMenu === 'liked' ? 'active' : ''}
            onClick={() => setSelectedMenu('liked')}>
            찜한 단체
          </MenuButton>
          <MenuButton
            className={selectedMenu === 'applied' ? 'active' : ''}
            onClick={() => setSelectedMenu('applied')}>
            지원한 단체
          </MenuButton>
        </MenuButtons>
        <div>
          {selectedMenu === 'liked' ? (
            <UserLikeBlock />
          ) : (
            <UserApplicationBlock />
          )}
        </div>
      </RightWrapper>
    </Container>
  );
};

export default MyProfile;

const Container = styled.div`
  margin-top: 5.62rem;
  display: flex;
  justify-content: center;
`;

const UserDataContainer = styled.div`
  margin-right: 5.5rem;
`;
const UserOrganizationContainer = styled.div`
  margin-bottom: 3rem;
  width: 100%;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 40.4rem;
`;
const MenuButtons = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: flex-start;

  width: 100%;
`;

const MenuButton = styled.button`
  width: 100%;

  padding-bottom: 0.7rem;

  border: none;
  border-bottom: 3px solid
    ${(props) => (props.className === 'active' ? '#008FD5' : 'rgba(0,0,0,0.3)')};
  background-color: transparent;
  color: ${(props) =>
    props.className === 'active' ? '#008FD5' : 'rgba(0,0,0,0.3)'};
  font-family: GmarketSansMedium;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &.active {
    color: #008fd5;
  }
`;
