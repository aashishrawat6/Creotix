import React from "react";
import "./Footer.css";
import logo from "/creotixLogo.png";
import fb from "/fb.svg";
import insta from "/insta.svg";
import linkedin from "/in.svg";
import x from "/x.svg";
import pin from "/pin.svg";
import mail from "/iconMail.png";
import phone from "/iconPhone.png";
import location from "/iconPin.png";
const Footer = () => {
  return (
    <section id="footer">
      <footer className="section">
        <div className="container footer-grid">
          <div className="grid1">
            <a href="">
              <img src={logo} alt="Logo" className="logo"/>
            </a>
            <p>
              In a fast-paced digital world, choosing the right IT partner can
              make all the difference. Here's why businesses around the globe
              trust us to bring their ideas to life:
            </p>
            <div className="socials">
              <a href="" _target="_blank">
                <img src={fb} alt="Facebook" />
              </a>
              <a href="" _target="_blank">
                <img src={insta} alt="Instagram" />
              </a>
              <a href="" _target="_blank">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="" _target="_blank">
                <img src={x} alt="X" />
              </a>
              <a href="" _target="_blank">
                <img src={pin} alt="Pinterest" />
              </a>
            </div>
          </div>
          <div className="grid2">
            <h3 className="footerHeading">Quick Links</h3>
            <ul className="footerUl">
              <li className="footerLi"><a href="">Services</a></li>
              <li className="footerLi"><a href="">Projects</a></li>
              <li className="footerLi"><a href="">About Us</a></li>
              <li className="footerLi"><a href="">Blogs</a></li>
              <li className="footerLi"><a href="">Careers</a></li>
            </ul>
          </div>
          <div className="grid3">
            <h3 className="footerHeading">Services</h3>
            <ul className="footerUl">
              <li className="footerLi"><a href="">Web Development</a></li>
              <li className="footerLi"><a href="">Software Development</a></li>
              <li className="footerLi"><a href="">Digital Marketing</a></li>
              <li className="footerLi"><a href="">Mobile App Development</a></li>
              <li className="footerLi"><a href="">UI/UX Design</a></li>
            </ul>
          </div>
          <div className="grid4">
            <h3 className="footerHeading">Contact Us</h3>
            <div className="grid4Content">
                <h4>
                    <img src={mail} alt="Email" />
                    Email address
                </h4>
                <p>info@creotix.com</p>
            </div>
            <div className="grid4Content">
                <h4>
                    <img src={phone} alt="Phone" />
                    Phone number
                </h4>
                <p>+91 7579748161</p>
            </div>
            <div className="grid4Content">
                <h4>
                    <img src={location} alt="Email" />
                    Address
                </h4>
                <p>New Ashok Nagar, East Delhi, New Delhi 110096, India</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
