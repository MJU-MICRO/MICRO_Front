import React from 'react';
import Select, { ActionMeta } from 'react-select';
import styled from 'styled-components';
import { MultiCustomStyles } from '../../../Organization/apply/ApplyCommonStyle';

interface SelectDivisionProps {
  selectedDivision: string;
  onChange: (divisions: string) => void;
}

const SelectDivision = ({
  selectedDivision,
  onChange
}: SelectDivisionProps) => {
  const options = [
    { value: '학생 단체', label: '학생 단체' },
    { value: '동아리/학회', label: '동아리/학회' },

    { value: '소모임', label: '소모임' }
  ];

  const handleSelectChange = (
    selectedOptions: any,
    actionMeta: ActionMeta<any>
  ) => {
    if (selectedOptions.length !== '') {
      onChange(selectedOptions);
    } else {
      onChange('');
    }
  };

  return (
    <>
      <CustomSelect
        value={options.find((option) => option.value === selectedDivision)}
        onChange={handleSelectChange}
        options={options}
        placeholder='관련 구분을 선택해주세요'
        styles={MultiCustomStyles}
      />
    </>
  );
};

export default SelectDivision;

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
