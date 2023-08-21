import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import Sidebar from '../../component/SideBar';
import { Link } from 'react-router-dom';
import '../../App.css';
import plus_Icon from '../../assets/plus-icon2.svg';
import { OrganizationProps } from '../../component/Organization/OrganizationProps';
import { RecruitmentProps } from '../../component/recruitment/RecruitmentProps';
import StudentCouncilRecruitmentCard from '../../component/recruitment/StudentCouncilRecruitmentCard';
import ClubRecruitmentCard from '../../component/recruitment/ClubRecruitmentCard';
import RecruitmentModal from './RecruitmentModal';

const RecruitmentList = () => {
  // 가상의 데이터로 클럽과 학생회 데이터 생성
  const [recruitmentData, setRecruitmentData] = useState<RecruitmentProps[]>(
    []
  );
  const [organizationData, setOrganizationData] = useState<OrganizationProps[]>(
    []
  );
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);
  const [selectedRelationMajor, setSelectedRelationMajor] = useState<string[]>(
    []
  );
  const [selectedClassification, setSelectedClassification] = useState<
    string | null
  >(null);
  const [selectedCampus, setSelectedCampus] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecruitmentId, setSelectedRecruitmentId] = useState(null);
  const [selectedClubId, setSelectedClubId] = useState(null);
  // 가상의 클럽 데이터
  const sampleOrganizationData: OrganizationProps[] = [
    {
      id: '1',
      name: '과일 러버',
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
      isRecruit: false,
      campus: '인문캠퍼스',
      largeCategory: '동아리',
      mediumCategory: '중앙동아리',
      smallCategory: '',
      subCategory: '',
      relationMajor: ['아동학과'],
      relatedTag: ['디자인/미디어', '경영/컨설팅/마케팅', '정치/사회/법률'],
      introduction:
        '안녕하세요, 저희는 과일 러버 소모임 과일 러버단 입니다. 저희의 과일 사랑은 무한합니다. 사실 저는 수박만 좋아합니다. 다른 거를 좋아하기 위한 소모임 입니다.',
      presidentEmail: 'hgd@mju.ac.kr',
      isApprove: true
    },
    {
      id: '2',
      name: 'Co.Ad',
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
      largeCategory: '동아리',
      mediumCategory: '준동아리',
      smallCategory: '',
      subCategory: '',
      relationMajor: ['경영학과'],
      relatedTag: ['디자인/미디어', '경영/컨설팅/마케팅', '정치/사회/법률'],
      introduction:
        '안녕하세요, 저희는 과일 러버 소모임 과일 러버단 입니다. 저희의 과일 사랑은 무한합니다. 사실 저는 수박만 좋아합니다. 다른 거를 좋아하기 위한 소모임 입니다.',
      presidentEmail: 'hgd@mju.ac.kr',
      isApprove: true
    },
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
      isRecruit: false,
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
  const openModal = (recruitmentId, clubId) => {
    setSelectedRecruitmentId(recruitmentId);
    setSelectedClubId(clubId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecruitmentId(null);
    setSelectedClubId(null);
  };
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
    setOrganizationData(sampleOrganizationData);
    setRecruitmentData(sampleRecruitmentData);
  }, []);

  // 클럽 데이터 필터링
  const filteredClubData: OrganizationProps[] = organizationData.filter(
    (club) => {
      const interestMatch =
        !selectedInterest || club.relatedTag.includes(selectedInterest);
      const relationMajorMatch =
        !selectedRelationMajor ||
        (Array.isArray(selectedRelationMajor) &&
          selectedRelationMajor.some((major) =>
            club.relationMajor.includes(major)
          ));
      const classificationMatch =
        !selectedClassification ||
        club.largeCategory === selectedClassification;
      const campusMatch = !selectedCampus || club.campus === selectedCampus;
      const noMajorSelected =
        !selectedRelationMajor || selectedRelationMajor.length === 0;

      return (
        interestMatch &&
        (noMajorSelected || relationMajorMatch) &&
        classificationMatch &&
        campusMatch
      );
    }
  );

  return (
    <Wrapper>
      <Sidebar
        selectedInterest={selectedInterest}
        setSelectedInterest={setSelectedInterest}
        selectedRelationMajor={selectedRelationMajor}
        setSelectedRelationMajor={setSelectedRelationMajor}
        selectedClassification={selectedClassification}
        setSelectedClassification={setSelectedClassification}
        selectedCampus={selectedCampus}
        setSelectedCampus={setSelectedCampus}
      />
      <Content>
        <Introduction>
          <h2>모집 공고</h2>
          <p>관심 주제 별로 모집 공고를 찾아보세요!</p>
        </Introduction>
        <CardList>
          <ApplyCard>
            <Link to={'/CreateOrganizationFirst'}>
              <img src={plus_Icon} className='plus_Icon' alt='plus' />
              <div>우리 단체 모집 공고 등록하기</div>
              <p>단체를 등록하고 놀명뭐하니 학우들을 대상으로</p>
              <p>편리하게 모집공고를 등록하고 관리해보세요!</p>
            </Link>
          </ApplyCard>
          {filteredClubData.map((club) => {
            const matchingRecruitment = recruitmentData.find(
              (recruitment) => recruitment.groupId === club.id
            );

            if (matchingRecruitment) {
              // Check if matchingRecruitment is defined
              return (
                <CardContainer
                  key={club.id}
                  onClick={() => openModal(matchingRecruitment.id, club.id)}>
                  {club.largeCategory === '학생단체' ? (
                    <StudentCouncilRecruitmentCard
                      {...club}
                      recruitment={matchingRecruitment}
                    />
                  ) : (
                    <ClubRecruitmentCard
                      {...club}
                      recruitment={matchingRecruitment}
                    />
                  )}
                </CardContainer>
              );
            } else {
              return null; // Or render a loading state or placeholder
            }
          })}
        </CardList>
        <RecruitmentModal
          isOpen={isModalOpen}
          onClose={closeModal}
          selectedRecruitmentId={selectedRecruitmentId}
          selectedClubId={selectedClubId}
          recruitmentData={recruitmentData}
          clubData={filteredClubData}
        />
      </Content>
    </Wrapper>
  );
};

export default RecruitmentList;

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 49px;
`;

const Introduction = styled.div`
  margin-left: 50px;
  h2 {
    margin-top: 70px;
    color: rgba(0, 0, 0, 0.8);
    leading-trim: both;
    text-edge: cap;
    font-family: 'GmarketSansMedium';
    font-size: 28px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
    margin-bottom: 18px;
  }
  p {
    color: #000;
    leading-trim: both;
    text-edge: cap;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    font-size: 16px;
    font-family: 'GmarketSansLight';
  }
`;

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 41px;
  margin-left: 50px;
`;

const CardContainer = styled.div`
  width: 610px;
  height: 230px;
  margin-top: 8px;
  margin-right: 45px;
  margin-bottom: 30px;
  border-radius: 15px;
  background: #fff;
`;

const ApplyCard = styled.div`
  text-decoration: none;
  width: 610px;
  height: 230px;
  margin-top: 8px;
  margin-right: 45px;
  margin-bottom: 30px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 30px 3px rgba(76, 76, 255, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  img {
    margin-bottom: 22px;
    margin-top: 40px;
  }
  div {
    color: rgba(0, 0, 0, 0.8);
    leading-trim: both;
    text-edge: cap;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-family: 'GmarketSansMedium';
    margin-bottom: 12px;
  }
  p {
    color: rgba(0, 0, 0, 0.8);
    text-align: center;
    leading-trim: both;
    text-edge: cap;
    font-size: 13.6px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    font-family: 'GmarketSansLight';
  }
  a {
    text-decoration: none;
    color: inherit; /* Inherit color from parent */
  }
`;
