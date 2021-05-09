
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import React from 'react'

const moviecard = () => {
    return (
        <Card border="light" style={{ margin: '20px', padding: '20px', minWidth: "14rem", maxWidth: "18rem"}}>
            <Card.Img 
                src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" 
                />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default moviecard
