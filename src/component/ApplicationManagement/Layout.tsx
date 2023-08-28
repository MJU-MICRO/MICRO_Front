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
  margin-right: 5.5rem;
  width: 18.75rem;
  height: 11.4375rem;
  padding-top: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.9375rem;
  background: #fff;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.05);
`;

const ContentWrapper = styled.div`
  width: 44.625rem;
  padding-bottom: 3rem;
`;
