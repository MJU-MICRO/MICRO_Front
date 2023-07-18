import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>로고(홈 화면)</Link>
          </li>
          <li>
            <Link to='/site-introduction'>사이트 소개</Link>
          </li>
          <li>
            <Link to='/club-majorAcademy'>동아리/학회 리스트</Link>
          </li>
          <li>
            <Link to='/student-councils'>학생회 리스트</Link>
          </li>
          <li>
            <Link to='/communities'>소모임 리스트</Link>
          </li>
          <li>
            <Link to='/competitions'>대회 리스트</Link>
          </li>
          <li>
            <Link to='/login'>로그인</Link>
          </li>
          <li>
            <Link to='/signup'>회원가입</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
