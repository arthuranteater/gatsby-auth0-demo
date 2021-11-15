// src/pages/account.js
import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
// old school import without hook
// import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
// new school with hook
import { useAuth0 } from "@auth0/auth0-react"

// import { Link } from "gatsby"

const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>

//using hook method

const Home = () => {
  const { user, logout } = useAuth0()
  return (
    <>
      <nav>
        <Link to="/account/">Home</Link>
        <Link to="/account/settings/">Settings</Link>
        <Link to="/account/billing/">Billing</Link>
        <a
          href="#logout"
          onClick={e => {
            logout({ returnTo: window.location.origin })
            e.preventDefault()
          }}
        >
          Log Out
        </a>
      </nav>
      <div>
        <p>Hi, {user.name}!</p>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>

      <Routes>
        <Route path="billing" element={<Billing />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </>
  )
}

//old school passing down user

// const Home = ({ user }) => {
//     console.log("user", user)
//     return <p>Hi, {user.name ? user.name : "friend"}!</p>
//   }

//getting isAuthenticated and login thru utils
// const Account = () => {
//     if (!isAuthenticated()) {
//       login()
//       return <p>Redirecting to login...</p>
//     }

//

const Account = () => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading ...</div>
  }

  if (!isAuthenticated) {
    loginWithRedirect()
    return <div>Redirecting to Login</div>
  }

  // getting user from utils
  // const user = getProfile()

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="account/*"
          element={
            <Home
            // user being passed down
            //   user={user}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Account
