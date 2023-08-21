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
  BorderLine
} from './OrganizationCardStyles';
import img from '../../assets/img.svg';
import { OrganizationProps } from './OrganizationProps';

const ClubCard = ({
  id,
  name,
  imageUrl,
  establishedYear,
  numberOfMember,
  relationMajor,
  relatedTag,
  activityTitle,
  activityContent,
  isRecruit,
  campus,
  largeCategory,
  mediumCategory,
  smallCategory,
  subCategory,
  presidentEmail,
  isApprove,
  introduction
}: OrganizationProps) => {
  return (
    <CardContainer>
      <UpWrapper>
        <LogoImage src={img} alt='로고 이미지' />
        <CardInfo>
          <Wrapper>
            <h3>{name}</h3>
            {isRecruit && <Status>모집중</Status>}
          </Wrapper>
          <p>
            {campus} · {mediumCategory}
          </p>
          {relatedTag.map((tag, index) => (
            <InterestTag key={index}>{tag}</InterestTag>
          ))}
        </CardInfo>
      </UpWrapper>
      <BorderLine></BorderLine>
      <Details>
        <p>{introduction}</p>
      </Details>
    </CardContainer>
  );
};

export default ClubCard;
