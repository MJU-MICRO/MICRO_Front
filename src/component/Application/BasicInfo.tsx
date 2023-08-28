import React from 'react';
import {
  BasicInfoContainer,
  BasicInfoForm,
  InputContainer,
  RightInputContainer,
  BasicInfoLabel,
  BasicInfoText,
  BasicInput,
  BasicInfoSelect,
  BasicInfoAsterisk
} from './ApplicationStyles';
import { BasicInfoProps } from './ApplicationProps';
import SelectField from './SelectField';
import SelectAttending from './SelectAttending';
import SelectMemberCount from '../Organization/apply/SelectMemberCount';
import SelectGrade from './SelectGrade';

const BasicInfo: React.FC<BasicInfoProps> = ({
  user,
  application,
  setApplication,
  setSupportField,
  fields,
  setIsAttending
}) => {
  return (
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
              <SelectField fields={fields} onChange={setSupportField} />
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
            <SelectAttending onChange={setIsAttending} />
          </BasicInfoLabel>
          <BasicInfoLabel htmlFor='grade'>
            <BasicInfoText>
              학년
              <BasicInfoAsterisk>*</BasicInfoAsterisk>
            </BasicInfoText>
            <SelectGrade
              onChange={(grade) => setApplication({ ...application, grade })}
            />
          </BasicInfoLabel>
        </RightInputContainer>
      </BasicInfoForm>
    </BasicInfoContainer>
  );
};

export default BasicInfo;
