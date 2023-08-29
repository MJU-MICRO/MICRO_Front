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
  OrganizationName
} from './CardStyles';
import { OrganizationProps } from '../Organization/OrganizationProps';
import Default_img from '../../assets/userDefaultImg.svg';

const ModalIntroductionStudent = ({
  groupName,
  imageUrl,
  establishedYear,
  numOfMember,
  campus,
  largeCategory,
  mediumCategory,
  smallCategory,
  subCategory,
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
              <Large>{largeCategory}</Large>
            </SecondWrapper>
          </Wrapper>
          <p>
            {campus} · {establishedYear}년 개설 · 회원 수 {numOfMember}
          </p>
          <InterestTag>{mediumCategory}</InterestTag>
          {smallCategory != '' && subCategory == '' && (
            <InterestTag>{smallCategory}</InterestTag>
          )}
          {subCategory != '' && <InterestTag>{subCategory}</InterestTag>}
          <Details>{introduction}</Details>
        </CardInfo>
      </UpWrapper>
    </CardContainer>
  );
};
export default ModalIntroductionStudent;
