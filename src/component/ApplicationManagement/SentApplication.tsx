import axios from 'axios';
import ClubRecruitmentCard from 'component/recruitment/ClubRecruitmentCard';
import { useAuth } from 'contexts/AuthContext';
import MyApplicationListProps from 'interfaces/MyApplicationListProps';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RecruitmentProps } from '../recruitment/RecruitmentProps';

const SentApplication = () => {
  const { accessToken } = useAuth();
  const [applicationList, setApplicationList] = useState<
    MyApplicationListProps[]
  >([]);

  useEffect(() => {
    const fetchApplicationList = async () => {
      try {
        const response = await axios.get(
          'https://nolmyong.com/api/application/userList',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        );

        const applicationData = response.data.data;
        setApplicationList(applicationData);
      } catch (error) {
        console.log('Error fetching application list:', error);
      }
    };

    fetchApplicationList();
  }, [accessToken]);

  return (
    <div>
      <Header>보낸 지원서</Header>
    </div>
  );
};

export default SentApplication;

const Header = styled.div`
  color: rgba(0, 0, 0, 0.7);
  font-family: Gmarket Sans TTF;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
