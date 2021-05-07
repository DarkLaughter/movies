import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

const nav = () => {
    return (
        <div className="nav">
      <nav>
        <ul>
        <li>
            <NavLink to="/" >Welcome To Home Theater</NavLink>
        </li>
        <li>
            <NavLink to="/Queque" > Queque </NavLink>
        </li>
        <li>
            <NavLink to="/Search">Search</NavLink>
        </li>
        <li>
            <NavLink to="/favorites">Favorites</NavLink>
        </li>
        </ul>
      </nav>
        </div>
    )
}

export default nav
