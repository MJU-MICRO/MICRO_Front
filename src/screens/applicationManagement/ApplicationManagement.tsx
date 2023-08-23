import Layout from 'component/ApplicationManagement/Layout';
import React, { useState } from 'react';
import styled from 'styled-components';
import CsenttImg from '../../assets/Csent.svg';
import received from '../../assets/received.svg';
import temporary from '../../assets/temporary.svg';
import CreceivedImg from '../../assets/Creceived.svg';
import CtemporaryImg from '../../assets/Ctemporary.svg';
import sent from '../../assets/sent.svg';
import ReceivedApplication from 'component/ApplicationManagement/ReceivedApplication';
import SentApplication from 'component/ApplicationManagement/SentApplication';
import TemporaryApplication from 'component/ApplicationManagement/TemporaryApplication';

const ApplicationManagement = () => {
  const [selectedMenu, setSelectedMenu] = useState('sent');

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const ContentChildren = (
    <div>
      {selectedMenu === 'sent' && <SentApplication />}
      {selectedMenu === 'received' && <ReceivedApplication />}
      {selectedMenu === 'temporary' && <TemporaryApplication />}
    </div>
  );

  const SideMenuChildren = (
    <MenuContainer>
      <MenuHeader>지원서</MenuHeader>
      <Menu
        onClick={() => handleMenuClick('sent')}
        className={selectedMenu === 'sent' ? 'sent' : ''}>
        <MenuImg
          src={selectedMenu === 'sent' ? CsenttImg : sent}
          alt='sentApplication'
        />
        <MenuName>보낸 지원서</MenuName>
      </Menu>
      <Menu
        onClick={() => handleMenuClick('received')}
        className={selectedMenu === 'received' ? 'received' : ''}>
        <MenuImg
          src={selectedMenu === 'received' ? CreceivedImg : received}
          alt='receivedApplication'
        />
        <MenuName>받은 지원서</MenuName>
      </Menu>
      <Menu
        onClick={() => handleMenuClick('temporary')}
        className={selectedMenu === 'temporary' ? 'temporary' : ''}>
        <MenuImg
          src={selectedMenu === 'temporary' ? CtemporaryImg : temporary}
          alt='temporaryApplication'
        />
        <MenuName>작성 중인 지원서</MenuName>
      </Menu>
    </MenuContainer>
  );

  return (
    <Container>
      <Layout
        ContentChildren={ContentChildren}
        SideMenuChildren={SideMenuChildren}
      />
    </Container>
  );
};

export default ApplicationManagement;
const Container = styled.div``;
const MenuContainer = styled.div``;
const Menu = styled.div`
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  padding-left: 0.5rem;
  width: 100%;
  height: 2.0625rem;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.03);
    transition: all 0.3s ease-in-out;
  }
  display: flex;
  align-items: center;

  &.sent,
  &.received,
  &.temporary {
    color: #008fd5;
  }
`;
const MenuImg = styled.img`
  margin-right: 1rem;
`;
const MenuName = styled.div`
  color: (0, 0, 0, 0.3);
  font-family: Gmarket Sans TTF;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const MenuHeader = styled.div`
  color: rgba(0, 0, 0, 0.7);
  font-family: Gmarket Sans TTF;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 1rem;
`;
