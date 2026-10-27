import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition and scroll to top smoothly
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Exact page names preserved - DO NOT CHANGE
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products & Projects', path: '/products-projects' },
    { name: 'About Us', path: '/about' },
    { name: 'Achievements', path: '/achievements' },
  ];

  return (
    <header className={`nexus-header-container ${isScrolled ? 'scrolled' : ''}`} id="main-header">
      <div className="nexus-pill-header">
        {/* Brand Logo - Yellow.ai Nexus exact style */}
        <Link to="/" className="nexus-brand" title="TRIOVEXA">
          <div className="nexus-logo-icon">
            <img
              src="/assets/images/triovexa-emblem-electric.png"
              alt="TRIOVEXA Logo"
              className="nexus-logo-img"
            />
          </div>
          <span className="nexus-brand-text">
            TRIOVEXA
          </span>
        </Link>

        {/* Center Desktop Navigation Menu */}
        <nav className="nexus-nav-menu">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) => `nexus-nav-link ${isActive ? 'active' : ''}`}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Action CTA Button (Exact Swipe Effect Enquiry Button) */}
        <div className="nexus-nav-actions">
          <Link to="/enquiry" className="enquiry-btn">
            <span className="btn-text">Enquiry</span>
            <span className="btn-icon">&gt;</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="nexus-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <i className={mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
          </button>
        </div>
      </div>

      {/* Mobile Floating Dropdown Card */}
      {mobileMenuOpen && (
        <div className="nexus-mobile-dropdown">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) => `nexus-mobile-link ${isActive ? 'active' : ''}`}
            >
              {link.name}
            </NavLink>
          ))}
          <div className="nexus-mobile-ctas">
            <Link
              to="/enquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="enquiry-btn"
              style={{ textAlign: 'center', width: '100%', justifyContent: 'center' }}
            >
              <span className="btn-text">Enquiry</span>
              <span className="btn-icon">&gt;</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
