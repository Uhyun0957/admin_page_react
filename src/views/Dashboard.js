import React from "react";
import styled from "styled-components";

import Topbar from "../components/Topbar/Topbar";
import Navbar from "../components/Navbar/Navbar";
import Titlebar from "../components/Titlebar/Titlebar";
import Board from "../components/Board/Board";

const current_page = "dashboard";

const chart_title = [
  "1번 그래프",
  "2번 그래프",
  "3번 그래프",
  "4번 그래프",
  "5번 그래프",
  "6번 그래프",
  "7번 그래프",
  "8번 그래프",
  "9번 그래프",
];

const DashboardView = styled.div`
  padding: 60px 100px 140px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Dashboard = () => {
  return (
    <>
      <Topbar />
      <div className="container">
        <Navbar current_page={current_page} />
        <div className="main">
          <Titlebar current_page={current_page} />
          <DashboardView>
            <Board title={chart_title[0]} />
            <Board title={chart_title[1]} />
            <Board title={chart_title[2]} />
            <Board title={chart_title[3]} />
            <Board title={chart_title[4]} />
            <Board title={chart_title[5]} />
            <Board title={chart_title[6]} />
            <Board title={chart_title[7]} />
            <Board title={chart_title[8]} />
          </DashboardView>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
