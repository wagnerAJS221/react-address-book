import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ContactsAdd(props) {
  const newContactForm = {
    firstName: '',
    lastName: '',
    street: '',
    city: ''
  }
  const { subtmit, setSubmit, setContacts, contacts } = props
  const [newContact, setNewContact] = useState(newContactForm)

  const handleNewForm = (event) => {
    console.log(event.target.name, event.target.value)
    if (event.target.name === 'firstName') {
      const latestContact = { ...newContact, firstName: event.target.value }
      setNewContact(latestContact)
    } else if (event.target.name === 'lastName') {
      const latestContact = { ...newContact, lastName: event.target.value }
      setNewContact(latestContact)
    } else if (event.target.name === 'street') {
      const latestContact = { ...newContact, street: event.target.value }
      setNewContact(latestContact)
    } else if (event.target.name === 'city') {
      const latestContact = { ...newContact, city: event.target.value }
      setNewContact(latestContact)
    }
  }

  const formSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:4000/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...newContact
      })
    })
      .then((res) => res.json())
      .then((newContact) => {
        setContacts([...contacts, newContact])
      })
    // console.log the data that i get back from the fetch
    // console.log(newContact)

    // setNewContact(newContactForm)
    // setSubmit(true)
    console.log(contacts)
  }

  return (
    <form className="form-stack contact-form" onSubmit={formSubmit}>
      <h2>Create Contact</h2>

      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        required
        onChange={handleNewForm}
        value={newContact.firstName}
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        required
        onChange={handleNewForm}
        value={newContact.lastName}
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
