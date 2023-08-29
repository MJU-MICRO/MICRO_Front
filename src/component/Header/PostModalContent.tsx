import React from 'react';
import * as Styled from './HeaderStyles';
import recruitmentImg from '../../assets/Header/recruitmentImg1.svg';
import arrowRight from '../../assets/Header/arrow-right.svg';
import organizationImg from '../../assets/Header/organizationImg.svg';
import { Link } from 'react-router-dom';

const PostModalContent = ({
  openOrganizationModal
}: {
  openOrganizationModal: () => void;
}) => {
  return (
    <>
      <Styled.PostModalContentWrapper>
        <Styled.ContentWrapper onClick={openOrganizationModal}>
          <div>
            <Styled.PostImg src={recruitmentImg} alt='recruitment' />
            <Styled.PostText>모집 공고 올리기</Styled.PostText>
          </div>
          <Styled.LinkImg src={arrowRight} alt='arrowRight' />
        </Styled.ContentWrapper>
        <Link to={'/CreateOrganizationFirst'}>
          <Styled.ContentWrapper>
            <div>
              <Styled.PostImg src={organizationImg} alt='organization' />
              <Styled.PostText>단체 등록하기</Styled.PostText>
            </div>
            <Styled.LinkImg src={arrowRight} alt='arrowRight' />
          </Styled.ContentWrapper>
        </Link>
      </Styled.PostModalContentWrapper>
    </>
  );
};

export default PostModalContent;
