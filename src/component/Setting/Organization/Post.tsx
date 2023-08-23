import React from 'react';
import styled from 'styled-components';
import StatusBlock from '../StatusBlock';

const Post = () => {
  return (
    <Container>
      <Section>
        <Header>사람을 구한다.</Header>
        <StatusBlock status='recruitTrue' />
      </Section>
      <Section>
        <Content>내용</Content>
      </Section>
      <Section>
        <Date>2023.05.23</Date>
      </Section>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  width: 36.625rem;
  height: 6.75rem;
  border-radius: 0.9375rem;
  background: #fff;
  box-shadow: 0px 4px 15px 0 (0, 0, 0, 0.05);
  padding: 1.3rem;
`;
const Section = styled.div`
  display: flex;
  align-items: center;
`;
const Header = styled.div`
  color: rgba(0, 0, 0, 0.8);
  margin-right: auto;

  font-family: Gmarket Sans TTF;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Status = styled.div``;

const Content = styled.div`
  color: #000;
  width: 30.0625rem;
  height: 3.6875rem;
  font-family: Gmarket Sans TTF;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 0.5rem;
  margin-bottom: 0.7rem;
`;
const Date = styled.div`
  color: #000;

  font-family: Gmarket Sans TTF;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.125rem; /* 180% */
`;
