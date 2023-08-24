import axios from 'axios';
import ClubRecruitmentCard from 'component/recruitment/ClubRecruitmentCard';
import { useAuth } from 'contexts/AuthContext';
import { useApprovedGroups } from 'contexts/GroupContext';
import { ApprovedGroup } from 'interfaces/ApprovedProps';
import MyApplicationListProps from 'interfaces/MyApplicationListProps';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RecruitmentProps } from '../recruitment/RecruitmentProps';

const ReceivedApplication = () => {
  const { user } = useAuth();
  const approvedGroups = useApprovedGroups();

  const userOrganizations = approvedGroups.filter(
    (group: ApprovedGroup) => group.presidentId === user?.id
  );

  return (
    <Container>
      <Header>받은 지원서</Header>
      <Des>단체 선택</Des>
      <GroupWrapper>
        {userOrganizations.map((group) => (
          <Group key={group.id}>
            <img src={group.logoImageUrl} alt={group.groupName} />
            <Name>{group.groupName}</Name>
            <Division>{group.subCategory}</Division>
          </Group>
        ))}
      </GroupWrapper>
      <Line />
    </Container>
  );
};

export default ReceivedApplication;

const Container = styled.div`
  width: 100%;
`;
const Header = styled.div`
  color: rgba(0, 0, 0, 0.7);
  font-family: Gmarket Sans TTF;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Des = styled.div`
  color: rgba(0, 0, 0, 0.8);
  leading-trim: both;
  text-edge: cap;
  font-family: Gmarket Sans TTF;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;
const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
`;
const Group = styled.div`
  cursor: pointer;
  img {
    width: 7.5rem;
    height: 6.64631rem;
    border-radius: 0.625rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
`;

const Name = styled.div`
  color: rgba(0, 0, 0, 0.8);
  leading-trim: both;
  text-edge: cap;
  font-family: Gmarket Sans TTF;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Division = styled.div`
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: Gmarket Sans TTF;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Line = styled.div`
  margin: 2rem 0;
  width: 36.625rem;
  height: 0.01875rem;
  background: rgba(0, 0, 0, 0.2);
`;
