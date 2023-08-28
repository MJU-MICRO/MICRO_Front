import Layout from 'component/Setting/Layout';
import AuthoritySetting from 'component/Setting/Organization/AuthoritySetting';
import DefaultSetting from 'component/Setting/Organization/DefaultSetting';
import PostSetting from 'component/Setting/Organization/PostSetting';
import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const OrganizationSetting = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('defaultSetting');
  const { groupId } = useParams();
  const location = useLocation();

  const handleMenuItemClick = (menuItem: string) => {
    setActiveMenuItem(menuItem);
  };

  const sideMenuBox = (
    <>
      <SideMenu
        className={activeMenuItem === 'defaultSetting' ? 'defaultSetting' : ''}
        onClick={() => handleMenuItemClick('defaultSetting')}>
        기본 설정
      </SideMenu>
      <SideMenu
        className={activeMenuItem === 'postSetting' ? 'postSetting' : ''}
        onClick={() => handleMenuItemClick('postSetting')}>
        모집 설정
      </SideMenu>
      <SideMenu
        className={
          activeMenuItem === 'authoritySetting' ? 'authoritySetting' : ''
        }
        onClick={() => handleMenuItemClick('authoritySetting')}>
        권한 설정
      </SideMenu>
    </>
  );

  const contentBox = (
    <>
      {activeMenuItem === 'defaultSetting' && (
        <>
          <DefaultSetting groupId={groupId ? parseInt(groupId) : 0} />
        </>
      )}
      {activeMenuItem === 'postSetting' && (
        <>
          <PostSetting groupId={groupId ? parseInt(groupId) : 0} />
        </>
      )}
      {activeMenuItem === 'authoritySetting' && (
        <>
          <AuthoritySetting groupId={groupId ? parseInt(groupId) : 0} />
        </>
      )}
    </>
  );

  return <Layout SideMenuChildren={sideMenuBox} ContentChildren={contentBox} />;
};

export default OrganizationSetting;
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
  &.defaultSetting,
  &.postSetting,
  &.authoritySetting {
    color: rgba(0, 143, 213, 0.8);
    border-left: 0.2rem solid #008fd5;
  }
`;
function useEffect(arg0: () => void, arg1: (string | History | undefined)[]) {
  throw new Error('Function not implemented.');
}
