import React from 'react';
import { ClubCardProps } from './ClubCardProps';
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
} from '../CardStyles';
import img from '../../../assets/img.svg';

const ClubCard = ({
  id,
  name,
  classification,
  campus,
  relationMajor,
  status,
  imageUrl,
  interest,
  introduction
}: ClubCardProps) => {
  return (
    <CardContainer>
      <UpWrapper>
        <LogoImage src={img} alt='로고 이미지' />
        <CardInfo>
          <Wrapper>
            <h3>{name}</h3>
            {status && <Status>모집중</Status>}
          </Wrapper>
          <p>
            {campus} · {classification}
          </p>
          {interest.map((tag, index) => (
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
