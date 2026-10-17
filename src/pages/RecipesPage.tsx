import React, { useState } from 'react';
import { Recipe } from '../data/recipes';

interface RecipesPageProps {
  recipes: Recipe[];
  onOpenRecipe: (recipe: Recipe) => void;
  onNavigateShop?: (category?: string) => void;
}

export const RecipesPage: React.FC<RecipesPageProps> = ({
  recipes,
  onOpenRecipe,
  onNavigateShop
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');

  // Filter recipes based on category, search term, and difficulty
  const filtered = recipes.filter((recipe) => {
    const matchesCategory =
      activeCategory === 'all' || recipe.category === activeCategory;
    const matchesDifficulty =
      difficultyFilter === 'all' ||
      recipe.difficulty.toLowerCase() === difficultyFilter.toLowerCase();
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      recipe.title.toLowerCase().includes(query) ||
      recipe.spicesUsed.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query) ||
      (recipe.ingredients &&
        recipe.ingredients.some((ing) => ing.toLowerCase().includes(query)));

    return matchesCategory && matchesDifficulty && matchesQuery;
  });

  return (
    <div className="recipes-collection-page">
      {/* Hero Header with Badshah-styled Red/Gold Accents */}
      <div className="recipes-hero-header">
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(255, 238, 34, 0.2)',
              color: 'var(--accent-yellow)',
              border: '1px solid rgba(255, 238, 34, 0.4)',
              borderRadius: '30px',
              padding: '6px 20px',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '14px'
            }}
          >
            <i className="fas fa-utensils" style={{ marginRight: '6px' }}></i> Culinary Heritage & Cookbook
          </span>
          <h1 className="recipes-hero-title">AUTHENTIC INDIAN RECIPE COLLECTION</h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#ffffff',
              maxWidth: '820px',
              margin: '12px auto 0',
              lineHeight: 1.6,
              opacity: 0.95
            }}
          >
            Handcrafted regional delicacies slow-cooked with 100% stone-ground <strong style={{ color: 'var(--accent-yellow)' }}>Kesari Nandan Spices</strong> & pure cold-pressed <strong style={{ color: 'var(--accent-yellow)' }}>Kachi Ghani Mustard Oil</strong>.
          </p>

          {/* Quick stats row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '30px',
              marginTop: '25px',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffde59', fontSize: '0.9rem' }}>
              <i className="fas fa-check-circle"></i> <span>Heirloom Indian Recipes</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffde59', fontSize: '0.9rem' }}>
              <i className="fas fa-fire"></i> <span>Cold-Pressed Mustard Oil Tadka</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffde59', fontSize: '0.9rem' }}>
              <i className="fas fa-award"></i> <span>Pure Stone-Milled Masalas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '24px 0', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
        <div className="container" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 20px' }}>
          
          {/* Search Box */}
          <div style={{ maxWidth: '640px', margin: '0 auto 20px', position: 'relative' }}>
            <i
              className="fas fa-search"
              style={{
                position: 'absolute',
                left: '18px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#888',
                fontSize: '1rem'
              }}
            ></i>
            <input
              type="text"
              placeholder="Search by recipe name, spice (e.g. Mustard Oil, Haldi, Biryani)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 18px 12px 48px',
                fontSize: '0.95rem',
                border: '2px solid #ddd',
                borderRadius: '30px',
                outline: 'none',
                transition: 'border-color 0.2s',
                fontFamily: 'var(--font-body)'
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--primary-red)')}
              onBlur={(e) => (e.target.style.borderColor = '#ddd')}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#999',
                  cursor: 'pointer',
                  fontSize: '1.1rem'
                }}
              >
                &times;
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="recipe-filter-bar">
            {[
              { label: 'All Recipes', val: 'all', count: recipes.length, icon: 'fa-utensils' },
              { label: 'Traditional Curries & Saag', val: 'curry', count: recipes.filter(r => r.category === 'curry').length, icon: 'fa-pepper-hot' },
              { label: 'Rice & Biryani', val: 'rice', count: recipes.filter(r => r.category === 'rice').length, icon: 'fa-fire' },
              { label: 'Heirloom Pickles & Achar', val: 'pickle', count: recipes.filter(r => r.category === 'pickle').length, icon: 'fa-mortar-pestle' },
              { label: 'Festive Drinks & Thandai', val: 'beverage', count: recipes.filter(r => r.category === 'beverage').length, icon: 'fa-glass-cheers' }
            ].map((tab) => (
              <button
                key={tab.val}
                type="button"
                className={`recipe-filter-btn ${activeCategory === tab.val ? 'active' : ''}`}
                onClick={() => setActiveCategory(tab.val)}
              >
                <i className={`fas ${tab.icon}`}></i>
                <span>{tab.label}</span>
                <span className="recipe-filter-count">{tab.count}</span>
              </button>
            ))}
          </div>

          {/* Difficulty Quick Filter */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '18px',
              fontSize: '0.85rem',
              color: '#666'
            }}
          >
            <span style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '0.78rem', letterSpacing: '0.5px' }}>
              Level:
            </span>
            {['all', 'easy', 'medium', 'hard'].map((diff) => (
              <button
                key={diff}
                type="button"
                className={`recipe-diff-btn ${difficultyFilter === diff ? 'active' : ''}`}
                onClick={() => setDifficultyFilter(diff)}
              >
                {diff === 'all' ? 'All Difficulties' : diff}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Recipe Cards Grid */}
      <section style={{ padding: '40px 0 80px', background: '#faf9f6' }}>
        <div className="container" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 20px' }}>
          
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', background: '#fff', borderRadius: '12px' }}>
              <i className="fas fa-utensils" style={{ fontSize: '3rem', color: '#ccc', marginBottom: '16px' }}></i>
              <h3 style={{ fontSize: '1.4rem', color: '#333', marginBottom: '8px' }}>No Recipes Found</h3>
              <p style={{ color: '#777', marginBottom: '20px' }}>
                We couldn't find any recipes matching your search "{searchQuery}".
              </p>
              <button
                type="button"
                className="btn-primary-red"
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); setDifficultyFilter('all'); }}
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="recipes-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '30px' }}>
              {filtered.map((recipe) => (
                <div
                  key={recipe.id}
                  className="recipe-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#ffffff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 18px rgba(0,0,0,0.06)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onClick={() => onOpenRecipe(recipe)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') onOpenRecipe(recipe); }}
                >
                  {/* Recipe Image with Badge */}
                  <div className="recipe-image-wrap" style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                    <span
                      className="recipe-badge-tag"
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        zIndex: 2,
                        backgroundColor: 'var(--primary-red)',
                        color: '#fff',
                        padding: '4px 12px',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        borderRadius: '4px',
                        letterSpacing: '0.5px'
                      }}
                    >
                      {recipe.badge}
                    </span>
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '60px',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)'
                      }}
                    ></div>
                  </div>

                  {/* Recipe Info */}
                  <div className="recipe-info-wrap" style={{ padding: '22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3
                      className="recipe-title"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#222',
                        marginBottom: '10px',
                        lineHeight: 1.4
                      }}
                    >
                      {recipe.title}
                    </h3>
                    
                    <p style={{ fontSize: '0.88rem', color: '#666', marginBottom: '16px', lineHeight: 1.6, flex: 1 }}>
                      {recipe.description}
                    </p>

                    {/* Key Spice Box */}
                    <div
                      style={{
                        fontSize: '0.82rem',
                        background: '#fff8eb',
                        borderLeft: '3px solid var(--accent-yellow)',
                        padding: '8px 12px',
                        borderRadius: '0 6px 6px 0',
                        marginBottom: '16px',
                        color: '#444'
                      }}
                    >
                      <strong style={{ color: 'var(--primary-red)' }}>
                        <i className="fas fa-pepper-hot" style={{ marginRight: '5px' }}></i> Paired Spice / Oil:
                      </strong>{' '}
                      {recipe.pairedProduct || recipe.spicesUsed.split(',')[0]}
                    </div>

                    {/* Meta Info: Time, Servings, Difficulty */}
                    <div
                      className="recipe-meta"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        paddingTop: '12px',
                        borderTop: '1px solid #eee',
                        fontSize: '0.82rem',
                        color: '#555'
                      }}
                    >
                      <div className="recipe-meta-item">
                        <i className="far fa-clock" style={{ color: 'var(--primary-red)' }}></i> {recipe.time}
                      </div>
                      <div className="recipe-meta-item">
                        <i className="fas fa-users" style={{ color: 'var(--primary-red)' }}></i> {recipe.serves}
                      </div>
                      <div
                        className="recipe-meta-item"
                        style={{
                          color: 'var(--primary-red)',
                          fontWeight: 700,
                          marginLeft: 'auto',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        Cook This &rarr;
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Mustard Oil Culinary Heritage Tip Banner */}
          <div
            style={{
              marginTop: '60px',
              background: 'linear-gradient(135deg, #CA2100 0%, #8A1500 100%)',
              color: '#ffffff',
              borderRadius: '16px',
              padding: '35px 40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '30px',
              flexWrap: 'wrap',
              boxShadow: '0 8px 30px rgba(202,33,0,0.25)'
            }}
          >
            <div style={{ flex: '1 1 500px' }}>
              <span
                style={{
                  background: 'var(--accent-yellow)',
                  color: '#000',
                  fontWeight: 800,
                  fontSize: '0.75rem',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}
              >
                Chef's Secret Tip
              </span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginTop: '12px', color: '#fff' }}>
                How to Temper with Kesari Nandan Kachi Ghani Mustard Oil
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#ffe4e0', marginTop: '8px', lineHeight: 1.6 }}>
                Always heat cold-pressed mustard oil in your kadai until you observe a gentle white smoke, then turn off the flame for 30 seconds before tossing in cumin seeds and whole red chilies. This locks in the signature pungent aroma while eliminating any bitter raw bite.
              </p>
            </div>
            <div>
              {onNavigateShop && (
                <button
                  type="button"
                  style={{
                    backgroundColor: 'var(--accent-yellow)',
                    color: '#000000',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '14px 28px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
                  }}
                  onClick={() => onNavigateShop('Cold-Pressed Oils')}
                >
                  <i className="fas fa-shopping-basket" style={{ marginRight: '8px' }}></i> Shop Pure Mustard Oils
                </button>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

