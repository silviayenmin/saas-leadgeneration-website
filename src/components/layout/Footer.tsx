import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { Container } from '../ui/Container';
import './layout.css';

export const Footer: React.FC = () => {
  const location = useLocation();

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="site-footer">
      <Container size="lg">
        <div className="footer-grid">
          {/* Left Column: Brand & Summary */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo-link">
              <div className="footer-logo-icon">
                <MapPin size={22} color="#0EA5A4" />
              </div>
              <span className="footer-brand-name">MapFlow AI</span>
            </Link>
            <p className="footer-brand-desc">
              Turn Google Maps into your automated B2B lead engine.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#product" onClick={(e) => handleSectionClick(e, 'product')}>
                  Product
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={(e) => handleSectionClick(e, 'how-it-works')}>
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => handleSectionClick(e, 'pricing')}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleSectionClick(e, 'contact')}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleSectionClick(e, 'faq')}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Account Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Account</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Get Started</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © 2026 MapFlow AI. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
