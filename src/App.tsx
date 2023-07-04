import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SiteIntroduction from "./screen/SiteIntroduction";
import ClubMajorAcademyList from "./screen/ClubMajorAcademyList";
import StudentCouncilList from "./screen/StudentCouncilList";
import CommunityList from "./screen/SmallGroupList";
import CompetitionList from "./screen/CompetitionList";
import Login from "./screen/Login";
import SignUp from "./screen/SignUp";
import Profile from "./screen/Profile";
import Home from "./screen/Home";
import ReceiveMessage from "./screen/ReceiveMessage";
import Header from "./component/Header";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/site-introduction" element={<SiteIntroduction />} />
        <Route path="/club-majorAcademy" element={<ClubMajorAcademyList />} />
        <Route path="/student-councils" element={<StudentCouncilList />} />
        <Route path="/communities" element={<CommunityList />} />
        <Route path="/competitions" element={<CompetitionList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/receive-message" element={<ReceiveMessage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
