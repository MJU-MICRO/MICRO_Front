import React, { useState } from 'react';
import styled from 'styled-components';
import check_box from '../../assets/check-box.svg';
import level_one_2 from '../../assets/level_one_2.svg';
import level_two_2 from '../../assets/level_two_2.svg';
import arrow from '../../assets/arrow.svg';

import {
  RecruitmentContainer,
  RecruitmentContainer2,
  TextContainer,
  BasicNoticeTitle,
  BasicNoticeTextLight,
  QustionContainer,
  InnerContainer,
  QuestionTitleInput,
  QuestionSelect,
  QuestionTitle,
  RedAsterisk,
  QuestionAddBtn
} from '../../component/CreateRecruitment/CreateRecruitmentStyles';

type QuestionType = 'long' | 'short' | 'checkbox';

interface Question {
  title: string;
  type: QuestionType;
}

const CreateRecruitmentSecond: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  // 새로운 질문을 추가하는 함수
  const handleAddQuestion = () => {
    // 새로운 질문을 생성하고 기존 질문 배열에 추가
    const newQuestion: Question = {
      title: '',
      type: 'long' // 초기 값으로 장문형 선택
    };
    const updatedQuestions = [...questions, newQuestion];
    setQuestions(updatedQuestions);
  };

  // 질문 제목 변경 핸들러
  const handleQuestionTitleChange = (index: number, title: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].title = title;
    setQuestions(updatedQuestions);
  };

  // 질문 유형 변경 핸들러
  const handleQuestionTypeChange = (index: number, type: QuestionType) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].type = type;
    setQuestions(updatedQuestions);
  };

  return (
    <BackGround>
      <QuestionAddBtn onClick={handleAddQuestion}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'>
          <g clip-path='url(#clip0_601_29)'>
            <path
              d='M20.0011 38.5714C30.258 38.5714 38.5725 30.2569 38.5725 20C38.5725 9.7433 30.258 1.42859 20.0011 1.42859C9.7444 1.42859 1.42969 9.7433 1.42969 20C1.42969 30.2569 9.7444 38.5714 20.0011 38.5714Z'
              stroke='#32A9EB'
              stroke-width='3'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M20 11.4286V28.5714'
              stroke='#32A9EB'
              stroke-width='3'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M11.4297 20H28.5725'
              stroke='#32A9EB'
              stroke-width='3'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </g>
          <defs>
            <clipPath id='clip0_601_29'>
              <rect width='40' height='40' fill='white' />
            </clipPath>
          </defs>
        </svg>
      </QuestionAddBtn>
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
        <RecruitmentContainer2>
          <TextContainer>
            <BasicNoticeTitle>모집 공고 질문 작성하기 </BasicNoticeTitle>
          </TextContainer>
          <TextContainer>
            <BasicNoticeTextLight>
              모집 공고 질문은 최대 10개까지 등록 가능해요!
            </BasicNoticeTextLight>
          </TextContainer>
        </RecruitmentContainer2>
        {/* <QustionContainer>
          <InnerContainer>
            <QuestionTitleInput
              name='questionTitle'
              type='text'
              placeholder='질문 제목을 작성해주세요.'
            />
            <QuestionSelect>
              <option>장문형</option>
              <option>단답형</option>
              <option>체크박스</option>
            </QuestionSelect>
          </InnerContainer>
          <InnerContainer>
            <QuestionTitle>장문형 텍스트</QuestionTitle>
          </InnerContainer>
        </QustionContainer> */}

        {/* {questions.map((question, index) => (
          <InnerContainer key={index}>
            <QuestionTitleInput
              name={`questionTitle_${index}`}
              type='text'
              placeholder='질문 제목을 작성해주세요.'
              value={question.title}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleQuestionTitleChange(index, event.target.value)
              }
            />
            <QuestionSelect
              value={question.type}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                handleQuestionTypeChange(
                  index,
                  event.target.value as QuestionType
                )
              }>
              <option value='long'>장문형</option>
              <option value='short'>단답형</option>
              <option value='checkbox'>체크박스</option>
            </QuestionSelect>
            {question.type === 'long' && (
              <QuestionTitle>장문형 텍스트</QuestionTitle>
            )}
            {question.type === 'short' && (
              <QuestionTitle>단답형 텍스트</QuestionTitle>
            )}
            {question.type === 'checkbox' && (
              <QuestionTitle>체크박스</QuestionTitle>
            )}
          </InnerContainer>
        ))} */}
        <QustionContainer>
          <InnerContainer>
            <QuestionTitleInput
              name='questionTitle'
              type='text'
              placeholder='질문 제목을 작성해주세요.'
            />
            <QuestionSelect>
              <option>장문형</option>
              <option>단답형</option>
              <option>체크박스</option>
            </QuestionSelect>
          </InnerContainer>
          <InnerContainer>
            <QuestionTitle>장문형 텍스트</QuestionTitle>
          </InnerContainer>
        </QustionContainer>
        {/*  */}
        {questions.map((question, index) => (
          <QustionContainer>
            <InnerContainer key={index}>
              <QuestionTitleInput
                name={`questionTitle_${index}`}
                type='text'
                placeholder='질문 제목을 작성해주세요.'
                value={question.title}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleQuestionTitleChange(index, event.target.value)
                }
              />
              <QuestionSelect
                value={question.type}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                  handleQuestionTypeChange(
                    index,
                    event.target.value as QuestionType
                  )
                }>
                <option value='long'>장문형</option>
                <option value='short'>단답형</option>
                <option value='checkbox'>체크박스</option>
              </QuestionSelect>
              {question.type === 'long' && <span>장문형 텍스트</span>}
              {question.type === 'short' && <span>단답형 텍스트</span>}
              {question.type === 'checkbox' && <span>체크박스</span>}
            </InnerContainer>
          </QustionContainer>
        ))}
      </Board>
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
  cursor: pointer;
  &:hover {
    background-color: #04b404;
    color: #ffffff;
  }

  &:active {
    color: #358e48;
  }

  cursor: pointer;
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
  cursor: pointer;

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
