import React from 'react'
import staff from '../../Images/OUR STAFF.png'
import Staff from './Staff/Staff'
import './Staffs.css'
import s1 from '../../Images/s1.jpg'
import s2 from '../../Images/s2.jpg'
import s3 from '../../Images/s3.jpg'
import s4 from '../../Images/s4.jpg'
import s5 from '../../Images/s5.jpg'
import s6 from '../../Images/s6.jpg'
import s7 from '../../Images/s7.jpg'
import s8 from '../../Images/s8.jpg'
import s9 from '../../Images/s9.jpg'
import s10 from '../../Images/s10.jpg'
import s11 from '../../Images/s11.jpg'
import s12 from '../../Images/s12.jpg'
import s13 from '../../Images/s13.jpg'
import s14 from '../../Images/s14.jpg'
import s15 from '../../Images/s15.jpg'
import s16 from '../../Images/s16.jpg'
import s17 from '../../Images/s17.jpg'
import s18 from '../../Images/s18.jpg'
import s19 from '../../Images/s19.jpg'
import Staff3 from './Staff/Staff3'
const Staffs = () => {
  return (
    <section className="staffs-wrapper">
        <div className="staffs-image-wrapper">
            <img src={staff} alt="staffs"/>
        </div>
        <div className="staffs-header-wrapper">
            <div className="staffs-header">
                <h1>Meet the dream team.</h1>
                <p>Behind these fake names are real people with real studies that make Homework Guys possible.</p>
            </div>
        </div>
        <Staff img={[s1, s2, s3, s4]} h1={["Marc Anthony", "Arctic Monkeys", "Johnny Depp","Alexei Kovalev"]} p={["Software Engineering","Bioengineering","Social Studies","Chemical Egineering"]}/>
        <Staff img={[s5, s6, s7, s8]} h1={["Ashton Robertson", "Indy Samberg", "Mary Douglas","Tom Cruise"]} p={["Processes Engineering","Social Studies","Marketing","Software Engineering"]}/>
        <Staff img={[s9, s10, s11, s12]} h1={["Norma Zimmer", "Donald Glover", "Joseph Carter","Jey Mammon"]} p={["Chemical Engineering","Processes Engineering","English","Biochemistry"]}/>
        <Staff img={[s13, s14, s15, s16]} h1={["Eloise Ginevre", "Norman Tebbit", "Anarchist Botanist","Peter Steele"]} p={["Human Resources","Architecture","Bioengineering","Economic Sciences"]}/>
        <Staff3 img={[s17, s18, s19]} h1={["Jenry Ford", "Resistance-Inductance", "Lionel Scaloni"]} p={["Processes Engineering","Accounting","Bioengineering"]}/>
    </section>
  )
}

export default Staffs