

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaIndustry, FaHome, FaHospital, FaUtensils, 
  FaCar, FaShieldVirus, FaArrowLeft, FaChevronDown,
  FaCheck, FaStar, FaShoppingCart, FaInfoCircle
} from 'react-icons/fa';

const Services = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const services = [
    {
      icon: <FaHome />,
      title: 'منتجات التنظيف المنزلية',
      description: 'مجموعة متكاملة من المنظفات والمعقمات والمطهرات للاستخدام اليومي في المنزل',
      features: ['منظفات الأرضيات', 'معقمات الأسطح', 'منظفات المطبخ', 'مطهرات الحمامات', 'منظفات الزجاج', 'منظفات المفروشات'],
      details: 'تركيبات آمنة للأسرة والأطفال، فعالة في إزالة البقع والدهون',
      popular: true,
      rating: 4.8
    },
    {
      icon: <FaIndustry />,
      title: 'منتجات التنظيف الصناعي',
      description: 'مواد تنظيف قوية وفعالة للمصانع والمنشآت الصناعية',
      features: ['منظفات المعدات', 'مزيلات الشحوم', 'منظفات الأرضيات الصناعية', 'معقمات عالية التركيز', 'منظفات الأسطح المعدنية'],
      details: 'تركيبات متخصصة لتنظيف الآلات والمعدات الصناعية بأعلى كفاءة',
      popular: true,
      rating: 4.9
    },
    {
      icon: <FaHospital />,
      title: 'منتجات التعقيم الطبي',
      description: 'معقمات ومطهرات معتمدة للمستشفيات والعيادات والمراكز الطبية',
      features: ['معقمات اليدين', 'مطهرات الأسطح الطبية', 'منظفات المعدات الطبية', 'معقمات الجو', 'منظفات غرف العمليات'],
      details: 'معتمدة من الهيئات الصحية العالمية، فعالة ضد الفيروسات والبكتيريا',
      popular: false,
      rating: 5.0
    },
    {
      icon: <FaUtensils />,
      title: 'منتجات تنظيف المطاعم',
      description: 'مواد تنظيف خاصة بالمطاعم والفنادق ومحلات الأغذية',
      features: ['منظفات المطابخ', 'معقمات الأواني', 'منظفات الأرضيات الغذائية', 'مزيلات الدهون', 'منظفات الأسطح الغذائية'],
      details: 'آمنة للاستخدام مع الأغذية، تخضع لمعايير السلامة الغذائية',
      popular: true,
      rating: 4.7
    },
    {
      icon: <FaCar />,
      title: 'منتجات تنظيف السيارات',
      description: 'مجموعة متخصصة لتنظيف وتلميع السيارات الداخلية والخارجية',
      features: ['منظفات المحرك', 'ملمعات الهيكل', 'منظفات المقاعد', 'معطرات السيارة', 'منظفات الزجاج الأمامي'],
      details: 'تركيبات تحمي طلاء السيارة وتزيل الأوساخ العنيدة دون ضرر',
      popular: false,
      rating: 4.6
    },
    {
      icon: <FaShieldVirus />,
      title: 'منتجات التعقيم الوقائي',
      description: 'حلول تعقيم متقدمة للحماية من الفيروسات والبكتيريا',
      features: ['معقمات الهواء', 'مطهرات اليدين', 'منتجات الوقاية الشخصية', 'أجهزة التعقيم', 'منظفات الأسطح الوقائية'],
      details: 'حلول شاملة للحماية الشخصية والمكانية من الملوثات',
      popular: true,
      rating: 4.8
    }
  ];

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="services-page">
      {/* هيدر الصفحة */}
      {/* <div className="page-header">
        <motion.div
          className="header-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        > */}
          {/* <h1>
            <span className="gradient-text">خدماتنا</span> ومنتجاتنا
          </h1>
          <p className="subtitle">
            اكتشف مجموعة منتجاتنا الشاملة التي تلبي جميع احتياجات التنظيف
          </p>
          <div className="stats">
            <div className="stat">
              <span className="number">50+</span>
              <span className="label">منتج متخصص</span>
            </div>
            <div className="stat">
              <span className="number">100%</span>
              <span className="label">جودة مضمونة</span>
            </div>
            <div className="stat">
              <span className="number">24</span>
              <span className="label">ساعة دعم</span>
            </div>
          </div>
        </motion.div>
      </div> */}

      {/* قسم بطاقات الخدمات */}
      <section className="modern-services-section">
        <div className="section-intro">
          <h2>مجالات تخصصنا</h2>
          <p>نقدم حلول تنظيف متكاملة لكل المجالات</p>
        </div>

        <div className="services-grid-container">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className={`service-card-modern ${service.popular ? 'popular' : ''} ${expandedCard === index ? 'expanded' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => toggleCard(index)}
            >
              {/* شارة الأكثر مبيعاً */}
              {service.popular && (
                <div className="popular-badge">
                  <FaStar /> الأكثر مبيعاً
                </div>
              )}

              {/* رأس البطاقة */}
              <div className="card-header">
                <div className="icon-wrapper">
                  {service.icon}
                </div>
                <div className="title-section">
                  <h3>{service.title}</h3>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(service.rating) ? 'filled' : ''} />
                    ))}
                    <span>({service.rating})</span>
                  </div>
                </div>
                <motion.div 
                  className="expand-icon"
                  animate={{ rotate: expandedCard === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown />
                </motion.div>
              </div>

              {/* محتوى البطاقة */}
              <div className="card-content">
                <p className="description">{service.description}</p>
                
                <AnimatePresence>
                  {expandedCard === index && (
                    <motion.div
                      className="expanded-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="details">
                        <h4>تفاصيل المنتج:</h4>
                        <p>{service.details}</p>
                      </div>
                      
                      <div className="features-grid">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="feature-item">
                            <FaCheck className="check-icon" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* الأزرار */}
                <div className="card-actions">
                  <button className="primary-action">
                    <FaShoppingCart /> اطلب الآن
                  </button>
                  <button className="secondary-action">
                    <FaInfoCircle /> تفاصيل المنتج
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* قسم المميزات */}
        <div className="features-highlight">
          <div className="feature-item">
            <div className="feature-icon">
              <div className="icon-bg">✓</div>
            </div>
            <h4>منتجات آمنة</h4>
            <p>صديقة للبيئة ولا تسبب الحساسية</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <div className="icon-bg">🚚</div>
            </div>
            <h4>توصيل سريع</h4>
            <p>خلال 24-48 ساعة لجميع أنحاء المملكة</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <div className="icon-bg">⭐</div>
            </div>
            <h4>جودة مضمونة</h4>
            <p>معتمدة من الهيئة العامة للغذاء والدواء</p>
          </div>
        </div>
      </section>

      {/* جدول المنتجات - تصميم متجاوب */}
      <section className="responsive-table-section">
        <div className="section-header">
          <h2>مقارنة خطوط المنتجات</h2>
          <p>اختر المنتج المناسب لاحتياجاتك</p>
        </div>

        <div className="table-container-responsive">
          {/* عرض الموبايل: بطاقات */}
          <div className="mobile-products-view">
            {[
              {
                name: 'منظفات الأرضيات',
                usage: 'منزلي / صناعي',
                packaging: '1 لتر - 20 لتر',
                concentration: 'عالي / متوسط',
                price: '25 دينار'
              },
              {
                name: 'معقمات الأسطح',
                usage: 'جميع الأغراض',
                packaging: '500 مل - 5 لتر',
                concentration: 'عالي',
                price: '30 دينار'
              },
              {
                name: 'منظفات الزجاج',
                usage: 'منزلي / مؤسسي',
                packaging: '750 مل - 4 لتر',
                concentration: 'متوسط',
                price: '20 دينار'
              },
              {
                name: 'مطهرات الحمامات',
                usage: 'منزلي / تجاري',
                packaging: '1 لتر - 10 لتر',
                concentration: 'عالي',
                price: '35 دينار'
              }
            ].map((product, index) => (
              <div key={index} className="product-card-mobile">
                <div className="product-header">
                  <h4>{product.name}</h4>
                  <span className="price">{product.price}</span>
                </div>
                <div className="product-details">
                  <div className="detail-row">
                    <span className="label">الاستخدام:</span>
                    <span className="value">{product.usage}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">التعبئة:</span>
                    <span className="value">{product.packaging}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">التركيز:</span>
                    <span className="value concentration">{product.concentration}</span>
                  </div>
                </div>
                <button className="order-btn-mobile">
                  <FaShoppingCart /> طلب المنتج
                </button>
              </div>
            ))}
          </div>

          {/* عرض الكمبيوتر: جدول */}
          <div className="desktop-table-view">
            <table className="products-table-responsive">
              <thead>
                <tr>
                  <th>نوع المنتج</th>
                  <th>الاستخدام</th>
                  <th>التعبئة</th>
                  <th>التركيز</th>
                  <th>السعر</th>
                  <th>الطلب</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>منظفات الأرضيات</strong></td>
                  <td>منزلي / صناعي</td>
                  <td>1 لتر - 20 لتر</td>
                  <td><span className="badge high">عالي / متوسط</span></td>
                  <td className="price-cell">25 دينار</td>
                  <td><button className="table-btn"><FaShoppingCart /></button></td>
                </tr>
                <tr>
                  <td><strong>معقمات الأسطح</strong></td>
                  <td>جميع الأغراض</td>
                  <td>500 مل - 5 لتر</td>
                  <td><span className="badge high">عالي</span></td>
                  <td className="price-cell">30 دينار</td>
                  <td><button className="table-btn"><FaShoppingCart /></button></td>
                </tr>
                <tr>
                  <td><strong>منظفات الزجاج</strong></td>
                  <td>منزلي / مؤسسي</td>
                  <td>750 مل - 4 لتر</td>
                  <td><span className="badge medium">متوسط</span></td>
                  <td className="price-cell">20 دينار</td>
                  <td><button className="table-btn"><FaShoppingCart /></button></td>
                </tr>
                <tr>
                  <td><strong>مطهرات الحمامات</strong></td>
                  <td>منزلي / تجاري</td>
                  <td>1 لتر - 10 لتر</td>
                  <td><span className="badge high">عالي</span></td>
                  <td className="price-cell">35 دينار</td>
                  <td><button className="table-btn"><FaShoppingCart /></button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* قسم دعوة للعمل */}
      <section className="services-cta">
        <div className="cta-content">
          <h2>جاهز للبدء معنا؟</h2>
          <p>تواصل معنا الآن للحصول على استشارة مجانية وعروض أسعار تناسب احتياجاتك</p>
          <div className="cta-buttons">
            <button className="cta-btn-primary">
              <FaArrowLeft /> طلب عرض سعر
            </button>
            <button className="cta-btn-secondary">
              تواصل مع المبيعات
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
