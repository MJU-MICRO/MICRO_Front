import axios from 'axios';
import UserProps from '../../../interfaces/UserProps';
import { useAuth } from 'contexts/AuthContext';
import { GroupDetail } from 'interfaces/GroupDetailProps';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import img from '../../../assets/img.svg';
interface DefaultSettingProps {
  groupId: number;
}
const OrganizationAuthoritySetting = ({ groupId }: DefaultSettingProps) => {
  const { user } = useAuth();
  const [groupData, setGroupData] = useState<GroupDetail | null>(null);

  useEffect(() => {
    const fetchGroupData = async () => {
      try {
        const response = await axios.get(
          `https://nolmyong.com/api/group/${groupId}`
        );
        setGroupData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log('Error fetching group data:', error);
      }
    };

    fetchGroupData();
  }, [groupId]);

  return (
    <Container>
      <Header>단체 관리자 설정</Header> <Line />
      <ContentWrapper>
        <ContentHeader>현재 관리자</ContentHeader>
        <ContentDes>
          <div>최초 관리자는 단체 등록자입니다.</div>
          <div>관리자는 1명만 지정이 가능합니다.</div>
          <div>
            관리자만 단체 설정 및 모집 공고 게시, 관리를 할 수 있습니다.
          </div>
        </ContentDes>
        <Content>
          <ManagerImg src={user?.profileImageUrl} alt='img' />
          <Manager>
            <Name>{user?.name}</Name>
            <Email>{user?.email}</Email>
          </Manager>
        </Content>
      </ContentWrapper>
      <ContentWrapper>
        <ContentHeader>관리자 변경하기</ContentHeader>
        <ContentDes>
          <div>변경할 관리자의 이메일 아이디를 작성해주세요.</div>
          <div>
            관리자 변경 직후, 현재 관리자는 단체 설정 및 모집 공고 게시, 관리를
            할 수 없습니다.
          </div>
        </ContentDes>
      </ContentWrapper>
      <ContentWrapper>
        <ContentHeader>관리자 이메일 아이디</ContentHeader>
        <ButtonWrapper>
          <ContentInput placeholder={user?.email} />
          <ManagerChangeBtn>관리자 변경하기</ManagerChangeBtn>
        </ButtonWrapper>
      </ContentWrapper>
      <Line />
      <ContentWrapper>
        <Header>단체 삭제하기</Header>
        <ButtonWrapper>
          <ContentDes>
            단체를 삭제하면 되돌릴 수 없어요! 신중하게 선택해주세요.
          </ContentDes>
          <GroupDeleteBtn>단체 삭제하기</GroupDeleteBtn>
        </ButtonWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default OrganizationAuthoritySetting;

const Container = styled.div``;
const Header = styled.div`
  color: rgba(0, 0, 0, 0.7);
  font-family: Gmarket Sans TTF;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ContentHeader = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-family: Gmarket Sans TTF;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin-top: 1rem;
`;
const ContentDes = styled.div`
  color: #000;

  font-family: Gmarket Sans TTF;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.0625rem; /* 141.667% */
  margin-bottom: 1rem;
  margin-top: 1rem;
`;
const ContentInput = styled.input`
  cursor: pointer;
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
    font-family: Gmarket Sans TTF;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  outline: none;
  border: none;
  width: 16rem;

  height: 1.8625rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  border: 1px solid #dbdbdf;
  background: #fff;
  padding-left: 1.3rem;

  &:focus {
    outline: none;
    border: none;
  }
`;
const ManagerChangeBtn = styled.div`
  border-radius: 0.625rem;
  border: 1px solid #4671e0;
  padding: 0.5rem;
  width: fit-content;
  color: #4671e0;
  font-family: Gmarket Sans TTF;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;
const GroupDeleteBtn = styled.div`
  border-radius: 0.625rem;
  border: 1px solid #f00;
  padding: 0.5rem;
  font-family: Gmarket Sans TTF;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: fit-content;
  color: #f00;
  cursor: pointer;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  width: 100%;
  height: 0.01875rem;
  background: rgba(0, 0, 0, 0.2);
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
const Manager = styled.div``;

const ManagerImg = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 1.38rem;
`;

const Name = styled.div`
  color: rgba(0, 0, 0, 0.8);

  font-family: Gmarket Sans TTF;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Email = styled.div`
  color: rgba(0, 0, 0, 0.5);

  font-family: Gmarket Sans TTF;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  justify-content: space-between;
`;
