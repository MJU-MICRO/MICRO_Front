import React from 'react';
import * as Styled from './HeaderStyles';
import recruitmentImg from '../../assets/Header/recruitmentImg.svg';
import arrowRight from '../../assets/Header/arrow-right.svg';
import organizationImg from '../../assets/Header/organizationImg.svg';

const HeaderPostModalContent: React.FC = () => {
  return (
    <>
      <Styled.PostModalContentWrapper>
        <Styled.ContentWrapper>
          <div>
            <Styled.PostImg src={recruitmentImg} alt='recruitment' />
            <Styled.PostText>모집 공고 올리기</Styled.PostText>
          </div>
          <Styled.LinkImg src={arrowRight} alt='arrowRight' />
        </Styled.ContentWrapper>
        <Styled.ContentWrapper>
          <div>
            <Styled.PostImg src={organizationImg} alt='organization' />
            <Styled.PostText>단체 등록하기</Styled.PostText>
          </div>
          <Styled.LinkImg src={arrowRight} alt='arrowRight' />
        </Styled.ContentWrapper>
      </Styled.PostModalContentWrapper>
    </>
  );
};

export default HeaderPostModalContent;
