import React from "react";

import { Login, Dashboard } from "./views";
import GlobalStyle from "./components/Global/styles";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
