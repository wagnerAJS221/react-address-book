import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import ContactsList from './components/ContactsList'
import ContactsAdd from './components/ContactsAdd'
import ContactsView from './components/ContactsView'
import './styles/styles.css'

export default function App() {
  const [contacts, setContacts] = useState([])
  const [submit, setSubmit] = useState(false)

  useEffect(() => {
    fetch('http://localhost:4000/contacts')
      .then((res) => res.json())
      .then((data) => setContacts(data))
    console.log('Gimme the Data?')
  }, [submit])

  const submitFalse = () => {
    setSubmit(false)
  }

  return (
    <>
      <nav>
        <h2>Menu</h2>
        <ul>
          <li>
            <Link to="/" onClick={submitFalse}>
              Contacts List{' '}
            </Link>
          </li>
          <li>
            <Link to="/contacts/add" onClick={submitFalse}>
              Add New Contact
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <ContactsList contacts={contacts} setContacts={setContacts} />
            }
          />
          <Route
            path="/contacts/add"
            element={ContactsView}
            submit={submit}
            setSubmit={setSubmit}
          />
          <Route path="/contacts/:id" element={<ContactsView />} />
        </Routes>
      </main>
    </>
  )
}
