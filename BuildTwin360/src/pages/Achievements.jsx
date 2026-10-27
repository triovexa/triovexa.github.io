import React from 'react';
import { Link } from 'react-router-dom';

export default function Achievements() {
  const kpis = [
    {
      value: '200+',
      title: 'Projects Delivered',
      sub: 'Web, Mobile, ERP & BI Solutions',
      trend: 'Verified Deliveries',
      icon: 'ri-rocket-line',
    },
    {
      value: '50+',
      title: 'Happy Clients',
      sub: 'Growing enterprises & businesses',
      trend: 'Long-Term Partners',
      icon: 'ri-user-smile-line',
    },
    {
      value: '100%',
      title: 'Client Satisfaction',
      sub: 'Strict milestone & quality compliance',
      trend: 'Top Standard',
      icon: 'ri-trophy-line',
    },
    {
      value: '24/7',
      title: 'Support After Delivery',
      sub: 'Dedicated bug fixes & updates',
      trend: 'Continuous Care',
      icon: 'ri-customer-service-2-line',
    },
  ];

  const industryBreakdown = [
    { name: 'Transport & Logistics', icon: 'ri-truck-line', metric: 'Fleet GPS & Dispatch Systems' },
    { name: 'Healthcare & Clinics', icon: 'ri-heart-pulse-line', metric: 'Patient & Clinic Management' },
    { name: 'Education & Academies', icon: 'ri-graduation-cap-line', metric: 'Student & Learning Portals' },
    { name: 'Retail & Supermarkets', icon: 'ri-store-2-line', metric: 'Barcode POS & E-Commerce' },
    { name: 'Finance & Accounts', icon: 'ri-money-dollar-circle-line', metric: 'Invoicing & Tax Ledgers' },
    { name: 'Manufacturing & Plants', icon: 'ri-building-4-line', metric: 'Complete ERP & Production' },
  ];

  return (
    <div className="achievements-page-view" style={{ paddingTop: '8.5rem' }}>
      {/* Header Section */}
      <section style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <i className="ri-medal-line"></i> Proven Track Record
            </span>
            <h2>
              Our Achievements <span className="gradient-sky-text">& Milestones</span>
            </h2>
            <p>
              "Whatever you build with TRIOVEXA, your business is built to grow beyond expectations."
            </p>
          </div>

          {/* 4 Official Stats Cards */}
          <div className="dashboard-grid">
            {kpis.map((kpi, idx) => (
              <div key={idx} className="kpi-card-pro">
                <div className="kpi-top-row">
                  <div className="kpi-icon-wrapper">
                    <i className={kpi.icon}></i>
                  </div>
                  <span className="kpi-trend-tag">{kpi.trend}</span>
                </div>
                <div className="kpi-val-large">{kpi.value}</div>
                <div className="kpi-title-pro">{kpi.title}</div>
                <div className="kpi-sub-pro">{kpi.sub}</div>
              </div>
            ))}
          </div>

          {/* Corporate Building Showcase & Key Delivery Guarantees */}
          <div
            className="dashboard-analytics-wrapper"
            style={{
              marginTop: '3.5rem',
              background: 'rgba(13, 27, 54, 0.85)',
              border: '2px solid var(--border-glow)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
            }}
          >
            <div>
              <span className="portfolio-tag">Enterprise Guarantee</span>
              <h3 style={{ fontSize: '1.9rem', color: '#fff', marginTop: '0.4rem', marginBottom: '0.8rem' }}>
                Building Smarter Businesses for a Better Tomorrow
              </h3>
              <p style={{ color: 'var(--text-sky-light)', fontSize: '0.98rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                At TRIOVEXA, each project is backed by clean & scalable code, industry-level standards, on-time delivery commitments, and responsive technical support after go-live.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#fff', fontWeight: 600 }}>
                  <i className="ri-checkbox-circle-fill" style={{ color: 'var(--accent-emerald)', fontSize: '1.2rem' }}></i>
                  <span>200+ Projects Successfully Deployed & Scaled</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#fff', fontWeight: 600 }}>
                  <i className="ri-checkbox-circle-fill" style={{ color: 'var(--accent-emerald)', fontSize: '1.2rem' }}></i>
                  <span>50+ Long-Term Active Business Clients</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#fff', fontWeight: 600 }}>
                  <i className="ri-checkbox-circle-fill" style={{ color: 'var(--accent-emerald)', fontSize: '1.2rem' }}></i>
                  <span>100% Client Satisfaction with Zero Technical Compromise</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#fff', fontWeight: 600 }}>
                  <i className="ri-checkbox-circle-fill" style={{ color: 'var(--accent-emerald)', fontSize: '1.2rem' }}></i>
                  <span>Continuous Bug Fixes, Updates & Maintenance Support</span>
                </div>
              </div>
            </div>

            <div>
              <div className="dashboard-graphic-frame">
                <div className="dashboard-window-bar">
                  <div className="window-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#bae6fd', fontWeight: 600 }}>
                    TRIOVEXA PROJECT RECORD
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span className="status-dot"></span> LIVE
                  </div>
                </div>
                <img
                  src="/assets/images/success-dashboard.jpg"
                  alt="TRIOVEXA Verified Project Telemetry"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served Highlights */}
      <section style={{ padding: '2rem 0 6rem 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Industry Reach</span>
            <h2>Proven Expertise Across Industries</h2>
            <p>Our solutions actively power operations across critical sectors.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {industryBreakdown.map((ind, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '1.75rem', textAlign: 'center' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'rgba(0, 242, 254, 0.1)',
                    border: '1px solid var(--border-glow)',
                    color: 'var(--accent-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.6rem',
                    margin: '0 auto 1.25rem auto',
                  }}
                >
                  <i className={ind.icon}></i>
                </div>
                <h4 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.4rem' }}>{ind.name}</h4>
                <p style={{ color: 'var(--text-sky-light)', fontSize: '0.88rem', margin: 0 }}>{ind.metric}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/contact" className="btn btn-sky" style={{ padding: '0.9rem 2.2rem' }}>
              <span>Build With TRIOVEXA (+91 95006 57733)</span>
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
