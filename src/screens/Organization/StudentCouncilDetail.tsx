import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import img from '../../assets/img.svg';
import { OrganizationProps } from '../../component/Organization/OrganizationProps';
import StudentCouncilRecruitmentCard from '../../component/recruitment/StudentCouncilRecruitmentCard';
import ClubRecruitmentCard from '../../component/recruitment/ClubRecruitmentCard';
import { RecruitmentProps } from '../../component/recruitment/RecruitmentProps';
import RecruitmentModal from '../Recruitment/RecruitmentModal';
import downArrow from '../../assets/downArrow.svg';
import UpArrow from '../../assets/UpArrow.svg';
import toggleIcon_up from '../../assets/toggle-up.svg';
import toggleIcon_down from '../../assets/toggle-down.svg';
import defaultHeart from '../../assets/defaultHeart.svg';
import FillHeart from '../../assets/FillHeart.svg';
function StudentCouncilDetail() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { id } = useParams<{ id: string }>();
  const [studentCouncilData, setStudentCouncilData] =
    useState<OrganizationProps | null>(null);
  const [recruitmentData, setRecruitmentData] =
    useState<RecruitmentProps | null>(null);
  const toggleBookmark = () => {
    const newBookmarkStatus = !isBookmarked;
    setIsBookmarked(newBookmarkStatus);

    //const userEmail = localStorage.getItem('userEmail');
    if (newBookmarkStatus) {
      console.log('북마크 등록');
    } else {
      console.log('북마크 해제');
    }
    // // Check if the user wants to add or remove the bookmark
    // if (newBookmarkStatus) {
    //   // Add the bookmark
    //   axios
    //     .post('https://api.example.org/bookmarks', {
    //       organizationId: id,
    //       userEmail: userEmail,
    //       isBookmarked: true
    //     })
    //     .catch((error) => {
    //       console.error('Error adding bookmark:', error);
    //     });
    // } else {
    //   // Remove the bookmark
    //   axios
    //     .delete(`https://api.example.org/bookmarks/${id}/${userEmail}`)
    //     .catch((error) => {
    //       console.error('Error removing bookmark:', error);
    //     });
    // }
  };
  const sampleStudentCouncilData: OrganizationProps[] = [
    {
      id: '101',
      name: '시그널',
      imageUrl: 'club1.jpg',
      establishedYear: 2023,
      numberOfMember: '34명',
      activityTitle: [
        '전 세계 각국의 과일들을 찾아보기',
        '전 세계 각국의 과일들을 찾아보기',
        '전 세계 각국의 과일들을 찾아보기'
      ],
      activityContent: [
        '저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.',
        '저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.',
        '저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.'
      ],
      isRecruit: true,
      campus: '인문캠퍼스',
      largeCategory: '학생단체',
      mediumCategory: '학과 학생회',
      smallCategory: '경영대학',
      subCategory: '경영정보학과',
      relationMajor: ['경영정보학과'],
      relatedTag: ['경영/컨설팅/마케팅', '정치/사회/법률'],
      introduction:
        '안녕하세요, 저희는 과일 러버 소모임 과일 러버단 입니다. 저희의 과일 사랑은 무한합니다. 사실 저는 수박만 좋아합니다. 다른 거를 좋아하기 위한 소모임 입니다.',
      presidentEmail: 'hgd@mju.ac.kr',
      isApprove: true
    },
    {
      id: '102',
      name: '공:존',
      imageUrl: 'club1.jpg',
      establishedYear: 2023,
      numberOfMember: '34명',
      activityTitle: [
        '전 세계 각국의 과일들을 찾아보기',
        '전 세계 각국의 과일들을 찾아보기',
        '전 세계 각국의 과일들을 찾아보기'
      ],
      activityContent: [
        '저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.',
        '저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.',
        '저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.'
      ],
      isRecruit: true,
      campus: '인문캠퍼스',
      largeCategory: '학생단체',
      mediumCategory: '총동아리연합회',
      smallCategory: '',
      subCategory: '',
      relationMajor: [''],
      relatedTag: ['디자인/미디어', '경영/컨설팅/마케팅', '정치/사회/법률'],
      introduction:
        '안녕하세요, 저희는 과일 러버 소모임 과일 러버단 입니다. 저희의 과일 사랑은 무한합니다. 사실 저는 수박만 좋아합니다. 다른 거를 좋아하기 위한 소모임 입니다.',
      presidentEmail: 'hgd@mju.ac.kr',
      isApprove: true
    },
    {
      id: '103',
      name: 'MOVE',
      imageUrl: 'club1.jpg',
      establishedYear: 2023,
      numberOfMember: '34명',
      activityTitle: [
        '전 세계 각국의 과일들을 찾아보기',
        '전 세계 각국의 과일들을 찾아보기',
        '전 세계 각국의 과일들을 찾아보기'
      ],
      activityContent: [
        '저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.',
        '저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.',
        '저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.'
      ],
      isRecruit: true,
      campus: '인문캠퍼스',
      largeCategory: '학생단체',
      mediumCategory: '단과대학 학생회',
      smallCategory: '경영대학',
      subCategory: '',
      relationMajor: ['경영학과', '경영정보학과', '국제통상학과'],
      relatedTag: [''],
      introduction:
        '안녕하세요, 저희는 과일 러버 소모임 과일 러버단 입니다. 저희의 과일 사랑은 무한합니다. 사실 저는 수박만 좋아합니다. 다른 거를 좋아하기 위한 소모임 입니다.',
      presidentEmail: 'hgd@mju.ac.kr',
      isApprove: true
    }
  ];
  const sampleRecruitmentData: RecruitmentProps[] = [
    {
      id: 'recruit1',
      groupId: '1',
      title: '과일 러버 단원 모집',
      description:
        '안녕하세요, 여러분! 우리는 과일을 사랑하는 사람들끼리 모여 즐겁게 시간을 보내며 과일에 대한 다양한 이야기를 공유하고 경험을 나누는 "과일 러버단"을 만들고자 합니다.\n' +
        '우리 과일 러버단은 과일을 좋아하고 그 맛과 향에 깊이 관심을 가진 사람이라면 누구나 환영합니다. 과일을 먹는 것은 단순한 식사가 아니라 삶의 즐거움과 건강에 이로운 요소라고 믿습니다. 따라서 우리는 과일의 매력을 함께 느끼고, 그에 대해 배우고, 새로운 종류의 과일을 발견하는 재미를 함께 누리고자 합니다.',
      applicationField: ['동아리원'],
      recruitmentStartDate: '2023-08-01',
      recruitmentDeadline: '2023-08-14',
      activePeriod: '학기 활동',
      activePlace: '주로 명지대학교 인문캠퍼스, 혹은 서울 내에서 활동합니다.',
      views: 120,
      question: ['자기소개', '동기'],
      characterLimit: [200, 300]
    },
    {
      id: 'recruit2',
      groupId: '2',
      title: 'Co.Ad 새 멤버 모집',
      description: '창의적 광고 아이디어를 함께 만들어보세요!',
      applicationField: ['광고', '마케팅'],
      recruitmentStartDate: '2023-08-01',
      recruitmentDeadline: '2023-08-21',
      activePeriod: '1년 활동',
      activePlace: '인문캠퍼스',
      views: 95,
      question: ['자기소개', '동기'],
      characterLimit: [200, 300]
    },
    {
      id: 'recruit3',
      groupId: '101',
      title: '시그널 학과 학생회 신입 회원 모집',
      description: '함께 더 나은 경영정보학과를 만들어가요!',
      applicationField: ['사무국', '홍보국', '기획국', '복지국'],
      recruitmentStartDate: '2023-08-01',
      recruitmentDeadline: '2023-08-18',
      activePeriod: '학기 활동',
      activePlace: '인문캠퍼스',
      views: 80,
      question: ['자기소개', '동기'],
      characterLimit: [200, 300]
    },
    {
      id: 'recruit4',
      groupId: '102',
      title: '공:존 총동아리연합회 신입 회원 모집',
      description: '다양한 분야에서 함께 성장해요!',
      applicationField: ['사무국', '홍보국', '기획국', '복지국'],
      recruitmentStartDate: '2023-08-01',
      recruitmentDeadline: '2023-08-10',
      activePeriod: '1년 활동',
      activePlace: '주로 명지대학교 인문캠퍼스, 혹은 서울 내에서 활동합니다.',
      views: 70,
      question: ['자기소개', '동기'],
      characterLimit: [200, 300]
    },
    {
      id: 'recruit5',
      groupId: '103',
      title: 'MOVE 단과대학 학생회 신입 회원 모집',
      description: '학과 학생회에서 더 많은 활동을 경험해보세요!',
      applicationField: ['사무국', '홍보국', '기획국', '복지국'],
      recruitmentStartDate: '2023-08-01',
      recruitmentDeadline: '2023-08-31',
      activePeriod: '1년 활동',
      activePlace: '인문캠퍼스',
      views: 60,
      question: ['자기소개', '동기'],
      characterLimit: [200, 300]
    }
  ];
  useEffect(() => {
    // Find the club that matches the id from the URL parameter
    const foundClub = sampleStudentCouncilData.find(
      (studentCouncil) => studentCouncil.id === id
    );
    const filteredRecruitments = sampleRecruitmentData.filter(
      (recruitment) => recruitment.groupId === id
    );

    const sortedRecruitments = filteredRecruitments.sort(
      (a: RecruitmentProps, b: RecruitmentProps) =>
        new Date(b.recruitmentStartDate).getTime() -
        new Date(a.recruitmentStartDate).getTime()
    );

    const latestRecruitment = sortedRecruitments[0];
    if (foundClub) {
      setStudentCouncilData(foundClub);
      setRecruitmentData(latestRecruitment);
    } else {
      console.error(`Club with id ${id} not found.`);
    }
  }, [id]);

  if (!studentCouncilData) {
    return <div>Loading...</div>;
  }
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <BackGround>
      <ClubIntroduction>
        <Intro>
          <Heart
            src={isBookmarked ? FillHeart : defaultHeart}
            alt='Bookmark'
            onClick={toggleBookmark}
          />
          <Logo src={img} alt='로고 이미지' />
          <h3>{studentCouncilData.name}</h3>
          <Classification>{studentCouncilData.largeCategory}</Classification>
          <Details> {studentCouncilData.introduction} </Details>
          <BorderLine></BorderLine>
        </Intro>
        <Wrapper>
          <div>
            <h3>설립연도</h3> <p>{studentCouncilData.establishedYear}년</p>
          </div>
          <div>
            <h3>상세분류</h3> <p>{studentCouncilData.mediumCategory}</p>
          </div>
        </Wrapper>
        <Wrapper>
          <div>
            <h3>소속대학</h3>
            {studentCouncilData.smallCategory != '' && (
              <p>{studentCouncilData.smallCategory}</p>
            )}
            {studentCouncilData.smallCategory == '' && <p>-</p>}
          </div>
          <div>
            <h3>소속학과</h3>
            {studentCouncilData.subCategory != '' && (
              <p>{studentCouncilData.subCategory}</p>
            )}
            {studentCouncilData.subCategory == '' && <p>-</p>}
          </div>
        </Wrapper>
      </ClubIntroduction>
      <ClubExplain>
        <Activity>
          <h3>주요 활동</h3>
          {studentCouncilData.activityTitle.map((title, index) => (
            <ActivityItem key={index}>
              <span>{title}</span>
              <div>{studentCouncilData.activityContent[index]}</div>
              <BorderLine2></BorderLine2>
            </ActivityItem>
          ))}
        </Activity>
        <Recruitment>
          <h3>{studentCouncilData.name}의 모집공고</h3>
          <RecruitWrapper>
            <DateWrapper>
              <ArrowIcon1 src={downArrow} />
              <RecruitDate>{recruitmentData?.recruitmentStartDate}</RecruitDate>
              <ArrowIcon2 src={UpArrow} />
            </DateWrapper>
            <CardContainer
              key={studentCouncilData.id}
              onClick={() => openModal()}>
              {recruitmentData ? (
                studentCouncilData.largeCategory === '학생단체' ? (
                  <StudentCouncilRecruitmentCard
                    {...studentCouncilData}
                    recruitment={recruitmentData}
                  />
                ) : (
                  <ClubRecruitmentCard
                    {...studentCouncilData}
                    recruitment={recruitmentData}
                  />
                )
              ) : (
                <div>Loading recruitment data...</div>
              )}
            </CardContainer>
          </RecruitWrapper>
        </Recruitment>
      </ClubExplain>
      <RecruitmentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedRecruitmentId={recruitmentData?.id}
        selectedClubId={id}
        recruitmentData={sampleRecruitmentData}
        clubData={sampleStudentCouncilData}
      />
    </BackGround>
  );
}

export default StudentCouncilDetail;
const Heart = styled.img`
  margin-left: 290px;
  width: 25px;
  height: 21px;
`;
const ArrowIcon1 = styled.img`
  width: 82px;
  height: 4px;
  color: rgba(0, 0, 0, 0.8);
  transform: rotate(90deg);
  stroke-width: 1px;
  stroke: #737373;
  margin-bottom: 50px;
`;
const ArrowIcon2 = styled.img`
  width: 82px;
  height: 4px;
  transform: rotate(90deg);
  stroke-width: 1px;
  stroke: #737373;
  margin-top: 50px;
`;
const RecruitDate = styled.div`
  color: #000;
  leading-trim: both;
  text-edge: cap;
  font-family: ABeeZee;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
`;
const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 55px;
  margin-right: 75px;
`;
const RecruitWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 8px;
`;
const CardContainer = styled.div`
  width: 610px;
  height: 230px;
  margin-top: 8px;
  margin-right: 45px;
  margin-bottom: 30px;
  border-radius: 15px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 20px 3px rgba(0, 0, 0, 0.05);
`;
const BackGround = styled.div`
  display: flex;
  justify-content: center;
`;

const ActivityItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 8px;
  span {
    color: rgba(0, 0, 0, 0.8);
    leading-trim: both;
    text-edge: cap;
    font-family: 'GmarketSansMedium';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 6.5px;
  }
  div {
    color: #000;
    leading-trim: both;
    text-edge: cap;
    font-family: 'GmarketSansLight';
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;

const ClubIntroduction = styled.div`
  border-radius: 13px;
  background: #fff;
  margin-top: 75px;
  margin-left: 79px;
  padding: 20px;
  width: 337px;
  height: 520px;
  box-shadow: 0px 4px 20px 3px rgba(0, 0, 0, 0.05);
`;

const Activity = styled.div`
  border-radius: 10px;
  background: #fff;
  margin-top: 75px;
  margin-left: 90px;
  padding: 20px;
  width: 861px;
  height: 350px;
  flex-shrink: 0;
  box-shadow: 0px 4px 30px 3px rgba(42, 114, 255, 0.25);
  h3 {
    text-align: left;
    vertical-align: middle;
    margin-top: 15px;
    margin-left: 8px;
    margin-bottom: 18px;
    font-family: 'GmarketSansMedium';
    color: rgba(0, 0, 0, 0.8);
    text-edge: cap;
    font-size: 24.5px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    leading-trim: both;
  }
`;

const Recruitment = styled.div`
  border-radius: 10px;
  background: #fff;
  margin-top: 27px;
  margin-left: 90px;
  padding: 20px;
  width: 861px;
  height: 310px;
  flex-shrink: 0;
  h3 {
    text-align: left;
    vertical-align: middle;
    margin-top: 15px;
    margin-left: 18px;
    font-family: 'GmarketSansMedium';
    color: rgba(0, 0, 0, 0.8);
    text-edge: cap;
    font-size: 24.5px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    leading-trim: both;
  }
`;

const ClubExplain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h3 {
    margin-top: 20px;
    font-family: 'GmarketSansMedium';
    color: rgba(0, 0, 0, 0.8);
    text-edge: cap;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
const Logo = styled.img`
  border-radius: 10px;
  width: 119px;
  height: 115px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  div {
    display: inline-block;
    border-radius: 5px;
    background-color: #fff;
    border: 0.4px solid #adadad;
    width: 150px;
    height: 61px;
    margin-top: 13px;
    margin-left: 3px;
    margin-right: 3px;
  }
  h3 {
    color: rgba(0, 0, 0, 1);
    leading-trim: both;
    text-edge: cap;
    font-family: 'GmarketSansMedium';
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 12px;
    margin-left: 7px;
  }
  p {
    color: #000;
    leading-trim: both;
    text-edge: cap;
    font-family: 'GmarketSansLight';
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-left: 7px;
    margin-top: 7px;
  }
`;

const Details = styled.div`
  text-align: left;
  vertical-align: middle;
  font-size: 16px;
  font-family: 'GmarketSansLight';
  line-height: auto;
  color: #000000;
  margin-left: 17px;
  margin-right: 17px;
  margin-bottom: 18.5px;
  margin-top: 19px;
`;

const Classification = styled.div`
  width: 70px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(52, 206, 174, 0.1);
  color: #34ceae;
  leading-trim: both;
  text-edge: cap;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 32.5px;
  align-items: center;
  text-align: center;
  font-family: 'GmarketSansMedium';
  margin-top: 11px;
`;

const BorderLine = styled.hr`
  stroke-width: 2px;
  width: 305px;
  flex-shrink: 0;
  margin-left: 8px;
  margin-right: 8px;
  color: #dbdbdf;
  border: none;
  border-top: 1px solid #dbdbdf;
`;

const BorderLine2 = styled.hr`
  stroke-width: 2px;
  width: 840px;
  flex-shrink: 0;
  margin-left: 0px;
  margin-right: 8px;
  color: #dbdbdf;
  border: none;
  border-top: 1px solid #dbdbdf;
  margin-top: 13px;
  margin-bottom: 13px;
`;

const DownWrapper = styled.div`
  display: inline-block;
  border-radius: 5px;
  background-color: #fff;
  border: 0.4px solid #adadad;
  width: 307.5px;
  height: 96px;
  margin-top: 11px;
  margin-left: 14px;
  h3 {
    color: rgba(0, 0, 0, 0.8);
    leading-trim: both;
    text-edge: cap;
    font-family: 'GmarketSansMedium';
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 16px;
    margin-left: 10px;
    margin-bottom: 13px;
  }
  div {
    display: flex;
    flex-wrap: wrap;
  }
`;
