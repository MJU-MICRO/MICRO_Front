import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header, CardList } from './OrganizationListPageStyles';
import ClubCard from '../../component/Organization/Club/ClubCard';
import { ClubCardProps } from '../../component/Organization/Club/ClubCardProps';
import StudentCouncilCard from '../../component/Organization/StudentCouncil/StudentCouncilCard';
import { StudentCouncilCardProps } from '../../component/Organization/StudentCouncil/StudentCouncilCardProps';
import Sidebar from '../../component/SideBar/SideBar';

function OrganizationListPage() {
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
      name: '클럽 1',
      classification: '클럽 분류 1',
      campus: 'A 캠퍼스',
      relationMajor: 'A 학과',
      status: true,
      imageUrl: 'club1.jpg',
      interest: ['흥미 1', '흥미 2'],
      introduction: '이것은 클럽 1입니다. Lorem ipsum dolor sit amet...'
    },
    {
      id: '2',
      name: '클럽 2',
      classification: '클럽 분류 2',
      campus: 'B 캠퍼스',
      relationMajor: 'B 학과',
      status: false,
      imageUrl: 'club2.jpg',
      interest: ['흥미 3', '흥미 4'],
      introduction: '이것은 클럽 2입니다. Ut enim ad minim veniam...'
    }
    // 더 많은 클럽 데이터 추가 가능
  ];

  // 가상의 학생회 데이터
  const sampleStudentCouncilData: StudentCouncilCardProps[] = [
    {
      id: '101',
      name: '학생회 1',
      classification: '학생단체',
      campus: '인문캠퍼스',
      major: 'C 학과',
      status: true,
      imageUrl: 'council1.jpg',
      introduction: '이것은 학생회 1입니다. Lorem ipsum dolor sit amet...'
    },
    {
      id: '102',
      name: '학생회 2',
      classification: '학생회',
      campus: '자연캠퍼스',
      major: 'D 학과',
      status: false,
      imageUrl: 'council2.jpg',
      introduction: '이것은 학생회 2입니다. Ut enim ad minim veniam...'
    }
    // 더 많은 학생회 데이터 추가 가능
  ];

  useEffect(() => {
    // 가상의 데이터로 클럽과 학생회 데이터 설정
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

  // 학생회 데이터 필터링
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
      return relationMajorMatch && classificationMatch && campusMatch;
    });

  return (
    <div>
      <Header>
        <h1>클럽 및 학생회 목록</h1>
      </Header>
      <div style={{ display: 'flex' }}>
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
        <CardList>
          {/* 클럽 데이터를 매핑하여 ClubCard 컴포넌트로 표시 */}
          {filteredClubData.map((club) => (
            <Link to={`/club/${club.id}`} key={club.id}>
              <ClubCard {...club} />
            </Link>
          ))}
          {/* 학생회 데이터를 매핑하여 StudentCouncilCard 컴포넌트로 표시 */}
          {filteredStudentCouncilData.map((studentCouncil) => (
            <Link
              to={`/studentCouncil/${studentCouncil.id}`}
              key={studentCouncil.id}>
              <StudentCouncilCard {...studentCouncil} />
            </Link>
          ))}
        </CardList>
      </div>
    </div>
  );
}

export default OrganizationListPage;
