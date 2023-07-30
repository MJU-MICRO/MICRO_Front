import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import axios from 'axios';
import BasicInfo from './BasicInfo';
import TextareaContainer from './TextareaContainer';
import Buttons from './Buttons';

const Wrapper = styled.div`
  position: relative;
  width: 41.1875rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0.938rem;
  background-color: #ffffff;
  margin-bottom: 3rem;
`;

const StyledTitle = styled.div`
  width: 38rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: 1rem;
  font-weight: 500;
  color: #000000;
  opacity: 100%;
  margin-top: 2.3rem;
`;

const StyledText = styled.div`
  width: 38rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: rgba(0, 0, 0, 0.8);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  margin-top: 0.5rem;
`;

const Board: React.FC = () => {
  const [user, setUser] = useState({
    name: '김명지',
    studentId: '60230000',
    major: '응용소프트웨어학과',
    field: '복숭아🍑',
    phone: '01012341234',
    grade: '1'
  });

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

  const save = () => {
    console.log('임시저장');
    console.log(application);
  };

  const submit = () => {
    // const dataToSend = {
    //   user: user,
    //   application: application
    // };

    // axios
    //   .post('', dataToSend)
    //   .then((response) => {
    //     console.log('서버 응답:', response.data);
    //   })
    //   .catch((error) => {
    //     console.error('에러 발생:', error);
    //   });

    console.log('지원하기');
    console.log(application);
  };

  return (
    <Wrapper>
      <StyledTitle>기본 등록 정보</StyledTitle>
      <StyledText>
        해당 정보는 지원서 작성 완료 시 자동으로 전달됩니다.
      </StyledText>
      <BasicInfo user={user} setUser={setUser} />
      <TextareaContainer
        application={application}
        setApplication={setApplication}
      />
      <Buttons save={save} submit={submit} />
    </Wrapper>
  );
};

export default Board;
