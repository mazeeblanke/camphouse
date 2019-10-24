import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import loadable from "@loadable/component";
import Navbar from "./components/Navbar.js";

const Home = loadable(() => import("./pages/Home/index.js"));
const ListYourSpace = loadable(() => import("./pages/ListYourSpace/index"));
const NotFound = loadable(() => import("./pages/NotFound"));

export default props => {
  return (
    <div>
      <Navbar />
      <br />
      <div className="container">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/list-your-space" component={ListYourSpace}></Route>
        <Route component={NotFound}></Route>
      </Switch>
      </div>
    </div>
  );
};
