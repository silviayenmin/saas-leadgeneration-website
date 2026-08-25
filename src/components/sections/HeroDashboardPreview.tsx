import React from 'react';
import {
  Search,
  MapPin,
  Mail,
  Sparkles,
  Kanban,
  Star,
  Globe,
  CheckCircle2,
  Filter,
  Layers,
  ArrowUpRight,
  TrendingUp,
  Zap,
  Phone
} from 'lucide-react';
import './HeroDashboardPreview.css';

export const HeroDashboardPreview: React.FC = () => {
  return (
    <div className="hero-preview-wrapper animate-float">
      {/* Glow Backdrop */}
      <div className="hero-preview-glow" />

      {/* Main Dashboard Window Shell */}
      <div className="dashboard-shell">
        {/* Window Control Bar */}
        <div className="dashboard-window-bar">
          <div className="window-dots">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
          </div>
          <div className="window-title">
            <MapPin size={12} className="text-primary" />
            <span>MapFlow AI — Lead Discovery Engine</span>
          </div>
          <div className="window-status">
            <Zap size={11} className="text-cyan" style={{ marginRight: 4 }} />
            <span><strong>490/500</strong> Credits</span>
          </div>
        </div>

        {/* Inner Dashboard Layout */}
        <div className="dashboard-body">
          {/* Small Sidebar */}
          <aside className="dashboard-sidebar">
            <div className="sidebar-item active" title="Maps Lead Discovery">
              <Search size={18} />
            </div>
            <div className="sidebar-item" title="Enriched Leads">
              <Layers size={18} />
            </div>
            <div className="sidebar-item" title="AI Cold Email">
              <Mail size={18} />
            </div>
            <div className="sidebar-item" title="Kanban Pipeline">
              <Kanban size={18} />
            </div>
          </aside>

          {/* Main Dashboard Workspace */}
          <main className="dashboard-content">
            {/* Search Header Bar */}
            <div className="dashboard-search-bar">
              <div className="search-input-wrapper">
                <Search size={16} className="search-icon" />
                <input
                  type="text"
                  readOnly
                  value="Software Development Company in Austin"
                  className="search-input"
                />
                <span className="search-badge">Smart Location Filter</span>
              </div>
              <div className="leads-found-badge">
                <TrendingUp size={14} />
                <span><strong>10 Leads</strong> Extracted</span>
              </div>
            </div>

            {/* Split View: Lead Cards + Interactive Map Canvas */}
            <div className="dashboard-split">
              {/* Left Column: Discovered Business Leads */}
              <div className="dashboard-leads-list">
                <div className="list-header">
                  <span>Extracted Map Scans</span>
                  <Filter size={14} className="text-muted" />
                </div>

                {/* Lead Card 1 — Active High priority lead */}
                <div className="lead-card lead-card--active">
                  <div className="lead-card-header">
                    <div>
                      <h4 className="lead-name">Vortex Global Software</h4>
                      <div className="lead-rating">
                        <Star size={12} fill="#F59E0B" color="#F59E0B" />
                        <span>4.9</span>
                        <span className="rating-count">(40% Match)</span>
                      </div>
                    </div>
                    <span className="badge-verified">
                      <CheckCircle2 size={12} /> Verified Email
                    </span>
                  </div>

                  <div className="lead-details">
                    <div className="detail-row">
                      <Globe size={12} />
                      <a href="#demo" onClick={(e) => e.preventDefault()} className="lead-link">
                        vortexsoftware.io <ArrowUpRight size={10} />
                      </a>
                    </div>
                    <div className="detail-row">
                      <Mail size={12} />
                      <span className="lead-email">contact@vortexsoftware.io</span>
                    </div>
                    <div className="detail-row">
                      <Phone size={12} />
                      <span className="lead-phone">(555) 234-5678</span>
                    </div>
                  </div>

                  {/* AI Cold Pitch Generator Chip */}
                  <div className="ai-pitch-chip">
                    <Sparkles size={13} className="sparkle-icon" />
                    <span>AI Pitch: <em>"Noticed Vortex Global's 4.9★ rating on Google Maps..."</em></span>
                  </div>
                </div>

                {/* Lead Card 2 */}
                <div className="lead-card">
                  <div className="lead-card-header">
                    <div>
                      <h4 className="lead-name">Apex Digital Technologies</h4>
                      <div className="lead-rating">
                        <Star size={12} fill="#F59E0B" color="#F59E0B" />
                        <span>4.6</span>
                        <span className="rating-count">(55% Match)</span>
                      </div>
                    </div>
                    <span className="badge-enriching">
                      <Sparkles size={12} /> Email Verified
                    </span>
                  </div>

                  <div className="lead-details">
                    <div className="detail-row">
                      <Mail size={12} />
                      <span className="lead-email">hello@apexdigital.io</span>
                    </div>
                    <div className="detail-row">
                      <Phone size={12} />
                      <span className="lead-phone">(555) 345-6789</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Simulated Google Maps View */}
              <div className="dashboard-map-area">
                <div className="map-grid-overlay" />
                <div className="map-location-tag">
                  <MapPin size={14} color="#0EA5A4" /> Austin, Texas
                </div>

                {/* Map Pin 1 — Active pulse */}
                <div className="map-pin map-pin--1 active">
                  <div className="pin-pulse" />
                  <div className="pin-marker">
                    <MapPin size={18} fill="#0EA5A4" color="#ffffff" />
                  </div>
                  <div className="pin-tooltip">Vortex Global (4.9★)</div>
                </div>

                {/* Map Pin 2 */}
                <div className="map-pin map-pin--2">
                  <div className="pin-marker">
                    <MapPin size={16} fill="#3B82F6" color="#ffffff" />
                  </div>
                </div>

                {/* Map Pin 3 */}
                <div className="map-pin map-pin--3">
                  <div className="pin-marker">
                    <MapPin size={16} fill="#10B981" color="#ffffff" />
                  </div>
                </div>

                {/* Floating Metric Card Overlay */}
                <div className="floating-metric-card">
                  <div className="metric-icon">
                    <Sparkles size={16} color="#0EA5A4" />
                  </div>
                  <div>
                    <div className="metric-label">Maps Lead Quality</div>
                    <div className="metric-value">80% Verified Phone &amp; Email</div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
