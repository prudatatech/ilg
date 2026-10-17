import React, { useState, useEffect } from 'react';
import { Product } from '../data/products';

interface ShopPageProps {
  products: Product[];
  initialCategory?: string;
  onAddToCart: (product: Product, size: string, price: number) => void;
  onQuickView: (product: Product) => void;
  onToggleWishlist: () => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  products,
  initialCategory = 'all',
  onAddToCart,
  onQuickView,
  onToggleWishlist
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [sortBy, setSortBy] = useState<string>('popular');
  const [selectedVariants, setSelectedVariants] = useState<{ [productId: number]: number }>({
    1: 2,
    2: 1,
    3: 2,
    4: 1,
    5: 1,
    6: 1,
    7: 0,
    8: 0
  });

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const handleSelectVariant = (productId: number, variantIndex: number) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [productId]: variantIndex
    }));
  };

  // Filter products
  let filtered = products;
  if (selectedCategory !== 'all') {
    filtered = filtered.filter((p) => {
      const pCat = p.category.toLowerCase();
      const sCat = selectedCategory.toLowerCase();
      if (sCat.includes('mustard') || sCat.includes('oil')) {
        return pCat.includes('mustard') || pCat.includes('oil');
      }
      if (sCat.includes('new') || sCat === 'new arrivals') {
        return pCat.includes('new') || p.isNew === true;
      }
      return pCat.includes(sCat);
    });
  }

  // Sort products
  const sorted = [...filtered].sort((a, b) => {
    const aVar = a.variants[selectedVariants[a.id] ?? 0] || a.variants[0];
    const bVar = b.variants[selectedVariants[b.id] ?? 0] || b.variants[0];

    if (sortBy === 'price-low') {
      return aVar.price - bVar.price;
    } else if (sortBy === 'price-high') {
      return bVar.price - aVar.price;
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    return b.reviews - a.reviews;
  });

  return (
    <div>
      {/* Header Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #CA2100 0%, #851200 100%)',
          color: '#ffffff',
          padding: '50px 20px',
          textAlign: 'center'
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '2.8rem',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
        >
          KESARI NANDAN PRODUCTS
        </h1>
        <p style={{ fontSize: '1.1rem', marginTop: '8px', color: '#ffde59' }}>
          100% Pure, Stone-Ground Spices & Cold-Pressed Mustard Oils
        </p>
      </div>

      {/* Filter and Sort Toolbar */}
      <div
        style={{
          maxWidth: '1300px',
          margin: '30px auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}
      >
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {[
            { label: 'All Products', val: 'all' },
            { label: 'Grounded Spices', val: 'Grounded Spices' },
            { label: 'Mustard Oils', val: 'Mustard Oils' },
            { label: 'Whole Spices', val: 'Whole Spices' },
            { label: 'Blended Spices', val: 'Blended Spices' },
            { label: 'Kesari Specials', val: 'Kesari Specials' },
            { label: 'New Arrivals', val: 'New Arrivals' }
          ].map((cat) => (
            <button
              key={cat.val}
              type="button"
              className={`filter-tab-btn ${
                selectedCategory.toLowerCase() === cat.val.toLowerCase() ||
                (selectedCategory.toLowerCase().includes('mustard') && cat.val === 'Mustard Oils')
                  ? 'active'
                  : ''
              }`}
              onClick={() => setSelectedCategory(cat.val)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div>
          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="popular">Sort by: Popularity</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Catalog Grid */}
      <section style={{ padding: '20px 0 80px' }}>
        <div className="container" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 20px' }}>
          <div className="product-grid">
            {sorted.map((product) => {
              const currentVarIndex = selectedVariants[product.id] ?? 0;
              const currentVariant = product.variants[currentVarIndex] || product.variants[0];

              return (
                <div key={product.id} className="product-card">
                  <div className="product-image-container">
                    <div className="product-veg-mark">
                      <span></span>
                    </div>
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
        </div>
      </section>
    </div>
  );
};
