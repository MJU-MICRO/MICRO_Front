import React from 'react';
import {
  CardContainer,
  LogoImage,
  CardInfo,
  ActivePeriod,
  Details,
  InterestTag,
  Wrapper,
  UpWrapper,
  BorderLine,
  Large,
  SecondWrapper,
  Status,
  OrganizationName,
  Title
} from './RecruitmentModalCardStyles';
import img from '../../../assets/img.svg';
import { RecruitmentProps } from '../RecruitmentProps';
import { OrganizationProps } from '../../Organization/OrganizationProps';

const ModalIntroductionClub = ({
  name,
  imageUrl,
  establishedYear,
  numberOfMember,
  relatedTag,
  isRecruit,
  campus,
  mediumCategory,
  introduction,
  recruitment
}: OrganizationProps & { recruitment: RecruitmentProps }) => {
  const daysRemaining = calculateDaysRemaining(recruitment.recruitmentDeadline);
  const formattedDays = formatRemainingDays(daysRemaining);
  return (
    <CardContainer>
      <UpWrapper>
        <LogoImage src={imageUrl} alt='로고 이미지' />
        <CardInfo>
          <Wrapper>
            <SecondWrapper>
              <OrganizationName>{name}</OrganizationName>
              <Large>{mediumCategory}</Large>
            </SecondWrapper>
            <ActivePeriod activePeriod={recruitment.activePeriod}>
              {recruitment.activePeriod}
            </ActivePeriod>
            <Status isRecruit={isRecruit}>
              {isRecruit ? formattedDays : '모집 마감'}
            </Status>
          </Wrapper>
          <p>
            {campus} · {establishedYear}년 개설 · 회원 수 {numberOfMember}
          </p>
          {relatedTag.map((tag, index) => (
            <InterestTag key={index}>{tag}</InterestTag>
          ))}
          <Details>{introduction}</Details>
        </CardInfo>
      </UpWrapper>
      <BorderLine></BorderLine>
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

const formatRemainingDays = (days) => {
  if (days === 1) {
    return '오늘 마감';
  } else {
    return `마감까지 ${days}일`;
  }
};
export default ModalIntroductionClub;
