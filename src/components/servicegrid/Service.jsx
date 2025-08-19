import "./Service.css";
import web from "/web.png";
import software from "/software.png";
import digital from "/digital.png";
import mobileapp from "/mobileapp.png";
import uiux from "/uiux.png";
const Service = () => {
  return (
    <section id="service">
      <div className="section">
        <div className="container">
          <div className="parent">
            <div className="div1">
              <h3 className="subHeading">services</h3>
              <h1 className="heading">
                Comprehensive Digital Solutions for Business Growth
              </h1>
            </div>
            <div className="div2">
              <img src={web} alt="" />
              <div className="info">
                <h1 className="serviceTitle">Web Development</h1>
                <p className="servicePara">
                  High-performance, SEO-optimized, and fully responsive websites
                  tailored for your brand to increase visibility and
                  conversions.
                </p>
                <button className="ctaButton">Learn more</button>
              </div>
            </div>
            <div className="div3">
              <div className="info">
                <h1 className="serviceTitle">Software Development </h1>
                <p className="servicePara">
                  Custom software solutions designed to streamline your
                  operations, improve efficiency, and drive business growth
                  using the latest technologies.
                </p>
                <button className="ctaButton">Learn more</button>
              </div>
              <img src={software} alt="" />
            </div>
            <div className="div4">
              <img src={digital} alt="" />
              <div className="info">
                <h1 className="serviceTitle">Digital Marketing </h1>
                <p className="servicePara">
                  Boost your brand’s online presence with our SEO, social media,
                  and content marketing strategies.
                </p>
                <button className="ctaButton">Learn more</button>
              </div>
            </div>
            <div className="div5">
              <div className="info">
                <h1 className="serviceTitle">Mobile App Development</h1>
                <p className="servicePara">
                  User-friendly and feature-rich mobile apps built to enhance
                  customer engagement and business growth.
                </p>
                <button className="ctaButton">Learn more</button>
              </div>
              <img src={mobileapp} alt="" />
            </div>
            <div className="div6">
              <div className="info">
                <h1 className="serviceTitle">UI/UX Design</h1>
                <p className="servicePara">
                  Creative, modern, and user-focused designs that improve
                  customer experience and retention.
                </p>
                <button className="ctaButton">Learn more</button>
              </div>
              <img src={uiux} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
