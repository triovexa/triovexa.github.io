import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition and scroll to top smoothly
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Navigation Links (Enquiry is the dedicated CTA button)
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products & Projects', path: '/products-projects' },
    { name: 'About Us', path: '/about' },
    { name: 'Achievements', path: '/achievements' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="main-header">
      {/* Top Contact & Social Bar (Inspired by Corporate Enterprise Layout) */}
      <div className="header-top-bar">
        <div className="container header-top-container">
          <div className="header-top-left">
            <a href="tel:+919500657733" className="top-info-link" title="Call Us Directly">
              <span className="top-info-icon phone-icon">
                <i className="ri-phone-fill"></i>
              </span>
              <span>+91 95006 57733</span>
            </a>
            <a href="mailto:triovexa@gmail.com" className="top-info-link" title="Send Official Email">
              <span className="top-info-icon mail-icon">
                <i className="ri-mail-fill"></i>
              </span>
              <span>triovexa@gmail.com</span>
            </a>
          </div>

          <div className="header-top-right">
            <a
              href="https://wa.me/919500657733"
              target="_blank"
              rel="noopener noreferrer"
              className="top-social-icon"
              aria-label="WhatsApp"
              title="Chat on WhatsApp"
            >
              <i className="ri-whatsapp-fill"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="top-social-icon"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="top-social-icon"
              aria-label="Instagram"
              title="Instagram"
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="top-social-icon"
              aria-label="Twitter"
              title="Twitter"
            >
              <i className="ri-twitter-x-fill"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="top-social-icon"
              aria-label="YouTube"
              title="YouTube"
            >
              <i className="ri-youtube-fill"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="header-main-nav">
        <div className="container">
          <nav className="nav-wrapper">
            <Link to="/" className="logo">
              <div className="brand-logo-pod">
                <img
                  src="/assets/images/triovexa-emblem-electric.png"
                  alt="TRIOVEXA Official Logo"
                  className="brand-logo-img"
                />
              </div>
              <div className="brand-text-col">
                <div className="brand-name">
                  <span className="gradient-sky-text">TRIO</span>VEX<span style={{ color: 'var(--text-sky-bright)' }}>A</span>
                </div>
                <div className="brand-sub">INNOVATE. INTEGRATE. ELEVATE.</div>
              </div>
            </Link>

            {/* Desktop Navigation Menu with Clean Active Underline */}
            <ul className="nav-menu">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              {/* Clean Outlined Enquiry Button */}
              <Link to="/contact" className="btn-enquiry desktop-cta-btn">
                <span>Enquiry</span>
                <i className="ri-arrow-right-s-line" style={{ fontSize: '1.2rem', marginLeft: '2px' }}></i>
              </Link>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                className="mobile-nav-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                <i className={mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
              </button>
            </div>
          </nav>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="mobile-nav-dropdown">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="btn-enquiry"
                style={{ width: '100%', marginTop: '0.75rem', justifyContent: 'center' }}
              >
                <span>Enquiry</span>
                <i className="ri-arrow-right-s-line"></i>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
