import React, { useState, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Search from './Search';
import bellIcon from '../assets/bell.svg';
import TagWrapper from './TagWrapper';
import Modal from './Login/Modal';

const Header = () => {
  const handleSearchInputChange = () => {
    console.log('hi');
  };

  // Login Modal
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <>
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
                onClick={onClickToggleModal}
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
      <Main>
        {isOpenModal && (
          <Modal onClickToggleModal={onClickToggleModal}>
            <ModalTitle>놀명뭐하니 로그인</ModalTitle>
            <ModalContents>
              <ModalDescription>
                놀명뭐하니는 명지대학교 동아리, 학생 단체, 소모임을 위한
                공간이에요.
              </ModalDescription>
              <ModalInputContainer>
                <ModalSpan>아이디</ModalSpan>
                <ModalInputId
                  name='id'
                  type='text'
                  placeholder='학교 이메일 아이디 입력'
                />
                <ModalEmail>@mju.ac.kr</ModalEmail>
              </ModalInputContainer>
              <ModalInputContainerBottom>
                <ModalSpan>비밀번호</ModalSpan>
                <ModalInputPassword
                  name='password'
                  type='password'
                  placeholder='비밀번호 입력'
                />
              </ModalInputContainerBottom>
            </ModalContents>
            <ToSignUpContainer>
              <ModalBottomSpan>아직 회원이 아니신가요?</ModalBottomSpan>
              <ModalInnerContainer>
                <ModalToSignUpSpan>가입하기</ModalToSignUpSpan>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='17'
                  viewBox='0 0 16 17'
                  fill='none'>
                  <path
                    d='M12.5817 8.72514C12.582 8.88234 12.5287 9.03468 12.4312 9.15573L9.15912 13.1925C9.04804 13.3299 8.88842 13.4163 8.71538 13.4327C8.54234 13.4491 8.37005 13.3942 8.23641 13.28C8.10276 13.1658 8.01872 13.0017 8.00277 12.8238C7.98681 12.6458 8.04025 12.4687 8.15133 12.3313L11.0831 8.72514L8.25604 5.11895C8.20168 5.05013 8.16109 4.97095 8.13659 4.88595C8.11209 4.80095 8.10418 4.71181 8.1133 4.62365C8.12242 4.5355 8.1484 4.45006 8.18974 4.37226C8.23108 4.29446 8.28697 4.22583 8.3542 4.17031C8.42149 4.1087 8.50042 4.06203 8.58607 4.03324C8.67171 4.00445 8.76222 3.99415 8.85191 4.003C8.94161 4.01184 9.02856 4.03963 9.10732 4.08463C9.18609 4.12963 9.25496 4.19086 9.30963 4.2645L12.4704 8.30127C12.5526 8.4258 12.5917 8.57503 12.5817 8.72514Z'
                    fill='#32A9EB'
                  />
                </svg>
              </ModalInnerContainer>
            </ToSignUpContainer>
            <CloseButton
              onClick={() => {
                setOpenModal(!isOpenModal);
              }}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'>
                <path
                  d='M16.7629 15.0002L22.1379 9.63773C22.3733 9.40235 22.5055 9.08311 22.5055 8.75023C22.5055 8.41735 22.3733 8.09811 22.1379 7.86273C21.9025 7.62735 21.5833 7.49512 21.2504 7.49512C20.9175 7.49512 20.5983 7.62735 20.3629 7.86273L15.0004 13.2377L9.63791 7.86273C9.40253 7.62735 9.08329 7.49512 8.75041 7.49512C8.41754 7.49512 8.09829 7.62735 7.86291 7.86273C7.62753 8.09811 7.4953 8.41735 7.4953 8.75023C7.4953 9.08311 7.62753 9.40235 7.86291 9.63773L13.2379 15.0002L7.86291 20.3627C7.74575 20.4789 7.65276 20.6172 7.5893 20.7695C7.52584 20.9218 7.49316 21.0852 7.49316 21.2502C7.49316 21.4152 7.52584 21.5786 7.5893 21.731C7.65276 21.8833 7.74575 22.0215 7.86291 22.1377C7.97912 22.2549 8.11737 22.3479 8.26969 22.4113C8.42202 22.4748 8.5854 22.5075 8.75041 22.5075C8.91543 22.5075 9.07881 22.4748 9.23113 22.4113C9.38346 22.3479 9.52171 22.2549 9.63791 22.1377L15.0004 16.7627L20.3629 22.1377C20.4791 22.2549 20.6174 22.3479 20.7697 22.4113C20.922 22.4748 21.0854 22.5075 21.2504 22.5075C21.4154 22.5075 21.5788 22.4748 21.7311 22.4113C21.8835 22.3479 22.0217 22.2549 22.1379 22.1377C22.2551 22.0215 22.3481 21.8833 22.4115 21.731C22.475 21.5786 22.5077 21.4152 22.5077 21.2502C22.5077 21.0852 22.475 20.9218 22.4115 20.7695C22.3481 20.6172 22.2551 20.4789 22.1379 20.3627L16.7629 15.0002Z'
                  fill='black'
                  fill-opacity='0.6'
                />
              </svg>
            </CloseButton>
          </Modal>
        )}
      </Main>
    </>
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

// 로그인
const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalTitle = styled.span`
  text-align: center;
  font-family: GmarketSansMedium;
  font-size: 1.5rem;
  font-style: normal;
  line-height: normal;
`;

const ModalContents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ModalDescription = styled.p`
  font-family: GmarketSansLight;
  font-size: 1rem;
  font-style: normal;
  line-height: normal;
  margin-top: 1.5rem;
`;

const ModalInputContainer = styled.div`
  width: 28.875rem;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1.5rem;
`;

const ModalInputContainerBottom = styled(ModalInputContainer)`
  padding-bottom: 2rem;
  border-bottom: 1px solid #dddddd;
`;

const ModalSpan = styled.span`
  text-align: center;
  font-family: GmarketSansMedium;
  font-size: 0.9375rem;
  font-style: normal;
  line-height: normal;
`;

const ModalEmail = styled(ModalSpan)`
  font-family: GmarketSansLight;
  margin-left: 1rem;
`;

const ModalInputId = styled.input`
  width: 11.5rem;
  height: 2.1rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  border: 0.5px solid rgba(0, 0, 0, 0.6);
  font-family: GmarketSansLight;
  font-size: 0.875rem;
  font-style: normal;
  line-height: normal;
  padding-left: 0.5rem;
  margin-left: 1.8rem;
`;

const ModalInputPassword = styled(ModalInputId)`
  width: 16.5rem;
  margin-left: 1rem;
`;

const ToSignUpContainer = styled.div`
  width: 13rem;
  height: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

const ModalBottomSpan = styled.span`
  font-family: GmarketSansMedium;
  font-size: 0.75rem;
  font-style: normal;
  line-height: normal;
`;

const ModalToSignUpSpan = styled(ModalBottomSpan)`
  color: #32a9eb;

  &:hover {
    color: #0080ff;
  }

  &:active {
    color: black;
  }
`;

const ModalInnerContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CloseButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #dddddd;
  border: none;
  border-radius: 50%;
  padding: 0;
  font-size: 18px;
  position: absolute;
  top: 5px;
  right: 5px;

  cursor: pointer;

  &:hover {
    background-color: gray;
    cursor: pointer;
  }

  &:active {
    background-color: #dddddd;
    cursor: pointer;
  }
`;
