import React from 'react';
import { Container } from '../ui/Container';
import { GlassCard } from '../ui/GlassCard';
import './sections.css';

export const FinalCtaSection: React.FC = () => {
  return (
    <section id="cta" className="section-wrapper section-placeholder">
      <Container size="lg">
        <GlassCard className="section-placeholder__card" padding="lg">
          <div className="section-placeholder__tag">Section 9</div>
          <h2>Final CTA Section Placeholder</h2>
          <p style={{ marginTop: '12px' }}>
            Start Scaling Your B2B Outreach Pipeline with MapFlow AI Today
          </p>
        </GlassCard>
      </Container>
    </section>
  );
};
