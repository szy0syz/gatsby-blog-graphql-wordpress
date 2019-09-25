import React from "react"
import Header from '../components/header';

import { Link } from 'gatsby'

const IndexPage = () => (
  <div>
    <Header siteTitle={'jerry'}/>
    <h1>First Gastby Project</h1>
    <Link to='/test/'>Link to test</Link>
    <img src="https://media.timeout.com/images/105170238/630/472/image.jpg" alt="gatsby"/>
  </div>
)

export default IndexPage
