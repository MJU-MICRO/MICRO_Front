import React, { useEffect, useState } from 'react';
import {
  ModalOverlay,
  ModalWrapper,
  ModalContent,
  Title,
  SubTitle,
  Description,
  Content,
  ActivePeriod,
  Basic,
  Description2,
  Period,
  PeriodWrapper,
  PeriodContent,
  SupportButton
} from '../../component/recruitment/Modal/ModalStyle';
import ModalIntroductionStudent from '../../component/recruitment/Modal/ModalIntroductionStudent';
import ModalIntroductionClub from '../../component/recruitment/Modal/ModalIntroductionClub';
import scrollbar from '../../assets/scrollBar.svg';
import ImgCarousel from '../../component/recruitment/Modal/ImgCarousel';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { RecruitmentProps } from '../../component/recruitment/RecruitmentProps';
import { OrganizationProps } from '../../component/Organization/OrganizationProps';
import axios from 'axios';
import Swal from 'sweetalert2';

const ModalBody = styled.div`
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  width: 839px;
  height: 485px;
  scrollbar-width: none; /* Remove default scrollbar */
  &::-webkit-scrollbar {
    width: 4px; /* Set width of the new custom scrollbar */
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    background-image: url(${scrollbar});
    background-repeat: no-repeat;
    background-size: 4px 134px;
    border-radius: 2px; /* Rounded corners for the thumb */
  }
`;
const RecruitmentModal = ({
  isOpen,
  onClose,
  selectedRecruitmentId,
  selectedClubId
}) => {
  if (!isOpen) {
    return null;
  }
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formattedStartDate, setFormattedStartDate] = useState<string | null>(
    null
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formattedEndDate, setFormattedEndDate] = useState<string | null>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formattedActivePeriod, setFormattedActivePeriod] = useState<
    string | null
  >(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [recruitmentDatalist, setRecruitmentDatalist] = useState<
    RecruitmentProps[]
  >([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [clubData, setClubData] = useState<OrganizationProps | null>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [recruitmentData, setRecruitmentData] =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useState<RecruitmentProps | null>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios
      .get(`https://nolmyong.com/api/group/${selectedClubId}`)
      .then((response) => {
        if (response.data.data) {
          setClubData(response.data.data);
        } else {
          console.error(response.data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching group data:', error);
      });
  }, [selectedClubId]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios
      .get('https://nolmyong.com/recruitments')
      .then((response) => {
        if (response.data.data) {
          setRecruitmentDatalist(response.data.data);
        } else {
          console.error('Recruitment data not available:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching recruitment data:', error);
      });
  }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (recruitmentDatalist.length > 0 && selectedRecruitmentId) {
      const selectedRecruitment = recruitmentDatalist.find(
        (item) => item.recruitmentId === selectedRecruitmentId
      );
      setRecruitmentData(selectedRecruitment || null);

      // Format the active period here
      if (selectedRecruitment) {
        setFormattedActivePeriod(
          formatActivePeriod(selectedRecruitment.activePeriod)
        );
        const startDate = new Date(selectedRecruitment.startDateTime);
        const formattedStart = `${startDate.getFullYear()}-${
          startDate.getMonth() + 1
        }-${startDate.getDate()}`;
        setFormattedStartDate(formattedStart);

        // Format and set the end date
        const endDate = new Date(selectedRecruitment.endDateTime);
        const formattedEnd = `${endDate.getFullYear()}-${
          endDate.getMonth() + 1
        }-${endDate.getDate()}`;
        setFormattedEndDate(formattedEnd);
      }
      const groupName = clubData?.groupName;
      console.log(groupName);
      if (groupName !== undefined) {
        localStorage.setItem('groupName', groupName);
      }
    }
  }, [selectedRecruitmentId, recruitmentDatalist]);

  if (!isOpen || !recruitmentData || !clubData) {
    return null;
  }
  const handleSupportClick = () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      Swal.fire({
        text: '로그인 먼저 진행해주세요.',
        icon: 'error',
        confirmButtonText: '닫기'
      });
    } else {
      // Redirect to the support page or perform any other action
      // Here, I'm assuming you're using react-router-dom
      // You can adjust the URL and navigation logic as needed
      window.location.href = `/application?state=${recruitmentData.recruitmentId}`;
    }
  };
  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalWrapper>
        <ModalContent>
          {clubData && clubData.largeCategory === '학생단체' ? (
            <ModalIntroductionStudent
              {...clubData}
              recruitment={recruitmentData}
            />
          ) : (
            <ModalIntroductionClub
              {...clubData}
              recruitment={recruitmentData}
            />
          )}
          <ModalBody>
            <Title>{recruitmentData.title}</Title>
            <ImgCarousel selectedRecruitment={recruitmentData} />
            <Description>
              <SubTitle>모집 설명글</SubTitle>
              <Content>{recruitmentData.description}</Content>
            </Description>
            <Description>
              <SubTitle>활동 내용</SubTitle>
              <Content>{recruitmentData.content}</Content>
            </Description>
            <Description2>
              <SubTitle>활동 기간</SubTitle>
              <ActivePeriod>{formattedActivePeriod}</ActivePeriod>
            </Description2>
            <Description2>
              <SubTitle>활동 장소</SubTitle>
              <Basic>{recruitmentData.activePlace}</Basic>
            </Description2>
            <Description2>
              <SubTitle>모집 기간</SubTitle>
              <PeriodWrapper>
                <Period>{formattedStartDate}</Period>
                <PeriodContent>부터</PeriodContent>
                <Period>{formattedEndDate}</Period>
                <PeriodContent>까지</PeriodContent>
              </PeriodWrapper>
            </Description2>
            {clubData && clubData.recruit ? (
              <SupportButton onClick={handleSupportClick}>
                지원하기
              </SupportButton>
            ) : (
              <SupportButton
                style={{
                  background: 'rgba(115, 115, 115, 0.10)',
                  color: '#979797',
                  cursor: 'not-allowed'
                }}>
                모집종료
              </SupportButton>
            )}
          </ModalBody>
        </ModalContent>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default RecruitmentModal;
const formatActivePeriod = (activePeriod) => {
  if (activePeriod === 'YEAR') {
    return '1년 활동';
  } else if (activePeriod === 'SEMESTER') {
    return '학기 활동';
  } else if (activePeriod === 'OVER_YEAR') {
    return '1년 이상 활동';
  } else {
    return activePeriod; // Handle other cases
  }
};
