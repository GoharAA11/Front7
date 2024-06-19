import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserList } from './UserList'
import { SignUp } from './SignUp'

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([])

  const handleSignUp = (newUser) => {
    setUsers([...users, newUser]);
  };
  return (
    <>
      <UserList users={users} />
      <SignUp onSignup={handleSignUp} users={users} />


    </>
  )
}

export default App
