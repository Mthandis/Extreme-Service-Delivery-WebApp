import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

// Shared Imports
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Help from './pages/citizen/Help';
import AboutUs from './pages/citizen/AboutUs';
import Settings from './pages/citizen/Setting';

// Citizen Imports
import Homepage from './pages/citizen/Homepage';
import ReportIssue from './pages/citizen/ReportIssue';
import Status from './pages/citizen/Status';
import Confirmation from './pages/citizen/Confirmation';
import Profile from './pages/citizen/Profile';

// Supervisor Imports
import Suplanding from './pages/municipal_emp/supervisor/suplanding';
import IssuesComponent from './pages/municipal_emp/supervisor/IssuesComponent';
import WriteReport from './pages/municipal_emp/supervisor/WriteReport';
import SubmittedReport from './pages/municipal_emp/supervisor/SubmittedReport';
import SignOutPage from './pages/municipal_emp/supervisor/SignOutPage';
import IssueUpdate from './pages/municipal_emp/supervisor/IssueUpdate';

// Manager Imports
import Landing from './pages/municipal_emp/manager/landing';
import PdfReport from './pages/municipal_emp/manager/issues_reports';
import ManagerProf from './pages/municipal_emp/manager/man_profile';
import ManHelp from './pages/municipal_emp/manager/man_help';

// Admin Imports
//import Menu from './pages/municipal_emp/admin/Menu';
import Monthly from './pages/municipal_emp/admin/Monthly';
import AddEmployment from './pages/municipal_emp/admin/AddEmployment';
import UserCreated from './pages/municipal_emp/admin/Usercreated';
import MonthlyDetail from './pages/municipal_emp/admin/MonthlyDetail';
import AdminHome from './pages/municipal_emp/admin/AdminHome';
import IssuePading from './pages/municipal_emp/admin/IssuePading';
import IssueDetail from './pages/municipal_emp/admin/IssueDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login and Signup Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logoutpage" element={<SignOutPage />} />

        {/* Citizen Routes */}
        
          <>
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/reportissue" element={<ReportIssue />} />
            <Route path="/status" element={<Status />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/help" element={<Help />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </>
        

        {/* Supervisor Routes */}
       
          <>
            <Route path="/suplanding" element={<Suplanding />} />
            <Route path="/issuesComponent" element={<IssuesComponent />} />
            <Route path="/writereport" element={<WriteReport />} />
            <Route path="/submittedreport" element={<SubmittedReport />} />
            <Route path="/help" element={<Help />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/issueupdate" element={<IssueUpdate />} />
          </>
        

        {/* Manager Routes */}
      
          <>
            <Route path="/landing" element={<Landing />} />
            <Route path="/issues" element={<PdfReport />} />
            <Route path="/profile" element={<ManagerProf />} />
            <Route path="/help" element={<ManHelp />} />
          </>
        

        {/* Admin Routes */}
        
          <>
            <Route path="/adminhome" element={<AdminHome />} />
           
            <Route path="/addemployees" element={<AddEmployment />} />
            <Route path="/monthly" element={<Monthly />} />
            <Route path="/usercreated" element={<UserCreated />} />
            <Route path="/monthlydetail" element={<MonthlyDetail />} />
            <Route path="/issuedetail" element={<IssueDetail />} />
            <Route path="/issuepanding" element={<IssuePading/>} />
            
          </>
        

        {/* Handle undefined routes */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
