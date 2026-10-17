import React, { useState } from 'react';

export const BrandNarrativeSection: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="brand-narrative-section">
      <div className="container">
        <h3 className="narrative-title">
          Delectable spice blends & pure oils ruling your kitchen!
        </h3>
        <p className="narrative-text">
          Welcome to ILG Naturals, the trusted Indian Spice and Cold-Pressed Oil brand renowned for our pure, delectable spice blends that reign supreme in your kitchen. Whether you're a seasoned chef or a passionate home cook, Kesari Nandan is here to elevate your daily culinary experience with our wide range of authentic spices and healthy oils.
        </p>

        {expanded && (
          <div className="narrative-more-content" style={{ display: 'block' }}>
            <p>
              At ILG Naturals, each batch of Kesari Nandan spices is prepared with meticulous care. Our farm-gate selection process guarantees unadulterated purity, high natural oil retention, and zero artificial coloring agents. From our slow cold-pressed Kachi Ghani mustard oils to stone-milled turmeric with high curcumin content, we honor traditional Indian Ayurvedic principles of culinary wellness.
            </p>
            <p style={{ marginTop: '10px' }}>
              Tested across stringent quality benchmarks (FSSAI, Agmark Grade 1), Kesari Nandan continues to inspire confidence across thousands of Indian homes, restaurants, and catering masters. Taste the difference that genuine purity and passion bring to your dining table!
            </p>
          </div>
        )}

        <button
          type="button"
          className="btn-read-more-toggle"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      </div>
    </section>
  );
};
