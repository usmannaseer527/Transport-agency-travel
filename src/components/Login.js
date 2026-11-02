import React, { useState } from 'react';

function Login({ isOpen, onClose, onLoginSuccess }) {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name: name || email.split('@')[0] };
    alert(isSignup ? 'Account created successfully! 🎉' : 'Logged in successfully! 🚛');
    onLoginSuccess(userData);
    onClose();
  };

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-modal auth-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>{isSignup ? 'Create Account 🚛' : 'Welcome Back 🚛'}</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {isSignup && (
            <div className="form-group">
              <label>Full Name / Company</label>
              <input 
                type="text" 
                placeholder="Enter your name or company" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
            </div>
          )}

          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className="auth-submit-btn">
            {isSignup ? 'Sign Up' : 'Login'}
          </button>

          <p className="auth-switch-text">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <span onClick={() => setIsSignup(!isSignup)}>
              {isSignup ? 'Login here' : 'Sign up'}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;