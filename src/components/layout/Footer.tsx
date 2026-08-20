import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { Container } from '../ui/Container';
import { scrollToSection } from '../../utils/helpers';
import './layout.css';

export const Footer: React.FC = () => {
  const handleNavClick = (href: string) => {
    scrollToSection(href);
  };

  return (
    <footer className="footer">
      <Container size="lg">
        <div className="footer__top">
          {/* Brand Info */}
          <div className="footer__brand-col">
            <Link to="/" className="navbar__brand">
              <div className="navbar__brand-icon">
                <MapPin size={20} />
              </div>
              <span>
                MapFlow<span className="text-gradient"> AI</span>
              </span>
            </Link>
            <p className="footer__description">
              Google Maps B2B Lead Discovery, Automated Contact Enrichment, and AI Cold Outreach pipeline.
            </p>
          </div>

          {/* Nav Column Links */}
          <div className="footer__grid">
            <div>
              <h4 className="footer__col-title">Navigation</h4>
              <ul className="footer__list">
                <li>
                  <a href="#product" className="footer__link" onClick={(e) => { e.preventDefault(); handleNavClick('#product'); }}>
                    Product
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="footer__link" onClick={(e) => { e.preventDefault(); handleNavClick('#how-it-works'); }}>
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="footer__link" onClick={(e) => { e.preventDefault(); handleNavClick('#pricing'); }}>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="footer__link" onClick={(e) => { e.preventDefault(); handleNavClick('#faq'); }}>
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="footer__col-title">Legal</h4>
              <ul className="footer__list">
                <li><a href="#privacy" className="footer__link">Privacy Policy</a></li>
                <li><a href="#terms" className="footer__link">Terms of Service</a></li>
                <li><a href="#security" className="footer__link">Security</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} MapFlow AI Inc. All rights reserved.</p>
          <p>Built for high-converting B2B lead generation & outreach.</p>
        </div>
      </Container>
    </footer>
  );
};
