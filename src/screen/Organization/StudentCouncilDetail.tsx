import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import img from '../../assets/img.svg';
import { OrganizationProps } from '../../component/Organization/OrganizationProps';
import StudentCouncilRecruitmentCard from '../../component/recruitment/StudentCouncilRecruitmentCard';
import ClubRecruitmentCard from '../../component/recruitment/ClubRecruitmentCard';
import { RecruitmentProps } from '../../component/recruitment/RecruitmentProps';
import RecruitmentModal from '../Recruitment/RecruitmentModal';
import downArrow from '../../assets/downArrow.svg';
import UpArrow from '../../assets/UpArrow.svg';
import defaultHeart from '../../assets/defaultHeart.svg';
import FillHeart from '../../assets/FillHeart.svg';
function StudentCouncilDetail() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { id } = useParams<{ id: string }>();
  const [studentCouncilDatalist, setStudentCouncilDatalist] = useState<
    OrganizationProps[]
  >([]);
  const [recruitmentDatalist, setRecruitmentDatalist] = useState<
    RecruitmentProps[]
  >([]);
  const [studentCouncilData, setStudentCouncilData] =
    useState<OrganizationProps | null>(null);
  const [recruitmentData, setRecruitmentData] =
    useState<RecruitmentProps | null>(null);
  const toggleBookmark = async () => {
    const newBookmarkStatus = !isBookmarked;
    setIsBookmarked(newBookmarkStatus);

    const token = localStorage.getItem('userToken'); // Retrieve the user's token from local storage or another source

    try {
      if (newBookmarkStatus) {
        // Bookmark the group
        await axios.post(
          `/api/bookmark/${id}`,
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log('북마크 등록');
      } else {
        // Unbookmark the group
        await axios.delete(`/api/bookmark/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log('북마크 해제');
      }
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
  };
  useEffect(() => {
    axios
      .get('api/group')
      .then((response) => {
        console.log(response);
        if (response.data.data) {
          setStudentCouncilDatalist(response.data.data);
        } else {
          console.error('Application list data not available:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching application history:', error);
      });
  }, []);
  useEffect(() => {
    axios
      .get('/recruitments')
      .then((response) => {
        console.log(response);
        if (response.data.data) {
          setRecruitmentDatalist(response.data.data);
        } else {
          console.error('Application list data not available:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching application history:', error);
      });
  }, []);
  useEffect(() => {
    // Find the club that matches the id from the URL parameter
    const foundClub = studentCouncilData
      ? studentCouncilData
      : studentCouncilDatalist.find((club) => club.id === id);
    const filteredRecruitments =
      recruitmentDatalist.filter((recruitment) => recruitment.groupId === id) ||
      [];

    const sortedRecruitments = filteredRecruitments.sort(
      (a: RecruitmentProps, b: RecruitmentProps) =>
        new Date(b.recruitmentStartDate).getTime() -
        new Date(a.recruitmentStartDate).getTime()
    );

    const latestRecruitment = sortedRecruitments[0];

    if (foundClub && latestRecruitment) {
      setStudentCouncilData(foundClub);
      setRecruitmentData(latestRecruitment);
    } else {
      console.error(`Club with id ${id} not found.`);
    }
  }, [id, studentCouncilData, recruitmentData]);

  if (!studentCouncilData) {
    return <div>Loading...</div>;
  }
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <BackGround>
      <ClubIntroduction>
        <Intro>
          <Heart
            src={isBookmarked ? FillHeart : defaultHeart}
            alt='Bookmark'
            onClick={toggleBookmark}
          />
          <Logo src={img} alt='로고 이미지' />
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
            <h3>소속대학</h3>
            {studentCouncilData.smallCategory != '' && (
              <p>{studentCouncilData.smallCategory}</p>
            )}
            {studentCouncilData.smallCategory == '' && <p>-</p>}
          </div>
          <div>
            <h3>소속학과</h3>
            {studentCouncilData.subCategory != '' && (
              <p>{studentCouncilData.subCategory}</p>
            )}
            {studentCouncilData.subCategory == '' && <p>-</p>}
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
          <RecruitWrapper>
            <DateWrapper>
              <ArrowIcon1 src={downArrow} />
              <RecruitDate>{recruitmentData?.recruitmentStartDate}</RecruitDate>
              <ArrowIcon2 src={UpArrow} />
            </DateWrapper>
            <CardContainer
              key={studentCouncilData.id}
              onClick={() => openModal()}>
              {recruitmentData ? (
                studentCouncilData.largeCategory === '학생단체' ? (
                  <StudentCouncilRecruitmentCard
                    {...studentCouncilData}
                    recruitment={recruitmentData}
                  />
                ) : (
                  <ClubRecruitmentCard
                    {...studentCouncilData}
                    recruitment={recruitmentData}
                  />
                )
              ) : (
                <div>Loading recruitment data...</div>
              )}
            </CardContainer>
          </RecruitWrapper>
        </Recruitment>
      </ClubExplain>
      <RecruitmentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedRecruitmentId={recruitmentData?.id}
        selectedClubId={id}
        recruitmentData={recruitmentData}
        clubData={studentCouncilData}
      />
    </BackGround>
  );
}

export default StudentCouncilDetail;
const Heart = styled.img`
  margin-left: 290px;
  width: 25px;
  height: 21px;
`;
const ArrowIcon1 = styled.img`
  height: 100px;
  color: rgba(255, 255, 100, 10);
  stroke-width: 1px;
  stroke: #737373;
  margin-bottom: 9px;
  margin-top: 20px;
`;
const ArrowIcon2 = styled.img`
  height: 100px;
  color: rgba(255, 255, 100, 10);
  stroke-width: 1px;
  stroke: #737373;
  margin-top: 9px;
`;
const RecruitDate = styled.div`
  color: #000;
  leading-trim: both;
  text-edge: cap;
  font-family: ABeeZee;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
`;
const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 230px;
  margin-left: 55px;
  margin-right: 75px;
`;
const RecruitWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 8px;
`;
const CardContainer = styled.div`
  width: 610px;
  height: 230px;
  margin-top: 8px;
  margin-right: 45px;
  margin-bottom: 30px;
  border-radius: 15px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 20px 3px rgba(0, 0, 0, 0.05);
`;
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
  height: 310px;
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
const Logo = styled.img`
  border-radius: 10px;
  width: 119px;
  height: 115px;
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
