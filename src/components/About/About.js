import React from 'react'
import './About.css'
import mission from '../Images/oUR mISSION.png'
import ethics from '../Images/oUR eTHICS rULEBOOK.png'
import whoweare from '../Images/WHO WE ARE.png'
import Person from './Person/Person'
const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <div className="about-mission-wrapper">
          <div className="about-mission">
            <div className="about-mission-image">
              <img src={mission} alt="mission" />
            </div>
            <div className="about-mission-caption"><p>To be the best at homework. As simple as that.</p></div>
          </div>
        </div>
        <div className="about-ethics-wrapper">
          <div className="about-ethics">
            <div className="about-ethics-image">
              <img src={ethics} alt='ethics' />
            </div>
            <div className="about-ethics-content-wrapper">
              <div className="about-ethics-content">
                <div className="about-ethics-content-header"><p>We manage our business responsibly. That means that:</p></div>
                <div className="about-ethics-content-main">
                  <ol>
                    <li>We don't take jobs from people that are 15 or younger.</li>
                    <li>We don't poop where we eat. That is, we don't provide our services in our home country.</li>
                    <li>We don't risk anyone's life. We do not help out Medicine students or Civil Engineering students in structure verification calculations.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-who">
          <div className="about-who-image">
            <img src={whoweare} alt="who we are"/>
          </div>
        </div>

        <Person/>
      </div>
    </div>
  )
}

export default About