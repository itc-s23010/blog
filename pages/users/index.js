import Link from 'next/link'
import React from 'react'

const UsersPage = ({ users }) => {
  return (
    <div>
      <h1>All Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <span>{user.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersPage

const getStaticProps = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

    return {
      props: { users }
    }
  } catch (error) {
    console.error('Error fetching user data:', error)
    return {
      props: { users: [] }
    }
  }
}
export { getStaticProps }
