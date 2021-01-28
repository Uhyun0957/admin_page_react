import React from "react";
import styled from "styled-components";
import Topbar from "../components/Topbar/Topbar";
import Navbar from "../components/Navbar/Navbar";
import Titlebar from "../components/Titlebar/Titlebar";

const current_page = "user";

const UserView = styled.div`
  h1 {
    font-size: 50px;
  }
`;

const User = () => {
  return (
    <>
      <Topbar />
      <div className="container">
        <Navbar current_page={current_page} />
        <div className="main">
          <Titlebar current_page={current_page} />
          <UserView></UserView>
        </div>
      </div>
    </>
  );
};

export default User;
