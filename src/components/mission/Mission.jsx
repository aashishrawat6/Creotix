import React from 'react'
import './Mission.css'
import mission from '/mission.png'
import vision from '/vision.png'
const Mission = () => {
  return (
    <section id="mission">
        <div className="section">
            <div className="container">
                <div className="missionContent">
                    <div className="mImage">
                        <img src={mission} alt="mission" />
                    </div>
                    <div className="mContent">
                        <h1 className="heading">
                            Our Mission
                        </h1>
                        <p className="headingPara">
                        Our mission is to empower businesses with innovative digital solutions that enhance efficiency, boost performance, and improve customer experience.
                        </p>
                        <p className="headingPara">
                        We aim to be more than a service provider — we strive to become a strategic technology partner that helps clients thrive in today’s digital-first world.
                        </p>
                    </div>
                </div>
                <div className="visionContent">
                    <div className="vContent">
                        <h1 className="heading">
                            Our Vision
                        </h1>
                        <p className="headingPara">
                        Our vision is to become a globally trusted IT company, recognized for turning ideas into intelligent, scalable, and user-focused digital products.
                        </p>
                        <p className="headingPara">
                        Through continuous innovation, excellence, and long-term partnerships, we want to create digital solutions that leave a real, measurable impact.
                        </p>
                    </div>
                    <div className="vImage">
                        <img src={vision} alt="vision" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Mission