import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { customStyles } from './ApplyCommonStyle';

interface SelectCountProps {
  onChange: (count: number) => void;
}

function SelectCount({ onChange }: SelectCountProps) {
  const [selectedCount, setSelectedCount] = useState<number | null>(null);

  const handleCountChange = (selectedOption: any) => {
    const selectedValue = selectedOption.value.toString(); // Convert to string
    setSelectedCount(selectedValue);
    onChange(selectedValue);
  };
  const countOptions = [
    { value: 100, label: 100 },
    { value: 200, label: 200 },
    { value: 300, label: 300 },
    { value: 400, label: 400 },
    { value: 500, label: 500 },
    { value: 600, label: 600 },
    { value: 700, label: 700 },
    { value: 800, label: 800 },
    { value: 900, label: 900 },
    { value: 1000, label: 1000 }
  ];
  return (
    <StyledSelect
      options={countOptions}
      value={
        selectedCount
          ? { value: selectedCount, label: `${selectedCount}` }
          : null
      }
      onChange={handleCountChange}
      placeholder='글자수 제한'
      styles={customStyles}
    />
  );
}

export default SelectCount;

const StyledSelect = styled(Select)`
  width: 120px;
  height: 36px;
  padding: 0px;
  flex-shrink: 0;
  appearance: none;
  border: none;
  font-family: 'GmarketSansMedium';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 30px;
  margin-bottom: 18px;
  margin-top: 10px;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
