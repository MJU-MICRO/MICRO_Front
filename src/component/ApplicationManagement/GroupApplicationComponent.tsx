import React from 'react';
import styled, { css } from 'styled-components';
import img from '../../assets/img.svg';
import DotButton from './SentApplication/DotButton';

interface StatusProps {
  daysleft: number;
}

const GroupApplicationComponent = ({
  group,
  applications,
  onUpdate,
  division
}) => {
  const recruitment = applications[0].recruitment;
  const application = applications[0].application;
  const today = new Date();
  const endDateTime = new Date(recruitment.endDateTime);
  const daysUntilEnd = Math.ceil(
    (endDateTime.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  const handleDeleteAndUpdate = (deletedApplicationId) => {
    onUpdate(deletedApplicationId);
  };

  return (
    <>
      <DotButton
        applicationId={application.id}
        onUpdate={handleDeleteAndUpdate}
        division={division}
      />
      <Container>
        <GroupWrapper>
          <ImgWrapper>
            <img src={img} alt='img' />
          </ImgWrapper>
          <InfoWrapper>
            <Section>
              <Name>{group.groupName}</Name>
              <Division>{group.largeCategory}</Division>
              <Status daysleft={daysUntilEnd}>
                {daysUntilEnd > 0 ? `마감까지 ${daysUntilEnd}일` : '모집 마감'}
              </Status>
            </Section>
            <Section>
              <div>{group.campus}</div>
              <div>· </div>
              <div>
                {group.establishedYear}
                <div>개설</div>
              </div>
              <div>· </div>
              <div>
                <div>회원 수</div>
                {group.numOfMember}
                <div>명</div>
              </div>
            </Section>
            <Section>
              <Tag>{group.mediumCategory}</Tag>
            </Section>
          </InfoWrapper>
        </GroupWrapper>
        <RecruitWrapper>
          <RecruitTitle>{recruitment.title}</RecruitTitle>
          <RecruitContent>{recruitment.description}</RecruitContent>
        </RecruitWrapper>

        <ApplicationWrapper>
          <PassStatus>
            {application.passStatus === null
              ? '평가중'
              : application.passStatus}
          </PassStatus>
          <ContentWrapper>
            <Title>지원 분야</Title>
            <Content>{application.supportField}</Content>
          </ContentWrapper>
          <ContentWrapper>
            <Title>지원 일시</Title>
            <Content>이잉</Content>
          </ContentWrapper>
        </ApplicationWrapper>
      </Container>
    </>
  );
};

export default GroupApplicationComponent;

const Container = styled.div`
  width: 100%;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);

  padding-bottom: 1.5rem;
  padding-top: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: rgba(0, 0, 0, 0.02);
  }
  cursor: pointer;
`;

const RecruitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;
const RecruitTitle = styled.div`
  color: rgba(0, 0, 0, 1);

  font-family: Gmarket Sans TTF;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 0.6rem;
`;
const RecruitContent = styled.div`
  color: rgba(0, 0, 0, 0.7);

  font-family: Gmarket Sans TTF;
  font-size: 0.95rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;

  box-sizing: border-box;
  padding-top: 0.8rem;
  padding-left: 1.5rem;
`;
const Content = styled.div`
  color: #000;
  font-family: Gmarket Sans TTF;
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const Title = styled.div`
  color: rgba(0, 0, 0, 0.8);

  font-size: 0.85rem;
  margin-right: 1rem;
  font-weight: 500;
`;
const PassStatus = styled.div`
  width: fit-content;
  color: rgba(36, 70, 220, 0.915);
  padding: 0 1rem;
  position: absolute;
  top: 0.9rem;
  right: 1rem;
  font-size: 0.6875rem;
  font-weight: 500;
  height: 1.75rem;
  border-radius: 0.625rem;
  background: rgba(36, 70, 220, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ApplicationWrapper = styled.div`
  position: relative;
  border-radius: 0.9375rem;
  background: #fff;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.05);
  height: 5.8125rem;

  padding-top: 1rem;
  box-sizing: border-box;
`;

const GroupWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 0.5rem;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ImgWrapper = styled.div`
  img {
    width: 5.8125rem;
    height: 5.25rem;

    border-radius: 0.625rem;
  }
  margin-right: 1rem;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: #000;

  font-family: Gmarket Sans TTF;
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  div {
    display: flex;
    margin-right: 0.3rem;
    div {
      margin-left: 0.3rem;
    }
  }
`;

const Name = styled.div`
  color: #000;
  font-family: GmarketSansMedium;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 0.5rem;
`;

const Division = styled.div`
  color: #000;
  text-align: center;

  font-family: GmarketSansLight;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const Status = styled.div<StatusProps>`
  padding: 0 1rem;
  height: 1.6875rem;
  border-radius: 0.625rem;
  background: rgba(255, 122, 122, 0.1);
  margin-left: auto;
  color: #ff4141;

  font-family: GmarketSansMedium;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ daysleft }) =>
    daysleft <= 0 &&
    css`
      background: rgba(0, 0, 0, 0.05);
      color: rgba(0, 0, 0, 0.5);
    `}
`;

const Tag = styled.div`
  padding: 0 0.6rem;
  height: 1.375rem;
  background-color: #fff;
  border: 0.5px solid #7d7d7d;
  border-radius: 10px;

  color: #000;

  font-family: GmarketSansLight;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Intro = styled.div`
  color: rgba(0, 0, 0, 0.8);
  padding-top: 0.5rem;
  font-family: Gmarket Sans TTF;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: inherit;
// `;
