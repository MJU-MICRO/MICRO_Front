import axios from 'axios';
import { useAuth } from 'contexts/AuthContext';
import AppliedGroupProps from 'interfaces/AppliedGroupProps';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import GroupComponent from './GroupComponent';

const UserApplicationBlock = () => {
  const [groups, setGroups] = useState<AppliedGroupProps[]>([]);
  const { accessToken } = useAuth();

  useEffect(() => {
    axios
      .get('https://nolmyong.com/api/application/userList', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then((response) => {
        if (response.data && response.data.data) {
          setGroups(response.data.data);
        }
      })
      .catch((error) => {
        console.log('application/userList api 요청 실패', error);
      });
  }, []);

  return (
    <>
      {groups.length === 0 ? (
        <NoApplication> 지원한 단체가 없어요 😣 </NoApplication>
      ) : (
        // groups.map((group) => <GroupComponent key={group.id} group={group} />)
        groups.map((group) => (
          <>
            {group.answers} {group.passStatus}
          </>
        ))
      )}
    </>
  );
};

export default UserApplicationBlock;

const NoApplication = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  margin-top: 10rem;
`;
