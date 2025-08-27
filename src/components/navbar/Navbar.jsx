import "./Navbar.css";
const logo = "/creotixLogo.png";
const ham = "/hamburger.svg";
const closeIcon = "/close.svg";
const download = "/download.svg";
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Hamburger } from '../hamburger/Hamburger';

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  useEffect(() => {
    const nav = document.getElementById('nav');
    const handleScroll = () => {
      if (window.scrollY > 40) {
        nav.classList.add('sticky');
      } else {
        nav.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav id="nav">
      <div className="section">
        <div className="strip">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <ul className="navul">
            <li><Link 
                to="/about" 
                className={activeLink === '/about' ? 'active' : ''}
                onClick={() => setActiveLink('/about')}
              >About Us</Link></li>
            <li><Link 
                to="/services" 
                className={activeLink === '/services' ? 'active' : ''}
                onClick={() => setActiveLink('/services')}
              >Services</Link></li>
            <li><Link 
                to="/portfolio" 
                className={activeLink === '/portfolio' ? 'active' : ''}
                onClick={() => setActiveLink('/portfolio')}
              >Portfolio</Link></li>
            <li><Link 
                to="/contact" 
                className={activeLink === '/contact' ? 'active' : ''}
                onClick={() => setActiveLink('/contact')}
              >Contact Us</Link></li>
          </ul>
          <button className="ctaButton"> <img src={download} alt="" /> brochure</button>
          <div className="ham" onClick={toggleMenu}>
            <img src={isMenuOpen ? closeIcon : ham} alt={isMenuOpen ? "Close Menu" : "Open Menu"} />
          </div>
          <Hamburger 
            isOpen={isMenuOpen} 
            onClose={closeMenu} 
            activeLink={activeLink} 
            setActiveLink={setActiveLink} 
          />

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
