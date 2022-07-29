import React, { useState } from "react";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";

function ContactApp() {
  let [state, setState] = useState({
    selectedContact: {},
  });

  let { selectedContact } = state;

  let receiveContact = (contact) => {
    setState((state) => ({
      selectedContact: contact,
    }));
  };

  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h3 text-success">ContactApp</p>
            <p>
              The Foundation was established on the occasion of Maulana Abul
              Kalam Azad's birth centenary celebrations. His eventful life was
              packed with outstanding achievements in the diverse fields. He was
              towering figure on the Indian political scene and a scholar rated
              high in the realms of Urdu Literature.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col-md-9">
            <ContactList sendContact={receiveContact} />
          </div>
          <div className="col-md-3">
            <ContactCard selectedContact={selectedContact} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContactApp;
