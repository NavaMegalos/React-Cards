import { useState } from 'react'
import './App.css'
import Form from './Components/Form/Form'

const handleOnSubmit = (username, setUsername) => {
  setUsername(username)
}

export default function App (props) {
  const [username, setUsername] = useState()

  return (
    <>
      <h1>{props.title}</h1>
      <Form handleOnSubmit={handleOnSubmit} setUsername={setUsername} />
      {username && <p>The user name is {username} </p>}
    </>
  )
}
