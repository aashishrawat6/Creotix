import React from "react";
import "./Approach.css";
import approach1 from "/approach1.png";
import approach2 from "/approach2.png";
import approach3 from "/approach3.png";
import approach4 from "/approach4.png";
import approach5 from "/approach5.png";
import approach6 from "/approach6.png";

const data = [approach1, approach2, approach3, approach4, approach5, approach6];
const Approach = () => {
  return (
    <div id="approach">
      <div className="section">
        <div className="container">
          <h3 className="subHeading">our work process</h3>
          <h1 className="heading">Our Step-by-Step Approach</h1>
          <div className="slide">
            {data.map((item) => {
              return (
                <div className="slideBox" key={item.id}>
                  <img src={item} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
