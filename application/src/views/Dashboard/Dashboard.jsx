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
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import WarningIcon from "@material-ui/icons/Warning";
import AddIcon from "@material-ui/icons/Add";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Warnign from "components/Typography/Warning.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import Success from "components/Typography/Success";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.addSession}>
          <div>
            Programar nueva sesión
            <AddIcon />
          </div>
        </div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader stats icon>
                <CardIcon color="warning">
                  <Icon>Sesión 1</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>fecha de programación</p>
                <h3 className={classes.cardTitle}>
                  Miércoles 5 de Agosto
                  <br />
                  <small>13:50</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Warnign>
                    <WarningIcon />
                    Faltan 3 horas 15 minutos para la sesión
                  </Warnign>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader stats icon>
                <CardIcon color="success">
                  <Icon>Sesión 2</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>fecha de programación</p>
                <h3 className={classes.cardTitle}>
                  Martes 4 de Agosto
                  <br />
                  <small>12:00</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Success>
                    <WarningIcon />
                    Faltan 1 día 3 horas para la sesión
                  </Success>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
