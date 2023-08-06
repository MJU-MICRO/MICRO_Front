import React from 'react';
import styled from 'styled-components';
import check_box from '../../assets/check-box.svg';
import level_one_2 from '../../assets/level_one_2.svg';
import level_two_2 from '../../assets/level_two_2.svg';
import arrow from '../../assets/arrow.svg';

const CreateRecruitmentSecond: React.FC = () => {
  return (
    <BackGround>
      <Introduction>
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
      </Introduction>
      <Board></Board>
      <Level>
        <img src={level_one_2} />
        <img src={level_two_2} />
      </Level>
      <Next>
        <SaveButton>임시저장</SaveButton>
        <SubmitButton>등록하기</SubmitButton>
      </Next>
    </BackGround>
  );
};

export default CreateRecruitmentSecond;

const Board = styled.div`
  border-radius: 13px;
  background: #fff;
  padding: 20px;
  width: 659px;
  height: 770px;
  box-shadow: 0px 4px 20px 3px rgba(0, 0, 0, 0.05);
  margin-bottom: 21px;
  margin-left: 8px;
}
`;

const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
`;

const Introduction = styled.div`
  width: 41.188rem;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 42px;
  margin-right: 18px;
`;

const Level = styled.div`
  display: flex;
  align-items: left;
  margin-bottom: 41px;
  margin-right: 650px;
  img {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  }
}
`;
const Next = styled.div`
  display: flex;
  align-items: left;
  height: auto;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

const SaveButton = styled.button`
  color: #358e48;
  font-size: 0.9375rem;
  font-style: normal;
  font-family: 'GmarketSansMedium';
  font-weight: 500;
  line-height: 41px;
  width: 104px;
  height: 40px;
  margin-right: 10px;
  border-radius: 15px;
  border: 1px solid rgba(41, 180, 72, 0.7);
  &:hover {
    background-color: #04b404;
    color: #ffffff;
  }

  &:active {
    color: #358e48;
  }
`;

const SubmitButton = styled.button`
  color: #008fd5;
  font-family: 'GmarketSansMedium';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  width: 104px;
  height: 40px;
  line-height: 41px;
  border-radius: 15px;
  border: 1px solid #32a9eb;
  &:hover {
    background-color: #0080ff;
    color: #ffffff;
  }

  &:active {
    color: #008fd5;
  }
`;

const NoticeTitle = styled.h1`
  color: #000;
  leading-trim: both;
  text-edge: cap;
  font-family: 'GmarketSansMedium';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 13px;
`;

const SubTitle = styled.p`
  display: flex;
  align-items: left;
  margin-bottom: 15px;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: normal;
  font-family: 'GmarketSansLight';
  color: #000000;
`;

const NoticeText = styled.p`
  display: flex;
  align-items: left;
  margin-bottom: 7px;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: normal;
  font-family: 'GmarketSansLight';
  color: #000000;
  img {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    margin-right: 5px;
  }
`;

const Guide = styled.div`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: normal;
  font-family: 'GmarketSansLight';
  color: #000000;
  opacity: 100%;
  padding-bottom: 0.3rem;
`;
