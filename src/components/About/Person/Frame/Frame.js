import React from 'react'
import './Frames.css'
const Frame = ({ frameset, img }) => {
    return (
        <div className="frame-wrapper">
            <div className="frame">
                <img src={frameset} alt='img' />
                <img src={img} alt='img' />
            </div>

        </div>
    )
}

export default Frame