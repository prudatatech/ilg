import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div>
      <div className="about-hero-header">
        <h1 className="about-hero-title">OUR STORY & HERITAGE</h1>
        <p style={{ fontSize: '1.15rem', color: '#ffde59', marginTop: '8px' }}>
          From Tin Cans on Bicycle to Ruling Millions of Dining Tables
        </p>
      </div>

      <section style={{ padding: '60px 0', background: '#ffffff' }} id="heritage">
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '50px', flexWrap: 'wrap', marginBottom: '60px' }}>
            <div style={{ flex: 1, minWidth: '320px' }}>
              <h2
                style={{
                  color: 'var(--primary-red)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.4rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  marginBottom: '20px'
                }}
              >
                A LEGACY ROOTED IN PURITY
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.8, marginBottom: '16px' }}>
                The story of <strong>ILG Naturals</strong> and our signature line <strong>Kesari Nandan</strong> is a celebration of enduring trust and Indian culinary pride. Founded with the conviction that food is medicine and that true flavor comes only from pure, unadulterated nature, we set out on bicycles carrying fresh spices packed inside tin canisters.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.8 }}>
                Homemakers and regional chefs fell in love with our intensely fragrant turmeric, fiery red chillies, and deeply pungent cold-pressed mustard oil. Today, our state-of-the-art facilities maintain the same age-old slow grinding and cold pressing techniques, guaranteeing that every meal you serve is pure, aromatic, and wholesome.
              </p>
            </div>

            <div style={{ flex: 1, minWidth: '320px', textAlign: 'center' }}>
              <img
                src="/assets/story-bicycle.jpg"
                alt="Vintage Spice Courier Bicycle"
                style={{ borderRadius: '12px', boxShadow: 'var(--shadow-md)' }}
              />
            </div>
          </div>

          {/* Quality Pillars */}
          <div style={{ textAlign: 'center', marginTop: '60px' }} id="quality">
            <h2
              style={{
                color: 'var(--primary-red)',
                fontFamily: 'var(--font-heading)',
                fontSize: '2.2rem',
                fontWeight: 900,
                textTransform: 'uppercase'
              }}
            >
              THE THREE PILLARS OF KESARI NANDAN
            </h2>
            <div className="category-title-line"></div>

            <div className="quality-pillar-grid">
              <div className="pillar-card">
                <div className="pillar-icon"><i className="fas fa-seedling"></i></div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px' }}>
                  100% Native Sourcing
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
                  Direct procurement from certified Indian farmers—Salem turmeric, Guntur chillies, Rajasthan mustard seeds, and Malabar black peppercorns.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon"><i className="fas fa-mortar-pestle"></i></div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px' }}>
                  Traditional Stone Milling
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
                  Slow cold-milling technology ensures zero heat degradation, capturing delicate volatile aromatic oils and natural active curcumin intact.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon"><i className="fas fa-heartbeat"></i></div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px' }}>
                  Kachi Ghani Cold-Pressed
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
                  Authentic wooden churners extract virgin mustard oils under 45°C without harsh chemicals, retaining pungency, Omega-3s, and heart health benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
