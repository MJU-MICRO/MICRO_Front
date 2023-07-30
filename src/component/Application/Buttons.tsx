import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

const StyledBtn = styled.button`
  width: 6.5rem;
  height: 2.4375rem;
  flex-shrink: 0;
  border: none;
  border-radius: 0.9375rem;
  cursor: pointer;
`;

const SaveBtn = styled(StyledBtn)`
  background: rgba(0, 213, 47, 0.1);
  color: #358e48;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.9625rem;

  &:hover {
    background-color: #b2eba4;
    color: #ffffff;
  }

  &:active {
    background-color: rgba(0, 213, 47, 0.1);
    color: #358e48;
  }
`;

const ApplyBtn = styled(StyledBtn)`
  background: rgba(0, 143, 213, 0.1);
  color: #008fd5;
  font-family: Gmarket Sans TTF;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.9625rem;

  &:hover {
    background-color: #6ecefa;
    color: #ffffff;
  }

  &:active {
    background: rgba(0, 143, 213, 0.1);
    color: #008fd5;
  }
`;

interface ButtonsProps {
  save: () => void;
  submit: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ save, submit }) => {
  return (
    <Wrapper>
      <SaveBtn onClick={save}>임시저장</SaveBtn>
      <ApplyBtn onClick={submit}>지원하기</ApplyBtn>
    </Wrapper>
  );
};

export default Buttons;
