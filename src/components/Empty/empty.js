import React from 'react'
import Card from 'react-bootstrap/Card'
import './empty.css'

const empty = () => {
    return (
        <div className="empty" >
        <Card
        bg="light"
        // text="secondary"
        style={{ width: '30rem' }}
        className="mb-2"
      >
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title> Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

        </div>
    )
}

export default empty
