import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/3.jpg"
const Navbar = () => {
  return (
    <nav>
        <div><img src={logo} alt="" /></div>
        <ul>
            <li><NavLink className={({isActive})=>(isActive?"active":"inactive")} to="/">Home</NavLink></li>
            <li><NavLink to="/category">Category</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar