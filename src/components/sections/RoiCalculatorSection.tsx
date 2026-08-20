import React from 'react';
import { Container } from '../ui/Container';
import { GlassCard } from '../ui/GlassCard';
import './sections.css';

export const RoiCalculatorSection: React.FC = () => {
  return (
    <section id="roi-calculator" className="section-wrapper section-placeholder">
      <Container size="lg">
        <GlassCard className="section-placeholder__card" padding="lg">
          <div className="section-placeholder__tag">Section 5</div>
          <h2>ROI Calculator Section Placeholder</h2>
          <p style={{ marginTop: '12px' }}>
            Calculate Lead Discovery Time Saved & Expected Deal Pipeline Growth
          </p>
        </GlassCard>
      </Container>
    </section>
  );
};
