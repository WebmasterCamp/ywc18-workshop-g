import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Route>
      <Route path="*">
        <div>404</div>
      </Route>
    </Switch>
  );
};

export default App;
