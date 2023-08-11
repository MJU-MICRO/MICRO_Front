import styled from 'styled-components';

type TagWrapperType = {
  inputText?: string;
  width: string;
  height: string;
  backgroundColor: string;
  onClick: () => void;
  border: string;
  textColor: string;
  fontSize: string;
};

const TagWrapper = ({
  inputText,
  width,
  height,
  backgroundColor,
  onClick,
  border,
  textColor,
  fontSize
}: TagWrapperType) => {
  return (
    <>
      <WrapperBtn
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        border={border}
        textColor={textColor}
        fontSize={fontSize}
        onClick={onClick}>
        {inputText}
      </WrapperBtn>
    </>
  );
};

export default TagWrapper;

const WrapperBtn = styled.button<TagWrapperType>`
  display: inline-flex;
  align-items: center;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  border-radius: 0.9375rem;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.fontSize};
  cursor: pointer;
`;
