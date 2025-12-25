import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaWhatsapp,
  FaCheckCircle
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة منطق إرسال النموذج
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // إعادة تعيين النموذج بعد الإرسال
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'هاتف الشركة',
      details: ['+218 91-8407257'],
      action: 'اتصل الآن'
    },
    {
      icon: <FaEnvelope />,
      title: 'البريد الإلكتروني',
      details: ['Contact@agadiralalam.ly'],
      action: 'أرسل بريدًا'
    },
    // {
    //   icon: <FaMapMarkerAlt />,
    //   title: 'العنوان',
    //   details: ['الرياض، المملكة العربية السعودية', 'شارع الملك فهد، برج الأعمال'],
    //   action: 'عرض الخريطة'
    // },
    {
      icon: <FaClock />,
      title: 'ساعات العمل',
      details: ['الأحد - الخميس: 8 صباحًا - 5 مساءً', 'الجمعة - السبت: مغلق'],
      action: 'جدول مواعيد'
    }
  ];

  const services = [
    'منتجات منزلية',
    'منتجات صناعية',
    'منتجات طبية',
    'منتجات مطاعم',
    'منتجات سيارات',
    'استشارات تنظيف'
  ];

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>تواصل معنا</h1>
        <p>نحن هنا للإجابة على استفساراتك وتقديم أفضل حلول التنظيف لاحتياجاتك</p>
      </div>

      <div className="contact-container">
        <section className="contact-info-section">
          <h2>معلومات التواصل</h2>
          <div className="contact-cards">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="contact-card"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="contact-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className={info.title === 'هاتف الشركة' ? 'ltr-text' : ''}>{detail}</p>
                ))}
                {info.title === 'هاتف الشركة' ? (
                  <a
                    className="contact-action-btn"
                    href={`tel:${info.details[0].replace(/[^+\d]/g, '')}`}
                  >
                    {info.action}
                  </a>
                ) : (
                  <button className="contact-action-btn">{info.action}</button>
                )}
              </motion.div>
            ))}
          </div>

          <div className="whatsapp-section">
            <div className="whatsapp-card">
              <FaWhatsapp className="whatsapp-icon" />
              <div>
                <h3>دعم الواتساب</h3>
                <p>احصل على رد سريع عبر الواتساب</p>
              </div>
              <a 
                href="https://wa.me/218913088651" 
                className="whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                تواصل عبر واتساب
              </a>
            </div>
          </div>
        </section>

        <section className="contact-form-section">
          <h2>أرسل لنا رسالة</h2>
          
          {isSubmitted ? (
            <motion.div 
              className="success-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <FaCheckCircle className="success-icon" />
              <h3>تم إرسال رسالتك بنجاح!</h3>
              <p>سنتواصل معك في أقرب وقت ممكن.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">الاسم الكامل *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">البريد الإلكتروني *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@domain.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">رقم الهاتف *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+966 5XX XXX XXX"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">اسم الشركة (اختياري)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="اسم شركتك أو مؤسستك"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">نوع الخدمة المطلوبة *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">اختر نوع الخدمة</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">الرسالة *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="أخبرنا عن احتياجاتك من مواد التنظيف..."
                ></textarea>
              </div>

              <motion.button 
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                إرسال الرسالة
              </motion.button>
            </form>
          )}
        </section>
      </div>

      <section className="map-section">
        <h2>موقعنا على الخريطة</h2>
        <div className="map-placeholder">
          {/* Embeddable map centered on Misrata, Libya. Uses standard Google Maps embed query (no API key required). */}
          <div className="map-frame">
            <iframe
              title="موقع اغادير العالم في مصراتة"
              src="https://www.google.com/maps?q=32.3754,15.0920&z=14&output=embed"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <p className="map-caption">ليبيا — مصراتة</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;