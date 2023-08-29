import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Logo from '../../assets/Admin/AdminLogo.png';
import DefaultImg from '../../assets/userDefaultImg.svg';
import GrabageIcon from '../../assets/Admin/garbage.svg';
import { NavLink } from 'react-router-dom';
import {
  getMyData,
  getAdminGroupData,
  approveGroup,
  deleteGroup,
  getUserData,
  registerAdmin,
  deleteUser,
  revokeAdmin,
  getAdminData
} from './AdminApi';
import axios from 'axios';

const AdminOrganization = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [groupData, setGroupData] = useState([]);
  const [myData, setMyData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [adminData, setAdminData] = useState([]);
  const [showApprovedGroups, setShowApprovedGroups] = useState(true);

  const handleTabClick = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  const handleActionWithReload = (actionFunction, ...args) => {
    actionFunction(...args)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error handling action:', error);
      });
  };

  const handleConfirmActionWithReload = (actionFunction, ...args) => {
    if (window.confirm('정말로 진행하시겠습니까?')) {
      handleActionWithReload(actionFunction, ...args);
    }
  };

  const fetchData = async (apiFunction, setDataFunction) => {
    try {
      const response = await apiFunction();
      const res = response.data.data;
      if (res) {
        setDataFunction(res);
      } else {
        console.error(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(getMyData, setMyData);
  }, []);

  useEffect(() => {
    fetchData(getUserData, setUserData);
  }, []);

  useEffect(() => {
    fetchData(getAdminData, setAdminData);
  }, []);

  useEffect(() => {
    fetchData(getAdminGroupData, setGroupData);
  }, []);

  const approvedGroups = groupData.filter((row) => row.approve);

  const renderTabContent = () => {
    if (selectedTab === 0) {
      return (
        <>
          <LinkContainer>
            <StyledNavLink
              exact
              to='/admin'
              onClick={() => setShowApprovedGroups(true)}
              isActive={showApprovedGroups}>
              단체 등록 승인
            </StyledNavLink>
            <SpaceBetweenLinks />
            <StyledNavLink
              exact
              to='/admin'
              onClick={() => setShowApprovedGroups(false)}
              isActive={!showApprovedGroups}>
              등록된 단체 삭제
            </StyledNavLink>
          </LinkContainer>
          {showApprovedGroups ? (
            <TableContainer>
              <thead>
                <tr>
                  <TableHeader>단체명</TableHeader>
                  <TableHeader>분류</TableHeader>
                  <TableHeader>캠퍼스</TableHeader>
                  <TableHeader>버튼</TableHeader>
                </tr>
              </thead>
              <tbody>
                {groupData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.groupName}</TableCell>
                    <TableCell>{row.subCategory}</TableCell>
                    <TableCell>{row.campus}</TableCell>
                    <TableCell>
                      <ActionButtons>
                        {row.approve ? (
                          <>
                            <RejectButton
                              onClick={() =>
                                handleActionWithReload(approveGroup, row.id)
                              }>
                              거부
                            </RejectButton>
                          </>
                        ) : (
                          <>
                            <ApproveButton
                              onClick={() =>
                                handleActionWithReload(approveGroup, row.id)
                              }>
                              승인
                            </ApproveButton>
                          </>
                        )}
                      </ActionButtons>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </TableContainer>
          ) : (
            <TableContainer>
              <thead>
                <tr>
                  <TableHeader>단체명</TableHeader>
                  <TableHeader>분류</TableHeader>
                  <TableHeader>캠퍼스</TableHeader>
                  <TableHeader>버튼</TableHeader>
                </tr>
              </thead>
              <tbody>
                {approvedGroups.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.groupName}</TableCell>
                    <TableCell>{row.subCategory}</TableCell>
                    <TableCell>{row.campus}</TableCell>
                    <TableCell>
                      <ActionButtons>
                        <IconButton
                          onClick={() =>
                            handleConfirmActionWithReload(deleteGroup, row.id)
                          }>
                          <Icon src={GrabageIcon} alt='Delete' />
                        </IconButton>
                      </ActionButtons>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </TableContainer>
          )}
        </>
      );
    } else if (selectedTab === 1) {
      return (
        <>
          <TitleColumnContainer>
            <TitleText>모집 공고 관리</TitleText>
          </TitleColumnContainer>
        </>
      );
    } else if (selectedTab === 2) {
      return (
        <>
          <TitleColumnContainer>
            <TitleText>사용자 관리</TitleText>
          </TitleColumnContainer>
          <TableContainer>
            <thead>
              <tr>
                <TableHeader>이름</TableHeader>
                <TableHeader>가입일</TableHeader>
                <TableHeader>전화번호</TableHeader>
                <TableHeader>이메일</TableHeader>
              </tr>
            </thead>
            <tbody>
              {userData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.registrationDate}</TableCell>
                  <TableCell>{row.phoneNumber}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>
                    <ActionButtons>
                      <ApproveButton
                        onClick={() =>
                          handleActionWithReload(registerAdmin, row.email)
                        }>
                        관리자 등록
                      </ApproveButton>
                      <RejectButton
                        onClick={() =>
                          handleConfirmActionWithReload(deleteUser, row.email)
                        }>
                        계정 삭제
                      </RejectButton>
                    </ActionButtons>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </TableContainer>
        </>
      );
    } else if (selectedTab === 3) {
      return (
        <>
          <TitleColumnContainer>
            <TitleText>관리자 목록</TitleText>
          </TitleColumnContainer>
          <TableContainer>
            <thead>
              <tr>
                <TableHeader>이름</TableHeader>
                <TableHeader>가입일</TableHeader>
                <TableHeader>전화번호</TableHeader>
                <TableHeader>이메일</TableHeader>
              </tr>
            </thead>
            <tbody>
              {adminData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.registrationDate}</TableCell>
                  <TableCell>{row.phoneNumber}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>
                    <ActionButtons>
                      <ApproveButton
                        onClick={() =>
                          handleActionWithReload(revokeAdmin, row.email)
                        }
                        style={{
                          backgroundColor: '#7145941A',
                          color: '#714594'
                        }}>
                        관리자 해지
                      </ApproveButton>
                      <RejectButton
                        onClick={() =>
                          handleConfirmActionWithReload(deleteUser, row.email)
                        }>
                        계정 삭제
                      </RejectButton>
                    </ActionButtons>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </TableContainer>
        </>
      );
    }
  };

  return (
    <Container>
      <LogoContainer>
        <LogoImage src={Logo} alt='Logo' />
      </LogoContainer>
      <HorizontalContainer>
        <LeftTab>
          <ProfileCircle>
            {myData.profileImageUrl ? (
              <ProfileImage src={myData.profileImageUrl} alt='Profile' />
            ) : (
              <ProfileImage src={DefaultImg} alt='Default Image' />
            )}
          </ProfileCircle>
          <UserName>{myData.name}</UserName>
          <TabContainer>
            {[0, 2, 3].map((tabIndex) => (
              <Tab
                key={tabIndex}
                onClick={() => handleTabClick(tabIndex)}
                isSelected={selectedTab === tabIndex}>
                <TabLabel isSelected={selectedTab === tabIndex}>
                  {tabIndex === 0 && '단체 등록 관리'}
                  {/* {tabIndex === 1 && '모집 공고 관리'} */}
                  {tabIndex === 2 && '사용자 관리'}
                  {tabIndex === 3 && '관리자 관리'}
                </TabLabel>
                <SubTitle isSelected={selectedTab === tabIndex}>
                  {tabIndex === 0 && '단체 등록 승인 / 단체 삭제'}
                  {/* {tabIndex === 1 && '모집 공고 삭제'} */}
                  {tabIndex === 2 && '계정 삭제 / 관리자 등록'}
                  {tabIndex === 3 && '관리자 해지 / 계정 삭제'}
                </SubTitle>
              </Tab>
            ))}
          </TabContainer>
        </LeftTab>
        <SpaceBetweenTab />
        <VerticalContainer>{renderTabContent()}</VerticalContainer>
      </HorizontalContainer>
    </Container>
  );
};

export default AdminOrganization;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  background: #ffffff;
`;

const LeftTab = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 700px;
  background: #262626;
  border-radius: 30px;
  flex-shrink: 0;
`;

const ProfileCircle = styled.div`
  margin-top: 90px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const UserName = styled.div`
  margin-bottom: 70px;
  margin-top: 20px;
  font-size: 20px;
  color: white;
  font-family: 'Gmarket Sans TTF';
  font-weight: 500;
`;

const TabContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  background-color: #262626;
  border-radius: 30px;
  position: sticky;
`;

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 80px;
  margin-bottom: 16px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 0.03)'};
  color: ${(props) => (props.isSelected ? 'rgba(0, 0, 0, 1)' : 'white')};
`;

const TabLabel = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => (props.isSelected ? 'rgba(0, 0, 0, 1)' : 'white')};
  font-family: 'Gmarket Sans TTF';
  font-size: 16px;
  font-weight: bold;
  padding-left: 100px;
`;

const LogoContainer = styled.div`
  padding-left: 45px;
  padding-top: 35px;
  padding-bottom: 25px;
  width: 291px;
  height: 87px;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const LinkContainer = styled.ul`
  margin-bottom: 36px;
  display: flex;
  align-items: center;
  align-self: flex-start;
`;

const NavLinkStyle = css`
  color: rgba(0, 143, 213, 0.8);
  border-bottom: 0.16rem solid #008fd5;
`;

const StyledNavLink = styled(NavLink).attrs({
  activeClassName: 'active-link'
})`
  color: ${(props) => (props.isActive ? '#000000' : 'rgba(0, 0, 0, 0.3)')};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-bottom: 0.89rem;
  transition: color 0.1s ease-out, border-bottom 0.1s ease-out;
  border-bottom: ${(props) =>
    props.isActive ? '0.16rem solid #008fd5' : 'none'};
  text-decoration: none;

  &:hover {
    ${NavLinkStyle}
  }

  &.${(props) => props.activeClassName} {
    ${NavLinkStyle}
  }
`;

const SpaceBetweenLinks = styled.div`
  width: 40px;
`;

const SpaceBetweenTab = styled.div`
  width: 100px;
`;

const SubTitle = styled.div`
  color: ${(props) => (props.isSelected ? 'rgba(0, 0, 0, 1)' : 'white')};
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
  padding-left: 100px;
`;

const HorizontalContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: center;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: center;
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
`;

const ApproveButton = styled.button`
  margin-bottom: 5px;
  padding: 5px 10px;
  background-color: #e8f9ff;
  color: #008fd5;
  font-weight: 500;
  border: none;
  cursor: pointer;
  border-radius: 10px;
`;

const RejectButton = styled.button`
  padding: 5px 10px;
  background-color: #ffd1d1;
  color: #ff0000;
  font-weight: 500;
  border: none;
  cursor: pointer;
  border-radius: 10px;
`;

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 350px);
  overflow-y: auto;
  overflow-x: auto;
  height: 100vh;
`;

const IconButton = styled.button`
  margin-bottom: 5px;
  padding: 5px 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const TitleText = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #000000;
  border-bottom: 2px solid black;
  padding-bottom: 5px;
`;

const TitleColumnContainer = styled.div`
  margin-bottom: 36px;
  display: flex;
  align-items: center;
  align-self: flex-start;

  li:first-child {
    margin-right: 3.19rem;
  }
`;
