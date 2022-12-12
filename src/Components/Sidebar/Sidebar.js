import React from "react";
import iconDashboard from "./analytics.svg";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="sidenav">
      <img src={iconDashboard} alt="icone analytiqaues" />
      <Link to="/"> FINANCES</Link>
      <Link to="/dashboardemployees"> EMPLOI</Link>
    </nav>
  );
};

export default Sidebar;
