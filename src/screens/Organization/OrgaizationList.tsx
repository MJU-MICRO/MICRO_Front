import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import Sidebar from '../../component/SideBar';
import { Link } from 'react-router-dom';
import ClubCard from '../../component/Organization/ClubCard';
import StudentCouncilCard from '../../component/Organization/StudentCouncilCard';
import '../../App.css';
import plus_Icon from '../../assets/plus-Icon.svg';
import { OrganizationProps } from '../../component/Organization/OrganizationProps';
import axios from 'axios';
const OrganizationList = () => {
  const [clubData, setClubData] = useState<OrganizationProps[]>([]);
  const [studentCouncilData, setStudentCouncilData] = useState<
    OrganizationProps[]
  >([]);
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);
  const [selectedRelationMajor, setSelectedRelationMajor] = useState<string[]>(
    []
  );
  const [sampleData2, setSampleData2] = useState<OrganizationProps[]>([]);
  const [selectedClassification, setSelectedClassification] = useState<
    string | null
  >(null);
  const [selectedCampus, setSelectedCampus] = useState<string | null>(null);
  useEffect(() => {
    axios
      .get('api/group')
      .then((response) => {
        console.log(response);
        if (response.data.data) {
          setSampleData2(response.data.data);
        } else {
          console.error('Application list data not available:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching application history:', error);
      });
  }, []);

  const sampleClubData: OrganizationProps[] = sampleData2.filter(
    (item) =>
      item.largeCategory === '동아리' ||
      item.largeCategory === '소모임' ||
      item.largeCategory === '학회'
  );

  const sampleStudentCouncilData: OrganizationProps[] = sampleData2.filter(
    (item) => item.largeCategory === '학생단체'
  );

  useEffect(() => {
    setClubData(sampleClubData);
    setStudentCouncilData(sampleStudentCouncilData);
  }, []);

  // 클럽 데이터 필터링
  const filteredClubData: OrganizationProps[] = clubData.filter((club) => {
    const interestMatch =
      !selectedInterest || club.relatedTag.includes(selectedInterest);
    const relationMajorMatch =
      !selectedRelationMajor ||
      (Array.isArray(selectedRelationMajor) &&
        selectedRelationMajor.some((major) =>
          club.relationMajor.includes(major)
        ));
    const classificationMatch =
      !selectedClassification || club.largeCategory === selectedClassification;
    const campusMatch = !selectedCampus || club.campus === selectedCampus;
    const noMajorSelected =
      !selectedRelationMajor || selectedRelationMajor.length === 0;

    return (
      interestMatch &&
      (noMajorSelected || relationMajorMatch) &&
      classificationMatch &&
      campusMatch
    );
  });

  const filteredStudentCouncilData: OrganizationProps[] =
    studentCouncilData.filter((studentCouncil) => {
      const relationMajorMatch =
        !selectedRelationMajor ||
        (Array.isArray(selectedRelationMajor) &&
          selectedRelationMajor.some((major) =>
            studentCouncil.relationMajor.includes(major)
          ));
      const classificationMatch =
        !selectedClassification ||
        studentCouncil.largeCategory === selectedClassification;
      const campusMatch =
        !selectedCampus || studentCouncil.campus === selectedCampus;
      const noMajorSelected =
        !selectedRelationMajor || selectedRelationMajor.length === 0;

      return (
        (noMajorSelected || relationMajorMatch) &&
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
            <Link to={'/CreateOrganizationFirst'}>
              <img src={plus_Icon} className='plus_Icon' alt='plus' />
              <div>우리 단체 등록하기</div>
              <p>단체 페이지를 생성하여</p>
              <p> 놀명뭐하니 학우들과 소통해보세요!</p>
            </Link>
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
  a {
    text-decoration: none;
    color: inherit; /* Inherit color from parent */
  }
`;

const CreateOrganization = styled.div`
  text-decoration: none;
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
  a {
    text-decoration: none;
    color: inherit; /* Inherit color from parent */
  }
`;
