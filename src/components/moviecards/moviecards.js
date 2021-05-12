import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Moviecard from '../moviecard/moviecard';
import 'bootstrap/dist/css/bootstrap.min.css';

const moviecards = () => {
    return (
       <CardGroup style={{display: 'flex', flexDirection: 'row'}}>
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
