import React from 'react'
import './Chats.css'
import flower from '../../Images/aF19.png' 

const Chats = () => {
  return (
    <section className="chats-wrapper">
        <div className="chats-container">
            <img src={flower} alt="flower" className="flower flower-1"/>
            <img src={flower} alt="flower" className="flower flower-2"/>
            <img src={flower} alt="flower" className="flower flower-3"/>
            <img src={flower} alt="flower" className="flower flower-4"/>
        </div>

    </section>
  )
}

export default Chats