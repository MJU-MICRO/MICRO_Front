import React from 'react';
import Select, { ActionMeta } from 'react-select';
import styled from 'styled-components';
import { MultiCustomStyles } from '../../../Organization/apply/ApplyCommonStyle';

interface SelectDivisionDetailProps {
  selectedDivisionDetail: string[];
  onChange: (divisions: string[]) => void;
}

const SelectDivisionDetail = ({
  selectedDivisionDetail,
  onChange
}: SelectDivisionDetailProps) => {
  const options = [
    { value: '총학생회', label: '총학생회' },
    { value: '총동아리연합회', label: '총동아리연합회' },
    { value: '단과대 학생회', label: '단과대 학생회' },
    { value: '학과 학생회', label: '학과 학생회' },
    { value: '학과 학생회', label: '학과 학생회' },
    { value: '학회', label: '학회' },
    { value: '중앙동아리', label: '중앙동아리' },
    { value: '준동아리', label: '준동아리' }
  ];

  const handleSelectChange = (
    selectedOptions: any,
    actionMeta: ActionMeta<any>
  ) => {
    if (selectedOptions.length > 0) {
      const selectedValue = selectedOptions[0].value;
      onChange([selectedValue]);
    } else {
      onChange([]);
    }
  };

  return (
    <>
      <CustomSelect
        value={options.find(
          (option) => option.value === selectedDivisionDetail[0]
        )}
        onChange={handleSelectChange}
        options={options}
        placeholder='상세 구분을 선택해주세요.'
        styles={MultiCustomStyles}
      />
    </>
  );
};

export default SelectDivisionDetail;

const CustomSelect = styled(Select)`
  width: 100%;
  height: 36px;
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
