import React from 'react';
import { Container } from '../ui/Container';
import { GlassCard } from '../ui/GlassCard';
import './sections.css';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="section-wrapper section-placeholder">
      <Container size="lg">
        <GlassCard className="section-placeholder__card" padding="lg">
          <div className="section-placeholder__tag">Section 6</div>
          <h2>Pricing Section Placeholder</h2>
          <p style={{ marginTop: '12px' }}>
            Flexible Subscription Plans for Solopreneurs, Agencies & Enterprise Teams
          </p>
        </GlassCard>
      </Container>
    </section>
  );
};
