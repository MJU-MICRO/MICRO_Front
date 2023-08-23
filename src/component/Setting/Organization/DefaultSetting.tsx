import React, { useState } from 'react';
import UploadBtn from '../UploadBtn';
import img from '../../../assets/img.svg';
import styled from 'styled-components';
import DateImg from '../../../assets/DateImg.svg';
import ToggleDown from '../../../assets/toggle-down.svg';
import ToggleUp from '../../../assets/toggle-up.svg';
import MajorPlusBtn from '../../../assets/MajorPlus.svg';

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
            <SectionInput placeholder='하아' />
          </div>

          <div>
            <SectionHeader>
              설립일 <Asterisk>*</Asterisk>
            </SectionHeader>
            <SectionFlex>
              <SectionInput placeholder='하아' />
              <DateBtn src={DateImg} alt='DateImg' />
            </SectionFlex>
          </div>
        </SectionFlex>
      </Section>
      <Section>
        <SectionHeader>
          회원수 <Asterisk>*</Asterisk>
        </SectionHeader>
        <SectionInput placeholder='하아' />
      </Section>
      <Section>
        <SectionHeader>
          단체 구분 <Asterisk>*</Asterisk>
        </SectionHeader>
        <SectionFlex>
          <DivisionInput placeholder='하아' />
          <ToggleBtn src={ToggleUp} alt='toggleDown' />

          <DivisionInput placeholder='하아' />
          <ToggleBtn src={ToggleUp} alt='toggleDown' />
          <DivisionInput placeholder='하아' />
          <ToggleBtn src={ToggleUp} alt='toggleDown' />
          <DivisionInput placeholder='하아' />
          <ToggleBtn src={ToggleUp} alt='toggleDown' />
          <DivisionInput placeholder='하아' />
          <ToggleBtn src={ToggleUp} alt='toggleDown' />
        </SectionFlex>
      </Section>
      <Section>
        <SectionHeader>
          관련 태그 최대 3개 <Asterisk>*</Asterisk>
        </SectionHeader>
        <TagBtn>
          <img src={MajorPlusBtn} alt='TagBtn' />
          <div>추가하기</div>
        </TagBtn>
      </Section>
      <Section>
        <SectionHeader>
          관련 학과 최대 3개 <Asterisk>*</Asterisk>
        </SectionHeader>
        <MajorInput placeholder='관련 학과를 선택해주세요.' />
      </Section>
      <ActivityContainer>
        <ActivityHeader>단체 주요 활동 최대 3개</ActivityHeader>
        <ActivityContentWrapper>
          <ActivityContent>
            <ContentName>1.활동</ContentName>
            <ContentInfo>설명</ContentInfo>
          </ActivityContent>
          <ActivityContent>
            <ContentName>1.활동</ContentName>
            <ContentInfo>설명</ContentInfo>
          </ActivityContent>
          <ActivityContent>
            <ContentName>1.활동</ContentName>
            <ContentInfo>설명</ContentInfo>
          </ActivityContent>
        </ActivityContentWrapper>
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
const ImgSettingHeader = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  color: rgba(0, 0, 0, 0.8);
  font-family: Gmarket Sans TTF;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
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
  display: flex;
  margin-bottom: 0.5rem;
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
const ActivityHeader = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-family: Gmarket Sans TTF;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 1.2rem;
  margin-bottom: 1rem;
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

const DateBtn = styled.img`
  position: relative;
  left: -2rem;
  cursor: pointer;
`;

const ToggleBtn = styled.img`
  position: relative;
  left: -1.5rem;
  cursor: pointer;
`;

const TagBtn = styled.div`
  width: 6.3125rem;
  height: 1.875rem;
  border-radius: 0.625rem;
  cursor: pointer;
  border: 1px solid rgba(0, 143, 213, 0.7);
  background: #fff;
  color: rgba(0, 143, 213, 0.7);
  font-family: Gmarket Sans TTF;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;

  display: flex;
  align-items: center;

  img {
    margin-left: 0.3rem;
    margin-right: 0.3rem;
  }
`;

const MajorInput = styled.input`
  cursor: pointer;
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
    font-family: Gmarket Sans TTF;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  outline: none;
  border: none;
  background-color: transparent;
  padding-bottom: 0.4rem;
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.2);

  &:focus {
    outline: none;
    border: none;
  }
`;

const ActivityContent = styled.div`
  margin-bottom: 1.5rem;
`;
const ActivityContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ContentName = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-family: Gmarket Sans TTF;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 0.5rem;
`;
const ContentInfo = styled.div`
  height: 6.75rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  border: 1px solid #dbdbdf;
  background: #ffffff9f;
  color: rgba(0, 0, 0, 0.6);
  font-family: Gmarket Sans TTF;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.125rem; /* 128.571% */
  padding: 1.3rem;
`;
