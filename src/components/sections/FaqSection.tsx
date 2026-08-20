import React from 'react';
import { Container } from '../ui/Container';
import { GlassCard } from '../ui/GlassCard';
import './sections.css';

export const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="section-wrapper section-placeholder">
      <Container size="lg">
        <GlassCard className="section-placeholder__card" padding="lg">
          <div className="section-placeholder__tag">Section 8</div>
          <h2>FAQ Section Placeholder</h2>
          <p style={{ marginTop: '12px' }}>
            Frequently Asked Questions About Google Maps Extraction & Email Verification
          </p>
        </GlassCard>
      </Container>
    </section>
  );
};
