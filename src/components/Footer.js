import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/photos/profile.png" alt="اغادير العالم" className="footer-logo-img" />
            <span> اغادير العالم</span>
          </div>
          <p className="footer-description">
            لمواد التنظيف هي شركة متخصصة في توفير وتوزيع مواد التنظيف عالية الجودة.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/share/17tfkhTL72/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://wa.me/218913088651" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
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
            <li> ليبيا مصراتة  </li>
            <li>  هاتف / واتساب :
              <span className="ltr-text"><a href="tel:+218918407257">+218 91-8407257</a></span></li>
            <li> بريد الكتروني : Contact@agadiralalam.ly </li>
            <li>ساعات العمل: 8 ص - 5 م</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} شركة اغادير العالم لاستيراد مواد التنظيف
. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;