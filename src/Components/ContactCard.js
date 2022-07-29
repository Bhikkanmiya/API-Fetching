import React from "react";

function ContactCard(props) {
let {selectedContact} = props;

  return (
    <React.Fragment>
      {
        Object.keys(selectedContact).length > 0 &&
      
      <div className="card shadow-lg sticky-top">
        <img
          src={selectedContact.image}
          className="w-100 h-45"
          alt="not found"
        />
        <div className="card-body">
          <ul className="list-group">

            <li className="list-group-item">
              {selectedContact.name}
            </li>

            <li className="list-group-item">
              {selectedContact.email}
            </li>

            <li className="list-group-item">
              {selectedContact.address.city}
            </li>

            <li className="list-group-item">
              {selectedContact.website}
            </li>

          </ul>
        </div>
      </div>
      }
    </React.Fragment>
  );
}

export default ContactCard;
