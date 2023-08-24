import React from 'react';
import styled from 'styled-components';

interface DivisionItemProps {
  division: string;
  isSelected: boolean;
  onClick: () => void;
}

const DivisionInput = styled.input`
  padding-left: 1rem;
  padding-right: 1rem;
  height: 1.875rem;
  border-radius: 0.625rem;
  border: 0.8px solid #dbdbdf;
  background: #fff;
  font-family: GmarketSansMedium;
`;

const DivisionItem: React.FC<DivisionItemProps> = ({
  division,
  isSelected,
  onClick
}) => {
  return (
    <DivisionInput
      placeholder={isSelected ? division : '기본값'}
      value={division}
      onClick={onClick}
    />
  );
};

export default DivisionItem;
