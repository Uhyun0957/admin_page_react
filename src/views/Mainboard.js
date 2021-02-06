import React from "react";
import styled from "styled-components";
import Navbar from "../components/BasicLayout/Navbar";
import Topbar from "../components/BasicLayout/Topbar";

const MainboardView = styled.div`
  padding: 60px 100px 140px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Mainboard = () => {
  return (
    <>
      <Topbar />
      <div className="container">
        <Navbar current_page="mainboard" />
      </div>
    </>
  );
};

export default Mainboard;
