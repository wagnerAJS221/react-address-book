import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ContactsAdd(props) {
  const newContactForm = {
    firstname: '',
    lastname: '',
    street: '',
    city: ''
  }
  const { setContacts, contacts, subtmit, setSubmit } = props
  const [newContact, setNewContact] = useState(newContactForm)

  const handleNewForm = (event) => {
    if (event.target.name === 'firstname') {
      const latestContact = { ...newContact, firstname: event.target.value }
      setNewContact(latestContact)
    } else if (event.target.name === 'lastname') {
      const latestContact = { ...newContact, firstname: event.target.value }
      setNewContact(latestContact)
    } else if (event.target.name === 'street') {
      const latestContact = { ...newContact, firstname: event.target.value }
      setNewContact(latestContact)
    } else if (event.target.name === 'city') {
      const latestContact = { ...newContact, firstname: event.target.value }
      setNewContact(latestContact)
    }
    console.log('new contact if and elses')
  }

  const formSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:4000/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname: newContactForm.firstname,
        lastname: newContact.lastname,
        street: newContact.street,
        city: newContact.city
      })
    })
    const updatedContactList = [...contacts, newContact]
    setNewContact(updatedContactList)
    setNewContact(newContactForm)
    setSubmit(true)
  }

  return (
    <form className="form-stack contact-form">
      <h2>Create Contact</h2>

      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        required
        onChange={handleNewForm}
        value={newContact.firstname}
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        required
        onChange={handleNewForm}
        value={newContact.lastname}
      />

      <label htmlFor="street">Street:</label>
      <input
        id="street"
        name="street"
        type="text"
        required
        onChange={handleNewForm}
        value={newContact.street}
      />

      <label htmlFor="city">City:</label>
      <input
        id="city"
        name="city"
        type="text"
        required
        onChange={handleNewForm}
        value={newContact.city}
      />

      <div className="actions-section">
        <button className="button blue" type="submit">
          Create
        </button>
      </div>
    </form>
  )
}

export default ContactsAdd
