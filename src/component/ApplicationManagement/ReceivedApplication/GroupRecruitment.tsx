import axios from 'axios';
import React from 'react';

const GroupRecruitment = ({ groupId }) => {
  // 사용자 지원서 목록 가져오기
  const getGroupRecruitments = () => {
    axios
      .get('https://nolmyong.com/recruitments')
      .then((response) => {
        const applicationData = response.data.data;
        console.log('힝', applicationData);
      })
      .catch((error) => {
        console.log('application/userList 호출 실패 ', error);
      });
  };

  return <div>GroupRecruitment</div>;
};

export default GroupRecruitment;
