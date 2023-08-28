import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { customStyles } from '../../component/Organization/apply/ApplyCommonStyle';

interface SelectFieldProps {
  fields: string[]; // 받아온 필드 배열
  onChange: (selectedField: string) => void; // 변경된 부분
}

function SelectField({ fields, onChange }: SelectFieldProps) {
  const [selectedField, setSelectedField] = useState<string | null>(null);

  const handleFieldChange = (selectedOption: any) => {
    const selectedValue = selectedOption.value;
    setSelectedField(selectedValue);
    onChange(selectedValue);
    console.log(selectedField);
  };

  // 옵션을 필드 배열에서 생성
  const fieldOptions = fields.map((field) => ({
    value: field,
    label: field
  }));

  return (
    <StyledSelect
      options={fieldOptions}
      value={
        selectedField ? { value: selectedField, label: selectedField } : null
      }
      onChange={handleFieldChange}
      placeholder='지원 분야'
      styles={customStyles}
    />
  );
}

export default SelectField;

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
