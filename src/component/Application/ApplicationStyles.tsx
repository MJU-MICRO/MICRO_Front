import styled from 'styled-components';
import '../../App.css';

export const InputWrapper = styled.div`
  width: 38rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: flex-start;
  margin-top: 2rem;
  padding-bottom: 0.5rem;
`;

export const StyledTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #000000;
  opacity: 100%;
`;

export const StyledText = styled.div`
  color: rgba(0, 0, 0, 0.8);
  leading-trim: both;
  text-edge: cap;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  margin-top: 0.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledOuterContainer = styled.div`
  width: 100%;
  heigth: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 2rem;
  border-bottom: 0.5px solid #dddddd;
`;

export const StyledInnerContainer = styled.div`
  width: 19rem;
  heigth: auto;
  display: flex;
  flex-direction: column;
`;

export const StyledInnerRightContainer = styled(StyledInnerContainer)`
  margin-left: 5.2rem;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1.3rem;
`;

export const StyledInputTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-bottom: 0.5rem;
`;

export const StyledInput = styled.input`
  width: 16rem;
  height: 2.0625rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  border: 1px solid #dbdbdf;

  color: #000;
  leading-trim: both;
  text-edge: cap;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: normal;
`;

export const StyledSelect = styled.select`
  width: 16rem;
  height: 2.3rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  border: 1px solid #dbdbdf;
  cursor: pointer;

  color: #000;
  leading-trim: both;
  text-edge: cap;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: normal;
`;

// TextareaContainer 시작
export const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.05);
`;

export const StyledP = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #000000;
  opacity: 100%;
`;

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  width: 35rem;
  padding: 1.5rem;
  border: none;
`;
