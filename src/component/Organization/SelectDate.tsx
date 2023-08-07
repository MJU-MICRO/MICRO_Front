import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { ko } from 'date-fns/esm/locale';
import { customStyles } from './createCommonStyle';

interface SelectDateProps {
  onChange: (date: Date | null) => void;
}

function SelectDate({ onChange }: SelectDateProps) {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const handleYearChange = (selectedOption: any) => {
    setSelectedYear(selectedOption.value);
    const selectedDate = selectedOption.value
      ? new Date(selectedOption.value, 0, 1)
      : null;
    onChange(selectedDate);
  };

  const yearOptions = Array.from({ length: 100 }, (_, index) => ({
    value: new Date().getFullYear() - index,
    label: `${new Date().getFullYear() - index}`
  }));

  return (
    <StyledSelect
      options={yearOptions}
      value={
        selectedYear
          ? { value: selectedYear, label: `${selectedYear}년` }
          : null
      }
      onChange={handleYearChange}
      placeholder='설립 연도를 선택하세요'
      styles={customStyles}
    />
  );
}

export default SelectDate;

const StyledSelect = styled(Select)`
  width: 575px;
  height: 36px;
  padding: 0px;
  flex-shrink: 0;
  appearance: none;
  border: none;
  font-family: 'GmarketSansMedium';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 36px;
  margin-bottom: 20px;
  margin-top: 10px;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

// Optional: If you want to keep the calendar icon
const CalendarIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
  cursor: pointer;
`;
