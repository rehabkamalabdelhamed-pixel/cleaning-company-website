// About.jsx - Enhanced Version without external icons
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const values = [
    { text: 'الجودة أولاً' },
    { text: 'السلامة والبيئة' },
    { text: 'خدمة العملاء' },
    { text: 'الابتكار المستمر' }
  ];

  return (
    <motion.div 
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants}>
              عن شركة اغادير العالم
            </motion.h1>
            
            <motion.p 
              className="about-hero-sub"
              variants={itemVariants}
            >
              نقدم حلول تنظيف احترافية وآمنة لمختلف القطاعات مع التزام كامل بمعايير الجودة والبيئة.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <Link to="/contact" className="btn btn-primary about-cta">
                تواصل معنا
                <span className="cta-arrow"></span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="about-content">
        <div className="about-layout">
          {/* Main Content */}
          <motion.main 
            className="about-main"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              <strong>شركة اغادير العالم لمواد التنظيف</strong> هي شركة رائدة متخصصة في توفير وتوزيع مواد التنظيف عالية الجودة، وتعمل على تلبية احتياجات الأفراد والمؤسسات والشركات بمختلف أنواعها. نسعى دائماً إلى تقديم منتجات فعّالة، آمنة، وموثوقة تواكب أعلى معايير الجودة العالمية.
            </p>

            <p>
              نحرص في اغادير العالم على توفير مجموعة متكاملة من مواد التنظيف المنزلية والصناعية، التي تضمن أفضل نتائج في النظافة والتعقيم، مع مراعاة السلامة البيئية والصحية. نستخدم أحدث التقنيات والمعايير العلمية في تطوير منتجاتنا.
            </p>

            <p>
              كما نلتزم بتقديم خدمة متميزة، وأسعار تنافسية، وبناء علاقات طويلة الأمد مع عملائنا تقوم على الثقة والمصداقية والشفافية. فريقنا من الخبراء دائماً على استعداد لتقديم الاستشارات والدعم الفني.
            </p>

            <p>
              هدفنا الاستراتيجي هو أن نكون الخيار الأول في مجال مواد التنظيف بالمنطقة، من خلال التطوير المستمر، والاهتمام بتفاصيل الجودة، وتلبية متطلبات السوق المحلي والإقليمي بكفاءة واحترافية عالية.
            </p>
          </motion.main>

          {/* Sidebar */}
          <motion.aside 
            className="about-aside"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="about-card">
              <h4>قيمنا الأساسية</h4>
              <ul>
                {values.map((value, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {value.text}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="about-card">
              <h4>لماذا تختارنا؟</h4>
              <p>
                منتجات معتمدة عالمياً، شبكات توزيع موثوقة تغطي جميع المناطق، 
                ودعم فني سريع متوفر 24/7. نضع رضا العميل في المقام الأول ونضمن 
                جودة لا تضاهى في كل منتج نقدمه.
              </p>
            </div>

            <div className="about-card">
              <h4>ضمان الجودة</h4>
              <p>
                جميع منتجاتنا تخضع لاختبارات جودة صارمة وتتوافق مع المعايير 
                الدولية للسلامة والبيئة. نضمن فعالية وأمان كل منتج نبيعه.
              </p>
            </div>
          </motion.aside>
        </div>
      </section>
    </motion.div>
  );
};

export default About;