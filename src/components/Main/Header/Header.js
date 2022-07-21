import React from 'react'
import './Header.css'
import cloud2 from '../../Images/Cloud2.png'
import cloud4 from '../../Images/cloud4.png'
import cloud0 from '../../Images/Cloud2.png'
import cloud1 from '../../Images/cloud4.png'
import f10 from '../../Images/F10.png'
import dice from '../../Images/dice.png'

const Header = () => {
  return (
    <header className='header-wrapper'>
      <div className="header-container">
        <img src={cloud2} alt="cloud2" className="header-cloud2" />
        <img src={cloud4} alt="cloud4" className="header-cloud4" />
        <img src={cloud0} alt="cloud0" className="header-cloud0" />
        <img src={cloud1} alt="cloud1" className="header-cloud1" />
        <img src={dice} alt="dice" className="header-dice" />
        <img src={f10} alt="f10" className="f10" />
        <div className="header-content-wrapper">
          <div className="header-content">
            <h1>Have an A up your sleeve</h1>
            <p>Professional homework-doing and exam-taking services</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header