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
import CreateRecruitmentFirst from './screens/Recruitment/CreateRecruitmentFirst';
import CreateOrganizationSecond from './screens/Organization/CreateOrganizationSecond';
import Setting from 'screens/UserSetting/User/Setting';
import ApplicationManagement from 'screens/ApplicationManagement/ApplicationManagement';
import MyProfile from 'screens/UserSetting/User/MyProfile';
import OrganizationSetting from 'screens/UserSetting/Organization/OrganizationSetting';
import { AuthProvider } from 'contexts/AuthContext';
import { ApprovedGroupsProvider } from 'contexts/GroupContext';
import DefaultSetting from 'component/Setting/Organization/DefaultSetting';
import CreateRecruitmentSecond from './screens/Recruitment/CreateRecruitmentSecond';
import Application from 'screens/Application/Application';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ApprovedGroupsProvider>
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
            <Route path='/club/:id' element={<ClubDetail />} />
            <Route
              path='/studentCouncil/:id'
              element={<StudentCouncilDetail />}
            />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='/myProfile' element={<MyProfile />} />
            <Route
              path='/organizationSetting/:groupId'
              element={<OrganizationSetting />}
            />
            <Route
              path='/applicationManagement'
              element={<ApplicationManagement />}
            />
          </Routes>
        </ApprovedGroupsProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
