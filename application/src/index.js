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

import "assets/css/index.css";
import "assets/css/login/loginStyles.css";
import "assets/css/register/registerStyles.css";
import "assets/css/videocall/videocall.scss";
import "assets/css/videocall/startVideoCallStyles.css";
import "assets/css/application/material-dashboard-react.css?v=1.7.0";
import "react-notifications/lib/notifications.css";

// core components
import App from "pages/app";
import Login from "pages/login";
import Register from "pages/register";
import VideoCall from "pages/VideoCall";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/app" component={App} />
      <Route path="/ingreso" component={Login} />
      <Route path="/registro" component={Register} />
      <Route path="/videollamada" component={VideoCall} />
      <Redirect from="/" to="/ingreso" />
    </Switch>
    <NotificationContainer />
  </Router>,
  document.getElementById("root")
);
