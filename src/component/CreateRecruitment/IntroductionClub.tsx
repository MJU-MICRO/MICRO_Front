import React from 'react';
import {
  CardContainer,
  LogoImage,
  CardInfo,
  Details,
  InterestTag,
  Wrapper,
  UpWrapper,
  Large,
  SecondWrapper,
  OrganizationName
} from './CardStyles';
import { OrganizationProps } from '../Organization/OrganizationProps';
import Default_img from '../../assets/userDefaultImg.svg';

const IntroductionClub = ({
  groupName,
  imageUrl,
  establishedYear,
  numOfMember,
  relatedTag,
  campus,
  mediumCategory,
  introduction
}: OrganizationProps) => {
  const logoImageUrl = imageUrl || Default_img;
  return (
    <CardContainer>
      <UpWrapper>
        <LogoImage src={logoImageUrl} alt='로고 이미지' />
        <CardInfo>
          <Wrapper>
            <SecondWrapper>
              <OrganizationName>{groupName}</OrganizationName>
              <Large>{mediumCategory}</Large>
            </SecondWrapper>
          </Wrapper>
          <p>
            {campus} · {establishedYear}년 개설 · 회원 수 {numOfMember}
          </p>
          {relatedTag.map((tag, index) => (
            <InterestTag key={index}>{tag}</InterestTag>
          ))}
          <Details>{introduction}</Details>
        </CardInfo>
      </UpWrapper>
    </CardContainer>
  );
};
export default IntroductionClub;
