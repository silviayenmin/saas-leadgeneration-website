import React, { useState } from 'react';
import {
  Search,
  MapPin,
  Star,
  Sparkles,
  Kanban,
  CheckCircle2,
  Copy,
  Check,
  Zap,
  Sliders,
  Database,
  TrendingUp,
  Sun,
  Bell,
  User,
  ArrowLeft,
  FileSpreadsheet,
  Download,
  RotateCcw,
  ExternalLink,
  ChevronDown,
  Mail,
  Phone,
  Globe,
  Users,
  Linkedin,
  Send,
  MessageSquare,
  Compass
} from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import './sections.css';

type ShowcaseTab = 'discovery' | 'scans' | 'details' | 'crm';
type DiscoveryStep = 1 | 2 | 3 | 4; // 1: Audience, 2: Filters, 3: Qualify/Launch, 4: Engaged Scraper

export const ProductShowcaseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>('discovery');
  const [discoveryStep, setDiscoveryStep] = useState<DiscoveryStep>(1);
  const [copied, setCopied] = useState(false);
  const [pitchGenerated, setPitchGenerated] = useState(true);

  const handleCopyPitch = () => {
    const pitchText = `Hi Vortex Team,\n\nNoticed Vortex Global Software has a stellar 4.9★ rating on Google Maps! While analyzing your site vortexsoftware.io, I noticed mobile load speeds take over 4 seconds, which might be leaking high-intent local clients to competitors.\n\nWe built an automated fix for this—would you be open to a 3-minute video breakdown?`;
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
          badge="AUTHENTIC PRODUCT INTERFACE"
          title="Experience MapFlow AI in Action"
          subtitle="Explore our live SaaS tool—from 3-step lead discovery to maps scan history, lead profile details, and CRM pipeline."
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
              <span>1. Lead Discovery Wizard</span>
            </button>

            <button
              className={`showcase-tab-btn ${activeTab === 'scans' ? 'active' : ''}`}
              onClick={() => setActiveTab('scans')}
            >
              <Database size={16} />
              <span>2. Maps Scans &amp; History</span>
            </button>

            <button
              className={`showcase-tab-btn ${activeTab === 'details' ? 'active' : ''}`}
              onClick={() => setActiveTab('details')}
            >
              <Users size={16} />
              <span>3. Lead Details &amp; AI Copywriter</span>
            </button>

            <button
              className={`showcase-tab-btn ${activeTab === 'crm' ? 'active' : ''}`}
              onClick={() => setActiveTab('crm')}
            >
              <Kanban size={16} />
              <span>4. Outreach CRM Pipeline</span>
            </button>
          </div>
        </div>

        {/* Product Dashboard Window Shell */}
        <div className="showcase-window" data-aos="zoom-in-up">
          {/* Window Bar — Replicating SaaS Top Bar from User Screenshots */}
          <div className="showcase-window-bar">
            <div className="window-dots">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
            </div>

            <div className="window-title">
              <div className="saas-logo-brand">
                <Sparkles size={14} className="text-cyan" />
                <span className="saas-logo-text">MAPFLOW AI</span>
              </div>
              <span className="window-divider">|</span>
              <span className="saas-page-title">
                {activeTab === 'discovery' && 'Google Maps Lead Discovery'}
                {activeTab === 'scans' && 'Maps Scans & History'}
                {activeTab === 'details' && 'Maps Scans & History — Lead Details'}
                {activeTab === 'crm' && 'Outreach CRM Pipeline'}
              </span>
            </div>

            <div className="window-status-widgets">
              {/* Credits counter widget from screenshot */}
              <div className="saas-credits-pill">
                <Zap size={12} className="text-cyan" />
                <span><strong>480/500</strong> Credits</span>
                <span className="credits-upgrade-btn">Upgrade ↗</span>
              </div>

              <div className="saas-tool-icons">
                <Sun size={13} className="tool-icon" />
                <Bell size={13} className="tool-icon" />
                <div className="user-avatar-circle">M</div>
              </div>
            </div>
          </div>

          {/* Sub Header for Step Switcher when in Lead Discovery tab */}
          {activeTab === 'discovery' && (
            <div className="discovery-step-switcher-bar">
              <span className="switcher-label">WIZARD STEPS:</span>
              <button
                className={`step-switch-btn ${discoveryStep === 1 ? 'active' : ''}`}
                onClick={() => setDiscoveryStep(1)}
              >
                1. Define Audience
              </button>
              <button
                className={`step-switch-btn ${discoveryStep === 2 ? 'active' : ''}`}
                onClick={() => setDiscoveryStep(2)}
              >
                2. Configure Filters
              </button>
              <button
                className={`step-switch-btn ${discoveryStep === 3 ? 'active' : ''}`}
                onClick={() => setDiscoveryStep(3)}
              >
                3. Review &amp; Launch
              </button>
              <button
                className={`step-switch-btn ${discoveryStep === 4 ? 'active' : ''}`}
                onClick={() => setDiscoveryStep(4)}
              >
                4. Scraper Engaged
              </button>
            </div>
          )}

          {/* Window Body Display based on Active Tab */}
          <div className="showcase-window-body">
            {/* TAB 1: LEAD DISCOVERY */}
            {activeTab === 'discovery' && (
              <div className="tab-pane animate-fade-in discovery-saas-pane">
                <div className="saas-pane-intro">
                  <p className="intro-subtitle">
                    Guided AI scraper targeting buying signals across LinkedIn, Facebook, Google Maps, and other directories.
                  </p>
                </div>

                {/* Stepper Progress Bar */}
                <div className="saas-stepper-container">
                  <div className={`stepper-node ${discoveryStep >= 1 ? 'active' : ''}`}>
                    <div className="stepper-icon-circle">
                      <User size={14} />
                    </div>
                    <span className="stepper-label">Audience</span>
                  </div>

                  <div className={`stepper-line ${discoveryStep >= 2 ? 'filled' : ''}`} />

                  <div className={`stepper-node ${discoveryStep >= 2 ? 'active' : ''}`}>
                    <div className="stepper-icon-circle">
                      <Sliders size={14} />
                    </div>
                    <span className="stepper-label">Filters</span>
                  </div>

                  <div className={`stepper-line ${discoveryStep >= 3 ? 'filled' : ''}`} />

                  <div className={`stepper-node ${discoveryStep >= 3 ? 'active' : ''}`}>
                    <div className="stepper-icon-circle">
                      <Sparkles size={14} />
                    </div>
                    <span className="stepper-label">Qualify</span>
                  </div>
                </div>

                {/* STEP 1: DEFINE TARGET AUDIENCE (MATCHING LATEST UI SCREENSHOT) */}
                {discoveryStep === 1 && (
                  <div className="saas-card-wizard saas-card-wizard--audience animate-fade-in">
                    <div className="audience-split-layout">
                      {/* LEFT COLUMN: FORM INPUTS */}
                      <div className="audience-left-col">
                        <div className="wizard-card-header">
                          <div className="wizard-title-row">
                            <div className="title-icon-badge">
                              <Users size={16} color="#0EA5A4" />
                            </div>
                            <h3>Define Target Audience</h3>
                          </div>
                          <p className="wizard-desc">
                            Specify the search keywords and industry context for our Llama-3.3 AI scanner.
                          </p>
                        </div>

                        <div className="wizard-form-group">
                          <label className="form-label">SEARCH INTENT QUERY / KEYWORD</label>
                          <div className="form-input-box">
                            <Compass size={16} className="input-icon text-cyan" />
                            <input
                              type="text"
                              readOnly
                              placeholder="e.g. logo designers, software companies, restaurants"
                              className="form-input-text"
                            />
                          </div>
                          <span className="form-footnote">
                            Llama-3.3 will auto-expand this query to match varied social phrasing.
                          </span>
                        </div>

                        <div className="wizard-form-group">
                          <label className="form-label">TARGET LOCATION (OPTIONAL)</label>
                          <div className="form-input-box">
                            <MapPin size={16} className="input-icon text-cyan" />
                            <input
                              type="text"
                              readOnly
                              placeholder="e.g. United States, London"
                              className="form-input-text"
                            />
                          </div>
                        </div>
                      </div>

                      {/* RIGHT COLUMN: TARGET SCAN LOCATION PREVIEW MAP */}
                      <div className="audience-right-col">
                        <h4 className="preview-map-title">Target Scan Location Preview</h4>
                        <div className="preview-map-container">
                          {/* Satellite Map Vector / Graphic */}
                          <div className="preview-map-graphic">
                            {/* SVG Satellite Map Grid & Coastline */}
                            <svg className="map-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                              {/* Dark Map Base */}
                              <rect width="400" height="240" rx="8" fill="#1b2838" />
                              
                              {/* Coastline & Bay Lines */}
                              <path d="M 310 0 C 315 40, 312 80, 320 120 C 328 160, 345 200, 380 240 L 400 240 L 400 0 Z" fill="#141f2e" />
                              <path d="M 310 0 C 315 40, 312 80, 320 120 C 328 160, 345 200, 380 240" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="3 3" />
                              
                              {/* Major Roads */}
                              <path d="M 0 100 L 320 120" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                              <path d="M 120 0 L 220 240" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                              <path d="M 0 180 L 340 170" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                              
                              {/* Secondary Grid Lines */}
                              <pattern id="mapGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                              </pattern>
                              <rect width="400" height="240" fill="url(#mapGrid)" />

                              {/* Glowing Cyan Radar Scan Circle on Chennai */}
                              <circle cx="310" cy="112" r="32" fill="rgba(14, 165, 164, 0.15)" stroke="#0EA5A4" strokeWidth="1.5" strokeDasharray="4 4" className="radar-circle-pulse" />
                              <circle cx="310" cy="112" r="4" fill="#0EA5A4" />
                            </svg>

                            {/* Location City Labels matching screenshot */}
                            <span className="map-city-tag tag-avadi" style={{ top: '38%', left: '8%' }}>Avadi</span>
                            <span className="map-city-tag tag-ambattur" style={{ top: '38%', left: '26%' }}>Ambattur</span>
                            <span className="map-city-tag tag-madhavaram" style={{ top: '18%', left: '55%' }}>Madhavaram</span>
                            <span className="map-city-tag tag-tiruvottiyur" style={{ top: '10%', left: '78%' }}>Tiruvottiyur</span>
                            <span className="map-city-tag tag-chennai-main" style={{ top: '44%', left: '72%' }}>Chennai</span>
                            <span className="map-city-tag tag-maduravoyal" style={{ top: '56%', left: '26%' }}>Maduravoyal</span>
                            <span className="map-city-tag tag-poonamallee" style={{ top: '64%', left: '5%' }}>Poonamallee</span>
                            <span className="map-city-tag tag-valasaravakkam" style={{ top: '64%', left: '42%' }}>Valasaravakkam</span>
                            <span className="map-city-tag tag-alandur" style={{ top: '80%', left: '48%' }}>Alandur</span>
                            <span className="map-city-tag tag-shu88" style={{ top: '64%', left: '74%' }}>SHU88</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* FULL WIDTH CONTINUE BUTTON */}
                    <button className="saas-btn-continue saas-btn-continue--full" onClick={() => setDiscoveryStep(2)}>
                      Continue
                    </button>
                  </div>
                )}

                {/* STEP 2: CONFIGURE FILTERS & THRESHOLDS */}
                {discoveryStep === 2 && (
                  <div className="saas-card-wizard animate-fade-in">
                    <button className="back-step-link" onClick={() => setDiscoveryStep(1)}>
                      <ArrowLeft size={13} /> Back to Step 1
                    </button>

                    <div className="wizard-card-header">
                      <div className="wizard-title-row">
                        <Sliders size={18} className="text-cyan" />
                        <h3>Configure Filters &amp; Thresholds</h3>
                      </div>
                      <p className="wizard-desc">
                        Tune recency limits, search strictness, and the maximum results to crawl.
                      </p>
                    </div>

                    <div className="wizard-form-group">
                      <label className="form-label">MAXIMUM RECORDS SCANNED</label>
                      <div className="form-input-box select-box">
                        <span className="select-val"># 10 Results (Quick)</span>
                        <ChevronDown size={14} className="text-muted" />
                      </div>
                    </div>

                    <button className="saas-btn-continue" onClick={() => setDiscoveryStep(3)}>
                      Continue
                    </button>
                  </div>
                )}

                {/* STEP 3: REVIEW & LAUNCH SCRAPER */}
                {discoveryStep === 3 && (
                  <div className="saas-card-wizard animate-fade-in">
                    <button className="back-step-link" onClick={() => setDiscoveryStep(2)}>
                      <ArrowLeft size={13} /> Back to Step 2
                    </button>

                    <div className="wizard-card-header">
                      <div className="wizard-title-row">
                        <Sparkles size={18} className="text-cyan" />
                        <h3>Review &amp; Launch Scraper</h3>
                      </div>
                      <p className="wizard-desc">
                        Verify the configuration summary below before deploying the automated search.
                      </p>
                    </div>

                    <div className="summary-box-card">
                      <div className="summary-row">
                        <span className="summary-label"><User size={13} /> Target Audience</span>
                        <span className="summary-val font-bold">Software Development Company in Austin</span>
                      </div>
                      <div className="summary-row">
                        <span className="summary-label"><Database size={13} /> Platform Source</span>
                        <span className="summary-val badge-teal-code">GOOGLE_MAPS</span>
                      </div>
                      <div className="summary-row">
                        <span className="summary-label"><Sliders size={13} /> Recency / Limits</span>
                        <span className="summary-val font-bold">10 leads max</span>
                      </div>
                    </div>

                    <div className="targets-estimate-card">
                      <div className="estimate-number">17 - 37</div>
                      <div className="estimate-title">Estimated qualified lead targets</div>
                      <div className="estimate-sub">
                        Based on your filter metrics, matching history, and domain indexes.
                      </div>
                    </div>

                    <button className="saas-btn-continue btn-launch" onClick={() => setDiscoveryStep(4)}>
                      <Sparkles size={16} /> Launch AI scan
                    </button>
                  </div>
                )}

                {/* STEP 4: SCRAPER ENGAGED / LOADING STATE */}
                {discoveryStep === 4 && (
                  <div className="saas-loading-modal animate-fade-in">
                    <div className="loading-card-box">
                      <div className="loading-status-head">
                        <span className="pulse-emerald-dot" />
                        <span className="loading-title-text">MapFlow AI scraper engaged...</span>
                      </div>
                      <p className="loading-subtext">
                        Extracting details and scoring lead quality...
                      </p>

                      <div className="progress-bar-container">
                        <div className="progress-bar-fill animate-progress" style={{ width: '68%' }} />
                      </div>
                    </div>

                    <div className="view-results-hint">
                      <button className="hint-btn" onClick={() => setActiveTab('scans')}>
                        View Extracted Results in Scans &amp; History →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: MAPS SCANS & HISTORY (Table View) */}
            {activeTab === 'scans' && (
              <div className="tab-pane animate-fade-in scans-saas-pane">
                {/* Header Actions */}
                <div className="scans-header-row">
                  <div>
                    <h3 className="scans-page-heading">Maps Scans &amp; History</h3>
                    <p className="scans-page-sub">
                      Examine Google Maps queries, export CSV files, reveal contacts, and launch bulk pipeline deletions.
                    </p>
                  </div>

                  <div className="scans-actions-group">
                    <button className="btn-scans-outlined">
                      <Download size={13} /> Export CSV (All)
                    </button>
                    <button className="btn-scans-solid">
                      <FileSpreadsheet size={13} /> Sync Sheets (All)
                    </button>
                  </div>
                </div>

                {/* 4 Stat KPI Metric Tiles */}
                <div className="scans-kpi-grid">
                  <div className="kpi-card">
                    <div className="kpi-icon-box">
                      <Database size={16} className="text-cyan" />
                    </div>
                    <div className="kpi-data">
                      <div className="kpi-value">10</div>
                      <div className="kpi-label">Maps Leads</div>
                    </div>
                  </div>

                  <div className="kpi-card">
                    <div className="kpi-icon-box">
                      <TrendingUp size={16} className="text-emerald" />
                    </div>
                    <div className="kpi-data">
                      <div className="kpi-value">10 (100%)</div>
                      <div className="kpi-label">Highly Rated (4★+)</div>
                    </div>
                  </div>

                  <div className="kpi-card">
                    <div className="kpi-icon-box">
                      <Search size={16} className="text-cyan" />
                    </div>
                    <div className="kpi-data">
                      <div className="kpi-value">2</div>
                      <div className="kpi-label">Completed Scans</div>
                    </div>
                  </div>

                  <div className="kpi-card">
                    <div className="kpi-icon-box">
                      <CheckCircle2 size={16} className="text-emerald" />
                    </div>
                    <div className="kpi-data">
                      <div className="kpi-value">80%</div>
                      <div className="kpi-label">Phone Numbers Found</div>
                    </div>
                  </div>
                </div>

                {/* Search & Filters Bar */}
                <div className="scans-filter-toolbar">
                  <div className="scans-search-input-box">
                    <Search size={14} className="text-muted" />
                    <input
                      type="text"
                      readOnly
                      placeholder="Search company or website..."
                      className="scans-input"
                    />
                  </div>

                  <div className="filter-dropdowns-group">
                    <span className="dropdown-chip">All queries <ChevronDown size={12} /></span>
                    <span className="dropdown-chip">All Intent Scores <ChevronDown size={12} /></span>
                    <span className="dropdown-chip">All Stages <ChevronDown size={12} /></span>
                    <span className="dropdown-chip">All Records <ChevronDown size={12} /></span>
                    <span className="dropdown-chip">Date Range</span>
                    <button className="refresh-icon-btn" title="Refresh">
                      <RotateCcw size={13} />
                    </button>
                  </div>
                </div>

                {/* Data Table */}
                <div className="scans-table-wrapper">
                  <table className="scans-data-table">
                    <thead>
                      <tr>
                        <th style={{ width: '40px' }}><input type="checkbox" readOnly /></th>
                        <th>BUSINESS / COMPANY</th>
                        <th>RATING &amp; REVIEWS</th>
                        <th>AI MATCH</th>
                        <th>PHONE</th>
                        <th>EMAIL CONTACT</th>
                        <th>CRM LEAD</th>
                        <th style={{ width: '50px' }}>MAPS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Row 1 */}
                      <tr className="row-interactive" onClick={() => setActiveTab('details')}>
                        <td><input type="checkbox" readOnly /></td>
                        <td>
                          <div className="company-cell-flex">
                            <div className="avatar-chip avatar-vl">VG</div>
                            <div>
                              <div className="comp-name font-bold text-cyan">Vortex Global Software Pvt. Ltd.</div>
                              <div className="comp-address">100 Innovation Way</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="rating-cell">
                            <Star size={12} fill="#F59E0B" color="#F59E0B" />
                            <span><strong>4.9</strong> (0)</span>
                          </div>
                        </td>
                        <td>
                          <span className="ai-match-badge match-40">40%</span>
                        </td>
                        <td><span className="phone-text">(555) 234-5678</span></td>
                        <td>
                          <div className="email-cell">
                            <span className="email-addr">contact@vortexsoftware.io</span>
                            <span className="chip-verified"><Check size={10} /> Verified</span>
                          </div>
                        </td>
                        <td>
                          <button className="btn-convert-crm" onClick={(e) => { e.stopPropagation(); setActiveTab('crm'); }}>Convert</button>
                        </td>
                        <td>
                          <ExternalLink size={14} className="text-muted link-hover" />
                        </td>
                      </tr>

                      {/* Row 2 */}
                      <tr>
                        <td><input type="checkbox" readOnly /></td>
                        <td>
                          <div className="company-cell-flex">
                            <div className="avatar-chip avatar-al">AD</div>
                            <div>
                              <div className="comp-name font-bold">Apex Digital Technologies Pvt. Ltd.</div>
                              <div className="comp-address">25 Technology Blvd</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="rating-cell">
                            <Star size={12} fill="#F59E0B" color="#F59E0B" />
                            <span><strong>4.6</strong> (0)</span>
                          </div>
                        </td>
                        <td>
                          <span className="ai-match-badge match-55">55%</span>
                        </td>
                        <td><span className="phone-text">(555) 345-6789</span></td>
                        <td>
                          <div className="email-cell">
                            <span className="email-addr">hello@apexdigital.io</span>
                            <span className="chip-verified"><Check size={10} /> Verified</span>
                          </div>
                        </td>
                        <td>
                          <button className="btn-convert-crm" onClick={() => setActiveTab('crm')}>Convert</button>
                        </td>
                        <td>
                          <ExternalLink size={14} className="text-muted link-hover" />
                        </td>
                      </tr>

                      {/* Row 3 */}
                      <tr>
                        <td><input type="checkbox" readOnly /></td>
                        <td>
                          <div className="company-cell-flex">
                            <div className="avatar-chip avatar-sc">SW</div>
                            <div>
                              <div className="comp-name font-bold">Synergy Web Design Studio</div>
                              <div className="comp-address">42 Creative Park</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="rating-cell">
                            <Star size={12} fill="#F59E0B" color="#F59E0B" />
                            <span><strong>4.9</strong> (0)</span>
                          </div>
                        </td>
                        <td>
                          <span className="ai-match-badge match-55">55%</span>
                        </td>
                        <td><span className="phone-text">(555) 456-7890</span></td>
                        <td>
                          <div className="email-cell">
                            <span className="email-addr">info@synergyweb.io</span>
                            <span className="chip-verified"><Check size={10} /> Verified</span>
                          </div>
                        </td>
                        <td>
                          <button className="btn-convert-crm" onClick={() => setActiveTab('crm')}>Convert</button>
                        </td>
                        <td>
                          <ExternalLink size={14} className="text-muted link-hover" />
                        </td>
                      </tr>

                      {/* Row 4 */}
                      <tr>
                        <td><input type="checkbox" readOnly /></td>
                        <td>
                          <div className="company-cell-flex">
                            <div className="avatar-chip avatar-ft">FA</div>
                            <div>
                              <div className="comp-name font-bold">Frontier AI Systems</div>
                              <div className="comp-address">88 Tech Campus</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="rating-cell">
                            <Star size={12} fill="#F59E0B" color="#F59E0B" />
                            <span><strong>5.0</strong> (0)</span>
                          </div>
                        </td>
                        <td>
                          <span className="ai-match-badge match-55">55%</span>
                        </td>
                        <td><span className="phone-text">(555) 567-8901</span></td>
                        <td>
                          <div className="email-cell">
                            <span className="email-addr">info@frontierai.io</span>
                            <span className="chip-verified"><Check size={10} /> Verified</span>
                          </div>
                        </td>
                        <td>
                          <button className="btn-convert-crm" onClick={() => setActiveTab('crm')}>Convert</button>
                        </td>
                        <td>
                          <ExternalLink size={14} className="text-muted link-hover" />
                        </td>
                      </tr>

                      {/* Row 5 */}
                      <tr>
                        <td><input type="checkbox" readOnly /></td>
                        <td>
                          <div className="company-cell-flex">
                            <div className="avatar-chip avatar-mt">MC</div>
                            <div>
                              <div className="comp-name font-bold">Metro Cloud Solutions Pvt. Ltd.</div>
                              <div className="comp-address">50 Enterprise Hub</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="rating-cell">
                            <Star size={12} fill="#F59E0B" color="#F59E0B" />
                            <span><strong>4.8</strong> (0)</span>
                          </div>
                        </td>
                        <td>
                          <span className="ai-match-badge match-55">55%</span>
                        </td>
                        <td><span className="phone-text">(555) 678-9012</span></td>
                        <td>
                          <div className="email-cell">
                            <span className="email-addr">contact@metrocloud.io</span>
                            <span className="chip-verified"><Check size={10} /> Verified</span>
                          </div>
                        </td>
                        <td>
                          <button className="btn-convert-crm" onClick={() => setActiveTab('crm')}>Convert</button>
                        </td>
                        <td>
                          <ExternalLink size={14} className="text-muted link-hover" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 3: LEAD DETAILS & AI COPYWRITER */}
            {activeTab === 'details' && (
              <div className="tab-pane animate-fade-in lead-details-saas-pane">
                {/* Top Lead Navigation Header */}
                <div className="details-nav-header">
                  <button className="btn-back-square" onClick={() => setActiveTab('scans')} title="Back to Scans">
                    <ArrowLeft size={16} />
                  </button>

                  <div className="details-header-brand font-bold">
                    <div className="avatar-chip avatar-vl">VG</div>
                    <div className="details-title-wrap">
                      <div className="details-comp-title">
                        <h2>Vortex Global Software Pvt. Ltd.</h2>
                      </div>
                      <div className="details-platform-sub">
                        <span>Platform:</span> <span className="tag-geo"><MapPin size={10} /> Google Maps</span>
                      </div>
                    </div>
                  </div>

                  <div className="details-badges-row">
                    <span className="badge-stat">AI Score: <strong>40 /100</strong></span>
                    <span className="badge-stat">Rating: <Star size={11} fill="#F59E0B" color="#F59E0B" /> <strong>4.9★</strong></span>
                    <span className="badge-link-pill"><Globe size={11} /> Maps Listing</span>
                    <span className="badge-stage-pill">Stage: <strong>New</strong></span>
                  </div>
                </div>

                {/* Main Split Grid: Left Profile + Right AI Copywriter */}
                <div className="details-split-grid">
                  {/* Left Column: Lead Profile, Contact, Key Team, Replies */}
                  <div className="details-left-col">
                    {/* Card 1: Lead Profile */}
                    <div className="details-card-box">
                      <div className="card-box-head">
                        <User size={14} className="text-cyan" />
                        <h4>LEAD PROFILE</h4>
                      </div>

                      <div className="profile-fields-grid">
                        <div className="p-field">
                          <label>TARGET COMPANY NAME</label>
                          <div className="field-input-static">Vortex Global Software Pvt. Ltd.</div>
                        </div>

                        <div className="p-field">
                          <label>LEAD LOCATION</label>
                          <div className="field-input-static">100 Innovation Way</div>
                        </div>

                        <div className="p-field">
                          <label>CLASSIFIED INDUSTRY</label>
                          <div className="field-input-static">Software</div>
                        </div>

                        <div className="p-field">
                          <label>RATING &amp; REVIEWS</label>
                          <div className="field-input-static"><Star size={12} fill="#F59E0B" color="#F59E0B" /> 4.9 / 5 Rating</div>
                        </div>

                        <div className="p-field field-full">
                          <label>ABOUT COMPANY</label>
                          <div className="field-input-static textarea-style">Empowering digital innovation</div>
                        </div>
                      </div>
                    </div>

                    {/* Card 2: Contact & Links */}
                    <div className="details-card-box">
                      <div className="card-box-head">
                        <Mail size={14} className="text-cyan" />
                        <h4>CONTACT &amp; LINKS</h4>
                      </div>

                      <div className="contact-fields-row">
                        <div className="p-field field-flex">
                          <label>CONTACT EMAIL</label>
                          <div className="input-btn-combo">
                            <div className="field-input-static flex-1">contact@vortexsoftware.io</div>
                            <button className="btn-find-email"><Search size={12} /> Find Email</button>
                          </div>
                          <span className="source-tag">Source: Google_maps_crawl</span>
                        </div>
                      </div>
                    </div>

                    {/* Card 3: Key Team & Decision Makers */}
                    <div className="details-card-box">
                      <div className="card-box-head-flex">
                        <div className="flex-head-left">
                          <Users size={14} className="text-cyan" />
                          <h4>KEY TEAM &amp; DECISION MAKERS</h4>
                        </div>
                        <button className="btn-find-team"><Search size={12} /> Find Team</button>
                      </div>

                      <div className="team-source-tag">Source: Serper</div>

                      <div className="team-members-list">
                        <div className="team-item-row">
                          <div className="team-member-info">
                            <div className="team-avatar">AW</div>
                            <div>
                              <div className="member-name font-bold">
                                Alexander Wright <Linkedin size={11} className="text-blue" />
                              </div>
                              <div className="member-role">Chief Executive Officer</div>
                            </div>
                          </div>
                          <div className="team-actions">
                            <span className="no-email-tag">No Email Found</span>
                            <button className="btn-retry"><RotateCcw size={11} /> Retry</button>
                          </div>
                        </div>

                        <div className="team-item-row">
                          <div className="team-member-info">
                            <div className="team-avatar">DM</div>
                            <div>
                              <div className="member-name font-bold">
                                Daniel Miller <Linkedin size={11} className="text-blue" />
                              </div>
                              <div className="member-role">Web Developer (Wordpress &amp; Shopify)</div>
                            </div>
                          </div>
                          <div className="team-actions">
                            <span className="no-email-tag">No Email Found</span>
                            <button className="btn-retry"><RotateCcw size={11} /> Retry</button>
                          </div>
                        </div>

                        <div className="team-item-row">
                          <div className="team-member-info">
                            <div className="team-avatar">SJ</div>
                            <div>
                              <div className="member-name font-bold">
                                Sarah Jenkins <Linkedin size={11} className="text-blue" />
                              </div>
                              <div className="member-role">Recruiter</div>
                            </div>
                          </div>
                          <div className="team-actions">
                            <span className="no-email-tag">No Email Found</span>
                            <button className="btn-retry"><RotateCcw size={11} /> Retry</button>
                          </div>
                        </div>

                        <div className="team-item-row">
                          <div className="team-member-info">
                            <div className="team-avatar">MR</div>
                            <div>
                              <div className="member-name font-bold">
                                Michael Ross <Linkedin size={11} className="text-blue" />
                              </div>
                              <div className="member-role">Data Analyst</div>
                            </div>
                          </div>
                          <div className="team-actions">
                            <span className="no-email-tag">No Email Found</span>
                            <button className="btn-retry"><RotateCcw size={11} /> Retry</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 4: Inbox Replies Thread */}
                    <div className="details-card-box">
                      <div className="card-box-head-flex">
                        <div className="flex-head-left">
                          <MessageSquare size={14} className="text-cyan" />
                          <h4>INBOX REPLIES THREAD</h4>
                        </div>
                        <span className="no-reply-pill">NO REPLY DETECTED</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: AI Outreach Copywriter & Action Buttons */}
                  <div className="details-right-col">
                    <div className="details-card-box copywriter-box">
                      <div className="card-box-head-flex">
                        <div className="flex-head-left">
                          <Sparkles size={15} className="text-cyan" />
                          <div>
                            <h4>AI OUTREACH COPYWRITER</h4>
                          </div>
                        </div>
                        <button
                          className="btn-gen-pitch-solid"
                          onClick={() => setPitchGenerated(true)}
                        >
                          <Sparkles size={12} /> Generate Pitch
                        </button>
                      </div>

                      <div className="copywriter-editor-canvas">
                        {pitchGenerated ? (
                          <div className="pitch-draft-content animate-fade-in">
                            <div className="draft-meta-row">
                              <span><strong>To:</strong> contact@vortexsoftware.io</span>
                              <span><strong>Subject:</strong> Quick idea for Vortex Global's mobile load times</span>
                            </div>
                            <div className="draft-body-text">
                              <p>Hi Vortex Team,</p>
                              <p>
                                Noticed Vortex Global Software Pvt. Ltd. has a stellar <strong>4.9★ rating</strong> on Google Maps!
                              </p>
                              <p>
                                While analyzing your site <em>vortexsoftware.io</em>, I noticed mobile load speeds take over <strong>4 seconds</strong>, which might be leaking high-intent local clients to competitors.
                              </p>
                              <p>
                                We built an automated fix for this—would you be open to a 3-minute video breakdown?
                              </p>
                              <p>Best regards,<br />MapFlow Sales Engine</p>
                            </div>
                          </div>
                        ) : (
                          <div className="copywriter-placeholder">
                            <p>Click 'Generate Pitch' to automatically draft personalized email copy.</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Convert to CRM Lead Button */}
                    <button className="btn-convert-lg-solid" onClick={() => setActiveTab('crm')}>
                      <Sparkles size={15} /> Convert to CRM Lead
                    </button>

                    {/* Action Grid (4 Buttons) */}
                    <div className="details-actions-2x2">
                      <button className="btn-action-tile"><MapPin size={13} className="text-red" /> Maps Source</button>
                      <button className="btn-action-tile btn-action--green"><Send size={13} /> Send Pitch</button>
                      <button className="btn-action-tile"><Copy size={13} /> Copy Details</button>
                      <button className="btn-action-tile" onClick={handleCopyPitch}>
                        {copied ? <Check size={13} className="text-emerald" /> : <Mail size={13} />} Copy Pitch
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: OUTREACH CRM PIPELINE */}
            {activeTab === 'crm' && (
              <div className="tab-pane animate-fade-in crm-saas-pane">
                {/* Header Banner Box */}
                <div className="crm-banner-card">
                  <div className="banner-left flex-1">
                    <div className="banner-icon-box">
                      <Database size={18} className="text-cyan" />
                    </div>
                    <div>
                      <h3 className="crm-banner-title">Outreach CRM Pipeline</h3>
                      <p className="crm-banner-sub">
                        Drag and drop leads to track engagement across sales &amp; recruitment workflows
                      </p>
                    </div>
                  </div>
                  <button className="btn-crm-refresh">
                    <RotateCcw size={13} /> Refresh
                  </button>
                </div>

                {/* Filter Toolbar */}
                <div className="crm-filter-toolbar">
                  <div className="crm-search-box">
                    <Search size={14} className="text-muted" />
                    <input
                      type="text"
                      readOnly
                      placeholder="Filter by author or company name..."
                      className="crm-input"
                    />
                  </div>

                  <div className="crm-dropdowns-group">
                    <span className="dropdown-chip">All Platforms <ChevronDown size={12} /></span>
                    <span className="dropdown-chip">All Intent Scores <ChevronDown size={12} /></span>
                    <span className="dropdown-chip">Date Range</span>
                  </div>
                </div>

                {/* 5 Kanban Columns populated with sample lead cards */}
                <div className="crm-kanban-board-saas">
                  {/* Column 1: New Leads (2) */}
                  <div className="crm-col-box">
                    <div className="col-box-head">
                      <div className="head-title-flex">
                        <span className="dot-status dot--blue" />
                        <span className="col-title-text">New Leads</span>
                      </div>
                      <span className="col-count-pill">2</span>
                    </div>

                    <div className="col-card-stack">
                      <div className="crm-lead-card-saas" onClick={() => setActiveTab('details')}>
                        <div className="card-head-row">
                          <div className="avatar-chip avatar-vl">V</div>
                          <span className="card-comp-name font-bold">Vortex Global Software...</span>
                        </div>

                        <div className="card-platform-tag">
                          <span className="tag-geo-pill"><MapPin size={10} /> Google Maps</span>
                        </div>

                        <div className="card-contact-info">
                          <div className="c-row"><Mail size={11} className="text-muted" /> <span>contact@vortexsoftware.io</span></div>
                          <div className="c-row"><Phone size={11} className="text-muted" /> <span>(555) 234-5678</span></div>
                        </div>

                        <div className="card-footer-metrics">
                          <div className="rating-small">
                            <Star size={11} fill="#F59E0B" color="#F59E0B" />
                            <span><strong>4.9</strong> (0)</span>
                          </div>
                          <span className="match-pill-amber">Match: 40%</span>
                        </div>
                      </div>

                      <div className="crm-lead-card-saas">
                        <div className="card-head-row">
                          <div className="avatar-chip avatar-al">A</div>
                          <span className="card-comp-name font-bold">Apex Digital Technologies</span>
                        </div>

                        <div className="card-platform-tag">
                          <span className="tag-geo-pill"><MapPin size={10} /> Google Maps</span>
                        </div>

                        <div className="card-contact-info">
                          <div className="c-row"><Mail size={11} className="text-muted" /> <span>hello@apexdigital.io</span></div>
                          <div className="c-row"><Phone size={11} className="text-muted" /> <span>(555) 345-6789</span></div>
                        </div>

                        <div className="card-footer-metrics">
                          <div className="rating-small">
                            <Star size={11} fill="#F59E0B" color="#F59E0B" />
                            <span><strong>4.6</strong> (0)</span>
                          </div>
                          <span className="match-pill-amber">Match: 55%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Drafted Pitch (2) */}
                  <div className="crm-col-box">
                    <div className="col-box-head">
                      <div className="head-title-flex">
                        <span className="dot-status dot--purple" />
                        <span className="col-title-text">Drafted Pitch</span>
                      </div>
                      <span className="col-count-pill">2</span>
                    </div>

                    <div className="col-card-stack">
                      <div className="crm-lead-card-saas">
                        <div className="card-head-row">
                          <div className="avatar-chip avatar-sc">S</div>
                          <span className="card-comp-name font-bold">Synergy Web Design Studio</span>
                        </div>

                        <div className="card-platform-tag">
                          <span className="tag-geo-pill"><MapPin size={10} /> Google Maps</span>
                        </div>

                        <div className="card-contact-info">
                          <div className="c-row"><Mail size={11} className="text-muted" /> <span>info@synergyweb.io</span></div>
                          <div className="c-row"><Phone size={11} className="text-muted" /> <span>(555) 456-7890</span></div>
                        </div>

                        <div className="card-footer-metrics">
                          <div className="rating-small">
                            <Star size={11} fill="#F59E0B" color="#F59E0B" />
                            <span><strong>4.9</strong> (0)</span>
                          </div>
                          <span className="match-pill-amber">Match: 55%</span>
                        </div>
                      </div>

                      <div className="crm-lead-card-saas">
                        <div className="card-head-row">
                          <div className="avatar-chip avatar-al">Z</div>
                          <span className="card-comp-name font-bold">Zenith Cloud Innovations</span>
                        </div>

                        <div className="card-platform-tag">
                          <span className="tag-geo-pill"><MapPin size={10} /> Google Maps</span>
                        </div>

                        <div className="card-contact-info">
                          <div className="c-row"><Mail size={11} className="text-muted" /> <span>outreach@zenithcloud.io</span></div>
                          <div className="c-row"><Phone size={11} className="text-muted" /> <span>(555) 789-0123</span></div>
                        </div>

                        <div className="card-footer-metrics">
                          <div className="rating-small">
                            <Star size={11} fill="#F59E0B" color="#F59E0B" />
                            <span><strong>4.8</strong> (0)</span>
                          </div>
                          <span className="match-pill-amber">Match: 62%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 3: Emailed Out (2) */}
                  <div className="crm-col-box">
                    <div className="col-box-head">
                      <div className="head-title-flex">
                        <span className="dot-status dot--amber" />
                        <span className="col-title-text">Emailed Out</span>
                      </div>
                      <span className="col-count-pill">2</span>
                    </div>

                    <div className="col-card-stack">
                      <div className="crm-lead-card-saas">
                        <div className="card-head-row">
                          <div className="avatar-chip avatar-ft">F</div>
                          <span className="card-comp-name font-bold">Frontier AI Systems</span>
                        </div>

                        <div className="card-platform-tag">
                          <span className="tag-geo-pill"><MapPin size={10} /> Google Maps</span>
                        </div>

                        <div className="card-contact-info">
                          <div className="c-row"><Mail size={11} className="text-muted" /> <span>info@frontierai.io</span></div>
                          <div className="c-row"><Phone size={11} className="text-muted" /> <span>(555) 567-8901</span></div>
                        </div>

                        <div className="card-footer-metrics">
                          <div className="rating-small">
                            <Star size={11} fill="#F59E0B" color="#F59E0B" />
                            <span><strong>5.0</strong> (0)</span>
                          </div>
                          <span className="match-pill-amber">Match: 55%</span>
                        </div>
                      </div>

                      <div className="crm-lead-card-saas">
                        <div className="card-head-row">
                          <div className="avatar-chip avatar-vl">N</div>
                          <span className="card-comp-name font-bold">Nexus Tech Solutions</span>
                        </div>

                        <div className="card-platform-tag">
                          <span className="tag-geo-pill"><MapPin size={10} /> Google Maps</span>
                        </div>

                        <div className="card-contact-info">
                          <div className="c-row"><Mail size={11} className="text-muted" /> <span>sales@nexustech.io</span></div>
                          <div className="c-row"><Phone size={11} className="text-muted" /> <span>(555) 890-1234</span></div>
                        </div>

                        <div className="card-footer-metrics">
                          <div className="rating-small">
                            <Star size={11} fill="#F59E0B" color="#F59E0B" />
                            <span><strong>4.7</strong> (0)</span>
                          </div>
                          <span className="match-pill-amber">Match: 48%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 4: Replied (2) */}
                  <div className="crm-col-box">
                    <div className="col-box-head">
                      <div className="head-title-flex">
                        <span className="dot-status dot--green" />
                        <span className="col-title-text">Replied</span>
                      </div>
                      <span className="col-count-pill">2</span>
                    </div>

                    <div className="col-card-stack">
                      <div className="crm-lead-card-saas">
                        <div className="card-head-row">
                          <div className="avatar-chip avatar-mt">M</div>
                          <span className="card-comp-name font-bold">Metro Cloud Solutions</span>
                        </div>

                        <div className="card-platform-tag">
                          <span className="tag-geo-pill"><MapPin size={10} /> Google Maps</span>
                        </div>

                        <div className="card-contact-info">
                          <div className="c-row"><Mail size={11} className="text-muted" /> <span>contact@metrocloud.io</span></div>
                          <div className="c-row"><Phone size={11} className="text-muted" /> <span>(555) 678-9012</span></div>
                        </div>

                        <div className="card-footer-metrics">
                          <div className="rating-small">
                            <Star size={11} fill="#F59E0B" color="#F59E0B" />
                            <span><strong>4.8</strong> (0)</span>
                          </div>
                          <span className="match-pill-amber">Match: 75%</span>
                        </div>
                      </div>

                      <div className="crm-lead-card-saas">
                        <div className="card-head-row">
                          <div className="avatar-chip avatar-sc">Q</div>
                          <span className="card-comp-name font-bold">Quantum Code Labs</span>
                        </div>

                        <div className="card-platform-tag">
                          <span className="tag-geo-pill"><MapPin size={10} /> Google Maps</span>
                        </div>

                        <div className="card-contact-info">
                          <div className="c-row"><Mail size={11} className="text-muted" /> <span>team@quantumcode.io</span></div>
                          <div className="c-row"><Phone size={11} className="text-muted" /> <span>(555) 901-2345</span></div>
                        </div>

                        <div className="card-footer-metrics">
                          <div className="rating-small">
                            <Star size={11} fill="#F59E0B" color="#F59E0B" />
                            <span><strong>4.9</strong> (0)</span>
                          </div>
                          <span className="match-pill-amber">Match: 82%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 5: Disqualified (1) */}
                  <div className="crm-col-box">
                    <div className="col-box-head">
                      <div className="head-title-flex">
                        <span className="dot-status dot--red" />
                        <span className="col-title-text">Disqualified</span>
                      </div>
                      <span className="col-count-pill">1</span>
                    </div>

                    <div className="col-card-stack">
                      <div className="crm-lead-card-saas">
                        <div className="card-head-row">
                          <div className="avatar-chip avatar-al">S</div>
                          <span className="card-comp-name font-bold">Starlight Legacy Software</span>
                        </div>

                        <div className="card-platform-tag">
                          <span className="tag-geo-pill"><MapPin size={10} /> Google Maps</span>
                        </div>

                        <div className="card-contact-info">
                          <div className="c-row"><Mail size={11} className="text-muted" /> <span>info@starlightlegacy.com</span></div>
                          <div className="c-row"><Phone size={11} className="text-muted" /> <span>(555) 123-4567</span></div>
                        </div>

                        <div className="card-footer-metrics">
                          <div className="rating-small">
                            <Star size={11} fill="#F59E0B" color="#F59E0B" />
                            <span><strong>3.2</strong> (0)</span>
                          </div>
                          <span className="match-pill-amber">Match: 20%</span>
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

