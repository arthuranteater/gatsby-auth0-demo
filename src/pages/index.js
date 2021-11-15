import React from "react"
import { Link } from "gatsby"
import { useAuth0 } from "@auth0/auth0-react"

export default () => {
  const { user, isLoading } = useAuth0()

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Hello {user ? user.name : "Guest"}!</p>
          <Link to="/account">Go to your account</Link>
        </>
      )}
    </>
  )
}
