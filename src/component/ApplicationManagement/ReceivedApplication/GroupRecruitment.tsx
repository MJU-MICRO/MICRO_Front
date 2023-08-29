import axios from 'axios';
import { RecruitmentsProps } from 'interfaces/RecruitmentsProps';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GroupApplication from './GroupApplication';

const GroupRecruitment = ({ groupId }) => {
  const [recruitments, setRecruitments] = useState<RecruitmentsProps[]>([]);
  const [selectedRecruitmentId, setSelectedRecruitmentId] = useState<
    number | null
  >(null);

  useEffect(() => {
    const getGroupRecruitments = () => {
      axios
        .get('https://nolmyong.com/recruitments')
        .then((response) => {
          // 모든 recruitments를 가져온 뒤 groupId와 일치하는 항목만 필터링하여 저장
          const filteredRecruitments = response.data.data.filter(
            (recruitment) => recruitment.groupId === groupId
          );
          setRecruitments(filteredRecruitments);
          console.log('힝', filteredRecruitments);
        })
        .catch((error) => {
          console.log('application/userList 호출 실패 ', error);
        });
    };
    getGroupRecruitments();
  }, [groupId]);

  const calculateDaysLeft = (endDate: string) => {
    const today = new Date();
    const end = new Date(endDate);
    const timeDiff = end.getTime() - today.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysLeft;
  };

  const handleContainerClick = (recruitmentId: number) => {
    setSelectedRecruitmentId((prevId) =>
      prevId === recruitmentId ? null : recruitmentId
    );
  };
  return (
    <>
      {recruitments.length > 0 ? (
        recruitments.map((recruitment) => (
          <Container
            key={recruitment.recruitmentId}
            onClick={() => handleContainerClick(recruitment.recruitmentId)}>
            <StartDateWrapper>
              <Line />
              <StartDate>
                {recruitment.startDateTime.substring(0, 10)}
              </StartDate>
              <Line />
            </StartDateWrapper>
            <RecruitmentWrapper>
              <RecruitmentHeader>{recruitment.title}</RecruitmentHeader>
              <RecruitmentContent>{recruitment.content}</RecruitmentContent>
              <TagWrapper>
                <Tag className='period'>
                  {recruitment.activePeriod === 'YEAR'
                    ? '일 년 활동'
                    : '학기 활동'}
                </Tag>
                {calculateDaysLeft(recruitment.endDateTime) > 0 ? (
                  <Tag className='daysLeft'>
                    마감까지 {calculateDaysLeft(recruitment.endDateTime)}일
                  </Tag>
                ) : (
                  <Tag className='expired'>모집 마감</Tag>
                )}
              </TagWrapper>
            </RecruitmentWrapper>
          </Container>
        ))
      ) : (
        <NoDataWrapper>등록된 모집 공고가 없어요 😎</NoDataWrapper>
      )}
      {selectedRecruitmentId !== null && recruitments.length > 0 && (
        <GroupApplication recruitmentId={selectedRecruitmentId} />
      )}
    </>
  );
};
export default GroupRecruitment;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease-in-out;
  }
`;
const StartDateWrapper = styled.div`
  height: 9.6875rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
`;
const Line = styled.div`
  width: 3.3125rem;
  height: 0rem;
  transform: rotate(90deg);
  border-top: 0.01px solid #73737377;
`;

const StartDate = styled.div`
  color: #000;
  width: 5.3125rem;

  font-family: Gmarket Sans TTF;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const RecruitmentWrapper = styled.div`
  width: 100%;
  height: 9.6875rem;
  border-radius: 0.625rem;
  background: #fff;
  box-shadow: 0px 4px 20px 3px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;
  margin-right: 1rem;
  box-sizing: border-box;
`;
const RecruitmentHeader = styled.div`
  color: #000;

  font-family: Gmarket Sans TTF;
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 0.5rem;
`;
const RecruitmentContent = styled.div`
  color: rgba(0, 0, 0, 0.7);

  font-family: Gmarket Sans TTF;
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  height: 3.5rem;

  margin-bottom: 0.5rem;
`;
const TagWrapper = styled.div`
  display: flex;
  width: fit-content;

  margin-left: auto;
`;
const Tag = styled.div`
  padding: 0 0.6rem;
  height: 1.375rem;
  background-color: #fff;

  border-radius: 10px;
  margin-left: 0.5rem;
  color: #000;

  font-family: GmarketSansMedium;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.period {
    background: rgba(92, 163, 95, 0.1);
    color: #49a24d;
  }

  &.daysLeft {
    background: rgba(255, 122, 122, 0.1);
    color: #ff4141;
  }

  &.expired {
    background: rgba(0, 0, 0, 0.05);
    color: #00000035;
  }
`;

const NoDataWrapper = styled.div`
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
