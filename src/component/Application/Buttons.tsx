import React from 'react';
import { ButtonsContainer, SaveBtn, ApplyBtn } from './ApplicationStyles';
import { ButtonsProps } from './ApplicationProps';

const Buttons: React.FC<ButtonsProps> = ({ save, submit }) => {
  return (
    <ButtonsContainer>
      <SaveBtn onClick={save}>임시저장</SaveBtn>
      <ApplyBtn onClick={submit}>지원하기</ApplyBtn>
    </ButtonsContainer>
  );
};

export default Buttons;
