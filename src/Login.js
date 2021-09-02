import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { login } from './features/counter/userSlice'
import { auth } from './firebase'

//style
import './Login.css'

function Login() {
  const [name, setName] = useState('')
  const [porfilePic, setPorfilePic] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const registerToApp = (e) => {
    e.preventDefault()
  }
  const registerNow = () => {
    if (!name) {
      return alert('Please enter the full name')
    }
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: name,
          photoURL: porfilePic,
        })
        .then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              phoyoUrl: porfilePic,
            }),
          )
        })
    })
  }
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
