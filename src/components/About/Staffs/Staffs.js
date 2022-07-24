import React from 'react'
import staff from '../../Images/OUR STAFF.png'
import Staff from './Staff/Staff'
import './Staffs.css'

const Staffs = () => {
  return (
    <section className="staffs-wrapper">
      <div className="staffs-image-wrapper">
        <div className="staffs-image">
          <img src={staff} alt="staffs" />
        </div>

      </div>
      <div className="staffs-header-wrapper">
        <div className="staffs-header">
          <h1>Meet the dream team.</h1>
          <p>Behind these fake names are real people with real studies that make Homework Guys possible.</p>
        </div>
      </div>

      <Staff />
    </section>
  )
}

export default Staffs