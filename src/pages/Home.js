import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaShieldAlt, 
  FaLeaf, 
  FaTruck, 
  FaAward, 
  FaStar,
  FaArrowLeft,
  FaSprayCan
} from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const features = [
    { icon: <FaShieldAlt />, title: 'آمنة وصحية', desc: 'مناسبة لجميع الأسطح ولا تسبب الحساسية' },
    { icon: <FaLeaf />, title: 'صديقة للبيئة', desc: 'تركيبات قابلة للتحلل وصديقة للبيئة' },
    { icon: <FaTruck />, title: 'توصيل سريع', desc: 'توصيل لجميع أنحاء المملكة خلال 24-48 ساعة' },
    { icon: <FaAward />, title: 'جودة مضمونة', desc: 'منتجات معتمدة من الهيئة العامة للغذاء والدواء' }
  ];

  const topProducts = [
    { name: 'معقم الأسطح المتقدم', category: 'تعقيم', color: '#3B82F6', image: 'https://medimixegypt.com/wp-content/uploads/2025/09/1010349.jpg' },
    { name: 'منظف الزجاج اللامع', category: 'تنظيف الزجاج', color: '#10B981' },
    { name: 'مطهر الحمامات القوي', category: 'تنظيف الحمامات', color: '#8B5CF6' },
    { name: 'منعش الجو الطبيعي', category: 'تعطير', color: '#F59E0B' }
  ];

  return (
    <div className="home-page">
      {/* قسم البطل */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            حلول تنظيف <span>متطورة</span> لبيئة أكثر نظافة وصحة
          </motion.h1>
          <p className="hero-subtitle">
            نقدم مجموعة واسعة من مواد التنظيف عالية الجودة للاستخدام المنزلي والمؤسسي
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">
              استكشف منتجاتنا <FaArrowLeft />
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              اطلب عرض سعر
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-product" style={{ animationDelay: '0s' }}>
            <div className="product-circle" style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}>
              <FaSprayCan />
            </div>
            <span>معقمات</span>
          </div>
          <div className="floating-product" style={{ animationDelay: '0.5s' }}>
            <div className="product-circle" style={{ background: 'linear-gradient(135deg, #10B981, #3B82F6)' }}>
              <FaLeaf />
            </div>
            <span>صديقة للبيئة</span>
          </div>
        </div>
      </section>

      {/* قسم المميزات */}
      <section className="features-section">
        <div className="section-header">
          <h2>لماذا تختار منتجاتنا؟</h2>
          <p>نحن نقدم حلول تنظيف غير عادية تلبي أعلى معايير الجودة</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* قسم المنتجات الرائجة */}
      <section className="products-section">
        <div className="section-header">
          <h2>منتجاتنا الأكثر مبيعاً</h2>
          <p>اكتشف حلول التنظيف المفضلة لعملائنا</p>
        </div>
        <div className="products-grid">
          {topProducts.map((product, index) => (
            <div key={index} className="product-card">
              <div 
                className="product-color" 
                style={{ backgroundColor: product.color }}
              ></div>
              <div className="product-info">
                {product.image && (
                  <img src={product.image} alt={product.name} className="product-thumb" />
                )}
                <h3>{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <button className="product-btn">تفاصيل المنتج</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* قسم دعوة للعمل */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>جاهزون لتنظيف أفضل؟</h2>
          <p>تواصل معنا الآن للحصول على استشارة مجانية ومنتجات عينات</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            تواصل معنا اليوم
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;