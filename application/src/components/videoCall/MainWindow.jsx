import React, { Component } from "react";
import PropTypes from "proptypes";

class MainWindow extends Component {
  /**
   * Start the call with or without video
   * @param {Boolean} video
   */
  callWithVideo(video) {
    const { startCall } = this.props;
    const config = { audio: true, video };
    return () => startCall(true, config);
  }

  render() {
    const { clientId } = this.props;
    console.log(this.props);
    document.title = `${clientId} - VideoCall`;
    return (
      <div className="main-window">
        <div>
          <h1 style={{ margin: "0", fontSize: "1em" }}>
            {`Hola ${clientId} Estamos listos para iniciar la sesión de hoy`}
          </h1>
          <br />
          <p style={{ fontSize: "0.7em", maxWidth: "500px" }}>
            A continuación podrás seleccionar el modo de llamada, si lo
            prefieres en video o solo voz, y te conectarás con{" "}
            <strong style={{ textDecoration: "underline" }}>
              {this.props.adminId}
            </strong>
            . Si cierras ésta ventana la llamada se terminará, pero podrás
            volverla a abrir volviendo al presionar el botón de "Iniciar
            llamada" en tu cuenta.
          </p>
        </div>
        <div>
          <div>
            <button
              type="button"
              style={{ color: "white" }}
              className="btn-action fa fa-video-camera"
              onClick={this.callWithVideo(true)}
            />
            <button
              type="button"
              style={{ color: "white" }}
              className="btn-action fa fa-phone"
              onClick={this.callWithVideo(false)}
            />
          </div>
        </div>
      </div>
    );
  }
}

MainWindow.propTypes = {
  clientId: PropTypes.string.isRequired,
  startCall: PropTypes.func.isRequired
};

export default MainWindow;
