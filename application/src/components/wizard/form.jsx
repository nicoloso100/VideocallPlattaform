import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { NotificationManager } from "react-notifications";
import RequestLoader from "services/requestLoader";
const axios = require("axios");

class FormWizard extends Component {
  state = {
    email: "",
    emailConfirmacion: "",
    nombre: "",
    telefono: ""
  };

  sendMail = that => {
    const { email, emailConfirmacion, nombre, telefono } = this.state;
    if (
      email !== "" &&
      emailConfirmacion !== "" &&
      nombre !== "" &&
      telefono !== ""
    ) {
      if (email === emailConfirmacion) {
        NotificationManager.info("Enviando mensaje...");
        let data = {
          email: email,
          nombre: nombre,
          telefono: telefono
        };
        new RequestLoader().Post('http://localhost:5000/api/sendMail', data).then(res => {
          NotificationManager.success(
            "Tus datos han sido enviados satisfactoriamente"
          );
          that.props.nextStep();
        }).catch(() => {
          NotificationManager.error(
            "Ha ocurrido un error al enviar el formulario"
          );
        });
      } else {
        NotificationManager.warning("Las direcciones de correo no coinciden");
      }
    } else {
      NotificationManager.warning("Faltan campos por llenar");
    }
  };

  render() {
    return (
      <div className="wizard-container">
        <div className="wizard-subcont">
          <h1 className="wizard-tittle">
            Paso 1: ingrese la información básica
          </h1>
          <form noValidate autoComplete="off" className="wizard-form-form">
            <TextField
              className="wizard-form-item"
              label="Email"
              margin="normal"
              value={this.state.email}
              onChange={event => this.setState({ email: event.target.value })}
            />
            <TextField
              className="wizard-form-item"
              label="Confirmar Email"
              margin="normal"
              value={this.state.emailConfirmacion}
              onChange={event =>
                this.setState({ emailConfirmacion: event.target.value })
              }
            />
            <TextField
              className="wizard-form-item"
              label="Nombre completo"
              margin="normal"
              value={this.state.nombre}
              onChange={event => this.setState({ nombre: event.target.value })}
            />
            <TextField
              className="wizard-form-item"
              label="Teléfono"
              margin="normal"
              value={this.state.telefono}
              onChange={event =>
                this.setState({ telefono: event.target.value })
              }
            />
          </form>

          <div className="help-wizard-1-bottom">
            <div
              className="wizard-buttom-prev"
              onClick={() => this.props.previousStep()}
            >
              Anterior
            </div>
            <div
              className="wizard-buttom-next"
              onClick={() => this.sendMail(this)}
            >
              Siguiente
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormWizard;
