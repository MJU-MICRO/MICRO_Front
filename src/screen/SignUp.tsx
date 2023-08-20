import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function SignUp() {
  const [containerHeight, setContainerHeight] = useState<string>('59rem');
  const [email, setEmail] = useState<string>('');
  const [emailIsClicked, setEmailIsClicked] = useState<boolean>(false);
  const [verifyCode, setVerifyCode] = useState<string>('');
  const [remainingTime, setRemainingTime] = useState<number>(5 * 60);
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [profileImageUrl, setProfileImageUrl] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [studentId, setStudentId] = useState<string>('');
  const [major, setMajor] = useState<string>('');
  const [introduction, setIntroduction] = useState<string>('');
  const [emailAgreement, setEmailAgreement] = useState<boolean>(false);
  const [informationAgreement, setInformationAgreement] =
    useState<boolean>(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  const handleProfileImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setProfileImage(selectedFile);
      setProfileImageUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleStudentIdChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStudentId(event.target.value);
  };

  const handleMajorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setMajor(selectedValue);
  };

  const handleIntroductionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIntroduction(event.target.value);
  };

  const handleEmailAgreementChange: React.ChangeEventHandler<
    HTMLInputElement
  > = () => {
    setEmailAgreement(!emailAgreement);
    console.log(emailAgreement);
  };

  const handleInformationAgreementChange: React.ChangeEventHandler<
    HTMLInputElement
  > = () => {
    setInformationAgreement(!informationAgreement);
    console.log(informationAgreement);
  };

  // 이미지 추가
  const openFileInput = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  // 가입하기
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (password === confirmPassword) {
      axios
        .post('/api/auth/sign-up', {
          email: email,
          password: password,
          name: name,
          studentId: studentId,
          major: major,
          phoneNumber: phone,
          introduction: introduction,
          notifiation: emailAgreement
        })
        .then((response) => {
          console.log(response);
          alert('회원가입 성공');
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setPasswordsMatch(false);
    }
  };

  return (
    <Wrapper>
      <SignUpForm onSubmit={handleSubmit}>
        {/* 공지 설정 */}
        <NoticeContainer>
          <NoticeTitle>🤗반가워요!</NoticeTitle>
          <NoticeText>
            아래의 몇 가지 정보만 입력해주시면 놀명 뭐하니?를 이용하실 수
            있어요.
          </NoticeText>
        </NoticeContainer>
        <SignUpContainer style={{ height: containerHeight }}>
          {/* 계정 설정 */}
          <InputContainer>
            <InputTitle>계정설정</InputTitle>
            {/* 메일 인증 */}
            {emailIsClicked ? (
              <VerifyContainer>
                <AccountSettingContainer>
                  <TextContainer>
                    <InputText>학교 이메일</InputText>
                    <RedAsterisk>*</RedAsterisk>
                  </TextContainer>
                  <ReVerifyInput
                    type='text'
                    name='email'
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <EmailText>@mju.ac.kr</EmailText>
                  <ReverifyButton
                    onClick={() => {
                      setEmailIsClicked(false);
                      setContainerHeight('59rem');
                    }}>
                    인증번호 재전송
                  </ReverifyButton>
                </AccountSettingContainer>
                <InnerVerifyContainer>
                  <InnerAccountContainer>
                    <VerifyInput
                      type='text'
                      name='verifyCode'
                      value={verifyCode}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setVerifyCode(event.target.value);
                      }}
                    />
                    <SendCodeButton
                      onClick={() => {
                        setEmailIsClicked(false);
                        setContainerHeight('59rem');
                      }}>
                      인증번호 확인
                    </SendCodeButton>
                  </InnerAccountContainer>
                  <RemainTimeContainer>
                    <RemainTime>입력대기시간</RemainTime>
                    <RemainTimeValue>
                      {minutes.toString().padStart(2, '0')}:
                      {seconds.toString().padStart(2, '0')}{' '}
                    </RemainTimeValue>
                  </RemainTimeContainer>
                  <InnerAccountSpanContainer>
                    <VerifyNotice>
                      인증번호를 받은 시점으로부터 5분간만 유효합니다.
                      <br />
                      인증번호를 받지 못한 경우 위의 인증번호 재전송 버튼을
                      눌러주세요.
                    </VerifyNotice>
                  </InnerAccountSpanContainer>
                </InnerVerifyContainer>
              </VerifyContainer>
            ) : (
              <AccountSettingContainer>
                <TextContainer>
                  <InputText>학교 이메일</InputText>
                  <RedAsterisk>*</RedAsterisk>
                </TextContainer>
                <StyledInput
                  type='text'
                  name='email'
                  value={email}
                  onChange={handleEmailChange}
                />
                <EmailText>@mju.ac.kr</EmailText>
                <VerifyButton
                  onClick={() => {
                    setEmailIsClicked(true);
                    setContainerHeight('66rem');
                  }}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'>
                    <path
                      d='M16.6667 9.85833C16.4457 9.85833 16.2337 9.94613 16.0774 10.1024C15.9211 10.2587 15.8333 10.4707 15.8333 10.6917V15.3333C15.8333 15.4659 15.7807 15.5931 15.6869 15.6869C15.5931 15.7807 15.4659 15.8333 15.3333 15.8333H4.66667C4.53406 15.8333 4.40688 15.7807 4.31311 15.6869C4.21935 15.5931 4.16667 15.4659 4.16667 15.3333V4.66667C4.16667 4.53406 4.21935 4.40688 4.31311 4.31311C4.40688 4.21935 4.53406 4.16667 4.66667 4.16667H12.6417C12.8627 4.16667 13.0746 4.07887 13.2309 3.92259C13.3872 3.76631 13.475 3.55435 13.475 3.33333C13.475 3.11232 13.3872 2.90036 13.2309 2.74408C13.0746 2.5878 12.8627 2.5 12.6417 2.5H4.66667C4.09271 2.50219 3.54288 2.73117 3.13703 3.13703C2.73117 3.54288 2.50219 4.09271 2.5 4.66667V15.3333C2.50219 15.9073 2.73117 16.4571 3.13703 16.863C3.54288 17.2688 4.09271 17.4978 4.66667 17.5H15.3333C15.9073 17.4978 16.4571 17.2688 16.863 16.863C17.2688 16.4571 17.4978 15.9073 17.5 15.3333V10.6917C17.5 10.4707 17.4122 10.2587 17.2559 10.1024C17.0996 9.94613 16.8877 9.85833 16.6667 9.85833Z'
                      fill='#008FD5'
                      fillOpacity='0.8'
                    />
                    <path
                      d='M8.93354 9.16716C8.77716 9.02653 8.57339 8.95022 8.3631 8.95356C8.15281 8.95689 7.95156 9.03961 7.79971 9.18513C7.64787 9.33065 7.55666 9.5282 7.54439 9.73816C7.53212 9.94811 7.59969 10.1549 7.73354 10.3172L9.58354 12.2588C9.661 12.3401 9.75407 12.4048 9.85717 12.4492C9.96028 12.4936 10.0713 12.5167 10.1835 12.5172C10.2952 12.5178 10.4059 12.496 10.5089 12.4531C10.612 12.4101 10.7054 12.3469 10.7835 12.2672L16.4335 6.43383C16.5101 6.35504 16.5705 6.26193 16.6111 6.15982C16.6517 6.05771 16.6718 5.9486 16.6703 5.83871C16.6687 5.72883 16.6456 5.62033 16.6021 5.5194C16.5586 5.41848 16.4957 5.3271 16.4169 5.2505C16.3381 5.17389 16.245 5.11356 16.1429 5.07294C16.0408 5.03232 15.9316 5.01221 15.8218 5.01375C15.7119 5.0153 15.6034 5.03848 15.5024 5.08196C15.4015 5.12544 15.3101 5.18837 15.2335 5.26716L10.1919 10.4838L8.93354 9.16716Z'
                      fill='#008FD5'
                      fillOpacity='0.8'
                    />
                  </svg>
                  인증하기
                </VerifyButton>
              </AccountSettingContainer>
            )}
            <AccountSettingContainer>
              <TextContainer>
                <InputText>비밀번호</InputText>
                <RedAsterisk>*</RedAsterisk>
              </TextContainer>
              <PasswordInput
                type='password'
                name='password'
                value={password}
                onChange={handlePasswordChange}
              />
            </AccountSettingContainer>
            <AccountSettingContainer>
              <TextContainer>
                <InputText>비밀번호 재입력</InputText>
                <RedAsterisk>*</RedAsterisk>
              </TextContainer>
              <PasswordInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              {!passwordsMatch && (
                <PasswordWarning>비밀번호를 확인해주세요!</PasswordWarning>
              )}
            </AccountSettingContainer>
          </InputContainer>
          {/* 프로필 설정 */}
          <InputContainer>
            <InputTitle>프로필 설정</InputTitle>
            <ProfileImgContainer>
              {profileImageUrl ? (
                <InnerContainer>
                  <ProfileImg src={profileImageUrl} alt='Profile Preview' />
                  <UploadButton onClick={openFileInput}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='21'
                      height='20'
                      viewBox='0 0 21 20'
                      fill='none'>
                      <path
                        d='M4.16992 5H15.8366C16.2968 5 16.6699 4.6269 16.6699 4.16667C16.6699 3.70643 16.2968 3.33333 15.8366 3.33333H4.16992C3.70968 3.33333 3.33659 3.70643 3.33659 4.16667C3.33659 4.6269 3.70968 5 4.16992 5Z'
                        fill='black'
                        fillOpacity='0.8'
                      />
                      <path
                        d='M16.6699 5.83301V4.16634C16.6699 3.7061 16.2968 3.33301 15.8366 3.33301C15.3764 3.33301 15.0033 3.7061 15.0033 4.16634V5.83301C15.0033 6.29325 15.3764 6.66634 15.8366 6.66634C16.2968 6.66634 16.6699 6.29325 16.6699 5.83301Z'
                        fill='black'
                        fillOpacity='0.8'
                      />
                      <path
                        d='M5.00195 5.83301V4.16634C5.00195 3.7061 4.62886 3.33301 4.16862 3.33301C3.70838 3.33301 3.33529 3.7061 3.33529 4.16634V5.83301C3.33529 6.29325 3.70838 6.66634 4.16862 6.66634C4.62886 6.66634 5.00195 6.29325 5.00195 5.83301Z'
                        fill='black'
                        fillOpacity='0.8'
                      />
                      <path
                        d='M6.66927 11.6664C6.5399 11.6664 6.41231 11.6362 6.29659 11.5784C6.18088 11.5205 6.08023 11.4365 6.0026 11.333C5.93694 11.2455 5.88917 11.1459 5.86201 11.0398C5.83485 10.9338 5.82884 10.8235 5.84431 10.7152C5.85979 10.6068 5.89645 10.5026 5.95221 10.4084C6.00797 10.3143 6.08172 10.232 6.16927 10.1664L9.5026 7.66636C9.64532 7.56207 9.81751 7.50586 9.99427 7.50586C10.171 7.50586 10.3432 7.56207 10.4859 7.66636L13.8193 10.0164C13.9989 10.1438 14.1208 10.3372 14.1583 10.5543C14.1958 10.7713 14.1458 10.9944 14.0193 11.1747C13.9561 11.2648 13.8757 11.3415 13.7828 11.4004C13.6898 11.4593 13.5861 11.4992 13.4776 11.5178C13.3691 11.5364 13.2581 11.5333 13.1508 11.5088C13.0435 11.4842 12.9422 11.4386 12.8526 11.3747L10.0026 9.36636L7.16927 11.4997C7.02502 11.6079 6.84958 11.6664 6.66927 11.6664Z'
                        fill='black'
                        fillOpacity='0.8'
                      />
                      <path
                        d='M10.0033 17.4993C9.78224 17.4993 9.57028 17.4116 9.414 17.2553C9.25772 17.099 9.16992 16.887 9.16992 16.666V9.99935C9.16992 9.77834 9.25772 9.56637 9.414 9.41009C9.57028 9.25381 9.78224 9.16602 10.0033 9.16602C10.2243 9.16602 10.4362 9.25381 10.5925 9.41009C10.7488 9.56637 10.8366 9.77834 10.8366 9.99935V16.666C10.8366 16.887 10.7488 17.099 10.5925 17.2553C10.4362 17.4116 10.2243 17.4993 10.0033 17.4993Z'
                        fill='black'
                        fillOpacity='0.8'
                      />
                    </svg>
                    <UploadButtonSpan>업로드</UploadButtonSpan>
                  </UploadButton>{' '}
                </InnerContainer>
              ) : (
                <InnerContainer>
                  <BasicImg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='81'
                      height='80'
                      viewBox='0 0 81 80'
                      fill='none'>
                      <circle
                        cx='40.002'
                        cy='40'
                        r='40'
                        fill='#E9E9E9'
                        fillOpacity='0.45'
                      />
                    </svg>
                  </BasicImg>
                  <input
                    type='file'
                    accept='image/*'
                    onChange={handleProfileImageChange}
                    id='fileInput'
                    style={{ display: 'none' }}
                  />
                  <UploadButton onClick={openFileInput}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='21'
                      height='20'
                      viewBox='0 0 21 20'
                      fill='none'>
                      <path
                        d='M4.16992 5H15.8366C16.2968 5 16.6699 4.6269 16.6699 4.16667C16.6699 3.70643 16.2968 3.33333 15.8366 3.33333H4.16992C3.70968 3.33333 3.33659 3.70643 3.33659 4.16667C3.33659 4.6269 3.70968 5 4.16992 5Z'
                        fill='black'
                        fillOpacity='0.8'
                      />
                      <path
                        d='M16.6699 5.83301V4.16634C16.6699 3.7061 16.2968 3.33301 15.8366 3.33301C15.3764 3.33301 15.0033 3.7061 15.0033 4.16634V5.83301C15.0033 6.29325 15.3764 6.66634 15.8366 6.66634C16.2968 6.66634 16.6699 6.29325 16.6699 5.83301Z'
                        fill='black'
                        fillOpacity='0.8'
                      />
                      <path
                        d='M5.00195 5.83301V4.16634C5.00195 3.7061 4.62886 3.33301 4.16862 3.33301C3.70838 3.33301 3.33529 3.7061 3.33529 4.16634V5.83301C3.33529 6.29325 3.70838 6.66634 4.16862 6.66634C4.62886 6.66634 5.00195 6.29325 5.00195 5.83301Z'
                        fill='black'
                        fillOpacity='0.8'
                      />
                      <path
                        d='M6.66927 11.6664C6.5399 11.6664 6.41231 11.6362 6.29659 11.5784C6.18088 11.5205 6.08023 11.4365 6.0026 11.333C5.93694 11.2455 5.88917 11.1459 5.86201 11.0398C5.83485 10.9338 5.82884 10.8235 5.84431 10.7152C5.85979 10.6068 5.89645 10.5026 5.95221 10.4084C6.00797 10.3143 6.08172 10.232 6.16927 10.1664L9.5026 7.66636C9.64532 7.56207 9.81751 7.50586 9.99427 7.50586C10.171 7.50586 10.3432 7.56207 10.4859 7.66636L13.8193 10.0164C13.9989 10.1438 14.1208 10.3372 14.1583 10.5543C14.1958 10.7713 14.1458 10.9944 14.0193 11.1747C13.9561 11.2648 13.8757 11.3415 13.7828 11.4004C13.6898 11.4593 13.5861 11.4992 13.4776 11.5178C13.3691 11.5364 13.2581 11.5333 13.1508 11.5088C13.0435 11.4842 12.9422 11.4386 12.8526 11.3747L10.0026 9.36636L7.16927 11.4997C7.02502 11.6079 6.84958 11.6664 6.66927 11.6664Z'
                        fill='black'
                        fillOpacity='0.8'
                      />
                      <path
                        d='M10.0033 17.4993C9.78224 17.4993 9.57028 17.4116 9.414 17.2553C9.25772 17.099 9.16992 16.887 9.16992 16.666V9.99935C9.16992 9.77834 9.25772 9.56637 9.414 9.41009C9.57028 9.25381 9.78224 9.16602 10.0033 9.16602C10.2243 9.16602 10.4362 9.25381 10.5925 9.41009C10.7488 9.56637 10.8366 9.77834 10.8366 9.99935V16.666C10.8366 16.887 10.7488 17.099 10.5925 17.2553C10.4362 17.4116 10.2243 17.4993 10.0033 17.4993Z'
                        fill='black'
                        fillOpacity='0.8'
                      />
                    </svg>
                    <UploadButtonSpan>업로드</UploadButtonSpan>
                  </UploadButton>{' '}
                </InnerContainer>
              )}
            </ProfileImgContainer>
            <ProfileSettingContainer>
              <OuterContainer>
                <InnerContainer>
                  <InputText>이름</InputText>
                  <RedAsterisk>*</RedAsterisk>
                </InnerContainer>
                <ProfileInput
                  type='text'
                  name='name'
                  value={name}
                  onChange={handleNameChange}
                />
              </OuterContainer>
              <OuterContainer>
                <InnerContainer>
                  <InputText>전화번호</InputText>
                  <RedAsterisk>*</RedAsterisk>
                </InnerContainer>
                <ProfileInput
                  type='text'
                  name='phone'
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </OuterContainer>
            </ProfileSettingContainer>
            <ProfileSettingContainer>
              <OuterContainer>
                <InnerContainer>
                  <InputText>학번</InputText>
                  <RedAsterisk>*</RedAsterisk>
                </InnerContainer>
                <ProfileInput
                  type='text'
                  name='studentId'
                  value={studentId}
                  onChange={handleStudentIdChange}
                />
              </OuterContainer>
              <OuterContainer />
            </ProfileSettingContainer>
            <ProfileSettingContainer>
              <OuterContainer>
                <InnerContainer>
                  <InputText>학과</InputText>
                  <RedAsterisk>*</RedAsterisk>
                </InnerContainer>
                <StyledSelect value={major} onChange={handleMajorChange}>
                  <option value='unSelected'>학과를 선택해주세요</option>
                  <option value='software'>응용소프트웨어학과</option>
                  <option value='data'>데이터테크놀로지학과</option>
                </StyledSelect>
              </OuterContainer>
              <OuterContainer />
            </ProfileSettingContainer>
            <ProfileSettingContainer>
              <OuterContainer>
                <InnerContainer>
                  <InputText>한 줄 소개</InputText>
                </InnerContainer>
                <Introduction
                  type='text'
                  name='introduction'
                  value={introduction}
                  onChange={handleIntroductionChange}
                />
              </OuterContainer>
              <OuterContainer />
            </ProfileSettingContainer>
            <CheckboxContainer>
              <CheckboxLabel>
                <Checkbox
                  type='checkbox'
                  checked={informationAgreement}
                  onChange={handleInformationAgreementChange}
                />
                <CheckboxUnderline>
                  놀명 뭐하니?의 개인정보 수집 및 이용에
                </CheckboxUnderline>
                <CheckboxText>동의합니다.</CheckboxText>
              </CheckboxLabel>
              <CheckboxLabel>
                <Checkbox
                  type='checkbox'
                  checked={emailAgreement}
                  onChange={handleEmailAgreementChange}
                />
                <CheckboxUnderline>
                  놀명 뭐하니?의 이메일 수신에
                </CheckboxUnderline>
                <CheckboxText>동의합니다.</CheckboxText>
              </CheckboxLabel>
            </CheckboxContainer>
          </InputContainer>
          <SignUpButton onClick={handleSubmit} disabled={!informationAgreement}>
            가입하기
          </SignUpButton>
        </SignUpContainer>
      </SignUpForm>
    </Wrapper>
  );
}

export default SignUp;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignUpForm = styled.form``;

const NoticeContainer = styled.div`
  width: 40rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3.5rem;
  margin-bottom: 1.7rem;
`;

const NoticeTitle = styled.span`
  color: rgba(0, 0, 0, 0.7);
  font-family: GmarketSansMedium;
  font-size: 1.5rem;
  font-style: normal;
  line-height: normal;
  margin-bottom: 0.7rem;
`;

const NoticeText = styled.span`
  color: rgba(0, 0, 0, 0.7);
  font-family: GmarketSansLight;
  font-size: 1rem;
  font-style: normal;
  line-height: normal;
`;

const SignUpContainer = styled.div`
  width: 40rem;
  // height: 59rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 1.25rem;
  border: 1px solid #dbdbdf;
  background: #ffffff;
`;

const InputContainer = styled.div`
  width: 35rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border: none;
  border-bottom: 1px solid #dddddd;
`;

const InputTitle = styled.span`
  color: rgba(0, 0, 0, 0.7);
  font-family: GmarketSansMedium;
  font-size: 1.125rem;
  font-style: normal;
  line-height: normal;
`;

const InputText = styled.span`
  display: flex;
  width: auto;
  height: 1rem;
  flex-direction: column;
  justify-content: flex-end;
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
  font-family: GmarketSansMedium;
  font-size: 0.875rem;
  font-style: normal;
  line-height: normal;
`;

const EmailText = styled(InputText)`
  margin-left: 0.5rem;
`;

const VerifyButton = styled.button`
  width: 5.8rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.625rem;
  border: 1px solid rgba(0, 143, 213, 0.7);
  background: #ffffff;
  margin-left: 1rem;
  color: rgba(0, 143, 213, 0.7);
  font-family: GmarketSansMedium;
  font-size: 0.875rem;
  font-style: normal;
  line-height: normal;
  cursor: pointer;

  // &:hover {
  //   color: black;
  // }

  // &:active {
  //   color: rgba(0, 143, 213, 0.7);
  // }
`;

const ReverifyButton = styled(VerifyButton)`
  width: 8rem;
  justify-content: center;
`;

const SendCodeButton = styled(VerifyButton)`
  width: 8rem;
  justify-content: center;
`;

const VerifyContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const InnerVerifyContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const RedAsterisk = styled(InputText)`
  color: red;
`;

const TextContainer = styled.div`
  width: 6.625rem;
  height: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const AccountSettingContainer = styled.div`
  width: 35rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1rem;
`;

const InnerAccountContainer = styled.div`
  width: 30rem;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 5.1rem;
  margin-top: 1rem;
`;

const InnerAccountSpanContainer = styled(InnerAccountContainer)`
  width: 28rem;
`;

const RemainTimeContainer = styled(InnerAccountContainer)`
  width: 20rem;
  margin-left: 11.6rem;
`;

const StyledInput = styled.input`
  width: 14rem;
  height: 2rem;
  flex-shrink: 0;
  border-radius: 0.6rem;
  border: 1px solid #dbdbdf;
  background: #ffffff;
  color: rgba(0, 0, 0, 0.7);
  font-family: GmarketSansLight;
  font-size: 0.875rem;
  font-style: normal;
  line-height: normal;
  margin-left: 1.5rem;
  padding-left: 0.5rem;
`;

const ReVerifyInput = styled(StyledInput)`
  width: 10rem;
`;

const VerifyInput = styled(StyledInput)`
  width: 16rem;
`;

const RemainTime = styled.span`
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
  font-family: GmarketSansLight;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const RemainTimeValue = styled.span`
  color: rgba(255, 0, 0, 0.7);
  font-family: GmarketSansLight;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const VerifyNotice = styled.span`
  color: rgba(0, 0, 0, 0.7);
  font-family: GmarketSansLight;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const PasswordInput = styled.input`
  width: 14rem;
  height: 2rem;
  flex-shrink: 0;
  border-radius: 0.6rem;
  border: 1px solid #dbdbdf;
  background: #ffffff;
  color: rgba(0, 0, 0, 0.7);
  font-family: GmarketSansLight;
  font-size: 0.875rem;
  font-style: normal;
  line-height: normal;
  margin-left: 1.5rem;
  padding-left: 0.5rem;
`;

const PasswordWarning = styled.p`
  color: #ff6347;
  font-family: GmarketSansMedium;
  font-size: 0.875rem;
  font-style: normal;
  line-height: normal;
  margin-left: 0.8rem;
`;

const ProfileSettingContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 0.8rem;
`;

const OuterContainer = styled.div`
  width: 18rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1rem;
`;

const ProfileInput = styled.input`
  width: 14rem;
  height: 2rem;
  flex-shrink: 0;
  border-radius: 0.6rem;
  border: 1px solid #dbdbdf;
  background: #ffffff;
  color: rgba(0, 0, 0, 0.7);
  font-family: GmarketSansLight;
  font-size: 0.875rem;
  font-style: normal;
  line-height: normal;
  padding-left: 0.5rem;
  margin-top: 0.5rem;
`;

const StyledSelect = styled.select`
  width: 33rem;
  height: 2.5rem;
  border-radius: 0.625rem;
  border: 1px solid #dbdbdf;
  background: #fff;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);
  font-family: GmarketSansLight;
  font-size: 0.875rem;
  font-style: normal;
  line-height: normal;
  padding-left: 0.5rem;
  margin-top: 0.5rem;
`;

const Introduction = styled.input`
  width: 32.5rem;
  height: 2rem;
  border-radius: 0.625rem;
  border: 1px solid #dbdbdf;
  background: #fff;
  color: rgba(0, 0, 0, 0.7);
  font-family: GmarketSansLight;
  font-size: 0.875rem;
  font-style: normal;
  line-height: normal;
  padding-left: 0.5rem;
  margin-top: 0.5rem;
`;

const CheckboxContainer = styled.div`
  width: 35rem;
  height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 1rem;
`;

const CheckboxLabel = styled.label`
  width: 20rem;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Checkbox = styled.input`
  width: 0.9375rem;
  height: 0.9375rem;
  flex-shrink: 0;
  border-radius: 0.1875rem;
  border: 1px solid #dbdbdf;
  background: #ffffff;
  cursor: pointer;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #32a9eb;
  }
`;

const CheckboxUnderline = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-family: GmarketSansMedium;
  font-size: 0.75rem;
  font-style: normal;
  line-height: normal;
  text-decoration-line: underline;
`;

const CheckboxText = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-family: GmarketSansMedium;
  font-size: 0.75rem;
  font-style: normal;
  line-height: normal;
  margin-left: 0.3rem;
`;

const SignUpButton = styled.button`
  width: 6.5rem;
  height: 2.4375rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 0.9375rem;
  background: rgba(0, 143, 213, 0.1);
  border: none;
  background-color: #008fd51a;
  margin-top: 1rem;
  cursor: pointer;

  color: #008fd5;
  font-family: Gmarket Sans TTF;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.9625rem;

  &:hover {
    background-color: #32a9eb;
    color: white;
  }

  &:active {
    background-color: #008fd51a;
    color: #008fd5;
  }
`;

const ProfileImgContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 0.8rem;
  justify-content: flex-start;
`;

const BasicImg = styled.div`
  width: 5rem;
  height: 5rem;
  flex-shrink: 0;
  fill: rgba(233, 233, 233, 0.45);
`;

const ProfileImg = styled.img`
  width: 6rem;
  height: 6rem;
`;

const UploadButton = styled.button`
  width: 5.5rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
  border: 1px solid #dbdbdf;
  background: #ffffff;
  margin-left: 1.5rem;
  cursor: pointer;
`;

const UploadButtonSpan = styled.span`
color: rgba(0, 0, 0, 0.70);
font-family: GmarketSansMedium
font-size: 0.875rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`;
