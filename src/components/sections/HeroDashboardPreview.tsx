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
  TrendingUp
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
            <span className="status-indicator" /> Live Scrape
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
                  value="Dentists in Austin, TX"
                  className="search-input"
                />
                <span className="search-badge">Google Maps API</span>
              </div>
              <div className="leads-found-badge">
                <TrendingUp size={14} />
                <span><strong>142 Leads</strong> Found</span>
              </div>
            </div>

            {/* Split View: Lead Cards + Interactive Map Canvas */}
            <div className="dashboard-split">
              {/* Left Column: Discovered Business Leads */}
              <div className="dashboard-leads-list">
                <div className="list-header">
                  <span>Enriched Leads</span>
                  <Filter size={14} className="text-muted" />
                </div>

                {/* Lead Card 1 — Active High priority lead */}
                <div className="lead-card lead-card--active">
                  <div className="lead-card-header">
                    <div>
                      <h4 className="lead-name">Austin Dental Care</h4>
                      <div className="lead-rating">
                        <Star size={12} fill="#F59E0B" color="#F59E0B" />
                        <span>4.9</span>
                        <span className="rating-count">(128 reviews)</span>
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
                        austindental.com <ArrowUpRight size={10} />
                      </a>
                    </div>
                    <div className="detail-row">
                      <Mail size={12} />
                      <span className="lead-email">dr.smith@austindental.com</span>
                    </div>
                  </div>

                  {/* AI Cold Pitch Generator Chip */}
                  <div className="ai-pitch-chip">
                    <Sparkles size={13} className="sparkle-icon" />
                    <span>AI Pitch: <em>"Hi Dr. Smith, noticed your 4.9★ rating..."</em></span>
                  </div>
                </div>

                {/* Lead Card 2 */}
                <div className="lead-card">
                  <div className="lead-card-header">
                    <div>
                      <h4 className="lead-name">Texas Smile Center</h4>
                      <div className="lead-rating">
                        <Star size={12} fill="#F59E0B" color="#F59E0B" />
                        <span>4.8</span>
                        <span className="rating-count">(94 reviews)</span>
                      </div>
                    </div>
                    <span className="badge-enriching">
                      <Sparkles size={12} /> Enriching...
                    </span>
                  </div>

                  <div className="lead-details">
                    <div className="detail-row">
                      <Globe size={12} />
                      <span className="lead-link">texassmilecenter.com</span>
                    </div>
                    <div className="detail-row">
                      <Mail size={12} />
                      <span className="lead-email">info@texassmilecenter.com</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Simulated Google Maps View */}
              <div className="dashboard-map-area">
                <div className="map-grid-overlay" />
                <div className="map-location-tag">
                  <MapPin size={14} color="#3B82F6" /> Austin, Texas
                </div>

                {/* Map Pin 1 — Active pulse */}
                <div className="map-pin map-pin--1 active">
                  <div className="pin-pulse" />
                  <div className="pin-marker">
                    <MapPin size={18} fill="#3B82F6" color="#ffffff" />
                  </div>
                  <div className="pin-tooltip">Austin Dental Care (4.9★)</div>
                </div>

                {/* Map Pin 2 */}
                <div className="map-pin map-pin--2">
                  <div className="pin-marker">
                    <MapPin size={16} fill="#6366F1" color="#ffffff" />
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
                    <Sparkles size={16} color="#60A5FA" />
                  </div>
                  <div>
                    <div className="metric-label">Enrichment Accuracy</div>
                    <div className="metric-value">98.4% Verified Contact Info</div>
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
