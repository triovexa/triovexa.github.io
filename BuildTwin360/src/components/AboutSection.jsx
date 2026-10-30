import React from 'react';

export default function AboutSection({ handleSmoothScroll }) {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <span className="section-tag">
            <i className="ri-building-fill" style={{ color: 'var(--accent-cyan)' }}></i> Who We Are & Our Mission
          </span>
          <h2>About <span className="gradient-sky-text">TRIOVEXA Software Solutions</span></h2>
        </div>

        {/* New Futuristic Key Points Highlight Design (Replaces Old Plain Paragraph) */}
        <div 
          className="about-key-highlights-container glass-card"
          style={{
            marginBottom: '3rem',
            padding: '2rem 2.25rem',
            background: 'linear-gradient(135deg, rgba(7, 13, 25, 0.95), rgba(13, 27, 54, 0.9))',
            border: '1.5px solid var(--border-glow)',
            boxShadow: 'var(--shadow-glow)',
            borderRadius: 'var(--radius-lg)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(0, 242, 254, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00f2fe', fontSize: '1.4rem' }}>
                <i className="ri-flashlight-fill"></i>
              </div>
              <div>
                <h3 style={{ fontSize: '1.35rem', color: '#ffffff', margin: 0 }}>TRIOVEXA Software Solutions Core Capabilities</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-sky-bright)', fontWeight: 700 }}>India’s Trusted Enterprise Innovation Partner</span>
              </div>
            </div>
            <div className="count-pill" style={{ background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24', border: '1px solid #fbbf24', fontSize: '0.82rem' }}>
              8 Core Enterprise Capabilities • 100% Custom Tailored
            </div>
          </div>

          {/* 8 High-Impact Key Point Feature Cards with Dedicated Uploaded Images */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat( auto-fit, minmax(240px, 1fr) )', gap: '1.25rem' }}>
            {/* Card 1: Enterprise Factories */}
            <div className="glass-card" style={{ padding: '1rem', background: 'rgba(13, 27, 54, 0.75)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', height: '140px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '0.85rem', border: '1px solid var(--border-glow)' }}>
                <img 
                  src="/assets/images/enterprise-factories.png" 
                  alt="Enterprise Factories TRIOVEXA Software Solutions" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }} 
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <i className="ri-building-4-fill" style={{ color: '#00f2fe', fontSize: '1.25rem' }}></i>
                <h4 style={{ color: '#ffffff', fontSize: '1.02rem', margin: 0, fontWeight: 700 }}>Enterprise Factories</h4>
              </div>
              <p style={{ color: 'var(--text-sky-light)', fontSize: '0.85rem', margin: 0, lineHeight: 1.45 }}>
                Greige fabric stock tracking, textile dyeing vessel recipes & automated GST billing.
              </p>
            </div>

            {/* Card 2: Fleet & Transport Telemetry */}
            <div className="glass-card" style={{ padding: '1rem', background: 'rgba(13, 27, 54, 0.75)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', height: '140px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '0.85rem', border: '1px solid var(--border-glow)' }}>
                <img 
                  src="/assets/images/fleet-transport.png" 
                  alt="Fleet & Transport Telemetry TRIOVEXA Software Solutions" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }} 
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <i className="ri-truck-fill" style={{ color: '#38bdf8', fontSize: '1.25rem' }}></i>
                <h4 style={{ color: '#ffffff', fontSize: '1.02rem', margin: 0, fontWeight: 700 }}>Fleet & Transport Telemetry</h4>
              </div>
              <p style={{ color: 'var(--text-sky-light)', fontSize: '0.85rem', margin: 0, lineHeight: 1.45 }}>
                Real-time GPS vehicle tracking, driver route logs, trip fuel expense & e-way bills.
              </p>
            </div>

            {/* Card 3: Retail POS & E-Commerce */}
            <div className="glass-card" style={{ padding: '1rem', background: 'rgba(13, 27, 54, 0.75)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', height: '140px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '0.85rem', border: '1px solid var(--border-glow)' }}>
                <img 
                  src="/assets/images/retail-pos-ecommerce.png" 
                  alt="Retail POS & E-Commerce TRIOVEXA Software Solutions" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }} 
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <i className="ri-shopping-cart-fill" style={{ color: '#fbbf24', fontSize: '1.25rem' }}></i>
                <h4 style={{ color: '#ffffff', fontSize: '1.02rem', margin: 0, fontWeight: 700 }}>Retail POS & E-Commerce</h4>
              </div>
              <p style={{ color: 'var(--text-sky-light)', fontSize: '0.85rem', margin: 0, lineHeight: 1.45 }}>
                Thermal printer barcode billing, multi-store stock sync & mobile shopping apps.
              </p>
            </div>

            {/* Card 4: High-Velocity Web & Apps */}
            <div className="glass-card" style={{ padding: '1rem', background: 'rgba(13, 27, 54, 0.75)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', height: '140px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '0.85rem', border: '1px solid var(--border-glow)' }}>
                <img 
                  src="/assets/images/web-applications.png" 
                  alt="High-Velocity Web & Apps TRIOVEXA Software Solutions" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }} 
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <i className="ri-smartphone-fill" style={{ color: '#10b981', fontSize: '1.25rem' }}></i>
                <h4 style={{ color: '#ffffff', fontSize: '1.02rem', margin: 0, fontWeight: 700 }}>High-Velocity Web & Apps</h4>
              </div>
              <p style={{ color: 'var(--text-sky-light)', fontSize: '0.85rem', margin: 0, lineHeight: 1.45 }}>
                Engineered with React 19, Next.js, Node.js & native Android/iOS mobile frameworks.
              </p>
            </div>

            {/* Card 5: Zero Downtime SLA */}
            <div className="glass-card" style={{ padding: '1rem', background: 'rgba(13, 27, 54, 0.75)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', height: '140px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '0.85rem', border: '1px solid var(--border-glow)' }}>
                <img 
                  src="/assets/images/zero-downtime-sla.png" 
                  alt="Zero Downtime SLA TRIOVEXA Software Solutions" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }} 
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <i className="ri-shield-check-fill" style={{ color: '#a855f7', fontSize: '1.25rem' }}></i>
                <h4 style={{ color: '#ffffff', fontSize: '1.02rem', margin: 0, fontWeight: 700 }}>Zero Downtime SLA</h4>
              </div>
              <p style={{ color: 'var(--text-sky-light)', fontSize: '0.85rem', margin: 0, lineHeight: 1.45 }}>
                100% custom-coded architecture with continuous 24/7 technical monitoring & backup.
              </p>
            </div>

            {/* Card 6: AI Automation & Neural Insights */}
            <div className="glass-card" style={{ padding: '1rem', background: 'rgba(13, 27, 54, 0.75)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', height: '140px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '0.85rem', border: '1px solid var(--border-glow)' }}>
                <img 
                  src="/assets/images/portfolio-1.jpg" 
                  alt="AI Automation & Neural Insights TRIOVEXA Software Solutions" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }} 
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <i className="ri-cpu-line" style={{ color: '#06b6d4', fontSize: '1.25rem' }}></i>
                <h4 style={{ color: '#ffffff', fontSize: '1.02rem', margin: 0, fontWeight: 700 }}>AI Automation & ML</h4>
              </div>
              <p style={{ color: 'var(--text-sky-light)', fontSize: '0.85rem', margin: 0, lineHeight: 1.45 }}>
                Predictive order forecasting, smart anomaly detection & conversational AI assistants.
              </p>
            </div>

            {/* Card 7: Executive BI & Real-Time Analytics */}
            <div className="glass-card" style={{ padding: '1rem', background: 'rgba(13, 27, 54, 0.75)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', height: '140px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '0.85rem', border: '1px solid var(--border-glow)' }}>
                <img 
                  src="/assets/images/pro-dashboard.jpg" 
                  alt="Executive BI & Real-Time Analytics TRIOVEXA Software Solutions" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }} 
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <i className="ri-pie-chart-2-fill" style={{ color: '#f59e0b', fontSize: '1.25rem' }}></i>
                <h4 style={{ color: '#ffffff', fontSize: '1.02rem', margin: 0, fontWeight: 700 }}>Executive BI & Analytics</h4>
              </div>
              <p style={{ color: 'var(--text-sky-light)', fontSize: '0.85rem', margin: 0, lineHeight: 1.45 }}>
                Live multi-branch KPI monitoring, latency diagnostics & instant audit export reports.
              </p>
            </div>

            {/* Card 8: Rapid Agile Sprint Delivery */}
            <div className="glass-card" style={{ padding: '1rem', background: 'rgba(13, 27, 54, 0.75)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '100%', height: '140px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '0.85rem', border: '1px solid var(--border-glow)' }}>
                <img 
                  src="/assets/images/happy-client-delivery.jpg" 
                  alt="Rapid Agile Sprint Delivery TRIOVEXA Software Solutions" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }} 
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <i className="ri-trophy-fill" style={{ color: '#ec4899', fontSize: '1.25rem' }}></i>
                <h4 style={{ color: '#ffffff', fontSize: '1.02rem', margin: 0, fontWeight: 700 }}>Agile Delivery & Sprints</h4>
              </div>
              <p style={{ color: 'var(--text-sky-light)', fontSize: '0.85rem', margin: 0, lineHeight: 1.45 }}>
                100% on-time milestone delivery guarantee, direct founder advisory & rapid rollouts.
              </p>
            </div>
          </div>
        </div>

        {/* Story & Pillars Grid */}
        <div className="about-grid">
          {/* New TRIOVEXA Enterprise Software Success Rate Chart (2025 - 2026 Present) */}
          <div className="glass-card about-story-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
              <div className="about-badge-tag" style={{ background: 'rgba(16, 185, 129, 0.15)', borderColor: '#10b981', color: '#10b981' }}>
                <i className="ri-line-chart-fill"></i> Verified SLA Growth Metric
              </div>
              <div className="count-pill" style={{ background: 'rgba(251, 191, 36, 0.18)', color: '#fbbf24', border: '1px solid #fbbf24', fontWeight: 800 }}>
                99.4% Verified Success Rate
              </div>
            </div>

            <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.5rem' }}>
              TRIOVEXA Project Success Rate (2025 – 2026 Present)
            </h3>


            <div
              style={{
                background: 'rgba(7, 13, 25, 0.85)',
                borderRadius: 'var(--radius-md)',
                padding: '1.75rem 1.25rem 1.25rem 1.25rem',
                border: '1.5px solid var(--border-glow)',
                boxShadow: 'inner',
                marginBottom: '1.5rem',
              }}
            >
              {/* Top Chart Header / Subtitle */}
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#ffffff', fontSize: '1.1rem', margin: '0 0 0.25rem 0' }}>
                  Annual Project Success Rate Progression (2021 – 2027)
                </h4>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-sky-bright)', fontWeight: 700 }}>
                  2026 Peak Goal Completed with <span style={{ color: '#fbbf24', textDecoration: 'underline' }}>99.8% Highest Excellence</span> • 2027 Projected Roadmap
                </div>
              </div>

              {/* Bar Graph Grid - Aligned to bottom */}
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', minHeight: '250px', padding: '1rem 0.5rem 0.5rem 0.5rem', borderBottom: '1px solid var(--border-glass)', gap: '0.5rem' }}>
                
                {/* Bar 1: Year 2021 */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-sky-light)', marginBottom: '0.35rem' }}>88.0%</div>
                  <div
                    style={{
                      width: '75%',
                      height: '45px',
                      background: 'linear-gradient(to top, rgba(0, 242, 254, 0.1), rgba(0, 242, 254, 0.25))',
                      borderRadius: '6px 6px 0 0',
                      border: '1px solid rgba(0, 242, 254, 0.2)',
                    }}
                  ></div>
                </div>

                {/* Bar 2: Year 2022 */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-sky-light)', marginBottom: '0.35rem' }}>91.5%</div>
                  <div
                    style={{
                      width: '75%',
                      height: '62px',
                      background: 'linear-gradient(to top, rgba(0, 242, 254, 0.15), rgba(0, 242, 254, 0.35))',
                      borderRadius: '6px 6px 0 0',
                      border: '1px solid rgba(0, 242, 254, 0.3)',
                    }}
                  ></div>
                </div>

                {/* Bar 3: Year 2023 */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-sky-bright)', marginBottom: '0.35rem' }}>94.0%</div>
                  <div
                    style={{
                      width: '75%',
                      height: '80px',
                      background: 'linear-gradient(to top, rgba(0, 242, 254, 0.2), rgba(0, 242, 254, 0.5))',
                      borderRadius: '6px 6px 0 0',
                      border: '1px solid rgba(0, 242, 254, 0.4)',
                    }}
                  ></div>
                </div>

                {/* Bar 4: Year 2024 */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-sky-bright)', marginBottom: '0.35rem' }}>96.5%</div>
                  <div
                    style={{
                      width: '75%',
                      height: '100px',
                      background: 'linear-gradient(to top, rgba(0, 242, 254, 0.3), #00f2fe)',
                      borderRadius: '6px 6px 0 0',
                      border: '1px solid #00f2fe',
                    }}
                  ></div>
                </div>

                {/* Bar 5: Year 2025 */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-sky-bright)', marginBottom: '0.35rem' }}>98.2%</div>
                  <div
                    style={{
                      width: '75%',
                      height: '122px',
                      background: 'linear-gradient(to top, rgba(0, 242, 254, 0.4), #00f2fe, #38bdf8)',
                      borderRadius: '6px 6px 0 0',
                      border: '1.5px solid #00f2fe',
                      boxShadow: '0 0 10px rgba(0, 242, 254, 0.3)',
                    }}
                  ></div>
                </div>

                {/* Bar 6: Year 2026 - TALLEST TOWERING PEAK SUCCESS BAR */}
                <div style={{ flex: 1.15, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#fbbf24', marginBottom: '0.35rem' }}>99.8%</div>
                  <div
                    style={{
                      width: '88%',
                      height: '175px',
                      background: 'linear-gradient(to top, rgba(0, 242, 254, 0.6), #00f2fe, #fbbf24)',
                      borderRadius: '8px 8px 0 0',
                      border: '2.5px solid #fbbf24',
                      boxShadow: '0 0 30px rgba(251, 191, 36, 0.7)',
                      transition: 'all 0.3s ease',
                    }}
                  ></div>
                </div>

                {/* Bar 7: Year 2027 - PROJECTED ROADMAP */}
                <div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <div className="pulse-dot" style={{ background: '#10b981', width: '10px', height: '10px', marginBottom: '0.2rem' }}></div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#10b981', marginBottom: '0.35rem', textAlign: 'center', lineHeight: 1.15 }}>
                    Projected<br />Roadmap
                  </div>
                  <div
                    style={{
                      width: '80%',
                      height: '95px',
                      background: 'linear-gradient(to top, rgba(16, 185, 129, 0.05), rgba(16, 185, 129, 0.25))',
                      borderRadius: '8px 8px 0 0',
                      border: '1.5px dashed #10b981',
                      boxShadow: '0 0 15px rgba(16, 185, 129, 0.3)',
                    }}
                  ></div>
                </div>

              </div>

              {/* X-Axis Clean Year Labels */}
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.75rem', gap: '0.5rem', textAlign: 'center' }}>
                <div style={{ flex: 1, fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-sky-light)' }}>
                  2021
                </div>
                <div style={{ flex: 1, fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-sky-light)' }}>
                  2022
                </div>
                <div style={{ flex: 1, fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-sky-light)' }}>
                  2023
                </div>
                <div style={{ flex: 1, fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-sky-bright)' }}>
                  2024
                </div>
                <div style={{ flex: 1, fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-sky-bright)' }}>
                  2025
                </div>
                <div style={{ flex: 1.1, fontSize: '0.88rem', fontWeight: 800, color: '#fbbf24' }}>
                  2026 (Peak)
                </div>
                <div style={{ flex: 1.1, fontSize: '0.85rem', fontWeight: 800, color: '#10b981' }}>
                  2027 (Projected)
                </div>
              </div>
            </div>

            {/* Metrics KPI Row */}
            <div className="about-mini-stats">
              <div className="mini-stat-item">
                <span className="mini-stat-num" style={{ color: '#fbbf24' }}>99.4%</span>
                <span className="mini-stat-text">Excellent Score</span>
              </div>
              <div className="mini-stat-item">
                <span className="mini-stat-num" style={{ color: '#10b981' }}>100%</span>
                <span className="mini-stat-text">On-Time Velocity</span>
              </div>
              <div className="mini-stat-item">
                <span className="mini-stat-num" style={{ color: 'var(--text-sky-bright)' }}>250+</span>
                <span className="mini-stat-text">Successful Projects</span>
              </div>
              <div className="mini-stat-item">
                <span className="mini-stat-num" style={{ color: '#a855f7' }}>0%</span>
                <span className="mini-stat-text">Downtime SLA</span>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <a
                href="#achievements"
                onClick={(e) => handleSmoothScroll(e, '#achievements')}
                className="btn btn-sky"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>View Client Achievements & Growth Milestones</span>
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>

          {/* Unique Engineering Team & Employee Count Growth Timeline (2021 - 2026) */}

          {/* Unique Engineering Team & Employee Count Growth Timeline (2021 - 2026) */}
          <div className="about-pillars-wrapper">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.6rem', margin: 0 }}>
                <i className="ri-team-fill" style={{ color: 'var(--accent-cyan)' }}></i>
                TRIOVEXA Engineering Team Growth Timeline
              </h3>
              <span className="count-pill" style={{ background: 'rgba(0, 242, 254, 0.15)', color: 'var(--text-sky-bright)', border: '1px solid var(--accent-cyan)' }}>
                35+ Tech Engineers
              </span>
            </div>

            {/* Vertical Interactive Timeline Container */}
            <div
              className="glass-card"
              style={{
                padding: '1.5rem 1.25rem',
                background: 'rgba(7, 13, 25, 0.85)',
                border: '1.5px solid var(--border-glow)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', position: 'relative', paddingLeft: '0.75rem' }}>
                
                {/* Vertical Connector Line */}
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    bottom: '20px',
                    left: '26px',
                    width: '3px',
                    background: 'linear-gradient(to bottom, #00f2fe, #38bdf8, #fbbf24)',
                    boxShadow: '0 0 10px rgba(0, 242, 254, 0.6)',
                    borderRadius: '2px',
                    zIndex: 1,
                  }}
                ></div>

                {/* Timeline Item 1: 2021 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', zIndex: 2 }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'rgba(7, 13, 25, 0.95)',
                      border: '2px solid #00f2fe',
                      boxShadow: '0 0 12px rgba(0, 242, 254, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00f2fe',
                      fontSize: '0.9rem',
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    '21
                  </div>
                  <div className="glass-card" style={{ flex: 1, padding: '0.75rem 1rem', background: 'rgba(13, 27, 54, 0.6)', border: '1px solid var(--border-glass)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong style={{ color: '#ffffff', fontSize: '0.95rem' }}>2021 Founding Year</strong>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-sky-light)' }}>Core R&D Software Engineers</div>
                    </div>
                    <span className="count-pill" style={{ background: 'rgba(0, 242, 254, 0.12)', color: 'var(--text-sky-bright)', fontWeight: 800, fontSize: '0.85rem' }}>
                      8 Employees
                    </span>
                  </div>
                </div>

                {/* Timeline Item 2: 2022 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', zIndex: 2 }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'rgba(7, 13, 25, 0.95)',
                      border: '2px solid #00f2fe',
                      boxShadow: '0 0 12px rgba(0, 242, 254, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00f2fe',
                      fontSize: '0.9rem',
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    '22
                  </div>
                  <div className="glass-card" style={{ flex: 1, padding: '0.75rem 1rem', background: 'rgba(13, 27, 54, 0.6)', border: '1px solid var(--border-glass)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong style={{ color: '#ffffff', fontSize: '0.95rem' }}>2022 Expansion Phase</strong>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-sky-light)' }}>Full-Stack Web & Cloud Developers</div>
                    </div>
                    <span className="count-pill" style={{ background: 'rgba(0, 242, 254, 0.15)', color: 'var(--text-sky-bright)', fontWeight: 800, fontSize: '0.85rem' }}>
                      15 Employees
                    </span>
                  </div>
                </div>

                {/* Timeline Item 3: 2023 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', zIndex: 2 }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'rgba(7, 13, 25, 0.95)',
                      border: '2px solid #38bdf8',
                      boxShadow: '0 0 12px rgba(56, 189, 248, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#38bdf8',
                      fontSize: '0.9rem',
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    '23
                  </div>
                  <div className="glass-card" style={{ flex: 1, padding: '0.75rem 1rem', background: 'rgba(13, 27, 54, 0.6)', border: '1px solid var(--border-glass)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong style={{ color: '#ffffff', fontSize: '0.95rem' }}>2023 Industrial ERP Squad</strong>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-sky-light)' }}>Textile & Logistics Systems Engineers</div>
                    </div>
                    <span className="count-pill" style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', fontWeight: 800, fontSize: '0.85rem' }}>
                      20 Employees
                    </span>
                  </div>
                </div>

                {/* Timeline Item 4: 2024 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', zIndex: 2 }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'rgba(7, 13, 25, 0.95)',
                      border: '2px solid #38bdf8',
                      boxShadow: '0 0 12px rgba(56, 189, 248, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#38bdf8',
                      fontSize: '0.9rem',
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    '24
                  </div>
                  <div className="glass-card" style={{ flex: 1, padding: '0.75rem 1rem', background: 'rgba(13, 27, 54, 0.6)', border: '1px solid var(--border-glass)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong style={{ color: '#ffffff', fontSize: '0.95rem' }}>2024 Mobile & POS Division</strong>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-sky-light)' }}>Native Android, iOS & Thermal POS Team</div>
                    </div>
                    <span className="count-pill" style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', fontWeight: 800, fontSize: '0.85rem' }}>
                      23 Employees
                    </span>
                  </div>
                </div>

                {/* Timeline Item 5: 2025 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', zIndex: 2 }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'rgba(7, 13, 25, 0.95)',
                      border: '2px solid #fbbf24',
                      boxShadow: '0 0 12px rgba(251, 191, 36, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fbbf24',
                      fontSize: '0.9rem',
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    '25
                  </div>
                  <div className="glass-card" style={{ flex: 1, padding: '0.75rem 1rem', background: 'rgba(13, 27, 54, 0.6)', border: '1px solid var(--border-glass)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong style={{ color: '#ffffff', fontSize: '0.95rem' }}>2025 QA & Security Division</strong>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-sky-light)' }}>Automation Testing & Security Architects</div>
                    </div>
                    <span className="count-pill" style={{ background: 'rgba(251, 191, 36, 0.18)', color: '#fbbf24', fontWeight: 800, fontSize: '0.85rem' }}>
                      28 Employees
                    </span>
                  </div>
                </div>

                {/* Timeline Item 6: 2026 Peak Team */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', zIndex: 2 }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: '#fbbf24',
                      color: '#070d19',
                      border: '2px solid #ffffff',
                      boxShadow: '0 0 18px rgba(251, 191, 36, 0.8)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.9rem',
                      fontWeight: 900,
                      flexShrink: 0,
                    }}
                  >
                    '26
                  </div>
                  <div className="glass-card" style={{ flex: 1, padding: '0.75rem 1rem', background: 'rgba(251, 191, 36, 0.12)', border: '1.5px solid #fbbf24', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <strong style={{ color: '#ffffff', fontSize: '0.95rem' }}>2026 Peak Enterprise Team</strong>
                      <div style={{ fontSize: '0.8rem', color: '#fbbf24', fontWeight: 700 }}>Senior Software Architects & SLA Engineers</div>
                    </div>
                    <span className="count-pill" style={{ background: '#fbbf24', color: '#070d19', fontWeight: 900, fontSize: '0.88rem' }}>
                      35 Employees
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* TRIOVEXA Top 3 Best Client Commitments (Unique Ultra-Modern Card Grid) */}
        <div style={{ marginTop: '3.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-tag" style={{ background: 'rgba(251, 191, 36, 0.15)', borderColor: '#fbbf24', color: '#fbbf24', padding: '0.5rem 1.25rem', borderRadius: '30px', fontWeight: 800, fontSize: '0.85rem' }}>
              OUR TOP 3 CLIENT COMMITMENTS
            </span>
            <h3 style={{ fontSize: '2rem', color: '#ffffff', marginTop: '0.75rem', fontWeight: 800 }}>
              Our 3 Core Guarantees to Every Client
            </h3>
            <p style={{ color: 'var(--text-sky-light)', fontSize: '1rem', maxWidth: '650px', margin: '0.5rem auto 0 auto' }}>
              We build enterprise software with zero compromises on quality, speed, and continuous support.
            </p>
          </div>

          <div className="about-values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat( auto-fit, minmax(300px, 1fr) )', gap: '1.75rem' }}>
            
            {/* Top 1 Guarantee: Client-Centric Custom Build */}
            <div
              className="glass-card value-card"
              style={{
                position: 'relative',
                padding: '2.25rem 1.85rem',
                border: '1.5px solid rgba(251, 191, 36, 0.45)',
                background: 'linear-gradient(145deg, rgba(7, 13, 25, 0.95), rgba(20, 35, 65, 0.85))',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                transition: 'all 0.35s ease',
                overflow: 'hidden'
              }}
            >
              <div 
                style={{ 
                  position: 'absolute', 
                  top: '-20px', 
                  right: '-10px', 
                  fontSize: '5rem', 
                  fontWeight: 900, 
                  color: 'rgba(251, 191, 36, 0.08)',
                  userSelect: 'none',
                  pointerEvents: 'none'
                }}
              >
                01
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(251, 191, 36, 0.18)', border: '1px solid #fbbf24', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fbbf24', fontSize: '1.6rem', boxShadow: '0 0 15px rgba(251, 191, 36, 0.3)' }}>
                  <i className="ri-heart-3-fill"></i>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    COMMITMENT #1
                  </span>
                  <h4 style={{ color: '#ffffff', fontSize: '1.25rem', margin: 0, fontWeight: 800 }}>
                    1. Client-Centric Custom Solutions
                  </h4>
                </div>
              </div>

              <h5 style={{ color: 'var(--text-sky-bright)', fontSize: '1rem', margin: '0 0 0.75rem 0', fontWeight: 700 }}>
                100% Customized Build Built To Your Exact Vision
              </h5>

              <p style={{ color: 'var(--text-sky-light)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                We build every software solution strictly according to your client preferences and business workflow. Every UI screen, database module, and feature is custom engineered until you are 100% satisfied.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="count-pill" style={{ background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24', border: '1px solid #fbbf24', fontSize: '0.8rem', fontWeight: 800 }}>
                  100% Tailored Codebase
                </span>
                <span className="count-pill" style={{ background: 'rgba(255, 255, 255, 0.06)', color: 'var(--text-sky-light)', fontSize: '0.78rem' }}>
                  Zero Templates
                </span>
              </div>
            </div>

            {/* Top 2 Guarantee: Guaranteed On-Time Delivery */}
            <div
              className="glass-card value-card"
              style={{
                position: 'relative',
                padding: '2.25rem 1.85rem',
                border: '1.5px solid rgba(0, 242, 254, 0.45)',
                background: 'linear-gradient(145deg, rgba(7, 13, 25, 0.95), rgba(20, 35, 65, 0.85))',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                transition: 'all 0.35s ease',
                overflow: 'hidden'
              }}
            >
              <div 
                style={{ 
                  position: 'absolute', 
                  top: '-20px', 
                  right: '-10px', 
                  fontSize: '5rem', 
                  fontWeight: 900, 
                  color: 'rgba(0, 242, 254, 0.08)',
                  userSelect: 'none',
                  pointerEvents: 'none'
                }}
              >
                02
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(0, 242, 254, 0.18)', border: '1px solid #00f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00f2fe', fontSize: '1.6rem', boxShadow: '0 0 15px rgba(0, 242, 254, 0.3)' }}>
                  <i className="ri-rocket-2-fill"></i>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#00f2fe', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    COMMITMENT #2
                  </span>
                  <h4 style={{ color: '#ffffff', fontSize: '1.25rem', margin: 0, fontWeight: 800 }}>
                    2. Guaranteed On-Time Delivery
                  </h4>
                </div>
              </div>

              <h5 style={{ color: 'var(--text-sky-bright)', fontSize: '1rem', margin: '0 0 0.75rem 0', fontWeight: 700 }}>
                Rapid Agile Sprints & Promised Launch Deadlines
              </h5>

              <p style={{ color: 'var(--text-sky-light)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                We deliver every project on time without delays. Executed in high-velocity agile sprints with a 99.4% verified on-time record so your web app, mobile app, or ERP platform goes live on schedule.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="count-pill" style={{ background: 'rgba(0, 242, 254, 0.15)', color: 'var(--text-sky-bright)', border: '1px solid var(--accent-cyan)', fontSize: '0.8rem', fontWeight: 800 }}>
                  99.4% On-Time Record
                </span>
                <span className="count-pill" style={{ background: 'rgba(255, 255, 255, 0.06)', color: 'var(--text-sky-light)', fontSize: '0.78rem' }}>
                  Fast Sprints
                </span>
              </div>
            </div>

            {/* Top 3 Guarantee: 24/7 Technical Support */}
            <div
              className="glass-card value-card"
              style={{
                position: 'relative',
                padding: '2.25rem 1.85rem',
                border: '1.5px solid rgba(16, 185, 129, 0.45)',
                background: 'linear-gradient(145deg, rgba(7, 13, 25, 0.95), rgba(20, 35, 65, 0.85))',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                transition: 'all 0.35s ease',
                overflow: 'hidden'
              }}
            >
              <div 
                style={{ 
                  position: 'absolute', 
                  top: '-20px', 
                  right: '-10px', 
                  fontSize: '5rem', 
                  fontWeight: 900, 
                  color: 'rgba(16, 185, 129, 0.08)',
                  userSelect: 'none',
                  pointerEvents: 'none'
                }}
              >
                03
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(16, 185, 129, 0.18)', border: '1px solid #10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', fontSize: '1.6rem', boxShadow: '0 0 15px rgba(16, 185, 129, 0.3)' }}>
                  <i className="ri-customer-service-2-fill"></i>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    COMMITMENT #3
                  </span>
                  <h4 style={{ color: '#ffffff', fontSize: '1.25rem', margin: 0, fontWeight: 800 }}>
                    3. 24/7 Technical Support
                  </h4>
                </div>
              </div>

              <h5 style={{ color: 'var(--text-sky-bright)', fontSize: '1rem', margin: '0 0 0.75rem 0', fontWeight: 700 }}>
                Round-the-Clock SLA Support & System Maintenance
              </h5>

              <p style={{ color: 'var(--text-sky-light)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                We provide 24/7 continuous technical support. Our dedicated software engineering team is available 24 hours a day, 7 days a week for live uptime monitoring, backups, and instant fixes.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="count-pill" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', border: '1px solid #10b981', fontSize: '0.8rem', fontWeight: 800 }}>
                  24/7 Active SLA Support
                </span>
                <span className="count-pill" style={{ background: 'rgba(255, 255, 255, 0.06)', color: 'var(--text-sky-light)', fontSize: '0.78rem' }}>
                  Always Available
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Official Chennai Headquarters Office Address Card */}
        <div className="glass-card address-headquarters-card" style={{ marginTop: '3rem', padding: '2.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.1fr', gap: '2rem', alignItems: 'center' }}>
            <div>
              <div className="about-badge-tag" style={{ background: 'rgba(16, 185, 129, 0.15)', borderColor: '#10b981', color: '#10b981' }}>
                <i className="ri-map-pin-user-fill"></i> TRIOVEXA Corporate Headquarters - Chennai, India
              </div>
              <h3 style={{ fontSize: '1.8rem', color: '#ffffff', margin: '0.75rem 0 1rem 0' }}>
                Visit Our Chennai Software Engineering Studio
              </h3>

              {/* Clickable Address Link Container */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=RELIANCE+SMSL+LIMITED+Puravankara+Vivekananda+Nagar+Thoraipakkam+Chennai+Tamil+Nadu+600097"
                target="_blank"
                rel="noopener noreferrer"
                title="Click to open location in Google Maps"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.9rem',
                  color: 'var(--text-sky-light)',
                  fontSize: '1.02rem',
                  textDecoration: 'none',
                  background: 'rgba(0, 242, 254, 0.04)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1.5px dashed var(--accent-cyan)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  marginBottom: '1rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 242, 254, 0.1)';
                  e.currentTarget.style.borderColor = '#00f2fe';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 242, 254, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 242, 254, 0.04)';
                  e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                  <i className="ri-building-2-fill" style={{ color: 'var(--text-sky-bright)', fontSize: '1.5rem', marginTop: '0.1rem' }}></i>
                  <div>
                    <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.3rem', fontSize: '1.1rem' }}>
                      RELIANCE SMSL LIMITED
                    </strong>
                    <span style={{ color: 'var(--text-sky-bright)', fontWeight: 700, fontSize: '1.05rem', display: 'block', lineHeight: 1.4 }}>
                      Puravankara, Vivekananda Nagar, Thoraipakkam,
                    </span>
                    <span style={{ color: '#ffffff', fontWeight: 600 }}>
                      Chennai, Tamil Nadu - 600097, India.
                    </span>
                    <div style={{ marginTop: '0.5rem', color: '#fbbf24', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <i className="ri-external-link-line"></i> Click here to open GPS Location in Google Maps
                    </div>
                  </div>
                </div>
              </a>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-sky-light)', fontSize: '0.95rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <i className="ri-compass-3-fill" style={{ color: 'var(--accent-amber)', fontSize: '1.3rem' }}></i>
                  <div>
                    <strong style={{ color: '#ffffff' }}>Landmark:</strong> Puravankara Complex, Vivekananda Nagar, Thoraipakkam.
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                  <i className="ri-phone-fill" style={{ color: '#10b981', fontSize: '1.4rem', marginTop: '0.2rem' }}></i>
                  <div>
                    <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.3rem' }}>Direct Phone / WhatsApp:</strong>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      <a href="tel:+919442462967" style={{ color: 'var(--text-sky-bright)', textDecoration: 'none', fontWeight: 700 }}>
                        +91 94424 62967
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <i className="ri-mail-open-fill" style={{ color: 'var(--text-sky-bright)', fontSize: '1.3rem' }}></i>
                  <div>
                    <strong style={{ color: '#ffffff' }}>Official Email:</strong>{' '}
                    <a href="mailto:TRIOVEXA@gmail.com" style={{ color: '#fbbf24', textDecoration: 'none', fontWeight: 700 }}>
                      TRIOVEXA@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Navigation Buttons */}
              <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=RELIANCE+SMSL+LIMITED+Puravankara+Vivekananda+Nagar+Thoraipakkam+Chennai+Tamil+Nadu+600097"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sky"
                  style={{ padding: '0.6rem 1.2rem', fontSize: '0.88rem', whiteSpace: 'nowrap' }}
                >
                  <i className="ri-map-pin-2-fill"></i> Open in Google Maps
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=RELIANCE+SMSL+LIMITED+Puravankara+Vivekananda+Nagar+Thoraipakkam+Chennai+Tamil+Nadu+600097"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-sky"
                  style={{ padding: '0.6rem 1.2rem', fontSize: '0.88rem', whiteSpace: 'nowrap' }}
                >
                  <i className="ri-navigation-fill"></i> Get Directions
                </a>
              </div>
            </div>

            {/* Embedded Live Google Maps Iframe */}
            <div className="glass-card" style={{ background: 'rgba(7, 13, 25, 0.9)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-glow)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <h4 style={{ color: 'var(--text-sky-bright)', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                  <i className="ri-map-2-line"></i> Live Location Map
                </h4>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=RELIANCE+SMSL+LIMITED+Puravankara+Vivekananda+Nagar+Thoraipakkam+Chennai+Tamil+Nadu+600097"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#fbbf24', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none' }}
                >
                  View Large Map <i className="ri-arrow-right-up-line"></i>
                </a>
              </div>

              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-glass)' }}>
                <iframe
                  title="RELIANCE SMSL LIMITED Thoraipakkam Office Location"
                  src="https://maps.google.com/maps?q=RELIANCE+SMSL+LIMITED,+Puravankara,+Vivekananda+Nagar,+Thoraipakkam,+Chennai,+Tamil+Nadu+600097&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div style={{ marginTop: '1rem' }}>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, '#contact')}
                  className="btn btn-sky"
                  style={{ width: '100%', justifyContent: 'center', padding: '0.55rem 1rem', fontSize: '0.85rem' }}
                >
                  <i className="ri-whatsapp-line"></i>
                  <span>Schedule Office Meeting</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
