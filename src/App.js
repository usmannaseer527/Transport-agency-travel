import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Cart from './components/Cart';
import Login from './components/Login';
import Footer from './components/Footer';
import './App.css';

const TRANSPORT_SERVICES = [
  { 
    id: 1, 
    name: 'Interstate Heavy Haulage Trucking', 
    category: 'Fleet Charter', 
    price: 850.00, 
    rating: 4.9, 
    description: 'GPS-monitored multi-axle heavy trailers for bulk equipment and cargo transportation.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600' 
  },
  { 
    id: 2, 
    name: 'Air Express Priority Cargo', 
    category: 'Express Courier', 
    price: 1200.00, 
    rating: 4.9, 
    description: 'Rapid 24-48 hour international air freight dispatch with custom clearance support.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600' 
  },
  { 
    id: 3, 
    name: 'Ocean Container Shipping (FCL)', 
    category: 'Freight Logistics', 
    price: 2400.00, 
    rating: 4.8, 
    description: 'Full Container Load (20ft/40ft) intermodal ocean freight shipping across main sea routes.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600' 
  },
  { 
    id: 4, 
    name: 'Temperature-Controlled Cold Storage', 
    category: 'Warehousing', 
    price: 450.00, 
    rating: 4.7, 
    description: 'Climate-controlled refrigerated logistics and high-capacity storage for perishables.',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600' 
  },
  { 
    id: 5, 
    name: 'Last-Mile Electric Van Delivery', 
    category: 'Express Courier', 
    price: 120.00, 
    rating: 4.8, 
    description: 'Zero-emission city center eco delivery fleet for e-commerce order fulfillment.',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600' 
  },
  { 
    id: 6, 
    name: 'Automated High-Bay Warehousing', 
    category: 'Warehousing', 
    price: 650.00, 
    rating: 4.9, 
    description: 'Robotic inventory management, pallet racking, and fulfillment hub services.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600' 
  }
];

function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + change;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const filteredServices = TRANSPORT_SERVICES.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app">
      <Navbar
        cartCount={cartCount}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        setIsCartOpen={setIsCartOpen}
        user={user}
        setIsLoginOpen={setIsLoginOpen}
      />

      <Header />

      <main className="main-content" id="services">
        <div className="section-title">
          <h2>Our Transport & Freight Services</h2>
          <p>Book scalable fleet & logistics solutions tailored to your supply chain needs</p>
        </div>

        <div className="product-grid">
          {filteredServices.map((product) => (
            <div key={product.id} className="product-card">
              <div className="card-image-wrapper">
                <img src={product.image} alt={product.name} />
                <span className="category-badge">{product.category}</span>
              </div>
              <div className="product-info">
                <div className="card-header-row">
                  <h3>{product.name}</h3>
                  <span className="rating">⭐ {product.rating}</span>
                </div>
                <p className="description">{product.description}</p>
                <div className="card-bottom">
                  <span className="price">${product.price.toFixed(2)}</span>
                  <button className="add-btn" onClick={() => handleAddToCart(product)}>
                    + Book Service
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Cart
        cartItems={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <Login
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={(userData) => setUser(userData)}
      />

      <Footer />
    </div>
  );
}

export default App;