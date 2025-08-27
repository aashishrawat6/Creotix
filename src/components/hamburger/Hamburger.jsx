import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hamburger.css";
import download from "/download.svg";
import fb from "/Facebook.svg";
import ig from "/Instagraam.svg";
import linkedin from "/Linkedin.svg";
import tw from "/twitter.svg";
import pinterest from "/pinterest.svg";

export const Hamburger = ({ isOpen, onClose, activeLink, setActiveLink }) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div id="hamBurger" className="hamburger-menu">
      <div className="hamburger-overlay" onClick={onClose} />
      <div className="hamburger-content">
        <nav className="hamburger-nav">
          <ul className="hamburger-navul">
            <li>
              <Link
                to="/about"
                className={activeLink === "/about" ? "active" : ""}
                onClick={() => {
                  setActiveLink("/about");
                  onClose();
                }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={activeLink === "/services" ? "active" : ""}
                onClick={() => {
                  setActiveLink("/services");
                  onClose();
                }}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className={activeLink === "/portfolio" ? "active" : ""}
                onClick={() => {
                  setActiveLink("/portfolio");
                  onClose();
                }}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={activeLink === "/contact" ? "active" : ""}
                onClick={() => {
                  setActiveLink("/contact");
                  onClose();
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <button className="ctaButton">
            <img src={download} alt="" /> brochure
          </button>
        </nav>

        <div className="right-side">
          <span>Follow Us</span>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fb} alt="Facebook" className="aImages" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ig} alt="Instagram" className="aImages" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" className="aImages" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tw} alt="Twitter" className="aImages" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={pinterest} alt="Pinterest" className="aImages" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
