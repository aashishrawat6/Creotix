import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import "./Nopage.css";

const Nopage = () => {
  const headingRef = useRef(null);
  const subTextRef = useRef(null);
  const buttonRef = useRef(null);
  const contentRef = useRef(null); // ✅ animate only content, not full container

  useEffect(() => {
    gsap.set([headingRef.current, subTextRef.current, buttonRef.current], {
      opacity: 0,
      y: 20,
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(headingRef.current, { opacity: 1, y: 0, duration: 0.8 })
      .to(subTextRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
      .to(buttonRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.3");

    // ✅ Floating animation on content only (not container)
    gsap.to(contentRef.current, {
      y: 10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="nopage-container">
      <div className="nopage-content" ref={contentRef}>
        <h1 ref={headingRef}>Page Not Available</h1>
        <p ref={subTextRef}>🚧 Coming Soon 🚧</p>
        <Link to="/" className="home-button" ref={buttonRef}>
          Go Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Nopage;
