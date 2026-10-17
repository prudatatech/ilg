import React from 'react';
import { Recipe } from '../data/recipes';

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-window">
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>

        <div>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '260px',
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: '20px'
            }}
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <span className="recipe-badge-tag">{recipe.badge}</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.8rem',
              color: 'var(--primary-red)',
              marginBottom: '12px'
            }}
          >
            {recipe.title}
          </h2>

          <div
            style={{
              display: 'flex',
              gap: '20px',
              padding: '12px 0',
              borderTop: '1px solid #eee',
              borderBottom: '1px solid #eee',
              marginBottom: '20px',
              fontSize: '0.88rem',
              color: '#555',
              flexWrap: 'wrap'
            }}
          >
            <div>
              <strong>Prep Time:</strong> {recipe.time}
            </div>
            <div>
              <strong>Servings:</strong> {recipe.serves}
            </div>
            <div>
              <strong>Difficulty:</strong> {recipe.difficulty}
            </div>
          </div>

          <div
            style={{
              background: '#fff8eb',
              borderLeft: '4px solid var(--primary-red)',
              padding: '14px 18px',
              borderRadius: '4px',
              marginBottom: '20px'
            }}
          >
            <strong style={{ color: 'var(--primary-red)', fontSize: '0.95rem' }}>
              Key Spices Used:
            </strong>
            <p style={{ fontSize: '0.9rem', color: '#333', marginTop: '4px' }}>
              {recipe.spicesUsed}
            </p>
          </div>

          {recipe.ingredients && recipe.ingredients.length > 0 && (
            <div style={{ marginBottom: '22px' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  color: '#222',
                  marginBottom: '10px'
                }}
              >
                Fresh Ingredients & Spices:
              </h3>
              <ul className="recipe-ingredients-grid">
                {recipe.ingredients.map((ing, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.88rem',
                      background: '#fcfcfc',
                      padding: '6px 10px',
                      borderRadius: '4px',
                      border: '1px solid #eee'
                    }}
                  >
                    <i className="fas fa-check-circle" style={{ color: 'var(--primary-red)', fontSize: '0.8rem' }}></i>
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.2rem',
              color: '#222',
              marginBottom: '12px'
            }}
          >
            Step-by-Step Cooking Method:
          </h3>
          <ol
            style={{
              paddingLeft: '20px',
              fontSize: '0.95rem',
              color: '#444',
              lineHeight: 1.8
            }}
          >
            {recipe.instructions.map((step, idx) => (
              <li key={idx} style={{ marginBottom: '8px' }}>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
