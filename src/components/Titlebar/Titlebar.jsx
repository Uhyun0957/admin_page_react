import React from "react";
import styled from "styled-components";

import icon_dashboard from "../../assets/icon/dashboard2.png";
import icon_chart from "../../assets/icon/chart2.png";
import icon_node from "../../assets/icon/node2.png";
import icon_log from "../../assets/icon/log2.png";
import icon_account from "../../assets/icon/account2.png";

const title_texts = ["대시보드", "통계", "노드", "로그", "계정"];
const currents = ["dashboard", "statistics", "node", "log", "user"];
const icons = [icon_dashboard, icon_chart, icon_node, icon_log, icon_account];

const TitlebarView = styled.div`
  padding-left: 42px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background: #fff;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.11);
  .icon {
    content: url(${(props) => props.icon});
    margin-top: 2.5px;
    margin-right: 7px;
    width: 20px;
  }
  h2 {
    color: #2d3135;
    font-size: 22px;
    font-weight: 700;
    line-height: 1;
  }
`;

const Titlebar = ({ current_page }) => {
  return (
    <TitlebarView icon={currents.map((c, i) => (c === current_page ? icons[i] : ""))}>
      <span className="icon"></span>
      <h2>{currents.map((c, i) => (c === current_page ? title_texts[i] : ""))}</h2>
    </TitlebarView>
  );
};

export default Titlebar;
