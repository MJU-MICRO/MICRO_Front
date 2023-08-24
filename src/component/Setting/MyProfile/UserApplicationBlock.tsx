import axios from 'axios';
import { useAuth } from 'contexts/AuthContext';
import { ApprovedGroup } from 'interfaces/ApprovedProps';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import OrganizationInfo from './OrganizationInfo';

const UserApplicationBlock = () => {
  const [appliedGroups, setAppliedGroups] = useState<ApprovedGroup[]>([]);
  const { accessToken } = useAuth();

  useEffect(() => {
    fetchAppliedGroups();
  }, []);

  const fetchAppliedGroups = async () => {
    try {
      const response = await axios.get(
        'https://nolmyong.com/api/application/userList',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );
      const data = response.data.data;

      setAppliedGroups(data);
    } catch (error) {
      console.log('/application/userList api get 실패', error);
    }
  };

  return (
    <Container>
      {appliedGroups.length === 0 ? (
        <NoApplication>지원한 단체가 없어요. 😣 </NoApplication>
      ) : (
        <>
          {appliedGroups.map((group) => (
            <OrganizationInfo group={group} />
          ))}
        </>
      )}
    </Container>
  );
};

export default UserApplicationBlock;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 44.75rem;

  padding-bottom: 1rem;
`;

const NoApplication = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  height: 5rem;
`;
