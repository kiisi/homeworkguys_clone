import React from 'react'
import Frame from './Frame/Frame'
import frame from '../../Images/frame.png'
import img1 from '../../Images/howardhughes_6UBPzqc.jpg'
import img2 from '../../Images/450132218_edited.jpg'
import img3 from '../../Images/mw121010_edited.jpg'
import img4 from '../../Images/Dante Haversham_edited.jpg'
import './Person.css'

const Person = () => {
    return (
        <section className="person-wrapper">
            <div className="person">
                <div className="person-image">
                    <Frame frameset={frame} img={img1} />

                </div>
                <div className="person-details-wrapper">
                    <div className="person-details">
                        <h1>Howard Jacob Astor</h1>
                        <h2>Partner. Operations.</h2>
                    </div>
                </div>
            </div>
            <div className="person person-2">
                <div className="person-image">
                    <Frame frameset={frame} img={img2} />

                </div>
                <div className="person-details-wrapper">
                    <div className="person-details person-details-2">
                        <h1>Will D. G. Dyson</h1>
                        <h2>Partner. Sales and Marketing.</h2>
                    </div>
                </div>
            </div>
            <div className="person person-3">
                <div className="person-image">
                    <Frame frameset={frame} img={img3} />

                </div>
                <div className="person-details-wrapper">
                    <div className="person-details person-details-3">
                        <h1>Nigel Lawson</h1>
                        <h2>Partner. Sales and Marketing.</h2>
                    </div>
                </div>
            </div>
            <div className="person person-4">
                <div className="person-image">
                    <Frame frameset={frame} img={img4} />

                </div>
                <div className="person-details-wrapper">
                    <div className="person-details person-details-4">
                        <h1>Dante Haversham</h1>
                        <h2>Partner. Operations.</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Person