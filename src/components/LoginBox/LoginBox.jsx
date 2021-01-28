import React, { useState } from "react";
import { Link } from "react-router-dom";

import LoginController from "../../controllers/LoginController";
import LoginBoxStyles from "./styles";
import logo from "../../assets/text/logo.png";
import login_text from "../../assets/text/login_text.png";

const LoginBox = ({ history }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const controller = new LoginController();

  return (
    <LoginBoxStyles>
      <h1>
        <img src={logo} alt="AI.API 운영관리 시스템" />
      </h1>
      <h2>
        <img src={login_text} alt="관리자 로그인" />
      </h2>
      <div className="input_box">
        <span>ID</span>
        <input type="text" onChange={({ target: { value } }) => setId(value)} />
      </div>
      <div className="input_box">
        <span>PW</span>
        <input type="password" onChange={({ target: { value } }) => setPw(value)} />
      </div>
      <button onClick={() => controller.login({ id, pw, history })}>Sign In</button>
    </LoginBoxStyles>
  );
};

export default LoginBox;
