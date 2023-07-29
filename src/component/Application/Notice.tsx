import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import axios from 'axios';

const Wrapper = styled.div`
  width: 41.188rem;
  height: 12rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 1.3rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: normal;
  color: #000000;
  opacity: 100%;
  padding-bottom: 1rem;
`;

const Content = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: normal;
  color: #000000;
  opacity: 100%;
  padding-bottom: 0.3rem;
`;

const Notice: React.FC = () => {
  // const [group, setGroup] = useState([]);

  // useEffect(() => {
  //   axios.get('').then((response) => {
  //     setGroup(response.data);
  //   });
  // }, []);

  return (
    <Wrapper>
      {/* <Title>{group.groupName} 지원하기</Title> */}
      <Title>과일 러버 지원하기</Title>
      <Content>지원하기 전 아래의 유의사항을 확인해주세요.</Content>
      <br />
      <Content>놀명 뭐하니?는 어쩌구 저쩌구 책임 어쩌구 주의사항</Content>
      <Content>놀명 뭐하니?는 어쩌구 저쩌구 책임 어쩌구 주의사항</Content>
      <Content>놀명 뭐하니?는 어쩌구 저쩌구 책임 어쩌구 주의사항</Content>
    </Wrapper>
  );
};

export default Notice;
