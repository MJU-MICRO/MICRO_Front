import { useAuth } from 'contexts/AuthContext';
import React, { useEffect, useState } from 'react';
import GroupComponent from './GroupComponent';
import { Group } from 'interfaces/LikeGroupProps';
import axios from 'axios';
import styled from 'styled-components';

const UserLikeBlock = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const { accessToken } = useAuth();

  useEffect(() => {
    axios
      .get('https://nolmyong.com/api/bookmark/groups', {
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
        console.log('bookmark/groups api 요청 실패', error);
      });
  }, []);

  return (
    <>
      {groups.length === 0 ? (
        <NoGroupContainer> 찜한 단체가 없어요 😊 </NoGroupContainer>
      ) : (
        groups.map((group) => <GroupComponent key={group.id} group={group} />)
      )}
    </>
  );
};

export default UserLikeBlock;

const NoGroupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  margin-top: 10rem;
`;
