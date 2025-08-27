import React from "react";
import "./Serve.css";
import s1 from "/s1.svg";
import s2 from "/s2.svg";
import s3 from "/s3.svg";
import s4 from "/s4.svg";
import s5 from "/s5.svg";
const Serve = () => {
  const servedata = [
    {
      img: s1,
      title: "Healthcare & Wellness",
      para: "Building secure, scalable healthcare apps, hospital management systems, and wellness platforms.",
    },
    {
      img: s2,
      title: "E-commerce & Retail",
      para: "Custom eCommerce websites, online marketplaces, and mobile shopping apps with secure payment integrations.",
    },
    {
      img: s3,
      title: "Startups & Enterprises",
      para: "Helping startups launch MVPs and enabling enterprises with enterprise-grade digital transformation.",
    },
    {
      img: s4,
      title: "Logistics & Transport ",
      para: "Fleet management, supply chain software, and real-time tracking solutions for efficiency.",
    },
    {
      img: s5,
      title: "Education & EdTech",
      para: "We offer custom software solutions for manufacturing companies to improve production efficiency and quality control.",
    },
  ];
  return (
    <section id="serve">
      <div className="section">
        <div className="container">
          <div className="serveleft">
            <h3 className="subHeading">Industries We Serve</h3>
            <h1 className="heading">
              Empowering Businesses Across Diverse Sectors
            </h1>
            <p className="headingPara">
              We proudly deliver IT solutions and custom software development
              across a wide range of industries. Our expertise allows us to
              understand unique business needs and create tailored digital
              products that drive measurable results.
            </p>
          </div>
          <div className="serveright">
            <div className="servediv div1">
              <div className="servecard">
                <img src={s1} alt="" />
                <h2>{servedata[0].title}</h2>
                <p>{servedata[0].para}</p>
              </div>
            </div>
            <div className="servediv div2">
              <div className="servecard">
                <img src={s2} alt="" />
                <h2>{servedata[1].title}</h2>
                <p>{servedata[1].para}</p>
              </div>
              <div className="servecard">
                <img src={s3} alt="" />
                <h2>{servedata[2].title}</h2>
                <p>{servedata[2].para}</p>
              </div>
            </div>
            <div className="servediv div3">
              <div className="servecard">
                <img src={s4} alt="" />
                <h2>{servedata[3].title}</h2>
                <p>{servedata[3].para}</p>
              </div>
              <div className="servecard">
                <img src={s5} alt="" />
                <h2>{servedata[4].title}</h2>
                <p>{servedata[4].para}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Serve;
