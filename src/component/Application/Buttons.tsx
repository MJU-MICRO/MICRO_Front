import React from 'react';
import { ButtonsContainer } from './ApplicationStyles';
import { ButtonsProps } from './ApplicationProps';
import styled from 'styled-components';

const Buttons: React.FC<ButtonsProps> = ({ save, submit }) => {
  return (
    <ButtonsContainer>
      <SaveButton onClick={save}>임시저장</SaveButton>
      <SubmitButton onClick={submit}>등록하기</SubmitButton>
    </ButtonsContainer>
  );
};

export default Buttons;

const SaveButton = styled.button`
  color: #358e48;
  font-size: 0.9375rem;
  font-style: normal;
  font-family: 'GmarketSansMedium';
  font-weight: 500;
  line-height: 41px;
  width: 104px;
  height: 40px;
  margin-right: 10px;
  border-radius: 15px;
  border: 1px solid rgba(41, 180, 72, 0.7);
  cursor: pointer;
  &:hover {
    background-color: #04b404;
    color: #ffffff;
  }

  &:active {
    color: #358e48;
  }

  cursor: pointer;
  a {
    text-decoration: none;
  }
`;

const SubmitButton = styled.button`
  color: #008fd5;
  font-family: 'GmarketSansMedium';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  width: 104px;
  height: 40px;
  line-height: 41px;
  border-radius: 15px;
  border: 1px solid #32a9eb;
  cursor: pointer;
  &:hover {
    background-color: #0080ff;
    color: #ffffff;
  }
  &:active {
    color: #008fd5;
  }
`;
