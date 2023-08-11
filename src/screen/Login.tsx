// import React from 'react';

// // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// function Login() {
//   return <div>로그인 페이지</div>;
// }

// export default Login;

import { useState, useCallback } from 'react';
import styled from 'styled-components';
import Modal from '../component/Login/Modal';
function Base() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <Main>
      {isOpenModal && (
        <Modal onClickToggleModal={onClickToggleModal}>
          <ModalTitle>
            <h1>모달 </h1>
          </ModalTitle>
          <ModalContents>
            <p>모달 내용입니다. 잘부탁드려요</p>
          </ModalContents>
          <CloseButton
            onClick={() => {
              setOpenModal(!isOpenModal);
            }}>
            Close
          </CloseButton>
        </Modal>
      )}
      <DialogButton onClick={onClickToggleModal}>Open Modal</DialogButton>
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalTitle = styled.div`
  color: orange;
  margin-top: 30px;
  font-size: 32px;
`;
const ModalContents = styled.div`
  color: orange;
  margin-top: 10px;
  font-size: 18px;
`;

const DialogButton = styled.button`
  width: 160px;
  height: 48px;
  background-color: cornflowerblue;
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: 50px;
  border: none;
  margin-top: 200px;
  cursor: pointer;
`;
const CloseButton = styled.button`
  background: none;
  color: gray;
  border: 2px solid;
  padding: 5px 20px;
  font-size: 18px;
  transition: color 0.2s, border-color 1s, transform 0.5s;
  position: absolute;
  bottom: 10px;
  right: 20px;

  cursor: pointer;

  &:hover {
    background-color: gray;
    border: 1px solid #dddddd;
    cursor: pointer;
  }
`;

export default Base;
