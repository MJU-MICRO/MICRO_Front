import React, { useState } from 'react';
import {
  SidebarContainer,
  SidebarBackground,
  SidebarOptionText,
  FilterOption,
  OptionItem,
  OptionSeparator,
  CampusOption,
  CampusOptionText,
  MajorSearchOption,
  MajorSearchBar
} from './SideBarStyles';

interface SidebarProps {
  selectedInterest: string | null;
  selectedRelationMajor: string | null;
  selectedClassification: string | null;
  selectedCampus: string | null;
  setSelectedInterest: (value: string | null) => void;
  setSelectedRelationMajor: (value: string | null) => void;
  setSelectedClassification: (value: string | null) => void;
  setSelectedCampus: (value: string | null) => void;
}

const Sidebar = ({
  selectedInterest,
  selectedRelationMajor,
  selectedClassification,
  selectedCampus,
  setSelectedInterest,
  setSelectedRelationMajor,
  setSelectedClassification,
  setSelectedCampus
}: SidebarProps) => {
  return (
    <div className='w-64 h-[705px] relative'>
      <SidebarContainer>
        <SidebarBackground>
          <SidebarOptionText>토픽</SidebarOptionText>
          <OptionItem
            onClick={() => setSelectedInterest(null)}
            active={selectedInterest === null}>
            전체
          </OptionItem>
          <OptionItem
            onClick={() => setSelectedInterest('언론/미디어')}
            active={selectedInterest === '언론/미디어'}>
            언론/미디어
          </OptionItem>
          <OptionItem
            onClick={() => setSelectedInterest('문화/역사')}
            active={selectedInterest === '문화/역사'}>
            문화/역사
          </OptionItem>
          <OptionItem
            onClick={() => setSelectedInterest('경제/금융')}
            active={selectedInterest === '경제/금융'}>
            경제/금융
          </OptionItem>
          <OptionItem
            onClick={() => setSelectedInterest('디자인/사진/영상')}
            active={selectedInterest === '디자인/사진/영상'}>
            디자인/사진/영상
          </OptionItem>
          <OptionItem
            onClick={() => setSelectedInterest('경영/컨설팅/마케팅')}
            active={selectedInterest === '경영/컨설팅/마케팅'}>
            경영/컨설팅/마케팅
          </OptionItem>
          <OptionItem
            onClick={() => setSelectedInterest('정치/사회/법률')}
            active={selectedInterest === '정치/사회/법률'}>
            정치/사회/법률
          </OptionItem>
          <OptionItem
            onClick={() => setSelectedInterest('체육/헬스')}
            active={selectedInterest === '체육/헬스'}>
            체육/헬스
          </OptionItem>
          <OptionItem
            onClick={() => setSelectedInterest('IT/공학')}
            active={selectedInterest === 'IT/공학'}>
            IT/공학
          </OptionItem>
          <FilterOption>학과</FilterOption>
          <MajorSearchOption>
            <MajorSearchBar type='text' placeholder='학과 검색하기' />
            <div className='w-[233px] h-9 left-0 top-[50px] absolute bg-sky-600 bg-opacity-5 rounded-[10px]' />
          </MajorSearchOption>
          <FilterOption>단체</FilterOption>
          <OptionItem
            onClick={() => setSelectedClassification('동아리')}
            active={selectedClassification === '동아리'}>
            동아리
          </OptionItem>
          <OptionItem
            onClick={() => setSelectedClassification('학회')}
            active={selectedClassification === '학회'}
            style={{ left: '109px' }}>
            학회
          </OptionItem>
          <OptionItem
            onClick={() => setSelectedClassification('학생단체')}
            active={selectedClassification === '학생단체'}
            style={{ top: '538px' }}>
            학생단체
          </OptionItem>
          <OptionItem
            onClick={() => setSelectedClassification('소모임')}
            active={selectedClassification === '소모임'}
            style={{ top: '538px', left: '109px' }}>
            소모임
          </OptionItem>
          <FilterOption>캠퍼스</FilterOption>
          <CampusOption
            active={selectedCampus === '인문캠퍼스'}
            style={{ top: '642px' }}
            onClick={() => setSelectedCampus('인문캠퍼스')}
          />
          <CampusOption
            active={selectedCampus === '자연캠퍼스'}
            style={{ top: '642px', left: '122px' }}
            onClick={() => setSelectedCampus('자연캠퍼스')}
          />
          <CampusOptionText style={{ top: '650px' }}>
            인문캠퍼스
          </CampusOptionText>
          <CampusOptionText style={{ top: '650px', left: '134px' }}>
            자연캠퍼스
          </CampusOptionText>
        </SidebarBackground>
      </SidebarContainer>
    </div>
  );
};

export default Sidebar;
