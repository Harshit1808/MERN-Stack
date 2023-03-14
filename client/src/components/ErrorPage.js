import React from 'react'
import { NavLink } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <>
    <div id="notfound">
   <div className="notfound">
   <div>
    <h1>404 not found</h1>
   </div>
   <h2>We are sorry page not found!</h2>
   </div>
   <NavLink to="/" className="home-back">Back to home page</NavLink>
    </div>
    </>
  )
}

export default ErrorPage