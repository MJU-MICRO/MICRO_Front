import React from 'react';
import { styled } from 'styled-components';
import img from '../../../assets/img.svg';

const UserOrganizationBlock = () => {
  return (
    <Container>
      <Header>나의 단체</Header>
      <GroupContainer>
        <Group>
          <img src={img} alt='img' />
          <GroupName>놀명 뭐하니?</GroupName>
        </Group>
        <Group>
          <img src={img} alt='img' />
          <GroupName>놀명 뭐하니?</GroupName>
        </Group>{' '}
        <Group>
          <img src={img} alt='img' />
          <GroupName>놀명 뭐하니?</GroupName>
        </Group>{' '}
        <Group>
          <img src={img} alt='img' />
          <GroupName>놀명 뭐하니?</GroupName>
        </Group>
        <Group>
          <img src={img} alt='img' />
          <GroupName>놀명 뭐하니?</GroupName>
        </Group>
      </GroupContainer>
    </Container>
  );
};

export default UserOrganizationBlock;

const Container = styled.div`
  width: 40.75rem;
  height: fit-content;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #fff;
  box-shadow: 0px 4px 20px 3px rgba(0, 0, 0, 0.05);
  padding: 1rem 2rem;
`;
const GroupContainer = styled.div`
  img {
    width: 6.46331rem;
    height: 5.5rem;
    border-radius: 0.625rem;
  }
  display: flex;
  align-items: center;
  justify-content: flex-start;

  flex-wrap: wrap;
`;
const GroupName = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-family: GmarketSansMedium;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 1rem;
`;
const Header = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-family: GmarketSansMedium;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 1rem;
`;
const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;
