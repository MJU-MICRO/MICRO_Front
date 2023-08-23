import React, { useState } from 'react';
import styled from 'styled-components';
import level_one from '../../assets/level-one.svg';
import level_two from '../../assets/level-two.svg';
import arrow from '../../assets/arrow.svg';
import toggle from '../../assets/toggle-up.svg';
import { Link, useLocation } from 'react-router-dom';
import Introduction from '../../component/Organization/apply/Introduction';
import SelectDate from '../../component/Organization/apply/SelectDate';
import SelectMemberCount from '../../component/Organization/apply/SelectMemberCount';
import {
  BasicInfoAsterisk,
  BorderLine,
  SaveButton,
  SmallTitle,
  Title,
  BasicInput,
  Next,
  Level
} from '../../component/Organization/apply/ApplyCommonStyle';
import SelectClassification from '../../component/Organization/apply/SelectClassification';
import RelatedTagsSelect from '../../component/Organization/apply/RelatedTagsSelect';
import SelectMajor from '../../component/Organization/apply/SelectMajor';
import Preview from '../../component/Organization/apply/Preview';
import { OrganizationProps } from '../../component/Organization/OrganizationProps';
import axios from 'axios';

function CreateOrganizationFirst() {
  const [organization, setOrganization] = useState<OrganizationProps>({
    id: 0,
    name: '',
    imageUrl: '',
    establishedYear: 0,
    numberOfMember: '',
    introduction: '',
    relationMajor: [],
    relatedTag: [],
    activityTitle: [],
    activityContent: [],
    isRecruit: false,
    campus: '',
    largeCategory: '',
    mediumCategory: '',
    smallCategory: '',
    subCategory: '',
    presidentId: 0,
    isApprove: false
  });
  const handleInputChange = (field: keyof OrganizationProps, value: any) => {
    setOrganization((prevOrganization) => ({
      ...prevOrganization,
      [field]: value
    }));
  };
  const location = useLocation();
  const handleClubNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setClubName(newName);
    handleInputChange('name', newName);
    console.log(newName);
  };

  const handleClubDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newDescription = event.target.value;
    setClubDescription(newDescription);
    handleInputChange('introduction', newDescription);
    console.log(newDescription);
  };
  const [clubName, setClubName] = useState(''); // 동아리명 입력 상태
  const [clubDescription, setClubDescription] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedMajors, setSelectedMajors] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleDateChange = (date: Date | null) => {
    handleInputChange('establishedYear', date ? date.getFullYear() : 0);
  };
  const handleMemberCountChange = (member: string) => {
    handleInputChange('numberOfMember', member);
    console.log(member);
    console.log(typeof member);
  };
  const handleClassificationChange = (
    classification: string,
    faculty: string,
    department: string,
    campus: string,
    organization: string
  ) => {
    handleInputChange('campus', campus);
    handleInputChange('largeCategory', organization);
    handleInputChange('mediumCategory', classification);
    handleInputChange('smallCategory', faculty);
    handleInputChange('subCategory', department);
  };
  const handleSelectedTagsChange = (tags: string[]) => {
    setSelectedTags(tags);
    handleInputChange('relatedTag', tags);
    console.log(organization.relatedTag);
  };
  const handleSelectedMajorsChange = (majors: string[]) => {
    setSelectedMajors(majors);
    console.log(majors);
    handleInputChange('relationMajor', majors);
  };
  const handleImgUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);

      // 파일을 로컬 스토리지에 저장
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        localStorage.setItem('selectedFile', e.target?.result as string);
      };
      fileReader.readAsDataURL(event.target.files[0]);
    }
  };
  const handleTempSave = () => {
    console.log('임시저장');
    console.log(selectedFile);
    // const userEmail = localStorage.getItem('userEmail');
    //
    // // Prepare the data to send to the temporary save API
    // const dataToSend = {
    //   organization: organization,
    //   userEmail: userEmail
    // };
    //
    // // Send data to the temporary save API
    // axios
    //   .post('https://api.example.org/temp-save', dataToSend)
    //   .then((response) => {
    //     console.log('Temporary save successful:', response.data);
    //   })
    //   .catch((error) => {
    //     console.error('Error saving data:', error);
    //   });
  };
  return (
    <BackGround>
      <Introduction></Introduction>
      <Board>
        <Title>단체 기본 정보 </Title>
        <SmallTitle>
          단체명<BasicInfoAsterisk>*</BasicInfoAsterisk>
        </SmallTitle>
        <BasicInput
          id='name'
          type='text'
          value={clubName}
          onChange={handleClubNameChange} // 입력값 업데이트 함수 연결
          placeholder={'예시-놀명 뭐하니'}
        />
        <BorderLine></BorderLine>
        <SmallTitle>
          단체 한 줄 소개<BasicInfoAsterisk>*</BasicInfoAsterisk>
        </SmallTitle>
        <BasicInput
          id='introduction'
          type='text'
          value={clubDescription}
          onChange={handleClubDescriptionChange} // 입력값 업데이트 함수 연결
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
          onChange={handleSelectedTagsChange}
        />
        <SmallTitle>관련 학과 (최대 3개)</SmallTitle>
        <SelectMajor
          selectedMajors={selectedMajors}
          onChange={handleSelectedMajorsChange}
        />
        <SmallTitle>
          단체 로고 이미지<BasicInfoAsterisk>*</BasicInfoAsterisk>
        </SmallTitle>
        <Preview onChange={handleImgUrlChange} />
      </Board>
      <Level>
        <img src={level_one} />
        <img src={level_two} />
      </Level>
      <Next>
        <SaveButton onClick={handleTempSave}>임시저장</SaveButton>
        <Link to='/CreateOrganizationSecond' state={organization}>
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
