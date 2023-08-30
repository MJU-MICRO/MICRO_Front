import axios from 'axios';

import { RecruitmentsProps } from 'interfaces/RecruitmentsProps';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Post from './Post';

interface DefaultSettingProps {
  groupId: number;
}
const OrganizationPostSetting = ({ groupId }: DefaultSettingProps) => {
  const [recruitmentData, setRecruitmentData] = useState<RecruitmentsProps[]>(
    []
  );

  useEffect(() => {
    const fetchRecruitmentData = async () => {
      try {
        const response = await axios.get('https://nolmyong.com/recruitments');
        const matchingRecruitments = response.data.data.filter(
          (recruitment: RecruitmentsProps) => recruitment.groupId === groupId
        );
        setRecruitmentData(matchingRecruitments);
      } catch (error) {
        console.log('Error fetching recruitment data:', error);
      }
    };

    fetchRecruitmentData();
  }, [groupId]);

  return (
    <Container>
      <Header>단체 모집 게시글</Header>
      {recruitmentData.length === 0 ? (
        <NoData>나의 단체 모집 게시글이 없어요 😥</NoData>
      ) : (
        <Post recruitmentData={recruitmentData} />
      )}
    </Container>
  );
};

export default OrganizationPostSetting;

const Container = styled.div``;
const Section = styled.div``;
const Header = styled.div`
  color: rgba(0, 0, 0, 0.7);
  font-family: Gmarket Sans TTF;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 2rem;
`;
const Status = styled.div``;
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
