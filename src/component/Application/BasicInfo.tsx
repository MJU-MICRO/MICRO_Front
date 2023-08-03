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
  supportField,
  setSupportField,
  recruitment,
  isAttending,
  setIsAttending,
  isSubmit,
  setIsSubmit
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

  const changeIsAttendingHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newIsAttending = event.target.value === 'true';
    const updatedApplication = { ...application };
    updatedApplication.isAttending = newIsAttending;
    setApplication(updatedApplication);
  };

  const changeIsSubmittingHander = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newIsSubmitting = event.target.value === 'true';
    const updatedApplication = { ...application };
    updatedApplication.isSubmit = newIsSubmitting;
    setApplication(updatedApplication);
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
              id='supportField'
              value={supportField}
              onChange={changeFieldHandler}>
              {recruitment.applicationField.map(
                (field: string, index: number) => (
                  <option key={index} value={field}>
                    {field}
                  </option>
                )
              )}
            </BasicInfoSelect>
          </BasicInfoLabel>
        </InputContainer>
        <RightInputContainer>
          <BasicInfoLabel htmlFor='phone'>
            <BasicInfoText>전화번호</BasicInfoText>
            <BasicInput name='phone' type='text' defaultValue={user.phone} />
          </BasicInfoLabel>
          <BasicInfoLabel htmlFor='isAttending'>
            <BasicInfoText>재학유무</BasicInfoText>
            <BasicInfoSelect
              name='isAttending'
              onChange={changeIsAttendingHandler}>
              <option value='true'>재학중</option>
              <option value='false'>휴학중</option>
            </BasicInfoSelect>
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
