import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "@material-ui/core";

class StartVideocall extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Sesión 1:</h1>
        <p>Descripción de la sesión 1 y objetivos</p>
        <hr />
        <br />
        <Link href="../videollamada" target="_blank">
          <div className="videoCallStartBtn">Iniciar llamada</div>
        </Link>
        {/* <Route
          render={({ history }) => (
            <React.Fragment>
              <div
                className="videoCallStartBtn"
                onClick={() => history.createHref("../videollamada")}
              >
                Iniciar llamada
              </div>
            </React.Fragment>
          )}
        /> */}
        {/* <a className="videoCallStartBtn" href="../videollamada" target="_blank">
          Iniciar llamada
        </a> */}
      </div>
    );
  }
}

export default StartVideocall;
