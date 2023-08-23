import axios from 'axios';
import { useAuth } from 'contexts/AuthContext';
import { ApprovedGroup } from 'interfaces/ApprovedProps';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import img from '../../../assets/img.svg';
import StatusBlock from '../StatusBlock';
import OrganizationInfo from './OrganizationInfo';

const UserLikeBlock = () => {
  const [likedGroups, setLikedGroups] = useState<ApprovedGroup[]>([]);
  const { accessToken } = useAuth();

  useEffect(() => {
    fetchLikedGroups();
  }, []);

  const fetchLikedGroups = async () => {
    try {
      const response = await axios.get(
        'https://nolmyong.com/api/bookmark/groups',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );
      const data = response.data.data;

      setLikedGroups(data);
    } catch (error) {
      console.log('bookmark/groups api get 실패', error);
    }
  };

  return (
    <Container>
      {likedGroups.length === 0 ? (
        <NoLike>찜한 단체가 없어요. 🤔</NoLike>
      ) : (
        <>
          {likedGroups.map((group) => (
            <OrganizationInfo group={group} />
          ))}
        </>
      )}
    </Container>
  );
};

export default UserLikeBlock;

const NoLike = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  height: 5rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 44.75rem;

  padding-bottom: 1rem;
`;
