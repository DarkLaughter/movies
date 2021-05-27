import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Moviecard from '../moviecard/moviecard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Empty from './components/Empty/empty'

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
