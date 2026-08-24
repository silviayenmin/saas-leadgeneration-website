import React from 'react';
import { ArrowRight, Sparkles, Zap, CheckCircle2 } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { SITE_CONFIG } from '../../config/siteConfig';
import './sections.css';

export const FinalCtaSection: React.FC = () => {
  return (
    <section id="final-cta" className="section-wrapper final-cta-wrapper">
      {/* Radial Background Glow & Map Grid Pattern */}
      <div className="cta-bg-glow" />
      <div className="cta-grid-pattern" />

      <Container size="lg">
        <div className="final-cta-card" data-aos="zoom-in">
          {/* Floating UI Badges */}
          <div className="floating-badge floating-badge--left">
            <CheckCircle2 size={14} color="#22C55E" />
            <span>400 HVAC Leads Extracted</span>
          </div>

          <div className="floating-badge floating-badge--right">
            <Zap size={14} color="#0EA5A4" />
            <span>AI Cold Pitch Generated</span>
          </div>

          {/* Badge */}
          <div className="cta-top-badge">
            <Sparkles size={14} className="text-cyan" />
            <span>START SCALING OUTBOUND TODAY</span>
          </div>

          {/* Headline */}
          <h2 className="cta-headline">
            Ready to Turn Google Maps Into Your Lead Engine?
          </h2>

          {/* Subheadline */}
          <p className="cta-subheadline">
            Find more businesses. Reach the right decision-makers. Generate better conversations. Close more clients.
          </p>

          {/* Action Buttons Group */}
          <div className="cta-btn-group">
            <Button
              variant="primary"
              size="lg"
              href={SITE_CONFIG.saasProductUrl}
              icon={<ArrowRight size={18} />}
              className="hero-btn-primary"
            >
              Get Started
            </Button>
          </div>

          {/* Micro Trust Guarantee */}
          <div className="cta-trust-note">
            <span>✓ No credit card required</span>
            <span className="dot-sep">•</span>
            <span>✓ 25 Free credits included</span>
            <span className="dot-sep">•</span>
            <span>✓ Setup in 60 seconds</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
