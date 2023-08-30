import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import statusChangeImg from '../../../assets/statusChagneImg.svg';
import deleteBtn from '../../../assets/deleteBtn.svg';
import dotImg from '../../../assets/dot.svg';

interface DotButtonProps {
  context: 'post' | 'temporary' | 'application';
}

const DotButton = ({ context }: DotButtonProps) => {
  const [showButtonContainer, setShowButtonContainer] = useState(false);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const handleDotButtonClick = () => {
    setShowButtonContainer(!showButtonContainer);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setShowButtonContainer(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Container ref={buttonRef}>
      {!showButtonContainer && (
        <DotButtonImage
          src={dotImg}
          alt='dotImg'
          onClick={handleDotButtonClick}
        />
      )}

      {showButtonContainer && context === 'post' && (
        <ButtonContainer>
          <img src={statusChangeImg} alt='statusChagne' />
          <Name>모집 상태 변경하기</Name>
        </ButtonContainer>
      )}
      {showButtonContainer &&
        (context === 'temporary' || context === 'application') && (
          <ButtonContainer>
            <img src={deleteBtn} alt='delete' />
            <Name>삭제하기</Name>
          </ButtonContainer>
        )}
    </Container>
  );
};

export default DotButton;

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 0.3125rem;

  padding: 0.1rem 0.4rem;
  margin-left: auto;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.05);
  margin-bottom: 0.5rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem 0.6rem;

  img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.4rem;
  }
`;
const Name = styled.div`
  color: rgba(0, 0, 0, 0.6);

  font-family: Gmarket Sans TTF;
  font-size: 0.825rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const DotButtonImage = styled.img`
  cursor: pointer;
  width: 1rem;
  height: 1rem;
`;
