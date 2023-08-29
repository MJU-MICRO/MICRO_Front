import React from 'react';
import {
  TextareaWrapper,
  TextareaText,
  TextareaFieldset
} from './ApplicationStyles';
import { TextareaContainerProps } from './ApplicationProps';
import styled from 'styled-components';

const TextareaContainer: React.FC<TextareaContainerProps> = ({
  questions,
  setQuestions,
  answer,
  setAnswer,
  characterLimit
}) => {
  const handleChange = (index: number, value: string) => {
    const newAnswer = [...answer];
    newAnswer[index] = value;
    setAnswer(newAnswer);
    console.log(answer);
  };

  return (
    <TextareaWrapper>
      <TextareaFieldset>
        {questions.map((question: string, index: number) => (
          <Container key={index}>
            <TextareaText>
              {index + 1}. {question}
            </TextareaText>
            <Textarea
              value={answer[index]}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                handleChange(index, event.target.value)
              }
            />
          </Container>
        ))}
      </TextareaFieldset>
    </TextareaWrapper>
  );
};

export default TextareaContainer;

const Textarea = styled.textarea`
  width: 518px;
  height: 92px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #dbdbdf;
  background: #fafafa;
  font-family: 'GmarketSansMedium';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 12px 12px;
  resize: none;
  outline: none;
  position: relative;
  &::placeholder {
    position: absolute;
    top: 12px;
    left: 12px;
    padding: 0;
    color: rgba(0, 0, 0, 0.4);
    pointer-events: none;
  }
`;

const Container = styled.div`
  margin-bottom: 10px;
  margin-top: 13px;
`;
