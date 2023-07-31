import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { NoticeContainer, NoticeTitle, NoticeText } from './ApplicationStyles';

const Notice: React.FC = () => {
  // const [group, setGroup] = useState([]);

  // useEffect(() => {
  //   axios.get('').then((response) => {
  //     setGroup(response.data);
  //   });
  // }, []);

  return (
    <NoticeContainer>
      {/* <Title>{group.groupName} 지원하기</Title> */}
      <NoticeTitle>과일 러버 지원하기</NoticeTitle>
      <NoticeText>지원하기 전 아래의 유의사항을 확인해주세요.</NoticeText>
      <br />
      <NoticeText>놀명 뭐하니?는 어쩌구 저쩌구 책임 어쩌구 주의사항</NoticeText>
      <NoticeText>놀명 뭐하니?는 어쩌구 저쩌구 책임 어쩌구 주의사항</NoticeText>
      <NoticeText>놀명 뭐하니?는 어쩌구 저쩌구 책임 어쩌구 주의사항</NoticeText>
    </NoticeContainer>
  );
};

export default Notice;
