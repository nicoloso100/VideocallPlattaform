/*!

=========================================================
* Material Dashboard React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import "index.css"

// core components
import Dashboard from "layouts/dashboard.jsx";
import Login from "layouts/login";

import "assets/css/material-dashboard-react.css?v=1.7.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/app" component={Dashboard} />
      <Route path="/ingreso" component={Login} />
      <Redirect from="/" to="/app/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
