import axios from 'axios';
import { useAuth } from '../../../contexts/AuthContext';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReceivedApplicationModal from './ReceivedApplicationModal';

interface GroupRecruitment {
  answers: string[];
  grade: string;
  id: number;
  isAttending: boolean;
  isSubmit: boolean;
  major: string;
  name: string;
  passStatus: boolean;
  phoneNumber: string;
  recruitmentId: number;
  studentId: string;
  supportField: string;
}

const GroupApplication = ({ recruitmentId, groupId }) => {
  const { accessToken, user } = useAuth();
  const [groupRecruitments, setGroupRecruitments] = useState<
    GroupRecruitment[]
  >([]);

  useEffect(() => {
    console.log(recruitmentId);
    console.log(groupId);
    const getGroupRecruitments = () => {
      axios
        .get(
          `https://nolmyong.com/api/president/application/list?recruitmentId=${recruitmentId}&groupId=${groupId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        )
        .then((response) => {
          setGroupRecruitments(response.data.data);
        })
        .catch((error) => {
          console.log('/list?recruitmentId 요청 실패 ', error);
        });
    };
    getGroupRecruitments();
  }, []);
  console.log(groupRecruitments);
  const [selectedApplication, setSelectedApplication] =
    useState<GroupRecruitment | null>(null);

  const handleContainerClick = (recruitment: GroupRecruitment) => {
    setSelectedApplication(recruitment);
  };

  return (
    <>
      {groupRecruitments.map((recruitment, index) => (
        <Container
          key={index}
          onClick={() => handleContainerClick(recruitment)}>
          <Index>{index + 1}</Index>
          <Name>{recruitment.name}</Name>
          <Content>{recruitment.major}</Content>
          <Content>{recruitment.grade}학년</Content>
          <Content>{recruitment.isAttending ? '재학중' : '휴학중'} </Content>
          <Content>{recruitment.supportField}</Content>

          {recruitment.passStatus === null ? (
            <PassStatus>미평가</PassStatus>
          ) : recruitment.passStatus ? (
            <PassStatus className='pass'>합격</PassStatus>
          ) : (
            <PassStatus className='noPass'>불합격</PassStatus>
          )}
        </Container>
      ))}
      {selectedApplication && (
        <ReceivedApplicationModal
          isOpen={true}
          onClose={() => setSelectedApplication(null)}
          applications={selectedApplication}
        />
      )}
    </>
  );
};

export default GroupApplication;

const Container = styled.div`
  border-radius: 0.625rem;
  background: #fff;
  box-shadow: 0px 4px 20px 3px rgba(0, 0, 0, 0.05);
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 20px 3px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
  }
`;
const Index = styled.div`
  color: #000;

  font-family: GmarketSansMedium;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 2rem;
`;
const Name = styled.div`
  color: #000;

  font-family: GmarketSansMedium;
  font-size: 0.9rem;

  margin-right: 3rem;
`;
const Content = styled.div`
  color: rgba(0, 0, 0, 0.7);

  font-family: GmarketSansMedium;
  font-size: 0.9rem;

  margin-right: 1rem;
`;

const PassStatus = styled.div`
  padding: 0 0.6rem;
  height: 1.375rem;
  background-color: rgba(0, 0, 0, 0.1);

  border-radius: 10px;

  color: #000;

  font-family: GmarketSansMedium;
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.pass {
    background: rgba(49, 175, 229, 0.05);
    color: #1bacea;
  }
  &.noPass {
    background: rgba(206, 182, 220, 0.167);
    color: rgba(163, 49, 229, 0.8);
  }
`;
