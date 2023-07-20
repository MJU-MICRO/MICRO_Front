import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 2px solid;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  margin: 10px;
  width: calc(
    33.33% - 20px
  ); /* 한 줄에 최대 3개의 카드를 배치하기 위한 너비 설정 */
  float: left;
`;

export const LogoImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const CardInfo = styled.div`
  margin-top: 10px;
`;

export const Status = styled.p`
  margin-top: 5px;
`;

export const Details = styled.div`
  clear: both;
`;

export const InterestTag = styled.span`
  width: 71px;
  height: 22px;
  flex-shrink: 0;
  fill: #fff;
  stroke-width: 0.5px;
  stroke: #e5e4e4;
`;
