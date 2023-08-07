import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { customStyles } from './createCommonStyle';

interface SelectMemberCountProps {
  onChange: (count: number | null) => void;
}

function SelectMemberCount({ onChange }: SelectMemberCountProps) {
  const [selectedCount, setSelectedCount] = useState<number | null>(null);

  const handleCountChange = (selectedOption: any) => {
    setSelectedCount(selectedOption.value);
    onChange(selectedOption.value);
  };

  const countOptions = Array.from({ length: 100 }, (_, index) => ({
    value: index + 1,
    label: `${index + 1}`
  }));

  return (
    <StyledSelect
      options={countOptions}
      value={
        selectedCount
          ? { value: selectedCount, label: `${selectedCount}명` }
          : null
      }
      onChange={handleCountChange}
      placeholder='회원 수를 선택하세요'
      styles={customStyles}
    />
  );
}

export default SelectMemberCount;

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
