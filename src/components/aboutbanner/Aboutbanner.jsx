import React from 'react'
import './Aboutbanner.css'
import aboutleft from '/aboutleft.png'
const Aboutbanner = () => {
  return (
    <section id="aboutus">
        <div className="section">
            <div className="container">
                <div className="aboutContent">
                    <h1 className="aboutheading">
                        About Us
                    </h1>
                   
                </div>
            </div>
            <img src={aboutleft} alt="" className='aboutleftimage'/>
        </div>
    </section>
  )
}

export default Aboutbanner