import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  /* --------------------------------------------------------------------------
     Typewriter Effect (Cycling exact services from company brochure)
     -------------------------------------------------------------------------- */
  const phrases = [
    'Web Applications & Websites',
    'E-Commerce Solutions',
    'ERP & HRMS Solutions',
    'Power BI Dashboards & BI',
    'AI & Machine Learning Models',
    'Android & iOS Mobile Apps',
    'Cloud Deployment & DevOps',
    'Custom Software Solutions',
  ];

  const [typewriterText, setTypewriterText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [flippedCard, setFlippedCard] = useState(null);
  const [activeTechTab, setActiveTechTab] = useState('all');

  /* --------------------------------------------------------------------------
     Radiant Continuous Flow Engine: 4 Boxes continuously emerge/flow out
     from the center TRIOVEXA Core box and glide back in a continuous loop
     -------------------------------------------------------------------------- */
  const statCardsData = [
    {
      id: 1,
      themeColor: '#00f2fe',
      iconClass: 'ri-rocket-2-fill',
      number: '200+',
      label: 'Projects Delivered',
    },
    {
      id: 2,
      themeColor: '#00f2fe',
      iconClass: 'ri-team-fill',
      number: '50+',
      label: 'Happy Clients',
    },
    {
      id: 3,
      themeColor: '#00f2fe',
      iconClass: 'ri-trophy-fill',
      number: '100%',
      label: 'Client Satisfaction',
    },
    {
      id: 4,
      themeColor: '#00f2fe',
      iconClass: 'ri-customer-service-2-fill',
      number: '24/7',
      label: 'Support After Delivery',
    },
  ];

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timer = setTimeout(() => {
      if (isDeleting) {
        setTypewriterText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setTypewriterText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }, isDeleting ? 30 : 70);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  /* --------------------------------------------------------------------------
     Core Software Services (3D Vertical Flip Cards - Directly From Official Poster)
     -------------------------------------------------------------------------- */
  const strengths = [
    {
      id: 1,
      badge: 'Web Development',
      title: 'Web Applications & Websites',
      desc: 'Modern, responsive and SEO-friendly websites paired with dynamic, scalable web applications.',
      backTitle: 'Web Applications & Websites',
      backDesc: 'High-performance web applications and corporate websites engineered with clean, scalable code and modern responsive design.',
      tag: 'Modern • Responsive • SEO-Friendly',
      icon: <i className="ri-global-line" style={{ fontSize: '2.5rem' }}></i>,
    },
    {
      id: 2,
      badge: 'E-Commerce',
      title: 'E-Commerce Solutions',
      desc: 'Secure & feature-rich e-commerce platforms designed to accelerate your online business growth.',
      backTitle: 'Secure E-Commerce Platforms',
      backDesc: 'Feature-rich online stores equipped with seamless payment gateways, customer checkouts, product catalogs, and real-time inventory.',
      tag: 'Secure & Feature-Rich Platforms',
      icon: <i className="ri-shopping-cart-2-line" style={{ fontSize: '2.5rem' }}></i>,
    },
    {
      id: 3,
      badge: 'ERP & HRMS',
      title: 'ERP & HRMS Solutions',
      desc: 'Complete ERP, HRMS software suites engineered for smart enterprise operational management.',
      backTitle: 'Complete ERP & HRMS Systems',
      backDesc: 'Unified enterprise solutions automating employee payroll, biometric attendance, shift scheduling, inventory, and business workflows.',
      tag: 'Complete ERP • HRMS For Smart Management',
      icon: <i className="ri-user-shared-2-line" style={{ fontSize: '2.5rem' }}></i>,
    },
    {
      id: 4,
      badge: 'Mobile Apps',
      title: 'Mobile App Development',
      desc: 'Android & iOS apps that perform with seamless user experience and native performance.',
      backTitle: 'Android & iOS Mobile Apps',
      backDesc: 'High-performance native and cross-platform mobile applications crafted for smooth navigation, offline capability, and fluid UX.',
      tag: 'Android & iOS Apps That Perform',
      icon: <i className="ri-smartphone-line" style={{ fontSize: '2.5rem' }}></i>,
    },
  ];

  const industries = [
    {
      name: 'Transport & Logistics',
      icon: 'ri-truck-line',
      desc: 'AI fleet telemetry, real-time GPS tracking, and intelligent dispatch hubs.',
      image: '/assets/images/industries/transport.jpg',
    },
    {
      name: 'Travel & Tourism',
      icon: 'ri-compass-3-line',
      desc: 'Next-gen booking engines, dynamic itinerary planners, and global reservation portals.',
      image: '/assets/images/industries/travel.jpg',
    },
    {
      name: 'Textile & Apparel',
      icon: 'ri-t-shirt-air-line',
      desc: 'Smart factory ERP, automated loom telemetry, and end-to-end supply chain control.',
      image: '/assets/images/industries/textile.jpg',
    },
    {
      name: 'Manufacturing',
      icon: 'ri-settings-4-line',
      desc: 'Industry 4.0 IoT automation, digital twin telemetry, and robotic assembly management.',
      image: '/assets/images/industries/manufacturing.jpg',
    },
    {
      name: 'Healthcare',
      icon: 'ri-heart-pulse-line',
      desc: 'Next-gen telemedicine, diagnostic AI intelligence, and electronic health record systems.',
      image: '/assets/images/industries/healthcare.jpg',
    },
    {
      name: 'Education & E-Learning',
      icon: 'ri-graduation-cap-line',
      desc: 'Smart virtual campus suites, interactive LMS portals, and academic analytics engines.',
      image: '/assets/images/industries/education.jpg',
    },
    {
      name: 'Retail & E-Commerce',
      icon: 'ri-store-2-line',
      desc: 'Omnichannel cloud POS, autonomous warehouse fulfillment, and dynamic digital commerce.',
      image: '/assets/images/industries/retail.jpg',
    },
    {
      name: 'Finance & Banking',
      icon: 'ri-bank-card-line',
      desc: 'High-security fintech ledgers, algorithmic financial analytics, and instant transaction engines.',
      image: '/assets/images/industries/finance.jpg',
    },
  ];



  const techStackCards = [
    // Frontend & Mobile
    { name: 'React', category: 'frontend', iconType: 'class', icon: 'ri-reactjs-line', color: '#00d8ff' },
    { name: 'Next.js', category: 'frontend', iconType: 'class', icon: 'ri-window-line', color: '#111827' },
    { name: 'TypeScript', category: 'frontend', iconType: 'class', icon: 'ri-code-s-slash-line', color: '#3178c6' },
    { name: 'JavaScript', category: 'frontend', iconType: 'class', icon: 'ri-javascript-line', color: '#eab308' },
    { name: 'Flutter', category: 'frontend', iconType: 'class', icon: 'ri-flutter-line', color: '#02569b' },
    { name: 'Android', category: 'frontend', iconType: 'class', icon: 'ri-android-line', color: '#3ddc84' },
    { name: 'iOS App', category: 'frontend', iconType: 'class', icon: 'ri-apple-line', color: '#111827' },
    { name: 'HTML5 & CSS3', category: 'frontend', iconType: 'class', icon: 'ri-html5-line', color: '#e34f26' },

    // Backend & APIs
    { name: 'Node.js', category: 'backend', iconType: 'class', icon: 'ri-nodejs-line', color: '#539e43' },
    { name: 'Express.js', category: 'backend', iconType: 'class', icon: 'ri-server-line', color: '#374151' },
    { name: 'Java', category: 'backend', iconType: 'class', icon: 'ri-cup-line', color: '#e76f00' },
    { name: 'Spring Boot', category: 'backend', iconType: 'class', icon: 'ri-leaf-line', color: '#6cb52d' },
    { name: 'Python', category: 'backend', iconType: 'class', icon: 'ri-terminal-box-line', color: '#3776ab' },
    { name: 'RESTful APIs', category: 'backend', iconType: 'class', icon: 'ri-node-tree', color: '#009688' },

    // Cloud & Databases
    { name: 'AWS Cloud', category: 'cloud', iconType: 'class', icon: 'ri-cloud-line', color: '#ff9900' },
    { name: 'Docker', category: 'cloud', iconType: 'class', icon: 'ri-inbox-archive-line', color: '#2496ed' },
    { name: 'PostgreSQL', category: 'cloud', iconType: 'class', icon: 'ri-database-2-line', color: '#336791' },
    { name: 'MongoDB', category: 'cloud', iconType: 'class', icon: 'ri-hard-drive-2-line', color: '#13aa52' },
    { name: 'MySQL', category: 'cloud', iconType: 'class', icon: 'ri-database-line', color: '#00758f' },
    { name: 'Firebase', category: 'cloud', iconType: 'class', icon: 'ri-fire-line', color: '#ffa611' },
    { name: 'Linux', category: 'cloud', iconType: 'class', icon: 'ri-computer-line', color: '#f59e0b' },

    // AI & Analytics
    { name: 'Power BI', category: 'ai-tools', iconType: 'class', icon: 'ri-bar-chart-2-line', color: '#f2c811' },
    { name: 'AI & ML', category: 'ai-tools', iconType: 'class', icon: 'ri-brain-line', color: '#8b5cf6' },
    { name: 'Data Analytics', category: 'ai-tools', iconType: 'class', icon: 'ri-line-chart-line', color: '#06b6d4' },
    { name: 'Git & GitHub', category: 'ai-tools', iconType: 'class', icon: 'ri-git-branch-line', color: '#f05032' },
    { name: 'Postman', category: 'ai-tools', iconType: 'class', icon: 'ri-send-plane-2-line', color: '#ff6c37' },
  ];

  // Split filtered tech stack cards for dual-direction continuous marquee flow
  const filteredTechCards = activeTechTab === 'all'
    ? techStackCards
    : techStackCards.filter((item) => item.category === activeTechTab);

  // Helper to ensure enough cards for smooth continuous flow on wide screens
  const getPaddedCards = (cards) => {
    if (!cards.length) return [];
    let list = [...cards];
    while (list.length < 12) {
      list = [...list, ...cards];
    }
    return list;
  };

  const halfIndex = Math.ceil(filteredTechCards.length / 2);
  const rawRow1 = filteredTechCards.slice(0, halfIndex);
  const rawRow2 = filteredTechCards.slice(halfIndex);

  const row1Cards = getPaddedCards(rawRow1.length > 0 ? rawRow1 : filteredTechCards);
  const row2Cards = getPaddedCards(rawRow2.length > 0 ? rawRow2 : filteredTechCards.slice().reverse());

  return (
    <div className="home-page-view">
      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Software Solutions For <br />
              <span id="typewriter-target" className="typewriter-text">
                {typewriterText || 'Web Applications & Websites'}
              </span>
            </h1>

            <p className="hero-subtitle">
              Empowering enterprises and fast-growing businesses with custom software, scalable cloud architecture, mobile apps, and intelligent data systems built to scale.
            </p>



            {/* Radiant Continuous Flow Showcase: Central TRIOVEXA Core with Boxes Continuously Flowing In & Out */}
            <div className="stats-radiant-wrapper">
              {/* Glowing High-Tech Laser Beam Track with Continuous Energy Pulses */}
              <div className="stats-circuit-track" aria-hidden="true">
                <div className="circuit-laser-pulse-left"></div>
                <div className="circuit-laser-pulse-right"></div>
              </div>

              {/* Left Branch Group (Cards 1 & 2 - Flowing from Center to Left) */}
              <div className="stats-branch stats-branch-left">
                {statCardsData.slice(0, 2).map((card, idx) => {
                  const flowClass = idx === 0 ? 'stat-flow-left-outer' : 'stat-flow-left-inner';
                  return (
                    <div
                      key={card.id}
                      className={`stat-flow-card ${flowClass}`}
                      title={`${card.label} — Powered by TRIOVEXA`}
                    >
                      <div className="stat-card-surface">
                        <div className="stat-cyber-corner"></div>
                        <div className="stat-icon-badge stat-icon-cyan">
                          <i className={card.iconClass}></i>
                        </div>
                        <div className="stat-number-pro gradient-sky-text">
                          {card.number}
                        </div>
                        <div className="stat-label-pro">{card.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Center Glowing TRIOVEXA Core Engine Hub */}
              <div className="stats-center-hub">
                <div className="hub-pulse-halo"></div>
                <div className="hub-pulse-ring"></div>
                <Link
                  to="/about"
                  className="stats-triovexa-btn"
                  title="TRIOVEXA Core Engine - Learn More"
                >
                  <div className="hub-logo-pod">
                    <img
                      src="/assets/images/triovexa-emblem-electric.png"
                      alt="TRIOVEXA Core Engine"
                      className="hub-logo-img"
                    />
                  </div>
                  <div className="hub-text-stack">
                    <span className="hub-brand-name">TRIOVEXA</span>
                    <span className="hub-tagline">CORE ENGINE</span>
                  </div>
                  <div className="hub-active-dot"></div>
                  {/* Electric Sea-Blue Blinking Strip at Bottom of Button */}
                  <div className="hub-bottom-blink-strip" aria-hidden="true"></div>
                </Link>
                {/* Left & Right Outward Glowing Laser Beam Emitters */}
                <div className="hub-beam-emitter hub-beam-left"></div>
                <div className="hub-beam-emitter hub-beam-right"></div>
              </div>

              {/* Right Branch Group (Cards 3 & 4 - Flowing from Center to Right) */}
              <div className="stats-branch stats-branch-right">
                {statCardsData.slice(2, 4).map((card, idx) => {
                  const flowClass = idx === 0 ? 'stat-flow-right-inner' : 'stat-flow-right-outer';
                  return (
                    <div
                      key={card.id}
                      className={`stat-flow-card ${flowClass}`}
                      title={`${card.label} — Powered by TRIOVEXA`}
                    >
                      <div className="stat-card-surface">
                        <div className="stat-cyber-corner"></div>
                        <div className="stat-icon-badge stat-icon-cyan">
                          <i className={card.iconClass}></i>
                        </div>
                        <div className="stat-number-pro gradient-sky-text">
                          {card.number}
                        </div>
                        <div className="stat-label-pro">{card.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Who We Are Section with Cyber Glassmorphic Background */}
      <section className="who-we-are-section">
        {/* Background Ambient Glass Light Orbs */}
        <div className="who-we-are-ambient-orb orb-1" aria-hidden="true"></div>
        <div className="who-we-are-ambient-orb orb-2" aria-hidden="true"></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="home-section-header">
            <h2 className="home-section-title">
              Who <span className="gradient-sky-text">We Are</span>
            </h2>
            <div className="home-section-accent-line" aria-hidden="true"></div>
          </div>

          <div className="who-we-are-grid">
            {/* Left Column: Authentic Company Story */}
            <div>
              <h3 className="who-we-are-heading">
                Engineering Intelligent Software Solutions for Enterprise Growth
              </h3>

              <p style={{ color: 'var(--text-main)', fontSize: '1.02rem', lineHeight: '1.8', marginBottom: '1.2rem' }}>
                TRIOVEXA is a technology solutions company dedicated to <strong>Building Smarter Businesses for a Better Tomorrow</strong>. We engineer high-performance web applications, robust enterprise ERP & HRMS software, and custom digital platforms designed to drive operational efficiency and measurable business outcomes.
              </p>

              <p style={{ color: 'var(--text-sky-light)', fontSize: '0.96rem', lineHeight: '1.8', marginBottom: '1.8rem' }}>
                By pairing modern architectures with clean, scalable code, our engineering team ensures that every system we build is secure, resilient, and ready for long-term scale. From enterprise automation to business intelligence, we partner with clients every step of the way with dedicated post-delivery support.
              </p>

              {/* 4 Core Value Badges */}
              <div className="who-we-are-values-grid">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-main)', fontSize: '0.88rem', fontWeight: 600 }}>
                  <i className="ri-checkbox-circle-fill" style={{ color: 'var(--accent-cyan)', fontSize: '1.1rem' }}></i>
                  <span>Experienced Developers</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-main)', fontSize: '0.88rem', fontWeight: 600 }}>
                  <i className="ri-checkbox-circle-fill" style={{ color: 'var(--accent-cyan)', fontSize: '1.1rem' }}></i>
                  <span>Clean & Scalable Code</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-main)', fontSize: '0.88rem', fontWeight: 600 }}>
                  <i className="ri-checkbox-circle-fill" style={{ color: 'var(--accent-cyan)', fontSize: '1.1rem' }}></i>
                  <span>Industry-Level Standards</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-main)', fontSize: '0.88rem', fontWeight: 600 }}>
                  <i className="ri-checkbox-circle-fill" style={{ color: 'var(--accent-cyan)', fontSize: '1.1rem' }}></i>
                  <span>Dedicated Support</span>
                </div>
              </div>

              {/* Read More Action Button leading to /about */}
              <Link
                to="/about"
                className="btn btn-outline-sky"
                style={{
                  padding: '0.85rem 1.8rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span>Learn More About Us</span>
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>

            {/* Right Column: Glassmorphic Cyber Showcase for IT Software Team */}
            <div className="who-we-are-image-container">
              <div className="who-we-are-glass-underglow" aria-hidden="true"></div>

              <div className="who-we-are-glass-panel">
                <div className="who-we-are-image-frame">
                  <img
                    src="/assets/images/triovexa-who-we-are-team.jpg?v=7"
                    alt="TRIOVEXA IT Software Engineering Team Developing Smart Digital Solutions"
                    className="who-we-are-hero-img"
                    loading="lazy"
                  />
                  <div className="who-we-are-image-glow" aria-hidden="true"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section - 3D Vertical Flip Cards (Directly From Official Poster) */}
      <section className="strengths-section" id="services-overview">
        <div className="container">
          <div className="home-section-header">
            <h2 className="home-section-title">
              Our Core <span className="gradient-sky-text">Services</span>
            </h2>
            <div className="home-section-accent-line" aria-hidden="true"></div>
            <p className="home-section-subtitle">
              "Innovate. Integrate. Elevate." — Building Smarter Businesses for a Better Tomorrow.
            </p>
          </div>

          <div className="strengths-grid">
            {strengths.map((item, index) => (
              <div
                key={item.id}
                className={`flip-card ${flippedCard === index ? 'flipped' : ''}`}
                onClick={() => setFlippedCard((prev) => (prev === index ? null : index))}
                tabIndex={0}
                role="button"
                aria-label={`${item.title} card. Click or hover to flip.`}
              >
                <div className="flip-card-inner">
                  {/* Front of Card */}
                  <div className="flip-card-front">
                    <div className="icon">
                      {item.icon}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <div className="flip-hint-pill">
                      <i className="ri-arrow-up-down-line"></i> Hover to flip
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="flip-card-back">
                    <div className="back-badge">
                      <i className="ri-shield-star-line"></i> {item.badge}
                    </div>
                    <h3>{item.backTitle}</h3>
                    <p>{item.backDesc}</p>
                    <div className="card-back-tag">
                      <i className="ri-checkbox-circle-fill" style={{ fontSize: '0.9rem' }}></i>
                      <span>{item.tag}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/services" className="btn btn-sky">
              <span>Explore All Services</span>
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="industries-serve-section">
        <div className="container">
          <div className="home-section-header">
            <h2 className="home-section-title">
              Industries We <span className="gradient-sky-text">Serve</span>
            </h2>
            <div className="home-section-accent-line" aria-hidden="true"></div>
            <p className="home-section-subtitle">
              Specialized digital solutions engineered to address industry-specific business challenges.
            </p>
          </div>

          <div className="industries-serve-grid">
            {industries.map((ind, idx) => (
              <div key={idx} className="industry-serve-card">
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="industry-card-bg"
                  loading="lazy"
                />
                <div className="industry-card-overlay"></div>
                <div className="industry-card-content">
                  <div className="industry-card-icon">
                    <i className={ind.icon}></i>
                  </div>
                  <h3 className="industry-card-title">{ind.name}</h3>
                  <p className="industry-card-desc">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Technology Stack & Ecosystem Grid Showcase */}
      <section className="tech-stack-section" id="tech-stack">
        <div className="container">
          <div className="home-section-header">
            <h2 className="home-section-title">
              Our Technology <span className="gradient-sky-text">Stack</span>
            </h2>
            <div className="home-section-accent-line" aria-hidden="true"></div>
            <p className="home-section-subtitle">
              Enterprise engineering frameworks, mobile runtimes, cloud infrastructure, and intelligent data systems powering our solutions.
            </p>
          </div>

          <div className="ui-container">
            {/* Top Bar with 'Learn more' link and filter tabs */}
            <div className="tech-stack-top-bar">
              <div className="tech-filter-tabs">
                {[
                  { key: 'all', label: 'All Technologies' },
                  { key: 'frontend', label: 'Frontend & Mobile' },
                  { key: 'backend', label: 'Backend & APIs' },
                  { key: 'cloud', label: 'Cloud & Databases' },
                  { key: 'ai-tools', label: 'AI & Analytics' },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    className={`tech-tab-btn ${activeTechTab === tab.key ? 'active' : ''}`}
                    onClick={() => setActiveTechTab(tab.key)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Top 'Learn more' link matching user's spec */}
              <Link to="/about" className="learn-more">
                Learn more &rarr;
              </Link>
            </div>

            {/* Grid Wrapper with Fade Effect (CSS mask) & Infinite Continuous Flow */}
            <div className="grid-wrapper">
              {/* Row 1 - Smooth Flow to Left */}
              <div className="marquee-row">
                <div className="marquee-track marquee-left">
                  <div className="marquee-group">
                    {row1Cards.map((item, idx) => (
                      <div key={`r1-a-${idx}`} className="app-card" title={item.name}>
                        <div className="icon" style={{ color: item.color }}>
                          <i className={item.icon}></i>
                        </div>
                        <span className="app-name">{item.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="marquee-group" aria-hidden="true">
                    {row1Cards.map((item, idx) => (
                      <div key={`r1-b-${idx}`} className="app-card" title={item.name}>
                        <div className="icon" style={{ color: item.color }}>
                          <i className={item.icon}></i>
                        </div>
                        <span className="app-name">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 2 - Smooth Flow to Right */}
              <div className="marquee-row">
                <div className="marquee-track marquee-right">
                  <div className="marquee-group">
                    {row2Cards.map((item, idx) => (
                      <div key={`r2-a-${idx}`} className="app-card" title={item.name}>
                        <div className="icon" style={{ color: item.color }}>
                          <i className={item.icon}></i>
                        </div>
                        <span className="app-name">{item.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="marquee-group" aria-hidden="true">
                    {row2Cards.map((item, idx) => (
                      <div key={`r2-b-${idx}`} className="app-card" title={item.name}>
                        <div className="icon" style={{ color: item.color }}>
                          <i className={item.icon}></i>
                        </div>
                        <span className="app-name">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Interactive Instruction Pill */}
            <div className="tech-flow-indicator">
              <span className="flow-dot"></span>
              <span>Hover over any tech card to pause & explore</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Launch CTA Banner */}
      <section className="home-cta-section">
        <div className="container">
          <div className="home-cta-banner">
            <div className="home-cta-content">
              <span className="home-cta-tag">
                Start Your Project
              </span>
              <h2 className="home-cta-title">
                Ready to Build Smarter Software For Your Business?
              </h2>
              <p className="home-cta-desc">
                Partner with TRIOVEXA to engineer high-impact digital solutions designed for performance, security, and scale.
              </p>
            </div>

            <div className="home-cta-actions">
              <Link to="/enquiry" className="enquiry-btn home-cta-btn">
                <span className="btn-text">Enquiry</span>
                <span className="btn-icon">&gt;</span>
              </Link>
              <a
                href="tel:+919442462967"
                className="btn btn-outline-sky home-cta-btn"
                title="Call TRIOVEXA directly"
              >
                <i className="ri-phone-line"></i>
                <span>+91 94424 62967</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
