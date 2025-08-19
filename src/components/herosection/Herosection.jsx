import Navbar from "../navbar/Navbar";
import "./Herosection.css";
// import ellipse from "/Ellipse.png";
import phone from "/phone.png";
import overlay from '/overlay.png';
import overlay2 from '/overlay2.png';
const Herosection = () => {
  return (
    <section id="hero">
      <div className="section">
        <div className="container">
          <Navbar />
          <div className="heroContent">
            <h1 className="heading">
              Empowering Your Business with Next-Gen <span>IT Solutions</span>
            </h1>
            <p className="headingPara">
              At Creotix Solution, we craft innovative, scalable, and result-driven digital solutions — from websites to mobile apps — that help startups and enterprises succeed in today’s competitive world.
            </p>
            <div className="buttonDiv">
                <button className="ctaButton">
                  Get a Free Quote
                </button>
                <button className="ctaButton whiteCta">
                  Explore Our Services
                </button>
            </div>
            <div className="phoneBox">
                <img src={phone} alt="" className="phone" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="topLeft">
        <img src={ellipse} alt="" className="ellipse" />
      </div>
      <div className="bottomRight">
        <img src={ellipse} alt="" className="ellipse" />
      </div> */}
      <div className="overlay">
        <img src={overlay} alt="" className="overlayImage" />
      </div>
      <div className="overlay2">
        <img src={overlay2} alt="" className="overlayImage" />
      </div>
    </section>
  );
};

export default Herosection;
