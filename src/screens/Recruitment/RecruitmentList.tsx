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
import axios from 'axios';
import Modal from '../../component/Common/Modal';
import * as Styled from '../../component/Header/HeaderStyles';
import MyOrganization from '../../component/Setting/MyProfile/MyOrganization';
import Swal from 'sweetalert2';

const RecruitmentList = () => {
  const [recruitmentData, setRecruitmentData] = useState<RecruitmentProps[]>(
    []
  );
  const [isOrganizationContent, setIsOrganizationContent] = useState(false);
  const closeOrganizationModal = () => {
    setIsOrganizationContent(false);
  };
  const openOrganizationModal = () => {
    setIsOrganizationContent(true);
  };
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
  useEffect(() => {
    axios
      .get('api/group')
      .then((response) => {
        console.log(response);
        if (response.data.data) {
          setOrganizationData(response.data.data);
        } else {
          console.error('Application list data not available:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching application history:', error);
      });
  }, []);
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
  useEffect(() => {
    axios
      .get('/recruitments')
      .then((response) => {
        console.log(response);
        if (response.data.data) {
          setRecruitmentData(response.data.data);
        } else {
          console.error('Application list data not available:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching application history:', error);
      });
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
  const organizationModalContent = (
    <>
      <Styled.PostModalContentWrapper>
        <MyOrganization />
      </Styled.PostModalContentWrapper>
    </>
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
          {localStorage.getItem('accessToken') ? (
            <ApplyCard onClick={openOrganizationModal}>
              <img src={plus_Icon} className='plus_Icon' alt='plus' />
              <div>우리 단체 모집 공고 등록하기</div>
              <p>단체를 등록하고 놀명뭐하니 학우들을 대상으로</p>
              <p>편리하게 모집공고를 등록하고 관리해보세요!</p>
            </ApplyCard>
          ) : (
            <ApplyCard
              onClick={() => {
                Swal.fire({
                  text: '로그인 후 이용해주세요.',
                  icon: 'error',
                  confirmButtonText: '닫기'
                });
              }}>
              <img src={plus_Icon} className='plus_Icon' alt='plus' />
              <div>우리 단체 모집 공고 등록하기</div>
              <p>단체를 등록하고 놀명뭐하니 학우들을 대상으로</p>
              <p>편리하게 모집공고를 등록하고 관리해보세요!</p>
            </ApplyCard>
          )}
          {filteredClubData.map((club) => {
            const matchingRecruitment = recruitmentData.find(
              (recruitment) => recruitment.groupId === club.id
            );

            if (matchingRecruitment) {
              // Check if matchingRecruitment is defined
              return (
                <CardContainer
                  key={club.id}
                  onClick={() =>
                    openModal(matchingRecruitment.recruitmentId, club.id)
                  }>
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
        />
        {isOrganizationContent && (
          <Modal
            closeModal={closeOrganizationModal}
            width={'30.1875rem'}
            height={'fit-content'}
            header={'단체 선택'}
            children={organizationModalContent}
            description={''}
          />
        )}
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
