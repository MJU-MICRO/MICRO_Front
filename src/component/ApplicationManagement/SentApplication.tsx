import axios from 'axios';
import ClubRecruitmentCard from 'component/recruitment/ClubRecruitmentCard';
import { useAuth } from 'contexts/AuthContext';
import { UserSentApplicationProps } from 'interfaces/UserSentApplicationProps';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SentApplication = () => {
  const { accessToken } = useAuth();
  const [applicationList, setApplicationList] = useState<
    UserSentApplicationProps[]
  >([]);

  useEffect(() => {
    axios
      .get('https://nolmyong.com/api/application/userList', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then((response) => {
        const applicationData = response.data.data;
        setApplicationList(applicationData);
        console.log(applicationList);
      })
      .catch((error) => {
        console.log('application/userList 호출 실패 ', error);
      });
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
