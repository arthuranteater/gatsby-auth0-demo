import React from "react"
import { handleAuthentication } from "../utils/auth"

//old school cb

const Callback = () => {
  handleAuthentication()

  return <p>Loading...</p>
}

export default Callback
