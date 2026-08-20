import React from 'react';
import { Container } from '../ui/Container';
import { GlassCard } from '../ui/GlassCard';
import './sections.css';

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="section-wrapper section-placeholder">
      <Container size="lg">
        <GlassCard className="section-placeholder__card" padding="lg">
          <div className="section-placeholder__tag">Section 3</div>
          <h2>Features Section Placeholder</h2>
          <p style={{ marginTop: '12px' }}>
            Powerful B2B Extraction, Verification, and Automated Outreach Capabilities
          </p>
        </GlassCard>
      </Container>
    </section>
  );
};
