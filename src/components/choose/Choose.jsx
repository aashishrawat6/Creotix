import "./Choose.css";
import chooseimage from "/chooseimage.jpg";
import shape from "/shape.png";
const Choose = () => {
  return (
    <section id="choose">
      <div className="section">
        <div className="container">
          <div className="leftSide">
            <img src={chooseimage} alt="" />z
          </div>
          <div className="rightSide">
            <div className="head">
              <h3 className="subHeading">Why Choose Us</h3>
              <h1 className="heading">
                We Deliver More Than Just Code - We Deliver Results
              </h1>
              <p className="headingPara">
                At Creotix, we don’t just build digital products — we build digital success. Here’s why businesses choose to work with us:
              </p>
            </div>
            <div className="body">
                <div className="factor">
                    <h3 className="factorTitle">
                        Customized, Scalable Solutions
                    </h3>
                    <p className="factorPara">
                        We craft tailored web, app, and design solutions that align with your unique business goals and scale with your growth.
                    </p>
                </div>
                <div className="factor">
                    <h3 className="factorTitle">
                        Expert Team & Agile Workflow
                    </h3>
                    <p className="factorPara">
                       Our skilled developers and designers follow an agile, efficient process to deliver high-quality results—fast and flexibly.
                    </p>
                </div>
                <div className="factor">
                    <h3 className="factorTitle">
                       Quality, Security & Performance
                    </h3>
                    <p className="factorPara">
                       We prioritize performance, clean code, and robust security to ensure your digital product is reliable and future-ready.
                    </p>
                </div>
                <div className="factor">
                    <h3 className="factorTitle">
                        Commitment & Communication
                    </h3>
                    <p className="factorPara">
                       We’re client-focused, deadline-driven, and always transparent—ensuring smooth collaboration from start to finish.
                    </p>
                </div>
            </div>
          </div>
          <img src={shape} alt="" className="shape"/>
        </div>
      </div>
    </section>
  );
};

export default Choose;
