import React from 'react'
import './home.css';


const home = (props) => {

    const relay = (location) => {
        props.history.push(`/${location}`)
    }

    return (
        <div className="home">
            <h1>Welcome to Home Theater</h1>
            <p>
                Feeling like a movie night? {'\n'}
            </p>
               <p>
                Maybe you are looking for a specific movie that a friend recommened?
               </p>
               <p><button className="btn" onClick={() => relay('search')} >Search</button></p>
               <p>
                Maybe You'd like to save your favorites 
               </p>
               <p><button className="btn" onClick={() => relay('favorites')} >Your Favorites</button></p>
                <p>Or look at the list you've saved that you wanted to check out</p>
            <p>
                <button className="btn" onClick={() => relay('favorites')} >Your Favorites</button>
            </p>
        </div>

    )
}

export default home
