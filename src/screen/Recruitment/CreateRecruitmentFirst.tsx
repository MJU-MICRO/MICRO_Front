import React from 'react';
import styled from 'styled-components';
import check_box from '../../assets/check-box.svg';
import level_one from '../../assets/level-one.svg';
import level_two from '../../assets/level-two.svg';
import arrow from '../../assets/arrow.svg';
import { Link } from 'react-router-dom';
import img from '../../assets/img.svg';

import {
  RecruitmentContainer,
  LogoImage,
  InfoContainer,
  TextContainer,
  GroupName,
  BasicNoticeTitle,
  BasicNoticeText,
  RedAsterisk,
  GroupLargeCategory,
  GroupCategories,
  CategoriesContainer,
  GroupContainer,
  GroupIntroduce,
  FormContainer,
  TitleInput,
  ContentInput,
  FieldContainer,
  ApplicationField,
  FieldInput,
  ActiveContentInput,
  ActivePeriodContainer,
  ActivePeriodBtn
} from '../../component/CreateRecruitment/CreateRecruitmentStyles';

const CreateRecruitmentFirst: React.FC = () => {
  return (
    <BackGround>
      <Introduction>
        <NoticeTitle>모집 공고 등록하기</NoticeTitle>
        <SubtitleContainer>
          <SubtitleBlue>모집 공고 등록 가이드</SubtitleBlue>
          <SubTitle>를 참고해 단체를 등록해보세요</SubTitle>
        </SubtitleContainer>
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
      <Board>
        <RecruitmentContainer>
          <TextContainer>
            <BasicNoticeTitle>단체 기본 정보</BasicNoticeTitle>
          </TextContainer>
          <TextContainer>
            <BasicNoticeText>
              모집 공고 등록 시 표시되는 단체 정보입니다.
            </BasicNoticeText>
          </TextContainer>
          <GroupContainer>
            <LogoImage src={img} alt='로고 이미지' />
            <InfoContainer>
              <TextContainer>
                <GroupName>과일 러버</GroupName>
                <GroupLargeCategory>소모임</GroupLargeCategory>
                <CategoriesContainer>
                  <GroupCategories>디자인/사진/영상</GroupCategories>
                  <GroupCategories>체육/헬스</GroupCategories>
                  <GroupCategories>IT/공학</GroupCategories>
                </CategoriesContainer>
                <GroupIntroduce>
                  안녕하세요, 저희는 과일 러버 소모임 과일 러버단입니다. 저희의
                  과일 사랑은 무한합니다. 사실 저는 수박만 좋아합니다. 다른 거를
                  좋아하기 위한 소모임입니다.
                </GroupIntroduce>
              </TextContainer>
            </InfoContainer>
          </GroupContainer>
        </RecruitmentContainer>
        {/* Form 시작 */}
        <FormContainer>
          <RecruitmentContainer>
            {/* 제목 */}
            <TextContainer>
              <BasicNoticeTitle>모집 공고 내용 작성하기</BasicNoticeTitle>
            </TextContainer>
            <TextContainer>
              <BasicNoticeText>모집 공고 제목</BasicNoticeText>
              <RedAsterisk>*</RedAsterisk>
            </TextContainer>
            <TitleInput
              name='recruitmentTitle'
              type='text'
              placeholder='모집 공고 제목을 작성해주세요.'
            />
          </RecruitmentContainer>
          <RecruitmentContainer>
            {/* 설명글 */}
            <TextContainer>
              <BasicNoticeText>모집 설명글</BasicNoticeText>
              <RedAsterisk>*</RedAsterisk>
            </TextContainer>
            <ContentInput
              name='description'
              placeholder='모집 설명글을 작성해주세요. (최대 300자)'
              maxLength={300}
            />
          </RecruitmentContainer>
          <RecruitmentContainer>
            {/* 모집 분야 */}
            <TextContainer>
              <BasicNoticeText>모집 분야 (최대 10개)</BasicNoticeText>
              <RedAsterisk>*</RedAsterisk>
            </TextContainer>
            <FieldContainer>
              <ApplicationField>미디어팀</ApplicationField>
              <ApplicationField>컨텐츠팀</ApplicationField>
            </FieldContainer>
            <FieldInput
              name='applicationField'
              type='text'
              placeholder='모집 분야를 작성해주세요.'
            />
          </RecruitmentContainer>
          <RecruitmentContainer>
            {/* 활동 내용 */}
            <TextContainer>
              <BasicNoticeText>활동 내용</BasicNoticeText>
              <RedAsterisk>*</RedAsterisk>
            </TextContainer>
            <ActiveContentInput
              name='activeContent'
              placeholder='주요 활동 내용을 작성해주세요. (최대 500자)'
              maxLength={500}
            />
          </RecruitmentContainer>
          <RecruitmentContainer>
            {/* 활동 기간 */}
            <TextContainer>
              <BasicNoticeText>활동 기간</BasicNoticeText>
              <RedAsterisk>*</RedAsterisk>
            </TextContainer>
            <ActivePeriodContainer>
              <ActivePeriodBtn>한 학기</ActivePeriodBtn>
              <ActivePeriodBtn>1년</ActivePeriodBtn>
              <ActivePeriodBtn>1년 이상</ActivePeriodBtn>
            </ActivePeriodContainer>
          </RecruitmentContainer>
          <RecruitmentContainer>
            {/* 모집 기간 */}
            <TextContainer>
              <BasicNoticeText>모집 기간</BasicNoticeText>
              <RedAsterisk>*</RedAsterisk>
            </TextContainer>
          </RecruitmentContainer>
        </FormContainer>
      </Board>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 13px;
  background: #fff;
  padding: 20px;
  width: 659px;
  height: auto;
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

  cursor: pointer;
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

  cursor: pointer;

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

const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
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

const SubtitleBlue = styled(SubTitle)`
  font-family: GmarketSansMedium;
  color: #32a9eb;
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
