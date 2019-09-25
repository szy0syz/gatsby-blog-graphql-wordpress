import React from "react"
import { navigate } from "gatsby"

const Test = () => (
  <div>
    <h1>This is a test page!</h1>
    <button onClick={() => navigate("/")}>Navigate to home</button>
  </div>
)

export default Test
