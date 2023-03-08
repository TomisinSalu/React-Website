import React from 'react'
import '../styling/Navbar.scss';
import logo from '../images/TS-logo.png'
import {Link} from "react-router-dom";


export function Navbar() {
  return (
    <div className="Navbar">
        <ul>
            <li> <Link to="/">HOME</Link></li>
            <li> <Link to="/about">ABOUT</Link></li>
            <li> <Link to="/"><img src={logo} alt="" class="logo"/></Link></li>
            <li> <Link to="/portfolio">WORK</Link></li>
            <li> <Link to="/contact">COLLAB</Link></li>
        </ul>
    </div>
  )
}

export default Navbar