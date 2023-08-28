import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { customStyles } from '../../component/Organization/apply/ApplyCommonStyle';

interface SelectMemberCountProps {
  onChange: (count: string) => void;
}

function SelectMemberCount({ onChange }: SelectMemberCountProps) {
  const [selectedCount, setSelectedCount] = useState<string | null>('');

  const handleCountChange = (selectedOption: any) => {
    const selectedValue = selectedOption.value; // Convert to string
    setSelectedCount(selectedValue);
    onChange(selectedValue);
  };

  const countOptions = [
    { value: '1', label: '1학년' },
    { value: '2', label: '2학년' },
    { value: '3', label: '3학년' },
    { value: '4', label: '4학년' }
  ];

  return (
    <StyledSelect
      options={countOptions}
      value={
        selectedCount
          ? { value: selectedCount, label: `${selectedCount}학년` }
          : null
      }
      onChange={handleCountChange}
      placeholder='학년 선택'
      styles={customStyles}
    />
  );
}

export default SelectMemberCount;

const StyledSelect = styled(Select)`
  width: 248px;
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
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
