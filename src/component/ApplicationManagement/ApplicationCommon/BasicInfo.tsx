import React from 'react';
import {
  BasicInfoContainer,
  BasicInfoForm,
  InputContainer,
  RightInputContainer,
  BasicInfoLabel,
  BasicInfoText,
  BasicInput,
  BasicInfoAsterisk
} from '../../Application/ApplicationStyles';

import SelectField from './SelectField';
import SelectAttending from './SelectAttending';

import SelectGrade from './SelectGrade';
import { User, Application } from 'component/Application/ApplicationProps';

export interface BasicInfoProps {
  user: User;
  application: Application;
  setApplication: (application: any) => void;
  setSupportField: (field: string) => void;
  fields: string[];
  setIsAttending: (isAttending: boolean) => void;
  isAttending: boolean;
  grade: string;
  userSelectedField: string;
}

const BasicInfo = ({
  user,
  application,
  setApplication,
  setSupportField,
  fields,
  setIsAttending,
  isAttending,
  grade,
  userSelectedField
}: BasicInfoProps) => {
  return (
    <>
      <BasicInfoContainer>
        <BasicInfoForm>
          <InputContainer>
            <BasicInfoLabel htmlFor='name'>
              <BasicInfoText>
                이름
                <BasicInfoAsterisk>*</BasicInfoAsterisk>
              </BasicInfoText>
              <BasicInput name='name' type='text' defaultValue={user.name} />
            </BasicInfoLabel>
            <BasicInfoLabel htmlFor='studentId'>
              <BasicInfoText>
                학번
                <BasicInfoAsterisk>*</BasicInfoAsterisk>
              </BasicInfoText>
              <BasicInput
                name='studentId'
                type='text'
                defaultValue={user.studentId}
              />
            </BasicInfoLabel>
            <BasicInfoLabel htmlFor='major'>
              <BasicInfoText>
                학과
                <BasicInfoAsterisk>*</BasicInfoAsterisk>
              </BasicInfoText>
              <BasicInput name='major' type='text' defaultValue={user.major} />
            </BasicInfoLabel>
            <BasicInfoLabel htmlFor='field'>
              <BasicInfoText>지원 분야</BasicInfoText>
              {fields !== null && (
                <SelectField
                  fields={fields}
                  onChange={setSupportField}
                  userSelectedField={userSelectedField}
                />
              )}
            </BasicInfoLabel>
          </InputContainer>
          <RightInputContainer>
            <BasicInfoLabel htmlFor='phone'>
              <BasicInfoText>
                전화번호
                <BasicInfoAsterisk>*</BasicInfoAsterisk>
              </BasicInfoText>
              <BasicInput
                name='phone'
                type='text'
                defaultValue={user.phoneNumber}
              />
            </BasicInfoLabel>
            <BasicInfoLabel htmlFor='isAttending'>
              <BasicInfoText>
                재학유무
                <BasicInfoAsterisk>*</BasicInfoAsterisk>
              </BasicInfoText>
              <SelectAttending
                onChange={setIsAttending}
                isAttending={isAttending}
              />
            </BasicInfoLabel>
            <BasicInfoLabel htmlFor='grade'>
              <BasicInfoText>
                학년
                <BasicInfoAsterisk>*</BasicInfoAsterisk>
              </BasicInfoText>
              <SelectGrade
                onChange={(grade) => setApplication({ ...application, grade })}
                grade={grade}
              />
            </BasicInfoLabel>
          </RightInputContainer>
        </BasicInfoForm>
      </BasicInfoContainer>
    </>
  );
};

export default BasicInfo;
