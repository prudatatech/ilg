import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { StorySection } from './components/StorySection';
import { CategoriesSection } from './components/CategoriesSection';
import { SpotlightSection } from './components/SpotlightSection';
import { RecipeYellowSection } from './components/RecipeYellowSection';
import { BestSellersSection } from './components/BestSellersSection';
import { InstagramSection } from './components/InstagramSection';
import { BrandNarrativeSection } from './components/BrandNarrativeSection';
import { Footer } from './components/Footer';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { RecipeModal } from './components/RecipeModal';

import { ShopPage } from './pages/ShopPage';
import { RecipesPage } from './pages/RecipesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

import { PRODUCTS_DATA, Product } from './data/products';
import { RECIPES_DATA, Recipe } from './data/recipes';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [shopCategoryFilter, setShopCategoryFilter] = useState<string>('all');
  
  // Cart State with LocalStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('ilg_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [wishlistCount, setWishlistCount] = useState<number>(2);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [activeRecipeModal, setActiveRecipeModal] = useState<Recipe | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  const [homeCategoryFilter, setHomeCategoryFilter] = useState<string>('all');

  // Sync Cart
  useEffect(() => {
    localStorage.setItem('ilg_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Scroll to Top Listener
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleNavigate = (page: string, categoryFilter?: string) => {
    setCurrentPage(page);
    if (categoryFilter) {
      setShopCategoryFilter(categoryFilter);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: Product, size: string, price: number) => {
    const cartItemId = `${product.id}-${size}`;
    setCartItems((prev) => {
      const existing = prev.find((item) => item.cartItemId === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.cartItemId === cartItemId ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [
        ...prev,
        {
          cartItemId,
          id: product.id,
          name: product.name,
          size,
          price,
          image: product.image,
          qty: 1
        }
      ];
    });
    setIsCartOpen(true);
    showToast(`Added ${product.name} (${size}) to basket!`);
  };

  const handleUpdateQty = (cartItemId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveFromCart = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
    showToast("Item removed from basket");
  };

  const handleCheckout = () => {
    const total = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
    alert(`Thank you for shopping with ILG Naturals Kesari Nandan!\n\nOrder Total: ₹${total}.00\nTotal Items: ${cartItems.reduce((s, i) => s + i.qty, 0)}\n\nYour order has been placed for farm-fresh dispatch.`);
    setCartItems([]);
    setIsCartOpen(false);
  };

  const handleSearch = (query: string) => {
    setShopCategoryFilter(query);
    setCurrentPage('shop');
    showToast(`Searching for "${query}"`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      {/* Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartCount={cartItems.reduce((sum, item) => sum + item.qty, 0)}
        wishlistCount={wishlistCount}
        onOpenCart={() => setIsCartOpen(true)}
        onSearch={handleSearch}
      />

      {/* Main Pages */}
      <main>
        {currentPage === 'home' && (
          <>
            <HeroSlider onNavigate={handleNavigate} />
            <StorySection />
            <CategoriesSection
              activeCategory={homeCategoryFilter}
              onSelectCategory={(cat) => setHomeCategoryFilter(cat)}
            />
            <SpotlightSection onNavigate={handleNavigate} />
            <RecipeYellowSection
              recipes={RECIPES_DATA}
              onOpenRecipe={(recipe) => setActiveRecipeModal(recipe)}
              onNavigateRecipes={() => handleNavigate('recipes')}
            />
            <BestSellersSection
              products={PRODUCTS_DATA}
              activeCategory={homeCategoryFilter}
              onSelectCategory={(cat) => setHomeCategoryFilter(cat)}
              onAddToCart={handleAddToCart}
              onQuickView={(p) => setQuickViewProduct(p)}
              onToggleWishlist={() => {
                setWishlistCount((c) => c + 1);
                showToast("Added to your wishlist!");
              }}
              onNavigateShop={() =>
                handleNavigate(
                  'shop',
                  homeCategoryFilter !== 'all' ? homeCategoryFilter : undefined
                )
              }
            />
            <InstagramSection />
            <BrandNarrativeSection />
          </>
        )}

        {currentPage === 'shop' && (
          <ShopPage
            products={PRODUCTS_DATA}
            initialCategory={shopCategoryFilter}
            onAddToCart={handleAddToCart}
            onQuickView={(p) => setQuickViewProduct(p)}
            onToggleWishlist={() => {
              setWishlistCount((c) => c + 1);
              showToast("Added to your wishlist!");
            }}
          />
        )}

        {currentPage === 'recipes' && (
          <RecipesPage
            recipes={RECIPES_DATA}
            onOpenRecipe={(recipe) => setActiveRecipeModal(recipe)}
            onNavigateShop={(cat) => handleNavigate('shop', cat)}
          />
        )}

        {currentPage === 'about' && <AboutPage />}

        {currentPage === 'contact' && <ContactPage onShowToast={showToast} />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
        onNavigateShop={() => handleNavigate('shop')}
      />

      {/* Modals */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <RecipeModal
        recipe={activeRecipeModal}
        onClose={() => setActiveRecipeModal(null)}
      />

      {/* Toast Notification */}
      <div className={`toast-notice ${toastMessage ? 'show' : ''}`}>
        <i className="fas fa-check-circle"></i>
        <span>{toastMessage}</span>
      </div>

      {/* Back to Top Button */}
      <button
        type="button"
        className={`back-to-top-btn ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </div>
  );
};
