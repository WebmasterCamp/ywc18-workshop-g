import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <Home />
      </Route>
      <Route path="*">
        <div>404</div>
      </Route>
    </Switch>
  );
};

export default App;
