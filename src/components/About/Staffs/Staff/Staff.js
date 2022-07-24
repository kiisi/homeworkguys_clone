import React from 'react'
import './Staff.css'
import { staffData } from './StaffData'
const Staff = ({ img, h1, p }) => {
    return (
        <div className="staff-container">
            {
                staffData.map((data, id) => (
                    <div className="staff" key={id}>
                        <div className="staff-avatar-wrapper">
                            <div className="staff-avatar">
                                <img src={data.img} alt={data.h1} />
                            </div>
                        </div>
                        <div className="staff-caption">
                            <p>{data.h1}</p>
                            <p>{data.p}</p>
                        </div>
                    </div>
                ))
            }


        </div>
    )
}

export default Staff