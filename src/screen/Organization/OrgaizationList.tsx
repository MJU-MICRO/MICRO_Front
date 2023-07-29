import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { ClubCardProps } from '../../component/Organization/Club/ClubCardProps';
import { StudentCouncilCardProps } from '../../component/Organization/StudentCouncil/StudentCouncilCardProps';
import Sidebar from '../../component/SideBar';
import { Link } from 'react-router-dom';
import ClubCard from '../../component/Organization/Club/ClubCard';
import StudentCouncilCard from '../../component/Organization/StudentCouncil/StudentCouncilCard';
import '../../App.css';
import plus_Icon from '../../assets/plus-Icon.svg';

const OrganizationList = () => {
  // 가상의 데이터로 클럽과 학생회 데이터 생성
  const [clubData, setClubData] = useState<ClubCardProps[]>([]);
  const [studentCouncilData, setStudentCouncilData] = useState<
    StudentCouncilCardProps[]
  >([]);
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);
  const [selectedRelationMajor, setSelectedRelationMajor] = useState<
    string | null
  >(null);
  const [selectedClassification, setSelectedClassification] = useState<
    string | null
  >(null);
  const [selectedCampus, setSelectedCampus] = useState<string | null>(null);

  // 가상의 클럽 데이터
  const sampleClubData: ClubCardProps[] = [
    {
      id: '1',
      name: '과일 러버',
      classification: '소모임',
      campus: '인문캠퍼스',
      relationMajor: 'A 학과',
      status: true,
      imageUrl: 'club1.jpg',
      interest: ['디자인/미디어', '경영/컨설팅/마케팅', '정치/사회/법률'],
      introduction:
        '안녕하세요, 저희는 과일 러버 소모임 과일 러버단 입니다. 저희의 과일 사랑은 무한합니다. 사실 저는 수박만 좋아합니다. 다른 거를 좋아하기 위한 소모임 입니다.'
    },
    {
      id: '2',
      name: 'Co.Ad',
      classification: '동아리',
      campus: '인문캠퍼스',
      relationMajor: 'B 학과',
      status: false,
      imageUrl: 'club2.jpg',
      interest: ['디자인/미디어', '체육/헬스'],
      introduction:
        '안녕하세요, 저희는 과일 러버 소모임 과일 러버단\n' +
        '입니다. 저희의 과일 사랑은 무한합니다. 사실 저는 \n' +
        '수박만 좋아합니다. 다른 거를 좋아하기 위한 소모임\n' +
        '입니다.'
    }
  ];

  // 가상의 학생회 데이터
  const sampleStudentCouncilData: StudentCouncilCardProps[] = [
    {
      id: '101',
      name: '시그널',
      classification: '학생단체',
      campus: '인문캠퍼스',
      major: 'C 학과',
      college: '경영대학 학생회',
      status: true,
      imageUrl: 'council1.jpg',
      introduction:
        '안녕하세요, 저희는 과일 러버 소모임 과일 러버단\n' +
        '입니다. 저희의 과일 사랑은 무한합니다. 사실 저는 \n' +
        '수박만 좋아합니다. 다른 거를 좋아하기 위한 소모임\n' +
        '입니다.'
    },
    {
      id: '102',
      name: '공:존',
      classification: '학생단체',
      campus: '인문캠퍼스',
      major: 'D 학과',
      college: '총동아리연합회',
      status: false,
      imageUrl: 'council2.jpg',
      introduction:
        '안녕하세요, 저희는 과일 러버 소모임 과일 러버단\n' +
        '입니다. 저희의 과일 사랑은 무한합니다. 사실 저는 \n' +
        '수박만 좋아합니다. 다른 거를 좋아하기 위한 소모임\n' +
        '입니다.'
    },
    {
      id: '103',
      name: 'MOVE',
      classification: '학생단체',
      campus: '인문캠퍼스',
      major: 'D 학과',
      college: '총학생회',
      status: false,
      imageUrl: 'council2.jpg',
      introduction:
        '안녕하세요, 저희는 과일 러버 소모임 과일 러버단\n' +
        '입니다. 저희의 과일 사랑은 무한합니다. 사실 저는 \n' +
        '수박만 좋아합니다. 다른 거를 좋아하기 위한 소모임\n' +
        '입니다.'
    }
  ];

  useEffect(() => {
    setClubData(sampleClubData);
    setStudentCouncilData(sampleStudentCouncilData);
  }, []);

  // 클럽 데이터 필터링
  const filteredClubData: ClubCardProps[] = clubData.filter((club) => {
    const interestMatch =
      !selectedInterest || club.interest.includes(selectedInterest);
    const relationMajorMatch =
      !selectedRelationMajor || club.relationMajor === selectedRelationMajor;
    const classificationMatch =
      !selectedClassification || club.classification === selectedClassification;
    const campusMatch = !selectedCampus || club.campus === selectedCampus;
    return (
      interestMatch && relationMajorMatch && classificationMatch && campusMatch
    );
  });

  const filteredStudentCouncilData: StudentCouncilCardProps[] =
    studentCouncilData.filter((studentCouncil) => {
      const relationMajorMatch =
        !selectedRelationMajor ||
        studentCouncil.major === selectedRelationMajor;
      const classificationMatch =
        !selectedClassification ||
        studentCouncil.classification === selectedClassification;
      const campusMatch =
        !selectedCampus || studentCouncil.campus === selectedCampus;
      return (
        relationMajorMatch &&
        classificationMatch &&
        campusMatch &&
        !selectedInterest
      );
    });

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
          <h2>단체 리스트</h2>
          <p>놀명뭐하니 학우들이 소속해 있는 다양한 단체들을 만나보세요!</p>
        </Introduction>
        <CardList>
          <CreateOrganization>
            <img src={plus_Icon} className='plus_Icon' alt='plus' />
            <div>우리 단체 등록하기</div>
            <p>단체 페이지를 생성하여</p>
            <p> 놀명뭐하니 학우들과 소통해보세요!</p>
          </CreateOrganization>
          {filteredClubData.map((club) => (
            <CardContainer key={club.id}>
              <Link to={`/club/${club.id}`}>
                <ClubCard {...club} />
              </Link>
            </CardContainer>
          ))}
          {/* 학생회 데이터를 매핑하여 StudentCouncilCard 컴포넌트로 표시 */}
          {filteredStudentCouncilData.map((studentCouncil) => (
            <CardContainer key={studentCouncil.id}>
              <Link to={`/studentCouncil/${studentCouncil.id}`}>
                <StudentCouncilCard {...studentCouncil} />
              </Link>
            </CardContainer>
          ))}
        </CardList>
      </Content>
    </Wrapper>
  );
};

export default OrganizationList;

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
  margin-left: 20px;
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
  margin-left: 20px;
`;

const CardContainer = styled.div`
  width: 411px;
  height: 244px;
  margin-top: 8px;
  margin-right: 33px;
  margin-bottom: 22px;
  border-radius: 15px;
  background: #fff;
`;

const CreateOrganization = styled.div`
  width: 411px;
  height: 244px;
  margin-top: 8px;
  margin-right: 33px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 30px 3px rgba(42, 114, 255, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  img {
    margin-bottom: 22px;
    margin-top: 50px;
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
`;
