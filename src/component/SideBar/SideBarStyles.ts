import styled from 'styled-components';

interface CampusOptionProps {
  active?: boolean;
}

export const SidebarContainer = styled.div`
  width: 256px;
  height: 705px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
`;

export const SidebarBackground = styled.div`
  width: 240px;
  height: 705px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #ffffff;
  border-radius: 10px;
`;

export const SidebarOptionText = styled.div`
  width: 158px;
  color: rgba(0, 0, 0, 0.8);
  leading-trim: both;
  text-edge: cap;
  font-family: Gmarket Sans TTF;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const FilterOption = styled.div`
  left: 18px;
  top: 63px;
  color: #000000;
  opacity: 0.5;
  font-size: 15px;
  font-weight: medium;
  line-height: 1;
`;

export const OptionItem = styled.div<CampusOptionProps>`
  top: ${(props) => (props.active ? '538px' : '0')};
  color: rgba(0, 0, 0, 0.5);
  font-family: Gmarket Sans TTF;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 15.4px; /* 102.667% */
`;

export const OptionSeparator = styled.div`
  width: 236px;
  height: 6px;
  position: absolute;
  left: 10px;
  top: 137px;
  background-color: #e5e7eb;
  opacity: 0.6;
  border-radius: 5px;
`;

export const CampusOption = styled.div<CampusOptionProps>`
  width: 77px;
  height: 8px;
  position: absolute;
  left: 18px;
  top: 642px;
  background-color: ${(props) => (props.active ? '#1D4ED8' : '#ffffff')};
  opacity: 0.5;
  border-radius: 10px;
  border: 1px solid #9ca3af;
  cursor: pointer;
`;

export const CampusOptionText = styled.div`
  width: 67px;
  position: absolute;
  left: 23px;
  top: 650px;
  color: #1d4ed8;
  font-size: 15px;
  font-weight: medium;
  line-height: 1;
  cursor: pointer;
`;

export const MajorSearchOption = styled.div`
  width: 233px;
  height: 100px;
  position: relative;
  background-color: #ffffff;
  opacity: 0;
`;

export const MajorSearchBar = styled.input`
  width: 158px;
  position: absolute;
  left: 22px;
  top: 15px;
  background-color: #f9fafb;
  border: none;
  font-size: 15px;
  font-weight: medium;
  line-height: 1;
  outline: none;

  &::placeholder {
    color: #000000;
    opacity: 0.5;
  }
`;
