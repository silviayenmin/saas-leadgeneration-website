import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import { Container } from '../ui/Container';
import { ADMIN_EMAIL, submitNewsletterSubscription } from '../../services/contactService';
import './layout.css';

export const Footer: React.FC = () => {
  const location = useLocation();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await submitNewsletterSubscription(newsletterEmail);
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 5000);
    } catch (err) {
      console.error('Newsletter error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="site-footer">
      {/* Ambient Radial Glow */}
      <div className="footer-bg-glow" />

      <Container size="lg">
        {/* 4-Column Modern Grid */}
        <div className="footer-grid" data-aos="fade-up">
          {/* COLUMN 1: Brand & Office Location Info */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo-link">
              <div className="footer-logo-icon">
                <MapPin size={22} color="#FFFFFF" />
              </div>
              <span className="footer-brand-name">
                LeadGen<span className="text-cyan"> AI</span>
              </span>
            </Link>
            <p className="footer-brand-desc">
              Automate Google Maps lead discovery, extract direct owner contacts, and scale your outbound sales pipeline with AI.
            </p>

            <div className="footer-contact-details">
              <div className="contact-detail-item">
                <MapPin size={16} className="detail-icon" />
                <span className="detail-text">
                  22, 5th Cross Street, Narayanasamy Naicker Nagar, Nedunchezian Salai, Sholinganallur, Chennai, Greater Chennai, Tamil Nadu 600119
                </span>
              </div>

              <div className="contact-detail-item">
                <Phone size={16} className="detail-icon" />
                <a href="tel:+919876543210" className="detail-link">
                  +91 9876543210
                </a>
              </div>

              <div className="contact-detail-item">
                <Mail size={16} className="detail-icon" />
                <a href={`mailto:${ADMIN_EMAIL}`} className="detail-link">
                  {ADMIN_EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Quick Navigation */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#product" onClick={(e) => handleSectionClick(e, 'product')}>
                  Product Features
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleSectionClick(e, 'features')}>
                  Core Features
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => handleSectionClick(e, 'pricing')}>
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleSectionClick(e, 'contact')}>
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleSectionClick(e, 'faq')}>
                  FAQ &amp; Help
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Platform Capabilities */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Capabilities</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#product" onClick={(e) => handleSectionClick(e, 'product')}>
                  Google Maps Scraper
                </a>
              </li>
              <li>
                <a href="#product" onClick={(e) => handleSectionClick(e, 'product')}>
                  AI Cold Email Writer
                </a>
              </li>
              <li>
                <a href="#product" onClick={(e) => handleSectionClick(e, 'product')}>
                  Verified Owner Emails
                </a>
              </li>
              <li>
                <a href="#product" onClick={(e) => handleSectionClick(e, 'product')}>
                  Pipeline Management
                </a>
              </li>
              <li>
                <a href="#product" onClick={(e) => handleSectionClick(e, 'product')}>
                  CRM &amp; CSV Export
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Newsletter & System Status */}
          <div className="footer-newsletter-col">
            <h4 className="footer-col-title">Stay Updated</h4>
            <p className="newsletter-desc">
              Subscribe for weekly outbound strategy insights and lead generation tips.
            </p>

            {newsletterSuccess ? (
              <div className="newsletter-success">
                <CheckCircle2 size={16} color="#22C55E" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="newsletter-btn"
                  aria-label="Subscribe"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
                </button>
              </form>
            )}

            {/* Live System Status Indicator */}
            <div className="footer-status-badge">
              <span className="status-dot-live" />
              <span>Systems Operational • 99.9% Uptime</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom Legal Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} LeadGen AI. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <a href="#faq" onClick={(e) => handleSectionClick(e, 'faq')}>
              Privacy Policy
            </a>
            <span className="legal-sep">•</span>
            <a href="#faq" onClick={(e) => handleSectionClick(e, 'faq')}>
              Terms of Service
            </a>
            <span className="legal-sep">•</span>
            <a href="#faq" onClick={(e) => handleSectionClick(e, 'faq')}>
              Security
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
