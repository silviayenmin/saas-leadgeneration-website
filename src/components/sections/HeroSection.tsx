import React from 'react';
import { ArrowRight, Play, CheckCircle2, Zap } from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { HeroDashboardPreview } from './HeroDashboardPreview';
import './sections.css';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="hero-wrapper">
      {/* Background ambient lighting */}
      <div className="hero-bg-glow hero-bg-glow--top" />
      <div className="hero-bg-glow hero-bg-glow--bottom" />

      <Container size="lg" className="hero-container">
        <div className="hero-grid">
          {/* Left Column: Copy & Actions */}
          <div className="hero-content animate-fade-up">
            {/* AI Engine Badge */}
            <div className="hero-badge-wrapper">
              <Badge variant="primary" icon={<Zap size={14} className="text-amber" />}>
                ⚡ Powered by Groq Llama-3.3 AI Engine
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline">
              <span className="hero-line">Scrape Google Maps. </span>
              <span className="hero-line text-gradient">Enrich Leads with AI. </span>
              <span className="hero-line">Close 5x More B2B Clients.</span>
            </h1>

            {/* Subheadline */}
            <p className="hero-subheadline">
              MapFlow AI automatically finds local businesses on Google Maps, discovers direct owner emails &amp; social handles from their websites, writes tailored cold pitches in 1-click, and manages your entire sales pipeline.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <Button
                variant="primary"
                size="lg"
                href="/signup"
                icon={<ArrowRight size={18} />}
                className="hero-btn-primary"
              >
                Get Started Free
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="#product"
                icon={<Play size={16} fill="currentColor" />}
                className="hero-btn-secondary"
              >
                View Live Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="hero-trust-indicators">
              <div className="trust-item">
                <CheckCircle2 size={16} className="trust-icon" />
                <span>25 Free Lead Credits</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={16} className="trust-icon" />
                <span>No Google Maps API Key Needed</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={16} className="trust-icon" />
                <span>Setup in Under 60 Seconds</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive SaaS Product Visual */}
          <div className="hero-visual animate-fade-up">
            <HeroDashboardPreview />
          </div>
        </div>
      </Container>
    </section>
  );
};
