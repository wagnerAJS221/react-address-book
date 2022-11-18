import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import ContactsList from './components/ContactsList'
import ContactsAdd from './components/ContactsAdd'
import ContactsView from './components/ContactsView'
import './styles/styles.css'

export default function App() {
  const [contacts, setContacts] = useState([])

  //TODO: Load all contacts on useEffect when component first renders
  useEffect(() => {
    fetch('http://localhost:4000/contacts')
      .then((res) => res.json())
      .then((data) => setContacts(data))
    console.log('the Data?')
  }, [])

  return (
    <>
      <nav>
        <h2>Menu</h2>
        <ul>
          <li>
            <Link to="/">Contacts List</Link>
          </li>
          <li>{/* <Link>Add New Contact</Link> */}</li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<ContactsList contacts={contacts} />} />
        </Routes>
      </main>
    </>
  )
}
