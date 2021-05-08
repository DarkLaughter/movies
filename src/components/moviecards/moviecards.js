import React from 'react'
import Container from 'react-bootstrap/Container'
import Moviecard from '../moviecard/moviecard';
import 'bootstrap/dist/css/bootstrap.min.css';

const moviecards = () => {
    return (
       <Container >
           <Moviecard/>
           <Moviecard/>
           <Moviecard/>
       </Container>
    )
}

export default moviecards
