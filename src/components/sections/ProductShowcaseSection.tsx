import React from 'react';
import { Container } from '../ui/Container';
import { GlassCard } from '../ui/GlassCard';
import './sections.css';

export const ProductShowcaseSection: React.FC = () => {
  return (
    <section id="product" className="section-wrapper section-placeholder">
      <Container size="lg">
        <GlassCard className="section-placeholder__card" padding="lg">
          <div className="section-placeholder__tag">Section 4</div>
          <h2>Product Showcase Section Placeholder</h2>
          <p style={{ marginTop: '12px' }}>
            Interactive Demo of MapFlow AI Lead Extraction & Kanban CRM Dashboard
          </p>
        </GlassCard>
      </Container>
    </section>
  );
};
