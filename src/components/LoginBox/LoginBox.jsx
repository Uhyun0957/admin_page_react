import React, { useState } from "react";

import LoginController from "../../controllers/LoginController";
import LoginBoxStyles from "./styles";

const LoginBox = ({ history }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const controller = new LoginController();

  return (
    <LoginBoxStyles>
      <h1>관리자 시스템</h1>
      <h2>관리자 로그인</h2>
      <div className="input_box">
        <span>ID</span>
        <input type="text" onChange={({ target: { value } }) => setId(value)} />
      </div>
      <div className="input_box">
        <span>PW</span>
        <input type="password" onChange={({ target: { value } }) => setPw(value)} />
      </div>
      <button onClick={() => controller.login({ id, pw, history })}>로그인</button>
    </LoginBoxStyles>
  );
};

export default LoginBox;
