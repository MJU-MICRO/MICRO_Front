import React from 'react';
import styled from 'styled-components';

const SettingNotice = () => {
  return <Container>이 기능은 나중에 업데이트 될 예정이에요! 🥰</Container>;
};

export default SettingNotice;

const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
