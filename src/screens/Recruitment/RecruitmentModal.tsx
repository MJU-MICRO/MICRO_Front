import React from 'react';
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
import { Link } from 'react-router-dom';

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
  selectedClubId,
  recruitmentData,
  clubData
}) => {
  if (!isOpen) {
    return null;
  }
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  const selectedRecruitment = recruitmentData.find(
    (item) => item.id === selectedRecruitmentId
  );
  const selectedClub = clubData.find((club) => club.id === selectedClubId);

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalWrapper>
        <ModalContent>
          {selectedClub.largeCategory === '학생단체' ? (
            <ModalIntroductionStudent
              {...selectedClub}
              recruitment={selectedRecruitment}
            />
          ) : (
            <ModalIntroductionClub
              {...selectedClub}
              recruitment={selectedRecruitment}
            />
          )}
          <ModalBody>
            <Title>{selectedRecruitment.title}</Title>
            <ImgCarousel selectedRecruitmentId={selectedRecruitment.id} />
            <Description>
              <SubTitle>모집 설명글</SubTitle>
              <Content>{selectedRecruitment.description}</Content>
            </Description>
            <Description>
              <SubTitle>활동 내용</SubTitle>
              <Content>{selectedRecruitment.content}</Content>
            </Description>
            <Description2>
              <SubTitle>활동 기간</SubTitle>
              <ActivePeriod>{selectedRecruitment.activePeriod}</ActivePeriod>
            </Description2>
            <Description2>
              <SubTitle>활동 장소</SubTitle>
              <Basic>{selectedRecruitment.activePlace}</Basic>
            </Description2>
            <Description2>
              <SubTitle>모집 기간</SubTitle>
              <PeriodWrapper>
                <Period>{selectedRecruitment.recruitmentStartDate}</Period>
                <PeriodContent>부터</PeriodContent>
                <Period>{selectedRecruitment.recruitmentDeadline}</Period>
                <PeriodContent>까지</PeriodContent>
              </PeriodWrapper>
            </Description2>
            {selectedClub.isRecruit ? (
              <Link to={'/application'}>
                <SupportButton>지원하기</SupportButton>
              </Link>
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
