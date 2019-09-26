import React from "react"
import { Card, Button } from "react-bootstrap"

const Post = ({cover, title, desc}) => (
  <Card >
    <Card.Img variant="top" src={cover} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
)

export default Post
