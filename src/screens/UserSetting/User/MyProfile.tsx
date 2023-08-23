import UserApplicationBlock from 'component/Setting/MyProfile/UserApplicationBlock';
import UserDataBlock from 'component/Setting/MyProfile/UserDataBlock';
import UserLikeBlock from 'component/Setting/MyProfile/UserLIkeBlock';
import UserOrganizationBlock from 'component/Setting/MyProfile/UserOrganizationBlock';
import React from 'react';
import styled from 'styled-components';

const MyProfile = () => {
  // 단체 상세 페이지 연결 필요
  return (
    <Container>
      <UserDataContainer>
        <UserDataBlock />
      </UserDataContainer>
      <RightWrapper>
        <UserOrganizationContainer>
          <UserOrganizationBlock />
        </UserOrganizationContainer>
        <div>
          <UserLikeBlock />
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
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
