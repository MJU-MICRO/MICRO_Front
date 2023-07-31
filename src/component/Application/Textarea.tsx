import React from 'react';
import { TextContainer, StyledTextarea } from './ApplicationStyles';
import { TextareaProps } from './ApplicationProps';

const Textarea: React.FC<TextareaProps> = ({ name, value, onChange }) => {
  return (
    <TextContainer>
      <StyledTextarea name={name} value={value} onChange={onChange} wrap='on' />
    </TextContainer>
  );
};

export default Textarea;
