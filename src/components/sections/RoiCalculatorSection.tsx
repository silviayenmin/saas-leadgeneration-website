import React, { useState } from 'react';
import {
  Calculator,
  DollarSign,
  Users,
  Target,
  Percent,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { SITE_CONFIG } from '../../config/siteConfig';
import './sections.css';

export const RoiCalculatorSection: React.FC = () => {
  // Input React States
  const [leads, setLeads] = useState<number>(1000);
  const [dealValue, setDealValue] = useState<number>(2500);
  const [replyRate, setReplyRate] = useState<number>(5);
  const [closeRate, setCloseRate] = useState<number>(20);

  // Math Calculations
  const estimatedReplies = Math.round(leads * (replyRate / 100));
  const estimatedClosedDeals = Math.round(estimatedReplies * (closeRate / 100));
  const estimatedMonthlyRevenue = Math.round(estimatedClosedDeals * dealValue);

  // Recommended Plan Logic
  const isStarter = leads <= 500;
  const recommendedPlanName = isStarter ? 'Starter Pro' : 'Agency Pro';
  const recommendedPlanPrice = isStarter ? 29 : 79;

  // Preset percentage pills for fast selection
  const replyPresetOptions = [3, 5, 8, 12];
  const closePresetOptions = [10, 15, 20, 30];

  return (
    <section id="roi-calculator" className="section-wrapper roi-calculator-wrapper">
      {/* Background Ambient Glow */}
      <div className="roi-bg-glow" />

      <Container size="lg">
        {/* Section Heading */}
        <SectionHeading
          badge="REVENUE POTENTIAL CALCULATOR"
          title="See What Your Lead Pipeline Could Be Worth"
          subtitle="Estimate the revenue potential from your monthly local lead generation."
          align="center"
        />

        {/* Calculator Main Grid */}
        <div className="roi-grid">
          {/* Left Column — Interactive Control Panel */}
          <GlassCard className="roi-controls-card" padding="lg">
            <div className="card-header-bar">
              <Calculator size={20} className="text-cyan" />
              <h3 className="controls-title">Pipeline Variables</h3>
            </div>

            {/* Input 1: Target Leads per Month */}
            <div className="control-group">
              <div className="control-label-row">
                <label htmlFor="leads-range" className="control-label">
                  <Users size={15} className="text-muted" />
                  <span>Target Leads Needed per Month</span>
                </label>
                <span className="control-val-badge">{leads.toLocaleString()} Leads</span>
              </div>
              <input
                id="leads-range"
                type="range"
                min={100}
                max={5000}
                step={100}
                value={leads}
                onChange={(e) => setLeads(Number(e.target.value))}
                className="roi-slider"
              />
              <div className="slider-limits">
                <span>100</span>
                <span>2,500</span>
                <span>5,000</span>
              </div>
            </div>

            {/* Input 2: Average Deal Value */}
            <div className="control-group">
              <div className="control-label-row">
                <label htmlFor="deal-range" className="control-label">
                  <DollarSign size={15} className="text-muted" />
                  <span>Average Deal Value (LTV / ACV)</span>
                </label>
                <span className="control-val-badge text-emerald">${dealValue.toLocaleString()}</span>
              </div>
              <input
                id="deal-range"
                type="range"
                min={500}
                max={10000}
                step={250}
                value={dealValue}
                onChange={(e) => setDealValue(Number(e.target.value))}
                className="roi-slider"
              />
              <div className="slider-limits">
                <span>$500</span>
                <span>$5,000</span>
                <span>$10,000</span>
              </div>
            </div>

            {/* Input 3: Cold Email Reply Rate */}
            <div className="control-group">
              <div className="control-label-row">
                <label className="control-label">
                  <Percent size={15} className="text-muted" />
                  <span>Estimated Cold Email Reply Rate</span>
                </label>
                <span className="control-val-badge">{replyRate}%</span>
              </div>
              <div className="presets-row">
                {replyPresetOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    className={`preset-pill ${replyRate === opt ? 'active' : ''}`}
                    onClick={() => setReplyRate(opt)}
                  >
                    {opt}%
                  </button>
                ))}
                <input
                  type="number"
                  min={1}
                  max={30}
                  value={replyRate}
                  onChange={(e) => setReplyRate(Math.max(1, Math.min(50, Number(e.target.value))))}
                  className="preset-custom-input"
                  title="Custom Reply Rate %"
                />
              </div>
            </div>

            {/* Input 4: Closing Conversion Rate */}
            <div className="control-group">
              <div className="control-label-row">
                <label className="control-label">
                  <Target size={15} className="text-muted" />
                  <span>Closing Conversion Rate</span>
                </label>
                <span className="control-val-badge">{closeRate}%</span>
              </div>
              <div className="presets-row">
                {closePresetOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    className={`preset-pill ${closeRate === opt ? 'active' : ''}`}
                    onClick={() => setCloseRate(opt)}
                  >
                    {opt}%
                  </button>
                ))}
                <input
                  type="number"
                  min={1}
                  max={80}
                  value={closeRate}
                  onChange={(e) => setCloseRate(Math.max(1, Math.min(100, Number(e.target.value))))}
                  className="preset-custom-input"
                  title="Custom Closing Rate %"
                />
              </div>
            </div>
          </GlassCard>

          {/* Right Column — Visually Impressive Result Panel */}
          <div className="roi-result-card">
            <div className="result-card-inner">
              <div className="result-header">
                <span className="result-badge">
                  <TrendingUp size={13} /> DYNAMIC ESTIMATE
                </span>
                <span className="result-subtitle">Estimated Monthly Revenue</span>
              </div>

              {/* Huge Revenue Number Display */}
              <div className="revenue-hero-display">
                <span className="currency-symbol">$</span>
                <AnimatedCounter value={estimatedMonthlyRevenue} className="revenue-number" />
                <span className="per-month-tag">/ mo</span>
              </div>

              {/* Metrics Grid Breakdown */}
              <div className="result-metrics-grid">
                <div className="metric-tile">
                  <span className="tile-label">Monthly Leads</span>
                  <span className="tile-val">{leads.toLocaleString()}</span>
                </div>

                <div className="metric-tile">
                  <span className="tile-label">Est. Replies ({replyRate}%)</span>
                  <span className="tile-val text-cyan">{estimatedReplies}</span>
                </div>

                <div className="metric-tile">
                  <span className="tile-label">Est. Closed Deals ({closeRate}%)</span>
                  <span className="tile-val text-emerald">{estimatedClosedDeals}</span>
                </div>
              </div>

              {/* Recommended MapFlow Plan Pill */}
              <div className="recommended-plan-box">
                <div className="plan-box-head">
                  <Sparkles size={16} className="text-cyan" />
                  <span>RECOMMENDED MAPFLOW PLAN</span>
                </div>
                <div className="plan-box-details">
                  <div className="plan-name-wrap">
                    <span className="plan-name-title">{recommendedPlanName}</span>
                    <span className="plan-price-tag">${recommendedPlanPrice} / month</span>
                  </div>
                  <span className="plan-benefit-tag">
                    <CheckCircle2 size={12} color="#22C55E" />
                    {isStarter ? 'Includes up to 500 leads/mo' : 'Includes up to 5,000 leads/mo & CRM'}
                  </span>
                </div>
              </div>

              {/* CTA Action */}
              <div className="result-cta-wrap">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  href={SITE_CONFIG.saasProductUrl}
                  icon={<ArrowRight size={18} />}
                >
                  Get Started with {recommendedPlanName}
                </Button>
                <p className="cta-subnote">14-day free trial • No credit card required</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
