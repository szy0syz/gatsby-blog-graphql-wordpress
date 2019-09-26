import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Post from "../components/Post"
import { Container } from "react-bootstrap"

const IndexPage = () => (
  <div>
    <Header title={"Jerry-Blog"} />
    <Container>
      <div className="row justify-content-md-center">
        <div className="col-xs-6">
          <Post
            cover={
              "https://media.timeout.com/images/105170238/630/472/image.jpg"
            }
            title={"First Gastby Project"}
          />
        </div>
      </div>
    </Container>
    <Footer />
  </div>
)

export default IndexPage
