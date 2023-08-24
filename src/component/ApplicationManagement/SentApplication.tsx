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
      {/* {applicationList.map((application) => (
        <ClubRecruitmentCard
          key={application.id}
          name={application.name}
          imageUrl={application.imageUrl}
          establishedYear={application.establishedYear}
          numberOfMember={application.numberOfMember}
          introduction={application.introduction}
          relationMajor={application.relationMajor}
          relatedTag={application.relatedTag}
          activityTitle={application.activityTitle}
          activityContent={application.activityContent}
          isRecruit={application.isRecruit}
          isApprove={application.isApprove}
          campus={application.campus}
          largeCategory={application.largeCategory}
          mediumCategory={application.mediumCategory}
          smallCategory={application.smallCategory}
          subCategory={application.subCategory}
          presidentEmail={application.presidentEmail}
          recruitment={application.recruitment}
          id={application.id.toString()}
        />
      ))} */}
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
