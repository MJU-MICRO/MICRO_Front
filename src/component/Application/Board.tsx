import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import BasicInfo from './BasicInfo';
import TextareaContainer from './TextareaContainer';
import Buttons from './Buttons';
import { BoardContainer, BoardTitle, BoardText } from './ApplicationStyles';
import { Application } from './ApplicationProps';
import { RecruitmentProps } from '../recruitment/RecruitmentProps';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface BoardProps {
  recruitmentData: RecruitmentProps;
}

const Board: React.FC<BoardProps> = ({ recruitmentData }) => {
  const [user, setUser] = useState({
    name: '',
    studentId: '',
    major: '',
    phone: ''
  });
  const [fields, setFields] = useState<string[]>([]);
  const [questions, setQuestions] = useState<string[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    axios
      .get('/api/user/my', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        console.log(response.data);
        const userData = response.data; // 유저 데이터 받아오기

        // 상태 업데이트 함수를 사용하여 유저 정보 업데이트
        setUser((prevUser) => ({
          ...prevUser,
          name: userData.name,
          phone: userData.phone,
          major: userData.major,
          studentId: userData.studentId
        }));
      })
      .catch((error) => {
        console.error('Error updating return status:', error);
      });
    setFields(recruitmentData.fields);
    setQuestions([...recruitmentData.questions]);
  }, [recruitmentData]);

  const [application, setApplication] = useState<Application>({
    answer: [],
    supportField: '',
    grade: '1',
    isAttending: true,
    isSubmit: false
  });

  const [answer, setAnswer] = useState<string[]>([]);
  const [supportField, setSupportField] = useState<string>('');
  const [isAttending, setIsAttending] = useState<boolean>(true);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const save = () => {
    const updatedApplication = { ...application };
    updatedApplication.isSubmit = false;
    setApplication(updatedApplication);
    const dto = {
      recruitmentId: recruitmentData.recruitmentId,
      answer: application.answer,
      supportField: application.supportField,
      isAttending: application.isAttending,
      isSubmit: application.isSubmit
    };
    console.log(dto);
    const formData = new FormData();
    const token = localStorage.getItem('accessToken');
    formData.append(
      'dto',
      new Blob([JSON.stringify(dto)], { type: 'application/json' })
    ); // Application data as JSON
    axios
      .post(
        'api/application/initialSave',
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
    const updatedApplication = { ...application };
    updatedApplication.isSubmit = true;
    setApplication(updatedApplication);
    const dto = {
      recruitmentId: recruitmentData.recruitmentId,
      answer: application.answer,
      supportField: application.supportField,
      isAttending: application.isAttending,
      isSubmit: application.isSubmit
    };
    console.log(dto);
    const formData = new FormData();
    const token = localStorage.getItem('accessToken');
    formData.append(
      'dto',
      new Blob([JSON.stringify(dto)], { type: 'application/json' })
    ); // Application data as JSON
    axios
      .post(
        'api/application/initialSave',
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

  return (
    <BoardContainer>
      <BoardTitle>기본 등록 정보</BoardTitle>
      <BoardText>
        해당 정보는 지원서 작성 완료 시 자동으로 전달됩니다.
      </BoardText>
      <BasicInfo
        user={user}
        setUser={setUser}
        application={application}
        setApplication={setApplication}
        supportField={supportField}
        setSupportField={setSupportField}
        isAttending={isAttending}
        setIsAttending={setIsAttending}
        isSubmit={isSubmit}
        setIsSubmit={setIsSubmit}
        fields={fields}
      />
      <TextareaContainer
        questions={questions}
        setQuestions={setQuestions}
        answer={answer}
        setAnswer={setAnswer}
      />
      <Link to={'/recruitmentList'}>
        <Buttons save={save} submit={submit} />
      </Link>
    </BoardContainer>
  );
};

export default Board;
