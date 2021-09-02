import React from 'react'
import { useState } from 'react'

//style
import './Login.css'

function Login() {
  const [name, setName] = useState('')
  const [porfilePic, setPorfilePic] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const registerToApp = (e) => {
    e.preventDefault()
  }
  const registerNow = () => {}
  return (
    <div className="login">
      <img
        src="https://www.freepnglogos.com/uploads/linkedin-logo-transparent-png-25.png"
        alt=""
      />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full Name (Require if Registering)"
        />
        <input
          value={porfilePic}
          onChange={(e) => setPorfilePic(e.target.value)}
          type="text"
          placeholder="Porfile pic URL (optional)"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button onClick={registerToApp}>Sign In</button>
      </form>
      <p>
        Not a Member?
        <span onClick={registerNow} className="register_button">
          Register Now
        </span>
      </p>
    </div>
  )
}

export default Login
