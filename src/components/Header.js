import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaSprayCan, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'الرئيسية', path: '/' },
    { name: 'خدماتنا', path: '/services' },
    { name: 'منتجاتنا', path: '/products' },
    { name: 'تواصل معنا', path: '/contact' }
  ];

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">
            <img src="/photos/profile.png" alt="كلين برو" className="logo-img" />
            <span> اغادير العالم </span>
            <small> لاستيراد  مواد التنظيف والخرداوات والزينة</small>
          </Link>

          <div className="desktop-menu">
            {menuItems.map((item) => (
              <Link key={item.name} to={item.path} className="nav-link">
                {item.name}
              </Link>
            ))}
            <a href="https://wa.me/218913088651" target="_blank" rel="noopener noreferrer" className="cta-button">
              <FaWhatsapp />  
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