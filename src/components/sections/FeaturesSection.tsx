import React from 'react';
import {
  MapPin,
  MailCheck,
  Sparkles,
  Kanban,
  Map,
  Coins,
  Search,
  Star,
  CheckCircle2,
  Globe,
  TrendingUp,
  Zap,
  ArrowUpRight,
  Code
} from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import './sections.css';

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="section-wrapper features-wrapper">
      {/* Ambient Lighting */}
      <div className="features-bg-glow" />

      <Container size="lg">
        {/* Section Heading */}
        <SectionHeading
          badge="COMPLETE LEAD ENGINE"
          title="Everything You Need to Turn Local Businesses Into Clients"
          subtitle="MapFlow AI combines lead discovery, enrichment, AI outreach, and CRM into one streamlined workflow."
          align="center"
        />

        {/* Asymmetric Bento Grid Layout */}
        <div className="bento-grid">
          {/* Feature 1 — Large Bento Card */}
          <GlassCard className="bento-card bento-card--large hover-lift" padding="lg">
            <div className="bento-card-top">
              <div className="bento-icon-box bento-icon--primary">
                <MapPin size={24} />
              </div>
              <div className="bento-metric-pill metric-pill--teal">
                <TrendingUp size={13} />
                <span>247 businesses found</span>
              </div>
            </div>

            <div className="bento-card-body">
              <h3 className="bento-title">Google Maps Live Lead Extractor</h3>
              <p className="bento-description">
                Extract business name, address, phone, rating, reviews, and location data directly from Google Maps.
              </p>
            </div>

            {/* Micro UI Visual 1 */}
            <div className="bento-visual visual-extractor">
              <div className="extractor-search-bar">
                <Search size={14} className="text-muted" />
                <span className="extractor-query">Dentists in Austin, TX</span>
                <span className="extractor-tag">Live Extractor</span>
              </div>
              <div className="extractor-lead-preview">
                <div className="extractor-lead-info">
                  <span className="lead-name">Austin Dental Care</span>
                  <div className="lead-stars">
                    <Star size={11} fill="#F59E0B" color="#F59E0B" />
                    <span>4.9</span>
                    <span className="text-muted">(128 reviews)</span>
                  </div>
                </div>
                <span className="extractor-status">
                  <CheckCircle2 size={12} /> Extracted
                </span>
              </div>
            </div>
          </GlassCard>

          {/* Feature 2 — Medium Bento Card */}
          <GlassCard className="bento-card bento-card--medium hover-lift" padding="lg">
            <div className="bento-card-top">
              <div className="bento-icon-box bento-icon--cyan">
                <MailCheck size={22} />
              </div>
              <div className="bento-metric-pill metric-pill--cyan">
                <CheckCircle2 size={13} />
                <span>183 verified emails</span>
              </div>
            </div>

            <div className="bento-card-body">
              <h3 className="bento-title">Website &amp; Email Enrichment</h3>
              <p className="bento-description">
                Discover business emails, social profiles, website information, and technology signals from company websites.
              </p>
            </div>

            {/* Micro UI Visual 2 */}
            <div className="bento-visual visual-enrichment">
              <div className="enrich-card">
                <div className="enrich-row">
                  <Globe size={13} className="text-cyan" />
                  <span className="enrich-domain">austindental.com</span>
                  <ArrowUpRight size={11} className="text-muted" />
                </div>
                <div className="enrich-row email-highlight">
                  <MailCheck size={13} color="#22C55E" />
                  <span className="enrich-email">dr.smith@austindental.com</span>
                </div>
                <div className="enrich-tags">
                  <span className="tech-tag"><Code size={10} /> WordPress</span>
                  <span className="tech-tag">React</span>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Feature 3 — Medium Bento Card */}
          <GlassCard className="bento-card bento-card--medium hover-lift" padding="lg">
            <div className="bento-card-top">
              <div className="bento-icon-box bento-icon--purple">
                <Sparkles size={22} />
              </div>
              <div className="bento-metric-pill metric-pill--purple">
                <Sparkles size={13} />
                <span>AI Pitch Generated</span>
              </div>
            </div>

            <div className="bento-card-body">
              <h3 className="bento-title">AI Cold Pitch Generator</h3>
              <p className="bento-description">
                Generate personalized cold outreach using AI-powered analysis of each lead's business and pain points.
              </p>
            </div>

            {/* Micro UI Visual 3 */}
            <div className="bento-visual visual-ai-pitch">
              <div className="ai-snippet-box">
                <div className="ai-snippet-header">
                  <Sparkles size={12} color="#0EA5A4" />
                  <span>Groq Llama-3.3 Pitch</span>
                </div>
                <div className="ai-snippet-text">
                  "Hi Dr. Smith, noticed your clinic's 4.9★ rating..."
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Feature 4 — Large Bento Card */}
          <GlassCard className="bento-card bento-card--large hover-lift" padding="lg">
            <div className="bento-card-top">
              <div className="bento-icon-box bento-icon--blue">
                <Kanban size={24} />
              </div>
              <div className="bento-metric-pill metric-pill--blue">
                <Kanban size={13} />
                <span>32 leads in pipeline</span>
              </div>
            </div>

            <div className="bento-card-body">
              <h3 className="bento-title">Visual Kanban CRM</h3>
              <p className="bento-description">
                Manage leads through a visual sales pipeline and track every stage from discovery to closed deal.
              </p>
            </div>

            {/* Micro UI Visual 4 */}
            <div className="bento-visual visual-crm">
              <div className="bento-kanban-cols">
                <div className="bento-col">
                  <span className="col-title">New</span>
                  <div className="bento-kanban-card card-border-blue">Austin Dental</div>
                </div>
                <div className="bento-col">
                  <span className="col-title">Enriched</span>
                  <div className="bento-kanban-card card-border-amber">Texas Smile</div>
                </div>
                <div className="bento-col">
                  <span className="col-title">Outreach</span>
                  <div className="bento-kanban-card card-border-purple">Capital Clinic</div>
                </div>
                <div className="bento-col col--won">
                  <span className="col-title text-emerald">Closed</span>
                  <div className="bento-kanban-card card-border-green">Lone Star Care</div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Feature 5 — Medium Bento Card */}
          <GlassCard className="bento-card bento-card--medium hover-lift" padding="lg">
            <div className="bento-card-top">
              <div className="bento-icon-box bento-icon--emerald">
                <Map size={22} />
              </div>
              <div className="bento-metric-pill metric-pill--emerald">
                <MapPin size={13} />
                <span>12 high-intent locations</span>
              </div>
            </div>

            <div className="bento-card-body">
              <h3 className="bento-title">Interactive Map Visualizer</h3>
              <p className="bento-description">
                See discovered businesses geographically and identify high-value local opportunities faster.
              </p>
            </div>

            {/* Micro UI Visual 5 */}
            <div className="bento-visual visual-map-radar">
              <div className="map-radar-box">
                <div className="radar-grid" />
                <div className="radar-pin pin-1">
                  <span className="pin-pulse" />
                  <MapPin size={16} color="#0EA5A4" fill="#0EA5A4" />
                </div>
                <div className="radar-pin pin-2">
                  <MapPin size={14} color="#4DA3FF" fill="#4DA3FF" />
                </div>
                <div className="radar-pin pin-3">
                  <MapPin size={14} color="#22C55E" fill="#22C55E" />
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Feature 6 — Medium Bento Card */}
          <GlassCard className="bento-card bento-card--medium hover-lift" padding="lg">
            <div className="bento-card-top">
              <div className="bento-icon-box bento-icon--amber">
                <Coins size={22} />
              </div>
              <div className="bento-metric-pill metric-pill--amber">
                <Zap size={13} />
                <span>420 / 500 credits</span>
              </div>
            </div>

            <div className="bento-card-body">
              <h3 className="bento-title">Credit Economics</h3>
              <p className="bento-description">
                Track credit usage transparently and understand exactly how your MapFlow usage is consumed.
              </p>
            </div>

            {/* Micro UI Visual 6 */}
            <div className="bento-visual visual-credits">
              <div className="credit-meter-box">
                <div className="credit-labels">
                  <span>Usage Rate</span>
                  <span className="credit-pct">84% Available</span>
                </div>
                <div className="credit-track">
                  <div className="credit-fill" style={{ width: '84%' }} />
                </div>
                <div className="credit-subtext">Transparent 1 credit per lead extraction</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
};
