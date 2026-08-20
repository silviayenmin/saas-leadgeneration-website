import React from 'react';
import { Container } from '../ui/Container';
import { GlassCard } from '../ui/GlassCard';
import './sections.css';

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="section-wrapper section-placeholder">
      <Container size="lg">
        <GlassCard className="section-placeholder__card" padding="lg">
          <div className="section-placeholder__tag">Section 2</div>
          <h2>How It Works Section Placeholder</h2>
          <p style={{ marginTop: '12px' }}>
            Map Lead Discovery → Contact Enrichment → AI Outreach → Kanban Pipeline
          </p>
        </GlassCard>
      </Container>
    </section>
  );
};
