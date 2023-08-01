import React from 'react';
import styled from 'styled-components';

function CreateRecruitment() {
  return (
    <BackGround>
      <Board />
    </BackGround>
  );
}

export default CreateRecruitment;

const Board = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 8px;
  span {
    color: rgba(0, 0, 0, 0.8);
    leading-trim: both;
    text-edge: cap;
    font-family: 'GmarketSansMedium';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 6.5px;
  }
  div {
    color: #000;
    leading-trim: both;
    text-edge: cap;
    font-family: 'GmarketSansLight';
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;

const BackGround = styled.div`
  display: flex;
  justify-content: center;
}
`;
