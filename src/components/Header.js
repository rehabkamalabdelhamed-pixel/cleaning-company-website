import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaSprayCan, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'الرئيسية', path: '/' },
    { name: 'خدماتنا', path: '/services' },
    { name: 'تواصل معنا', path: '/contact' }
  ];

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">
            <img src="/photos/logo.jpeg" alt="كلين برو" className="logo-img" />
            <span> اغادير العالم </span>
            <small> لاسترداد  مواد التنظيف والخرداوات والزينه</small>
          </Link>

          <div className="desktop-menu">
            {menuItems.map((item) => (
              <Link key={item.name} to={item.path} className="nav-link">
                {item.name}
              </Link>
            ))}
            <a href="https://wa.me/201558703970" target="_blank" rel="noopener noreferrer" className="cta-button">
              <FaWhatsapp />  +20 15 58703970
            </a>
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;