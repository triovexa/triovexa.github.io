import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductsProjects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Products & Projects' },
    { id: 'erp', label: 'ERP & HRMS Solutions' },
    { id: 'web', label: 'Web Applications & E-Commerce' },
    { id: 'mobile', label: 'Mobile Apps (iOS & Android)' },
    { id: 'bi', label: 'Power BI & AI/ML' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Triovexa Enterprise ERP & HRMS Suite',
      category: 'erp',
      categoryLabel: 'ERP & HRMS Solutions',
      image: '/assets/images/pro-dashboard.jpg',
      desc: 'Complete ERP & HRMS software for smart enterprise management. Features automated employee payroll, attendance tracking, shift scheduling, and financial ledgers.',
      impact: 'Eliminated manual payroll overhead and unified multi-department management',
      tags: ['Spring Boot', 'React', 'PostgreSQL', 'HRMS'],
      status: 'Live Production',
    },
    {
      id: 2,
      title: 'Transport Logistics & Fleet Dispatch Mobile App',
      category: 'mobile',
      categoryLabel: 'Mobile App Development',
      image: '/assets/images/transport-app.jpg',
      desc: 'High-performing Android & iOS application for fleet operators. Real-time GPS location telemetry, digital consignment LR, diesel expense logs, and WhatsApp updates.',
      impact: 'Over 850+ fleet transport vehicles monitored with sub-second GPS refresh',
      tags: ['React Native', 'Node.js', 'Firebase', 'GPS Telemetry'],
      status: 'Active Deployment',
    },
    {
      id: 3,
      title: 'Enterprise Power BI Business Intelligence Dashboard',
      category: 'bi',
      categoryLabel: 'Dashboards & BI',
      image: '/assets/images/success-dashboard.jpg',
      desc: 'Power BI dashboards providing executive leadership with actionable real-time business intelligence, revenue forecasting, inventory velocity, and profitability heatmaps.',
      impact: 'Empowers CXOs with 360-degree automated operational intelligence',
      tags: ['Power BI', 'Python', 'SQL Analytics', 'Automated ETL'],
      status: 'Live Production',
    },
    {
      id: 4,
      title: 'OmniStore E-Commerce & Retail POS Platform',
      category: 'web',
      categoryLabel: 'E-Commerce Solutions',
      image: '/assets/images/sky-wave-bg.jpg',
      desc: 'Secure & feature-rich e-commerce store paired with lightning-fast retail barcode billing, integrated payment gateways, customer loyalty, and multi-branch inventory.',
      impact: 'Sub-2-second checkout speed with seamless online-to-offline stock sync',
      tags: ['React', 'Node.js', 'MongoDB', 'Payment Gateway'],
      status: 'Live Operations',
    },
    {
      id: 5,
      title: 'Intelligent AI/ML Automated Document & Quality Classifier',
      category: 'bi',
      categoryLabel: 'AI & Machine Learning',
      image: '/assets/images/portfolio-1.jpg',
      desc: 'Machine learning model trained for automated document categorization, optical character recognition (OCR), and production quality defect detection.',
      impact: '99.4% classification accuracy across high-volume industrial records',
      tags: ['Python', 'Docker', 'AI / ML', 'RESTful API'],
      status: 'Active Deployment',
    },
    {
      id: 6,
      title: 'Modern Web Application & Client Portal',
      category: 'web',
      categoryLabel: 'Web Applications',
      image: '/assets/images/textile-erp.jpg',
      desc: 'Dynamic and scalable web application built with responsive UI/UX, role-based access control, real-time notifications, and high-throughput cloud architecture.',
      impact: 'Ultra-fast page loads with SEO optimization and 99.9% uptime SLA',
      tags: ['React', 'AWS', 'Docker', 'RESTful API'],
      status: 'Live Production',
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="products-projects-page" style={{ paddingTop: '8.5rem' }}>
      {/* Header Section */}
      <section style={{ paddingBottom: '2.5rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <i className="ri-folder-shield-2-line"></i> Project Portfolio
            </span>
            <h2>
              Our Products & <span className="gradient-sky-text">Featured Projects</span>
            </h2>
            <p>
              "Whatever you build with TRIOVEXA, your business is built to grow beyond expectations."
            </p>
          </div>

          {/* Filter Pills */}
          <div className="portfolio-filters">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="portfolio-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="glass-card portfolio-card">
                <div className="portfolio-img-wrapper">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'rgba(7, 13, 25, 0.88)',
                      border: '1px solid var(--border-glow)',
                      borderRadius: 'var(--radius-full)',
                      padding: '0.25rem 0.75rem',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--accent-emerald)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <span className="status-dot"></span>
                    <span>{project.status}</span>
                  </div>
                </div>

                <div className="portfolio-info" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <span className="portfolio-tag">{project.categoryLabel}</span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.65rem' }}>
                    {project.title}
                  </h3>

                  <p style={{ color: 'var(--text-sky-light)', fontSize: '0.92rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                    {project.desc}
                  </p>

                  <div
                    style={{
                      padding: '0.75rem 1rem',
                      background: 'rgba(0, 242, 254, 0.05)',
                      borderLeft: '3px solid var(--accent-cyan)',
                      borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                      marginBottom: '1.25rem',
                      fontSize: '0.85rem',
                      color: 'var(--text-main)',
                      fontWeight: 600,
                    }}
                  >
                    <i className="ri-pulse-line" style={{ color: 'var(--accent-cyan)', marginRight: '6px' }}></i>
                    {project.impact}
                  </div>

                  <div className="portfolio-tags" style={{ marginTop: 'auto', marginBottom: '1.25rem' }}>
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.74rem',
                          padding: '0.2rem 0.6rem',
                          borderRadius: 'var(--radius-sm)',
                          background: 'rgba(56, 189, 248, 0.1)',
                          color: 'var(--text-sky-light)',
                          fontWeight: 600,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="btn btn-outline-sky"
                    style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.9rem' }}
                  >
                    <span>Request Demo & Quote</span>
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Building Poster Showcase */}
      <section style={{ padding: '2rem 0 6rem 0' }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: '3rem',
              textAlign: 'center',
              border: '2px solid var(--border-glow)',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <span className="section-tag">Custom Software Engineering</span>
            <h2 style={{ fontSize: '2.3rem', color: '#fff', marginTop: '0.5rem', marginBottom: '0.8rem' }}>
              Building Smarter Businesses for a Better Tomorrow
            </h2>
            <p style={{ color: 'var(--text-sky-light)', maxWidth: '700px', margin: '0 auto 2rem auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
              From initial architecture to deployment and dedicated ongoing support, TRIOVEXA engineers custom software that scales with your growth.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-sky">
                <span>Contact +91 95006 57733</span>
                <i className="ri-arrow-right-line"></i>
              </Link>
              <Link to="/services" className="btn btn-outline-sky">
                <span>View All Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
