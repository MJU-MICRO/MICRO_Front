import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Header from './component/Header/Header';
import './App.css';
import './index.css';
import RecruitmentList from 'screens/Recruitment/RecruitmentList';
import OrganizationList from './screens/Organization/OrgaizationList';
import SignUp from './screens/SignUp';
import ClubDetail from './screens/Organization/ClubDetail';
import StudentCouncilDetail from './screens/Organization/StudentCouncilDetail';
import CreateOrganizationFirst from './screens/Organization/CreateOrganizationFirst';
import CreateRecruitment from './screens/Recruitment/CreateRecruitment';
import CreateOrganizationSecond from './screens/Organization/CreateOrganizationSecond';
import Setting from './screens/UserSetting/User/Setting';
import ApplicationManagement from 'screens/applicationManagement/ApplicationManagement';
import MyProfile from './screens/UserSetting/User/MyProfile';
import OrganizationSetting from 'screens/UserSetting/organization/OrganizationSetting';
import { AuthProvider } from 'contexts/AuthContext';
import CreateRecruitmentFirst from './screens/Recruitment/CreateRecruitmentFirst';
import CreateRecruitmentSecond from './screens/Recruitment/CreateRecruitmentSecond';
import Application from './screens/Application/Application';
function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/application' element={<Application />} />
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
          <Route
            path='/createRecruitmentFirst'
            element={<CreateRecruitmentFirst />}
          />
          <Route
            path='/createRecruitmentSecond'
            element={<CreateRecruitmentSecond />}
          />
          <Route path='/createRecruitment' element={<CreateRecruitment />} />
          <Route path='/club/:id' element={<ClubDetail />} />
          <Route
            path='/studentCouncil/:id'
            element={<StudentCouncilDetail />}
          />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/myProfile' element={<MyProfile />} />
          <Route
            path='/organizationSetting'
            element={<OrganizationSetting />}
          />
          <Route
            path='/applicationManagement'
            element={<ApplicationManagement />}
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
