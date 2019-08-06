import React, { Component } from "react";
import { Route } from "react-router-dom";
import imgForm from "assets/img/wizard/clipboard.png";
import imgLogin from "assets/img/wizard/login.png";
import imgRequest from "assets/img/wizard/request.png";

class HelpWizard extends Component {
  state = {};
  render() {
    return (
      <div className="wizard-container">
        <div className="wizard-subcont">
          <h1 className="wizard-tittle">
            Siga éstos pasos para completar el registro en nuestra plataforma:
          </h1>
          <div className="help-wizard-text">
            <div className="help-wizard-steps">
              <div className="help-wizard-step">
                <h2>Paso 1:</h2>
                <img src={imgForm} alt="paso 1" />
                <p>
                  El primer paso es llenar un formulario con la información
                  básica de contaco, ésto con el motivo de poder contactarnos
                  contigo en caso de que el registro sea exitoso.
                </p>
              </div>
              <div className="help-wizard-step">
                <h2>Paso 2:</h2>
                <img src={imgRequest} alt="paso 2" />
                <p>
                  Luego de llenar el formulario encontrarás los diferentes
                  medios de contacto con nosotros, escríbenos o llámanos para
                  pedir algunos detalles que nos ayudarán a evaluar si nuestra
                  plataforma es adecuada para tus necesidades. Con esto evitamos
                  que realices un pago anticipado que no podamor tratar.
                </p>
              </div>
              <div className="help-wizard-step">
                <h2>Paso 3:</h2>
                <img src={imgLogin} alt="paso 3" />
                <p>
                  Finalmente, si el registro es exitoso, enviaremos tus datos de
                  cuenta a tu correo inscrito en el paso número 1, o te
                  contactaremos por el medio con el cual nos contactaste. Una
                  vez es entregada tu cuenta podrás acceder mediante la página
                  de ingreso.
                </p>
              </div>
            </div>
          </div>
          <div className="help-wizard-1-bottom">
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

            <div
              className="wizard-buttom-next"
              onClick={() => this.props.nextStep()}
            >
              Siguiente
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HelpWizard;
