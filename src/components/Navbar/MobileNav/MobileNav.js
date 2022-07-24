import React, {useState} from 'react'
import './MobileNav.css'

const MobileNav = () => {

    const [click, setClick] = useState(false)

    const menuClick = () =>{
        setClick(!click)
    }

    return (
        <>
        <nav className="max-wrapper nav-wrapper">
            <div className="mobile-nav-container">
                <div className="mobile-nav-menuicon"onClick={menuClick}>
                    {click ?<span className="material-icons">close</span> :<span className="material-icons">menu</span>}
                </div>
            </div>
        </nav>

        </>
    )
}

export default MobileNav