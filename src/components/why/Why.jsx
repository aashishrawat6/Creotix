import React from "react";
import "./Why.css";
import whyimg from "/whyimg.png";
import one from "/1.png";
import two from "/2.png";
import three from "/3.png";
import four from "/4.png";
const Why = () => {
  const data = [
    {
      id: 1,
      img: one,
      title: "SEO-First Approach for Better Google Ranking",
      para: "Built-in SEO ensures your brand shines and ranks on Google.",
    },
    {
      id: 2,
      img: two,
      title: "Timely Delivery & 24/7 Support",
      para: "On-time delivery, always available support — like a trusted partner.",
    },
    {
      id: 3,
      img: three,
      title: " Custom Solutions That Match Your Business Goals",
      para: "We craft unique solutions designed around your vision and success.",
    },
    {
      id: 4,
      img: four,
      title: "Proven Expertise in IT & Digital Transformation",
      para: "Decades of experience, delivering technology that truly empowers your growth.",
    },
  ];
  return (
    <div id="why">
      <div className="section">
        <div className="container">
          <h1 className="heading">Why Choose Creotix Solution?</h1>
          <div className="content">
            <img src={whyimg} alt="" />

            {data.map((item) => {
              return (
                <div className={`box box${item.id}`} key={item.id}>
                  <div className="imgBox">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="inner">
                    <h2>{item.title}</h2>
                    <p>{item.para}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="ctaButton">Contact us for more details</button>
        </div>
      </div>
    </div>
  );
};

export default Why;
