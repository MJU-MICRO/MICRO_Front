import React from 'react';
import Select, { ActionMeta, components } from 'react-select';
import styled from 'styled-components';
import { MultiCustomStyles } from './ApplyCommonStyle';
interface RelatedTagsSelectProps {
  selectedMajors: string[];
  onChange: (tags: string[]) => void;
}

const CustomSelect = styled(Select)`
  width: 575px;
  height: 36px;
  margin-right: 10px;
  margin-left: 36px;
  margin-top: 10px;
  margin-bottom: 20px;
  border: none;
  font-size: 12.6px;
  .react-select__multi-value {
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 2px 6px;
    margin: 2px;
  }

  .react-select__multi-value__label {
    color: rgba(0, 0, 0, 0.95);
  }
`;
const SelectMajor: React.FC<RelatedTagsSelectProps> = ({
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
    <CustomSelect
      isMulti
      value={options.filter((option) => selectedMajors.includes(option.value))}
      onChange={handleSelectChange}
      options={options}
      placeholder='관련 학과를 선택해주세요'
      styles={MultiCustomStyles}
    />
  );
};

export default SelectMajor;
