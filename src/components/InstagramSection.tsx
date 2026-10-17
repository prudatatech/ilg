import React from 'react';

export const InstagramSection: React.FC = () => {
  const images = [
    { src: "/assets/recipe-sarson-saag.jpg", alt: "Sarson Ka Saag" },
    { src: "/assets/pulao-spotlight.jpg", alt: "Kesari Shahi Pulao" },
    { src: "/assets/recipe-dal-dhokli.jpg", alt: "Gujarati Dal Dhokli" },
    { src: "/assets/oil-spotlight.jpg", alt: "Pure Kachi Ghani Mustard Oil" },
    { src: "/assets/recipe-thandai.jpg", alt: "Royal Kesari Thandai" },
    { src: "/assets/hero-banner-2.jpg", alt: "Whole Indian Spices" }
  ];

  return (
    <section className="instagram-section">
      <div className="container">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-instagram-follow"
        >
          <i className="fab fa-instagram"></i> Follow on Instagram @ilgnaturals
        </a>
        <div className="instagram-grid">
          {images.map((item, idx) => (
            <div key={idx} className="instagram-item">
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="instagram-overlay">
                <i className="fab fa-instagram"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
