import React, { useState } from 'react'
import ContactServices from '../Services/ContactServices'

function ContactList(props) {

  let [state, setState] = useState({
    contacts : ContactServices.getContactList()
  });

  let {contacts} = state;

  let clickContact = (contact) =>{
  props.sendContact(contact);  //sending data to parent
  };

  return (
    <React.Fragment>
    <table className='table table-hover text-center table-striped'>
      <thead className='bg-dark text-white'>
        <tr>
            <th>SNO</th>
            <th>Name</th>
            <th>Email</th>
            <th>address</th>
            <th>website</th>
            <th>phone</th>
        </tr>
      </thead> 
      <tbody>
        {
            contacts.length > 0 && contacts.map(contact => {
                return(
                    <tr key = {contact.id} onClick = {()=>clickContact(contact)}>
                        <td>{contact.id}</td>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.address.city}</td>
                        <td>{contact.website}</td>
                        <td>{contact.phone.substr(contact.phone.length-12)}</td>
                    </tr>
                )
            })
        }
      </tbody>
    </table>
    </React.Fragment>
  )
}

export default ContactList