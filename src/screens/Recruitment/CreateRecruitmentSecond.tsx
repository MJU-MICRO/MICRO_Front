import React, { useState } from 'react';
import styled from 'styled-components';
import check_box from '../../assets/check-box.svg';
import level_one_2 from '../../assets/level_one_2.svg';
import level_two_2 from '../../assets/level_two_2.svg';
import recycleBin from '../../assets/recycleBin.svg';
import box from '../../assets/box.svg';
import {
  RecruitmentContainer2,
  TextContainer,
  BasicNoticeTitle,
  BasicNoticeTextLight,
  QustionContainer,
  InnerContainer,
  QuestionTitleInput,
  QuestionAddBtn
} from '../../component/CreateRecruitment/CreateRecruitmentStyles';
import SelectCount from '../../component/Organization/apply/SelectCount';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { RecruitmentProps } from '../../component/recruitment/RecruitmentProps';
import Swal from 'sweetalert2';

type QuestionType = 'long' | 'short' | 'checkbox';

interface Question {
  title: string;
  type: QuestionType;
}

const CreateRecruitmentSecond: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [characterNum, setCharacterNum] = useState<number[]>([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const photos = JSON.parse(queryParams.get('photos') || '[]') as File[];
  const recruitment = JSON.parse(
    queryParams.get('recruitment') || '{}'
  ) as RecruitmentProps;
  const handleAddQuestion = () => {
    const newQuestion: Question = {
      title: '',
      type: 'long'
    };
    const updatedQuestions = [...questions, newQuestion];
    setQuestions(updatedQuestions);

    const newCharacterNum = [...characterNum, 0]; // 새로운 질문의 글자 수를 0으로 초기화
    setCharacterNum(newCharacterNum);
  };

  const handleQuestionTitleChange = (index: number, title: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].title = title;
    setQuestions(updatedQuestions);
  };

  const handleCountChange = (index: number, value: number) => {
    const updatedCharacterNum = [...characterNum];
    updatedCharacterNum[index] = value;
    setCharacterNum(updatedCharacterNum);
  };
  const handleDeleteQuestion = (index: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1); // Remove the question at the specified index
    setQuestions(updatedQuestions);

    const updatedCharacterNum = [...characterNum];
    updatedCharacterNum.splice(index, 1); // Remove the corresponding characterNum entry
    setCharacterNum(updatedCharacterNum);
  };
  const save = () => {
    const request = {
      groupId: 0,
      title: recruitment.title,
      description: recruitment.description,
      content: recruitment.content,
      fields: recruitment.applicationFields,
      activityPeriod: recruitment.activePeriod,
      startDateTime: recruitment.startDateTime,
      endDateTime: recruitment.endDateTime,
      fileDescriptions: recruitment.captions,
      activePlace: recruitment.activePlace,
      isSubmit: false,
      questions: questions,
      characterLimit: characterNum
    };
    console.log(request);
    const formData = new FormData();
    const token = localStorage.getItem('accessToken');
    formData.append(
      'dto',
      new Blob([JSON.stringify(request)], { type: 'application/json' })
    ); // Application data as JSON
    photos.forEach((photo, index) => {
      formData.append(`file[${index}]`, photo);
    });
    axios
      .post(
        'api/president/recruitment',
        formData, // Use the FormData object here
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then((response) => {
        console.log(response);
        alert('등록 되었습니다.');
      })
      .catch((error) => {
        console.error('Error updating return status:', error);
        alert('등록에 실패하였습니다.');
      });
  };

  const submit = () => {
    const request = {
      groupId: 0,
      title: recruitment.title,
      description: recruitment.description,
      content: recruitment.content,
      fields: recruitment.applicationFields,
      activityPeriod: recruitment.activePeriod,
      startDateTime: recruitment.startDateTime,
      endDateTime: recruitment.endDateTime,
      fileDescriptions: recruitment.captions,
      activePlace: recruitment.activePlace,
      isSubmit: true,
      questions: questions,
      characterLimit: characterNum
    };
    console.log(request);
    console.log(photos);
    const formData = new FormData();
    const token = localStorage.getItem('accessToken');
    formData.append(
      'dto',
      new Blob([JSON.stringify(request)], { type: 'application/json' })
    ); // Application data as JSON
    photos.forEach((photo, index) => {
      formData.append(`file[${index}]`, photo);
    });
    axios
      .post(
        'api/president/recruitment',
        formData, // Use the FormData object here
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then((response) => {
        console.log(response);
        Swal.fire({
          text: '모집공고가 등록되었습니다.',
          icon: 'success',
          confirmButtonText: '닫기'
        });
      })
      .catch((error) => {
        console.error('Error updating return status:', error);
        Swal.fire({
          text: '모집공고 등록에 실패했습니다.',
          icon: 'error',
          confirmButtonText: '닫기'
        });
      });
  };
  return (
    <BackGround>
      <Wrapper>
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
        <img src={box} />
      </Wrapper>
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
              <SelectCount
                onChange={
                  (value: number) => handleCountChange(index, value) // 선택한 글자 수 변경 시 해당 함수 호출
                }
              />
              <Recycle
                src={recycleBin}
                onClick={() => handleDeleteQuestion(index)} // Call delete function on click
              />
            </InnerContainer>
          </QustionContainer>
        ))}
      </Board>
      <Level>
        <img src={level_one_2} />
        <img src={level_two_2} />
      </Level>
      <Next>
        <Link to={'/recruitmentList'}>
          <SubmitButton onClick={submit}>등록하기</SubmitButton>
        </Link>
      </Next>
    </BackGround>
  );
};

export default CreateRecruitmentSecond;
const Wrapper = styled.div`
  position: fixed;
  top: 350px;
  left: 1400px;
  display: flex;
  flex-direction: row;
  z-index: 100;
`;
const Recycle = styled.img`
  width: 25px;
  height: 25px;
  margin-bottom: 8px;
  margin-left: 12px;
`;
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
