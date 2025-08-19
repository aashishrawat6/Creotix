import "./Navbar.css";
import logo from "/creotixLogo.png";
import download from "/download.svg";
const Navbar = () => {
  return (
    <nav id="nav">
      <div className="section">
        <div className="strip">
          <a href="">
            <img src={logo} alt="logo" className="logo" />
          </a>
          <ul>
            <li><a href="">About Us</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Portfolio</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
          <button className="ctaButton"> <img src={download} alt="" /> brochure</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
