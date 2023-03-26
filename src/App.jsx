import { useState } from 'react'
import './App.css'
import Card from './Components/Card/Card'
import Form from './Components/Form/Form'

const users = []

const handleOnSubmit = (username, setUsername) => {
  setUsername(username)
}

const getUsers = (newUser) => {
  users.push(newUser)
}

export default function App ({ title }) {
  const [username, setUsername] = useState()
  if (username) getUsers(username)

  return (
    <>
      <h1>{title}</h1>
      <Form handleOnSubmit={handleOnSubmit} setUsername={setUsername} />
      {users && users.map((user, key) => <Card username={user} key={key} />)}
    </>
  )
}
