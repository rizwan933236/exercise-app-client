import React from 'react'
import {Link} from 'react-router-dom'
import './Navigation.css'

export default function Navigation({login}) {
  return (
    <>
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        {
          !login ?
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
          :
          <>
            <Link to="/AddExcercise">Add Excercise</Link>
            <Link to="/GetExcercise">Get Excercise</Link>
            <Link onClick={() => {
              localStorage.clear("Token")
              window.location.replace("/")
            }}>Logout</Link>
          </>
        }
      </div>
    </nav>
    <br />
    <br />
    </>
  )
}
