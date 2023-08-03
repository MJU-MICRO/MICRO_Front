import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import BasicInfo from './BasicInfo';
import TextareaContainer from './TextareaContainer';
import Buttons from './Buttons';
import { BoardContainer, BoardTitle, BoardText } from './ApplicationStyles';
import { Application } from './ApplicationProps';

const Board: React.FC = () => {
  const [user, setUser] = useState({
    name: '김명지',
    studentId: '60230000',
    major: '응용소프트웨어학과',
    phone: '01012341234'
  });

  // useEffect(() => {
  // user테이블에서 받기
  //   axios
  //     .get('/api/user', {
  //       params: {
  //         id: userId
  //       }
  //     })
  //     .then((response) => {
  //       setUser(response.data);
  //     });
  // }, []);

  const [recruitment, setRecruitment] = useState({
    // 테스트 값
    applicationField: ['사과🍎', '수박🍉', '포도🍇', '딸기🍓', '복숭아🍑'],
    questions: [
      '1. 지원동기를 작성해주세요.',
      '2. 좋아하는 과일을 말씀해주세요'
    ]
  });

  // useEffect(() => {
  // recruitment테이블에서 받기
  //     axios
  //       .get('/api/recruitment')
  //       .then((response) => {
  //         setRecruitment(response.data);
  //       })
  //       .catch((error) => {
  //         console.error('에러 발생:', error);
  //       });
  //   }, []);

  const [questions, setQuestions] = useState<string[]>([]);

  useEffect(() => {
    setQuestions([...recruitment.questions]);
  }, []);

  const [application, setApplication] = useState<Application>({
    answer: [],
    supportField: '사과🍎',
    grade: '1',
    isAttending: true,
    isSubmit: false
  });

  const [supportField, setSupportField] = useState<string>('사과🍎');

  // useEffect(() => {
  // application테이블에서 받기
  //   axios
  //     .get('/api/application', {
  //       params: {
  //         id: applicationId
  //       }
  //     })
  //     .then((response) => {
  //       setApplication(response.data);
  //     });
  // }, []);

  const [answer, setAnswer] = useState<string[]>([]);

  const save = () => {
    // 임시저장
    // const dataToSave = {
    //   user: user,
    //   application: application,
    //   answer: answer,
    //   fieldOptions: fieldOptions
    // };
    // axios
    //   .post('/api/Application', dataToSave)
    //   .then((response) => {
    //     console.log('서버 응답:', response.data);
    //   })
    //   .catch((error) => {
    //     console.error('에러 발생:', error);
    //   });
    // 테스트
    console.log('임시저장 버튼 클릭!');
    console.log('지원동기: ' + answer[0]);
    console.log('좋아하는 과일: ' + answer[1]);
    console.log('이름: ' + user.name);
    console.log('학번: ' + user.studentId);
    console.log('전공: ' + user.major);
    console.log('지원 분야: ' + application.supportField);
    console.log('전화번호: ' + user.phone);
    console.log('학년: ' + application.grade);
  };

  const submit = () => {
    // 지원하기
    // const dataToSubmit = {
    //   user: user,
    //   application: application,
    //   answer: answer,
    //   fieldOptions: fieldOptions
    // };
    // axios
    //   .post('/api/Application', dataToSubmit)
    //   .then((response) => {
    //     console.log('서버 응답:', response.data);
    //   })
    //   .catch((error) => {
    //     console.error('에러 발생:', error);
    //   });
    // 테스트
    console.log('지원하기 버튼 클릭!');
    console.log('지원동기: ' + answer[0]);
    console.log('좋아하는 과일: ' + answer[1]);
    console.log('이름: ' + user.name);
    console.log('학번: ' + user.studentId);
    console.log('전공: ' + user.major);
    console.log('지원 분야: ' + application.supportField);
    console.log('전화번호: ' + user.phone);
    console.log('학년: ' + application.grade);
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
        recruitment={recruitment}
      />

      <TextareaContainer
        questions={questions}
        setQuestions={setQuestions}
        answer={answer}
        setAnswer={setAnswer}
      />
      <Buttons save={save} submit={submit} />
    </BoardContainer>
  );
};

export default Board;
