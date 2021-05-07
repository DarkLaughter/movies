import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

const nav = () => {
    return (
        <div>
      <nav>
        <ul>
        <li>
            <NavLink to="/" >Home</NavLink>
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
