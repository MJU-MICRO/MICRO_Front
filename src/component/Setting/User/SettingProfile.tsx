import React, { useState } from 'react';
import styled from 'styled-components';
import uploadImg from '../../../assets/upload.svg';
import userDefaultImg from '../../../assets/userDefaultImg.svg';
import UploadBtn from 'component/Setting/UploadBtn';
import { useAuth } from 'contexts/AuthContext';
import axios from 'axios';

const SettingProfile = () => {
  const { user, accessToken } = useAuth();
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [introText, setIntroText] = useState('');
  const [name, setName] = useState('');
  const [major, setMajor] = useState('');
  const [nameError, setNameError] = useState(false);
  const [majorError, setMajorError] = useState(false);
  const maxIntroLength = 100;
  const handleIntroChange = (event) => {
    const newText = event.target.value;
    if (newText.length <= maxIntroLength) {
      setIntroText(newText);
    }
  };

  const handleImageUpload = (imageUrl: string) => {
    setUploadedImageUrl(imageUrl);
  };

  const userProfileChangeHandler = async () => {
    try {
      const requestBody = {
        dto: {
          name: name,
          major: major,
          introduction: introText
        },
        file: uploadedImageUrl || ''
      };

      const response = await axios.patch(
        'https://nolmyong.com/api/user/my',
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );

      console.log('user/my 사용자 프로필 수정 성공', response.data);
    } catch (error) {
      console.log('user/my 사용자 프로필 수정 실패', error);
    }
  };

  const passwordChangeHandler = () => {
    console.log('dd');
  };

  return (
    <>
      <Wrapper>
        <Header>프로필 설정</Header>
        <ContentWrapper>
          <ContentName>프로필 사진</ContentName>
          <UploadBtn
            defaultProfileImg={user?.profileImageUrl || userDefaultImg}
            onImageUpload={handleImageUpload}
            division='user'
          />
          <Content>
            <ContentName>
              이름
              <Asterisk>*</Asterisk>
            </ContentName>
            <ContentInput
              placeholder={user?.name}
              onChange={(e) => setName(e.target.value)}
              value={name}
              isError={nameError}
            />
          </Content>

          <Content>
            <ContentName>
              학과<Asterisk>*</Asterisk>
            </ContentName>
            <ContentInput
              placeholder={user?.major}
              onChange={(e) => setMajor(e.target.value)}
              value={major}
              isError={majorError}
            />
          </Content>

          <Content>
            <ContentName>한 줄 소개</ContentName>
            <ContentIntroInput
              placeholder={user?.introduction}
              value={introText}
              onChange={handleIntroChange}
              maxLength={maxIntroLength}
            />
          </Content>
        </ContentWrapper>
      </Wrapper>
      <ProfileChagneBtn onClick={userProfileChangeHandler}>
        변경한 내용 저장하기
      </ProfileChagneBtn>
      <Line />
      <Wrapper>
        <Header>비밀번호 재설정</Header>
        <ContentWrapper>
          <Content>
            <div>
              <ContentName>현재 비밀번호</ContentName>
              <ContentInput />
            </div>
            <div>
              <ContentName>변경할 비밀번호</ContentName>
              <ContentInput />
            </div>
          </Content>
        </ContentWrapper>
      </Wrapper>
      <PasswordChangeHBtn onClick={passwordChangeHandler}>
        비밀번호 변경하기
      </PasswordChangeHBtn>
      <SecessionWrapper>탈퇴하기</SecessionWrapper>
    </>
  );
};

export default SettingProfile;

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Header = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 1.9rem;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 0.3rem;
  margin-top: 1.15rem;

  div {
    display: flex;

    div {
      width: 6.6875rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 2.5rem;
      margin-bottom: 0.75rem;
    }

    input {
      width: 30.4375rem;
      height: 1.8625rem;
      margin-bottom: 0.75rem;
    }
  }
`;
const ContentName = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 0.5rem;
`;
interface ContentInputProps {
  isError?: boolean; // isError prop의 타입을 boolean으로 지정
}

const ContentInput = styled.input<ContentInputProps>`
  font-family: Gmarket Sans TTF;
  width: 16rem;
  height: 1.8625rem;
  border-radius: 0.625rem;
  border: 1px solid ${(props) => (props.isError ? 'red' : '#dbdbdf')};
  background: #fff;
  padding-left: 1.06rem;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.8125rem;
  font-weight: 500;

  &:focus {
    outline: none;
    border: none;
  }
`;
const ContentToggle = styled.div`
  width: 16rem;
  height: 2.0625rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  border: 1px solid #dbdbdf;
  background: #fff;
  padding-left: 1.06rem;
`;

const Line = styled.div`
  width: 100%;
  height: 0.1px;
  background-color: #dbdbdf;
  margin-top: 2.25rem;
  margin-bottom: 2.25rem;
`;

const Asterisk = styled.h3`
  color: #f00;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const SecessionWrapper = styled.div`
  margin-top: 1.75rem;
  color: rgba(0, 0, 0, 0.4);
  text-align: right;
  font-family: Gmarket Sans TTF;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ContentIntroInput = styled.textarea`
  font-family: Gmarket Sans TTF;
  width: 39.4375rem;
  height: 3.8625rem;
  border-radius: 0.625rem;
  border: 1px solid #dbdbdf;
  background: #fff;
  padding: 0.8125rem 1.06rem;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.8125rem;
  font-weight: 500;
  resize: vertical; /* Allow vertical resizing */
  white-space: pre-wrap; /* Allow line breaks */
  line-height: 1.4; /* Increase line height for readability */

  &:focus {
    outline: none;
    border: none;
  }
`;

const ProfileChagneBtn = styled.div`
  width: fit-content;
  border-radius: 2rem;
  border: 0.5px solid rgba(50, 169, 235, 1);
  padding: 0.6rem;
  color: #32a9eb;
  font-family: Gmarket Sans TTF;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 500;
  margin-left: auto;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(50, 169, 235, 0.05);
    transition: all 0.3s ease-in-out;
  }
`;

const PasswordChangeHBtn = styled.div`
  width: fit-content;
  border-radius: 2rem;
  border: 0.5px solid rgba(255, 0, 0, 0.6);
  padding: 0.6rem;
  color: rgba(255, 0, 0, 0.6);
  font-family: Gmarket Sans TTF;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 500;
  margin-left: auto;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 0, 0, 0.05);
    transition: all 0.3s ease-in-out;
  }
`;
