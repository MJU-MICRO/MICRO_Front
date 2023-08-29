import React from 'react';
import * as Styled from './HeaderStyles';

interface LoginModalContentProps {
  email: string;
  password: string;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loginError: string | null;
  handleLogin: () => void;
}

const HeaderModalContent: React.FC<LoginModalContentProps> = ({
  email,
  password,
  handleEmailChange,
  handlePasswordChange,
  loginError,
  handleLogin
}) => {
  return (
    <Styled.ModalWrapper>
      <Styled.LoginBoxWrapper>
        <Styled.LoginBox>
          <h1>아이디</h1>
          <input
            placeholder='학교 이메일 아이디 입력'
            value={email}
            onChange={handleEmailChange}
          />
          <div>@mju.ac.kr</div>
        </Styled.LoginBox>
        <Styled.LoginBox>
          <h1>비밀번호</h1>
          <input
            placeholder='비밀번호 입력'
            type='password'
            value={password}
            onChange={handlePasswordChange}
          />
        </Styled.LoginBox>
        {loginError && <Styled.ErrorBox>{loginError}</Styled.ErrorBox>}
      </Styled.LoginBoxWrapper>
      <Styled.Lines />
      <Styled.ButtonBox>
        <Styled.LoginButton onClick={handleLogin}>로그인</Styled.LoginButton>
      </Styled.ButtonBox>
      <Styled.JoinBox>
        <h3>아직 회원이 아니신가요?</h3>
        <h4>가입하기</h4>
      </Styled.JoinBox>
    </Styled.ModalWrapper>
  );
};

export default HeaderModalContent;
