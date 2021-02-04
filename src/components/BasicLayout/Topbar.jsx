import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TopbarView = styled.div`
  padding: 12px 88px 13px 31px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background: #1d2022;
  h1 {
    font-size: 17px;
    font-weight: 500;
  }
  span {
    strong {
      padding-right: 13px;
      padding-bottom: 2px;
      display: inline-flex;
      align-items: center;
      height: 24px;
      line-height: 1;
    }
    button {
      margin-left: 22px;
      padding: 2px 15px 3px;
      color: #fff;
      font-weight: 500;
      border-radius: 5px;
      background: #ff2323;
    }
  }
`;

const Topbar = () => {
  return (
    <TopbarView>
      <h1>
        <Link to="/">관리자 시스템</Link>
      </h1>
      <span>
        <strong>admin123</strong>
        <button>로그아웃</button>
      </span>
    </TopbarView>
  );
};

export default Topbar;
