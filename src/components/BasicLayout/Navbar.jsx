import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import icon_mainboard from "../../assets/icon/mainboard_nav.png";
import icon_chart from "../../assets/icon/chart_nav.png";
import icon_account from "../../assets/icon/account_nav.png";
import icon_up from "../../assets/icon/up.png";
import icon_down from "../../assets/icon/down.png";

const NavbarView = styled.div`
  min-width: 260px;
  min-height: 95vh;
  background: #2d3135;
  > a,
  .no_link {
    position: relative;
    display: flex;
    align-items: center;
    height: 60px;
    transition: background 0.1s ease-in-out;
    cursor: pointer;
    &:hover {
      background: #383e42;
    }
    &.current {
      background: #383e42;
    }
  }
  .no_link span {
    position: absolute;
    right: 25px;
    width: 10px;
    height: 6px;
    background: url(${icon_down});
    background-size: 100% 100%;
    transition: background 0.2s ease-in-out;
  }
  .sub_list {
    display: flex;
    flex-direction: column;
    padding-left: 55px;
    background: #1d2022;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    a {
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 14px;
      height: 50px;
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
    margin-right: 12px;
    width: 16px;
    height: 16px;
    filter: invert(100%);
    background: url(${(props) => props.icon}) no-repeat;
    background-size: 100% auto;
  }
`;

const Navbar = ({ current_page }) => {
  return (
    <NavbarView>
      <Link to="/mainboard" className={current_page === "mainboard" ? "current" : ""}>
        <Title icon={icon_mainboard}>메인보드</Title>
      </Link>
      <div
        className={current_page.indexOf("chart") !== -1 ? "current no_link" : "no_link"}
        onClick={() => {
          const sub = document.getElementById("chart_sub");
          const updown = document.getElementById("updown");
          if (sub.style.visibility === "hidden") {
            updown.style.background = `url(${icon_up})`;
            sub.style.visibility = "visible";
            sub.style.height = "100px";
            sub.style.opacity = 1;
          } else {
            updown.style.background = `url(${icon_down})`;
            sub.style.visibility = "hidden";
            sub.style.height = "0px";
            sub.style.opacity = 0;
          }
        }}
      >
        <Title icon={icon_chart}>차트</Title>
        <span id="updown" className="selected"></span>
      </div>
      <div className="sub_list" id="chart_sub" style={{ visibility: "hidden", height: "0px" }}>
        <Link to="/chart/line" style={current_page === "chart/ilne" ? { color: "#ff2323" } : null}>
          - 라인 차트
        </Link>
        <Link to="/chart/bar" style={current_page === "chart/bar" ? { color: "#ff2323" } : null}>
          - 막대 차트
        </Link>
      </div>
      <Link to="/account" className={current_page === "account" ? "current" : ""}>
        <Title icon={icon_account}>계정</Title>
      </Link>
    </NavbarView>
  );
};

export default Navbar;
