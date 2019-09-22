import React, { Component } from "react";
import { Route } from "react-router-dom";
import RequestLoader from "services/requestLoader";
import swal from 'sweetalert';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  componentDidMount() {
    if (localStorage.getItem('example-jwt-jwt')) {
      this.props.history.push('/app');
    }
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  ingreso(history) {
    let data = JSON.stringify({
      password: this.state.password,
      email: this.state.email
    });
    if(!this.state.email || !this.state.password){
      swal("Algo anda mal", "Campos incompletos!", "error");
      this.setState({error: 'Campos incompletos'});
      return;
    }
    

    new RequestLoader().Post('http://localhost:5000/api/getToken/', data).then(res => {
      localStorage.setItem('example-jwt-jwt', res);
      history.push("/app");
    }).catch(() => {
      this.setState({
        error: 'Algo malo ocurrió con tu inicio de sesión, intenta más tarde.'
      })
    });
  }

  render() {
    return (
      <section className="sectionBackgroud">
        <div className="section-login-container">
          <header className="login-header">
            <h1>PsApp</h1>
           
          </header>
          <div className="login-body">
            <div className="login-container">
              <div className="text-input-login-container">
                <input type="text" placeholder="Usuario" name="email" onChange={e => this.change(e)} />
                <input type="password" placeholder="Contraseña" name="password" onChange={e => this.change(e)} />
              </div>
              <Route
                render={({ history }) => (
                  <button
                    className="login-buttons"
                    onClick={() => this.ingreso(history)}
                  >
                    Ingresar
                </button>
                )}
              />
              <Route
                render={({ history }) => (
                  <button
                    className="login-buttons"
                    onClick={() => {
                      history.push("/registro");
                    }}
                  >
                    Crear una cuenta en PsApp
                </button>
                )}
              />
              <div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
