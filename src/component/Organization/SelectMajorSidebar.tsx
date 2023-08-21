import React from 'react';
import Select, { ActionMeta, components } from 'react-select';
import styled from 'styled-components';
import searchIcon from '../../assets/search.svg';
interface RelatedTagsSelectProps {
  selectedMajors: string[];
  onChange: (tags: string[]) => void;
}
const SelectMajorSidebar: React.FC<RelatedTagsSelectProps> = ({
  selectedMajors,
  onChange
}) => {
  const options = [
    { value: '국어국문학과', label: '국어국문학과' },
    { value: '중어중문학과', label: '중어중문학과' },
    { value: '일어일문학과', label: '일어일문학과' },
    { value: '영어영문학과', label: '영어영문학과' },
    { value: '사학과', label: '사학과' },
    { value: '문헌정보학과', label: '문헌정보학과' },
    { value: '아랍지역학과', label: '아랍지역학과' },
    { value: '미술사학과', label: '미술사학과' },
    { value: '철학과', label: '철학과' },
    { value: '문예창작학과', label: '문예창작학과' },
    { value: '글로벌한국어학과', label: '글로벌한국어학과' },
    { value: '글로벌아시아문화학과', label: '글로벌아시아문화학과' },
    { value: '행정학과', label: '행정학과' },
    { value: '경제학과', label: '경제학과' },
    { value: '정치외교학과', label: '정치외교학과' },
    { value: '디지털미디어학과', label: '디지털미디어학과' },
    { value: '아동학과', label: '아동학과' },
    { value: '청소년지도학과', label: '청소년지도학과' },
    { value: '경영학과', label: '경영학과' },
    { value: '국제통상학과', label: '국제통상학과' },
    { value: '경영정보학과', label: '경영정보학과' },
    { value: '법학과', label: '법학과' },
    { value: '법무정책학과', label: '법무정책학과' },
    { value: '디지털콘텐츠디자인학과', label: '디지털콘텐츠디자인학과' },
    { value: '융합소프트웨어학부', label: '융합소프트웨어학부' },
    { value: '정보통신공학과', label: '정보통신공학과' },
    { value: '창의융합인재학부', label: '창의융합인재학부' },
    { value: '사회복지학과', label: '사회복지학과' },
    { value: '부동산학과', label: '부동산학과' },
    { value: '법무행정학과', label: '법무행정학과' },
    { value: '심리치료학과', label: '심리치료학과' },
    { value: '미래융합경영학과', label: '미래융합경영학과' },
    { value: '멀티디자인학과', label: '멀티디자인학과' },
    { value: '계약학과', label: '계약학과' },
    { value: '수학과', label: '수학과' },
    { value: '물리학과', label: '물리학과' },
    { value: '화학과', label: '화학과' },
    { value: '식품영양학과', label: '식품영양학과' },
    { value: '생명과학정보학과', label: '생명과학정보학과' },
    { value: '전기공학과', label: '전기공학과' },
    { value: '전자공학과', label: '전자공학과' },
    { value: '반도체공학과', label: '반도체공학과' },
    { value: '화학공학과', label: '화학공학과' },
    { value: '신소재공학과', label: '신소재공학과' },
    { value: '환경에너지공학과', label: '환경에너지공학과' },
    { value: '컴퓨터공학과', label: '컴퓨터공학과' },
    { value: '토목환경공학과', label: '토목환경공학과' },
    { value: '교통공학과', label: '교통공학과' },
    { value: '기계공학과', label: '기계공학과' },
    { value: '산업경영공학과', label: '산업경영공학과' },
    { value: '디자인학부', label: '디자인학부' },
    { value: '스포츠학부', label: '스포츠학부' },
    { value: '바둑학과', label: '바둑학과' },
    { value: '예술학부', label: '예술학부' },
    { value: '건축학부', label: '건축학부' },
    { value: '글로벌비즈니스전공', label: '글로벌비즈니스전공' }
  ];

  const handleSelectChange = (
    selectedOptions: any,
    actionMeta: ActionMeta<any>
  ) => {
    const selectedValues = selectedOptions.map((option: any) => option.value);
    onChange(selectedValues);
  };

  return (
    <Wrapper>
      <CustomSelect
        isMulti
        value={selectedMajors.map((major) => ({ value: major, label: major }))}
        onChange={handleSelectChange}
        options={options}
        placeholder='학과 검색하기'
        styles={MultiCustomStyles}
        menuPortalTarget={document.body}
        menuPosition='fixed'
      />
      <img src={searchIcon} className='search-icon' alt='Search' />
    </Wrapper>
  );
};

export default SelectMajorSidebar;

const MultiCustomStyles = {
  control: (provided, state) => ({
    ...provided,
    boxShadow: 'none',
    border: 'none',
    background: 'none',
    cursor: 'pointer'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  singleValue: (provided) => ({
    ...provided,
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }),
  multiValue: (base: any, state: any) => ({
    ...base,
    borderRadius: '10px',
    border: '0.8px solid #858585',
    background: 'rgba(255, 255, 255, 1)',
    display: 'none'
  }),
  multiValueLabel: (base: any, state: any) => ({
    ...base,
    color: 'rgba(0, 0, 0, 0.50)', // 선택된 태그 텍스트 색상 변경
    fontFamily: 'GmarketSansMedium'
  }),
  dropdownIndicator: () => ({
    display: 'none'
  }),
  clearIndicator: () => ({
    display: 'none'
  }),
  menu: (base: any) => ({
    ...base,
    zIndex: 9999, // z-index를 조정하여 겹치지 않도록 설정
    backgroundColor: '#fff', // 옵션 창 배경색
    borderRadius: '10px', // 옵션 창 테두리 둥글게 설정
    boxShadow: '0px 4px 30px 3px rgba(42, 114, 255, 0.25)', // 그림자 효과
    minWidth: '190px', // 최소 너비
    maxWidth: '190px',
    marginTop: '0px' // 사이드바와의 간격 설정
  })
};

const CustomSelect = styled(Select)`
  width: 196px;
  height: 16px;
  padding-left: 0.7rem;
  font-size: 15px;
  font-family: 'GmarketSansMedium';
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  color: rgba(0, 0, 0, 0.5);
  background-color: transparent;
  border: none;
  outline: none;
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
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
    margin-right: 10px;
  }
`;
