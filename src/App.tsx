import React from "react";
import { Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";


import "./scss/app.scss";


export const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <section className="content">
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
      </section>
    </div>
  );
};
