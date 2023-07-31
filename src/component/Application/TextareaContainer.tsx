import React from 'react';
import Textarea from './Textarea';
import {
  TextareaWrapper,
  TextareaText,
  TextareaFieldset
} from './ApplicationStyles';
import { TextareaContainerProps } from './ApplicationProps';

const TextareaContainer: React.FC<TextareaContainerProps> = ({
  application,
  setApplication
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setApplication((prevApplication) => ({
      ...prevApplication,
      [name]: value
    }));
  };

  return (
    <TextareaWrapper>
      <TextareaFieldset>
        <TextareaText>1. 지원 동기를 작성해주세요</TextareaText>
        <Textarea
          name='motivation'
          value={application.motivation}
          onChange={handleChange}
        />
        <TextareaText>2. 좋아하는 과일을 말씀해주세요.</TextareaText>
        <Textarea
          name='favoriteFruit'
          value={application.favoriteFruit}
          onChange={handleChange}
        />
      </TextareaFieldset>
    </TextareaWrapper>
  );
};

export default TextareaContainer;
