import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import statusChangeImg from '../../../assets/statusChagneImg.svg';
import deleteBtn from '../../../assets/deleteBtn.svg';
import dotImg from '../../../assets/dot.svg';
import axios from 'axios';
import { useAuth } from 'contexts/AuthContext';

const DotButton = ({ applicationId, onUpdate }) => {
  const [showButtonContainer, setShowButtonContainer] = useState(false);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const { accessToken } = useAuth();

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

  const handleDeleteApplication = () => {
    axios
      .delete(`/api/application/delete/${applicationId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then((response) => {
        console.log('지원서 삭제 요청 성공');
        onUpdate(applicationId);
      })
      .catch((error) => {
        console.error('delete/${applicationId} 요청 실패', error);
      });
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

      {showButtonContainer && (
        <ButtonContainer onClick={handleDeleteApplication}>
          <img src={deleteBtn} alt='deleteBtn' />
          <Name>보낸 지원서에서 삭제하기 </Name>
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
  margin-top: 1rem;

  padding: 0.1rem 0.4rem;
  margin-left: auto;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease-in-out;
  }
  cursor: pointer;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem 0.6rem;
  cursor: pointer;
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
