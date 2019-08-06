import React, { Component } from "react";
import { Route } from "react-router-dom";
import imgLoginScreen from "assets/img/wizard/loginScreen.png";

class FinishedWizard extends Component {
  state = {};
  render() {
    return (
      <div className="wizard-container">
        <div className="wizard-subcont">
          <h1 className="wizard-tittle">
            Paso 3: Te contactaste con nosotros y tienes tus datos de ingreso?
          </h1>
          <hr />
          <h2 className="wizard-finished-subtitle">
            Dirígete a la página de ingreso y accede a tu cuenta
          </h2>
          <br />
          <div className="wizard-finished-img-cont">
            <Route
              render={({ history }) => (
                <img
                  className="wizard-finished-img"
                  src={imgLoginScreen}
                  alt="login"
                  onClick={() => {
                    history.push("/ingreso");
                  }}
                />
              )}
            />
          </div>
          <br />
          <div className="help-wizard-1-bottom">
            <div
              className="wizard-buttom-next"
              onClick={() => this.props.nextStep()}
            >
              Anterior
            </div>
            <Route
              render={({ history }) => (
                <div
                  className="wizard-buttom-next"
                  onClick={() => {
                    history.push("/ingreso");
                  }}
                >
                  Ingreso
                </div>
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FinishedWizard;
