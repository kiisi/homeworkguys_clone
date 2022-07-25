import React from 'react'
import './Testimony.css'
import cloud2 from '../../Images/Cloud2.png'
import cloud4 from '../../Images/cloud4.png'
import f6 from '../../Images/F6.png'
import cloud5 from '../../Images/Cloud5.png'
import cloud8 from '../../Images/Cloud8.png'
import f7 from '../../Images/F7.png'
import f15 from '../../Images/F15.png'
const Testimony = () => {
  return (
    <section className="testimony-wrapper">
      <div className="testimony-container">
        <img src={cloud2} alt="cloud2" className="testimony-cloud2" />
        <img src={cloud4} alt="cloud4" className="testimony-cloud4" />
        <div className="testimony">
          <div className="testimony-section">
            <div className="testimony-section-content">
              <div className="testimony-section-content-wrapper">
                <h1>"You guys are the f*cking best. I got an A again. I'm gonna need you next semester, for sure."</h1>
                <p>- a client, whose identity we preserve hidden</p>
              </div>
            </div>
            <div className="testimony-section-image-wrapper">
              <div className="testimony-section-image">
                <img src={f6} alt="f6" className="f6"/>
                <img src={cloud5} alt="cloud5" className="cloud5" />
                <img src={cloud5} alt="cloud5" className="cloud5" />
                <img src={cloud5} alt="cloud5" className="cloud5" />
              </div>
            </div>
          </div>
          <div className="testimony-section testimony-section-2">
            <div className="testimony-section-image-wrapper">
              <div className="testimony-section-image">
                <img src={f7} alt="f7" className="f7"/>
                <img src={cloud8} alt="cloud8" className="cloud8" />
              </div>
            </div>
            <div className="testimony-section-content testimony-section-content-2">
              <div className="testimony-section-content-wrapper testimony-section-content-wrapper-2">
                <h1>"You lifted my GPA from a C to an A with these last two classes you took for me. Thank you"</h1>
                <p>- a second client</p>
              </div>
            </div>
          </div>
          <div className="testimony-content-wrapper">
            <div className="testimony-content">
              <h1 className='mat'>MATH</h1>
              <h1 className="phy">PHYSICS</h1>
              <h1 className="bioch">BIOCHEMISTRY</h1>
              <h1 className="psy">PSYCHOLOGY</h1>
              <h1 className="arc">ARCHITECTURE</h1>
              <h1 className="bio">BIOLOGY</h1>
              <h1 className="acc">ACCOUNTING</h1>
              <h1 className="eco">ECONOMICS</h1>
              <h1 className="che">CHEMISTRY</h1>
              <h1 className="soc">SOCIOLOGY</h1>
              <h1 className="pap">PAPERS</h1>
              <h1 className="sta">STATISTICS</h1>
              <h1 className="ess">ESSAYS</h1>
              <h1 className="mus">MUSIC</h1>
              <h1 className="pro">PROGRAMMING</h1>
            </div>
          </div>
          <div className="testimony-contact-wrapper">
            <div className="testimony-contact">
              <div className="testimony-contact-image-wrapper">
                <img src={f15} alt="f15"/>
              </div>
              <div className="testimony-contact-main-wrapper">
                <div className="testimony-contact-main">
                  <div className="testimony-contact-btn">CONTACT US</div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimony-trust-wrapper">
            <div className="testimony-trust">
              <h1>TRUSTED BY +1,000 CLIENTS</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimony