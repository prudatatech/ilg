import React from 'react';

export const StorySection: React.FC = () => {
  return (
    <section className="story-heritage-section" id="heritage">
      <div className="container">
        
        {/* Big Centered Red Headline */}
        <h2 className="section-main-heading-red">NO.1 SPICE BRAND IN INDIA</h2>

        {/* Story Row 1: The Humble Beginning & Rotating 3D Emblem */}
        <div className="story-row">
          <div className="story-col-text">
            <p className="story-paragraph">
              It all started when our founders embarked on a mission to bring pure, unadulterated spices and traditional kachi ghani oils directly to Indian homes. Sourcing the finest golden mustard seeds, whole cumin, sun-cured chillies, and organic turmeric from fertile agricultural belts, the path paved was not an ordinary one, but one of steadfast commitment to wellness and purity. Little did they know that these initial steps towards honoring India’s rich culinary traditions would reign supreme across thousands of kitchens and give birth to <strong>ILG Naturals Kesari Nandan</strong>.
            </p>
          </div>
          <div className="story-col-image">
            {/* 3D Flip Card Animation (Badshah Replica) */}
            <div className="flip-card-container">
              <div className="flip-card-inner-3d">
                <div className="flip-front">
                  <img src="/Logo (2).png" alt="ILG Naturals Kesari Nandan" />
                </div>
                <div className="flip-back">
                  <div className="flip-back-content">
                    <div className="flip-back-title">ILG NATURALS</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111', marginBottom: '6px' }}>
                      केसरी नंदन
                    </div>
                    <p className="flip-back-sub">
                      100% PURE & NATURAL<br />
                      COLD PRESSED & STONE GROUND
                    </p>
                    <div style={{ marginTop: '15px', fontWeight: 800, color: 'var(--primary-red)' }}>
                      HERITAGE QUALITY
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Row 2: From Tin Cans to Dinner Table (Vintage Delivery Bicycle) */}
        <div className="story-row reverse">
          <div className="story-col-text">
            <h3 className="story-heading-sub">
              FROM TIN CANS TO<br />YOUR DINNER TABLE!
            </h3>
            <p className="story-paragraph">
              A lot has happened over the years in becoming the premier Indian Spice & Cold-Pressed Mustard Oil Manufacturer. Delivering pure spices on simple bicycles in vintage tin canisters, we earned the sacred trust of families one pinch at a time. Today, that legacy of uncompromising purity powers millions of dining tables every single day. And we are looking forward to more.
            </p>
          </div>
          <div className="story-col-image">
            <div className="bicycle-visual-box">
              <img src="/assets/story-bicycle.jpg" alt="Vintage Spice Carrier Bicycle - Kesari Nandan" />
            </div>
          </div>
        </div>

        {/* Story Row 3: National Presence & Aroma Harmony */}
        <div className="story-row">
          <div className="story-col-text">
            <p className="story-paragraph">
              Eventually, over the decades, the devotion of Indian homemakers for the brand gave us the opportunity to carry this rich heritage forward across pan-India and international markets. ILG Naturals Kesari Nandan is now a celebrated hallmark for aromatic excellence, receiving accolades for pristine cold-pressed extraction and farm-fresh spices.
              <br /><br />
              Gradually, celebrated staples like <em>Natural Haldi Powder, Kachi Ghani Black Mustard Oil, Natural Lal Mirch Powder, Cumin & Black Pepper</em> gained momentum in every household. <strong>‘Swaad Sugandh Ki Shaan, Kesari Nandan’</strong>—the timeless promise of purity that tugs at everyone’s heartstrings.
            </p>
          </div>
          <div className="story-col-image">
            <div className="heritage-map-box">
              <img src="/assets/hero-banner-2.jpg" alt="Pan India Spice Heritage" />
              <div className="aroma-badge">
                <i className="fas fa-award"></i> 100% Certified Purity
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
