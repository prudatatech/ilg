import React, { useState } from 'react';

interface ContactPageProps {
  onShowToast: (msg: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'General Consumer Query',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}!\n\nYour inquiry regarding "${formData.inquiryType}" has been successfully sent to ILG Naturals. Our team will contact you at ${formData.phone} shortly.`);
    setFormData({
      name: '',
      phone: '',
      email: '',
      inquiryType: 'General Consumer Query',
      message: ''
    });
    onShowToast("Message sent successfully!");
  };

  return (
    <div>
      <div className="contact-hero-header">
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 900, textTransform: 'uppercase' }}>
          CONTACT & WHOLESALE
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#ffde59', marginTop: '8px' }}>
          We are here to assist customers, chefs, distributors, and retail partners
        </p>
      </div>

      <div className="contact-layout-grid">
        {/* Left Info Box */}
        <div className="contact-card-box">
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--primary-red)', marginBottom: '24px', fontWeight: 800 }}>
            HEADQUARTERS & MILLS
          </h3>

          <div className="contact-info-row">
            <div className="contact-info-icon"><i className="fas fa-map-marker-alt"></i></div>
            <div>
              <strong style={{ color: '#222', fontSize: '0.95rem' }}>Corporate Address:</strong>
              <p style={{ fontSize: '0.9rem', color: '#555', marginTop: '4px' }}>
                Inderlal Grover Company (ILG Naturals)<br />
                Industrial Spice & Oils Estate, Phase 2,<br />
                Mumbai, Maharashtra - 400077, India
              </p>
            </div>
          </div>

          <div className="contact-info-row">
            <div className="contact-info-icon"><i className="fas fa-phone-alt"></i></div>
            <div>
              <strong style={{ color: '#222', fontSize: '0.95rem' }}>Customer Care Hotline:</strong>
              <p style={{ fontSize: '0.9rem', color: '#555', marginTop: '4px' }}>
                (022) 6777-4333 / +91 98765 43210<br />
                Mon - Sat (9:30 AM to 6:30 PM IST)
              </p>
            </div>
          </div>

          <div className="contact-info-row">
            <div className="contact-info-icon"><i className="fas fa-envelope"></i></div>
            <div>
              <strong style={{ color: '#222', fontSize: '0.95rem' }}>Email Inquiries:</strong>
              <p style={{ fontSize: '0.9rem', color: '#555', marginTop: '4px' }}>
                care@ilgnaturals.com (Orders & Queries)<br />
                wholesale@ilgnaturals.com (Distributorship)
              </p>
            </div>
          </div>

          <div className="contact-info-row">
            <div className="contact-info-icon"><i className="fas fa-truck-loading"></i></div>
            <div>
              <strong style={{ color: '#222', fontSize: '0.95rem' }}>Distribution & Bulk:</strong>
              <p style={{ fontSize: '0.9rem', color: '#555', marginTop: '4px' }}>
                HoReCa catering supply, private labelling, and pan-India dealer network.
              </p>
            </div>
          </div>
        </div>

        {/* Right Form Box */}
        <div className="contact-card-box">
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--dark-text)', marginBottom: '20px', fontWeight: 800 }}>
            SEND US A MESSAGE
          </h3>

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <div className="form-group" style={{ flex: 1, minWidth: '220px' }}>
                <label>Your Full Name *</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="e.g. Rajesh Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group" style={{ flex: 1, minWidth: '220px' }}>
                <label>Phone Number *</label>
                <input
                  type="tel"
                  className="form-control"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                className="form-control"
                required
                placeholder="rajesh@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Inquiry Nature</label>
              <select
                className="form-control"
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
              >
                <option value="General Consumer Query">General Consumer Query</option>
                <option value="Distributorship / Dealership">Distributorship / Dealership</option>
                <option value="Bulk HoReCa Purchase">Bulk HoReCa Purchase</option>
                <option value="Export Inquiry">Export Inquiry</option>
                <option value="Feedback / Quality">Feedback / Quality Review</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message / Order Requirements *</label>
              <textarea
                className="form-control"
                rows={4}
                required
                placeholder="Tell us how we can help you with Kesari Nandan products..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="btn-submit-form">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
