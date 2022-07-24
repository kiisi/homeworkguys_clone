import React, { useState } from 'react'
import './MobileNav.css'

const MobileNav = () => {

    const [click, setClick] = useState(false)

    const menuClick = () => {
        setClick(!click)
    }

    return (
        <>
            <nav className="max-wrapper nav-wrapper">
                <div className="mobile-nav-container">
                    <div className="mobile-nav-menuicon" onClick={menuClick}>
                        {click ? <span className="material-icons">close</span> : <span className="material-icons">menu</span>}
                    </div>
                </div>
            </nav>

            <nav className='mobile-nav' style={click ? { display: 'block', animation: 'fadeIn 500ms ease' } : { display: 'none', animation: 'fadeOut 500ms ease' }}>
                <ul>
                    <li><a href={'/'}>Home</a></li>
                    <li><a href={'/us'}>About us</a></li>
                    <li><a href={'/request'}>SUBMIT A REQUEST</a></li>
                </ul>
            </nav>
        </>
    )
}

export default MobileNav