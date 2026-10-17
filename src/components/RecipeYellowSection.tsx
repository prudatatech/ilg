import React from 'react';
import { Recipe } from '../data/recipes';

interface RecipeYellowSectionProps {
  recipes: Recipe[];
  onOpenRecipe: (recipe: Recipe) => void;
  onNavigateRecipes: () => void;
}

export const RecipeYellowSection: React.FC<RecipeYellowSectionProps> = ({
  recipes,
  onOpenRecipe,
  onNavigateRecipes
}) => {
  return (
    <section className="recipes-yellow-section" id="recipes">
      <div className="container">
        <div className="recipes-heading-wrap">
          <h2 className="recipes-main-heading">TRADITIONAL INDIAN RECIPES</h2>
          <p className="recipes-sub-heading">
            Cook delicious authentic feasts with Kesari Nandan Spices & Pure Mustard Oils
          </p>
        </div>

        <div className="recipes-grid">
          {recipes.slice(0, 3).map((recipe) => (
            <div
              key={recipe.id}
              className="recipe-card"
              onClick={() => onOpenRecipe(recipe)}
              role="button"
              tabIndex={0}
            >
              <div className="recipe-image-wrap">
                <span className="recipe-badge-tag">{recipe.badge}</span>
                <img src={recipe.image} alt={recipe.title} loading="lazy" />
              </div>
              <div className="recipe-info-wrap">
                <h4 className="recipe-title">{recipe.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#555', marginBottom: '12px', lineHeight: 1.5 }}>
                  {recipe.description.substring(0, 95)}...
                </p>
                <div className="recipe-meta">
                  <div className="recipe-meta-item">
                    <i className="far fa-clock"></i> {recipe.time}
                  </div>
                  <div className="recipe-meta-item">
                    <i className="fas fa-utensils"></i> {recipe.serves}
                  </div>
                  <div className="recipe-meta-item" style={{ color: 'var(--primary-red)', fontWeight: 700, marginLeft: 'auto' }}>
                    View Recipe &rarr;
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="recipe-view-btn-wrap">
          <button
            type="button"
            className="btn-read-more-recipes"
            onClick={onNavigateRecipes}
          >
            Read More Recipes
          </button>
        </div>
      </div>
    </section>
  );
};
