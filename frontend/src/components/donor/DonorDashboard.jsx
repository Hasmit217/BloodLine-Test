import React from "react";
import DonorHome from "./DonorHome";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function DonorDashboard() {
  const location = useLocation();
  let mobile = '';
  if (location.state) {
    mobile = location.state.mobile;
  }
  return (
    <div className="DonorDashboard">
      <div className="topdiv">
        <div className="DonorHeadDiv"><h1>Welcome {mobile}</h1></div>
      </div>
      <div className="DonorMainDiv">
        <ul className="DonorDashboardUl">
          <li className="DonorDashboardLi"><Link to="/DonorDash">Home</Link></li>
          <li className="DonorDashboardLi"><Link to="/Profile">View/Update Profile</Link></li>
          <li className="DonorDashboardLi"><Link to="/BloodRequests">Blood Requests</Link></li>
          <li className="DonorDashboardLi"><Link to="/">Logout</Link></li>
        </ul>
        <DonorHome></DonorHome>
      </div>
    </div>
  )
}

export default DonorDashboard;
