import React from "react";
import "./Values.css";
import v1 from "/v1.svg"
import v2 from "/v2.svg"
import v3 from "/v3.svg"
import v4 from "/v4.svg"
const Values = () => {
    const data =[
        {
            id:1,
            img:v1,
            title:"Innovation First",
            para:"We constantly explore emerging technologies, creative ideas, and smarter approaches to deliver solutions that keep our clients ahead of the competition.",
        },
        {
            id:2,
            img:v2,
            title:"Client Success",
            para:"For us, success isn’t just about building software, it’s about fueling your business growth. When you grow, we grow.",
        },
        {
            id:3,
            img:v3,
            title:"Transparency & Trust",
            para:"We believe in clear communication, honesty, and reliability, ensuring partnerships built on mutual trust.",
        },
        {
            id:4,
            img:v4,
            title:"Excellence in Delivery",
            para:"Every project we take is delivered with precision, quality, and a commitment to exceed expectations — no compromises.",
        },
    ]
  return (
    <section id="values">
      <div className="section">
        <div className="container">
          <h3 className="subHeading">Our Core Values</h3>
          <h1 className="heading">The Principles That Drive Us Forward</h1>

          <div className="valuebox">
            {data.map((value) => {
                return(
                    <div className="valuecard" key={value.id}>
                        <div className="valueimg">
                            <img src={value.img} alt="" />
                        </div>
                        <div className="valueinner">
                            <h2>{value.title}</h2>
                            <p>{value.para}</p>
                        </div>
                    </div>
                )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
;
