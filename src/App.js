import React, { useEffect, useState } from "react";

import { Login, Account, Test } from "./views";
import GlobalStyle from "./components/Global/styles";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser({ name: "test123" });
  }, []);

  return (
    <Router>
      <div>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/account">
            <Account user={user} />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
