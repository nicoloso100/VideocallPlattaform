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
import { NotificationContainer } from "react-notifications";
import "index.css";
import "react-notifications/lib/notifications.css";

// core components
import App from "pages/app";
import Login from "pages/login";
import Register from "pages/register";

import "assets/css/material-dashboard-react.css?v=1.7.0";
import { VideoCall } from "videocall/app";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/video" component={VideoCall} />
      <Route path="/app" component={App} />
      <Route path="/ingreso" component={Login} />
      <Route path="/registro" component={Register} />
      <Redirect from="/" to="/video" />
    </Switch>
    <NotificationContainer />
  </Router>,
  document.getElementById("root")
);
