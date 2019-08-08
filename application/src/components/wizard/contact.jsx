import React, { Component } from "react";
import WhatsappButton from "assets/img/wizard/whatsapp.png";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Mail from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";

class ContactWizard extends Component {
  state = {
    text: ""
  };

  sendWhatsapp = () => {
    let text = this.state.text.replace(" ", "%");
<<<<<<< HEAD
=======
    console.log(text);
>>>>>>> origin/dev_sesion_token
    window.open(
      `https://api.whatsapp.com/send?phone=573203698165&text=${text}`,
      "_blank"
    );
  };

  render() {
    return (
      <div className="wizard-container">
        <div className="wizard-subcont">
          <h1 className="wizard-tittle">
            Paso 2: Contactanos en los siguientes medios
          </h1>
          <div className="wizard-contact-whatsapp">
            <Card className="wizard-contact-card">
              <CardContent>
                <h2>Escríbenos un mensaje por Whatsapp:</h2>
                <TextField
                  className="wizard-contact-msg-whatsapp"
                  label="Escriba un mensaje..."
                  placeholder="Placeholder"
                  multiline
                  margin="normal"
                  value={this.state.text}
                  onChange={event =>
                    this.setState({ text: event.target.value })
                  }
                />
                <br />
                <br />
                <div
                  className="wizard-contact-btn-whatsapp"
                  onClick={() => this.sendWhatsapp()}
                >
                  <img
                    className="wizard-contact-img-whatsapp"
                    src={WhatsappButton}
                    alt="Whatsapp"
                  />
                  <p className="wizard-contact-txt-whatsapp">Enviar</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <br />
          <div className="wizard-contact-email">
            <Card className="wizard-contact-card">
              <CardContent>
                <h2>Escríbenos un correo, pronto te responderemos:</h2>
                <List dense={false}>
                  <ListItem>
                    <ListItemIcon>
                      <Mail />
                    </ListItemIcon>
                    <ListItemText primary="nico.las0315@hotmail.com" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Mail />
                    </ListItemIcon>
                    <ListItemText primary="nico315@yahoo.com" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Mail />
                    </ListItemIcon>
                    <ListItemText primary="nicolas-angaritao@unilibre.edu.co" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </div>
          <br />
          <div className="wizard-contact-phone">
            <Card className="wizard-contact-card">
              <CardContent>
                <h2>Llama a nuestros números:</h2>
                <List dense={false}>
                  <ListItem>
                    <ListItemIcon>
                      <Mail />
                    </ListItemIcon>
                    <ListItemText primary="3203698165" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Mail />
                    </ListItemIcon>
                    <ListItemText primary="300852147" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Mail />
                    </ListItemIcon>
                    <ListItemText primary="3009632358" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </div>
          <br />
          <div className="help-wizard-1-bottom">
            <div
              className="wizard-buttom-prev"
              onClick={() => this.props.previousStep()}
            >
              Anterior
            </div>
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

export default ContactWizard;
