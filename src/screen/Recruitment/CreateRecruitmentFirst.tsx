import React from 'react';
import styled from 'styled-components';
import check_box from '../../assets/check-box.svg';
import level_one from '../../assets/level-one.svg';
import level_two from '../../assets/level-two.svg';
import arrow from '../../assets/arrow.svg';
import { Link } from 'react-router-dom';

const CreateRecruitmentFirst: React.FC = () => {
  return (
    <BackGround>
      <Introduction>
        <NoticeTitle>모집 공고 등록하기</NoticeTitle>
        <SubTitle>모집 공고 등록 가이드를 참고해 단체를 등록해보세요</SubTitle>
        <NoticeText>
          <img src={check_box} />
          <p>명지대학교에 등록된 모든 동아리 · 학회 · 학생 단체의 모집 공고</p>
        </NoticeText>
        <NoticeText>
          <img src={check_box} />
          <p>
            {' '}
            등록되지 않은 단체여도 소모임 등록 시 모집 공고 등록이 가능해요!{' '}
          </p>
        </NoticeText>
      </Introduction>
      <Board></Board>
      <Level>
        <img src={level_one} />
        <img src={level_two} />
      </Level>
      <Next>
        <SaveButton>임시저장</SaveButton>
        <Link to={'/CreateOrganizationSecond'}>
          <NextButton>
            <div>추가 정보</div> <img src={arrow} />
          </NextButton>
        </Link>
      </Next>
    </BackGround>
  );
};

export default CreateRecruitmentFirst;

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

const NextButton = styled.button`
  display: inline-block
  align-items: center;
  justify-content: center;
  position: relative;
  color: #008fd5;
  font-family: 'GmarketSansMedium';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  width: 130px;
  height: 40px;
  border-radius: 15px;
  border: 1px solid #32a9eb;
  &:hover {
    background-color: #0080ff;
    color: #ffffff;
  }

  &:active {
    color: #008fd5;
  }
  img {
    vertical-align: middle;
    width: 20px;
    height: 20px;
    margin-left: 67px;
  }
  div {
    position: absolute;
    top: 3%;
    line-height: 40px;
    text-align: center;
    margin-left: 12px;
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
