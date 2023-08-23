import { ApprovedGroup } from 'interfaces/ApprovedProps';
import React from 'react';
import { styled } from 'styled-components';
import StatusBlock from '../StatusBlock';

interface OrganizationInfoProps {
  group: ApprovedGroup;
}

const OrganizationInfo = ({ group }: OrganizationInfoProps) => {
  return (
    <GroupInfo key={group.id}>
      <ImgWrapper>
        <img src={group.logoImageUrl} alt='img' />
      </ImgWrapper>
      <InfoWrapper>
        <Section>
          <FlexWrapper>
            <Name>{group.groupName}</Name>
            <Division>{group.subCategory}</Division>
          </FlexWrapper>
          <div>
            <StatusBlock
              status={group.recruit ? 'recruitTrue' : 'recruitFalse'}
            />
          </div>
        </Section>
        <Section>
          {group.relatedTag.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Section>
        <Section>
          <Intro>{group.introduction}</Intro>
        </Section>
      </InfoWrapper>
    </GroupInfo>
  );
};

export default OrganizationInfo;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImgWrapper = styled.div`
  img {
    width: 6.9375rem;
    height: 6.625rem;
    border-radius: 0.625rem;
  }
  margin-right: 0.5rem;
`;
const Section = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  width: 100%;
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

const Tag = styled.div`
  padding: 0 0.4rem;
  height: 1.375rem;
  flex-shrink: 0;
  margin-right: 0.5rem;
  fill: #fff;
  border-radius: 10px;
  border: 0.1px solid #7d7d7d;
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
  margin-bottom: 0.5rem;
`;
const Intro = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-family: Gmarket Sans TTF;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const GroupInfo = styled.div`
  margin-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`;
