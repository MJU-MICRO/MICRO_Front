import React from 'react';
import styled from 'styled-components';
import BasicInfoContainer from './BasicInfoContainer';
// import TextareaContainer from './TextareaContainer';
import ButtonContainer from './ButtonContainer';

const BoardWrapper = styled.div`
  position: relative;
  width: 41.1875rem;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0.938rem;
  background-color: #ffffff;
  margin-bottom: 3rem;
`;

const Board: React.FC = () => {
  return (
    <BoardWrapper>
      <BasicInfoContainer />
      {/* <TextareaContainer /> */}
      <ButtonContainer />
    </BoardWrapper>
  );
};

export default Board;
