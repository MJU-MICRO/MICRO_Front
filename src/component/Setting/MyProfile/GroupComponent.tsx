import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from '../../../assets/img.svg';

const GroupComponent = ({ group }) => {
  return (
    <StyledLink to={`/club/${group.id}`}>
      <Container>
        <ImgWrapper>
          <img src={group.logoImageUrl} alt='img' />
        </ImgWrapper>
        <InfoWrapper>
          <Section>
            <Name>{group.groupName}</Name>
            <Division>{group.largeCategory}</Division>
            <Status>{group.recruit ? '모집중' : '모집완료'}</Status>
          </Section>
          <Section>
            {group.relatedTag.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Section>
          <Section>
            <Intro>{group.introduction}</Intro>
          </Section>
        </InfoWrapper>
      </Container>
    </StyledLink>
  );
};

export default GroupComponent;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 1.5rem;
  padding-top: 2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

const Status = styled.div`
  width: 3.6875rem;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
