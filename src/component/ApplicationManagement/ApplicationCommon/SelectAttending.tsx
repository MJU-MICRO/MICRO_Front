import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { customStyles } from '../../Organization/apply/ApplyCommonStyle';

interface SelectMemberCountProps {
  onChange: (count: boolean) => void;
  isAttending?: boolean;
}

function SelectAttending({ onChange, isAttending }: SelectMemberCountProps) {
  const [selectedCount, setSelectedCount] = useState<boolean | null>(
    isAttending !== undefined ? isAttending : null
  );

  const handleCountChange = (selectedOption: any) => {
    const selectedValue = selectedOption.value; // Convert to string
    const attendingStatus = selectedValue === '재학중'; // Convert to boolean
    setSelectedCount(attendingStatus);
    onChange(attendingStatus);
  };

  const countOptions = [
    { value: '재학중', label: '재학중' },
    { value: '휴학중', label: '휴학중' }
  ];

  return (
    <StyledSelect
      options={countOptions}
      value={
        selectedCount !== null
          ? {
              value: selectedCount ? '재학중' : '휴학중',
              label: selectedCount ? '재학중' : '휴학중'
            }
          : null
      }
      onChange={handleCountChange}
      placeholder={'재학 여부'}
      styles={customStyles}
    />
  );
}

export default SelectAttending;

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
