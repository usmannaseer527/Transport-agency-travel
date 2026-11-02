import React from 'react';

function Navbar({ cartCount, searchTerm, setSearchTerm, activeCategory, setActiveCategory, setIsCartOpen, user, setIsLoginOpen }) {
  const categories = ['All', 'Freight Logistics', 'Express Courier', 'Warehousing', 'Fleet Charter'];

  return (
    <nav className="trans-nav">
      <div className="nav-container">
        <div className="logo">
          <h2>🚛 TransLogix Pro</h2>
        </div>

        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search services or fleet..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="categories-menu">
          {categories.map((cat) => (
            <button 
              key={cat} 
              className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="nav-right-actions">
          <button className="auth-btn-nav" onClick={() => setIsLoginOpen(true)}>
            👤 {user ? user.name : 'Login'}
          </button>

          <button className="cart-icon-btn" onClick={() => setIsCartOpen(true)}>
            📋 Quote Basket
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;