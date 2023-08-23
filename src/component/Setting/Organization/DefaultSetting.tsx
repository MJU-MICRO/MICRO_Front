import React, { useState } from 'react';
import UploadBtn from '../UploadBtn';
import img from '../../../assets/img.svg';
import styled from 'styled-components';

const DefaultSetting = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');

  const handleImageUpload = (imageUrl: string) => {
    setUploadedImageUrl(imageUrl);
  };
  return (
    <Container>
      <Header>단체 기본 정보</Header>
      <ImgSettingContainer>
        <ImgSettingHeader>
          단체 로고 이미지
          <Asterisk>*</Asterisk>
        </ImgSettingHeader>
        <ImgSettingContent>
          <UploadBtn
            defaultProfileImg={img}
            onImageUpload={handleImageUpload}
            division='user'
          />
        </ImgSettingContent>
      </ImgSettingContainer>
      <Section>
        <SectionFlex>
          <div>
            <SectionHeader>
              단체명 <Asterisk>*</Asterisk>{' '}
            </SectionHeader>
            <SectionInput />
          </div>

          <div>
            <SectionHeader>
              설립일 <Asterisk>*</Asterisk>{' '}
            </SectionHeader>
            <SectionInput />
          </div>
        </SectionFlex>
      </Section>
      <Section>
        <SectionHeader>
          회원수 <Asterisk>*</Asterisk>
        </SectionHeader>
        <SectionInput />
      </Section>
      <Section>
        <SectionHeader>
          단체 구분 <Asterisk>*</Asterisk>
        </SectionHeader>
        <SectionFlex>
          <DivisionInput />
          <DivisionInput />
          <DivisionInput />
          <DivisionInput />
          <DivisionInput />
        </SectionFlex>
      </Section>
      <Section>
        <SectionHeader>
          관련 태그 최대 3개 <Asterisk>*</Asterisk>
        </SectionHeader>
        <SectionContent>추가하기</SectionContent>
      </Section>
      <Section>
        <SectionHeader>
          관련 학과 최대 3개 <Asterisk>*</Asterisk>
        </SectionHeader>
        <SectionContent>추가하기</SectionContent>
      </Section>
      <ActivityContainer>
        <ActivityHeader>단체 주요 활동 최대 3개</ActivityHeader>
      </ActivityContainer>
    </Container>
  );
};

export default DefaultSetting;

const Container = styled.div``;
const Header = styled.div`
  color: rgba(0, 0, 0, 0.7);
  font-family: Gmarket Sans TTF;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 2rem;
`;
const ImgSettingContainer = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-family: Gmarket Sans TTF;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 2rem;
`;
const ImgSettingHeader = styled.div``;
const Asterisk = styled.h3`
  color: #f00;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const ImgSettingContent = styled.div``;
const Section = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SectionHeader = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-family: Gmarket Sans TTF;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const SectionContent = styled.div``;
const SectionInput = styled.input`
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
const ActivityContainer = styled.div``;
const ActivityHeader = styled.div``;

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

const SectionFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DivisionInput = styled.input`
  width: 6.5rem;
  height: 1.875rem;
  border-radius: 0.625rem;
  border: 0.8px solid #dbdbdf;
  background: #fff;
  outline: none;
  padding-left: 1.06rem;
  border: none;
`;
