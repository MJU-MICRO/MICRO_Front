import React from 'react';
import Textarea from './Textarea';
import {
  TextareaWrapper,
  TextareaText,
  TextareaFieldset
} from './ApplicationStyles';
import { TextareaContainerProps } from './ApplicationProps';

const TextareaContainer: React.FC<TextareaContainerProps> = ({
  questions,
  setQuestions,
  answer,
  setAnswer
}) => {
  const handleChange = (index: number, value: string) => {
    const newAnswer = [...answer];
    newAnswer[index] = value;
    setAnswer(newAnswer);
  };

  return (
    <TextareaWrapper>
      <TextareaFieldset>
        {questions.map((question: string, index: number) => (
          <div key={index}>
            <TextareaText>{question}</TextareaText>
            <Textarea
              value={answer[index]}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                handleChange(index, event.target.value)
              }
            />
          </div>
        ))}
      </TextareaFieldset>
    </TextareaWrapper>
  );
};

export default TextareaContainer;
