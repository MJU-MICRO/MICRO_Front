import UserApplicationBlock from 'component/Setting/MyProfile/UserApplicationBlock';
import UserDataBlock from 'component/Setting/MyProfile/UserDataBlock';
import UserLikeBlock from 'component/Setting/MyProfile/UserDataBlock';
import UserOrganizationBlock from 'component/Setting/MyProfile/UserOrganizationBlock';
import React from 'react';
import styled from 'styled-components';

const MyProfile = () => {
  return (
    <Container>
      <UserDataBlock />
      <UserOrganizationBlock />
      <UserLikeBlock />
    </Container>
  );
};

export default MyProfile;

const Container = styled.div``;
