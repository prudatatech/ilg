import React from 'react';

export interface CartItem {
  cartItemId: string;
  id: number;
  name: string;
  size: string;
  price: number;
  image: string;
  qty: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQty: (cartItemId: string, delta: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onCheckout: () => void;
  onNavigateShop: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  items,
  onClose,
  onUpdateQty,
  onRemoveItem,
  onCheckout,
  onNavigateShop
}) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <div
        className={`cart-drawer-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />
      <aside className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-drawer-header">
          <div className="cart-drawer-title">
            <i className="fas fa-shopping-basket"></i> Your Basket ({items.reduce((s, i) => s + i.qty, 0)})
          </div>
          <button className="cart-drawer-close" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="cart-items-list">
          {items.length === 0 ? (
            <div className="empty-cart-message">
              <i
                className="fas fa-shopping-basket"
                style={{ fontSize: '3rem', color: '#ccc', marginBottom: '12px', display: 'block' }}
              ></i>
              <p>Your shopping basket is empty</p>
              <button
                type="button"
                className="btn-outline-red"
                style={{ marginTop: '15px' }}
                onClick={() => {
                  onClose();
                  onNavigateShop();
                }}
              >
                Explore Spices
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.cartItemId} className="cart-item-row">
                <img src={item.image} alt={item.name} className="cart-item-thumb" />
                <div className="cart-item-info">
                  <div className="cart-item-title">{item.name}</div>
                  <div className="cart-item-price">
                    ₹{item.price}.00 ({item.size})
                  </div>
                  <div className="cart-item-qty">
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => onUpdateQty(item.cartItemId, -1)}
                    >
                      -
                    </button>
                    <span className="qty-val">{item.qty}</span>
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => onUpdateQty(item.cartItemId, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="cart-item-remove"
                  onClick={() => onRemoveItem(item.cartItemId)}
                  title="Remove Item"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-subtotal-row">
              <span>Subtotal:</span>
              <span>₹{subtotal}.00</span>
            </div>
            <button type="button" className="btn-checkout-now" onClick={onCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
};
