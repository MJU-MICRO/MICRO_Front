import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface LayoutProps {
  SideMenuChildren: ReactNode;
  ContentChildren: ReactNode;
}

const Layout = ({ SideMenuChildren, ContentChildren }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <SideMenu>{SideMenuChildren}</SideMenu>
      <Line />
      <ContentWrapper>{ContentChildren}</ContentWrapper>
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  margin-top: 5.62rem;
  display: flex;
  justify-content: center;
`;

const SideMenu = styled.div`
  width: 8.375rem;
  height: 6.3125rem;
`;

const Line = styled.div`
  width: 0.03125rem;
  height: 46.18819rem;
  margin: 0 5.5rem;
  background: rgba(0, 0, 0, 0.3);
`;

const ContentWrapper = styled.div`
  width: 40.625rem;
  padding-bottom: 3rem;
`;
