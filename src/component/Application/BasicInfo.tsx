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
  application,
  setApplication,
  fieldOptions,
  setFieldOptions
}) => {
  const changeFieldHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newField = event.target.value;
    const fieldUpdatedApplication = { ...application };
    fieldUpdatedApplication.supportField = newField;
    setApplication(fieldUpdatedApplication);
  };

  const changeGradeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newGrade = event.target.value;
    const gradeUpdatedApplication = { ...application };
    gradeUpdatedApplication.grade = newGrade;
    setApplication(gradeUpdatedApplication);
  };

  return (
    <BasicInfoContainer>
      <BasicInfoForm>
        <InputContainer>
          <BasicInfoLabel htmlFor='name'>
            <BasicInfoText>이름</BasicInfoText>
            <BasicInput name='name' type='text' defaultValue={user.name} />
          </BasicInfoLabel>
          <BasicInfoLabel htmlFor='studentId'>
            <BasicInfoText>학번</BasicInfoText>
            <BasicInput
              name='studentId'
              type='text'
              defaultValue={user.studentId}
            />
          </BasicInfoLabel>
          <BasicInfoLabel htmlFor='major'>
            <BasicInfoText>학과</BasicInfoText>
            <BasicInput name='major' type='text' defaultValue={user.major} />
          </BasicInfoLabel>
          <BasicInfoLabel htmlFor='field'>
            <BasicInfoText>지원 분야</BasicInfoText>
            <BasicInfoSelect
              name='field'
              value={application.supportField}
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
            <BasicInput name='phone' type='text' defaultValue={user.phone} />
          </BasicInfoLabel>
          <BasicInfoLabel htmlFor='grade'>
            <BasicInfoText>학년</BasicInfoText>
            <BasicInfoSelect name='grade' onChange={changeGradeHandler}>
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
