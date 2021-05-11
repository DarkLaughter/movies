import React from 'react'
import './home.css';


const home = () => {
    return (
        <div className="home">
            <h1>Welcome to Home Theater</h1>
            <p>
                Feeling like a movie night? {'\n'}
            </p>
               <p>
                Maybe you are looking for a specific movie that a friend recommened? {"\n"}
               </p>
               <p>
                Maybe You'd like to save your favorites 
               </p>
            <p>
                <button className="btn">Search</button>
                <button className="btn">Your Queue</button>
                <button className="btn">Your Favorites</button>
            </p>
        </div>

    )
}

export default home
