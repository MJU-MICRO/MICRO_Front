import React from 'react';
import { styled } from 'styled-components';
import img from '../../../assets/img.svg';

const UserLikeBlock = () => {
  return (
    <Container>
      <ImgWrapper>
        <img src={img} alt='img' />
      </ImgWrapper>
      <InfoWrapper>
        <Section>
          <Name>과일 러버</Name>
          <Division>소모임</Division>
          <Status>모집중</Status>
        </Section>
        <Section>
          <Tag>디자인/사진/영상</Tag>
          <Tag>체육/헬스</Tag>
          <Tag>IT/공학</Tag>
        </Section>
        <Section>
          <Intro>
            안녕하세요, 저희는 과일 러버 소모임 과일 러버단입니다. 저희의 과일
            사랑은 무한합니다. 사실 저는 수박만 좋아합니다. 다른 거를 좋아하기
            위한 소모임입니다.
          </Intro>
        </Section>
      </InfoWrapper>
    </Container>
  );
};

export default UserLikeBlock;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 40.75rem;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 1rem;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImgWrapper = styled.div`
  img {
    width: 6.9375rem;
    height: 6.625rem;

    border-radius: 0.625rem;
  }
  margin-right: 0.5rem;
`;
const Section = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;
const Name = styled.div`
  color: #000;
  font-family: GmarketSansMedium;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 0.5rem;
`;
const Division = styled.div`
  color: #000;
  text-align: center;

  font-family: GmarketSansLight;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const Status = styled.div`
  width: 3.6875rem;
  height: 1.6875rem;
  border-radius: 0.625rem;
  background: rgba(255, 122, 122, 0.1);
  margin-left: auto;
  color: #ff4141;

  font-family: GmarketSansMedium;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Tag = styled.div`
  padding: 0 0.4rem;
  height: 1.375rem;
  flex-shrink: 0;
  margin-right: 0.5rem;
  fill: #fff;
  border-radius: 10px;
  border: 0.1px solid #7d7d7d;

  color: #000;

  font-family: GmarketSansLight;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Intro = styled.div`
  color: rgba(0, 0, 0, 0.8);

  font-family: Gmarket Sans TTF;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
