import React from 'react';
import { Container } from '../ui/Container';
import { GlassCard } from '../ui/GlassCard';
import './sections.css';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="section-wrapper section-placeholder">
      <Container size="lg">
        <GlassCard className="section-placeholder__card" padding="lg">
          <div className="section-placeholder__tag">Section 7</div>
          <h2>Testimonials Section Placeholder</h2>
          <p style={{ marginTop: '12px' }}>
            Trusted by Agency Founders & B2B Sales Leads Worldwide
          </p>
        </GlassCard>
      </Container>
    </section>
  );
};
