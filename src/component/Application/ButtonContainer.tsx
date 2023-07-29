import React from 'react';
import styled from 'styled-components';
import Buttons from './Buttons';

const Wrapper = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

const ButtonContainer: React.FC = () => {
  return (
    <Wrapper>
      <Buttons />
    </Wrapper>
  );
};

export default ButtonContainer;
