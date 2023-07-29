import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Textarea from './Textarea';
import {
  InputWrapper,
  StyledTitle,
  StyledText,
  Form,
  StyledOuterContainer,
  StyledInnerContainer,
  StyledLabel,
  StyledInputTitle,
  StyledInput,
  StyledInnerRightContainer,
  StyledSelect,
  TextareaContainer,
  StyledFieldset,
  StyledP
} from './ApplicationStyles';

const BasicInfoContainer: React.FC = () => {
  const [user, setUser] = useState({
    name: '김명지',
    studentId: '60230000',
    major: '응용소프트웨어학과',
    field: '복숭아🍑',
    phone: '01012341234',
    grade: '1'
  });

  // 로그인한 유저의 id값을 이용
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

  const changeFieldHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newField = event.target.value;
    const fieldUpdatedUser = { ...user };
    fieldUpdatedUser.field = newField;
    setUser(fieldUpdatedUser);
  };

  const changeGradeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newGrade = event.target.value;
    const gradeUpdatedUser = { ...user };
    gradeUpdatedUser.grade = newGrade;
    setUser(gradeUpdatedUser);
  };

  const [application, setApplication] = useState({
    motivation: '',
    favoriteFruit: ''
  });

  const changeTextareaHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setApplication((prevApplication) => ({
      ...prevApplication,
      [name]: value
    }));
  };

  return (
    <InputWrapper>
      <StyledTitle>기본 등록 정보</StyledTitle>
      <StyledText>
        해당 정보는 지원서 작성 완료 시 자동으로 전달됩니다.
      </StyledText>
      <Form>
        <StyledOuterContainer>
          <StyledInnerContainer>
            <StyledLabel htmlFor='name'>
              <StyledInputTitle>이름</StyledInputTitle>
              <StyledInput id='name' type='text' value={user.name} />
            </StyledLabel>
            <StyledLabel htmlFor='studentId'>
              <StyledInputTitle>학번</StyledInputTitle>
              <StyledInput id='studentId' type='text' value={user.studentId} />
            </StyledLabel>
            <StyledLabel htmlFor='major'>
              <StyledInputTitle>학과</StyledInputTitle>
              <StyledInput id='major' type='text' value={user.major} />
            </StyledLabel>
            <StyledLabel htmlFor='field'>
              <StyledInputTitle>지원 분야</StyledInputTitle>
              <StyledInput
                id='field'
                type='text'
                value={user.field}
                onChange={changeFieldHandler}
              />
            </StyledLabel>
          </StyledInnerContainer>
          <StyledInnerRightContainer>
            <StyledLabel htmlFor='phone'>
              <StyledInputTitle>전화번호</StyledInputTitle>
              <StyledInput id='phone' type='text' value={user.phone} />
            </StyledLabel>
            <StyledLabel htmlFor='grade'>
              <StyledInputTitle>학년</StyledInputTitle>
              <StyledSelect id='grade' onChange={changeGradeHandler}>
                {/* <StyledSelect id='grade' > */}
                <option value='1'>1학년</option>
                <option value='2'>2학년</option>
                <option value='3'>3학년</option>
                <option value='4'>4학년</option>
              </StyledSelect>
            </StyledLabel>
          </StyledInnerRightContainer>
        </StyledOuterContainer>
        <TextareaContainer>
          <StyledFieldset>
            <StyledP>1. 지원 동기를 작성해주세요</StyledP>
            <Textarea
              name='motivation'
              value={application.motivation}
              onChange={changeTextareaHandler}
            />
            <StyledP>2. 좋아하는 과일을 말씀해주세요.</StyledP>
            <Textarea
              name='favoriteFruit'
              value={application.favoriteFruit}
              onChange={changeTextareaHandler}
            />
          </StyledFieldset>
        </TextareaContainer>
      </Form>
    </InputWrapper>
  );
};

export default BasicInfoContainer;
