import React from 'react';
import styled from 'styled-components';

interface MenuListProps {
  items: string[];
}

const DivisionMenu = styled.div``;
const MenuItem = styled.div``;

const MenuList: React.FC<MenuListProps> = ({ items }) => {
  return (
    <DivisionMenu>
      {items.map((item, index) => (
        <MenuItem key={index}>{item}</MenuItem>
      ))}
    </DivisionMenu>
  );
};

export default MenuList;
