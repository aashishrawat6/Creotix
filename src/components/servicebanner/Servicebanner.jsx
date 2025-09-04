import React from 'react'
import './Servicebanner.css'
import aboutleft from '/aboutleft.png'
const Servicebanner = () => {
  return (
     <section id="servicepage">
            <div className="section">
                <div className="container">
                    <div className="aboutContent">
                        <h1 className="aboutheading">
                            Services
                        </h1>
                       
                    </div>
                </div>
                <img src={aboutleft} alt="" className='aboutleftimage'/>
            </div>
        </section>
  )
}

export default Servicebanner