import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from "../features/user";

function Login() {
    const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => {
        dispatch(login({ name: "Obinna", age: 20, email: "obinna2039@gmail.com" }))
        
        }}>Login Page</button>
    </div>
  )
}

export default Login
