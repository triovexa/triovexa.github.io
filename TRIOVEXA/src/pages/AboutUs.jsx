import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  const whyChooseUs = [
    { title: 'Experienced Developers', icon: 'ri-user-star-line', desc: 'Skilled developers bringing industry-proven architectural precision.' },
    { title: 'Industry-Level Standards', icon: 'ri-shield-star-line', desc: 'Enterprise-grade quality control, security, and coding compliance.' },
    { title: 'Clean & Scalable Code', icon: 'ri-code-box-line', desc: 'Maintainable, modular codebases designed to handle growing scale.' },
    { title: 'Affordable Pricing', icon: 'ri-wallet-3-line', desc: 'Maximum ROI with transparent, accessible pricing structures.' },
    { title: 'On-Time Delivery', icon: 'ri-time-line', desc: 'Predictable sprint timelines with zero delays in milestone launches.' },
    { title: 'Dedicated Support', icon: 'ri-customer-service-2-line', desc: 'Continuous communication, swift bug fixes, and operational assistance.' },
    { title: 'Customized Solutions', icon: 'ri-tools-line', desc: 'Every build conforms precisely to your unique business workflow.' },
  ];

  const technologies = [
    { name: 'Java', icon: 'ri-cup-line' },
    { name: 'Spring Boot', icon: 'ri-leaf-line' },
    { name: 'React', icon: 'ri-reactjs-line' },
    { name: 'Node.js', icon: 'ri-nodejs-line' },
    { name: 'Python', icon: 'ri-terminal-box-line' },
    { name: 'Power BI', icon: 'ri-bar-chart-2-line' },
    { name: 'MySQL', icon: 'ri-database-2-line' },
    { name: 'PostgreSQL', icon: 'ri-server-line' },
    { name: 'MongoDB', icon: 'ri-hard-drive-2-line' },
    { name: 'AWS', icon: 'ri-cloud-line' },
    { name: 'Docker', icon: 'ri-inbox-archive-line' },
    { name: 'Firebase', icon: 'ri-fire-line' },
    { name: 'HTML5 & CSS3', icon: 'ri-html5-line' },
    { name: 'JavaScript', icon: 'ri-javascript-line' },
    { name: 'Linux', icon: 'ri-computer-line' },
    { name: 'Git', icon: 'ri-git-branch-line' },
    { name: 'Postman', icon: 'ri-send-plane-2-line' },
  ];

  const industries = [
    'Transport', 'Healthcare', 'Education', 'Retail', 'Finance', 'Manufacturing'
  ];

  return (
    <div className="about-page-view" style={{ paddingTop: '8.5rem' }}>
      {/* Header Section */}
      <section style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <i className="ri-team-line"></i> About Us
            </span>
            <h2>
              About <span className="gradient-sky-text">TRIOVEXA</span>
            </h2>
            <p>
              "Whatever you build with TRIOVEXA, your business is built to grow beyond expectations."
            </p>
          </div>

          {/* Main Story & Corporate Building Showcase */}
          <div
            className="who-we-are-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr 1fr',
              gap: '4rem',
              alignItems: 'center',
              marginBottom: '5rem',
            }}
          >
            <div>
              <div
                style={{
                  color: 'var(--text-sky-bright)',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  letterSpacing: '1px',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                }}
              >
                Innovate. Integrate. Elevate.
              </div>

              <h3 style={{ fontSize: '2.1rem', color: '#fff', marginBottom: '1.25rem', lineHeight: '1.3' }}>
                Building Smarter Businesses for a Better Tomorrow
              </h3>

              <p style={{ color: 'var(--text-main)', fontSize: '1.02rem', lineHeight: '1.8', marginBottom: '1.25rem' }}>
                At <strong>TRIOVEXA</strong>, we are committed to empowering organizations through innovative, integrated, and elevated software solutions. We design and deliver modern websites, secure e-commerce systems, high-throughput web applications, and comprehensive ERP & HRMS software suites that streamline complex operations.
              </p>

              <p style={{ color: 'var(--text-sky-light)', fontSize: '0.96rem', lineHeight: '1.8', marginBottom: '1.25rem' }}>
                Our engineering capabilities include custom Power BI dashboards, AI & Machine Learning automation, mobile apps for iOS and Android, reliable cloud DevOps hosting, and RESTful API integrations built with clean, scalable code.
              </p>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                Having successfully delivered 200+ projects for 50+ happy clients with 100% satisfaction, we take pride in offering dedicated, ongoing support after delivery to ensure continuous success.
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1.25rem',
                  marginTop: '1.5rem',
                }}
              >
                <div className="glass-card" style={{ padding: '1.25rem' }}>
                  <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-sky-bright)', marginBottom: '0.2rem' }}>
                    200+
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-sky-light)', fontWeight: 600 }}>
                    Projects Delivered
                  </div>
                </div>
                <div className="glass-card" style={{ padding: '1.25rem' }}>
                  <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent-emerald)', marginBottom: '0.2rem' }}>
                    50+
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-sky-light)', fontWeight: 600 }}>
                    Happy Clients
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Showcase Frame */}
            <div style={{ position: 'relative' }}>
              <div
                className="dashboard-graphic-frame"
                style={{
                  borderRadius: 'var(--radius-md)',
                  border: '2px solid var(--border-glow)',
                  boxShadow: 'var(--shadow-pro)',
                  background: 'var(--bg-ocean-navy)',
                  overflow: 'hidden',
                }}
              >
                <div className="dashboard-window-bar">
                  <div className="window-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#bae6fd', fontWeight: 600 }}>
                    TRIOVEXA HQ • INNOVATE. INTEGRATE. ELEVATE.
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span className="status-dot"></span> CERTIFIED
                  </div>
                </div>

                <img
                  src="/assets/images/happy-client-delivery.jpg"
                  alt="TRIOVEXA Client Delivery & Team"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              {/* Floating Badge */}
              <div className="floating-badge badge-bottom-right">
                <div className="badge-icon" style={{ background: 'var(--accent-emerald)', color: '#070d19' }}>
                  <i className="ri-customer-service-2-fill"></i>
                </div>
                <div>
                  <div className="badge-text-title">100% Satisfaction</div>
                  <div className="badge-text-sub" style={{ color: 'var(--accent-emerald)' }}>Support After Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us (7 Pillars From Brochure) */}
      <section style={{ padding: '4rem 0', background: 'rgba(11, 23, 46, 0.4)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Value Proposition</span>
            <h2>Why Choose Us?</h2>
            <p>The core qualities that make TRIOVEXA the ideal software partner for growing enterprises.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {whyChooseUs.map((val, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '2rem 1.75rem' }}>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(0, 242, 254, 0.1)',
                    border: '1px solid var(--border-glow)',
                    color: 'var(--accent-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    marginBottom: '1rem',
                  }}
                >
                  <i className={val.icon}></i>
                </div>
                <h4 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>{val.title}</h4>
                <p style={{ color: 'var(--text-sky-light)', fontSize: '0.92rem', lineHeight: '1.65', margin: 0 }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Work With */}
      <section style={{ padding: '4.5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Technical Depth</span>
            <h2>Technologies We Work With</h2>
            <p>Industry-standard languages, enterprise frameworks, databases, and DevOps tools.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  textAlign: 'center',
                  padding: '1.4rem 1rem',
                }}
              >
                <div style={{ fontSize: '1.6rem', color: 'var(--accent-cyan)', marginBottom: '0.4rem' }}>
                  <i className={tech.icon}></i>
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section style={{ padding: '0 0 5rem 0' }}>
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: '3rem',
              textAlign: 'center',
              border: '2px solid var(--border-glow)',
            }}
          >
            <span className="section-tag">Industries We Serve</span>
            <h3 style={{ fontSize: '2rem', color: '#fff', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
              Transport • Healthcare • Education • Retail • Finance • Manufacturing
            </h3>
            <p style={{ color: 'var(--text-sky-light)', maxWidth: '650px', margin: '0 auto 2rem auto', fontSize: '1rem', lineHeight: '1.7' }}>
              Whatever your industry or scale, our customized software solutions are built to grow beyond your expectations.
            </p>
            <Link to="/contact" className="btn btn-sky" style={{ padding: '0.9rem 2.2rem' }}>
              <span>Contact TRIOVEXA (+91 95006 57733)</span>
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
