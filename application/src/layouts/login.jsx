import React, { Component } from 'react';

class Login extends Component {
  state = {}

  render() {
    return (
      <section className="section-login">
        <div className="section-login-container">
          <header className="login-header">
            <h1>PsApp</h1>
          </header>
          <div className="login-body">
            <div className="login-container">
              <form>
                <div className="text-input-login-container">
                  <input type="text" placeholder="Usuario" />
                  <input type="password" placeholder="Contraseña" />
                </div>
                <input type="submit" value="Ingresar" />
                <input type="submit" value="Crear una cuenta en PsApp" />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;