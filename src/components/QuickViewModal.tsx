import React, { useState } from 'react';
import { Product } from '../data/products';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, price: number) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);

  if (!product) return null;

  const currentVariant = product.variants[selectedVariantIdx] || product.variants[0];

  return (
    <div className="modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-window">
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>

        <div className="quickview-layout-wrap">
          <div className="quickview-img-col">
            <img
              src={product.image}
              alt={product.name}
              style={{ maxHeight: '320px', objectFit: 'contain' }}
            />
          </div>

          <div className="quickview-info-col">
            <span
              style={{
                fontSize: '0.8rem',
                color: 'var(--primary-red)',
                fontWeight: 700,
                textTransform: 'uppercase'
              }}
            >
              {product.category}
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.6rem',
                color: '#111',
                margin: '6px 0 12px'
              }}
            >
              {product.name}
            </h2>

            <div className="star-rating" style={{ marginBottom: '12px' }}>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <span style={{ color: '#666', fontSize: '0.8rem', marginLeft: '6px' }}>
                ({product.reviews} customer reviews)
              </span>
            </div>

            <div
              style={{
                fontSize: '1.6rem',
                fontWeight: 800,
                color: 'var(--primary-red)',
                marginBottom: '14px'
              }}
            >
              ₹{currentVariant.price}.00
              {currentVariant.original && (
                <span style={{ fontSize: '1rem', color: '#888', textDecoration: 'line-through', marginLeft: '10px' }}>
                  ₹{currentVariant.original}.00
                </span>
              )}
            </div>

            <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.7, marginBottom: '20px' }}>
              {product.description}
            </p>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
                Select Pack Size:
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {product.variants.map((v, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`weight-btn ${i === selectedVariantIdx ? 'selected' : ''}`}
                    onClick={() => setSelectedVariantIdx(i)}
                  >
                    {v.size}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="btn-add-to-cart"
              style={{ padding: '14px' }}
              onClick={() => {
                onAddToCart(product, currentVariant.size, currentVariant.price);
                onClose();
              }}
            >
              <i className="fas fa-shopping-basket"></i> Add to Cart (₹{currentVariant.price}.00)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
