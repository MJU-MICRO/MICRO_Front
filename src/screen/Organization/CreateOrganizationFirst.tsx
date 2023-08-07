import React, { useState } from 'react';
import styled from 'styled-components';
import level_one from '../../assets/level-one.svg';
import level_two from '../../assets/level-two.svg';
import arrow from '../../assets/arrow.svg';
import toggle from '../../assets/toggle-up.svg';
import { Link } from 'react-router-dom';
import Introduction from '../../component/Organization/Introduction';
import SelectDate from '../../component/Organization/SelectDate';
import SelectMemberCount from '../../component/Organization/SelectMemberCount';
import {
  BasicInfoAsterisk,
  BorderLine,
  SaveButton,
  SmallTitle,
  Title
} from '../../component/Organization/createCommonStyle';
import SelectClassification from '../../component/Organization/SelectClassification';
import RelatedTagsSelect from '../../component/Organization/RelatedTagsSelect';
import SelectMajor from '../../component/Organization/SelectMajor';
import Preview from '../../component/Organization/Preview';

function CreateOrganizationFirst() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [memberCount, setMemberCount] = useState<number | null>(1);
  const [classification, setClassification] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedMajors, setSelectedMajors] = useState<string[]>([]);
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  const handleMemberCountChange = (member: number | null) => {
    // 수정된 부분
    setMemberCount(member);
  };
  const handleClassificationChange = (classification: string) => {
    // 수정된 부분
    setClassification(classification);
  };
  const handleSelectedTagsChange = (tags: string[]) => {
    setSelectedTags(tags);
  };
  const handleSelectedMajorsChange = (majors: string[]) => {
    setSelectedMajors(majors);
  };
  return (
    <BackGround>
      <Introduction></Introduction>
      <Board>
        <Title>단체 기본 정보 </Title>
        <SmallTitle>
          단체명<BasicInfoAsterisk>*</BasicInfoAsterisk>
        </SmallTitle>
        <BasicInput id='name' type='text' placeholder={'예시-놀명 뭐하니'} />
        <BorderLine></BorderLine>
        <SmallTitle>
          단체 한 줄 소개<BasicInfoAsterisk>*</BasicInfoAsterisk>
        </SmallTitle>
        <BasicInput
          id='introduction'
          type='text'
          placeholder={
            '예시 - 놀명뭐하니는 명지대학교 학생들을 위한 단체 등록 및 모집 공고 관리 서비스입니다.'
          }
        />
        <BorderLine></BorderLine>
        <SmallTitle>
          설립연도<BasicInfoAsterisk>*</BasicInfoAsterisk>
        </SmallTitle>
        <SelectDate onChange={handleDateChange} />
        <SmallTitle>
          회원 수<BasicInfoAsterisk>*</BasicInfoAsterisk>
        </SmallTitle>
        <SelectMemberCount onChange={handleMemberCountChange} />
        <SmallTitle>
          단체 구분<BasicInfoAsterisk>*</BasicInfoAsterisk>
        </SmallTitle>
        <SelectClassification onChange={handleClassificationChange} />
        <SmallTitle>
          관련 태그<BasicInfoAsterisk>*</BasicInfoAsterisk> (최대 3개)
        </SmallTitle>
        <RelatedTagsSelect
          selectedTags={selectedTags}
          onChange={setSelectedTags}
        />
        <SmallTitle>관련 학과 (최대 3개)</SmallTitle>
        <SelectMajor
          selectedMajors={selectedMajors}
          onChange={handleSelectedMajorsChange}
        />
        <SmallTitle>
          단체 로고 이미지<BasicInfoAsterisk>*</BasicInfoAsterisk>
        </SmallTitle>
        <Preview></Preview>
      </Board>
      <Level>
        <img src={level_one} />
        <img src={level_two} />
      </Level>
      <Next>
        <SaveButton>임시저장</SaveButton>
        <Link to={'/CreateOrganizationSecond'}>
          <NextButton>
            <div>추가 정보</div> <img src={arrow} />
          </NextButton>
        </Link>
      </Next>
    </BackGround>
  );
}

export default CreateOrganizationFirst;

const Board = styled.div`
  border-radius: 13px;
  background: #fff;
  padding: 20px;
  width: 659px;
  height: 790px;
  box-shadow: 0px 4px 20px 3px rgba(0, 0, 0, 0.05);
  margin-bottom: 21px;
  margin-left: 8px;
}
`;

const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
`;

const Level = styled.div`
  display: flex;
  align-items: left;
  margin-bottom: 41px;
  margin-right: 650px;
  img {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  }
}
`;
const Next = styled.div`
  display: flex;
  align-items: left;
  height: auto;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

const NextButton = styled.button`
  display: inline-block
  align-items: center;
  justify-content: center;
  position: relative;
  color: #008fd5;
  font-family: 'GmarketSansMedium';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  width: 130px;
  height: 40px;
  border-radius: 15px;
  border: 1px solid #32a9eb;
  &:hover {
    background-color: #0080ff;
    color: #ffffff;
  }

  &:active {
    color: #008fd5;
  }
  img {
    vertical-align: middle;
    width: 20px;
    height: 20px;
    margin-left: 67px;
  }
  div {
    position: absolute;
    top: 3%;
    line-height: 40px;
    text-align: center;
    margin-left: 12px;
  }
`;

const BasicInput = styled.input`
  width: 600px;
  height: 16px;
  padding: 0px;
  flex-shrink: 0;
  border: none;
  font-family: 'GmarketSansMedium';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 36px;
  margin-bottom: 0px;
  margin-top: 10px;
  outline: none;
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`;
