import React from 'react';
import { ClubCardProps } from './ClubCardProps';
import {
  CardContainer,
  LogoImage,
  CardInfo,
  Status,
  Details,
  InterestTag
} from '../CardStyles';

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
      <LogoImage src={imageUrl} alt='로고 이미지' />
      <CardInfo>
        <h3>{name}</h3>
        <p>{classification}</p>
        <p>{campus}</p>
        <div>
          {interest.map((tag, index) => (
            <InterestTag key={index}>{tag}</InterestTag>
          ))}
        </div>
        {status && <Status>모집중</Status>}
      </CardInfo>
      <Details>
        <hr />
        <p>{introduction}</p>
        {/* 세부 정보를 표시하는 JSX 작성 */}
      </Details>
    </CardContainer>
  );
};

export default ClubCard;
