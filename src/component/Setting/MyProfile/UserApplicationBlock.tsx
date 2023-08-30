import axios from 'axios';
import GroupApplicationComponent from 'component/ApplicationManagement/GroupApplicationComponent';
import { fetchGroups } from 'component/ApplicationManagement/Util/GroupUtil';
import { fetchFilteredRecruitments } from 'component/ApplicationManagement/Util/RecruitmentUtil';
import { useAuth } from 'contexts/AuthContext';
import AppliedGroupProps from 'interfaces/AppliedGroupProps';
import { GroupDetail } from 'interfaces/GroupDetailProps';
import { RecruitmentsProps } from 'interfaces/RecruitmentsProps';
import { UserSentApplicationProps } from 'interfaces/UserSentApplicationProps';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import GroupComponent from './GroupComponent';
interface GroupApplicationData {
  group: GroupDetail;
  applications: {
    recruitment: RecruitmentsProps;
    application: UserSentApplicationProps | undefined;
  }[];
}
const UserApplicationBlock = () => {
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

  return (
    <>
      {combinedData.length === 0 ? (
        <NoApplication> 지원한 단체가 없어요 😣 </NoApplication>
      ) : (
        combinedData.map(({ group, applications }) => (
          <GroupRecruitmentContainer>
            <GroupApplicationComponent
              key={group.id}
              group={group}
              applications={applications}
              division='sentApplication'
            />
          </GroupRecruitmentContainer>
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
const GroupRecruitmentContainer = styled.div`
  width: 38rem;

  box-sizing: border-box;
  padding: 0rem 0rem 2rem 0rem;
`;
