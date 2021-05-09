import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container';
import Moviecard from '../moviecard/moviecard';
import 'bootstrap/dist/css/bootstrap.min.css';

const moviecards = () => {
    return (
       <CardGroup style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
           <Moviecard/>
           <Moviecard/>
           <Moviecard/>
           <Moviecard/>
           <Moviecard/>
           <Moviecard/>
       </CardGroup>

    )
}

export default moviecards
