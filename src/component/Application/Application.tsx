import React from 'react';
import styled from 'styled-components';
import Header from 'component/Header';
import Notice from './Notice';
import Board from './Board';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(
    138deg,
    #effbff 0%,
    rgba(206, 200, 223, 0.37) 81.41%,
    rgba(204, 196, 220, 0.32) 89.11%,
    rgba(187, 170, 204, 0) 100%,
    rgba(223, 207, 239, 0) 100%
  );
`;

function Application() {
  return (
    <div>
      <Header />
      <Wrapper>
        <Notice />
        <Board />
      </Wrapper>
    </div>
  );
}

export default Application;
