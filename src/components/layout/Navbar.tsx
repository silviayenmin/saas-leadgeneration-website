import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Menu, X, ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../common/ThemeToggle';
import { scrollToSection } from '../../utils/helpers';
import { NavItem } from '../../types';
import { SITE_CONFIG } from '../../config/siteConfig';
import './layout.css';

const NAV_ITEMS: NavItem[] = [
  { label: 'Product', href: '#product' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/${href}`;
    } else {
      scrollToSection(href);
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <Container size="lg" className="navbar__inner">
        {/* Left: Brand Logo & Wordmark */}
        <Link to="/" className="navbar__brand">
          <div className="navbar__brand-icon">
            <MapPin size={20} />
          </div>
          <span className="navbar__brand-text">
            LeadGen<span className="text-gradient"> AI</span>
          </span>
        </Link>

        {/* Center: Desktop Nav Links */}
        <nav className="navbar__links">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="navbar__link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Theme Switcher & Desktop Actions */}
        <div className="navbar__actions">
          <ThemeToggle />
          <Button
            variant="primary"
            size="sm"
            href={SITE_CONFIG.saasProductUrl}
            icon={<ArrowRight size={16} />}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Controls: Theme Switcher + Hamburger Toggle */}
        <div className="navbar__mobile-right">
          <ThemeToggle />
          <button
            className="navbar__mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="navbar__mobile-menu animate-fade-up">
          <ul className="navbar__mobile-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="navbar__link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="navbar__mobile-actions">
            <Button
              variant="primary"
              fullWidth
              href={SITE_CONFIG.saasProductUrl}
              icon={<ArrowRight size={16} />}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
