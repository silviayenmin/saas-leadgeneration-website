import React from 'react';
import { ArrowRight, Mail, CheckCircle2, Zap } from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { HeroDashboardPreview } from './HeroDashboardPreview';
import { SITE_CONFIG } from '../../config/siteConfig';
import './sections.css';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="hero-wrapper">
      {/* Background ambient lighting */}
      <div className="hero-bg-glow hero-bg-glow--top" />
      <div className="hero-bg-glow hero-bg-glow--bottom" />

      <Container size="lg" className="hero-container">
        <div className="hero-grid">
          {/* Left Column: Copy & Actions — Comes from Left */}
          <div className="hero-content reveal-fade-left" data-aos="fade-right" data-aos-duration="1000">
            {/* AI Engine Badge */}
            <div className="hero-badge-wrapper">
              <Badge variant="primary" icon={<Zap size={14} className="text-cyan" />}>
                Smart B2B Lead Discovery &amp; Client Engine
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline">
              <span className="hero-line">Find Local Businesses. </span>
              <span className="hero-line text-gradient">Get Verified Contacts. </span>
              <span className="hero-line">Close 5x More Clients.</span>
            </h1>

            {/* Subheadline */}
            <p className="hero-subheadline">
              LeadGen AI automatically discovers targeted local businesses, extracts verified direct owner emails &amp; phone numbers, generates personalized outreach pitches, and organizes your entire client pipeline.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <Button
                variant="primary"
                size="lg"
                href={SITE_CONFIG.saasProductUrl}
                icon={<ArrowRight size={18} />}
                className="hero-btn-primary"
              >
                Get Started
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="#contact"
                icon={<Mail size={16} />}
                className="hero-btn-secondary"
              >
                Contact Us
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="hero-trust-indicators">
              <div className="trust-item">
                <CheckCircle2 size={16} className="trust-icon" />
                <span>25 Free Verified Credits</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={16} className="trust-icon" />
                <span>Zero Technical Setup Required</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={16} className="trust-icon" />
                <span>Ready in Under 60 Seconds</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive SaaS Product Visual — Comes from Right */}
          <div className="hero-visual reveal-fade-right" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <HeroDashboardPreview />
          </div>
        </div>
      </Container>
    </section>
  );
};
