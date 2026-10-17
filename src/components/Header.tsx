import React, { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string, categoryFilter?: string) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onSearch: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  cartCount,
  wishlistCount,
  onOpenCart,
  onSearch
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <>
      {/* Black Header Top Bar */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-left">
            <a href="tel:+919876543210">
              <i className="fas fa-phone-alt"></i> (022) 6777-4333
            </a>
            <a href="mailto:care@ilgnaturals.com">
              <i className="fas fa-envelope"></i> care@ilgnaturals.com
            </a>
            {/* Top Bar Recipe Collection Button */}
            <button
              type="button"
              className="topbar-recipe-pill"
              onClick={() => onNavigate('recipes')}
              title="Explore Kesari Nandan Authentic Recipe Collection"
            >
              <i className="fas fa-utensils"></i> RECIPE COLLECTION
            </button>
          </div>
          <div className="header-top-right">
            <form onSubmit={handleSearchSubmit} className="search-box-wrap">
              <input
                type="text"
                className="search-input"
                placeholder="Search Spices & Oils..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="search-btn" title="Search">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Navigation Header (Badshah Red) */}
      <header className="header-main">
        <div className="container">
          
          {/* Left Menu */}
          <div className="nav-col nav-left">
            <ul className="main-menu">
              <li>
                <a
                  href="#home"
                  className={currentPage === 'home' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#shop"
                  className={currentPage === 'shop' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); onNavigate('shop'); }}
                >
                  SHOP <i className="fas fa-chevron-down" style={{ fontSize: '0.65rem', marginLeft: '4px' }}></i>
                </a>
                <div className="dropdown-menu">
                  <a href="#all" onClick={(e) => { e.preventDefault(); onNavigate('shop', 'all'); }}>
                    All Products <i className="fas fa-angle-right"></i>
                  </a>
                  <a href="#grounded" onClick={(e) => { e.preventDefault(); onNavigate('shop', 'Grounded Spices'); }}>
                    Grounded Spices <i className="fas fa-angle-right"></i>
                  </a>
                  <a href="#oils" onClick={(e) => { e.preventDefault(); onNavigate('shop', 'Mustard Oils'); }}>
                    Mustard Oils (Kachi Ghani) <i className="fas fa-angle-right"></i>
                  </a>
                  <a href="#whole" onClick={(e) => { e.preventDefault(); onNavigate('shop', 'Whole Spices'); }}>
                    Whole Spices (साबुत मसाले) <i className="fas fa-angle-right"></i>
                  </a>
                  <a href="#blended" onClick={(e) => { e.preventDefault(); onNavigate('shop', 'Blended Spices'); }}>
                    Blended Spices (गरम व छोले) <i className="fas fa-angle-right"></i>
                  </a>
                  <a href="#kesari" onClick={(e) => { e.preventDefault(); onNavigate('shop', 'Kesari Specials'); }}>
                    Kesari Specials & Thandai <i className="fas fa-angle-right"></i>
                  </a>
                  <a href="#new" onClick={(e) => { e.preventDefault(); onNavigate('shop', 'New Arrivals'); }}>
                    New Arrivals (Fresh Harvest) <i className="fas fa-angle-right"></i>
                  </a>
                </div>
              </li>
              <li>
                <a
                  href="#about"
                  className={currentPage === 'about' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); onNavigate('about'); }}
                >
                  ABOUT US
                </a>
              </li>
            </ul>
          </div>

          {/* Center Brand Logo */}
          <div className="nav-center">
            <a
              href="#home"
              className="site-logo"
              onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
            >
              <img src="/Logo (2).png" alt="ILG Naturals Kesari Nandan Spices & Oils" />
            </a>
          </div>

          {/* Right Menu */}
          <div className="nav-col nav-right">
            <ul className="main-menu">
              <li>
                <a
                  href="#recipes"
                  className={`nav-recipe-btn ${currentPage === 'recipes' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); onNavigate('recipes'); }}
                >
                  <i className="fas fa-utensils" style={{ marginRight: '6px' }}></i> RECIPES
                  <span className="recipe-tag-pill">HOT</span>
                </a>
              </li>
              <li>
                <a
                  href="#heritage"
                  onClick={(e) => { e.preventDefault(); onNavigate('about'); }}
                >
                  HERITAGE
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={currentPage === 'contact' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                >
                  CONTACT US
                </a>
              </li>
            </ul>

            {/* Header Actions */}
            <div className="header-actions">
              <a
                href="#account"
                className="header-action-btn"
                title="My Account"
                onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
              >
                <i className="far fa-user"></i>
              </a>
              <div
                className="header-action-btn"
                title="Wishlist"
                onClick={() => onNavigate('shop')}
              >
                <i className="far fa-heart"></i>
                <span className="action-badge wishlist-badge">{wishlistCount}</span>
              </div>
              <div
                className="header-action-btn"
                title="Shopping Cart"
                onClick={onOpenCart}
              >
                <i className="fas fa-shopping-basket"></i>
                <span className="action-badge cart-count-badge">{cartCount}</span>
              </div>
              <button
                className="mobile-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={{ background: '#A31A00', padding: '15px 20px', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a href="#home" style={{ color: '#fff', fontWeight: 700 }} onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}>
                  HOME
                </a>
              </li>
              <li>
                <a href="#shop" style={{ color: '#fff', fontWeight: 700 }} onClick={() => { onNavigate('shop'); setMobileMenuOpen(false); }}>
                  SHOP PRODUCTS
                </a>
              </li>
              <li>
                <a
                  href="#recipes"
                  style={{
                    color: 'var(--accent-yellow)',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onClick={() => { onNavigate('recipes'); setMobileMenuOpen(false); }}
                >
                  <i className="fas fa-utensils"></i> RECIPES COLLECTION
                  <span style={{ background: 'var(--accent-yellow)', color: '#000', fontSize: '0.65rem', padding: '2px 6px', borderRadius: '10px', fontWeight: 800 }}>HOT</span>
                </a>
              </li>
              <li>
                <a href="#about" style={{ color: '#fff', fontWeight: 700 }} onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }}>
                  ABOUT US & HERITAGE
                </a>
              </li>
              <li>
                <a href="#contact" style={{ color: '#fff', fontWeight: 700 }} onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}>
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};
