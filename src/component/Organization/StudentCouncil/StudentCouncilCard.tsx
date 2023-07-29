import React from 'react';
import { StudentCouncilCardProps } from './StudentCouncilCardProps';
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

function StudentCouncilCard({
  id,
  name,
  classification,
  campus,
  college,
  major,
  status,
  imageUrl,
  introduction
}: StudentCouncilCardProps) {
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
          <InterestTag>{college}</InterestTag>
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
