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

const Home = () => {
  const features = [
    { icon: <FaShieldAlt />, title: 'آمنة وصحية', desc: 'مناسبة لجميع الأسطح ولا تسبب الحساسية' },
    { icon: <FaLeaf />, title: 'صديقة للبيئة', desc: 'تركيبات قابلة للتحلل وصديقة للبيئة' },
    { icon: <FaTruck />, title: 'توصيل سريع', desc: 'توصيل لجميع أنحاء المملكة خلال 24-48 ساعة' },
    { icon: <FaAward />, title: 'جودة مضمونة', desc: 'منتجات معتمدة من الهيئة العامة للغذاء والدواء' }
  ];

  const topProducts = [
    { 
      name: 'معقم الأسطح المتقدم', 
      category: 'تعقيم', 
      image: '/photos/WhatsApp Image 2025-12-22 at 3.43.47 PM.jpeg',
      color: '#3B82F6' 
    },
    { 
      name: 'منظف الزجاج اللامع', 
      category: 'تنظيف الزجاج', 
      image: '/photos/WhatsApp Image 2025-12-22 at 3.43.47 .jpeg',
      color: '#10B981' 
    },
    { 
      name: 'مطهر الحمامات القوي', 
      category: 'تنظيف الحمامات',
      image: '/photos/WhatsApp Image 2025-12-22 .jpeg',
      color: '#8B5CF6' 
    },
    { 
      name: 'منعش الجو الطبيعي', 
      category: 'تعطير', 
      image: '/photos/WhatsApp Image .jpeg',
      color: '#F59E0B' 
    }
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
            <motion.div 
              key={index}
              className="product-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="product-image-container">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image"
                  loading="lazy"
                />
                <div className="product-image-overlay">
                  <button className="overlay-btn">عرض المنتج</button>
                </div>
                <div className="product-badge" style={{ backgroundColor: product.color }}>
                  {product.category}
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="product-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                  <span className="rating-text">(4.8)</span>
                </div>
                <button className="product-btn">
                  <FaArrowLeft /> عرض التفاصيل
                </button>
              </div>
            </motion.div>
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