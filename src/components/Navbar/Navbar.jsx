import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import icon_dashboard from "../../assets/icon/dashboard.png";
import icon_chart from "../../assets/icon/chart.png";
import icon_node from "../../assets/icon/node.png";
import icon_log from "../../assets/icon/log.png";
import icon_account from "../../assets/icon/account.png";

const NavbarView = styled.div`
  min-width: 260px;
  min-height: 95vh;
  background: #2d3135;
  a {
    display: flex;
    height: 60px;
    transition: background 0.1s ease-in-out;
    &:hover {
      background: #383e42;
    }
    &.current {
      background: #383e42;
    }
  }
`;

const Title = styled.h2`
  padding-left: 31px;
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 500;
  &::before {
    content: "";
    margin-right: 9px;
    width: 15px;
    height: 15px;
    background: url(${(props) => props.icon}) no-repeat;
    background-size: 100% auto;
  }
`;

const Navbar = ({ current_page }) => {
  return (
    <NavbarView>
      <Link to="/dashboard" className={current_page === "dashboard" ? "current" : ""}>
        <Title icon={icon_dashboard}>대시보드</Title>
      </Link>
      <Link to="/statistics" className={current_page === "statistics" ? "current" : ""}>
        <Title icon={icon_chart}>통계</Title>
      </Link>
      <Link to="/node" className={current_page === "node" ? "current" : ""}>
        <Title icon={icon_node}>노드</Title>
      </Link>
      <Link to="/log" className={current_page === "log" ? "current" : ""}>
        <Title icon={icon_log}>로그</Title>
      </Link>
      <Link to="/user" className={current_page === "user" ? "current" : ""}>
        <Title icon={icon_account}>계정</Title>
      </Link>
    </NavbarView>
  );
};

export default Navbar;
