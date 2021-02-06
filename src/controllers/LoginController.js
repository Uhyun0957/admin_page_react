import React from "react";

class LoginController extends React.Component {
  login = async ({ id, pw, history }) => {
    if (id === "") {
      alert("아이디를 입력해주십시오.");
      return;
    }
    if (pw === "") {
      alert("패스워드를 입력해주십시오.");
      return;
    }
    // 로그인 로직
    history.push("/mainboard");
  };
}

export default LoginController;
