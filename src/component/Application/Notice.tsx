import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import check_box from '../../assets/check-box.svg';
import styled from 'styled-components';
const Notice: React.FC = () => {
  const groupName = localStorage.getItem('groupName');

  return (
    <NoticeContainer>
      <NoticeTitle>{groupName} 지원하기</NoticeTitle>
      <NoticeText>지원하기 전 아래 지원 가이드를 확인해주세요.</NoticeText>
      <br />
      <NoticeText>
        <img src={check_box} />
        <p>기본 정보에는 회원가입시 기입한 정보가 들어가요</p>
      </NoticeText>
      <NoticeText>
        <img src={check_box} />
        <p>지원서는 임시저장해뒀다가 상단의 지원서 관리에서 수정할 수 있어요</p>
      </NoticeText>
      <NoticeText>
        <img src={check_box} />
        <p>
          제출된 지원서는 단체의 대표자가 확인한 후 합/불 여부를 알 수 있어요
        </p>
      </NoticeText>
    </NoticeContainer>
  );
};

export default Notice;

export const NoticeContainer = styled.div`
  width: 41.188rem;
  height: 12rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 1.3rem;
`;

export const NoticeTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bolder;
  line-height: normal;
  color: #000000;
  opacity: 100%;
  padding-bottom: 1rem;
`;

export const NoticeText = styled.p`
  font-size: 0.875rem;
  font-weight: light;
  line-height: normal;
  color: #000000;
  opacity: 100%;
  padding-bottom: 0.3rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  p {
    margin-top: 3px;
    margin-left: 7px;
  }
`;
