import React, { useState } from 'react';
import styled from 'styled-components';
import level_one_2 from '../../assets/level_one_2.svg';
import level_two_2 from '../../assets/level_two_2.svg';
import Introduction from '../../component/Organization/apply/Introduction';
import {
  Title,
  SmallTitle,
  Next,
  Level,
  SaveButton
} from '../../component/Organization/apply/ApplyCommonStyle';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function CreateOrganizationSecond() {
  const [activityTitles, setActivityTitles] = useState(['', '', '']);
  const [activityContents, setActivityContents] = useState(['', '', '']);
  const location = useLocation();
  const organization = location.state;
  const selectedFileData = localStorage.getItem('selectedFile');
  const selectedFile = selectedFileData
    ? dataURItoBlob(selectedFileData)
    : null;
  function dataURItoBlob(dataURI: string) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }
  const handleTitleChange = (index: number, value: string) => {
    if (value.length <= 40) {
      const newTitles = [...activityTitles];
      newTitles[index] = value;
      setActivityTitles(newTitles);

      const updatedOrganization = {
        ...organization,
        activityTitle: newTitles
      };
      // organization 상태를 직접 업데이트
      location.state = updatedOrganization;
    }
  };

  const handleContentChange = (index: number, value: string) => {
    if (value.length <= 500) {
      const newContents = [...activityContents];
      newContents[index] = value;
      setActivityContents(newContents);

      const updatedOrganization = {
        ...organization,
        activityContent: newContents
      };
      // organization 상태를 직접 업데이트
      location.state = updatedOrganization;
    }
  };
  const handleTempSave = () => {
    console.log('임시저장');
    console.log(organization);
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
  const handleSubmit = async () => {
    console.log('제출');
    console.log(organization);
    console.log(organization.numberOfMember);
    const dto = {
      groupName: organization.name,
      logoImageUrl: '',
      establishedYear: organization.establishedYear,
      numOfMember: organization.numberOfMember,
      introduction: organization.introduction,
      relationMajor: organization.relationMajor,
      relatedTag: organization.relatedTag,
      activityTitle: activityTitles,
      activityContent: activityContents,
      campus: organization.campus,
      largeCategory: organization.largeCategory,
      mediumCategory: organization.mediumCategory,
      smallCategory: organization.smallCategory,
      subCategory: organization.subCategory
    };
    console.log(dto);
    console.log(selectedFile);
    const formData = new FormData();
    formData.append(
      'dto',
      new Blob([JSON.stringify(dto)], { type: 'application/json' })
    ); // Application data as JSON
    formData.append('file', selectedFile as Blob);
    try {
      const response = await axios.put(
        'https://nolmyong.com/api/group/apply',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data' // 올바른 Content-Type 설정
          }
        }
      );

      if (response.status === 200) {
        console.log('Application submitted successfully');
        // 성공 처리를 위한 로직 추가
      } else {
        console.error('Application submission failed');
        // 실패 처리를 위한 로직 추가
      }
    } catch (error) {
      const err = error as Error;
      console.error('폼 제출 오류:', err.message);
    }
  };
  return (
    <BackGround>
      <Introduction />
      <Board>
        <Title>단체 추가 정보</Title>
        <SmallTitle>단체 주요 활동 (최대 3개)</SmallTitle>
        {[0, 1, 2].map((index) => (
          <div key={index}>
            <Wrapper>
              <Num>{index + 1}.</Num>
              <BasicInput
                placeholder={'홛동 제목'}
                value={activityTitles[index]}
                onChange={(e) => handleTitleChange(index, e.target.value)}
              />
            </Wrapper>
            <BorderLine />
            <ActivityContent
              placeholder={'활동 내용 (최대 500자)'}
              value={activityContents[index]}
              onChange={(e) => handleContentChange(index, e.target.value)}
            />
          </div>
        ))}
      </Board>
      <Level>
        <img src={level_one_2} alt='Level One' />
        <img src={level_two_2} alt='Level Two' />
      </Level>
      <Next>
        <SaveButton onClick={handleTempSave}>임시저장</SaveButton>
        <SubmitButton onClick={handleSubmit}>등록하기</SubmitButton>
      </Next>
    </BackGround>
  );
}

export default CreateOrganizationSecond;

const Board = styled.div`
  border-radius: 13px;
  background: #fff;
  padding: 20px;
  width: 659px;
  height: 625px;
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

const SubmitButton = styled.button`
  color: #008fd5;
  font-family: 'GmarketSansMedium';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  width: 104px;
  height: 40px;
  line-height: 41px;
  border-radius: 15px;
  border: 1px solid #32a9eb;
  &:hover {
    background-color: #0080ff;
    color: #ffffff;
  }

  &:active {
    color: #008fd5;
  }
`;

const ActivityContent = styled.textarea`
  width: 570px;
  height: 72px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #dbdbdf;
  background: #fafafa;
  font-family: 'GmarketSansMedium';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 36px;
  margin-bottom: 10px;
  padding: 12px 12px;
  resize: none;
  outline: none;
  position: relative;
  &::placeholder {
    position: absolute;
    top: 12px;
    left: 12px;
    padding: 0;
    color: rgba(0, 0, 0, 0.4);
    pointer-events: none;
  }
`;

const Num = styled.div`
  color: rgba(0, 0, 0, 1);
  font-family: 'GmarketSansMedium';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 36px;
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
  line-height: 28px;
  margin-bottom: 0px;
  outline: none;
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: left;
  height: auto;
  justify-content: space-around;
  margin-top: 18px;
`;

const BorderLine = styled.hr`
  stroke-width: 2px;
  width: 570px;
  flex-shrink: 0;
  margin-left: 36px;
  margin-right: 8px;
  color: #dbdbdf;
  border: none;
  border-top: 1px solid #dbdbdf;
  margin-top: 6px;
  margin-bottom: 15px;
`;
