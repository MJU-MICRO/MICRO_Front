import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import check_box from '../../assets/check-box.svg';
import level_one from '../../assets/level-one.svg';
import level_two from '../../assets/level-two.svg';
import arrow from '../../assets/arrow.svg';
import { Link } from 'react-router-dom';
import img from '../../assets/img.svg';
import 'react-datepicker/dist/react-datepicker.css';
import { useDropzone } from 'react-dropzone';
import {
  RecruitmentContainer,
  LogoImage,
  InfoContainer,
  TextContainer,
  GroupName,
  BasicNoticeTitle,
  BasicNoticeText,
  RedAsterisk,
  GroupLargeCategory,
  GroupCategories,
  CategoriesContainer,
  GroupContainer,
  GroupIntroduce,
  FormContainer,
  TitleInput,
  ContentInput,
  FieldContainer,
  ApplicationField,
  FieldInput,
  RemoveButton,
  ActiveContentInput,
  ActivePeriodContainer,
  ActivePeriodBtn,
  DateContainer,
  SelectedDate,
  DateText,
  DropzoneStyle,
  ImageContainer
} from '../../component/CreateRecruitment/CreateRecruitmentStyles';

const CreateRecruitmentFirst: React.FC = () => {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 여기에 폼 제출 시 수행할 로직을 추가
    // 서버로 데이터를 전송하는 등의 작업을 수행가능
  };
  const [captions, setCaptions] = useState<string[]>(new Array(5).fill(''));

  const handleCaptionChange = (index: number, value: string) => {
    const updatedCaptions = [...captions];
    updatedCaptions[index] = value;
    setCaptions(updatedCaptions);
  };
  // Group 정보
  const [groupData, setGroupData] = useState({
    logoImageUrl: img,
    groupName: '과일 러버',
    groupCategory: '소모임',
    groupCategories: ['디자인/사진/영상', '체육/헬스', 'IT/공학'],
    groupIntroduce:
      '안녕하세요, 저희는 과일 러버 소모임 과일 러버단입니다. 저희의 과일 사랑은 무한합니다. 사실 저는 수박만 좋아합니다. 다른 거를 좋아하기 위한 소모임입니다.'
  });

  useEffect(() => {
    axios
      .get('')
      .then((response) => {
        setGroupData(response.data);
      })
      .catch((error) => {
        console.error('데이터 요청 실패:', error);
      });
  }, []);

  // 제목
  const [recruitmentTitle, setRecruitmentTitle] = useState<string>('');
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRecruitmentTitle(event.target.value);
  };

  // 설명글
  const [description, setDescription] = useState<string>('');
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event?.target.value);
  };

  // 모집분야
  const [recruitmentFields, setRecruitmentFields] = useState<Array<string>>([]);
  const [inputFieldValue, setInputFieldValue] = useState<string>('');

  const handleAddField = () => {
    if (inputFieldValue.trim() !== '' && recruitmentFields.length < 10) {
      setRecruitmentFields([...recruitmentFields, inputFieldValue]);
      setInputFieldValue('');
    }
  };

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputFieldValue(event.target.value);
  };

  const handleInputKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      handleAddField();
    }
  };

  const handleRemoveField = (index: number) => {
    const updatedFields = recruitmentFields.filter((_, i) => i !== index);
    setRecruitmentFields(updatedFields);
  };

  // 활동 내용
  const [activeContent, setActiveContent] = useState<string>('');
  const handleActiveContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setActiveContent(event.target.value);
  };

  // 활동 기간
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);

  const handleActivePeriodClick = (period: string) => {
    setSelectedPeriod(period);
  };

  // 모집기간
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  // 사진첨부
  const [photos, setPhotos] = useState<File[]>([]);

  const onDrop = (acceptedFiles: File[]) => {
    if (photos.length + acceptedFiles.length <= 5) {
      setPhotos([...photos, ...acceptedFiles]);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpg'],
      'image/jpeg': ['.jpeg']
    },
    multiple: true,
    maxFiles: 5 - photos.length
  });

  const handleRemovePhoto = (index: number) => {
    const updatedPhotos = [...photos];
    updatedPhotos.splice(index, 1);
    setPhotos(updatedPhotos);
  };

  // 임시저장
  const handleSaveButtonClick = async () => {
    try {
      const savedData = {
        recruitmentTitle,
        description,
        recruitmentFields,
        activeContent,
        selectedPeriod,
        startDate,
        endDate,
        photos
      };

      const serverUrl = '';
      const endpoint = '';

      const response = await axios.post(serverUrl + endpoint, savedData);

      console.log('서버 응답:', response.data);
    } catch (error) {
      console.error('서버 요청 실패:', error);
    }

    console.log('모집공고 제목: ' + recruitmentTitle);
    console.log('설명글: ' + description);
    console.log('모집분야: ' + recruitmentFields);
    console.log('설명글' + description);
    console.log('활동내용: ' + activeContent);
    console.log('활동기간: ' + selectedPeriod);
    console.log('모집기간: ' + startDate + '부터 ' + endDate + '까지');
    console.log('사진: ' + photos);
  };

  return (
    <BackGround>
      <Introduction>
        <NoticeTitle>모집 공고 등록하기</NoticeTitle>
        <SubtitleContainer>
          <SubtitleBlue>모집 공고 등록 가이드</SubtitleBlue>
          <SubTitle>를 참고해 단체를 등록해보세요</SubTitle>
        </SubtitleContainer>
        <NoticeText>
          <img src={check_box} />
          <p>명지대학교에 등록된 모든 동아리 · 학회 · 학생 단체의 모집 공고</p>
        </NoticeText>
        <NoticeText>
          <img src={check_box} />
          <p>
            {' '}
            등록되지 않은 단체여도 소모임 등록 시 모집 공고 등록이 가능해요!{' '}
          </p>
        </NoticeText>
      </Introduction>
      <Board>
        <RecruitmentContainer>
          <TextContainer>
            <BasicNoticeTitle>단체 기본 정보</BasicNoticeTitle>
          </TextContainer>
          <TextContainer>
            <BasicNoticeText>
              모집 공고 등록 시 표시되는 단체 정보입니다.
            </BasicNoticeText>
          </TextContainer>
          <GroupContainer>
            <LogoImage src={groupData.logoImageUrl} alt='로고 이미지' />
            <InfoContainer>
              <TextContainer>
                <GroupName>{groupData.groupName}</GroupName>
                <GroupLargeCategory>
                  {groupData.groupCategory}
                </GroupLargeCategory>
                <CategoriesContainer>
                  {groupData.groupCategories.map((category, index) => (
                    <GroupCategories key={index}>{category}</GroupCategories>
                  ))}
                </CategoriesContainer>
                <GroupIntroduce>{groupData.groupIntroduce}</GroupIntroduce>
              </TextContainer>
            </InfoContainer>
          </GroupContainer>
        </RecruitmentContainer>
        {/* Form 시작 */}
        <FormContainer onSubmit={handleFormSubmit}>
          {/* 제목 */}
          <RecruitmentContainer>
            <TextContainer>
              <BasicNoticeTitle>모집 공고 내용 작성하기</BasicNoticeTitle>
            </TextContainer>
            <TextContainer>
              <BasicNoticeText>모집 공고 제목</BasicNoticeText>
              <RedAsterisk>*</RedAsterisk>
            </TextContainer>
            <TitleInput
              name='recruitmentTitle'
              type='text'
              value={recruitmentTitle}
              onChange={handleTitleChange}
              placeholder='모집 공고 제목을 작성해주세요.'
            />
          </RecruitmentContainer>
          {/* 설명글 */}
          <RecruitmentContainer>
            <TextContainer>
              <BasicNoticeText>모집 설명글</BasicNoticeText>
              <RedAsterisk>*</RedAsterisk>
            </TextContainer>
            <ActiveContentInput
              name='description'
              value={description}
              onChange={handleDescriptionChange}
              placeholder='모집 설명글을 작성해주세요. (최대 300자)'
              maxLength={300}
            />
          </RecruitmentContainer>
          {/* 모집 분야 */}
          <RecruitmentContainer>
            <TextContainer>
              <BasicNoticeText>모집 분야 (최대 10개)</BasicNoticeText>
              <RedAsterisk>*</RedAsterisk>
            </TextContainer>
            <FieldContainer>
              {recruitmentFields.map((field, index) => (
                <ApplicationField key={index}>
                  {field}{' '}
                  <RemoveButton
                    onClick={() => handleRemoveField(index)}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 26 20'>
                    <path d='M14.4086 9.99915L18.7045 5.71268C18.8926 5.52453 18.9983 5.26935 18.9983 5.00326C18.9983 4.73718 18.8926 4.482 18.7045 4.29385C18.5164 4.1057 18.2612 4 17.9952 4C17.7291 4 17.474 4.1057 17.2859 4.29385L13 8.59031L8.71414 4.29385C8.52602 4.1057 8.27087 4 8.00483 4C7.73878 4 7.48363 4.1057 7.29551 4.29385C7.10739 4.482 7.0017 4.73718 7.0017 5.00326C7.0017 5.26935 7.10739 5.52453 7.29551 5.71268L11.5914 9.99915L7.29551 14.2856C7.20187 14.3785 7.12755 14.489 7.07683 14.6108C7.02611 14.7325 7 14.8631 7 14.995C7 15.1269 7.02611 15.2575 7.07683 15.3793C7.12755 15.501 7.20187 15.6116 7.29551 15.7044C7.38839 15.7981 7.49888 15.8724 7.62062 15.9232C7.74236 15.9739 7.87294 16 8.00483 16C8.13671 16 8.26729 15.9739 8.38903 15.9232C8.51077 15.8724 8.62127 15.7981 8.71414 15.7044L13 11.408L17.2859 15.7044C17.3787 15.7981 17.4892 15.8724 17.611 15.9232C17.7327 15.9739 17.8633 16 17.9952 16C18.1271 16 18.2576 15.9739 18.3794 15.9232C18.5011 15.8724 18.6116 15.7981 18.7045 15.7044C18.7981 15.6116 18.8724 15.501 18.9232 15.3793C18.9739 15.2575 19 15.1269 19 14.995C19 14.8631 18.9739 14.7325 18.9232 14.6108C18.8724 14.489 18.7981 14.3785 18.7045 14.2856L14.4086 9.99915Z' />
                  </RemoveButton>
                </ApplicationField>
              ))}
            </FieldContainer>
            <FieldInput
              name='applicationField'
              type='text'
              placeholder='모집 분야를 작성해주세요.'
              value={inputFieldValue}
              onChange={handleFieldChange}
              onKeyPress={handleInputKeyPress}
            />
          </RecruitmentContainer>
          {/* 활동 내용 */}
          <RecruitmentContainer>
            <TextContainer>
              <BasicNoticeText>활동 내용</BasicNoticeText>
              <RedAsterisk>*</RedAsterisk>
            </TextContainer>
            <ActiveContentInput
              name='activeContent'
              value={activeContent}
              onChange={handleActiveContentChange}
              placeholder='주요 활동 내용을 작성해주세요. (최대 500자)'
              maxLength={500}
            />
          </RecruitmentContainer>
          {/* 활동 기간 */}
          <RecruitmentContainer>
            <TextContainer>
              <BasicNoticeText>활동 기간</BasicNoticeText>
              <RedAsterisk>*</RedAsterisk>
            </TextContainer>
            <ActivePeriodContainer>
              <ActivePeriodContainer>
                <ActivePeriodBtn
                  className={selectedPeriod === '한 학기' ? 'active' : ''}
                  onClick={() => handleActivePeriodClick('한 학기')}>
                  한 학기
                </ActivePeriodBtn>
                <ActivePeriodBtn
                  className={selectedPeriod === '1년' ? 'active' : ''}
                  onClick={() => handleActivePeriodClick('1년')}>
                  1년
                </ActivePeriodBtn>
                <ActivePeriodBtn
                  className={selectedPeriod === '1년 이상' ? 'active' : ''}
                  onClick={() => handleActivePeriodClick('1년 이상')}>
                  1년 이상
                </ActivePeriodBtn>
              </ActivePeriodContainer>
            </ActivePeriodContainer>
          </RecruitmentContainer>
          {/* 모집 기간 */}
          <RecruitmentContainer>
            <TextContainer>
              <BasicNoticeText>모집 기간</BasicNoticeText>
              <RedAsterisk>*</RedAsterisk>
            </TextContainer>
            <DateContainer>
              <SelectedDate
                selected={startDate}
                onChange={handleStartDateChange}
                dateFormat='yyyy-MM-dd'
              />
              <DateText>부터</DateText>
              <SelectedDate
                selected={endDate}
                onChange={handleEndDateChange}
                dateFormat='yyyy-MM-dd'
              />
              <DateText>까지</DateText>
            </DateContainer>
          </RecruitmentContainer>
          {/* 사진첨부 */}
          <RecruitmentContainer>
            <TextContainer>
              <BasicNoticeText>사진 첨부 (최대 5개)</BasicNoticeText>
            </TextContainer>
            <ImageContainer>
              {photos.map((file, index) => (
                <div key={index} style={{ position: 'relative' }}>
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Uploaded Photo ${index}`}
                    style={{
                      width: '10.25rem',
                      height: '9.375rem',
                      marginRight: '1rem'
                    }}
                  />
                  <CaptionInput
                    placeholder='이곳에 설명을 작성해주세요.'
                    value={captions[index]}
                    onChange={(e) => handleCaptionChange(index, e.target.value)}
                    maxLength={20}
                  />
                  <RemoveButton
                    onClick={() => handleRemovePhoto(index)}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 26 20'
                    style={{
                      position: 'absolute',
                      top: '0.3rem',
                      right: '1rem'
                    }}>
                    <path d='M14.4086 9.99915L18.7045 5.71268C18.8926 5.52453 18.9983 5.26935 18.9983 5.00326C18.9983 4.73718 18.8926 4.482 18.7045 4.29385C18.5164 4.1057 18.2612 4 17.9952 4C17.7291 4 17.474 4.1057 17.2859 4.29385L13 8.59031L8.71414 4.29385C8.52602 4.1057 8.27087 4 8.00483 4C7.73878 4 7.48363 4.1057 7.29551 4.29385C7.10739 4.482 7.0017 4.73718 7.0017 5.00326C7.0017 5.26935 7.10739 5.52453 7.29551 5.71268L11.5914 9.99915L7.29551 14.2856C7.20187 14.3785 7.12755 14.489 7.07683 14.6108C7.02611 14.7325 7 14.8631 7 14.995C7 15.1269 7.02611 15.2575 7.07683 15.3793C7.12755 15.501 7.20187 15.6116 7.29551 15.7044C7.38839 15.7981 7.49888 15.8724 7.62062 15.9232C7.74236 15.9739 7.87294 16 8.00483 16C8.13671 16 8.26729 15.9739 8.38903 15.9232C8.51077 15.8724 8.62127 15.7981 8.71414 15.7044L13 11.408L17.2859 15.7044C17.3787 15.7981 17.4892 15.8724 17.611 15.9232C17.7327 15.9739 17.8633 16 17.9952 16C18.1271 16 18.2576 15.9739 18.3794 15.9232C18.5011 15.8724 18.6116 15.7981 18.7045 15.7044C18.7981 15.6116 18.8724 15.501 18.9232 15.3793C18.9739 15.2575 19 15.1269 19 14.995C19 14.8631 18.9739 14.7325 18.9232 14.6108C18.8724 14.489 18.7981 14.3785 18.7045 14.2856L14.4086 9.99915Z' />
                  </RemoveButton>
                  <></>
                </div>
              ))}
            </ImageContainer>
            <DropzoneStyle {...getRootProps()}>
              <input {...getInputProps()} />
              <p>클릭하시거나 파일을 이곳에 올려주세요.</p>
            </DropzoneStyle>
          </RecruitmentContainer>
        </FormContainer>
      </Board>
      <Level>
        <img src={level_one} />
        <img src={level_two} />
      </Level>
      <Next>
        <SaveButton onClick={handleSaveButtonClick}>임시저장</SaveButton>
        <Link to={'/createRecruitmentSecond'}>
          <NextButton>
            <div>추가 정보</div> <img src={arrow} />
          </NextButton>
        </Link>
      </Next>
    </BackGround>
  );
};

export default CreateRecruitmentFirst;

const Board = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 13px;
  background: #fff;
  padding: 20px;
  width: 659px;
  height: auto;
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

const Introduction = styled.div`
  width: 41.188rem;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 42px;
  margin-right: 18px;
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

const SaveButton = styled.button`
  color: #358e48;
  font-size: 0.9375rem;
  font-style: normal;
  font-family: 'GmarketSansMedium';
  font-weight: 500;
  line-height: 41px;
  width: 104px;
  height: 40px;
  margin-right: 10px;
  border-radius: 15px;
  border: 1px solid rgba(41, 180, 72, 0.7);
  &:hover {
    background-color: #04b404;
    color: #ffffff;
  }

  &:active {
    color: #358e48;
  }

  cursor: pointer;
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

  cursor: pointer;

`;

const NoticeTitle = styled.h1`
  color: #000;
  leading-trim: both;
  text-edge: cap;
  font-family: 'GmarketSansMedium';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 13px;
`;

const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const SubTitle = styled.p`
  display: flex;
  align-items: left;
  margin-bottom: 15px;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: normal;
  font-family: 'GmarketSansLight';
  color: #000000;
`;

const SubtitleBlue = styled(SubTitle)`
  font-family: GmarketSansMedium;
  color: #32a9eb;
`;

const NoticeText = styled.p`
  display: flex;
  align-items: left;
  margin-bottom: 7px;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: normal;
  font-family: 'GmarketSansLight';
  color: #000000;
  img {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    margin-right: 5px;
  }
`;

const Guide = styled.div`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: normal;
  font-family: 'GmarketSansLight';
  color: #000000;
  opacity: 100%;
  padding-bottom: 0.3rem;
`;

const CaptionInput = styled.input`
  width: 100%;
  height: 1.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-family: GmarketSansLight;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  border: none;
  outline: none;
`;
