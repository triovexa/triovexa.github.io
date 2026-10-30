import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function InsightModal({ insight, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !insight) return null;

  return (
    <div className="insight-modal-overlay" onClick={onClose}>
      <div
        className="insight-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          className="insight-modal-close"
          onClick={onClose}
          aria-label="Close insight reader"
        >
          <i className="ri-close-line"></i>
        </button>

        {/* Modal Header & Banner */}
        <div className="insight-modal-banner">
          <img
            src={insight.image}
            alt={insight.title}
            className="insight-modal-banner-img"
          />
          <div className="insight-modal-banner-overlay"></div>
          <div className="insight-modal-banner-content">
            <span
              className="insight-modal-cat-badge"
              style={{
                borderColor: insight.categoryColor,
                color: insight.categoryColor,
                background: `rgba(${
                  insight.categoryColor === '#00f2fe'
                    ? '0, 242, 254, 0.12'
                    : insight.categoryColor === '#10b981'
                    ? '16, 185, 129, 0.12'
                    : '129, 140, 248, 0.12'
                })`,
              }}
            >
              {insight.category}
            </span>
            <h2 className="insight-modal-title">{insight.title}</h2>
            <div className="insight-modal-meta">
              <span>
                <i className="ri-time-line"></i> {insight.readTime}
              </span>
              <span>•</span>
              <span>
                <i className="ri-calendar-line"></i> {insight.date}
              </span>
              <span>•</span>
              <span>
                <i className="ri-user-star-line"></i> {insight.author}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="insight-modal-body">
          {/* Key Impact Metrics Grid */}
          <div className="insight-metrics-grid">
            {insight.metrics.map((metric, idx) => (
              <div key={idx} className="insight-metric-card">
                <span className="insight-metric-val">{metric.value}</span>
                <span className="insight-metric-lbl">{metric.label}</span>
              </div>
            ))}
          </div>

          {/* Executive Overview */}
          <div className="insight-section">
            <h4 className="insight-section-heading">
              <i className="ri-file-text-line"></i> Executive Summary
            </h4>
            <p className="insight-summary-text">{insight.summary}</p>
          </div>

          {/* Challenges vs Solution Columns */}
          <div className="insight-two-col-grid">
            <div className="insight-callout-card challenge-card">
              <h5 className="insight-callout-title">
                <i className="ri-error-warning-line"></i> The Industry Challenge
              </h5>
              <ul className="insight-callout-list">
                {insight.challenges.map((c, i) => (
                  <li key={i}>
                    <i className="ri-close-circle-line"></i>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="insight-callout-card solution-card">
              <h5 className="insight-callout-title">
                <i className="ri-checkbox-circle-line"></i> TRIOVEXA's Engineered Solution
              </h5>
              <ul className="insight-callout-list">
                {insight.solutions.map((s, i) => (
                  <li key={i}>
                    <i className="ri-check-line"></i>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack Deployed */}
          <div className="insight-section" style={{ marginTop: '1.5rem' }}>
            <h4 className="insight-section-heading">
              <i className="ri-cpu-line"></i> Production Tech Stack Deployed
            </h4>
            <div className="insight-tech-tags">
              {insight.techStack.map((tech, i) => (
                <span key={i} className="insight-tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Call to Action Footer Box */}
          <div className="insight-modal-cta-box">
            <div className="insight-modal-cta-text">
              <h4>Ready to build a similar architecture for your enterprise?</h4>
              <p>
                Our technical architects at TRIOVEXA engineer tailored software solutions for high reliability and scale.
              </p>
            </div>
            <div className="insight-modal-cta-actions">
              <Link
                to="/enquiry"
                onClick={onClose}
                className="btn btn-sky"
              >
                <span>Request Architecture Review</span>
                <i className="ri-arrow-right-line"></i>
              </Link>
              <a
                href="tel:+919442462967"
                className="btn btn-outline-sky"
              >
                <i className="ri-phone-line"></i>
                <span>+91 94424 62967</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
