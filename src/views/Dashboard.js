import React from "react";
import styled from "styled-components";
import Topbar from "../components/BasicLayout/Topbar";

const DashboardView = styled.div`
  padding: 60px 100px 140px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Dashboard = () => {
  return (
    <div>
      <Topbar />
    </div>
  );
};

export default Dashboard;
