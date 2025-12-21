import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaIndustry, 
  FaHome, 
  FaHospital, 
  FaUtensils, 
  FaCar, 
  FaShieldVirus 
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaHome />,
      title: 'منتجات التنظيف المنزلية',
      description: 'مجموعة متكاملة من المنظفات والمعقمات والمطهرات للاستخدام اليومي في المنزل',
      features: ['منظفات الأرضيات', 'معقمات الأسطح', 'منظفات المطبخ', 'مطهرات الحمامات']
    },
    {
      icon: <FaIndustry />,
      title: 'منتجات التنظيف الصناعي',
      description: 'مواد تنظيف قوية وفعالة للمصانع والمنشآت الصناعية',
      features: ['منظفات المعدات', 'مزيلات الشحوم', 'منظفات الأرضيات الصناعية', 'معقمات عالية التركيز']
    },
    {
      icon: <FaHospital />,
      title: 'منتجات التعقيم الطبي',
      description: 'معقمات ومطهرات معتمدة للمستشفيات والعيادات والمراكز الطبية',
      features: ['معقمات اليدين', 'مطهرات الأسطح الطبية', 'منظفات المعدات الطبية', 'معقمات الجو']
    },
    {
      icon: <FaUtensils />,
      title: 'منتجات تنظيف المطاعم',
      description: 'مواد تنظيف خاصة بالمطاعم والفنادق ومحلات الأغذية',
      features: ['منظفات المطابخ',' معقمات الأواني', 'منظفات الأرضيات الغذائية', 'مزيلات الدهون']
    },
    {
      icon: <FaCar />,
      title: 'منتجات تنظيف السيارات',
      description: 'مجموعة متخصصة لتنظيف وتلميع السيارات الداخلية والخارجية',
      features: ['منظفات المحرك', 'ملمعات الهيكل', 'منظفات المقاعد', 'معطرات السيارة']
    },
    {
      icon: <FaShieldVirus />,
      title: 'منتجات التعقيم الوقائي',
      description: 'حلول تعقيم متقدمة للحماية من الفيروسات والبكتيريا',
      features: ['معقمات الهواء', 'مطهرات اليدين', 'منتجات الوقاية الشخصية', 'أجهزة التعقيم']
    }
  ];

  return (
    <div className="services-page">
      <div className="page-header">
        <h1>خدماتنا ومنتجاتنا</h1>
        <p>اكتشف مجموعة منتجاتنا الشاملة التي تلبي جميع احتياجات التنظيف</p>
      </div>

      <section className="services-section">
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="service-btn">طلب الكتالوج</button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="products-table-section">
        <h2>مقارنة خطوط المنتجات</h2>
        <div className="table-container">
          <table className="products-table">
            <thead>
              <tr>
                <th>نوع المنتج</th>
                <th>الاستخدام</th>
                <th>التعبئة</th>
                <th>التركيز</th>
                <th>الأسعار تبدأ من</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>منظفات الأرضيات</td>
                <td>منزلي / صناعي</td>
                <td>1 لتر - 20 لتر</td>
                <td>عالي / متوسط</td>
                <td>25 ريال</td>
              </tr>
              <tr>
                <td>معقمات الأسطح</td>
                <td>جميع الأغراض</td>
                <td>500 مل - 5 لتر</td>
                <td>عالي</td>
                <td>30 ريال</td>
              </tr>
              <tr>
                <td>منظفات الزجاج</td>
                <td>منزلي / مؤسسي</td>
                <td>750 مل - 4 لتر</td>
                <td>متوسط</td>
                <td>20 ريال</td>
              </tr>
              <tr>
                <td>مطهرات الحمامات</td>
                <td>منزلي / تجاري</td>
                <td>1 لتر - 10 لتر</td>
                <td>عالي</td>
                <td>35 ريال</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Services;