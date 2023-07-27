import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import searchIcon from '../assets/search.svg';
import toggleIcon_up from '../assets/toggle-up.svg';
import toggleIcon_down from '../assets/toggle-down.svg';
import reset_Icon from '../assets/reset.svg';
import '../App.css';

interface SidebarProps {
  selectedInterest: string | null;
  selectedRelationMajor: string | null;
  selectedClassification: string | null;
  selectedCampus: string | null;
  setSelectedInterest: (interest: string | null) => void;
  setSelectedRelationMajor: (major: string | null) => void;
  setSelectedClassification: (classification: string | null) => void;
  setSelectedCampus: (campus: string | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  selectedInterest,
  selectedRelationMajor,
  selectedClassification,
  selectedCampus,
  setSelectedInterest,
  setSelectedRelationMajor,
  setSelectedClassification,
  setSelectedCampus
}) => {
  const [showInterestOptions, setShowInterestOptions] = useState(false);
  const [showMajorOptions, setShowMajorOptions] = useState(false);
  const [showOrganizationOptions, setShowOrganizationOptions] = useState(false);
  const [showCampusOptions, setShowCampusOptions] = useState(false);
  const resetAllOptions = () => {
    setSelectedInterest(null);
    setSelectedRelationMajor(null);
    setSelectedClassification(null);
    setSelectedCampus(null);
  };

  const isAnyOptionSelected =
    selectedInterest !== null ||
    selectedRelationMajor !== null ||
    selectedClassification !== null ||
    selectedCampus !== null;
  const sidebarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (sidebarRef.current) {
      const sidebarHeight = 70 + calculateExpandedOptionsHeight();
      sidebarRef.current.style.height = `${sidebarHeight}px`;
    }
  }, [
    showInterestOptions,
    showMajorOptions,
    showOrganizationOptions,
    showCampusOptions
  ]);

  const calculateExpandedOptionsHeight = () => {
    let height = 135;
    if (showInterestOptions) height += 300;
    if (showMajorOptions) height += 50;
    if (showOrganizationOptions) height += 110;
    if (showCampusOptions) height += 50;
    return height;
  };

  return (
    <SidebarBackground ref={sidebarRef}>
      <SidebarOptionContainer>
        <InterestOptionText
          onClick={() => setShowInterestOptions((prevState) => !prevState)}>
          <img
            src={showInterestOptions ? toggleIcon_up : toggleIcon_down}
            className='toggle-icon'
            alt='Toggle'
          />
          <div>토픽</div>
        </InterestOptionText>
        {isAnyOptionSelected && (
          <ResetIconWrapper onClick={resetAllOptions}>
            <img src={reset_Icon} className='reset-icon' alt='전체 초기화' />
          </ResetIconWrapper>
        )}
      </SidebarOptionContainer>
      {showInterestOptions && (
        <>
          <InterestOption
            onClick={() => setSelectedInterest(null)}
            active={selectedInterest === null}>
            전체
          </InterestOption>
          <InterestOption
            onClick={() => setSelectedInterest('언론/미디어')}
            active={selectedInterest === '언론/미디어'}>
            언론/미디어
          </InterestOption>
          <InterestOption
            onClick={() => setSelectedInterest('문화/역사')}
            active={selectedInterest === '문화/역사'}>
            문화/역사
          </InterestOption>
          <InterestOption
            onClick={() => setSelectedInterest('교육')}
            active={selectedInterest === '교육'}>
            교육
          </InterestOption>
          <InterestOption
            onClick={() => setSelectedInterest('경제/금융')}
            active={selectedInterest === '경제/금융'}>
            경제/금융
          </InterestOption>
          <InterestOption
            onClick={() => setSelectedInterest('디자인/미디어')}
            active={selectedInterest === '디자인/미디어'}>
            디자인/미디어
          </InterestOption>
          <InterestOption
            onClick={() => setSelectedInterest('경영/컨설팅/마케팅')}
            active={selectedInterest === '경영/컨설팅/마케팅'}>
            경영/컨설팅/마케팅
          </InterestOption>
          <InterestOption
            onClick={() => setSelectedInterest('정치/사회/법률')}
            active={selectedInterest === '정치/사회/법률'}>
            정치/사회/법률
          </InterestOption>
          <InterestOption
            onClick={() => setSelectedInterest('체육/헬스')}
            active={selectedInterest === '체육/헬스'}>
            체육/헬스
          </InterestOption>
          <InterestOption
            onClick={() => setSelectedInterest('IT/공학')}
            active={selectedInterest === 'IT/공학'}>
            IT/공학
          </InterestOption>
        </>
      )}
      <BorderLine></BorderLine>
      <SidebarOptionText
        onClick={() => setShowMajorOptions((prevState) => !prevState)}>
        <img
          src={showMajorOptions ? toggleIcon_up : toggleIcon_down}
          className='toggle-icon'
          alt='Toggle'
        />
        <div>학과</div>
      </SidebarOptionText>
      {showMajorOptions && (
        <>
          <MajorSearch>
            <input type='text' placeholder={'학과 검색하기'} />
            <img src={searchIcon} className='search-icon' alt='Search' />
          </MajorSearch>
        </>
      )}
      <BorderLine></BorderLine>
      <SidebarOptionText
        onClick={() => setShowOrganizationOptions((prevState) => !prevState)}>
        <img
          src={showOrganizationOptions ? toggleIcon_up : toggleIcon_down}
          className='toggle-icon'
          alt='Toggle'
        />
        <div>단체</div>
      </SidebarOptionText>
      {showOrganizationOptions && (
        <>
          <OrganizationOption
            onClick={() => setSelectedClassification('동아리')}
            active={selectedClassification === '동아리'}>
            동아리
          </OrganizationOption>
          <OrganizationOption
            onClick={() => setSelectedClassification('학회')}
            active={selectedClassification === '학회'}>
            학회
          </OrganizationOption>
          <OrganizationOption
            onClick={() => setSelectedClassification('학생단체')}
            active={selectedClassification === '학생단체'}>
            학생단체
          </OrganizationOption>
          <OrganizationOption
            onClick={() => setSelectedClassification('소모임')}
            active={selectedClassification === '소모임'}>
            소모임
          </OrganizationOption>
        </>
      )}
      <BorderLine></BorderLine>
      <SidebarOptionText
        onClick={() => setShowCampusOptions((prevState) => !prevState)}>
        <img
          src={showCampusOptions ? toggleIcon_up : toggleIcon_down}
          className='toggle-icon'
          alt='Toggle'
        />
        <div>캠퍼스</div>
      </SidebarOptionText>
      {showCampusOptions && (
        <>
          <CampusOption
            onClick={() => setSelectedCampus('인문캠퍼스')}
            active={selectedCampus === '인문캠퍼스'}>
            인문캠퍼스
          </CampusOption>
          <CampusOption
            onClick={() => setSelectedCampus('자연캠퍼스')}
            active={selectedCampus === '자연캠퍼스'}>
            자연캠퍼스
          </CampusOption>
        </>
      )}
    </SidebarBackground>
  );
};

export default Sidebar;

interface SidebarOptionProps {
  active: boolean;
}

const SidebarBackground = styled.div`
  border-radius: 10px;
  background: #fff;
  margin-top: 70px;
  margin-left: 60px;
  padding: 20px;
  width: 256px;
  height: 710px;
  flex-shrink: 0;
  box-shadow: 0px 4px 30px 3px rgba(42, 114, 255, 0.25);
  transition: height 0.3s ease;
  overflow: hidden;
}
`;

const SidebarOptionText = styled.div`
  width: 158px;
  border-radius: 0.9375rem;
  color: 'rgba(245, 245, 247, 1)';
  font-size: 17px;
  font-style: normal;
  font-family: 'GmarketSansMedium';
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  margin-top: 16px;
  img {
    width: 12.5px;
    height: 14px;
    background: #fff;
    margin-left: 10px;
    margin-right: 9px;
    margin-bottom: 3px;
  }
`;

const InterestOptionText = styled.div`
  width: 158px;
  border-radius: 0.9375rem;
  color: 'rgba(245, 245, 247, 1)';
  font-size: 17px;
  font-style: normal;
  font-family: 'GmarketSansMedium';
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;
  img {
    width: 12.5px;
    height: 14px;
    background: #fff;
    margin-left: 10px;
    margin-right: 9px;
    margin-bottom: 3px;
  }
`;

const InterestOption = styled.div<SidebarOptionProps>`
  font-size: 17px;
  font-style: normal;
  font-family: 'GmarketSansMedium';
  font-weight: 500;
  line-height: 15.4px;
  color: rgba(0, 0, 0, 0.5);
  padding: 9px;
  margin-left: 7px;
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
  height: 12px;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: rgba(237, 237, 237, 0.6);
    color: rgba(0, 0, 0, 0.95);
  }

  ${(props) =>
    props.active &&
    `
    background-color: rgba(237, 237, 237, 0.60);
    color: rgba(0, 0, 0, 0.95);
    border-radius: 5px;
  `}
`;

const OrganizationOption = styled.div<SidebarOptionProps>`
  margin-left: 18px;
  border-radius: 11px;
  border: 0.8px solid #d8d8d8;
  margin-bottom: 5px;
  padding: 5px;
  margin-left: 9px;
  margin-right: 9px;
  margin-bottom: 9.5px;
  width: 77px;
  font-family: 'GmarketSansMedium';
  font-size: 16px;
  text-align: center;
  height: 26px;
  flex-shrink: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  display: inline-block;
  line-height: 26px;
  background-color: rgba(255, 255, 255, 0.05);
  color: rgba(0, 0, 0, 0.5);
  &:hover {
    background-color: rgba(0, 143, 213, 0.05);
    color: #008fd5;
  }

  ${(props) =>
    props.active &&
    `
    background-color: rgba(0, 143, 213, 0.05);
    color: #008FD5;
    border: none;
  `}
`;

const CampusOption = styled.div<SidebarOptionProps>`
  margin-left: 18px;
  border-radius: 11px;
  display: inline-block;
  border: 0.8px solid #d8d8d8;
  padding: 3px;
  width: 98px;
  height: 30px;
  font-family: 'GmarketSansMedium';
  font-size: 16px;
  justify-content: space-around;
  flex-shrink: 0;
  text-align: center;
  margin-bottom: 5px;
  margin-right: 6px;
  margin-left: 9px;
  cursor: pointer;
  line-height: 30px;
  background-color: rgba(255, 255, 255, 0.05);
  color: rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: rgba(0, 143, 213, 0.05);
    color: #008fd5;
  }

  ${(props) =>
    props.active &&
    `
    background-color: rgba(0, 143, 213, 0.05);
    color: #008FD5;
    border: none;
  `}
`;

const BorderLine = styled.hr`
  stroke-width: 2px;
  width: 250px;
  flex-shrink: 0;
  margin-left: 8px;
  margin-right: 8px;
  color: #dbdbdf;
  border: none;
  border-top: 1px solid #dbdbdf;
`;

const MajorSearch = styled.div`
  width: 250px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(0, 143, 213, 0.05);
  color: rgba(245, 245, 247, 1);
  display: flex;
  margin-left: 8px;
  align-items: center;
  margin-bottom: 20px;

  img {
    fill: rgba(0, 0, 0, 0.5);
    width: 17.778px;
    height: 17.256px;
    margin-left: 108px;
    margin-right: 13px;
  }

  input {
    width: 91px;
    height: 16px;
    padding-left: 0.7rem;
    font-size: 15px;
    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 500;
    line-height: 15.4px;
    color: rgba(0, 0, 0, 0.5);
    background-color: transparent;
    border: none;
    outline: none;
    margin-bottom: -1.75px;
    margin-left: 10px;
    &:focus {
      border: none;
    }
  }
`;

const SidebarOptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const ResetIconWrapper = styled.div`
  cursor: pointer;
  margin: auto 0;
  width: fit-content;
  display: flex;
  align-items: center;

  img {
    width: 65px;
    height: 34px;
    fill: rgba(0, 0, 0, 0.5);
  }
`;
