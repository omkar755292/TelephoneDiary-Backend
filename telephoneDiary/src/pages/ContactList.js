import React from 'react'
import ContactCard from '../components/ContactCard'

const ContactList = (props) => {
  const deleteContact=(contact)=>{
    console.log("I am on delete",contact)
    props.removeContactHandler(contact);
  };
  const renderContactList = props.contactlist.map((contact)=>{
          return <ContactCard key={contact.id} deleteContact={deleteContact} contact= {contact} />
  })
  return (
    <div className='container my-3'>
      <ol class="list-group list-group-numbered ">
        {renderContactList}
      </ol>
    </div>

  )
}

export default ContactList