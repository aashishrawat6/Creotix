import React from "react";
import "./Empower.css";
import e1 from "/e1.png";
import e2 from "/e2.png";
import e3 from "/e3.png";
import e4 from "/e4.png";
import e5 from "/e5.png";
const Empower = () => {
  return (
    <section id="empower">
      <div className="section">
        <div className="container">
          <h1 className="heading">
            Empowering Your Business with End-to-End <span>IT Solutions</span>
          </h1>
          <p className="headingPara">
            At Creotix Solution, we deliver a wide range of IT services and
            software development solutions designed to help startups, SMEs, and
            enterprises grow faster, perform better, and stay ahead of the
            competition.
          </p>
          <div className="empowerContent">
            {/* first line */}
            <div className="econtent">
              <div className="ebox">
                <div className="eboximg">
                  <img src={e1} alt="" />
                </div>
                <h1 className="etitle">Website Development</h1>
                <p className="epara">
                  We create high-performance, SEO-optimized, and fully
                  responsive websites tailored to your business goals. From
                  corporate sites to eCommerce platforms, our websites are
                  designed to increase visibility, engagement, and conversions.
                </p>
                <button className="ctaButton whiteCta">Learn More</button>
              </div>
              <div className="ebox">
                <div className="eboximg">
                  <img src={e2} alt="" />
                </div>
                <h1 className="etitle">Custom Software Development</h1>
                <p className="epara">
                  Our experts develop tailored ERP, CRM, and enterprise software
                  solutions to streamline operations, enhance productivity, and
                  scale your business. Whether you need a SaaS product or a
                  business automation tool, we’ve got you covered.
                </p>
                <button className="ctaButton whiteCta">Learn More</button>
              </div>
            </div>
            {/* second line */}
            <div className="econtent secontent">
              <div className="ebox">
                <div className="sebox">
                  <h1 className="etitle">Website Development</h1>
                  <p className="epara">
                    We create high-performance, SEO-optimized, and fully
                    responsive websites tailored to your business goals. From
                    corporate sites to eCommerce platforms, our websites are
                    designed to increase visibility, engagement, and
                    conversions.
                  </p>
                  <button className="ctaButton whiteCta">Learn More</button>
                </div>
                <div className="eboximg">
                  <img src={e3} alt="" />
                </div>
              </div>
            </div>
            {/* third line */}
            <div className="econtent">
              <div className="ebox">
                <div className="eboximg">
                  <img src={e4} alt="" />
                </div>
                <h1 className="etitle">Mobile App Development</h1>
                <p className="epara">
                  Our team builds user-friendly, feature-rich, and scalable
                  mobile applications for Android, iOS, and cross-platform. We
                  use the latest technologies like Flutter & React Native to
                  deliver apps that boost customer engagement and business
                  growth.
                </p>
                <button className="ctaButton whiteCta">Learn More</button>
              </div>
              <div className="ebox">
                <div className="eboximg">
                  <img src={e5} alt="" />
                </div>
                <h1 className="etitle">UI/UX Design</h1>
                <p className="epara">
                  We design modern, creative, and user-focused interfaces that
                  deliver seamless experiences across websites and apps. Using
                  tools like Figma and Adobe XD, we ensure designs that not only
                  look great but also improve retention and conversions.
                </p>
                <button className="ctaButton whiteCta">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empower;
