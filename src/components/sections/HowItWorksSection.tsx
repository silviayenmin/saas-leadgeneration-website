import React from 'react';
import {
  Search,
  MapPin,
  Layers,
  Globe,
  Mail,
  Sparkles,
  Kanban,
  CheckCircle2,
  Linkedin,
  Twitter,
  ArrowRight,
  Zap,
  Code
} from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import './sections.css';

interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  visual: React.ReactNode;
}

export const HowItWorksSection: React.FC = () => {
  const steps: WorkflowStep[] = [
    {
      number: '01',
      title: 'Search',
      description: 'Enter a target industry and location to discover relevant businesses on Google Maps.',
      icon: <Search size={22} className="step-icon-svg" />,
      visual: (
        <div className="mini-ui mini-ui-search">
          <div className="mini-search-box">
            <Search size={14} className="text-muted" />
            <span className="mini-search-text">Software Development Company in Austin</span>
          </div>
          <div className="mini-map-tag">
            <MapPin size={12} color="#0EA5A4" />
            <span>Llama-3.3 Auto-Expand</span>
          </div>
        </div>
      ),
    },
    {
      number: '02',
      title: 'Scrape & Enrich',
      description: 'Extract business information and enrich websites for direct emails, social profiles, and technology data.',
      icon: <Layers size={22} className="step-icon-svg" />,
      visual: (
        <div className="mini-ui mini-ui-enrich">
          <div className="mini-card-head">
            <span className="mini-biz-name">Vortex Global Software</span>
            <span className="mini-badge-verified">
              <CheckCircle2 size={10} /> Verified
            </span>
          </div>
          <div className="mini-email-row">
            <Mail size={11} className="text-muted" />
            <span>contact@vortexsoftware.io</span>
          </div>
          <div className="mini-enrich-tags">
            <div className="mini-socials">
              <Linkedin size={11} />
              <Twitter size={11} />
              <Globe size={11} />
            </div>
            <span className="mini-tech-badge">
              <Code size={10} /> 4.9★ (40% AI Match)
            </span>
          </div>
        </div>
      ),
    },
    {
      number: '03',
      title: 'AI Cold Pitch',
      description: 'Generate personalized outreach copy based on the business, reviews, website gaps, and potential pain points.',
      icon: <Sparkles size={22} className="step-icon-svg" />,
      visual: (
        <div className="mini-ui mini-ui-pitch">
          <div className="mini-pitch-header">
            <Sparkles size={13} className="text-cyan" />
            <span>AI Personalization</span>
          </div>
          <div className="mini-tags-row">
            <span className="mini-tag">{"{{Company}}"}</span>
            <span className="mini-tag">{"{{Pain_Point}}"}</span>
          </div>
          <div className="mini-pitch-preview">
            "Noticed Vortex Global's 4.9★ rating on Google Maps..."
          </div>
          <button className="mini-btn-gen" onClick={(e) => e.preventDefault()}>
            <Zap size={10} /> Generate Pitch
          </button>
        </div>
      ),
    },
    {
      number: '04',
      title: 'Close Deals',
      description: 'Move leads through your sales pipeline with a visual Kanban CRM.',
      icon: <Kanban size={22} className="step-icon-svg" />,
      visual: (
        <div className="mini-ui mini-ui-kanban">
          <div className="kanban-cols">
            <div className="kanban-col">
              <span className="col-label">New</span>
              <div className="kanban-card card--new" />
            </div>
            <div className="kanban-col">
              <span className="col-label">Contacted</span>
              <div className="kanban-card card--contacted" />
            </div>
            <div className="kanban-col col--won">
              <span className="col-label text-emerald">Won</span>
              <div className="kanban-card card--won">
                <CheckCircle2 size={12} color="#22C55E" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="section-wrapper how-it-works-wrapper">
      {/* Background ambient lighting */}
      <div className="how-bg-glow" />

      <Container size="lg">
        {/* Section Heading */}
        <SectionHeading
          badge="AUTOMATED SALES WORKFLOW"
          title="From Local Search to Closed Deal"
          subtitle="One workflow to discover, enrich, personalize, and convert local businesses."
          align="center"
        />

        {/* 4-Step Connected Workflow Grid */}
        <div className="workflow-grid-wrapper">
          {/* Desktop Connecting Flow Line */}
          <div className="workflow-connector-line" />

          <div className="workflow-grid">
            {steps.map((step, index) => (
              <div key={step.number} className="workflow-step-col">
                <GlassCard className="workflow-card hover-lift" padding="md">
                  {/* Header: Step Number & Icon */}
                  <div className="step-card-header">
                    <div className="step-number">{step.number}</div>
                    <div className="step-icon-box">{step.icon}</div>
                  </div>

                  {/* Body: Title & Description */}
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>

                  {/* Mini UI Visualization */}
                  <div className="step-visual-box">{step.visual}</div>
                </GlassCard>

                {/* Desktop Arrow Indicator between steps */}
                {index < steps.length - 1 && (
                  <div className="desktop-step-arrow">
                    <ArrowRight size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
