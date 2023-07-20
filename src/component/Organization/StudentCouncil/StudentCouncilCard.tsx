import React from 'react';
import { StudentCouncilCardProps } from './StudentCouncilCardProps';
import {
  CardContainer,
  LogoImage,
  CardInfo,
  Status,
  Details
} from '../CardStyles';

function StudentCouncilCard({
  id,
  name,
  classification,
  campus,
  major,
  status,
  imageUrl,
  introduction
}: StudentCouncilCardProps) {
  return (
    <CardContainer>
      <LogoImage src={imageUrl} alt='로고 이미지' />
      <CardInfo>
        <h3>{name}</h3>
        <p>{classification}</p>
        <p>{campus}</p>
        <Status>{status}</Status>
      </CardInfo>
      <Details>
        <hr />
        <p>{introduction}</p>
      </Details>
    </CardContainer>
  );
}

export default StudentCouncilCard;
