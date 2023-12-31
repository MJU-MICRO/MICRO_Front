import axios from 'axios';
import { useAuth } from 'contexts/AuthContext';
import { RecruitmentsProps } from 'interfaces/RecruitmentsProps';
import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import ApplicationModal from '../ApplicationCommon/ApplicationModal';

const SentApplicationModal = ({ isOpen, onClose, applications }) => {
  const { user } = useAuth();
  const [filteredRecruitmentData, setFilteredRecruitmentData] =
    useState<RecruitmentsProps>();

  useEffect(() => {
    axios
      .get('https://nolmyong.com/recruitments')
      .then((response) => {
        const recruitments = response.data.data;

        const filteredData = recruitments.filter(
          (recruitment) =>
            recruitment.recruitmentId === applications.recruitmentId
        );
        setFilteredRecruitmentData(filteredData[0]);
      })
      .catch((error) => {
        console.log('recruitments data:', error);
      });
  }, [applications.recruitmentId]);

  return (
    <ApplicationModal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <BoardContainer>
          <BoardTitle>기본 등록 정보</BoardTitle>
          <BoardText>
            해당 정보는 지원서 작성 완료 시 자동으로 전달됩니다.
          </BoardText>
          <BasicInfoWrapper>
            <BasicInfo>
              <Name>이름</Name>
              <Content>{user?.name}</Content>
            </BasicInfo>
            <BasicInfo>
              <Name>전화번호</Name>
              <Content>흠</Content>
            </BasicInfo>
          </BasicInfoWrapper>
          <BasicInfoWrapper>
            <BasicInfo>
              <Name>학번</Name>
              <Content>{user?.email.split('@')[0]}</Content>
            </BasicInfo>
            <BasicInfo>
              <Name>재학유부</Name>
              <Content>
                {applications.isAttending ? '재학중' : '휴학중'}
              </Content>
            </BasicInfo>
          </BasicInfoWrapper>
          <BasicInfoWrapper>
            <BasicInfo>
              <Name>학과</Name>
              <Content>{user?.major}</Content>
            </BasicInfo>
            <BasicInfo>
              <Name>학년</Name>
              <Content>{applications.grade}</Content>
            </BasicInfo>
          </BasicInfoWrapper>
          <BasicInfoWrapper>
            <BasicInfo>
              <Name>지원 분야</Name>
              <Content>{applications.supportField}</Content>
            </BasicInfo>
          </BasicInfoWrapper>
          <Line />
          <QuestionWrapper>
            {filteredRecruitmentData?.questions?.map((question, index) => (
              <Question key={index}>
                <Title>
                  {index + 1}. {question}
                </Title>
                <Answer>{applications.answers[index]}</Answer>
              </Question>
            ))}
          </QuestionWrapper>
        </BoardContainer>
      </ModalContent>
    </ApplicationModal>
  );
};

export default SentApplicationModal;
const ModalContent = styled.div``;
const BoardContainer = styled.div`
  position: relative;
  padding-left: 2rem;
  padding-right: 2rem;
  height: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0.938rem;
  background-color: #ffffff;
  margin-bottom: 3rem;
`;

const BasicInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
const BasicInfo = styled.div`
  margin-top: 1.5rem;
`;
const Name = styled.div`
  color: rgba(0, 0, 0, 0.7);
  font-family: Gmarket Sans TTF;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Content = styled.div`
  width: 16rem;
  height: 2.0625rem;
  border-radius: 0.625rem;
  border: 1px solid #dbdbdf;
  background: #fff;
  color: rgba(0, 0, 0, 0.7);
  font-family: Gmarket Sans TTF;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 0.3rem;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
`;
const Line = styled.div`
  width: 100%;
  height: 0rem;
  border-top: 0.5px solid #dbdbdf;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;
const QuestionWrapper = styled.div`
  width: 100%;

  border-radius: 0.9375rem;
  background: #fff;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
`;
const Question = styled.div`
  height: fit-content;

  padding-left: 1rem;
  padding-right: 1rem;
`;
const Answer = styled.div`
  color: rgba(0, 0, 0, 0.7);
  font-family: Gmarket Sans TTF;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 100%;
  height: 5.75rem;
  border-radius: 0.625rem;
  border: 1px solid #dbdbdf;
  background: #fafafa;
  margin-top: 1rem;
  padding: 1rem 1rem;
  box-sizing: border-box;
`;
const Title = styled.div`
  color: rgba(0, 0, 0, 0.7);
  font-family: Gmarket Sans TTF;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 2rem;
`;
const BoardTitle = styled.div`
  width: 38rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 1rem;
  font-weight: 500;
  color: #000000;
  opacity: 100%;
  margin-top: 2.3rem;
`;

const BoardText = styled.div`
  width: 38rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: rgba(0, 0, 0, 0.8);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  margin-top: 0.5rem;
`;
