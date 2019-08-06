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
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/Historial/HistorialMedico.jsx";
const dashboardRoutes = [
  {
    path: "/inicio",
    name: "Inicio",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/app"
  },
  {
    path: "/historial",
    name: "Historial Médico",
    icon: Person,
    component: UserProfile,
    layout: "/app"
  }
];

export default dashboardRoutes;
