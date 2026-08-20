import React from 'react';
import { Container } from '../ui/Container';
import { GlassCard } from '../ui/GlassCard';
import './sections.css';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="section-wrapper hero-placeholder">
      <Container size="lg">
        <GlassCard className="section-placeholder__card" padding="lg">
          <div className="section-placeholder__tag">Section 1</div>
          <h1>Hero Section Placeholder</h1>
          <p style={{ marginTop: '12px' }}>
            MapFlow AI: Google Maps Lead Discovery & AI Outreach Engine
          </p>
        </GlassCard>
      </Container>
    </section>
  );
};
