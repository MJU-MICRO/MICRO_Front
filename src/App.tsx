import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screen/Home';
import Header from './component/Header';
import './App.css';
import RecruitmentList from 'screen/Recruitment/RecruitmentList';
import OrganizationList from './screen/Organization/OrgaizationList';
import SignUp from './screen/SignUp';
import ClubDetail from './screen/Organization/ClubDetail';
import StudentCouncilDetail from './screen/Organization/StudentCouncilDetail';
import CreateOrganizationFirst from './screen/Organization/CreateOrganizationFirst';
import CreateRecruitment from './screen/Recruitment/CreateRecruitment';
import CreateOrganizationSecond from './screen/Organization/CreateOrganizationSecond';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recruitmentList' element={<RecruitmentList />} />
        <Route path='/organizationList' element={<OrganizationList />} />
        <Route
          path='/CreateOrganizationFirst'
          element={<CreateOrganizationFirst />}
        />
        <Route
          path='/CreateOrganizationSecond'
          element={<CreateOrganizationSecond />}
        />
        <Route path='/createRecruitment' element={<CreateRecruitment />} />
        <Route path='/club/:id' element={<ClubDetail />} />
        <Route path='/studentCouncil/:id' element={<StudentCouncilDetail />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
