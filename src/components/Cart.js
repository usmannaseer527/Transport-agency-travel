import React from 'react';

function Cart({ cartItems, isOpen, onClose, onUpdateQuantity, onRemoveItem }) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const insuranceFee = cartItems.length > 0 ? 49.00 : 0;
  const grandTotal = subtotal + insuranceFee;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Booking Summary 📦</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart-state">
              <span style={{ fontSize: '48px' }}>🚚</span>
              <p>Your booking basket is empty! Add services to request a quotation.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p className="price">${item.price.toFixed(2)} / shipment</p>
                  <div className="quantity-controls">
                    <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity} Shipments</span>
                    <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => onRemoveItem(item.id)}>🗑️</button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="summary-row">
              <span>Freight Estimated Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Cargo Insurance & Handler Fee:</span>
              <span>${insuranceFee.toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span>Estimated Total:</span>
              <span className="total-price">${grandTotal.toFixed(2)}</span>
            </div>
            <button 
              className="checkout-btn" 
              onClick={() => alert('Booking request submitted! Our dispatch manager will contact you within 15 minutes.')}
            >
              Confirm Logistics Booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;