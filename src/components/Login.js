import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from "../features/user";
import '../styles/login.css'

function Login() {
    const dispatch = useDispatch()
  return (
    <div className='login'>
      <button onClick={() => {
        dispatch(login({ name: "Obinna", age: 20, email: "obinna2039@gmail.com" }))
        
        }}>Login</button>
        <button onClick={() => {
            dispatch(logout())
        }}>Logout</button>
    </div>
  )
}

export default Login
