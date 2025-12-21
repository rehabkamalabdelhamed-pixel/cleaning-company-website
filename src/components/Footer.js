import React from 'react';
import { Link } from 'react-router-dom';
import { FaSprayCan, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <FaSprayCan />
            <span>كلين برو</span>
          </div>
          <p className="footer-description">
            شركة رائدة في مجال مواد التنظيف المتطورة، نقدم حلولاً مبتكرة وآمنة وفعالة لجميع احتياجات التنظيف المنزلية والصناعية.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>روابط سريعة</h3>
          <ul className="footer-links">
            <li><Link to="/">الرئيسية</Link></li>
            <li><Link to="/services">خدماتنا</Link></li>
            <li><Link to="/contact">تواصل معنا</Link></li>
            <li><Link to="/products">منتجاتنا</Link></li>
            <li><Link to="/about">عن الشركة</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>خدماتنا</h3>
          <ul className="footer-links">
            <li><Link to="/services">منتجات التنظيف المنزلية</Link></li>
            <li><Link to="/services">المنتجات الصناعية</Link></li>
            <li><Link to="/services">منتجات التعقيم الطبي</Link></li>
            <li><Link to="/services">منتجات تنظيف السيارات</Link></li>
            <li><Link to="/services">الاستشارات والتدريب</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>اتصل بنا</h3>
          <ul className="footer-links">
            <li>الرياض، المملكة العربية السعودية</li>
            <li>هاتف: +966 500 000 000</li>
            <li>بريد إلكتروني: info@cleanpro.com</li>
            <li>ساعات العمل: 8 ص - 5 م</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} كلين برو لمواد التنظيف المتطورة. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;