import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Search from './Search';
import bellIcon from '../assets/bell.svg';
import TagWrapper from './TagWrapper';

const Header = () => {
  const handleSearchInputChange = () => {
    console.log('hi');
  };

  return (
    <HeaderWrapper>
      <HeaderUl>
        <HeaderLeft>
          <li>
            <NavLink to='/'>로고</NavLink>
          </li>
          <li>
            <Search
              placeholder='놀명뭐하니 검색하기'
              onSearch={handleSearchInputChange}
            />
          </li>
        </HeaderLeft>
        <HeaderLink>
          <li>
            <NavLink to='/recruitmentList'>모집 공고</NavLink>
          </li>
          <li>
            <NavLink to='/organizationList'>단체 리스트</NavLink>
          </li>
        </HeaderLink>
        <HeaderUser>
          <li>
            <img src={bellIcon} className='bell-icon' alt='bell' />
          </li>
          <li>
            <TagWrapper
              width={'5.1875rem'}
              height={'2.4375rem'}
              backgroundColor={'#FFF'}
              onClick={function (): void {
                console.log('히');
              }}
              border={'1px solid #F5F5F7'}
              textColor={'rgba(0, 0, 0, 0.80)'}
              fontSize={'0.9375rem'}
              inputText={'로그인'}
            />
          </li>
          <li>
            <NavLink to='/signUp'>
              <TagWrapper
                width={'5.1875rem'}
                height={'2.4375rem'}
                backgroundColor={'rgba(0, 143, 213, 0.05)'}
                onClick={function (): void {
                  console.log('히');
                }}
                border={'none'}
                textColor={'#008FD5'}
                fontSize={' 0.9375rem'}
                inputText={'회원가입'}
              />
            </NavLink>
          </li>
        </HeaderUser>
      </HeaderUl>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  a:link,
  a:visited,
  a:hover {
    text-decoration: none;
    color: black;
  }
  width: 100%;
  height: 3.8rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(3.5px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  z-index: 1000;
  position: fixed;
  top: 0;
`;

const HeaderUl = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  margin-right: 27.44rem;
  li:first-child {
    margin-right: 3rem;
  }
`;

const HeaderLink = styled.div`
  display: flex;
  align-items: center;
  li:first-child {
    margin-right: 3.24rem;
  }
`;

const HeaderUser = styled.div`
  margin-left: 5.24rem;
  display: flex;
  align-items: center;
  button:first-child {
    margin-right: 1.57rem;
  }
  img {
    margin-right: 1.57rem;
  }
`;
