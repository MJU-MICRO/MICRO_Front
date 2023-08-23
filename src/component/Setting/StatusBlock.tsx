import React from 'react';
import styled from 'styled-components';

interface statueBlockType {
  status: string;
}

const StatusBlock = ({ status }: statueBlockType) => {
  const getStatusText = () => {
    switch (status) {
      case 'recruitTrue':
        return '모집중';
      case 'recruitFalse':
        return '모집 마감';
      case 'temporarySave':
        return '임시 저장';
      default:
        return '';
    }
  };

  const getStatusStyle = () => {
    switch (status) {
      case 'recruitTrue':
        return {
          color: 'rgba(255, 65, 65, 1)',
          backgroundColor: 'rgba(255, 122, 122, 0.10)'
        };
      case 'temporarySave':
        return {
          color: 'rgba(92, 163, 95, 1)',
          backgroundColor: 'rgba(92, 163, 95, 0.1)'
        };
      case 'recruitFalse':
        return {
          color: 'rgba(0, 0, 0, 0.3)',
          backgroundColor: 'rgba(0, 0, 0, 0.05)'
        };
      default:
        return { color: '', backgroundColor: '' };
    }
  };

  const statusText = getStatusText();
  const statusStyle = getStatusStyle();

  return (
    <StatusText style={statusStyle}>
      <StatusTextContent color={statusStyle.color}>
        {statusText}
      </StatusTextContent>
    </StatusText>
  );
};

const StatusText = styled.div`
  font-weight: bold;
  color: ${(props) => props.color || ''};
  font-family: Gmarket Sans TTF;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  border-radius: 0.6rem;

  background-color: ${(props) =>
    props.style?.backgroundColor || 'transparent'}; // 기본값 설정
`;

const StatusTextContent = styled.div`
  padding: 0.4rem;
`;

export default StatusBlock;
