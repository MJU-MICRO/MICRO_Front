import Layout from 'component/Setting/Layout';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SettingNotice from '../../../component/Setting/User/SettingNotice';
import SettingProfile from '../../../component/Setting/User/SettingProfile';

const Setting = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('profile');

  const handleMenuItemClick = (menuItem: string) => {
    setActiveMenuItem(menuItem);
  };

  const sideMenuBox = (
    <>
      <SideMenu
        className={activeMenuItem === 'profile' ? 'profile' : ''}
        onClick={() => handleMenuItemClick('profile')}>
        프로필 설정
      </SideMenu>
      <SideMenu
        className={activeMenuItem === 'notification' ? 'notification' : ''}
        onClick={() => handleMenuItemClick('notification')}>
        알림
      </SideMenu>
    </>
  );

  const contentBox = (
    <>
      {activeMenuItem === 'profile' && (
        <>
          <SettingProfile />
        </>
      )}
      {activeMenuItem === 'notification' && (
        <>
          <SettingNotice />
        </>
      )}
    </>
  );
  return (
    <>
      <Layout SideMenuChildren={sideMenuBox} ContentChildren={contentBox} />
    </>
  );
};

export default Setting;

const SideMenu = styled.div`
  color: rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: all 0.3s ease-in-out;
  padding: 0.3rem 0;
  padding-right: 0.5rem;
  text-align: right;
  margin-bottom: 0.8rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
    border-radius: 0.1rem;
  }

  &.profile,
  &.notification {
    color: rgba(0, 143, 213, 0.8);
    border-left: 0.2rem solid #008fd5;
  }
`;
