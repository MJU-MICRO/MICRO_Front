import { useAuth } from 'contexts/AuthContext';
import React from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import styled from 'styled-components';
import editImg from '../../../assets/editImg.svg';
import defaultImg from '../../../assets/userDefaultImg.svg';

const UserDataBlock = () => {
  const { user, getUserInfo } = useAuth();
  console.log(user);
  const navigate = useNavigate();

  const EditClickHandler = () => {
    navigate('/Setting');
  };

  return (
    <Container>
      <EditButton onClick={EditClickHandler}>
        <img src={editImg} alt='edit' />
      </EditButton>
      <UserProfileContainer>
        <UserProfileImg>
          <img
            src={user?.profileImageUrl ? UserProfileImg : defaultImg}
            alt='userImg'
          />
        </UserProfileImg>
        <UserName>{user?.name}</UserName>
        <UserEmail>{user?.email}</UserEmail>
      </UserProfileContainer>
      <UserInfoContainer>
        <Info>
          <InfoHeader>학과</InfoHeader>
          <InfoContent>{user?.major}</InfoContent>
        </Info>
        <Info>
          <InfoHeader>한 줄 소개</InfoHeader>
          <InfoContent>{user?.introduction}</InfoContent>
        </Info>
      </UserInfoContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 20rem;
  padding-bottom: 1.5rem;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 20px 3px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const EditButton = styled.div`
  margin-left: auto;
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 0.3rem;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
  }
`;

const UserProfileContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
`;
const UserProfileImg = styled.div`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 1.5rem;
`;
const UserName = styled.div`
  color: black;
  font-family: GmarketSansMedium;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 0.3rem;
`;
const UserEmail = styled.div`
  color: rgba(0, 0, 0, 0.5);

  font-family: Gmarket Sans TTF;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const UserInfoContainer = styled.div``;

const Info = styled.div`
  width: 14.625rem;
  fill: #fff;
  border: 0.5px solid #c9c9c9;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 0.5rem;
`;
const InfoHeader = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-family: GmarketSansMedium;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 0.5rem;
`;
const InfoContent = styled.div`
  color: #000;

  font-family: GmarketSansLight;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export default UserDataBlock;
