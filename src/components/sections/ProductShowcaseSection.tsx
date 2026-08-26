import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  MapPin,
  Star,
  Sparkles,
  Rocket,
  Filter,
  Activity,
    CheckCircle2,
  Copy,
  Check,
  Zap,
  Sliders,
  Database,
    Sun,
  Bell,
                ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
    Users,
      } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import './sections.css';
import robotImg from '../../../assets/Robot.png';



export const ProductShowcaseSection: React.FC = () => {
  
  const [activeBoxStep, setActiveBoxStep] = useState<number>(1);
  const [copied, setCopied] = useState(false);


  // Scroll tracking state & refs
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isScrollingOverridden, setIsScrollingOverridden] = useState<boolean>(false);

  useEffect(() => {
    // Only track scroll if activeTab is 'discovery' and not overridden
    if (isScrollingOverridden) return;

    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const trackHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      const totalScrollableDist = trackHeight - viewportHeight;
      if (totalScrollableDist <= 0) return;
      
      const currentScrollY = -rect.top;
      let progress = currentScrollY / totalScrollableDist;
      progress = Math.max(0, Math.min(1, progress));
      
      setScrollProgress(progress);

      // Map progress to steps:
      // 0.00 to 0.08: Welcome / Center state
      // 0.08 to 0.38: Step 1 (Find Customers)
      // 0.38 to 0.62: Step 2 (Select Preferences)
      // 0.62 to 0.82: Step 3 (Review Summary)
      // 0.82 to 1.00: Step 4 (Active Search & Results)
      if (progress < 0.08) {
        setActiveBoxStep(1);
      } else if (progress >= 0.08 && progress < 0.38) {
        setActiveBoxStep(1);
      } else if (progress >= 0.38 && progress < 0.62) {
        setActiveBoxStep(2);
      } else if (progress >= 0.62 && progress < 0.82) {
        setActiveBoxStep(3);
      } else {
        setActiveBoxStep(4);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isScrollingOverridden]);

  // Click-to-scroll navigation handler for tabs & arrows
  const scrollToStepProgress = (step: number) => {
    if (!trackRef.current) return;
    
    setIsScrollingOverridden(true);
    setActiveBoxStep(step);
    
    const rect = trackRef.current.getBoundingClientRect();
    const trackTop = window.scrollY + rect.top;
    const trackHeight = rect.height;
    const viewportHeight = window.innerHeight;
    const totalScrollableDist = trackHeight - viewportHeight;

    let targetProgress = 0;
    switch (step) {
      case 1:
        targetProgress = 0.25;
        break;
      case 2:
        targetProgress = 0.51;
        break;
      case 3:
        targetProgress = 0.72;
        break;
      case 4:
        targetProgress = 0.91;
        break;
    }

    const targetScrollY = trackTop + targetProgress * totalScrollableDist;

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });

    setTimeout(() => {
      setScrollProgress(targetProgress);
      setIsScrollingOverridden(false);
    }, 850);
  };

  const handleNextBox = () => {
    const nextStep = (activeBoxStep % 4) + 1;
    scrollToStepProgress(nextStep);
  };

  const handlePrevBox = () => {
    const prevStep = ((activeBoxStep - 2 + 4) % 4) + 1;
    scrollToStepProgress(prevStep);
  };

  const handleCopyPitch = () => {
    const pitchText = `Hi Vortex Team,\n\nNoticed Vortex Global Software has a stellar 4.9★ rating on Google Maps! While analyzing your site vortexsoftware.io, I noticed mobile load speeds take over 4 seconds, which might be leaking high-intent local clients to competitors.\n\nWe built an automated fix for this—would you be open to a 3-minute video breakdown?`;
    navigator.clipboard.writeText(pitchText).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };




  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const robotTranslateY = windowWidth < 820 ? (scrollProgress < 0.08 ? 30 : 0) : 0;
  const revealProgress = scrollProgress < 0.08 ? 0 : scrollProgress >= 0.25 ? 1 : (scrollProgress - 0.08) / 0.17;

  // Scroll-Based Storytelling Layout
  return (
    <section id="product" className="section-wrapper product-showcase-wrapper" style={{ overflow: 'visible' }}>
      {/* Background Glow */}
      <div className="showcase-bg-glow" />

      <Container size="lg">
        {/* Section Heading — Outside the scroll track so it scrolls naturally */}
        <SectionHeading
          badge="AUTHENTIC PRODUCT INTERFACE"
          title="Experience LeadGen AI in Action"
          subtitle="Explore our live SaaS tool—from 3-step lead discovery to maps scan history, lead profile details, and CRM pipeline."
          align="center"
        />
      </Container>

      {/* Scroll track contains only the sticky window shell */}
      <div className="showcase-scroll-track" ref={trackRef}>
        <div className="showcase-sticky-viewport">
          <Container size="lg">
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
                    <div className="saas-logo-brand">
                      <Sparkles size={14} className="text-cyan" />
                      <span className="saas-logo-text">LEADGEN AI</span>
                    </div>
                    <span className="window-divider">|</span>
                    <span className="saas-page-title">
                  Google Maps Lead Discovery
                </span>
                  </div>

                  <div className="window-status-widgets">
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

                {/* Window Body */}
                <div className="showcase-window-body">
                  <div className="tab-pane animate-fade-in discovery-scenario-pane">
                    {/* 1. TOP CONNECTOR FLOW HEADER */}
                    <div className="scenario-flow-header">
                      <div
                        className={`flow-step-node ${activeBoxStep === 1 ? 'active' : ''}`}
                        onClick={() => scrollToStepProgress(1)}
                        title="Click to Focus Step 1: Find Customers"
                      >
                        <div className="flow-step-icon"><Users size={15} /></div>
                        <span className="flow-step-title">1. Find Customers</span>
                      </div>
                      <div className={`flow-connector-pulse ${activeBoxStep >= 2 ? 'active' : ''}`}><div className="pulse-line" /></div>

                      <div
                        className={`flow-step-node ${activeBoxStep === 2 ? 'active' : ''}`}
                        onClick={() => scrollToStepProgress(2)}
                        title="Click to Focus Step 2: Select Preferences"
                      >
                        <div className="flow-step-icon"><Filter size={15} /></div>
                        <span className="flow-step-title">2. Select Preferences</span>
                      </div>
                      <div className={`flow-connector-pulse ${activeBoxStep >= 3 ? 'active' : ''}`}><div className="pulse-line" /></div>

                      <div
                        className={`flow-step-node ${activeBoxStep === 3 ? 'active' : ''}`}
                        onClick={() => scrollToStepProgress(3)}
                        title="Click to Focus Step 3: Review Summary"
                      >
                        <div className="flow-step-icon"><Rocket size={15} /></div>
                        <span className="flow-step-title">3. Review Summary</span>
                      </div>
                      <div className={`flow-connector-pulse ${activeBoxStep >= 4 ? 'active' : ''}`}><div className="pulse-line" /></div>

                      <div
                        className={`flow-step-node ${activeBoxStep === 4 ? 'active' : ''}`}
                        onClick={() => scrollToStepProgress(4)}
                        title="Click to Focus Step 4: Active Search & Results"
                      >
                        <div className="flow-step-icon"><Activity size={15} /></div>
                        <span className="flow-step-title">4. Active Search &amp; Results</span>
                      </div>
                    </div>

                    {/* Split Storytelling Layout (Left: Narrator/Robot, Right: Step Visuals) */}
                    <div className="showcase-split-container">
                      {/* Left Column: Narrator Column */}
                      <div className={`showcase-narrator-column theme-${activeBoxStep} ${scrollProgress < 0.08 ? 'centered-state' : ''}`}>
                        <div className="narrator-bubble-container bubble-visible">
                          <div className="narrator-speech-bubble">
                            <Sparkles size={14} className="text-cyan animate-pulse bubble-sparkle" />
                            <div className="bubble-text-wrapper">
                              <div className={`bubble-text-slide ${scrollProgress < 0.08 ? 'active' : ''}`}>
                                <strong>AI Guide:</strong> Hi! I'm your LeadGen AI guide. Let's explore how it works! Scroll down to start! 🚀
                              </div>
                              <div className={`bubble-text-slide ${(scrollProgress >= 0.08 && activeBoxStep === 1) ? 'active' : ''}`}>
                                <strong>AI Guide:</strong> Describe who you want to find and where in plain English—no complex setups required!
                              </div>
                              <div className={`bubble-text-slide ${(scrollProgress >= 0.08 && activeBoxStep === 2) ? 'active' : ''}`}>
                                <strong>AI Guide:</strong> Customize search thresholds to target specific business ratings and slow loading speeds.
                              </div>
                              <div className={`bubble-text-slide ${(scrollProgress >= 0.08 && activeBoxStep === 3) ? 'active' : ''}`}>
                                <strong>AI Guide:</strong> Review search filters and estimated lead count, then launch the automated scraper!
                              </div>
                              <div className={`bubble-text-slide ${(scrollProgress >= 0.08 && activeBoxStep === 4) ? 'active' : ''}`}>
                                <strong>AI Guide:</strong> Success! Get verified emails, phone numbers, and personalized pitches instantly.
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="narrator-avatar-wrapper" style={{
                          transform: `translate3d(0, ${robotTranslateY}px, 0) scale(1.12)`,
                          transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}>
                          <div className="avatar-pulse-ring" />
                          <div className="avatar-svg-container">
                            <img 
                              src={robotImg} 
                              alt="LeadGen AI Guide Robot" 
                              className="presenter-svg presenter-png"
                              style={{
                                width: '230px',
                                height: 'auto',
                                objectFit: 'contain'
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Visual Column */}
                      <div className={`showcase-visual-column ${scrollProgress < 0.08 ? 'column-hidden' : ''}`}>
                        <div 
                          className="visual-card-wrapper"
                          style={{
                            clipPath: `ellipse(calc(${revealProgress * 125}% + 10%) calc(${revealProgress * 135}% + 10%) at 25% 15%)`,
                            opacity: revealProgress,
                            visibility: scrollProgress < 0.08 ? 'hidden' : 'visible',
                            transform: `scale(${0.96 + revealProgress * 0.04}) translate3d(0, ${(1 - revealProgress) * 20}px, 0)`,
                            transition: 'clip-path 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.45s'
                          }}
                        >
                          <div className="visual-cards-stack" style={{ position: 'relative', width: '100%', height: '100%', minHeight: '300px' }}>
                            {/* Step 1 Visual: Define Target */}
                            <div className={`visual-step-card card-step-1 ${
                              activeBoxStep === 1 ? 'showcase-step-card-active' :
                              activeBoxStep > 1 ? 'showcase-step-card-inactive-prev' : 'showcase-step-card-inactive-next'
                            }`}>
                              <div className="mock-search-header">
                                <span className="window-indicator">Search Query Setup</span>
                              </div>
                              
                              <div className="mock-search-box-row">
                                <div className="mock-search-box mock-search-box--keyword">
                                  <Search size={16} className="text-cyan search-pulse-icon" />
                                  <div className="typing-container">
                                    <span className="typing-text">Digital Agencies</span>
                                    <span className="cursor-blink">|</span>
                                  </div>
                                </div>
                                
                                <div className="mock-search-box mock-search-box--location">
                                  <MapPin size={16} className="text-cyan" />
                                  <div className="typing-container">
                                    <span className="typing-text">Chennai</span>
                                  </div>
                                </div>
                              </div>

                              <div className="search-tags-row">
                                <span className="search-tag shadow-tag"><Users size={12} /> Target: Agency</span>
                                <span className="search-tag shadow-tag"><MapPin size={12} /> City: Chennai</span>
                                <span className="search-tag shadow-tag"><Sparkles size={12} /> Intent Expanded</span>
                              </div>

                              <div className="visual-minimal-map">
                                <div className="map-grid-mesh" />
                                <div className="glowing-target-circle">
                                  <div className="target-radar-ring" />
                                  <div className="target-center-pin"><MapPin size={16} className="pin-main-icon" /></div>
                                  <span className="map-tooltip-city">Chennai Lead Zone</span>
                                </div>
                              </div>
                            </div>

                            {/* Step 2 Visual: Select Preferences */}
                            <div className={`visual-step-card card-step-2 ${
                              activeBoxStep === 2 ? 'showcase-step-card-active' :
                              activeBoxStep > 2 ? 'showcase-step-card-inactive-prev' : 'showcase-step-card-inactive-next'
                            }`}>
                              <div className="preference-header">
                                <Sliders size={16} className="text-emerald" />
                                <span>Qualifying Preferences</span>
                              </div>

                              <div className="preference-item-group">
                                <div className="preference-meta">
                                  <span className="pref-title">Buying Intent Threshold</span>
                                  <span className="pref-value text-emerald">80% (Strict Filter)</span>
                                </div>
                                <div className="visual-slider-bar">
                                  <div className="visual-slider-track">
                                    <div className="visual-slider-fill" style={{ width: '80%' }} />
                                    <div className="visual-slider-thumb" style={{ left: '80%' }} />
                                  </div>
                                </div>
                              </div>

                              <div className="preference-checkboxes">
                                <div className="pref-check-row checked">
                                  <CheckCircle2 size={15} className="text-emerald" />
                                  <span>Verify Google Maps Rating &gt; 4.0★</span>
                                </div>
                                <div className="pref-check-row checked">
                                  <CheckCircle2 size={15} className="text-emerald" />
                                  <span>Check mobile loading speed (extract slow sites)</span>
                                </div>
                                <div className="pref-check-row checked">
                                  <CheckCircle2 size={15} className="text-emerald" />
                                  <span>Scrape verified business emails &amp; phone contacts</span>
                                </div>
                              </div>

                              <div className="preference-details-pill">
                                <Database size={13} />
                                <span>Targeting: Local service directory listings</span>
                              </div>
                            </div>

                            {/* Step 3 Visual: Review Summary */}
                            <div className={`visual-step-card card-step-3 ${
                              activeBoxStep === 3 ? 'showcase-step-card-active' :
                              activeBoxStep > 3 ? 'showcase-step-card-inactive-prev' : 'showcase-step-card-inactive-next'
                            }`}>
                              <div className="summary-card-header">
                                <Rocket size={16} className="text-purple" />
                                <span>Discovery Summary</span>
                              </div>

                              <div className="summary-specs-list">
                                <div className="spec-row">
                                  <span className="spec-label">Keyword:</span>
                                  <span className="spec-val">Digital Agencies</span>
                                </div>
                                <div className="spec-row">
                                  <span className="spec-label">Target Zone:</span>
                                  <span className="spec-val">Chennai (50km radius)</span>
                                </div>
                                <div className="spec-row">
                                  <span className="spec-label">Filters Applied:</span>
                                  <span className="spec-val">Intent score &gt; 80, Slow Mobile Sites</span>
                                </div>
                              </div>

                              <div className="radar-scanner-wrapper">
                                <div className="radar-glow-background" />
                                <div className="radar-sweep-arm" />
                                <div className="radar-center-dot">
                                  <div className="est-big-count text-gradient">17-37</div>
                                  <span className="est-sub-label">Estimated Leads</span>
                                </div>
                              </div>

                              <div className="start-scan-mock-btn">
                                <Sparkles size={14} />
                                <span>Start Lead Scraper</span>
                              </div>
                            </div>

                            {/* Step 4 Visual: Active Search & Results */}
                            <div className={`visual-step-card card-step-4 ${
                              activeBoxStep === 4 ? 'showcase-step-card-active' :
                              activeBoxStep > 4 ? 'showcase-step-card-inactive-prev' : 'showcase-step-card-inactive-next'
                            }`}>
                              <div className="lead-visual-header">
                                <div className="lead-verify-badge">
                                  <CheckCircle2 size={12} className="text-emerald" />
                                  <span>Verified Lead Details</span>
                                </div>
                                <span className="lead-score-pill">AI Score: 96</span>
                              </div>

                              <div className="lead-details-split">
                                <div className="lead-profile-block">
                                  <h4 className="lead-comp-name">Apex Digital Media</h4>
                                  <div className="lead-comp-rating">
                                    <Star size={11} className="star-icon fill-amber" />
                                    <span>4.8★ (92 reviews)</span>
                                  </div>

                                  <div className="lead-contact-info">
                                    <div className="contact-row">
                                      <Mail size={12} className="text-cyan" />
                                      <span>hello@apexdigital.com</span>
                                    </div>
                                    <div className="contact-row">
                                      <Phone size={12} className="text-cyan" />
                                      <span>+91 98450 XXXXX</span>
                                    </div>
                                  </div>

                                  <div className="lead-painpoint-alert">
                                    <Activity size={12} className="text-rose" />
                                    <span>Pain Point: Mobile loading speed takes 6.4s (Slow)</span>
                                  </div>
                                </div>

                                <div className="lead-pitch-block">
                                  <div className="pitch-block-header">
                                    <Sparkles size={12} className="text-cyan" />
                                    <span>Personalized AI Pitch</span>
                                  </div>
                                  <div className="pitch-content-box">
                                    <p className="pitch-text">
                                      <strong>Subject:</strong> Quick feedback on Apex Digital Media's mobile speed<br /><br />
                                      Hi Apex team, loved your 4.8★ rating on Google Maps! I noticed your website takes over 6s to load on mobile. This causes 40% of visitors to bounce. We can fix this...
                                    </p>
                                  </div>

                                  <button
                                    type="button"
                                    className={`copy-pitch-action-btn ${copied ? 'copied' : ''}`}
                                    onClick={handleCopyPitch}
                                  >
                                    {copied ? (
                                      <>
                                        <Check size={13} className="text-emerald" />
                                        <span>Pitch Copied!</span>
                                      </>
                                    ) : (
                                      <>
                                        <Copy size={13} />
                                        <span>Copy Email Pitch</span>
                                      </>
                                    )}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Visual Navigation Arrows */}
                        <div className="showcase-visual-nav-footer">
                          <button type="button" className="nav-arrow-btn" onClick={handlePrevBox} title="Previous step">
                            <ChevronLeft size={16} />
                          </button>
                          <span className="nav-step-indicator">{activeBoxStep} / 4</span>
                          <button type="button" className="nav-arrow-btn" onClick={handleNextBox} title="Next step">
                            <ChevronRight size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </section>
    );
};
