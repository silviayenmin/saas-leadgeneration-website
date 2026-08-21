import React, { useState } from 'react';
import {
  Search,
  MapPin,
  Mail,
  Phone,
  Globe,
  Star,
  Sparkles,
  Kanban,
  CheckCircle2,
  Copy,
  Check,
  Linkedin,
  Instagram,
  Twitter,
  Code,
  Zap,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  Sliders
} from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import './sections.css';

type ShowcaseTab = 'discovery' | 'details' | 'pitch' | 'crm';

export const ProductShowcaseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>('discovery');
  const [copied, setCopied] = useState(false);

  const handleCopyPitch = () => {
    const pitchText = `Hi John,\n\nNoticed Apex Marketing Group has a stellar 4.9★ rating on Google Maps in Austin! While analyzing your site apexmarketing.com, I noticed mobile load speeds take over 4 seconds, which might be leaking high-intent local clients to competitors.\n\nWe built an automated fix for this—would you be open to a 3-minute video breakdown?`;
    navigator.clipboard.writeText(pitchText).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="product" className="section-wrapper product-showcase-wrapper">
      {/* Background Glow */}
      <div className="showcase-bg-glow" />

      <Container size="lg">
        {/* Section Heading */}
        <SectionHeading
          badge="LIVE PRODUCT DEMO"
          title="Experience MapFlow AI in Action"
          subtitle="Explore our full product suite—from lead discovery to AI outreach and CRM deal closing."
          align="center"
        />

        {/* Tab Navigation Controls */}
        <div className="showcase-tabs-container">
          <div className="showcase-tabs-nav">
            <button
              className={`showcase-tab-btn ${activeTab === 'discovery' ? 'active' : ''}`}
              onClick={() => setActiveTab('discovery')}
            >
              <Search size={16} />
              <span>1. Lead Discovery</span>
            </button>

            <button
              className={`showcase-tab-btn ${activeTab === 'details' ? 'active' : ''}`}
              onClick={() => setActiveTab('details')}
            >
              <Layers size={16} />
              <span>2. Lead Details</span>
            </button>

            <button
              className={`showcase-tab-btn ${activeTab === 'pitch' ? 'active' : ''}`}
              onClick={() => setActiveTab('pitch')}
            >
              <Sparkles size={16} />
              <span>3. AI Pitch</span>
            </button>

            <button
              className={`showcase-tab-btn ${activeTab === 'crm' ? 'active' : ''}`}
              onClick={() => setActiveTab('crm')}
            >
              <Kanban size={16} />
              <span>4. CRM Pipeline</span>
            </button>
          </div>
        </div>

        {/* Product Dashboard Window Shell */}
        <div className="showcase-window">
          {/* Window Bar */}
          <div className="showcase-window-bar">
            <div className="window-dots">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
            </div>
            <div className="window-title">
              <ShieldCheck size={12} color="#0EA5A4" />
              <span>MapFlow AI Cloud Workstation — {activeTab.toUpperCase()}</span>
            </div>
            <div className="window-status">
              <span className="status-indicator" />
              <span>Connected Engine</span>
            </div>
          </div>

          {/* Window Body Display based on Active Tab */}
          <div className="showcase-window-body">
            {/* TAB 1: LEAD DISCOVERY */}
            {activeTab === 'discovery' && (
              <div className="tab-pane animate-fade-in">
                {/* Top Control Header */}
                <div className="discovery-header-bar">
                  <div className="discovery-search-inputs">
                    <div className="search-field">
                      <Search size={14} className="text-muted" />
                      <span className="field-val">Digital Marketing Agencies</span>
                    </div>
                    <div className="search-field">
                      <MapPin size={14} className="text-cyan" />
                      <span className="field-val">Austin, TX</span>
                    </div>
                  </div>
                  <div className="discovery-results-count">
                    <Zap size={13} color="#0EA5A4" />
                    <span>142 Leads Found</span>
                  </div>
                </div>

                {/* Main Split: Results List + Map Canvas */}
                <div className="discovery-split-view">
                  {/* Results List */}
                  <div className="discovery-leads-column">
                    <div className="column-header-row">
                      <span>EXTRACTED MAP RESULTS</span>
                      <span className="text-emerald">LIVE SYNC</span>
                    </div>

                    <div className="discovery-lead-card lead--active">
                      <div className="lead-card-top">
                        <span className="lead-name-text">Apex Marketing Group</span>
                        <span className="verified-chip"><CheckCircle2 size={10} /> Email Verified</span>
                      </div>
                      <div className="lead-stars-row">
                        <Star size={11} fill="#F59E0B" color="#F59E0B" />
                        <span className="star-score">4.9</span>
                        <span className="review-num">(128 Google Reviews)</span>
                      </div>
                      <div className="lead-meta-info">
                        <span><Globe size={11} /> apexmarketing.com</span>
                        <span><Mail size={11} /> john.smith@apexmarketing.com</span>
                      </div>
                    </div>

                    <div className="discovery-lead-card">
                      <div className="lead-card-top">
                        <span className="lead-name-text">Austin Digital Media</span>
                        <span className="enriching-chip"><Clock size={10} /> Enriching...</span>
                      </div>
                      <div className="lead-stars-row">
                        <Star size={11} fill="#F59E0B" color="#F59E0B" />
                        <span className="star-score">4.8</span>
                        <span className="review-num">(94 Google Reviews)</span>
                      </div>
                      <div className="lead-meta-info">
                        <span><Globe size={11} /> austindigital.com</span>
                        <span><Phone size={11} /> (512) 780-9900</span>
                      </div>
                    </div>

                    <div className="discovery-lead-card">
                      <div className="lead-card-top">
                        <span className="lead-name-text">Capital Growth Agency</span>
                        <span className="verified-chip"><CheckCircle2 size={10} /> Email Verified</span>
                      </div>
                      <div className="lead-stars-row">
                        <Star size={11} fill="#F59E0B" color="#F59E0B" />
                        <span className="star-score">4.7</span>
                        <span className="review-num">(62 Google Reviews)</span>
                      </div>
                      <div className="lead-meta-info">
                        <span><Globe size={11} /> capitalgrowth.io</span>
                        <span><Mail size={11} /> hello@capitalgrowth.io</span>
                      </div>
                    </div>
                  </div>

                  {/* Simulated Map Canvas */}
                  <div className="discovery-map-canvas">
                    <div className="map-grid-bg" />
                    
                    {/* Active Map Pin 1 */}
                    <div className="map-pin-item pin--active" style={{ top: '35%', left: '42%' }}>
                      <span className="pin-pulse-wave" />
                      <MapPin size={22} color="#0EA5A4" fill="#0EA5A4" />
                      <div className="pin-popover">
                        <strong>Apex Marketing Group</strong>
                        <span>4.9 ★ | 128 Reviews</span>
                      </div>
                    </div>

                    {/* Map Pin 2 */}
                    <div className="map-pin-item" style={{ top: '65%', left: '72%' }}>
                      <MapPin size={18} color="#4DA3FF" fill="#4DA3FF" />
                    </div>

                    {/* Map Pin 3 */}
                    <div className="map-pin-item" style={{ top: '22%', left: '78%' }}>
                      <MapPin size={18} color="#22C55E" fill="#22C55E" />
                    </div>

                    <div className="map-controls-overlay">
                      <span className="map-tag"><Sliders size={11} /> Radar Radius: 25mi</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: LEAD DETAILS */}
            {activeTab === 'details' && (
              <div className="tab-pane animate-fade-in">
                <div className="details-card-container">
                  {/* Lead Hero Summary */}
                  <div className="details-hero-head">
                    <div className="biz-avatar">AM</div>
                    <div className="biz-title-wrap">
                      <div className="biz-title-row">
                        <h2>Apex Marketing Group</h2>
                        <span className="verified-badge"><CheckCircle2 size={12} /> Verified Data</span>
                      </div>
                      <div className="biz-rating-row">
                        <Star size={13} fill="#F59E0B" color="#F59E0B" />
                        <span className="score-val">4.9 Rating</span>
                        <span className="text-muted">(128 Google Reviews)</span>
                        <span className="category-pill">Digital Marketing Agency</span>
                      </div>
                    </div>
                  </div>

                  {/* Grid Details */}
                  <div className="details-info-grid">
                    {/* Contact Signals Column */}
                    <div className="details-section-box">
                      <h4 className="box-heading"><Phone size={14} className="text-cyan" /> Direct Contact Information</h4>
                      <div className="info-list">
                        <div className="info-item">
                          <span className="info-label">Direct Owner Email</span>
                          <span className="info-value text-emerald">john.smith@apexmarketing.com</span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">Office Phone</span>
                          <span className="info-value">(512) 890-4321</span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">Company Website</span>
                          <a href="#" className="info-value text-blue" onClick={(e) => e.preventDefault()}>
                            apexmarketing.com <ArrowUpRight size={11} />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Social & Tech Signals Column */}
                    <div className="details-section-box">
                      <h4 className="box-heading"><Code size={14} className="text-cyan" /> Web &amp; Tech Intelligence</h4>
                      <div className="info-list">
                        <div className="info-item">
                          <span className="info-label">Social Profiles</span>
                          <div className="social-icon-row">
                            <span className="social-chip"><Linkedin size={12} /> LinkedIn</span>
                            <span className="social-chip"><Instagram size={12} /> Instagram</span>
                            <span className="social-chip"><Twitter size={12} /> Twitter/X</span>
                          </div>
                        </div>
                        <div className="info-item">
                          <span className="info-label">Detected Tech Stack</span>
                          <div className="tech-stack-row">
                            <span className="tech-chip"><Code size={11} /> WordPress</span>
                            <span className="tech-chip">Google Analytics 4</span>
                            <span className="tech-chip">HubSpot CRM</span>
                            <span className="tech-chip">SEMrush</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Reviews Summary */}
                  <div className="details-reviews-box">
                    <h4 className="box-heading"><Star size={14} color="#F59E0B" /> Google Reviews Summary</h4>
                    <p className="review-quote">
                      "Apex Marketing helped us scale our local service business, but their response time on web redesigns took longer than expected."
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: AI PITCH */}
            {activeTab === 'pitch' && (
              <div className="tab-pane animate-fade-in">
                <div className="pitch-pane-wrapper">
                  {/* Left Column: AI Audit & Tags */}
                  <div className="pitch-audit-col">
                    <div className="audit-box">
                      <div className="audit-head">
                        <Sparkles size={16} className="text-purple" />
                        <h3>AI Business Analysis</h3>
                      </div>
                      <div className="pain-points-list">
                        <div className="pain-item">
                          <span className="pain-bullet text-amber">!</span>
                          <span>Mobile load time exceeds 4.2s</span>
                        </div>
                        <div className="pain-item">
                          <span className="pain-bullet text-amber">!</span>
                          <span>Missing local schema structured markup</span>
                        </div>
                        <div className="pain-item">
                          <span className="pain-bullet text-emerald">✓</span>
                          <span>Strong Google Maps rating (4.9★)</span>
                        </div>
                      </div>
                    </div>

                    <div className="tags-box">
                      <h4>Personalization Tags</h4>
                      <div className="tags-flex">
                        <span className="tag-pill">{"{{Owner_Name}} = John"}</span>
                        <span className="tag-pill">{"{{Company}} = Apex Marketing"}</span>
                        <span className="tag-pill">{"{{Rating}} = 4.9★"}</span>
                        <span className="tag-pill">{"{{Pain_Point}} = Mobile Speed"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: AI Cold Pitch Generator Box */}
                  <div className="pitch-editor-col">
                    <div className="editor-card">
                      <div className="editor-top-bar">
                        <div className="email-meta">
                          <span className="text-muted">To:</span> john.smith@apexmarketing.com
                        </div>
                        <button className="copy-btn" onClick={handleCopyPitch}>
                          {copied ? (
                            <>
                              <Check size={14} color="#22C55E" />
                              <span className="text-emerald">Copied to Clipboard!</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              <span>Copy Pitch</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="email-subject-line">
                        <strong>Subject:</strong> Quick idea for Apex Marketing's mobile load times
                      </div>

                      <div className="email-body-text">
                        <p>Hi John,</p>
                        <p>
                          Noticed Apex Marketing Group has a stellar <strong>4.9★ rating</strong> on Google Maps in Austin!
                        </p>
                        <p>
                          While analyzing your site <em>apexmarketing.com</em>, I noticed mobile load speeds take over <strong>4 seconds</strong>, which might be leaking high-intent local clients to competitors.
                        </p>
                        <p>
                          We built an automated fix for this—would you be open to a 3-minute video breakdown?
                        </p>
                        <p>Best regards,<br />MapFlow Sales Team</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: CRM PIPELINE */}
            {activeTab === 'crm' && (
              <div className="tab-pane animate-fade-in">
                <div className="crm-kanban-board">
                  {/* Column 1: New */}
                  <div className="crm-kanban-column">
                    <div className="column-head">
                      <span className="head-title">New Leads</span>
                      <span className="head-count">12</span>
                    </div>
                    <div className="column-cards">
                      <div className="kanban-deal-card">
                        <span className="deal-name">Austin Dental Care</span>
                        <span className="deal-value">$3,500/mo</span>
                        <div className="deal-footer">
                          <span className="deal-stage stage--new">Discovered</span>
                          <span className="deal-time">2h ago</span>
                        </div>
                      </div>

                      <div className="kanban-deal-card">
                        <span className="deal-name">Lone Star Roofing</span>
                        <span className="deal-value">$5,000/mo</span>
                        <div className="deal-footer">
                          <span className="deal-stage stage--new">Discovered</span>
                          <span className="deal-time">4h ago</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Enriched */}
                  <div className="crm-kanban-column">
                    <div className="column-head">
                      <span className="head-title">Enriched</span>
                      <span className="head-count">8</span>
                    </div>
                    <div className="column-cards">
                      <div className="kanban-deal-card">
                        <span className="deal-name">Apex Marketing</span>
                        <span className="deal-value">$6,200/mo</span>
                        <div className="deal-footer">
                          <span className="deal-stage stage--enriched">Emails Found</span>
                          <span className="deal-time">1d ago</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 3: Contacted */}
                  <div className="crm-kanban-column">
                    <div className="column-head">
                      <span className="head-title">Contacted</span>
                      <span className="head-count">6</span>
                    </div>
                    <div className="column-cards">
                      <div className="kanban-deal-card">
                        <span className="deal-name">Capital Media</span>
                        <span className="deal-value">$4,800/mo</span>
                        <div className="deal-footer">
                          <span className="deal-stage stage--contacted">Pitch Sent</span>
                          <span className="deal-time">2d ago</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 4: Replied */}
                  <div className="crm-kanban-column">
                    <div className="column-head">
                      <span className="head-title">Replied</span>
                      <span className="head-count">4</span>
                    </div>
                    <div className="column-cards">
                      <div className="kanban-deal-card">
                        <span className="deal-name">Summit Plumbing</span>
                        <span className="deal-value">$7,500/mo</span>
                        <div className="deal-footer">
                          <span className="deal-stage stage--replied">Interested</span>
                          <span className="deal-time">3d ago</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 5: In Discussion */}
                  <div className="crm-kanban-column">
                    <div className="column-head">
                      <span className="head-title">In Discussion</span>
                      <span className="head-count">3</span>
                    </div>
                    <div className="column-cards">
                      <div className="kanban-deal-card">
                        <span className="deal-name">Urban Design Lab</span>
                        <span className="deal-value">$9,000/mo</span>
                        <div className="deal-footer">
                          <span className="deal-stage stage--discussion">Demo Scheduled</span>
                          <span className="deal-time">5d ago</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 6: Won */}
                  <div className="crm-kanban-column column--won">
                    <div className="column-head">
                      <span className="head-title text-emerald">Won Deals</span>
                      <span className="head-count count--won">2</span>
                    </div>
                    <div className="column-cards">
                      <div className="kanban-deal-card card--closed">
                        <span className="deal-name">Texas Smile Center</span>
                        <span className="deal-value text-emerald">$12,000/mo</span>
                        <div className="deal-footer">
                          <span className="deal-stage stage--won"><CheckCircle2 size={10} /> Contract Signed</span>
                          <span className="deal-time">1w ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
