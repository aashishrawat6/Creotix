import React from 'react'
import './Contactbanner.css'
import aboutleft from '/aboutleft.png'

const Contactbanner = () => {
  return (
    <section id="contactpage">
                <div className="section">
                    <div className="container">
                        <div className="aboutContent">
                            <h1 className="aboutheading">
                                contact us
                            </h1>
                           
                        </div>
                    </div>
                    <img src={aboutleft} alt="" className='aboutleftimage'/>
                </div>
            </section>
  )
}

export default Contactbanner