import React from "react";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    googleLogout();
    navigate("/"); // Redirect to home after logout
    console.log("Logged out successfully");
  };

  return (
    <div className="container">
      <h1>Dashboard Page</h1>
      <p>This is the Dashboard page.</p>
      <button className="btn" onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Dashboard;
