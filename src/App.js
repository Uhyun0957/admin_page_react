import React from "react";

import { Login, Dashboard, Log, User, Test } from "./views";
import GlobalStyle from "./components/Global/styles";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/log" component={Log} />
          <Route path="/user" component={User} />
          <Route path="/test" component={Test} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
