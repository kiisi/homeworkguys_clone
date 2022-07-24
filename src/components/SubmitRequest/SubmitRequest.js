import React from 'react'
import './SubmitRequest.css'

const SubmitRequest = () => {
  return (
    <section className="submit-request-wrapper">
        <div className="submit-request-container">
            <div className="submit-request">
                <div className="submit-request-header">
                  <h1>Submit a request and get an answer ASAP.</h1>
                  <h2>We'll try and contact you within the hour.</h2>
                </div>
                <div className="submit-request-content">
                  <div className="submit-request-input">
                    <input type="text"placeholder="Subject" className="small" required/>
                  </div>
                  <div className="submit-request-input">
                    <textarea type="text"placeholder="Instructions. Please be detailed as possible!" className="big" required/>
                  </div>
                  <div className="submit-request-input">
                    <input type="text"placeholder="Deadline (please include date, time, and timezone)" className="small" required/>
                  </div>
                  <div className="submit-request-input">
                    <input type="email"placeholder="Email" className="small" required/>
                  </div>
                  <div className="submit-request-input">
                    <input type="text"placeholder="Discount Code" className="small" />
                  </div>
                </div>
                <div className="submit-request-btn-wrapper">
                  <div className="submit-request-btn">Send</div>
                </div>
            </div>
            <div className="submit-request-footer">
              <div className="submit-request-footer-upload"><span>Need to upload a file?</span> Use this Google Forms instead.</div>
              <div className="submit-request-footer-contact">Or <span>contact us</span> via Instagram (@homework.guys), Discord (HomeworkGuys#3882), or via WhatsApp at +1 (718) 710-3368.</div>
              <div className="submit-request-footer-email">Email us: info.homework.guys@gmail.com</div>
            </div>
        </div>
    </section>
  )
}

export default SubmitRequest