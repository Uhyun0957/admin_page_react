import React from "react";
import styled from "styled-components";

import LoginBox from "../components/LoginBox/LoginBox";

const LoginView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #f2f2f2;
`;

const Login = ({ history }) => {
  return (
    <LoginView>
      <LoginBox history={history} />
    </LoginView>
  );
};

export default Login;
