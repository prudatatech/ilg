import React, { useState } from 'react';
import { Product } from '../data/products';

interface BestSellersSectionProps {
  products: Product[];
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
  onAddToCart: (product: Product, size: string, price: number) => void;
  onQuickView: (product: Product) => void;
  onToggleWishlist: () => void;
  onNavigateShop?: () => void;
}

export const BestSellersSection: React.FC<BestSellersSectionProps> = ({
  products,
  activeCategory = 'all',
  onSelectCategory,
  onAddToCart,
  onQuickView,
  onToggleWishlist,
  onNavigateShop
}) => {
  // Local state to track selected variant index for each product
  const [selectedVariants, setSelectedVariants] = useState<{ [productId: number]: number }>({
    1: 2, // 500g for Haldi
    2: 1, // 200g for Lal Mirch
    3: 1, // 200g for Jeera
    4: 1, // 100g for Pepper
    5: 1, // 1L for Black Mustard
    6: 1, // 1L for Yellow Mustard
    7: 0,
    8: 0
  });

  const categoryTabs = [
    { label: 'All Products', val: 'all' },
    { label: 'Grounded Spices', val: 'Grounded Spices' },
    { label: 'Mustard Oils', val: 'Mustard Oils' },
    { label: 'Whole Spices', val: 'Whole Spices' },
    { label: 'Blended Spices', val: 'Blended Spices' },
    { label: 'Kesari Specials', val: 'Kesari Specials' },
    { label: 'New Arrivals', val: 'New Arrivals' }
  ];

  const handleSelectVariant = (productId: number, variantIndex: number) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [productId]: variantIndex
    }));
  };

  // Filter products by category
  const displayedProducts = products.filter((p) => {
    if (activeCategory === 'all') return true;
    const pCat = p.category.toLowerCase();
    const aCat = activeCategory.toLowerCase();
    if (aCat.includes('mustard') || aCat.includes('oil')) {
      return pCat.includes('mustard') || pCat.includes('oil');
    }
    if (aCat.includes('new') || aCat === 'new arrivals') {
      return pCat.includes('new') || p.isNew === true;
    }
    return pCat.includes(aCat);
  });

  return (
    <section className="bestsellers-section" id="bestsellersSection">
      <div className="container">
        <div className="bestsellers-header-wrap">
          <h2 className="bestsellers-title">AUTHENTIC KESARI NANDAN PRODUCTS</h2>
          <div className="category-title-line"></div>
          <p style={{ color: '#666', fontSize: '0.95rem', marginTop: '8px' }}>
            {activeCategory === 'all'
              ? 'Browse our complete collection of stone-ground spices & kachi ghani mustard oils'
              : `Showing genuine products in ${activeCategory}`}
          </p>
        </div>

        {/* Interactive Category Filter Buttons on Home */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            margin: '20px 0 35px'
          }}
        >
          {categoryTabs.map((tab) => {
            const isTabActive =
              activeCategory.toLowerCase() === tab.val.toLowerCase() ||
              (activeCategory.toLowerCase().includes('mustard') && tab.val === 'Mustard Oils');

            return (
              <button
                key={tab.val}
                type="button"
                className={`filter-tab-btn ${isTabActive ? 'active' : ''}`}
                style={{
                  padding: '8px 18px',
                  borderRadius: '25px',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: isTabActive ? '2px solid var(--primary-red)' : '1px solid #ddd',
                  background: isTabActive ? 'var(--primary-red)' : '#ffffff',
                  color: isTabActive ? '#ffffff' : '#333',
                  boxShadow: isTabActive ? '0 4px 12px rgba(202, 33, 0, 0.25)' : 'none',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => onSelectCategory && onSelectCategory(tab.val)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid with High-Res Images */}
        <div className="product-grid">
          {displayedProducts.map((product) => {
            const currentVarIndex = selectedVariants[product.id] ?? 0;
            const currentVariant = product.variants[currentVarIndex] || product.variants[0];

            return (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <div className="product-veg-mark">
                    <span></span>
                  </div>

                  {product.badge && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: 'var(--primary-red)',
                        color: '#fff',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        padding: '2px 8px',
                        borderRadius: '3px',
                        zIndex: 2,
                        letterSpacing: '0.5px'
                      }}
                    >
                      {product.badge}
                    </span>
                  )}

                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-primary-img"
                    loading="lazy"
                  />

                  <div className="product-quick-actions">
                    <button
                      type="button"
                      className="quick-action-btn"
                      title="Quick View"
                      onClick={() => onQuickView(product)}
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                    <button
                      type="button"
                      className="quick-action-btn"
                      title="Add to Wishlist"
                      onClick={onToggleWishlist}
                    >
                      <i className="far fa-heart"></i>
                    </button>
                  </div>
                </div>

                <div className="product-details">
                  <span className="product-category-crumb">{product.category}</span>
                  <h3 className="product-title">{product.name}</h3>

                  <div className="star-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span className="rating-count">({product.reviews})</span>
                  </div>

                  <div className="product-pricing-wrap">
                    <span className="current-price">₹{currentVariant.price}.00</span>
                    {currentVariant.original && (
                      <span className="original-price">₹{currentVariant.original}.00</span>
                    )}
                  </div>

                  {/* Weight Selector */}
                  <div className="product-weight-selector">
                    {product.variants.map((v, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`weight-btn ${idx === currentVarIndex ? 'selected' : ''}`}
                        onClick={() => handleSelectVariant(product.id, idx)}
                      >
                        {v.size}
                      </button>
                    ))}
                  </div>

                  {/* Add to Cart */}
                  <button
                    type="button"
                    className="btn-add-to-cart"
                    onClick={() => onAddToCart(product, currentVariant.size, currentVariant.price)}
                  >
                    <i className="fas fa-shopping-basket"></i> Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All in Shop Button */}
        {onNavigateShop && (
          <div style={{ textAlign: 'center', marginTop: '45px' }}>
            <button
              type="button"
              className="btn-primary-red"
              style={{
                padding: '14px 36px',
                fontSize: '0.95rem',
                fontWeight: 800,
                letterSpacing: '1px'
              }}
              onClick={onNavigateShop}
            >
              EXPLORE COMPLETE SHOP CATALOG &rarr;
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
