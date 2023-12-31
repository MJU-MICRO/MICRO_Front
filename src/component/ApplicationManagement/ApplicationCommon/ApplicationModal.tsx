import React from 'react';
import styled from 'styled-components';
import close from '../../../assets/close.svg';
const ApplicationModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalWrapper>
        <CloseButton onClick={onClose}>
          <CloseButtonImg src={close} alt='close ' />
        </CloseButton>
        <ModalContent>{children}</ModalContent>
      </ModalWrapper>{' '}
    </ModalOverlay>
  );
};

export default ApplicationModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
`;

const ModalWrapper = styled.div`
  background-color: white;
  padding-top: 3rem;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  max-height: calc(100vh - 4rem);
  overflow-y: auto;
  max-width: calc(100vw - 4rem);
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  scrollbar-width: thin;
  scrollbar-color: #06093022 transparent;

  &::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #06093022;
    border-radius: 15px;
    border: transparent;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.button`
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.01);
    transition: all 0.3s ease-in-out;
  }
`;

const ModalContent = styled.div``;
const CloseButtonImg = styled.img`
  width: 1.875rem;
  height: 1.875rem;
`;
