import React from 'react';

interface CategoriesSectionProps {
  activeCategory?: string;
  onSelectCategory: (category: string) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  activeCategory = 'all',
  onSelectCategory
}) => {
  const categories = [
    {
      name: "Grounded Spices",
      query: "Grounded Spices",
      image: "/Haldi Powder.png",
      tag: "Pure Haldi & Mirch"
    },
    {
      name: "Mustard Oils",
      query: "Mustard Oils",
      image: "/Yellow Mustard Oil 1 lt .png",
      tag: "Cold-Pressed Ghani"
    },
    {
      name: "Whole Spices",
      query: "Whole Spices",
      image: "/Jeera Powder.png",
      tag: "Sabut Malabar"
    },
    {
      name: "Blended Spices",
      query: "Blended Spices",
      image: "/assets/recipe-kadai-paneer.jpg",
      tag: "Royal Garam & Chole"
    },
    {
      name: "Kesari Specials",
      query: "Kesari Specials",
      image: "/assets/recipe-thandai.jpg",
      tag: "Saffron & Thandai"
    },
    {
      name: "New Arrivals",
      query: "New Arrivals",
      image: "/Black Mustard Oil 1ltr.png",
      tag: "Fresh Harvest 2026"
    }
  ];

  const handleCardClick = (query: string) => {
    onSelectCategory(query);
    const target = document.getElementById('bestsellersSection');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="categories-section" id="categories">
      <div className="container">
        <div className="category-header-wrap">
          <h2 className="category-title-main">OUR CATEGORIES</h2>
          <div className="category-title-line"></div>
          <p style={{ color: '#666', fontSize: '0.95rem', marginTop: '8px' }}>
            Click any category below to explore pure spices & cold-pressed oils
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((cat, idx) => {
            const isSelected =
              activeCategory.toLowerCase() === cat.query.toLowerCase() ||
              (activeCategory.toLowerCase().includes('mustard') && cat.query === 'Mustard Oils');

            return (
              <div
                key={idx}
                className={`category-card ${isSelected ? 'active-cat-card' : ''}`}
                onClick={() => handleCardClick(cat.query)}
                role="button"
                tabIndex={0}
                style={{
                  cursor: 'pointer',
                  border: isSelected ? '2px solid var(--primary-red)' : '2px solid transparent',
                  borderRadius: '16px',
                  padding: '16px 10px',
                  background: isSelected ? '#fff7f5' : '#ffffff',
                  boxShadow: isSelected
                    ? '0 6px 20px rgba(202, 33, 0, 0.15)'
                    : '0 4px 12px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  textAlign: 'center'
                }}
              >
                {/* Product Image Circle */}
                <div
                  className="category-icon-circle"
                  style={{
                    width: '95px',
                    height: '95px',
                    borderRadius: '50%',
                    margin: '0 auto 10px',
                    overflow: 'hidden',
                    background: '#fdfbf7',
                    border: '3px solid var(--accent-yellow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                  }}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      padding: '4px',
                      transition: 'transform 0.4s ease'
                    }}
                  />
                </div>

                <span
                  className="category-name"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    color: isSelected ? 'var(--primary-red)' : '#222',
                    marginTop: '6px'
                  }}
                >
                  {cat.name}
                </span>

                <span
                  style={{
                    display: 'block',
                    fontSize: '0.75rem',
                    color: '#777',
                    marginTop: '2px'
                  }}
                >
                  {cat.tag}
                </span>

                {isSelected && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '12px',
                      background: 'var(--primary-red)',
                      color: '#fff',
                      fontSize: '0.65rem',
                      fontWeight: 800,
                      padding: '2px 8px',
                      borderRadius: '10px'
                    }}
                  >
                    ACTIVE
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
