import React from 'react';

interface FloatingRecipeBadgeProps {
  onDownload: () => void;
}

export const FloatingRecipeBadge: React.FC<FloatingRecipeBadgeProps> = ({ onDownload }) => {
  return (
    <div
      className="floating-recipe-badge"
      onClick={onDownload}
      title="Get Free Recipe Book"
      role="button"
      tabIndex={0}
    >
      <div className="badge-logo-chip">
        <img src="/Logo (2).png" alt="ILG Naturals Logo" />
      </div>
      <div className="badge-text-wrap">
        <span className="badge-headline">GET ILG'S AMAZING</span>
        <span className="badge-sub">COLLECTION OF RECIPES</span>
        <span className="badge-download-pill">
          <i className="fas fa-file-pdf"></i> DOWNLOAD PDF
        </span>
      </div>
    </div>
  );
};
