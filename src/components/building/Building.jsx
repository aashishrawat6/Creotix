import React from "react";
import "./Building.css";
import building from "/building.png";
const Building = () => {
  return (
    <section id="building">
      <div className="section">
        <div className="container">
          <div className="bLeft">
            <img src={building} alt="building" className="brightimage"/>
          </div>
          <div className="bRight">
            <div className="buildingContent">
              <h1 className="heading">
                Building Future - Ready Digital Experiences
              </h1>
              <p className="headingPara">
                At Creotix Solution, we believe technology isn’t just about
                writing code - it’s about creating possibilities. We are a
                next-generation IT services and software development company
                based in Delhi, India, delivering web development, mobile app
                development, UI/UX design, and custom software solutions for
                startups, enterprises, and global brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Building;
