import React from "react";
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';
import "./Count.css";

const Count = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <section id="count" ref={ref}>
      <div className="section">
        <div className="container">
          <div className="countBox">
            <h1>
              {inView ? (
                <CountUp end={50} duration={3} suffix="+" />
              ) : (
                '0+'
              )}
            </h1>
            <p>Projects Delivered</p>
          </div>
          <div className="countBox">
            <h1>
              {inView ? (
                <CountUp end={20} duration={3} suffix="+" />
              ) : (
                '0+'
              )}
            </h1>
            <p>Clients Across the Globe</p>
          </div>
          <div className="countBox">
            <h1>
              {inView ? (
                <CountUp end={5} duration={3} suffix="+" />
              ) : (
                '0+'
              )}
            </h1>
            <p>Industries Served</p>
          </div>
          <div className="countBox">
            <h1>
              {inView ? (
                <CountUp end={4} duration={3} suffix="+" />
              ) : (
                '0+'
              )}
            </h1>
            <p>Years of Experience in IT Solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Count;
