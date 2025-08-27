import React from "react";
import "./Who.css";
import whoimg from '/whoimg.png'
const Who = () => {
  return (
    <section id="who">
      <div className="section">
        <div className="container">
          <div className="whoLeft">
            <div className="whoContent">
              <h3 className="subHeading">Who we are</h3>
              <h1 className="heading">
                Innovators. Strategists. Problem-Solvers.
              </h1>
              <p className="headingPara">
                At Creotix Solution, we’re more than just developers and
                designers — we are digital architects who combine creativity,
                strategy, and technology to help businesses grow.
              </p>
              <p className="headingPara">
                Every project we take on is designed to perform seamlessly,
                scale effortlessly, and accelerate business growth. For us, each
                project is an opportunity to innovate, simplify, and deliver
                measurable impact.
              </p>
            </div>
          </div>
          <div className="whoRight">
            <img src={whoimg} alt="" className="whoImage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;
