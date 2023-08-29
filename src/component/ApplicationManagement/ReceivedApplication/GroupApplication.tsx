import axios from 'axios';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const GroupApplication = ({ recruitmentId }) => {
  useEffect(() => {
    const getGroupRecruitments = () => {
      axios
        .get(
          `https://nolmyong.com/api/president/application/list?recruitmentId=${recruitmentId}`
        )
        .then((response) => {
          console.log('이거안대면 망함', response.data.data);
        })
        .catch((error) => {
          console.log('/list?recruitmentId 요청 실패 ', error);
        });
    };
    getGroupRecruitments();
  }, []);

  return (
    <>
      {' '}
      <Container>
        <Index>1</Index>
        <Name>김명지</Name>
        <Content>응용소프트웨어학과</Content>
        <Content>2학년</Content>
        <Content>재학중</Content>
        <Content>미디어팀</Content>
        <PassStatus>합격</PassStatus>
      </Container>{' '}
      <Container>
        <Index>1</Index>
        <Name>김명지</Name>
        <Content>응용소프트웨어학과</Content>
        <Content>2학년</Content>
        <Content>재학중</Content>
        <Content>미디어팀</Content>
        <PassStatus>합격</PassStatus>
      </Container>
    </>
  );
};

export default GroupApplication;

const Container = styled.div`
  border-radius: 0.625rem;
  background: #fff;
  box-shadow: 0px 4px 20px 3px rgba(0, 0, 0, 0.05);
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
`;
const Index = styled.div`
  color: #000;

  font-family: GmarketSansMedium;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 2rem;
`;
const Name = styled.div`
  color: #000;

  font-family: GmarketSansMedium;
  font-size: 0.9rem;

  margin-right: 3rem;
`;
const Content = styled.div`
  color: rgba(0, 0, 0, 0.7);

  font-family: GmarketSansMedium;
  font-size: 0.9rem;

  margin-right: 1rem;
`;

const PassStatus = styled.div`
  padding: 0 0.6rem;
  height: 1.375rem;
  background-color: rgba(0, 0, 0, 0.1);

  border-radius: 10px;

  color: #000;

  font-family: GmarketSansMedium;
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
