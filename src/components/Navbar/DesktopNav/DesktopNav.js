import React from 'react'
import './DesktopNav.css'
const DesktopNav = () => {
    return (
        <nav className="max-wrapper nav-wrapper">
            <div className="nav-container">
                <div className="nav-items">
                    <ul>
                        <li><a href={'/'}>Home</a></li>
                        <li><a href={'/us'}>About us</a></li>
                        <li><a href={'/request'}>SUBMIT A REQUEST</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default DesktopNav