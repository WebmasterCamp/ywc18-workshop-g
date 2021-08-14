import "./App.scss";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import AllProducts from "./pages/AllProducts";
import Farmer from "./pages/Farmer";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/farmers/:id">
          <Farmer />
        </Route>
        <Route path="/products">
          <AllProducts />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
