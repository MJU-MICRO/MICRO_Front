import React from 'react';
import styled from 'styled-components';
import level_one_2 from '../../assets/level_one_2.svg';
import level_two_2 from '../../assets/level_two_2.svg';
import Introduction from '../../component/Organization/Introduction';

function CreateOrganizationSecond() {
  return (
    <BackGround>
      <Introduction></Introduction>
      <Board></Board>
      <Level>
        <img src={level_one_2} />
        <img src={level_two_2} />
      </Level>
      <Next>
        <SaveButton>임시저장</SaveButton>
        <SubmitButton>등록하기</SubmitButton>
      </Next>
    </BackGround>
  );
}

export default CreateOrganizationSecond;

const Board = styled.div`
  border-radius: 13px;
  background: #fff;
  padding: 20px;
  width: 659px;
  height: 770px;
  box-shadow: 0px 4px 20px 3px rgba(0, 0, 0, 0.05);
  margin-bottom: 21px;
  margin-left: 8px;
}
`;

const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
`;

const Level = styled.div`
  display: flex;
  align-items: left;
  margin-bottom: 41px;
  margin-right: 650px;
  img {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  }
}
`;
const Next = styled.div`
  display: flex;
  align-items: left;
  height: auto;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

const SaveButton = styled.button`
  color: #358e48;
  font-size: 0.9375rem;
  font-style: normal;
  font-family: 'GmarketSansMedium';
  font-weight: 500;
  line-height: 41px;
  width: 104px;
  height: 40px;
  margin-right: 10px;
  border-radius: 15px;
  border: 1px solid rgba(41, 180, 72, 0.7);
  &:hover {
    background-color: #04b404;
    color: #ffffff;
  }

  &:active {
    color: #358e48;
  }
`;

const SubmitButton = styled.button`
  color: #008fd5;
  font-family: 'GmarketSansMedium';
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  width: 104px;
  height: 40px;
  line-height: 41px;
  border-radius: 15px;
  border: 1px solid #32a9eb;
  &:hover {
    background-color: #0080ff;
    color: #ffffff;
  }

  &:active {
    color: #008fd5;
  }
`;
