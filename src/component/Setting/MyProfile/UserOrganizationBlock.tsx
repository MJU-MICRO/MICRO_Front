import { useAuth } from 'contexts/AuthContext';
import { useApprovedGroups } from 'contexts/GroupContext';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import img from '../../../assets/img.svg';

const UserOrganizationBlock = () => {
  const history = useNavigate();
  const approvedGroups = useApprovedGroups();
  const { user } = useAuth();

  if (!user || !approvedGroups) {
    return null;
  }

  const userOrganizations = approvedGroups.filter(
    (group) => group.presidentId === user.id
  );
  console.log(userOrganizations);

  const navigateToOrganizationSetting = (group) => {
    history(`/organizationSetting/${group.id}`);
  };
  return (
    <Container>
      {' '}
      <Header>나의 단체</Header>
      {userOrganizations.length === 0 ? (
        <NoOrganization> 나의 단체가 없어요. 😥</NoOrganization>
      ) : (
        <>
          {' '}
          <GroupContainer>
            {userOrganizations.map((group, index) => (
              <Group
                key={index}
                onClick={() => navigateToOrganizationSetting(group.id)}>
                <img src={img} alt='img' />
                <GroupName>{group.groupName}</GroupName>
              </Group>
            ))}
          </GroupContainer>
        </>
      )}
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
  cursor: pointer;

  border-radius: 1rem;
  padding: 0.5rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
  }
`;

const NoOrganization = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  height: 5rem;
`;
