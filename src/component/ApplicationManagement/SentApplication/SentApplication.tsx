import axios from 'axios';
import ClubRecruitmentCard from 'component/recruitment/ClubRecruitmentCard';
import GroupComponent from 'component/Setting/MyProfile/GroupComponent';
import { useAuth } from 'contexts/AuthContext';
import { GroupDetail } from 'interfaces/GroupDetailProps';
import { RecruitmentsProps } from 'interfaces/RecruitmentsProps';
import { UserSentApplicationProps } from 'interfaces/UserSentApplicationProps';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchGroups } from '../Util/GroupUtil';
import { fetchFilteredRecruitments } from '../Util/RecruitmentUtil';
import GroupApplicationComponent from './GroupApplicationComponent';

interface GroupApplicationData {
  group: GroupDetail;
  applications: {
    recruitment: RecruitmentsProps;
    application: UserSentApplicationProps | undefined;
  }[];
}

const SentApplication = () => {
  const { accessToken } = useAuth();
  const [applicationList, setApplicationList] = useState<
    UserSentApplicationProps[]
  >([]);
  const [filteredRecruitments, setFilteredRecruitments] = useState<
    RecruitmentsProps[]
  >([]);
  const [filteredGroups, setFilteredGroups] = useState<GroupDetail[]>([]);

  // 사용자 지원서 목록 가져오기
  const getUserApplicationList = () => {
    axios
      .get('https://nolmyong.com/api/application/userList', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then((response) => {
        const applicationData = response.data.data;
        setApplicationList(applicationData);
      })
      .catch((error) => {
        console.log('application/userList 호출 실패 ', error);
      });
  };

  useEffect(() => {
    getUserApplicationList();
  }, []);

  // 모집 공고, 단체 정보
  useEffect(() => {
    const fetchRecruitmentsAndGroups = async () => {
      const filteredRecruitments = await fetchFilteredRecruitments(
        applicationList
      );
      setFilteredRecruitments(filteredRecruitments);

      const groupIds = Array.from(
        new Set(filteredRecruitments.map((g) => g.groupId))
      );
      const fetchedGroups = await Promise.all(
        groupIds.map(async (groupId) => fetchGroups(groupId))
      );

      const validGroups = fetchedGroups.filter(
        (group) => group !== null
      ) as GroupDetail[];

      setFilteredGroups(validGroups);
    };

    fetchRecruitmentsAndGroups();
  }, [applicationList]);

  // filteredGroups + filteredRecruitments + applicationList
  const combinedData: GroupApplicationData[] = filteredGroups.map((group) => {
    const groupRecruitments = filteredRecruitments.filter(
      (recruitment) => recruitment.groupId === group.id
    );
    const groupApplications = groupRecruitments.map((recruitment) => {
      const application = applicationList.find(
        (app) => app.recruitmentId === recruitment.recruitmentId
      );
      return {
        recruitment,
        application
      };
    });
    return {
      group,
      applications: groupApplications
    };
  });

  const handleGroupApplicationUpdate = () => {
    getUserApplicationList();
  };

  console.log(combinedData);
  return (
    <div>
      <Header>
        {combinedData.map(({ group, applications }) => (
          <GroupApplicationComponent
            key={group.id}
            group={group}
            applications={applications}
            onUpdate={handleGroupApplicationUpdate}
          />
        ))}
      </Header>
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
