import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>🚛 TransLogix Pro</h3>
          <p>Enterprise-grade logistics, warehousing, cargo transportation, and supply chain management.</p>
        </div>
        <div className="footer-section">
          <h4>Global Dispatch Hubs</h4>
          <p>• North America Central Depot</p>
          <p>• Europe Cross-Border Hub</p>
          <p>• Asia-Pacific Maritime Terminal</p>
        </div>
        <div className="footer-section">
          <h4>24/7 Logistics Support</h4>
          <p className="phone-number">📞 +1 800-TRANSLOGIX</p>
          <p>Email: dispatch@translogix.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 TransLogix Enterprise Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;