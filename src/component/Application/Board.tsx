import React, { useState, useEffect } from 'react';
import BasicInfo from './BasicInfo';
import TextareaContainer from './TextareaContainer';
import Buttons from './Buttons';
import { BoardContainer, BoardTitle, BoardText } from './ApplicationStyles';
import { Application } from './ApplicationProps';
import { RecruitmentProps } from '../recruitment/RecruitmentProps';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const Board: React.FC = () => {
  const recruitmentIdString = localStorage.getItem('recruitmentId');
  const recruitmentId = recruitmentIdString
    ? parseInt(recruitmentIdString, 10)
    : null;
  const [user, setUser] = useState({
    name: '',
    studentId: '',
    major: '',
    phoneNumber: ''
  });
  const [fields, setFields] = useState<string[]>([]);
  const [questions, setQuestions] = useState<string[]>([]);
  const [recruitmentDatalist, setRecruitmentDatalist] = useState<
    RecruitmentProps[]
  >([]);
  const [recruitmentData, setRecruitmentData] =
    useState<RecruitmentProps | null>(null);
  const [application, setApplication] = useState<Application>({
    answer: [],
    supportField: '',
    grade: '1',
    isAttending: true,
    isSubmit: false
  });
  const [answer, setAnswer] = useState<string[]>([]);
  const [characterLimit, setCharacterLimit] = useState<number[]>([]);
  const [supportField, setSupportField] = useState<string>('');
  const [isAttending, setIsAttending] = useState<boolean>(true);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get('https://nolmyong.com/recruitments')
      .then((response) => {
        console.log(response);
        if (response.data.data) {
          setRecruitmentDatalist(response.data.data);
          console.log(recruitmentId);
        } else {
          console.error('Recruitment data not available:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching recruitment data:', error);
      });
  }, []);

  useEffect(() => {
    if (recruitmentDatalist.length > 0 && recruitmentId) {
      const selectedRecruitment = recruitmentDatalist.find(
        (item) => item.recruitmentId === recruitmentId
      );
      setRecruitmentData(selectedRecruitment || null);
    }
  }, [recruitmentId, recruitmentDatalist]);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (recruitmentData) {
      axios
        .get('/api/user/my', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {
          console.log(response.data.data);
          const userData = response.data.data; // 유저 데이터 받아오기

          // 상태 업데이트 함수를 사용하여 유저 정보 업데이트
          setUser((prevUser) => ({
            ...prevUser,
            name: userData.name,
            phoneNumber: userData.phoneNumber,
            major: userData.major,
            studentId: userData.studentId
          }));
          setFields(recruitmentData.applicationFields);
          setQuestions([...recruitmentData.questions]);
          setCharacterLimit([...recruitmentData.characterLimit]);
          console.log(user);
        })
        .catch((error) => {
          console.error('Error updating return status:', error);
        });
    }
  }, [recruitmentData]);

  const save = () => {
    const updatedApplication = { ...application };
    updatedApplication.isSubmit = false;
    setApplication(updatedApplication);
    const dto = {
      recruitmentId: recruitmentId,
      answer: answer,
      grade: application.grade,
      supportField: supportField,
      isAttending: application.isAttending,
      isSubmit: application.isSubmit
    };
    const token = localStorage.getItem('accessToken');
    axios
      .post('api/application/initialSave', dto, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        console.log(response);
        Swal.fire({
          text: '임시저장에 성공하였습니다.',
          icon: 'success',
          confirmButtonText: '닫기'
        });
      })
      .catch((error) => {
        console.error('Error updating return status:', error);
        Swal.fire({
          text: '임시저장에 실패하였습니다.',
          icon: 'error',
          confirmButtonText: '닫기'
        });
      });
  };

  const submit = () => {
    const updatedApplication = { ...application };
    updatedApplication.isSubmit = true;
    setApplication(updatedApplication);
    const dto = {
      recruitmentId: recruitmentId,
      answer: answer,
      grade: application.grade,
      supportField: supportField,
      isAttending: application.isAttending,
      isSubmit: application.isSubmit
    };
    console.log(dto);
    const token = localStorage.getItem('accessToken');
    axios
      .post('https://nolmyong.com/api/application/initialSave', dto, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        console.log(response);
        Swal.fire({
          text: '제출이 완료되었습니다.',
          icon: 'success',
          confirmButtonText: '닫기'
        });
      })
      .catch((error) => {
        console.error('Error updating return status:', error);
        Swal.fire({
          text: '제출에 실패하였습니다.',
          icon: 'error',
          confirmButtonText: '닫기'
        });
      });
  };
  return (
    <BoardContainer>
      <BoardTitle>기본 등록 정보</BoardTitle>
      <BoardText>
        해당 정보는 지원서 작성 완료 시 자동으로 전달됩니다.
      </BoardText>
      <BasicInfo
        user={user}
        application={application}
        setApplication={setApplication}
        setSupportField={setSupportField}
        setIsAttending={setIsAttending}
        fields={fields}
      />
      <TextareaContainer
        questions={questions}
        setQuestions={setQuestions}
        answer={answer}
        setAnswer={setAnswer}
        characterLimit={characterLimit}
      />
      <StyledLink to={'/recruitmentList'}>
        <Buttons save={save} submit={submit} />
      </StyledLink>
    </BoardContainer>
  );
};

export default Board;

const StyledLink = styled(NavLink)`
  text-decoration: none;
`;
