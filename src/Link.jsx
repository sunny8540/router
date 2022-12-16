import React from 'react'
import { NavLink } from 'react-router-dom'
function Link() {
  return (
    <div>
     <ul>
        <li>
            <NavLink to='/'>home</NavLink>
            <NavLink to='/about'>about</NavLink>
            <NavLink to='/contact'>contact</NavLink>
        </li>
     </ul> 
    </div>
  )
}

export default Link;
