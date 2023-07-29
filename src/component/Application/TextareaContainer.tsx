import React, { useState } from 'react';
import styled from 'styled-components';
import Textarea from './Textarea';
// import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.05);
`;

const StyledP = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #000000;
  opacity: 100%;
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  width: 35rem;
  padding: 1.5rem;
  border: none;
`;

const TextareaContainer: React.FC = () => {
  const [application, setApplication] = useState({
    motivation: '',
    favoriteFruit: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setApplication((prevApplication) => ({
      ...prevApplication,
      [name]: value
    }));
  };

  return (
    <Container>
      <StyledFieldset>
        <StyledP>1. 지원 동기를 작성해주세요</StyledP>
        <Textarea
          name='motivation'
          value={application.motivation}
          onChange={handleChange}
        />
        <StyledP>2. 좋아하는 과일을 말씀해주세요.</StyledP>
        <Textarea
          name='favoriteFruit'
          value={application.favoriteFruit}
          onChange={handleChange}
        />
      </StyledFieldset>
    </Container>
  );
};

export default TextareaContainer;
