import React from 'react';
import styled from 'styled-components';
import check_box from '../../../assets/check-box.svg';
import {
  Container,
  NoticeTitle,
  NoticeText,
  SubTitle
} from './ApplyCommonStyle';
function Introduction() {
  return (
    <Container>
      <NoticeTitle>단체 등록하기</NoticeTitle>
      <SubTitle>단체 등록 가이드를 참고해 단체를 등록해보세요</SubTitle>
      <NoticeText>
        <img src={check_box} />
        <p>명지대학교에 등록된 모든 동아리 · 학회 · 학생 단체</p>
      </NoticeText>
      <NoticeText>
        <img src={check_box} />
        <p> 팀을 빌딩하고 있는 소모임 </p>
      </NoticeText>
    </Container>
  );
}
export default Introduction;
