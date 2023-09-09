import React from 'react';
import {
  CardContainer,
  LogoImage,
  CardInfo,
  ActivePeriod,
  Details,
  InterestTag,
  UpWrapper,
  Large,
  SecondWrapper,
  Status,
  OrganizationName,
  Title
} from './RecruitmentCardStyles';
import { RecruitmentProps } from './RecruitmentProps';
import { OrganizationProps } from '../Organization/OrganizationProps';
import styled from 'styled-components';
import Default_img from '../../assets/userDefaultImg.svg';

const StudentCouncilRecruitmentCard = ({
  groupName,
  imageUrl,
  establishedYear,
  numOfMember,
  recruit,
  campus,
  largeCategory,
  mediumCategory,
  smallCategory,
  subCategory,
  introduction,
  recruitment
}: OrganizationProps & { recruitment: RecruitmentProps }) => {
  const daysRemaining = calculateDaysRemaining(recruitment.endDateTime);
  const formattedDays = formatRemainingDays(daysRemaining);
  const formattedActivePeriod = formatActivePeriod(recruitment.activePeriod);
  const logoImageUrl = imageUrl || Default_img;
  return (
    <CardContainer>
      <UpWrapper>
        <LogoImage src={logoImageUrl} alt='로고 이미지' />
        <CardInfo>
          <Wrapper>
            <SecondWrapper>
              <OrganizationName>{groupName}</OrganizationName>
              <Large>{largeCategory}</Large>
            </SecondWrapper>
            <ActivePeriod activePeriod={formattedActivePeriod}>
              {formattedActivePeriod}
            </ActivePeriod>
            <Status isRecruit={recruit}>
              {recruit ? formattedDays : '모집 종료'}
            </Status>
          </Wrapper>
          <DownWrapper>
            <p>
              {campus} · {establishedYear}년 개설 · 회원 수 {numOfMember}
            </p>
            <Tag>
              <InterestTag>{mediumCategory}</InterestTag>
              {smallCategory != '' && subCategory == '' && (
                <InterestTag>{smallCategory}</InterestTag>
              )}
              {subCategory != '' && <InterestTag>{subCategory}</InterestTag>}
            </Tag>
          </DownWrapper>
        </CardInfo>
      </UpWrapper>
      <BorderLine></BorderLine>
      <Details>
        <Title>{recruitment.title}</Title>
        <p>{introduction}</p>
      </Details>
    </CardContainer>
  );
};

const calculateDaysRemaining = (deadline) => {
  const today = new Date();
  const targetDate = new Date(deadline);

  if (isNaN(today.getTime()) || isNaN(targetDate.getTime())) {
    // Handle invalid date input
    return -1;
  }

  const timeDiff = targetDate.getTime() - today.getTime();
  const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return daysRemaining;
};
const formatActivePeriod = (activePeriod) => {
  if (activePeriod === 'YEAR') {
    return '1년 활동';
  } else if (activePeriod === 'SEMESTER') {
    return '학기 활동';
  } else if (activePeriod === 'OVER_YEAR') {
    return '1년 이상';
  } else {
    return activePeriod; // Handle other cases
  }
};
const formatRemainingDays = (days) => {
  if (days === 1) {
    return '오늘 마감';
  } else {
    return `마감까지 ${days}일`;
  }
};
export default StudentCouncilRecruitmentCard;

const DownWrapper = styled.div`
  float: left;
`;

const Tag = styled.div`
  float: left;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 460px;
`;

const BorderLine = styled.hr`
  stroke-width: 2px;
  width: 555px;
  flex-shrink: 0;
  margin-left: 17px;
  margin-right: 8px;
  margin-top: 20px;
  color: #dbdbdf;
  border: none;
  border-top: 1px solid #dbdbdf;
`;
