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
import Default_img from '../../assets/userDefaultImg.svg';
import { OrganizationProps } from './OrganizationProps';

const ClubCard = ({
  groupName,
  relatedTag,
  imageUrl,
  recruit,
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
            <Name>{groupName}</Name>
            {recruit && <Status>모집중</Status>}
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
