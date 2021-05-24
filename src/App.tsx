import React, { FC } from "react";
import HomePage from "./containers/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppContainer from "./containers/AppContainer/AppContainer";

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/orders" component={AppContainer} />
      </Switch>
    </Router>
  );
};

export default App;
