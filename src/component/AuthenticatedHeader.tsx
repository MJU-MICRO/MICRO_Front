import React from "react";
import { Link } from "react-router-dom";

const AuthenticatedHeader: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">로고(홈 화면)</Link>
          </li>
          <li>
            <Link to="/site-introduction">사이트 소개</Link>
          </li>
          <li>
            <Link to="/club-majorAcademy">동아리/학회 리스트</Link>
          </li>
          <li>
            <Link to="/student-councils">학생회 리스트</Link>
          </li>
          <li>
            <Link to="/communities">소모임 리스트</Link>
          </li>
          <li>
            <Link to="/competitions">대회 리스트</Link>
          </li>
          <li>
            <Link to="/ReceiveMessage">받은 메시지</Link>
          </li>
          <li>
            <Link to="/Profile">프로필</Link>
          </li>
          <li>
            <button>로그아웃</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AuthenticatedHeader;
