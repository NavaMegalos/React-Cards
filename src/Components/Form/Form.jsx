import { useState } from 'react'
import './Form.css'

export default function Form ({ handleOnSubmit, setUsername }) {
  const [value, setValue] = useState()

  return (
    <form onSubmit={e => e.preventDefault()}>
      <section>
        <input
          type='text'
          placeholder='Github Username..'
          onChange={e => setValue(e.target.value)}
        />
        <input
          type='submit'
          value='Add Card'
          onClick={() => handleOnSubmit(value, setUsername)}
        />
      </section>
    </form>
  )
}
