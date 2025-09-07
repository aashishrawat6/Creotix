import { useEffect, useRef } from "react";
import gsap from "gsap";

const LoadingFallback = () => {
  const textRef = useRef(null);
  const shapeRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "power2.inOut" } });

    // Animate text shimmer
    tl.to(textRef.current, {
      backgroundPosition: "200% center",
      duration: 3,
    });

    // Morphing blob effect for shapes
    shapeRefs.current.forEach((shape, i) => {
      gsap.to(shape, {
        scale: 1.3,
        rotate: 360,
        borderRadius: "50%",
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: i * 0.4,
      });
    });
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0d0d0d",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {/* Premium Loading Text */}
        <h1
          ref={textRef}
          style={{
            fontSize: "2.5rem",
            fontWeight: "800",
            letterSpacing: "3px",
            background:
              "linear-gradient(90deg, #ff6ec7, #7367f0, #32e0c4, #ff6ec7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "300% auto",
            margin: 0,
            fontFamily: "'Manrope', sans-serif",
          }}
        >
          Loading
        </h1>

        {/* Fluid Shapes */}
        <div
          ref={(el) => (shapeRefs.current[0] = el)}
          style={{
            width: "18px",
            height: "18px",
            background: "linear-gradient(135deg, #ff6ec7, #7367f0)",
            borderRadius: "40% 60% 70% 30% / 40% 30% 70% 60%",
          }}
        />
        <div
          ref={(el) => (shapeRefs.current[1] = el)}
          style={{
            width: "14px",
            height: "14px",
            background: "linear-gradient(135deg, #32e0c4, #7367f0)",
            borderRadius: "60% 40% 30% 70% / 50% 60% 40% 50%",
          }}
        />
        <div
          ref={(el) => (shapeRefs.current[2] = el)}
          style={{
            width: "20px",
            height: "20px",
            background: "linear-gradient(135deg, #ff6ec7, #32e0c4)",
            borderRadius: "50% 50% 70% 30% / 40% 60% 40% 60%",
          }}
        />
      </div>
    </div>
  );
};

export default LoadingFallback;
