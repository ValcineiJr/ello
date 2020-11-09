import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Painel from "./pages/Painel/index";
import AddAllotment from "./pages/AddAllotment/index";
import EditAllotment from "./pages/EditAllotment/index";
import RemoveAllotment from "./pages/RemoveAllotment/index";

function src() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/painel">
          <Painel />
        </Route>
        <Route exact path="/painel/add">
          <AddAllotment />
        </Route>
        <Route exact path="/painel/edit">
          <EditAllotment />
        </Route>
        <Route exact path="/painel/remove">
          <RemoveAllotment />
        </Route>
      </Switch>
    </Router>
  );
}

export default src;
