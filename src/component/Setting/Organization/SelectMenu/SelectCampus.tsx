import React from 'react';
import Select, { ActionMeta } from 'react-select';
import styled from 'styled-components';
import { MultiCustomStyles } from '../../../Organization/apply/ApplyCommonStyle';

interface SelectTagsProps {
  selectedTags: string[];
  onChange: (tags: string[]) => void;
}

const SelectTags = ({ selectedTags, onChange }: SelectTagsProps) => {
  const options = [
    { value: '인문캠퍼스', label: '인문캠퍼스' },
    { value: '자연캠퍼스', label: '자연캠퍼스' }
  ];

  const handleSelectChange = (
    selectedOptions: any,
    actionMeta: ActionMeta<any>
  ) => {
    const selectedValues = selectedOptions.map((option: any) => option.value);

    // 최대 3개까지만 선택되도록 로직 추가
    if (selectedValues.length <= 3) {
      onChange(selectedValues);
    }
  };

  return (
    <>
      <CustomSelect
        isMulti
        value={options.filter((option) => selectedTags.includes(option.value))}
        onChange={handleSelectChange}
        options={options}
        placeholder='관련 캠퍼스를 선택해주세요'
        styles={MultiCustomStyles}
      />
    </>
  );
};

export default SelectTags;

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
