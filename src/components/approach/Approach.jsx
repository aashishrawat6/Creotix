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
      const slideTrack = slideRef.current;
      const slides = gsap.utils.toArray(".slideBox");

      let animation = null;

      // ✅ Function to calculate scroll amount dynamically
      const getScrollAmount = () => {
        const section = sectionRef.current;
        const track = slideRef.current;

        const containerStyles = getComputedStyle(section.querySelector(".container"));
        const containerPadding =
          parseFloat(containerStyles.paddingLeft) +
          parseFloat(containerStyles.paddingRight);

        const viewportWidth = window.innerWidth;
        const containerWidth = Math.min(section.offsetWidth, 1600); // respect max-width
        const availableWidth = containerWidth - containerPadding;

        const totalScrollWidth = track.scrollWidth;
        const scrollAmount = totalScrollWidth - availableWidth;

        return scrollAmount > 0 ? scrollAmount : 0;
      };

      const createAnimation = () => {
        if (animation?.scrollTrigger) animation.scrollTrigger.kill();

        animation = gsap.to(slideTrack, {
          x: () => -getScrollAmount(),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 20%",
            end: () => `+=${getScrollAmount()}`, // ✅ dynamic end value
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true, // ✅ ensures recalculation
            snap: {
              snapTo: 1 / (slides.length - 1), // ✅ snap per slide
              duration: 0.5,
              ease: "power1.inOut",
            },
          },
        });
      };

      createAnimation();

      window.addEventListener("resize", () => {
        ScrollTrigger.refresh(); // ✅ forces recalculation on resize
      });

      return () => {
        if (animation?.scrollTrigger) animation.scrollTrigger.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
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
  );
};

export default Approach;
