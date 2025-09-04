import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Approach.css";

import approach1 from "/approach1.png";
import approach2 from "/approach2.png";
import approach3 from "/approach3.png";
import approach4 from "/approach4.png";
import approach5 from "/approach5.png";
import approach6 from "/approach6.png";

gsap.registerPlugin(ScrollTrigger);

const data = [approach1, approach2, approach3, approach4, approach5, approach6];

const Approach = () => {
  const sectionRef = useRef(null);
  const slideRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".slideBox");

      const container = sectionRef.current;
      const slideTrack = slideRef.current;

      const totalScrollWidth = slideTrack.scrollWidth;
      const viewportWidth = container.offsetWidth;
      const totalScrollDistance = totalScrollWidth - viewportWidth;
      // const containerWidth = container.clientWidth;
      // const totalScrollDistance = totalScrollWidth - containerWidth;

      // Left → Right (positive x movement)
      gsap.to(slideTrack, {
        x: -totalScrollDistance,     // 👈 instead of -totalScrollDistance
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top 10%",
          end: () => `+=${totalScrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (slides.length - 1),
            duration: 0.5,
            ease: "power1.inOut",
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
    <section id="approach" ref={sectionRef} className="approach-section">
      <div className="section">
        <div className="container">

        <h3 className="subHeading">our work process</h3>
        <h1 className="heading">Our Step-by-Step Approach</h1>

        <div className="slide" ref={slideRef}>
          {data.map((item, index) => (
            <div className="slideBox" key={index}>
              <img src={item} alt={`Approach ${index + 1}`} />
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Approach;
