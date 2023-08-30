import axios from 'axios';
import ClubRecruitmentCard from '../../../component/recruitment/ClubRecruitmentCard';
import { useAuth } from '../../../contexts/AuthContext';
import { useApprovedGroups } from '../../../contexts/GroupContext';
import { ApprovedGroup } from '../../../interfaces/ApprovedGroupProps';
import userDefaultImg from '../../../assets/userDefaultImg.svg';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { RecruitmentProps } from '../../recruitment/RecruitmentProps';
import GroupRecruitment from './GroupRecruitment';

interface GroupProps {
  isselected: boolean;
}

const ReceivedApplication = () => {
  const { user } = useAuth();
  const approvedGroups = useApprovedGroups();
  const [selectedGroup, setSelectedGroup] = useState<ApprovedGroup | null>(
    null
  );
  const userOrganizations = approvedGroups.filter(
    (group: ApprovedGroup) => group.presidentId === user?.id
  );

  return (
    <Container>
      <Header>받은 지원서</Header>
      <Des>단체 선택</Des>
      {userOrganizations.length === 0 && <NoData>나의 단체가 없어요 😉</NoData>}
      <GroupWrapper>
        {userOrganizations.map((group) => (
          <>
            <Group
              key={group.id}
              onClick={() => setSelectedGroup(group)}
              isselected={selectedGroup === group}>
              <img
                src={group.logoImageUrl || userDefaultImg}
                alt={group.groupName}
              />
              <Name>{group.groupName}</Name>
              <Division>{group.subCategory}</Division>
            </Group>
          </>
        ))}
      </GroupWrapper>
      <Line />
      {selectedGroup && (
        <GroupRecruitmentWrapper>
          <Des>모집 공고 선택</Des>
          <GroupRecruitment groupId={selectedGroup.id} />
        </GroupRecruitmentWrapper>
      )}
    </Container>
  );
};

export default ReceivedApplication;

const Container = styled.div`
  width: 100%;
`;
const NoData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  color: rgba(0, 0, 0, 0.7);
  font-family: Gmarket Sans TTF;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
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
  font-family: Gmarket Sans TTF;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const GroupWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Group = styled.div<GroupProps>`
  cursor: pointer;
  img {
    width: 7.5rem;
    height: 6.64631rem;
    border-radius: 0.625rem;
    object-fit: contain;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  border-radius: 10px;
  padding: 1rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease-in-out;
  }

  ${({ isselected }) =>
    isselected &&
    css`
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    `}
`;

const Name = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-family: Gmarket Sans TTF;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const Division = styled.div`
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
  font-family: Gmarket Sans TTF;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Line = styled.div`
  margin: 2rem 0;
  width: 100%;
  height: 0.01875rem;
  background: rgba(0, 0, 0, 0.2);
`;

const GroupRecruitmentWrapper = styled.div`
  width: 100%;
`;
