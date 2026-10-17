import React from 'react';

interface FooterProps {
  onNavigate: (page: string, categoryFilter?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          
          {/* Column 1: Information */}
          <div>
            <h4 className="footer-column-title">INFORMATION</h4>
            <ul className="footer-links">
              <li>
                <a href="#shipping" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#returns" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>
                  Return & Refund Policy
                </a>
              </li>
              <li>
                <a href="#privacy" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#quality" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>
                  Quality Assurance Policy
                </a>
              </li>
              <li>
                <a href="#terms" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h4 className="footer-column-title">EXPLORE</h4>
            <ul className="footer-links">
              <li>
                <a href="#shop-all" onClick={(e) => { e.preventDefault(); onNavigate('shop', 'all'); }}>
                  Shop All Spices
                </a>
              </li>
              <li>
                <a href="#shop-oils" onClick={(e) => { e.preventDefault(); onNavigate('shop', 'Cold-Pressed Oils'); }}>
                  Mustard Oils
                </a>
              </li>
              <li>
                <a href="#recipes" onClick={(e) => { e.preventDefault(); onNavigate('recipes'); }}>
                  Chef Recipes
                </a>
              </li>
              <li>
                <a href="#heritage" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>
                  Our Heritage
                </a>
              </li>
              <li>
                <a href="#quality-cert" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>
                  Quality Certifications
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="footer-column-title">SERVICES</h4>
            <ul className="footer-links">
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>
                  Contact Customer Care
                </a>
              </li>
              <li>
                <a href="#feedback" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>
                  Consumer Feedback
                </a>
              </li>
              <li>
                <a href="#wholesale" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>
                  Wholesale & Distributorship
                </a>
              </li>
              <li>
                <a href="#bulk" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>
                  Bulk HoReCa Orders
                </a>
              </li>
              <li>
                <a href="#export" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>
                  Export Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Also Available On */}
          <div>
            <h4 className="footer-column-title">ALSO AVAILABLE ON</h4>
            <div className="marketplaces-wrap">
              <div className="marketplace-text-logos">
                <span className="market-chip amazon"><i className="fab fa-amazon"></i> Amazon</span>
                <span className="market-chip flipkart"><i className="fas fa-shopping-bag"></i> Flipkart</span>
                <span className="market-chip blinkit"><i className="fas fa-bolt"></i> Blinkit</span>
                <span className="market-chip zepto"><i className="fas fa-rocket"></i> Zepto</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', marginTop: '10px' }}>
                Get ILG Naturals Kesari Nandan delivered to your doorstep within minutes through our quick-commerce & e-commerce partners.
              </p>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <span>ILG Naturals (Kesari Nandan Spices & Cold-Pressed Oils) &copy; 2026. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};
