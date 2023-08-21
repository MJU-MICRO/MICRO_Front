import React, { useState } from 'react';
import styled from 'styled-components';
import uploadImg from '../../../assets/upload.svg';
import img from '../../../assets/img.svg';
import UploadBtn from 'components/Setting/UploadBtn';
import { useAuth } from 'contexts/AuthContext';

const SettingProfile = () => {
  const { user } = useAuth();
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');

  const handleImageUpload = (imageUrl: string) => {
    setUploadedImageUrl(imageUrl);
  };

  return (
    <>
      <Wrapper>
        <Header>프로필 설정</Header>
        <ContentWrapper>
          <ContentName>프로필 사진</ContentName>
          <UploadBtn
            defaultProfileImg={user?.profileImageUrl || img}
            onImageUpload={handleImageUpload}
            division='user'
          />
          <Content>
            <ContentName>
              이름<Asterisk>*</Asterisk>
            </ContentName>
            <ContentInput />
          </Content>
          <Content>
            <ContentName>
              전화번호<Asterisk>*</Asterisk>
            </ContentName>
            <ContentInput />
          </Content>
          <Content>
            <ContentName>
              학번<Asterisk>*</Asterisk>
            </ContentName>
            <ContentInput />
          </Content>
          <Content>
            <ContentName>
              학과<Asterisk>*</Asterisk>
            </ContentName>
            <ContentToggle></ContentToggle>
          </Content>
          <Content>
            <ContentName>한 줄 소개</ContentName>
            <ContentInput />
          </Content>
        </ContentWrapper>
      </Wrapper>
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
const ContentInput = styled.input`
  font-family: Gmarket Sans TTF;
  width: 16rem;
  height: 1.8625rem;
  border-radius: 0.625rem;
  border: 1px solid #dbdbdf;
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
