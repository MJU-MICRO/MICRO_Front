import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import BasicInfo from './BasicInfo';
import TextareaContainer from './TextareaContainer';
import Buttons from './Buttons';
import { BoardContainer, BoardTitle, BoardText } from './ApplicationStyles';

const Board: React.FC = () => {
  const [user, setUser] = useState({
    name: '김명지',
    studentId: '60230000',
    major: '응용소프트웨어학과',
    field: '사과',
    phone: '01012341234',
    grade: '1'
  });

  const [fieldOptions, setFieldOptions] = useState<string[]>([
    '사과🍎',
    '수박🍉',
    '포도🍇',
    '딸기🍓'
  ]);

  const [application, setApplication] = useState({
    motivation: '',
    favoriteFruit: ''
  });

  // useEffect(() => {
  //   axios
  //     .get('', {
  //       params: {
  //         id: 1
  //       }
  //     })
  //     .then((response) => {
  //       setUser(response.data);
  //     });
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get('/api/fields')
  //     .then((response) => {
  //       setFieldOptions(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('에러 발생:', error);
  //     });
  // }, []);

  const save = () => {
    // 임시저장
    // const dataToSave = {
    // user: user,
    // application: application,
    // fieldOptions: fieldOptions,
    // };
    // axios
    //   .post('', dataToSave)
    //   .then((response) => {
    //     console.log('서버 응답:', response.data);
    //   })
    //   .catch((error) => {
    //     console.error('에러 발생:', error);
    //   });

    // 테스트
    console.log('임시저장 버튼 클릭!');
    console.log('지원동기: ' + application.motivation);
    console.log('좋아하는 과일: ' + application.favoriteFruit);
    console.log('이름: ' + user.name);
    console.log('학번: ' + user.studentId);
    console.log('전공: ' + user.major);
    console.log('지원 분야: ' + user.field);
    console.log('전화번호: ' + user.phone);
    console.log('학년: ' + user.grade);
  };

  const submit = () => {
    // 지원하기
    // const dataToSubmit = {
    //   user: user,
    //   application: application,
    //   fieldOptions: fieldOptions
    // };

    // axios
    //   .post('', dataToSubmit)
    //   .then((response) => {
    //     console.log('서버 응답:', response.data);
    //   })
    //   .catch((error) => {
    //     console.error('에러 발생:', error);
    //   });

    // 테스트
    console.log('지원하기 버튼 클릭!');
    console.log('지원동기: ' + application.motivation);
    console.log('좋아하는 과일: ' + application.favoriteFruit);
    console.log('이름: ' + user.name);
    console.log('학번: ' + user.studentId);
    console.log('전공: ' + user.major);
    console.log('지원 분야: ' + user.field);
    console.log('전화번호: ' + user.phone);
    console.log('학년: ' + user.grade);
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
        fieldOptions={fieldOptions}
        setFieldOptions={setFieldOptions}
      />
      <TextareaContainer
        application={application}
        setApplication={setApplication}
      />
      <Buttons save={save} submit={submit} />
    </BoardContainer>
  );
};

export default Board;
