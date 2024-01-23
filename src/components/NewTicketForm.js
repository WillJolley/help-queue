import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewTicketForm(props){
  const newTicketFormStyles = {
    backgroundColor: 'violet',
  }

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: v4()
    });
  }

  return (
    <div style={newTicketFormStyles}>
    <React.Fragment>
    <ReusableForm 
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;