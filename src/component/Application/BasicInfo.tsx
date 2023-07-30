import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 38rem;
  height: 22.5rem;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: flex-start;
  border-bottom: 0.5px solid #dddddd;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

const StyledContainer = styled.div`
  width: 19rem;
  heigth: auto;
  display: flex;
  flex-direction: column;
`;

const StyledRightContainer = styled(StyledContainer)`
  margin-left: 5.2rem;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1.3rem;
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  width: 16rem;
  height: 2.0625rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  border: 1px solid #dbdbdf;
  background: #fff;

  color: #000;
  leading-trim: both;
  text-edge: cap;
  font-family: Gmarket Sans TTF;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const StyledSelect = styled.select`
  width: 16rem;
  height: 2.3rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  border: 1px solid #dbdbdf;
  background: #fff;
  cursor: pointer;

  color: #000;
  leading-trim: both;
  text-edge: cap;
  font-family: Gmarket Sans TTF;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

interface User {
  name: string;
  studentId: string;
  major: string;
  field: string;
  phone: string;
  grade: string;
}

interface BasicInfoProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const BasicInfo: React.FC<BasicInfoProps> = ({ user, setUser }) => {
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

  return (
    <Wrapper>
      <StyledForm>
        <StyledContainer>
          <StyledLabel htmlFor='name'>
            <StyledText>이름</StyledText>
            <StyledInput id='name' type='text' defaultValue={user.name} />
          </StyledLabel>
          <StyledLabel htmlFor='studentId'>
            <StyledText>학번</StyledText>
            <StyledInput
              id='studentId'
              type='text'
              defaultValue={user.studentId}
            />
          </StyledLabel>
          <StyledLabel htmlFor='major'>
            <StyledText>학과</StyledText>
            <StyledInput id='major' type='text' defaultValue={user.major} />
          </StyledLabel>
          <StyledLabel htmlFor='field'>
            <StyledText>지원 분야</StyledText>
            <StyledInput
              id='field'
              type='text'
              defaultValue={user.field}
              onChange={changeFieldHandler}
            />
          </StyledLabel>
        </StyledContainer>
        <StyledRightContainer>
          <StyledLabel htmlFor='phone'>
            <StyledText>전화번호</StyledText>
            <StyledInput id='phone' type='text' defaultValue={user.phone} />
          </StyledLabel>
          <StyledLabel htmlFor='grade'>
            <StyledText>학년</StyledText>
            <StyledSelect id='grade' onChange={changeGradeHandler}>
              <option value='1'>1학년</option>
              <option value='2'>2학년</option>
              <option value='3'>3학년</option>
              <option value='4'>4학년</option>
            </StyledSelect>
          </StyledLabel>
        </StyledRightContainer>
      </StyledForm>
    </Wrapper>
  );
};

export default BasicInfo;
