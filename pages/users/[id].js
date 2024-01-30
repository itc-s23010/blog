import React from 'react'

const UserDetailsPage = ({ user, todos }) => {
  return (
    <div>
      <h1>User Details - {user.name}</h1>
      <p>Email: {user.email}</p>
      <h2>ToDo List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? 'Completed' : 'Not Completed'}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserDetailsPage

const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  const paths = users.map(user => ({
    params: { id: `${user.id}` }
  }))

  return {
    paths,
    fallback: false
  }
}
export { getStaticPaths }

const getStaticProps = async ({ params }) => {
  try {
    const [userRes, todosRes] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      fetch(`https://jsonplaceholder.typicode.com/todos?userId=${params.id}`)
    ])

    const user = await userRes.json()
    const todos = await todosRes.json()

    return {
      props: {
        user,
        todos
      }
    }
  } catch (error) {
    console.error('Error fetching user or todos data:', error)
    return {
      props: {
        user: {},
        todos: []
      }
    }
  }
}
export { getStaticProps }
