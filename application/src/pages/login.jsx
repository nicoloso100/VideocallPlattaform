import React, { Component } from "react";
import { Route } from "react-router-dom";
import RequestLoader from "services/requestLoader";
import swal from "sweetalert";
import { isLogged, setLogged } from "utils/localStore";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: ""
    };
  }

  componentDidMount() {
    if (isLogged()) {
      this.props.history.push("/app");
    }
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  ingreso(history) {
    let data = JSON.stringify({
      username: this.state.username,
      password: this.state.password
    });
    if (!this.state.username || !this.state.password) {
      swal("Cuidado!", "Tienes campos incompletos", "warning");
      this.setState({ error: true });
      return;
    }

    new RequestLoader()
      .Post("getToken", data)
      .then(res => {
        setLogged(res);
        history.push("/app");
      })
      .catch(errMsg => {
        swal("Algo anda mal", errMsg, "error");
        this.setState({ error: true });
      });
  }

  render() {
    return (
      <section className="sectionBackgroud">
        <div className="section-login-container">
          <header className="login-header">
            <h1>PsApp</h1>
            <p>{this.state.error}</p>
          </header>
          <div className="login-body">
            <div className="login-container">
              <div className="text-input-login-container">
                <input
                  type="text"
                  placeholder="Usuario"
                  name="username"
                  onChange={e => this.change(e)}
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  onChange={e => this.change(e)}
                />
              </div>
              <Route
                render={({ history }) => (
                  <React.Fragment>
                    <button
                      className="login-buttons"
                      onClick={() => this.ingreso(history)}
                    >
                      Ingresar
                    </button>
                    <button
                      className="login-buttons"
                      onClick={() => {
                        history.push("/registro");
                      }}
                    >
                      Crear una cuenta en PsApp
                    </button>
                  </React.Fragment>
                )}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
