import React from "react"
import { navigate } from "gatsby"

const About = () => (
  <div>
    <h1>This is a About page!</h1>
    <button onClick={() => navigate("/")}>Navigate to home</button>
  </div>
)

export default About
