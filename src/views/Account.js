import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Topbar from "../components/Topbar/Topbar";
import Navbar from "../components/Navbar/Navbar";

const AccountView = styled.div`
  /* background: lightblue; */
  padding-bottom: 40px;
  h1 {
    font-size: 50px;
  }
`;

const Account = ({ user }) => {
  return (
    <>
      <Topbar user={user.name} />
      <div className="container">
        <Navbar />
        <AccountView>
          <h1>Account page</h1>
          <Link to="/login">go to login page</Link>
        </AccountView>
      </div>
    </>
  );
};

export default Account;
