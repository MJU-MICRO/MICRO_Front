import React from 'react';
import {
  BasicInfoContainer,
  BasicInfoForm,
  InputContainer,
  RightInputContainer,
  BasicInfoLabel,
  BasicInfoText,
  BasicInput,
  BasicInfoSelect
} from './ApplicationStyles';
import { BasicInfoProps } from './ApplicationProps';

const BasicInfo: React.FC<BasicInfoProps> = ({
  user,
  setUser,
  fieldOptions,
  setFieldOptions
}) => {
  const changeFieldHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
    <BasicInfoContainer>
      <BasicInfoForm>
        <InputContainer>
          <BasicInfoLabel htmlFor='name'>
            <BasicInfoText>이름</BasicInfoText>
            <BasicInput id='name' type='text' defaultValue={user.name} />
          </BasicInfoLabel>
          <BasicInfoLabel htmlFor='studentId'>
            <BasicInfoText>학번</BasicInfoText>
            <BasicInput
              id='studentId'
              type='text'
              defaultValue={user.studentId}
            />
          </BasicInfoLabel>
          <BasicInfoLabel htmlFor='major'>
            <BasicInfoText>학과</BasicInfoText>
            <BasicInput id='major' type='text' defaultValue={user.major} />
          </BasicInfoLabel>
          <BasicInfoLabel htmlFor='field'>
            <BasicInfoText>지원 분야</BasicInfoText>
            <BasicInfoSelect
              id='field'
              value={user.field}
              onChange={changeFieldHandler}>
              {fieldOptions.map((option: string) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </BasicInfoSelect>
          </BasicInfoLabel>
        </InputContainer>
        <RightInputContainer>
          <BasicInfoLabel htmlFor='phone'>
            <BasicInfoText>전화번호</BasicInfoText>
            <BasicInput id='phone' type='text' defaultValue={user.phone} />
          </BasicInfoLabel>
          <BasicInfoLabel htmlFor='grade'>
            <BasicInfoText>학년</BasicInfoText>
            <BasicInfoSelect id='grade' onChange={changeGradeHandler}>
              <option value='1'>1학년</option>
              <option value='2'>2학년</option>
              <option value='3'>3학년</option>
              <option value='4'>4학년</option>
            </BasicInfoSelect>
          </BasicInfoLabel>
        </RightInputContainer>
      </BasicInfoForm>
    </BasicInfoContainer>
  );
};

export default BasicInfo;
