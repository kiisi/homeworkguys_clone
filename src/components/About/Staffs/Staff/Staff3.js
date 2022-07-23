import React from 'react'
import './Staff.css'

const Staff = ({ img, h1, p }) => {
    return (
        <div className="staff-container">
            <div className="staff">
                <div className="staff-avatar-wrapper">
                    <div className="staff-avatar">
                        <img src={img[0]} alt="img" />
                    </div>
                </div>
                <div className="staff-caption">
                    <p>{h1[0]}</p>
                    <p>{p[0]}</p>
                </div>
            </div>
            <div className="staff">
                <div className="staff-avatar-wrapper">
                    <div className="staff-avatar">
                        <img src={img[1]} alt="img" />
                    </div>
                </div>
                <div className="staff-caption">
                    <p>{h1[1]}</p>
                    <p>{p[1]}</p>
                </div>
            </div>
            <div className="staff">
                <div className="staff-avatar-wrapper">
                    <div className="staff-avatar">
                        <img src={img[2]} alt="img" />
                    </div>
                </div>
                <div className="staff-caption">
                    <p>{h1[2]}</p>
                    <p>{p[2]}</p>
                </div>
            </div>
        </div>
    )
}

export default Staff