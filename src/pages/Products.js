import React, { useEffect, useState } from 'react';
import './Products.css';

const images = [
  '/photos/WhatsApp Image .jpeg',
  '/photos/WhatsApp Image 2025-12-22 .jpeg',
  '/photos/WhatsApp Image 2025-12-22 at .jpeg',
  '/photos/WhatsApp Image 2025-12-22 at 3.43.45 PM.jpeg',
  '/photos/WhatsApp Image 2025-12-22 at 3.43.45 jpeg',
  '/photos/WhatsApp Image 2025-12-22 at 3.43.46 P.jpeg',
  '/photos/WhatsApp Image 2025-12-22 at 3.43.47 .jpeg',
  '/photos/WhatsApp Image 2025-12-22 at 3.43.47 PM.jpeg',
  '/photos/WhatsApp Image 2025-12-22 at 3.43jpeg',
  '/photos/WhatsApp Image 2025.jpeg',
  '/photos/classclean.jpeg',
];

const Products = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(id);
  }, []);

  return (
    <div className="products-page">
      <div className="products-container">
        <h2>منتجاتنا</h2>

        <div className="slideshow" aria-live="polite">
          {images.map((src, i) => (
            <img
              key={src + i}
              src={src}
              alt={`صورة منتج ${i + 1}`}
              className={`slide ${i === index ? 'active' : ''}`}
              loading="lazy"
            />
          ))}
        </div>

        <div className="thumbs">
          {images.map((src, i) => (
            <button
              key={src + '-btn'}
              className={`thumb ${i === index ? 'selected' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`عرض الصورة ${i + 1}`}>
              <img src={src} alt={`صورة مصغرة ${i + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
