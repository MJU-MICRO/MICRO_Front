import React, { useEffect, useState } from 'react';
import UploadBtn from '../UploadBtn';
import img from '../../../assets/userDefaultImg.svg';
import styled from 'styled-components';
import DateImg from '../../../assets/DateImg.svg';

import MajorPlusBtn from '../../../assets/MajorPlus.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SelectTags from './SelectMenu/SelectTags';
import SelectMajors from './SelectMenu/SelectMajors';
import RelatedTagsSelect from 'component/Organization/apply/RelatedTagsSelect';
import SelectCampus from './SelectMenu/SelectCampus';
import SelectDivision from './SelectMenu/SelectDivision';
import SelectDivisionDetail from './SelectMenu/SelectDivisionDetail';
import { GroupDetail } from 'interfaces/GroupDetailProps';
import axios from 'axios';
interface DefaultSettingProps {
  groupId: number;
}
const DefaultSetting = ({ groupId }: DefaultSettingProps) => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState<File | null>(null);

  const handleImageUpload = (imageUrl: File) => {
    setUploadedImageUrl(imageUrl);
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [selectedMajors, setSelectedMajors] = useState<string[]>([]);

  const selectMajorHandler = (selectedMajors: string[]) => {
    setSelectedMajors(selectedMajors);
  };

  const [selectTags, setSelectTags] = useState<string[]>([]);
  const selectTagHandler = (selectTags: string[]) => {
    setSelectTags(selectTags);
  };

  const [selectCampus, setSelectCampus] = useState<string[]>([]);
  const selectCampusHandler = (selectCampus: string[]) => {
    setSelectCampus(selectCampus);
  };
  const [selectDivision, setselectDivision] = useState('');
  const selectDivisionHandler = (selectDivision: string) => {
    setselectDivision(selectDivision);
    console.log(selectDivision);
  };
  const [selectDivisionDetail, setselectDivisionDetail] = useState<string[]>(
    []
  );
  const selectDivisionDetailHandler = (selectDivisionDetail: string[]) => {
    setselectDivisionDetail(selectDivisionDetail);
  };

  const [groupData, setGroupData] = useState<GroupDetail | null>(null);

  useEffect(() => {
    const fetchGroupData = async () => {
      try {
        const response = await axios.get(
          `https://nolmyong.com/api/group/${groupId}`
        );
        setGroupData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log('Error fetching group data:', error);
      }
    };

    fetchGroupData();
  }, [groupId]);

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
            division=''
          />
        </ImgSettingContent>
      </ImgSettingContainer>
      <Section>
        <SectionFlex>
          <div>
            <SectionHeader>
              단체명 <Asterisk>*</Asterisk>
            </SectionHeader>
            <SectionInput placeholder={groupData?.groupName} />
          </div>

          <div>
            <SectionHeader>
              설립일 <Asterisk>*</Asterisk>
            </SectionHeader>
            <SectionFlex>
              <CustomDatePicker
                selected={selectedDate}
                onChange={handleDateChange} // 선택한 날짜를 업데이트하는 핸들러 함수
                dateFormat='yyyy-MM-dd' // 날짜 형식 지정
                placeholderText={groupData?.establishedYear.toString()}
              />
              <DateBtn src={DateImg} alt='DateImg' />
            </SectionFlex>
          </div>
        </SectionFlex>
      </Section>
      <Section>
        <SectionHeader>
          회원수 <Asterisk>*</Asterisk>
        </SectionHeader>
        <SectionInput placeholder={groupData?.numOfMember} />
      </Section>
      <Section>
        <SectionHeader>
          단체 구분 <Asterisk>*</Asterisk>
        </SectionHeader>
        <SectionFlex>
          <SelectCampus
            selectedTags={selectCampus}
            onChange={selectCampusHandler}
          />
          <SelectDivision
            selectedDivision={selectDivision}
            onChange={selectDivisionHandler}
          />

          <SelectDivisionDetail
            selectedDivisionDetail={selectDivisionDetail}
            onChange={selectDivisionDetailHandler}
          />
        </SectionFlex>
      </Section>
      <Section>
        <SectionHeader>
          관련 태그 최대 3개 <Asterisk>*</Asterisk>
        </SectionHeader>

        <SelectTags selectedTags={selectTags} onChange={selectTagHandler} />
      </Section>
      <Section>
        <SectionHeader>
          관련 학과 최대 3개 <Asterisk>*</Asterisk>
        </SectionHeader>
        <SelectMajorContainer>
          <SelectMajors
            selectedMajors={selectedMajors}
            onChange={selectMajorHandler}
          />
        </SelectMajorContainer>
      </Section>
      <ActivityContainer>
        <ActivityHeader>단체 주요 활동 최대 3개</ActivityHeader>
        <ActivityContentWrapper>
          <ActivityContent>
            <ContentName>1.{groupData?.activityTitle[0]}</ContentName>
            <ContentInfo>{groupData?.activityContent[0]}</ContentInfo>
          </ActivityContent>
          <ActivityContent>
            <ContentName>2.{groupData?.activityContent[1]}</ContentName>
            <ContentInfo>{groupData?.activityContent[1]}</ContentInfo>
          </ActivityContent>
          <ActivityContent>
            <ContentName>3.{groupData?.activityContent[2]}</ContentName>
            <ContentInfo>{groupData?.activityContent[2]}</ContentInfo>
          </ActivityContent>
        </ActivityContentWrapper>
      </ActivityContainer>
    </Container>
  );
};

export default DefaultSetting;

const SelectMajorContainer = styled.div``;

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
  margin-bottom: 2.5rem;
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
const ContentInfo = styled.textarea`
  height: 6.75rem;
  width: 100%;
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
  resize: vertical;
  overflow-x: hidden;
  &:focus {
    border: none;
    outline: none;
  }
`;
const CustomDatePicker = styled(DatePicker)`
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
  cursor: pointer;

  &:focus {
    outline: none;
    border: none;
  }

  /* 선택된 날짜 스타일 */
  .react-datepicker__day--selected {
    background-color: rgba(0, 143, 213, 0.7);
    color: white;
  }

  /* 선택된 날짜 호버 스타일 */
  .react-datepicker__day--selected:hover {
    background-color: rgba(0, 143, 213, 0.7);
  }
`;
