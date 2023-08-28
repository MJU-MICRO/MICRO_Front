import React from 'react';
import {
  CardContainer,
  LogoImage,
  CardInfo,
  Status,
  Details,
  InterestTag,
  Wrapper,
  UpWrapper,
  BorderLine,
  Name
} from './OrganizationCardStyles';
import img from '../../assets/img.svg';
import { OrganizationProps } from './OrganizationProps';
import Default_img from '../../assets/userDefaultImg.svg';

function StudentCouncilCard({
  groupName,
  recruit,
  campus,
  imageUrl,
  largeCategory,
  mediumCategory,
  smallCategory,
  subCategory,
  introduction
}: OrganizationProps) {
  const logoImageUrl = imageUrl || Default_img;
  return (
    <CardContainer>
      <UpWrapper>
        <LogoImage src={logoImageUrl} alt='로고 이미지' />
        <CardInfo>
          <Wrapper>
            <Name>{groupName}</Name>
            {recruit && <Status>모집중</Status>}
          </Wrapper>
          <p>
            {campus} · {largeCategory}
          </p>
          <InterestTag>{mediumCategory}</InterestTag>
          {smallCategory != '' && subCategory == '' && (
            <InterestTag>{smallCategory}</InterestTag>
          )}
          {subCategory != '' && <InterestTag>{subCategory}</InterestTag>}
        </CardInfo>
      </UpWrapper>
      <BorderLine></BorderLine>
      <Details>
        <p>{introduction}</p>
      </Details>
    </CardContainer>
  );
}

export default StudentCouncilCard;
