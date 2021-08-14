import React, { Component } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ViewAll from "./pages/ViewAll";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <Home />
      </Route>
      <Route path="/viewAll" exact={true}>
        <ViewAll />
      </Route>
      <Route path="/products/:id" exact={true}>
        <Product />
      </Route>
      <Route path="*">
        <div>404</div>
      </Route>
    </Switch>
  );
};

export default App;
