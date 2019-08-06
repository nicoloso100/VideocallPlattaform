import React, { Component } from "react";
import StepWizard from "react-step-wizard";
import HelpWizard from "components/wizard/help";
import FormWizard from "components/wizard/form";
import ContactWizard from "components/wizard/contact";
import FinishedWizard from "components/wizard/finished";

class Register extends Component {
  render() {
    return (
      <div className="sectionBackgroud">
        <StepWizard className="WizardNoScroll">
          <HelpWizard />
          <FormWizard />
          <ContactWizard />
          <FinishedWizard />
        </StepWizard>
      </div>
    );
  }
}

export default Register;
