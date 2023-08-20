import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import img from '../../assets/img.svg';
import { OrganizationProps } from '../../component/Organization/OrganizationProps';

function StudentCouncilDetail() {
  const { id } = useParams<{ id: string }>();
  const [studentCouncilData, setStudentCouncilData] =
    useState<OrganizationProps | null>(null);

  const sampleStudentCouncilData: OrganizationProps[] = [
    {
      id: '101',
      name: '시그널',
      imageUrl: 'club1.jpg',
      establishedYear: 2023,
      numberOfMember: '34명',
      activityTitle: [
        '전 세계 각국의 과일들을 찾아보기',
        '전 세계 각국의 과일들을 찾아보기',
        '전 세계 각국의 과일들을 찾아보기'
      ],
      activityContent: [
        '저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.',
        '저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.',
        '저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.'
      ],
      isRecruit: true,
      campus: '인문캠퍼스',
      largeCategory: '학생단체',
      mediumCategory: '학과 학생회',
      smallCategory: '경영대학',
      subCategory: '경영정보학과',
      relationMajor: ['경영정보학과'],
      relatedTag: ['경영/컨설팅/마케팅', '정치/사회/법률'],
      introduction:
        '안녕하세요, 저희는 과일 러버 소모임 과일 러버단 입니다. 저희의 과일 사랑은 무한합니다. 사실 저는 수박만 좋아합니다. 다른 거를 좋아하기 위한 소모임 입니다.',
      presidentEmail: 'hgd@mju.ac.kr',
      isApprove: true
    },
    {
      id: '102',
      name: '공:존',
      imageUrl: 'club1.jpg',
      establishedYear: 2023,
      numberOfMember: '34명',
      activityTitle: [
        '전 세계 각국의 과일들을 찾아보기',
        '전 세계 각국의 과일들을 찾아보기',
        '전 세계 각국의 과일들을 찾아보기'
      ],
      activityContent: [
        '저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.',
        '저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.',
        '저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.'
      ],
      isRecruit: true,
      campus: '인문캠퍼스',
      largeCategory: '학생단체',
      mediumCategory: '총동아리연합회',
      smallCategory: '',
      subCategory: '',
      relationMajor: [''],
      relatedTag: ['디자인/미디어', '경영/컨설팅/마케팅', '정치/사회/법률'],
      introduction:
        '안녕하세요, 저희는 과일 러버 소모임 과일 러버단 입니다. 저희의 과일 사랑은 무한합니다. 사실 저는 수박만 좋아합니다. 다른 거를 좋아하기 위한 소모임 입니다.',
      presidentEmail: 'hgd@mju.ac.kr',
      isApprove: true
    },
    {
      id: '103',
      name: 'MOVE',
      imageUrl: 'club1.jpg',
      establishedYear: 2023,
      numberOfMember: '34명',
      activityTitle: [
        '전 세계 각국의 과일들을 찾아보기',
        '전 세계 각국의 과일들을 찾아보기',
        '전 세계 각국의 과일들을 찾아보기'
      ],
      activityContent: [
        '저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.',
        '저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.',
        '저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.저희는 전 세계 각국의 과일들을 찾아보는 것입니다.'
      ],
      isRecruit: true,
      campus: '인문캠퍼스',
      largeCategory: '학생단체',
      mediumCategory: '단과대학 학생회',
      smallCategory: '경영대학',
      subCategory: '',
      relationMajor: ['경영학과', '경영정보학과', '국제통상학과'],
      relatedTag: [''],
      introduction:
        '안녕하세요, 저희는 과일 러버 소모임 과일 러버단 입니다. 저희의 과일 사랑은 무한합니다. 사실 저는 수박만 좋아합니다. 다른 거를 좋아하기 위한 소모임 입니다.',
      presidentEmail: 'hgd@mju.ac.kr',
      isApprove: true
    }
  ];

  useEffect(() => {
    // Find the club that matches the id from the URL parameter
    const foundClub = sampleStudentCouncilData.find(
      (studentCouncil) => studentCouncil.id === id
    );

    // If the club is found, set it in the clubData state
    if (foundClub) {
      setStudentCouncilData(foundClub);
    } else {
      // If no club is found, handle the error or show a message
      console.error(`Club with id ${id} not found.`);
    }
  }, [id]);

  if (!studentCouncilData) {
    return <div>Loading...</div>;
  }

  // Render student council detail using studentCouncilData

  return (
    <BackGround>
      <ClubIntroduction>
        <Intro>
          <img src={img} alt='로고 이미지' />
          <h3>{studentCouncilData.name}</h3>
          <Classification>{studentCouncilData.largeCategory}</Classification>
          <Details> {studentCouncilData.introduction} </Details>
          <BorderLine></BorderLine>
        </Intro>
        <Wrapper>
          <div>
            <h3>설립연도</h3> <p>{studentCouncilData.establishedYear}년</p>
          </div>
          <div>
            <h3>상세분류</h3> <p>{studentCouncilData.mediumCategory}</p>
          </div>
        </Wrapper>
        <Wrapper>
          <div>
            <h3>소속대학</h3> <p>{studentCouncilData.smallCategory}</p>
          </div>
          <div>
            <h3>소속학과</h3> <p> {studentCouncilData.subCategory}</p>
          </div>
        </Wrapper>
      </ClubIntroduction>
      <ClubExplain>
        <Activity>
          <h3>주요 활동</h3>
          {studentCouncilData.activityTitle.map((title, index) => (
            <ActivityItem key={index}>
              <span>{title}</span>
              <div>{studentCouncilData.activityContent[index]}</div>
              <BorderLine2></BorderLine2>
            </ActivityItem>
          ))}
        </Activity>
        <Recruitment>
          <h3>{studentCouncilData.name}의 모집공고</h3>
        </Recruitment>
      </ClubExplain>
    </BackGround>
  );
}

export default StudentCouncilDetail;

const BackGround = styled.div`
  display: flex;
  justify-content: center;
}
`;

const ActivityItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 8px;
  span {
    color: rgba(0, 0, 0, 0.8);
    leading-trim: both;
    text-edge: cap;
    font-family: 'GmarketSansMedium';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 6.5px;
  }
  div {
    color: #000;
    leading-trim: both;
    text-edge: cap;
    font-family: 'GmarketSansLight';
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;

const ClubIntroduction = styled.div`
  border-radius: 13px;
  background: #fff;
  margin-top: 75px;
  margin-left: 79px;
  padding: 20px;
  width: 337px;
  height: 520px;
  box-shadow: 0px 4px 20px 3px rgba(0, 0, 0, 0.05);
}
`;

const Activity = styled.div`
  border-radius: 10px;
  background: #fff;
  margin-top: 75px;
  margin-left: 90px;
  padding: 20px;
  width: 861px;
  height: 350px;
  flex-shrink: 0;
  box-shadow: 0px 4px 30px 3px rgba(42, 114, 255, 0.25);
  h3 {
    text-align: left;
    vertical-align: middle;
    margin-top: 15px;
    margin-left: 8px;
    margin-bottom: 18px;
    font-family: 'GmarketSansMedium';
    color: rgba(0, 0, 0, 0.8);
    text-edge: cap;
    font-size: 24.5px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    leading-trim: both;
  }
}
`;

const Recruitment = styled.div`
  border-radius: 10px;
  background: #fff;
  margin-top: 27px;
  margin-left: 90px;
  padding: 20px;
  width: 861px;
  height: 300px;
  flex-shrink: 0;
    h3 {
    text-align: left;
    vertical-align: middle;
    margin-top: 15px;
    margin-left: 18px;
    font-family: 'GmarketSansMedium';
    color: rgba(0, 0, 0, 0.8);
    text-edge: cap;
    font-size: 24.5px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    leading-trim: both;
  }
}
`;

const ClubExplain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  img {
    border-radius: 10px;
    width: 119px;
    height: 115px;
    margin-top: 35px;
    margin-top: 32px;
  }
  h3 {
    margin-top: 20px;
    font-family: 'GmarketSansMedium';
    color: rgba(0, 0, 0, 0.8);
    text-edge: cap;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  div {
    display: inline-block;
    border-radius: 5px;
    background-color: #fff;
    border: 0.4px solid #adadad;
    width: 150px;
    height: 61px;
    margin-top: 13px;
    margin-left: 3px;
    margin-right: 3px;
  }
  h3 {
    color: rgba(0, 0, 0, 1);
    leading-trim: both;
    text-edge: cap;
    font-family: 'GmarketSansMedium';
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 12px;
    margin-left: 7px;
  }
  p {
    color: #000;
    leading-trim: both;
    text-edge: cap;
    font-family: 'GmarketSansLight';
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-left: 7px;
    margin-top: 7px;
  }
}
`;

const Details = styled.div`
  text-align: left;
  vertical-align: middle;
  font-size: 16px;
  font-family: 'GmarketSansLight';
  line-height: auto;
  color: #000000;
  margin-left: 17px;
  margin-right: 17px;
  margin-bottom: 18.5px;
  margin-top: 19px;
`;

const Classification = styled.div`
  width: 70px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(52, 206, 174, 0.1);
  color: #34ceae;
  leading-trim: both;
  text-edge: cap;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 32.5px;
  align-items: center;
  text-align: center;
  font-family: 'GmarketSansMedium';
  margin-top: 11px;
`;

const BorderLine = styled.hr`
  stroke-width: 2px;
  width: 305px;
  flex-shrink: 0;
  margin-left: 8px;
  margin-right: 8px;
  color: #dbdbdf;
  border: none;
  border-top: 1px solid #dbdbdf;
`;

const BorderLine2 = styled.hr`
  stroke-width: 2px;
  width: 840px;
  flex-shrink: 0;
  margin-left: 0px;
  margin-right: 8px;
  color: #dbdbdf;
  border: none;
  border-top: 1px solid #dbdbdf;
  margin-top: 13px;
  margin-bottom: 13px;
`;

const DownWrapper = styled.div`
  display: inline-block;
  border-radius: 5px;
  background-color: #fff;
  border: 0.4px solid #adadad;
  width: 307.5px;
  height: 96px;
  margin-top: 11px;
  margin-left: 14px;
  h3 {
    color: rgba(0, 0, 0, 0.8);
    leading-trim: both;
    text-edge: cap;
    font-family: 'GmarketSansMedium';
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 16px;
    margin-left: 10px;
    margin-bottom: 13px;
  }
  div {
    display: flex;
    flex-wrap: wrap;
  }
}
`;
