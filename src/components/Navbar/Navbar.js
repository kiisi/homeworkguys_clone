import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="max-wrapper nav-wrapper">
        <div className="nav-container">
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>SUBMIT A REQUEST</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar