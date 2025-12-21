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
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>روابط سريعة</h3>
          <ul className="footer-links">
            <li><Link to="/">الرئيسية</Link></li>
            <li><Link to="/services">خدماتنا</Link></li>
            <li><Link to="/contact">تواصل معنا</Link></li>
            <li><a href="#">منتجاتنا</a></li>
            <li><a href="#">عن الشركة</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>خدماتنا</h3>
          <ul className="footer-links">
            <li><a href="#">منتجات التنظيف المنزلية</a></li>
            <li><a href="#">المنتجات الصناعية</a></li>
            <li><a href="#">منتجات التعقيم الطبي</a></li>
            <li><a href="#">منتجات تنظيف السيارات</a></li>
            <li><a href="#">الاستشارات والتدريب</a></li>
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