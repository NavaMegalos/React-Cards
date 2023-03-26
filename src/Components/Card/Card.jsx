import { useEffect, useState } from 'react'
import './Card.css'

const GITHUB_URL_API_ENDPOINT = 'https://api.github.com/users/'

export default function Card ({ username }) {
  const [user, setUser] = useState()
  useEffect(() => {
    fetch(`${GITHUB_URL_API_ENDPOINT}${username}`)
      .then((response) => response.json())
      .then(data => {
        setUser(data)
      })
  }, [])

  return (
    <div className='card-user'>
      <section className='content'>
        <img
          src={user && user.avatar_url}
          alt={`profile image of user: ${user && user.username}`}
          width='150px'
        />
        <h2>{user && user.login}</h2>
        <hr />
        <h3>{user && user.type}</h3>
      </section>
    </div>
  )
}
