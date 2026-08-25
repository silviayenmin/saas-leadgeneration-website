import React, { useState } from 'react';
import {
  Search,
  MapPin,
  Star,
  Sparkles,
  Rocket,
  Filter,
  Activity,
  Gauge,
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
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  Globe,
  Users,
  Linkedin,
  Send,
  MessageSquare
} from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import './sections.css';

type ShowcaseTab = 'discovery' | 'scans' | 'details' | 'crm';

export const ProductShowcaseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>('discovery');
  const [activeBoxStep, setActiveBoxStep] = useState<number>(1);
  const [copied, setCopied] = useState(false);
  const [pitchGenerated, setPitchGenerated] = useState(true);

  // Circular Box Carousel Scroll Handlers
  const handleNextBox = () => {
    setActiveBoxStep((prev) => (prev % 4) + 1);
  };

  const handlePrevBox = () => {
    setActiveBoxStep((prev) => ((prev - 2 + 4) % 4) + 1);
  };

  const handleCopyPitch = () => {
    const pitchText = `Hi Vortex Team,\n\nNoticed Vortex Global Software has a stellar 4.9★ rating on Google Maps! While analyzing your site vortexsoftware.io, I noticed mobile load speeds take over 4 seconds, which might be leaking high-intent local clients to competitors.\n\nWe built an automated fix for this—would you be open to a 3-minute video breakdown?`;
    navigator.clipboard.writeText(pitchText).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Dynamic AI Guide Content for Active Step Box
  const getBoxGuideInfo = (step: number) => {
    switch (step) {
      case 1:
        return {
          badge: 'Box 1/4 • Find Customers',
          speechTop: 'Input target location & keywords to search real-time business leads!',
          speechSide: '👉 Box 1/4: Set target industry & city location to find verified leads.',
          accentColor: '#0EA5E9',
          themeClass: 'guide-theme-discovery',
          stepIndex: 1
        };
      case 2:
        return {
          badge: 'Box 2/4 • Preferences',
          speechTop: 'Adjust strictness filters, time range dials & maximum result limits!',
          speechSide: '👉 Box 2/4: Fine-tune search dials, strictness slider & lead counter.',
          accentColor: '#10B981',
          themeClass: 'guide-theme-scans',
          stepIndex: 2
        };
      case 3:
        return {
          badge: 'Box 3/4 • Review Summary',
          speechTop: 'Review estimated customer yield & click Start Search to launch!',
          speechSide: '👉 Box 3/4: View target summary (17–37 potential leads) & start scan.',
          accentColor: '#8B5CF6',
          themeClass: 'guide-theme-details',
          stepIndex: 3
        };
      case 4:
        return {
          badge: 'Box 4/4 • Search & Results',
          speechTop: 'Monitor live extraction progress & inspect real-time customer profiles!',
          speechSide: '👉 Box 4/4: Watch live search progress & extracted email/phone leads.',
          accentColor: '#F59E0B',
          themeClass: 'guide-theme-crm',
          stepIndex: 4
        };
      default:
        return {
          badge: 'Box 1/4 • Find Customers',
          speechTop: 'Input target location & keywords to search real-time business leads!',
          speechSide: '👉 Box 1/4: Set target industry & city location to find verified leads.',
          accentColor: '#0EA5E9',
          themeClass: 'guide-theme-discovery',
          stepIndex: 1
        };
    }
  };

  const guideInfo = getBoxGuideInfo(activeBoxStep);

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

          {/* Window Body Display based on Active Tab */}
          <div className="showcase-window-body">
            {/* TAB 1: LEAD DISCOVERY SCENARIO SHOWCASE (MATCHING USER SCREENSHOT 2) */}
            {activeTab === 'discovery' && (
              <div className="tab-pane animate-fade-in discovery-scenario-pane">
                {/* 1. TOP CONNECTOR FLOW HEADER WITH CIRCULAR STEP FOCUS TRIGGERS */}
                <div className="scenario-flow-header">
                  <div
                    className={`flow-step-node ${activeBoxStep === 1 ? 'active' : ''}`}
                    onClick={() => setActiveBoxStep(1)}
                    title="Click to Focus Box 1: Find Customers"
                  >
                    <div className="flow-step-icon"><Users size={15} /></div>
                    <span className="flow-step-title">1. Find Customers</span>
                  </div>
                  <div className="flow-connector-pulse"><div className="pulse-line" /></div>

                  <div
                    className={`flow-step-node ${activeBoxStep === 2 ? 'active' : ''}`}
                    onClick={() => setActiveBoxStep(2)}
                    title="Click to Focus Box 2: Select Preferences"
                  >
                    <div className="flow-step-icon"><Filter size={15} /></div>
                    <span className="flow-step-title">2. Select Preferences</span>
                  </div>
                  <div className="flow-connector-pulse"><div className="pulse-line" /></div>

                  <div
                    className={`flow-step-node ${activeBoxStep === 3 ? 'active' : ''}`}
                    onClick={() => setActiveBoxStep(3)}
                    title="Click to Focus Box 3: Review Summary"
                  >
                    <div className="flow-step-icon"><Rocket size={15} /></div>
                    <span className="flow-step-title">3. Review Summary</span>
                  </div>
                  <div className="flow-connector-pulse"><div className="pulse-line" /></div>

                  <div
                    className={`flow-step-node ${activeBoxStep === 4 ? 'active' : ''}`}
                    onClick={() => setActiveBoxStep(4)}
                    title="Click to Focus Box 4: Active Search & Results"
                  >
                    <div className="flow-step-icon"><Activity size={15} /></div>
                    <span className="flow-step-title">4. Active Search &amp; Results</span>
                  </div>
                </div>

                {/* 2. CIRCULAR BOXES CAROUSEL CONTAINER WITH LEFT & RIGHT ARROWS */}
                <div className="boxes-circular-scroll-wrapper">
                  {/* Left Circular Scroll Arrow */}
                  <button
                    className="box-scroll-nav-btn btn-prev"
                    onClick={handlePrevBox}
                    title="Scroll Boxes Left (Circular Loop)"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  {/* SCENARIO PANELS GRID */}
                  <div className="scenario-grid-body">
                    {/* COLUMN 1 (LEFT): DYNAMIC AI WORKFLOW PRESENTER WITH CIRCULAR SCROLL ORBIT */}
                    <div className={`scenario-presenter-col ${guideInfo.themeClass}`}>
                      <div className="presenter-character-card">
                        {/* Guidance speech bubble pointing to tabs above */}
                        <div className="guide-floating-speech top-pointer">
                          <Sparkles size={12} className="text-cyan animate-pulse" />
                          <span><strong>AI Guide:</strong> {guideInfo.speechTop}</span>
                        </div>

                        {/* CIRCULAR SCROLL ORBIT CONTAINER FOR PRESENTER IMAGE */}
                        <div className="presenter-avatar-container">
                          <div className="spinning-conic-ring" />

                          {/* 4 Orbit Node Pills flanking the image in a circle */}
                          <button
                            className={`orbit-node node-1 ${guideInfo.stepIndex === 1 ? 'active' : ''}`}
                            onClick={() => setActiveBoxStep(1)}
                            title="1. Find Customers"
                          >1</button>
                          <button
                            className={`orbit-node node-2 ${guideInfo.stepIndex === 2 ? 'active' : ''}`}
                            onClick={() => setActiveBoxStep(2)}
                            title="2. Select Preferences"
                          >2</button>
                          <button
                            className={`orbit-node node-3 ${guideInfo.stepIndex === 3 ? 'active' : ''}`}
                            onClick={() => setActiveBoxStep(3)}
                            title="3. Review Summary"
                          >3</button>
                          <button
                            className={`orbit-node node-4 ${guideInfo.stepIndex === 4 ? 'active' : ''}`}
                            onClick={() => setActiveBoxStep(4)}
                            title="4. Active Search & Results"
                          >4</button>

                          <div className={`presenter-avatar-box circular-avatar-step-${guideInfo.stepIndex}`}>
                            <div className="presenter-suit-graphic">
                              <svg viewBox="0 0 180 260" className="presenter-svg" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                  <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#1E293B" />
                                    <stop offset="50%" stopColor="#0F172A" />
                                    <stop offset="100%" stopColor="#020617" />
                                  </linearGradient>
                                  <linearGradient id="dynamicGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor={guideInfo.accentColor} stopOpacity="0.9" />
                                    <stop offset="100%" stopColor={guideInfo.accentColor} stopOpacity="0.2" />
                                  </linearGradient>
                                  <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feGaussianBlur stdDeviation="6" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                  </filter>
                                </defs>

                                {/* Halo / Backdrop Radial Tech Ring with dynamic accent color */}
                                <circle cx="90" cy="90" r="75" fill="none" stroke="url(#dynamicGlowGrad)" strokeWidth="2.5" strokeDasharray="6 4" className="radar-circle-pulse" />
                                <circle cx="90" cy="90" r="62" fill={`${guideInfo.accentColor}0D`} stroke={`${guideInfo.accentColor}33`} strokeWidth="1" />

                                {/* Modern Male Hair & Head */}
                                <ellipse cx="90" cy="52" rx="30" ry="34" fill="#1E100A" />
                                <circle cx="90" cy="58" r="25" fill="#F5C4A1" />
                                
                                {/* Stylish Modern Quiff Hair */}
                                <path d="M 60 52 C 60 28, 120 28, 120 52 C 108 34, 72 34, 60 52 Z" fill="#2E1A10" />
                                <path d="M 64 42 C 75 22, 115 26, 118 45 C 100 32, 76 34, 64 42 Z" fill="#3D2416" />

                                {/* Tech Glass Headset / Earbud */}
                                <rect x="112" y="52" width="6" height="12" rx="3" fill={guideInfo.accentColor} filter="url(#neonGlow)" />
                                <path d="M 112 58 Q 100 68, 92 68" fill="none" stroke={guideInfo.accentColor} strokeWidth="2" strokeLinecap="round" />

                                {/* Face Expression: Eyes & Warm Smile */}
                                <circle cx="80" cy="56" r="3" fill="#0F172A" />
                                <circle cx="100" cy="56" r="3" fill="#0F172A" />
                                <circle cx="81" cy="55" r="1" fill="#FFFFFF" />
                                <circle cx="101" cy="55" r="1" fill="#FFFFFF" />
                                <path d="M 80 68 Q 90 77, 100 68" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />

                                {/* Neck & Shirt Collar */}
                                <rect x="83" y="80" width="14" height="16" fill="#E2A682" />
                                <path d="M 72 94 L 90 114 L 108 94 L 98 94 L 90 104 L 82 94 Z" fill="#FFFFFF" />
                                <path d="M 88 102 L 92 102 L 91 145 L 89 145 Z" fill={guideInfo.accentColor} />

                                {/* Tailored Modern Suit Body with Dynamic Neon Lapel Trim */}
                                <path d="M 45 98 C 45 92, 135 92, 135 98 L 155 250 L 25 250 Z" fill="url(#suitGrad)" stroke="#334155" strokeWidth="2" />
                                {/* Glowing Neon Lapel Trim Lines */}
                                <path d="M 70 94 L 86 165 L 45 250" fill="none" stroke={guideInfo.accentColor} strokeWidth="2.5" />
                                <path d="M 110 94 L 94 165 L 135 250" fill="none" stroke={guideInfo.accentColor} strokeWidth="2.5" />

                                {/* Arms Gesturing towards the Right (Guiding Workflow) */}
                                <path d="M 32 135 Q 15 165, 10 185 Q 25 190, 40 170 Z" fill="#E2A682" />
                                <path d="M 142 135 Q 165 145, 175 130 Q 170 120, 148 125 Z" fill="#E2A682" />
                                <circle cx="174" cy="128" r="5" fill="#E2A682" />
                                <path d="M 174 128 L 180 125" stroke="#E2A682" strokeWidth="3" strokeLinecap="round" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="presenter-badge-label">
                          <span className="live-dot" />
                          <span>{guideInfo.badge}</span>
                        </div>

                        {/* Dynamic Speech Callout for active tab */}
                        <div className="guide-floating-speech side-pointer">
                          <span>{guideInfo.speechSide}</span>
                        </div>
                      </div>
                    </div>

                    {/* COLUMN 2: 1. FIND CUSTOMERS */}
                    <div
                      className={`scenario-panel panel-find ${activeBoxStep === 1 ? 'active-box-focus' : ''}`}
                      onClick={() => setActiveBoxStep(1)}
                    >
                      <div className="field-group">
                        <label className="field-label">WHAT TO FIND</label>
                        <div className="field-input-chip">
                          <Search size={13} className="text-cyan" />
                          <span>e.g., small businesses</span>
                        </div>
                      </div>

                      <div className="field-group">
                        <label className="field-label">WHERE TO LOOK</label>
                        <div className="field-input-chip">
                          <MapPin size={13} className="text-cyan" />
                          <span>e.g., Chennai</span>
                        </div>
                      </div>

                      {/* Speech Bubble Callout */}
                      <div className="speech-callout-bubble bubble-left">
                        <span>Focus on small business data.</span>
                      </div>

                      {/* Location Map Vector Preview */}
                      <div className="scenario-map-card">
                        <div className="map-tag-label">Location Map</div>
                        <div className="map-mesh-visual">
                          <svg viewBox="0 0 200 100" className="map-mesh-svg">
                            <path d="M 0 50 Q 50 20, 100 50 T 200 50" fill="none" stroke="rgba(14, 165, 164, 0.4)" strokeWidth="1" />
                            <path d="M 50 0 Q 100 80, 150 0" fill="none" stroke="rgba(14, 165, 164, 0.25)" strokeWidth="1" />
                            <circle cx="100" cy="50" r="16" fill="rgba(14, 165, 164, 0.2)" stroke="#0EA5A4" strokeWidth="1.5" className="radar-circle-pulse" />
                            <circle cx="100" cy="50" r="3" fill="#0EA5A4" />
                          </svg>
                          <span className="map-pin-pill">Chennai</span>
                          <span className="map-sub-pill">SHUBB</span>
                        </div>
                      </div>
                    </div>

                    {/* COLUMN 3: 2. SELECT PREFERENCES */}
                    <div
                      className={`scenario-panel panel-preferences ${activeBoxStep === 2 ? 'active-box-focus' : ''}`}
                      onClick={() => setActiveBoxStep(2)}
                    >
                      <div className="field-group">
                        <label className="field-label">TIME RANGE</label>
                        <div className="dials-row">
                          <div className="gauge-dial-box">
                            <Gauge size={20} className="text-cyan" />
                          </div>
                          <div className="gauge-dial-box">
                            <Gauge size={20} className="text-cyan" />
                          </div>
                        </div>
                      </div>

                      <div className="field-group">
                        <label className="field-label">STRICTNESS</label>
                        <div className="slider-control-box">
                          <div className="slider-track">
                            <div className="slider-fill" style={{ width: '65%' }} />
                            <div className="slider-handle" style={{ left: '65%' }} />
                          </div>
                        </div>
                      </div>

                      <div className="field-group">
                        <label className="field-label">MAX RESULTS</label>
                        <div className="field-input-chip">
                          <span className="text-muted">Value</span>
                        </div>
                      </div>

                      <div className="field-group">
                        <label className="field-label">COUNTER</label>
                        <div className="field-input-chip select-chip">
                          <span>CURRENT COUNT</span>
                          <ChevronDown size={12} className="text-muted" />
                        </div>
                      </div>

                      {/* Speech Bubble Callout */}
                      <div className="speech-callout-bubble bubble-middle">
                        <span>Focus on current result pool.</span>
                      </div>
                    </div>

                    {/* COLUMN 4: 3. REVIEW SUMMARY */}
                    <div
                      className={`scenario-panel panel-summary ${activeBoxStep === 3 ? 'active-box-focus' : ''}`}
                      onClick={() => setActiveBoxStep(3)}
                    >
                      <div className="summary-info-card">
                        <div className="info-detail-row">
                          <User size={13} className="text-muted" />
                          <span>Customer Type: <strong>Small Business, Chennai</strong></span>
                        </div>
                        <div className="info-detail-row">
                          <Globe size={13} className="text-muted" />
                          <span>Platforms: <strong>Local Business Sites</strong></span>
                        </div>
                        <div className="info-detail-row">
                          <Sliders size={13} className="text-muted" />
                          <span>Result Limit: <strong>10 leads max</strong></span>
                        </div>

                        {/* Potential Customers Count */}
                        <div className="estimate-customers-box">
                          <div className="est-big-count text-gradient">17-37</div>
                          <div className="est-count-label">Potential customers found.</div>
                        </div>

                        {/* Start Search CTA Button */}
                        <button className="scenario-btn-start">
                          <Rocket size={15} /> Start Search
                        </button>
                      </div>
                    </div>

                    {/* COLUMN 5: 4. ACTIVE SEARCH & RESULTS */}
                    <div
                      className={`scenario-panel panel-results ${activeBoxStep === 4 ? 'active-box-focus' : ''}`}
                      onClick={() => setActiveBoxStep(4)}
                    >
                      {/* Search Progress */}
                      <div className="progress-section">
                        <div className="progress-bar-container">
                          <div className="progress-bar-fill animate-progress" style={{ width: '75%' }} />
                        </div>
                        <span className="progress-status-label">Search in progress...</span>
                      </div>

                      {/* Customer Profiles List */}
                      <div className="customer-profiles-card">
                        <div className="card-head-title">Customer Profiles</div>
                        <div className="profile-mini-item">
                          <div className="profile-avatar-circle">M</div>
                          <div className="profile-mini-details">
                            <span className="p-name">Apex Digital</span>
                            <span className="p-stage text-cyan">Verified Email</span>
                          </div>
                        </div>
                        <div className="profile-mini-item">
                          <div className="profile-avatar-circle">V</div>
                          <div className="profile-mini-details">
                            <span className="p-name">Vortex Global</span>
                            <span className="p-stage text-emerald">Phone Found</span>
                          </div>
                        </div>
                      </div>

                      {/* Speech Bubble Callout */}
                      <div className="speech-callout-bubble bubble-right">
                        <span>New customers will appear here.</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Circular Scroll Arrow */}
                  <button
                    className="box-scroll-nav-btn btn-next"
                    onClick={handleNextBox}
                    title="Scroll Boxes Right (Circular Loop)"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* BOTTOM RIGHT BRAND TAG */}
                <div className="scenario-brand-footer">
                  <div className="brand-pill-tag">
                    <MapPin size={12} color="#0EA5A4" fill="#0EA5A4" />
                    <span>MapFlow AI</span>
                  </div>
                </div>
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

