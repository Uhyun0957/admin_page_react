import React from "react";
import styled from "styled-components";
import Topbar from "../components/Topbar/Topbar";
import Navbar from "../components/Navbar/Navbar";
import Titlebar from "../components/Titlebar/Titlebar";

let current_page = "log";

const LogView = styled.div`
  h1 {
    font-size: 50px;
  }
`;

const Log = () => {
  return (
    <>
      <Topbar />
      <div className="container">
        <Navbar current_page={current_page} />
        <div className="main">
          <Titlebar current_page={current_page} />
          <LogView></LogView>
        </div>
      </div>
    </>
  );
};

export default Log;
