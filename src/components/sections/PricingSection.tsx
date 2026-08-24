import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import {
  Check,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Zap,
  Crown,
  TrendingUp,
  CheckCircle2,
  Minus,
  TableProperties
} from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { SITE_CONFIG } from '../../config/siteConfig';
import './sections.css';

type BillingCycle = 'monthly' | 'annual';

interface PricingTier {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  icon: React.ReactNode;
  badge?: string;
  label: string;
  creditsBadge: string;
  description: string;
  features: string[];
  ctaText: string;
  highlighted?: boolean;
}

export const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  useEffect(() => {
    AOS.refresh();
  }, [billingCycle]);

  const tiers: PricingTier[] = [
    {
      id: 'free',
      name: 'FREE EXPLORER',
      monthlyPrice: 0,
      annualPrice: 0,
      icon: <Zap size={22} color="#0EA5A4" />,
      label: 'For Getting Started',
      creditsBadge: '25 Lead Credits / month',
      description: 'Ideal for trying out MapFlow lead extraction on your first target city.',
      features: [
        '25 Lead Credits / month',
        'Basic Maps Lead Search',
        'Standard Email Scrape',
        'CSV Lead Export',
        'Standard Support'
      ],
      ctaText: 'Start Free',
      highlighted: false
    },
    {
      id: 'starter',
      name: 'STARTER PRO',
      monthlyPrice: 29,
      annualPrice: 23,
      icon: <Sparkles size={22} color="#ffffff" />,
      badge: 'MOST POPULAR',
      label: 'For Growing Businesses',
      creditsBadge: '500 Lead Credits / month',
      description: 'Everything you need to build a consistent 500+ lead outbound pipeline every month.',
      features: [
        '500 Lead Credits / month',
        'Advanced Maps Search',
        'Deep Email & Social Enrichment',
        'AI Cold Email Pitch',
        'CRM Pipeline Tracking',
        'CSV / JSON Export',
        'Priority Support'
      ],
      ctaText: 'Start Starter Pro',
      highlighted: true
    },
    {
      id: 'agency',
      name: 'AGENCY PRO',
      monthlyPrice: 79,
      annualPrice: 63,
      icon: <Crown size={22} color="#C084FC" />,
      label: 'For Agencies & Teams',
      creditsBadge: '2,500 Lead Credits / month',
      description: 'Maximum power and credits for lead generation agencies and sales teams.',
      features: [
        '2,500 Lead Credits / month',
        'Unlimited Map Scans',
        'Full AI Website Audit',
        'Multi-Channel Pitches',
        'Full CRM Automation',
        'Priority API Access',
        'Dedicated Manager'
      ],
      ctaText: 'Start Agency Pro',
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="section-wrapper pricing-wrapper">
      {/* Ambient Background Glow */}
      <div className="pricing-bg-glow" />

      <Container size="lg">
        {/* Section Heading */}
        <SectionHeading
          badge="TRANSPARENT PRICING"
          title="Simple Pricing. Powerful Lead Generation."
          subtitle="Start free and scale when your pipeline grows."
          align="center"
        />

        {/* Modern Monthly vs Annual Billing Toggle */}
        <div className="billing-toggle-container">
          <div className="billing-toggle-pill">
            <button
              type="button"
              className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              className={`toggle-btn ${billingCycle === 'annual' ? 'active' : ''}`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual Billing
              <span className="discount-badge">Save 20%</span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="pricing-grid">
          {tiers.map((tier, idx) => {
            const price = billingCycle === 'monthly' ? tier.monthlyPrice : tier.annualPrice;
            const aosEffect = idx === 0 ? 'fade-right' : idx === 1 ? 'zoom-in-up' : 'fade-left';
            return (
              <GlassCard
                key={tier.id}
                className={`pricing-card ${tier.highlighted ? 'pricing-card--featured' : ''}`}
                padding="lg"
                data-aos={aosEffect}
                data-aos-duration="1000"
                data-aos-delay={(idx + 1) * 100}
              >
                {/* Header Row: Icon + Most Popular Badge */}
                <div className="card-top-header">
                  <div className={`plan-icon-box ${tier.highlighted ? 'icon-box--featured' : ''}`}>
                    {tier.icon}
                  </div>
                  {tier.badge && (
                    <div className="popular-badge-inline">
                      <Sparkles size={12} />
                      <span>{tier.badge}</span>
                    </div>
                  )}
                </div>

                <div className="pricing-card-head">
                  <span className="pricing-label">{tier.label}</span>
                  <h3 className="pricing-name">{tier.name}</h3>

                  {/* Price Display */}
                  <div className="pricing-price-wrap">
                    <span className="pricing-currency">$</span>
                    <span className="pricing-amount">{price}</span>
                    <span className="pricing-period">/ month</span>
                  </div>

                  {/* Credit Highlight Pill */}
                  <div className="credits-highlight-pill">
                    <TrendingUp size={12} />
                    <span>{tier.creditsBadge}</span>
                  </div>

                  <p className="pricing-desc">{tier.description}</p>
                </div>

                <div className="pricing-divider" />

                {/* Feature Bullet List */}
                <ul className="pricing-feature-list">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="pricing-feature-item">
                      <span className="feature-check-icon">
                        <Check size={13} color="#22C55E" />
                      </span>
                      <span className="feature-text">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Action */}
                <div className="pricing-card-footer">
                  <Button
                    variant={tier.highlighted ? 'primary' : 'outline'}
                    size="lg"
                    fullWidth
                    href={SITE_CONFIG.saasProductUrl}
                    icon={<ArrowRight size={16} />}
                  >
                    {tier.ctaText}
                  </Button>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Subtext and Compare Matrix Action */}
        <div className="pricing-bottom-bar">
          <div className="no-card-subtext">
            <div className="shield-icon-badge">
              <ShieldCheck size={16} />
            </div>
            <span>No credit card required to start • Cancel anytime with 1 click</span>
          </div>

          <button
            type="button"
            className="compare-matrix-btn"
            onClick={() => setIsCompareOpen(true)}
          >
            <TableProperties size={15} />
            <span>Compare full feature matrix</span>
            <ArrowUpRight size={14} className="matrix-arrow-icon" />
          </button>
        </div>
      </Container>

      {/* Modern Feature Matrix Comparison Modal */}
      <Modal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        title={
          <>
            <TableProperties size={18} className="text-cyan" />
            <span>Full Plan Feature Comparison Matrix</span>
          </>
        }
      >
        <div className="matrix-modal-content">
          {/* Mobile-only Swipe Hint */}
          <div className="mobile-matrix-hint">
            <span>Swipe horizontally to compare plans ↔</span>
          </div>

          <table className="matrix-table">
            <thead>
              <tr>
                <th className="th-feature">Feature / Capabilities</th>
                <th className="th-plan">
                  <div className="th-plan-name">Free Explorer</div>
                  <div className="th-plan-price">$0/mo</div>
                </th>
                <th className="th-plan th-plan--featured">
                  <span className="th-popular-pill">MOST POPULAR</span>
                  <div className="th-plan-name">Starter Pro</div>
                  <div className="th-plan-price">$29/mo</div>
                </th>
                <th className="th-plan">
                  <div className="th-plan-name">Agency Pro</div>
                  <div className="th-plan-price">$79/mo</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td-feature-title">Monthly Lead Credits</td>
                <td><span className="matrix-pill">25</span></td>
                <td className="td-featured"><span className="matrix-pill pill--cyan">500</span></td>
                <td><span className="matrix-pill pill--purple">2,500</span></td>
              </tr>
              <tr>
                <td className="td-feature-title">Google Maps Live Extractor</td>
                <td><span className="matrix-val">Basic</span></td>
                <td className="td-featured"><span className="matrix-val text-cyan">Advanced Live</span></td>
                <td><span className="matrix-val text-emerald">Unlimited Scans</span></td>
              </tr>
              <tr>
                <td className="td-feature-title">Email &amp; Social Enrichment</td>
                <td><span className="matrix-val">Standard</span></td>
                <td className="td-featured"><span className="matrix-val text-cyan">Deep Enrichment</span></td>
                <td><span className="matrix-val text-emerald">Deep + Multi-channel</span></td>
              </tr>
              <tr>
                <td className="td-feature-title">AI Cold Pitch Generator</td>
                <td><Minus size={16} className="text-muted" /></td>
                <td className="td-featured"><span className="matrix-pill pill--cyan">Groq Llama-3.3 AI</span></td>
                <td><span className="matrix-val text-emerald">Full Audit &amp; Pitches</span></td>
              </tr>
              <tr>
                <td className="td-feature-title">Kanban CRM Pipeline Tracking</td>
                <td><Minus size={16} className="text-muted" /></td>
                <td className="td-featured"><CheckCircle2 size={18} color="#22C55E" /></td>
                <td><span className="matrix-val text-emerald">Full CRM Automation</span></td>
              </tr>
              <tr>
                <td className="td-feature-title">Export Formats</td>
                <td><span className="matrix-pill">CSV</span></td>
                <td className="td-featured"><span className="matrix-pill pill--cyan">CSV / JSON</span></td>
                <td><span className="matrix-pill pill--purple">CSV / JSON / API</span></td>
              </tr>
              <tr>
                <td className="td-feature-title">Support Level</td>
                <td><span className="matrix-val">Standard</span></td>
                <td className="td-featured"><span className="matrix-val text-cyan">Priority Support</span></td>
                <td><span className="matrix-val text-emerald">Dedicated Account Mgr</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal>
    </section>
  );
};
