import React from 'react';

interface SpotlightSectionProps {
  onNavigate: (page: string, categoryFilter?: string) => void;
}

export const SpotlightSection: React.FC<SpotlightSectionProps> = ({ onNavigate }) => {
  return (
    <>
      {/* Grounded Spices Spotlight */}
      <section className="spotlight-section">
        <div className="container">
          <div className="spotlight-row">
            <div className="spotlight-col-img">
              <div className="spotlight-composition">
                <img src="/Haldi Powder.png" alt="Kesari Nandan Turmeric Powder Pack" className="spotlight-pack-img" />
                <img src="/assets/pulao-spotlight.jpg" alt="Fragrant Pulao Curry" className="spotlight-dish-img" />
              </div>
            </div>
            <div className="spotlight-col-content">
              <p className="spotlight-description">
                <strong>ILG Naturals</strong> offers a pristine variety of stone-ground spices like – Natural Haldi Powder, Lal Mirch Powder, Black Pepper Powder, Jeera Powder, Coriander Powder, Kashmiri Chilli Powder, and cumin blends. Sourced from native fields to ensure vibrant color, intense aroma, and maximum active nutrients.
              </p>
              <button
                type="button"
                className="btn-outline-red"
                onClick={() => onNavigate('shop', 'Grounded Spices')}
              >
                VIEW ALL GROUNDED SPICES
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cold-Pressed Mustard Oil Spotlight */}
      <section className="spotlight-section alt-bg">
        <div className="container">
          <div className="spotlight-row" style={{ flexDirection: 'row-reverse' }}>
            <div className="spotlight-col-img">
              <div className="spotlight-composition">
                <img src="/Black Mustard Oil 1ltr.png" alt="Kesari Nandan Black Mustard Oil Bottle" className="spotlight-pack-img" />
                <img src="/assets/oil-spotlight.jpg" alt="Golden Cold Pressed Mustard Oil with Flowers" className="spotlight-dish-img" />
              </div>
            </div>
            <div className="spotlight-col-content">
              <p className="spotlight-description">
                <strong>ILG Naturals’</strong> Kesari Nandan Pure Cold-Pressed Mustard Oil is extracted through slow wooden churners (Kachi Ghani) below 45°C. Preserving natural pungency, intense flavor, and vital monounsaturated fats, it elevates traditional Indian curries, saag, fish fries, and pickles while guarding cardiovascular health.
              </p>
              <button
                type="button"
                className="btn-outline-red"
                onClick={() => onNavigate('shop', 'Cold-Pressed Oils')}
              >
                EXPLORE MUSTARD OILS
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
