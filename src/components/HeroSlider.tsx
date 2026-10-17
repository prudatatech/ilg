import React, { useState, useEffect } from 'react';

interface HeroSliderProps {
  onNavigate: (page: string, categoryFilter?: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/assets/hero-banner.jpg",
      titleTop: "Swaad Sugandh Ki Shaan",
      titleHighlight: "Kesari Nandan Spices",
      subheading: "Pure stone-ground spices and traditional cold-pressed mustard oils, crafted for supreme Indian aroma, taste, and good health.",
      primaryText: "EXPLORE CATALOG",
      primaryAction: () => onNavigate('shop'),
      secondaryText: "DISCOVER RECIPES",
      secondaryAction: () => onNavigate('recipes')
    },
    {
      id: 2,
      image: "/assets/hero-banner-2.jpg",
      titleTop: "Shuddh Kachi Ghani",
      titleHighlight: "Pure Mustard Oil",
      subheading: "Cold-pressed black & yellow mustard oils rich in natural antioxidants, pungent aroma, and Omega-3 for peak heart health.",
      primaryText: "SHOP MUSTARD OILS",
      primaryAction: () => onNavigate('shop', 'Cold-Pressed Oils'),
      secondaryText: "OUR PROCESS",
      secondaryAction: () => onNavigate('about')
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="hero-slider-section">
      {/* 100% Vegetarian Emblem */}
      <div className="hero-veg-emblem">
        <div className="veg-square">
          <div className="veg-dot"></div>
        </div>
        <span className="veg-text">100% VEG</span>
      </div>

      <div className="hero-slider-wrapper">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}
          >
            <img src={slide.image} alt={slide.titleHighlight} className="hero-slide-bg" />
            <div className="hero-slide-overlay"></div>
            <div className="hero-content-overlay">
              <h1 className="hero-tagline-title">
                {slide.titleTop}
                <span>{slide.titleHighlight}</span>
              </h1>
              <p className="hero-subheadline">{slide.subheading}</p>
              <div className="hero-cta-group">
                <button
                  type="button"
                  className="btn-primary-hero"
                  onClick={slide.primaryAction}
                >
                  <i className="fas fa-shopping-bag"></i> {slide.primaryText}
                </button>
                <button
                  type="button"
                  className="btn-secondary-hero"
                  onClick={slide.secondaryAction}
                >
                  <i className="fas fa-book-open"></i> {slide.secondaryText}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Arrow Controls */}
        <button className="slider-arrow prev" onClick={prevSlide} aria-label="Previous Slide">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="slider-arrow next" onClick={nextSlide} aria-label="Next Slide">
          <i className="fas fa-chevron-right"></i>
        </button>

        {/* Dots */}
        <div className="slider-dots">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`slider-dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
