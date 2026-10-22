import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { insightsData } from '../data/insightsData';
import InsightModal from './InsightModal';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [selectedInsight, setSelectedInsight] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openInsight = (insight) => {
    setSelectedInsight(insight);
    setIsModalOpen(true);
  };

  const closeInsight = () => {
    setIsModalOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Giant Interactive TRIOVEXA Starting Heading (Exact Match with Reference) */}
        <div className="footer-interactive-brand-wrap">
          <div
            className="footer-interactive-letters"
            onClick={scrollToTop}
            title="TRIOVEXA — Click to scroll to top"
            role="button"
            tabIndex={0}
            aria-label="TRIOVEXA"
          >
            <span>T</span>
            <span>R</span>
            <span>I</span>
            <span>O</span>
            <span>V</span>
            <span>E</span>
            <span>X</span>
            <span>A</span>
          </div>
        </div>

        {/* Top Newsletter & Socials Bar (Matching User Reference Layout) */}
        <div className="footer-top-bar">
          {/* Brand Logo */}
          <Link to="/" onClick={scrollToTop} className="footer-brand-logo">
            <div className="brand-logo-pod">
              <img
                src="/assets/images/triovexa-emblem-electric.png"
                alt="TRIOVEXA"
                className="brand-logo-img"
              />
            </div>
            <div className="brand-text-col">
              <div className="brand-name">
                <span className="gradient-sky-text">TRIO</span>VEX<span style={{ color: 'var(--text-sky-bright)' }}>A</span>
              </div>
            </div>
          </Link>

          {/* Newsletter Subscription Box */}
          <div className="footer-newsletter-pod">
            <form onSubmit={handleSubscribe} className="footer-newsletter-form">
              <div className="newsletter-input-wrap">
                <i className="ri-mail-line"></i>
                <input
                  type="email"
                  placeholder="sample@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="newsletter-input-field"
                  aria-label="Email address for subscription"
                />
              </div>
              <button type="submit" className="newsletter-submit-btn">
                <span>Subscribe</span>
              </button>
            </form>
            {subscribed && (
              <div className="newsletter-success-toast">
                <i className="ri-checkbox-circle-fill"></i> Thank you for subscribing to TRIOVEXA!
              </div>
            )}
          </div>

          {/* Social Media Circular Links */}
          <div className="footer-social-row">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-circle"
              title="Facebook"
              aria-label="Facebook"
            >
              <i className="ri-facebook-fill"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-circle"
              title="Twitter / X"
              aria-label="Twitter"
            >
              <i className="ri-twitter-x-fill"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-circle"
              title="Instagram"
              aria-label="Instagram"
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-circle"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-circle"
              title="YouTube"
              aria-label="YouTube"
            >
              <i className="ri-youtube-fill"></i>
            </a>
          </div>
        </div>

        {/* Main 4-Column Footer Grid */}
        <div className="footer-main-grid">
          {/* Column 1: Contact Us */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <div className="footer-contact-items">
              <a href="tel:+919500657733" className="footer-contact-link">
                <div className="footer-icon-circle">
                  <i className="ri-phone-line"></i>
                </div>
                <span>+91 95006 57733</span>
              </a>

              <a href="mailto:triovexa@gmail.com" className="footer-contact-link">
                <div className="footer-icon-circle">
                  <i className="ri-mail-line"></i>
                </div>
                <span>triovexa@gmail.com</span>
              </a>

              <div className="footer-contact-link">
                <div className="footer-icon-circle">
                  <i className="ri-map-pin-line"></i>
                </div>
                <span>Tirupur & Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Column 2: Site Map */}
          <div className="footer-col">
            <h4 className="footer-col-title">Site Map</h4>
            <ul className="footer-nav-list">
              <li>
                <Link to="/about" onClick={scrollToTop}>
                  Our Vision & Mission
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop}>
                  Our Engineering Team
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop}>
                  Why Partner with Us
                </Link>
              </li>
              <li>
                <Link to="/achievements" onClick={scrollToTop}>
                  Media & Testimonials
                </Link>
              </li>
              <li>
                <a href="/assets/images/company-poster.jpg" target="_blank" rel="noopener noreferrer">
                  Download Brochure
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-nav-list">
              <li>
                <Link to="/" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop}>
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/products-projects" onClick={scrollToTop}>
                  Products & Projects
                </Link>
              </li>
              <li>
                <Link to="/achievements" onClick={scrollToTop}>
                  Achievements
                </Link>
              </li>
              <li>
                <Link to="/enquiry" onClick={scrollToTop}>
                  Enquiry Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Blogs / Featured Insights */}
          <div className="footer-col">
            <div className="footer-col-header-row">
              <h4 className="footer-col-title">Featured Insights</h4>
              <span className="footer-col-badge">
                <span className="live-dot-pulse"></span> Case Studies
              </span>
            </div>

            <div className="footer-insights-list">
              {insightsData.slice(0, 2).map((item) => (
                <div
                  key={item.id}
                  onClick={() => openInsight(item)}
                  className="footer-insight-card"
                  role="button"
                  tabIndex={0}
                  title={`Read: ${item.title}`}
                >
                  <div className="footer-insight-thumb-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="footer-insight-thumb"
                    />
                  </div>
                  <div className="footer-insight-body">
                    <div className="footer-insight-meta">
                      <span
                        className="footer-insight-badge"
                        style={{
                          borderColor: item.categoryColor,
                          color: item.categoryColor,
                          background: `rgba(${item.categoryColor === '#00f2fe' ? '0, 242, 254, 0.12' : '16, 185, 129, 0.12'})`,
                        }}
                      >
                        {item.category.split(' ')[0]}
                      </span>
                      <span>•</span>
                      <span>
                        <i className="ri-time-line"></i> {item.readTime}
                      </span>
                    </div>
                    <h5 className="footer-insight-title">
                      {item.title}
                    </h5>
                    <span className="footer-insight-action">
                      <span>Read Study</span>
                      <i className="ri-arrow-right-up-line"></i>
                    </span>
                  </div>
                </div>
              ))}

              <div className="footer-insights-footer-action">
                <button
                  type="button"
                  onClick={() => openInsight(insightsData[2] || insightsData[0])}
                  className="footer-insights-all-btn"
                >
                  <span>Explore All Case Studies & Research</span>
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Powered-by Bar */}
        <div className="footer-bottom-row">
          <div className="copyright-text">
            Copyright &copy; {new Date().getFullYear()} <strong>TRIOVEXA Software Solutions</strong> | All Rights Reserved
          </div>
          <div className="powered-by-brand">
            <span>Powered by</span>
            <div className="powered-logo-pod">
              <img
                src="/assets/images/triovexa-emblem-electric.png"
                alt="TRIOVEXA"
                className="powered-logo-img"
              />
              <span className="gradient-sky-text" style={{ fontWeight: 800, fontSize: '0.9rem' }}>TRIOVEXA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons (Direct Call & Scroll to Top - Matching Screenshot) */}
      <div className="floating-actions-container">
        <a
          href="tel:+919500657733"
          className="floating-action-btn floating-call-btn"
          title="Direct Phone Call (+91 95006 57733)"
          aria-label="Direct Phone Call"
        >
          <i className="ri-phone-fill"></i>
        </a>
        <button
          onClick={scrollToTop}
          className="floating-action-btn floating-top-btn"
          title="Back to Top"
          aria-label="Back to Top"
        >
          <i className="ri-arrow-up-s-line"></i>
        </button>
      </div>

      {/* Full Interactive Whitepaper / Case Study Reader Modal */}
      <InsightModal
        insight={selectedInsight}
        isOpen={isModalOpen}
        onClose={closeInsight}
      />
    </footer>
  );
}
