import React, { useState, useEffect } from 'react';

const growthMilestones = [
  {
    level: 'LEVEL 1',
    title: 'Strategy & Architecture Planning',
    desc: 'Deep requirement gathering, database schema architecture, and workflow blueprinting.',
    icon: 'ri-compass-3-fill',
    badge: 'PHASE 01',
    color: '#38bdf8'
  },
  {
    level: 'LEVEL 2',
    title: 'High-Speed Agile Software Builds',
    desc: 'Fast sprint development using React 19, Next.js, Node.js, and native mobile apps.',
    icon: 'ri-code-box-fill',
    badge: 'PHASE 02',
    color: '#00f2fe'
  },
  {
    level: 'LEVEL 3',
    title: 'Process & Automation Integration',
    desc: 'Textile dyeing batch recipe trackers, transport GPS telemetry, and thermal POS billing.',
    icon: 'ri-cpu-fill',
    badge: 'PHASE 03',
    color: '#fbbf24'
  },
  {
    level: 'LEVEL 4',
    title: 'Rigorous QA & Security Audit',
    desc: 'Zero-bug testing, stress load benchmarking, and SSL encryption verification.',
    icon: 'ri-shield-check-fill',
    badge: 'PHASE 04',
    color: '#10b981'
  },
  {
    level: 'LEVEL 5',
    title: 'Revenue Scaling & Cloud Deployment',
    desc: 'Deploying live production systems with 0% downtime and 24/7 SLA monitoring.',
    icon: 'ri-line-chart-fill',
    badge: 'PHASE 05',
    color: '#38bdf8'
  },
  {
    level: 'LEVEL 6',
    title: 'Target Goal & Market Leadership',
    desc: 'Achieving 100% client target goals, doubling operational throughput and revenue.',
    icon: 'ri-trophy-fill',
    badge: 'TARGET ACHIEVED 🎯',
    color: '#fbbf24'
  }
];

const clientSuccessCases = [
  {
    id: 1,
    name: 'Senthil Kumar',
    role: 'Managing Director, TexDye Mills',
    location: 'Tirupur & Coimbatore, Tamil Nadu',
    domain: '🧵 Textiles & Dyeing Mills',
    system: 'TexDye Mill ERP System',
    review: 'TRIOVEXA delivered a 100% custom textile ERP for our dyeing factory. Greige stock tracking, dyeing vessel batch recipe calculations, and GST billing work seamlessly!',
    metric: '34% Dyeing Waste Reduction',
    impact: '100% On-Time Production',
    rating: '5.0 / 5.0 ★★★★★',
    cardBg: 'linear-gradient(145deg, rgba(20, 15, 45, 0.95), rgba(124, 58, 237, 0.3))',
    borderGlow: '#c4b5fd',
    accentColor: '#c4b5fd',
    avatar: '👨‍💼'
  },
  {
    id: 2,
    name: 'Rajesh Sharma',
    role: 'Head of Fleet Operations, TransCargo',
    location: 'Chennai & Mumbai, India',
    domain: '🚚 Transport & Fleet Telemetry',
    system: 'FleetSync Logistics Platform',
    review: 'Real-time GPS vehicle tracking for 500+ trucks with automated driver route logs, trip fuel expense calculations, and e-way bill sync. Exceptional execution speed!',
    metric: '500+ Trucks Live Telemetry',
    impact: '99.8% Route Efficiency',
    rating: '4.9 / 5.0 ★★★★★',
    cardBg: 'linear-gradient(145deg, rgba(40, 35, 10, 0.95), rgba(234, 179, 8, 0.3))',
    borderGlow: '#eab308',
    accentColor: '#fef08a',
    avatar: '🧔‍♂️'
  },
  {
    id: 3,
    name: 'K. Murugan',
    role: 'Founder, Sri Murugan Tex Exports',
    location: 'Madurai & Karur, Tamil Nadu',
    domain: '👕 Garments Manufacturing',
    system: 'Garment Weaving & Cutting ERP',
    review: 'Raw yarn purchasing tallying, loom operator batch output tracking, and export packing lists are all fully automated by TRIOVEXA. Reduced order delays to zero!',
    metric: '10,000m Daily Fabric Tracked',
    impact: 'Zero Production Delays',
    rating: '4.8 / 5.0 ★★★★★',
    cardBg: 'linear-gradient(145deg, rgba(10, 35, 25, 0.95), rgba(16, 185, 129, 0.3))',
    borderGlow: '#10b981',
    accentColor: '#a7f3d0',
    avatar: '👨‍🏭'
  },
  {
    id: 4,
    name: 'Ananya Patel',
    role: 'Retail Operations Head, OmniMart',
    location: 'Bengaluru & Ahmedabad, India',
    domain: '🛒 Retail POS & E-Commerce',
    system: 'OmniPOS Superstore Billing System',
    review: 'Thermal printer barcode billing, multi-store stock inventory sync across 25+ retail outlets, and fast checkout counters. Highly reliable tech support team!',
    metric: '10,000+ Daily Checkouts',
    impact: 'Fast Barcode Billing',
    rating: '5.0 / 5.0 ★★★★★',
    cardBg: 'linear-gradient(145deg, rgba(10, 35, 45, 0.95), rgba(6, 182, 212, 0.3))',
    borderGlow: '#06b6d4',
    accentColor: '#67e8f9',
    avatar: '👩‍💼'
  },
  {
    id: 5,
    name: 'Vikram Reddy',
    role: 'CEO, QuickServe Consumer App',
    location: 'Hyderabad & Visakhapatnam, India',
    domain: '📱 Mobile App Development',
    system: 'iOS & Android Native Shopping App',
    review: 'Built with React 19, Next.js, and Node.js backend. High velocity, zero crashes, integrated payment gateways, and live order tracking. Best software team in India!',
    metric: '50,000+ App Downloads',
    impact: '4.9 Star PlayStore Score',
    rating: '4.9 / 5.0 ★★★★★',
    cardBg: 'linear-gradient(145deg, rgba(45, 15, 25, 0.95), rgba(244, 63, 94, 0.3))',
    borderGlow: '#f43f5e',
    accentColor: '#fecdd3',
    avatar: '👨‍💻'
  },
  {
    id: 6,
    name: 'Suresh Sundaram',
    role: 'Managing Director, Sri Meenakshi Travels',
    location: 'Madurai & Trichy, Tamil Nadu',
    domain: '🚌 Travels & Fleet Booking',
    system: 'Passenger Seat Booking & GPS App',
    review: 'Instant WhatsApp seat confirmation, driver location tracking, and automated fuel expense logs. Passenger booking volume increased by 60% within 3 months!',
    metric: '60% More Bookings',
    impact: 'Zero Trip Misses',
    rating: '4.9 / 5.0 ★★★★★',
    cardBg: 'linear-gradient(145deg, rgba(30, 20, 50, 0.95), rgba(168, 85, 247, 0.3))',
    borderGlow: '#a855f7',
    accentColor: '#e9d5ff',
    avatar: '🚍'
  },
  {
    id: 7,
    name: 'Amit Singhania',
    role: 'Managing Partner, Singhania Silk & Fabrics',
    location: 'Surat & Varanasi, India',
    domain: '🧵 Textile Wholesale & B2B Billing',
    system: 'B2B Wholesale Order & Dispatch App',
    review: 'Wholesale textile catalog ordering, automated credit balance calculations, and GST e-invoicing for 400+ dealers. Exceptional custom software delivery by TRIOVEXA!',
    metric: '400+ B2B Dealers Connected',
    impact: '100% Billing Accuracy',
    rating: '5.0 / 5.0 ★★★★★',
    cardBg: 'linear-gradient(145deg, rgba(15, 30, 45, 0.95), rgba(14, 165, 233, 0.3))',
    borderGlow: '#0ea5e9',
    accentColor: '#7dd3fc',
    avatar: '👔'
  }
];

export default function IndiaMapSection({ handleSmoothScroll }) {
  const [activeStepIndex, setActiveStepIndex] = useState(5);

  return (
    <section id="achievements" className="achievements-map-section">
      <div className="container">
        {/* Section Header with 3D Trio Graphic */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            
            {/* Direct 3D Persons Image (Transparent Background / No Box / No Border) */}
            <div style={{ width: '220px', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', filter: 'drop-shadow(0 10px 25px rgba(0, 242, 254, 0.45))' }}>
              <img 
                src="/assets/images/triovexa-3d-trio-transparent.png" 
                alt="TRIOVEXA 3D Trio Leaders - Transparent" 
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} 
              />
            </div>

            <span className="section-tag" style={{ margin: 0 }}>
              <i className="ri-trophy-fill" style={{ color: 'var(--accent-amber)' }}></i> Client Achievements & Target Growth
            </span>
          </div>

          <h2>Our Achievements & Client Growth Milestones</h2>
          <p style={{ marginBottom: '1.25rem' }}>
            With over <strong>250+ target business goals achieved</strong> across textiles, transport, garments, and retail sectors, 
            see how TRIOVEXA drives step-by-step software success and continuous growth velocity.
          </p>

          {/* Animated OUR GOAL Bullseye Target & Piercing Arrow Banner */}
          <div 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '1.1rem', 
              background: 'linear-gradient(135deg, rgba(7, 13, 25, 0.95), rgba(251, 191, 36, 0.14))', 
              padding: '0.85rem 1.85rem', 
              borderRadius: '40px', 
              border: '1.5px solid #fbbf24', 
              boxShadow: '0 0 30px rgba(251, 191, 36, 0.4)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Bullseye Target & Piercing Arrow Graphic */}
            <div style={{ position: 'relative', width: '46px', height: '46px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Concentric Target Bullseye SVG */}
              <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="23" cy="23" r="20" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="4 2" />
                <circle cx="23" cy="23" r="13" stroke="#00f2fe" strokeWidth="2" fill="rgba(0, 242, 254, 0.1)" />
                <circle cx="23" cy="23" r="7" fill="#f43f5e" />
                <circle cx="23" cy="23" r="3" fill="#ffffff" />
              </svg>

              {/* Animated Piercing Arrow (Ampu Kuri) */}
              <div 
                style={{ 
                  position: 'absolute', 
                  top: '-4px', 
                  left: '-4px', 
                  color: '#fbbf24', 
                  fontSize: '1.5rem', 
                  filter: 'drop-shadow(0 0 10px #fbbf24)',
                  animation: 'arrowPierce 1.8s infinite ease-in-out',
                  pointerEvents: 'none'
                }}
              >
                🏹
              </div>
            </div>

            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ color: '#fbbf24', fontSize: '1rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px' }}>
                  🎯 OUR GOAL
                </span>
                <span className="count-pill" style={{ background: '#fbbf24', color: '#070d19', fontSize: '0.75rem', fontWeight: 900, padding: '0.15rem 0.65rem' }}>
                  100% BULLSEYE ACHIEVED
                </span>
              </div>
              <div style={{ color: 'var(--text-sky-light)', fontSize: '0.86rem', fontWeight: 600, marginTop: '0.15rem' }}>
                Piercing every client project goal with 100% precision & on-time delivery
              </div>
            </div>
          </div>
        </div>

        {/* Unique 3 Pillars of TRIOVEXA Achievement Section */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span className="section-tag" style={{ background: 'rgba(0, 242, 254, 0.12)', borderColor: '#00f2fe', color: '#00f2fe', fontSize: '0.8rem', fontWeight: 800 }}>
              🏆 TRIOVEXA ACHIEVEMENT PILLARS
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat( auto-fit, minmax(300px, 1fr) )', gap: '1.5rem' }}>
            
            {/* Pillar 1: Successful Software Project Deliveries (Cyan Theme UI) */}
            <div
              className="glass-card"
              style={{
                position: 'relative',
                padding: '2rem 1.65rem',
                border: '1.5px solid rgba(0, 242, 254, 0.5)',
                background: 'linear-gradient(145deg, rgba(7, 13, 25, 0.95), rgba(0, 242, 254, 0.08))',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 10px 30px rgba(0, 242, 254, 0.15)',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.borderColor = '#00f2fe';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 242, 254, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px) scale(1.0)';
                e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.5)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 242, 254, 0.15)';
              }}
            >
              <div style={{ position: 'absolute', top: '-15px', right: '-10px', fontSize: '4.5rem', fontWeight: 900, color: 'rgba(0, 242, 254, 0.1)', userSelect: 'none', pointerEvents: 'none' }}>01</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 242, 254, 0.18)', border: '1px solid #00f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00f2fe', fontSize: '1.5rem', boxShadow: '0 0 15px rgba(0, 242, 254, 0.35)' }}>
                  <i className="ri-rocket-2-fill"></i>
                </div>
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#00f2fe', textTransform: 'uppercase', letterSpacing: '1px', display: 'block' }}>ACHIEVEMENT #1</span>
                  <h3 style={{ color: '#ffffff', fontSize: '1.18rem', margin: 0, fontWeight: 800 }}>Successful Software Project Deliveries</h3>
                </div>
              </div>
              <p style={{ color: 'var(--text-sky-light)', fontSize: '0.9rem', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                High-velocity agile software execution with a verified 99.4% on-time record across enterprise ERPs, cloud platforms, and mobile apps.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="count-pill" style={{ background: 'rgba(0, 242, 254, 0.15)', color: '#00f2fe', border: '1px solid #00f2fe', fontSize: '0.78rem', fontWeight: 800 }}>
                  🚀 250+ Live Projects
                </span>
                <span className="count-pill" style={{ background: 'rgba(255, 255, 255, 0.06)', color: 'var(--text-sky-light)', fontSize: '0.75rem' }}>
                  99.4% SLA Speed
                </span>
              </div>
            </div>

            {/* Pillar 2: Satisfied Clients & Business Solutions (Gold Theme UI) */}
            <div
              className="glass-card"
              style={{
                position: 'relative',
                padding: '2rem 1.65rem',
                border: '1.5px solid rgba(251, 191, 36, 0.5)',
                background: 'linear-gradient(145deg, rgba(15, 12, 5, 0.95), rgba(251, 191, 36, 0.08))',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 10px 30px rgba(251, 191, 36, 0.15)',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.borderColor = '#fbbf24';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(251, 191, 36, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px) scale(1.0)';
                e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.5)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(251, 191, 36, 0.15)';
              }}
            >
              <div style={{ position: 'absolute', top: '-15px', right: '-10px', fontSize: '4.5rem', fontWeight: 900, color: 'rgba(251, 191, 36, 0.1)', userSelect: 'none', pointerEvents: 'none' }}>02</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(251, 191, 36, 0.18)', border: '1px solid #fbbf24', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fbbf24', fontSize: '1.5rem', boxShadow: '0 0 15px rgba(251, 191, 36, 0.35)' }}>
                  <i className="ri-heart-3-fill"></i>
                </div>
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '1px', display: 'block' }}>ACHIEVEMENT #2</span>
                  <h3 style={{ color: '#ffffff', fontSize: '1.18rem', margin: 0, fontWeight: 800 }}>Satisfied Clients & Business Solutions</h3>
                </div>
              </div>
              <p style={{ color: 'var(--text-sky-light)', fontSize: '0.9rem', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                Empowering textile factories, transport fleets, and retail chains with custom automation, driving 100% client satisfaction and verified business growth.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="count-pill" style={{ background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24', border: '1px solid #fbbf24', fontSize: '0.78rem', fontWeight: 800 }}>
                  ⭐ 100% Client Score
                </span>
                <span className="count-pill" style={{ background: 'rgba(255, 255, 255, 0.06)', color: 'var(--text-sky-light)', fontSize: '0.75rem' }}>
                  100% Growth Powered
                </span>
              </div>
            </div>

            {/* Pillar 3: Innovative & Customized Software Solutions (Emerald Theme UI) */}
            <div
              className="glass-card"
              style={{
                position: 'relative',
                padding: '2rem 1.65rem',
                border: '1.5px solid rgba(16, 185, 129, 0.5)',
                background: 'linear-gradient(145deg, rgba(5, 18, 12, 0.95), rgba(16, 185, 129, 0.08))',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 10px 30px rgba(16, 185, 129, 0.15)',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.borderColor = '#10b981';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(16, 185, 129, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px) scale(1.0)';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.5)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(16, 185, 129, 0.15)';
              }}
            >
              <div style={{ position: 'absolute', top: '-15px', right: '-10px', fontSize: '4.5rem', fontWeight: 900, color: 'rgba(16, 185, 129, 0.1)', userSelect: 'none', pointerEvents: 'none' }}>03</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.18)', border: '1px solid #10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', fontSize: '1.5rem', boxShadow: '0 0 15px rgba(16, 185, 129, 0.35)' }}>
                  <i className="ri-cpu-fill"></i>
                </div>
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase', letterSpacing: '1px', display: 'block' }}>ACHIEVEMENT #3</span>
                  <h3 style={{ color: '#ffffff', fontSize: '1.18rem', margin: 0, fontWeight: 800 }}>Innovative & Customized Software Solutions</h3>
                </div>
              </div>
              <p style={{ color: 'var(--text-sky-light)', fontSize: '0.9rem', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                100% tailor-made codebase with zero generic third-party templates. Built with React 19, Next.js, Node.js, and native mobile stacks tailored strictly to your workflow.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="count-pill" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', border: '1px solid #10b981', fontSize: '0.78rem', fontWeight: 800 }}>
                  💡 100% Bespoke Code
                </span>
                <span className="count-pill" style={{ background: 'rgba(255, 255, 255, 0.06)', color: 'var(--text-sky-light)', fontSize: '0.75rem' }}>
                  Zero Templates
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Major Achievement Cards (Each Card with Unique Theme & Floating Mouse Hover Movement) */}
        <div className="achievements-kpi-grid">
          {/* Card 1: Cyan Theme */}
          <div 
            className="glass-card achievement-card"
            style={{
              background: 'linear-gradient(135deg, rgba(7, 13, 25, 0.95), rgba(0, 242, 254, 0.08))',
              border: '1.5px solid rgba(0, 242, 254, 0.4)',
              transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
              e.currentTarget.style.borderColor = '#00f2fe';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 242, 254, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0px) scale(1.0)';
              e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.4)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div className="achieve-icon-box" style={{ background: 'rgba(0, 242, 254, 0.18)', color: '#00f2fe', border: '1px solid #00f2fe' }}>
              <i className="ri-user-star-line"></i>
            </div>
            <div className="achieve-value" style={{ color: '#00f2fe' }}>250+</div>
            <div className="achieve-label">Target Client Goals Achieved</div>
            <div className="achieve-sub">Textile, Transport, Retail & ERP</div>
          </div>

          {/* Card 2: Emerald Green Theme */}
          <div 
            className="glass-card achievement-card"
            style={{
              background: 'linear-gradient(135deg, rgba(7, 13, 25, 0.95), rgba(16, 185, 129, 0.08))',
              border: '1.5px solid rgba(16, 185, 129, 0.4)',
              transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
              e.currentTarget.style.borderColor = '#10b981';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(16, 185, 129, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0px) scale(1.0)';
              e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.4)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div className="achieve-icon-box" style={{ background: 'rgba(16, 185, 129, 0.18)', color: '#10b981', border: '1px solid #10b981' }}>
              <i className="ri-checkbox-circle-fill"></i>
            </div>
            <div className="achieve-value" style={{ color: '#10b981' }}>99.4%</div>
            <div className="achieve-label">Project Success Rate</div>
            <div className="achieve-sub">Zero downtime & on-time delivery</div>
          </div>

          {/* Card 3: Amber Gold Theme */}
          <div 
            className="glass-card achievement-card"
            style={{
              background: 'linear-gradient(135deg, rgba(7, 13, 25, 0.95), rgba(251, 191, 36, 0.08))',
              border: '1.5px solid rgba(251, 191, 36, 0.4)',
              transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
              e.currentTarget.style.borderColor = '#fbbf24';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(251, 191, 36, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0px) scale(1.0)';
              e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.4)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div className="achieve-icon-box" style={{ background: 'rgba(251, 191, 36, 0.18)', color: '#fbbf24', border: '1px solid #fbbf24' }}>
              <i className="ri-line-chart-fill"></i>
            </div>
            <div className="achieve-value" style={{ color: '#fbbf24' }}>+45%</div>
            <div className="achieve-label">Client Growth Velocity</div>
            <div className="achieve-sub">Efficiency boost across operations</div>
          </div>

          {/* Card 4: Purple SLA Theme (Replaced 180Cr) */}
          <div 
            className="glass-card achievement-card"
            style={{
              background: 'linear-gradient(135deg, rgba(7, 13, 25, 0.95), rgba(168, 85, 247, 0.08))',
              border: '1.5px solid rgba(168, 85, 247, 0.4)',
              transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
              e.currentTarget.style.borderColor = '#a855f7';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(168, 85, 247, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0px) scale(1.0)';
              e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.4)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div className="achieve-icon-box" style={{ background: 'rgba(168, 85, 247, 0.18)', color: '#a855f7', border: '1px solid #a855f7' }}>
              <i className="ri-shield-check-fill"></i>
            </div>
            <div className="achieve-value" style={{ color: '#a855f7' }}>100%</div>
            <div className="achieve-label">Enterprise Automation</div>
            <div className="achieve-sub">Powered by custom software architecture</div>
          </div>
        </div>

        {/* Target Growth Image & Milestone Steps Container */}
        <div className="india-map-container glass-card" style={{ gridTemplateColumns: '1.15fr 1fr', padding: '2.5rem' }}>
          {/* Left Column: Target Goal Wooden Block Growth Image Container */}
          <div className="map-wrapper">
            <div className="map-status-header">
              <div className="status-live-dot">
                <span className="pulse-dot"></span>
                <span>STEP-BY-STEP TARGET GOAL SUCCESS TELEMETRY</span>
              </div>
              <div className="map-active-count">
                Milestone Status: <strong style={{ color: '#10b981' }}>100% Goal Reached 🎯</strong>
              </div>
            </div>

            {/* Target Growth Graphic Container */}
            <div
              className="target-image-container"
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1.5px solid var(--border-glow)',
                boxShadow: 'var(--shadow-glow)',
                background: 'rgba(7, 13, 25, 0.95)',
              }}
            >
              {/* Floating Badge 1 (Top Right) */}
              <div
                className="floating-badge"
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(7, 13, 25, 0.92)',
                  border: '1.5px solid #fbbf24',
                  boxShadow: '0 10px 25px rgba(251, 191, 36, 0.3)',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.6rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(251, 191, 36, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fbbf24',
                    fontSize: '1.2rem',
                  }}
                >
                  🎯
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ffffff' }}>Target Goal Achieved!</div>
                  <div style={{ fontSize: '0.75rem', color: '#fbbf24' }}>Level 6 Leadership Milestone</div>
                </div>
              </div>

              {/* Floating Badge 2 (Bottom Left) */}
              <div
                className="floating-badge"
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  background: 'rgba(7, 13, 25, 0.92)',
                  border: '1.5px solid var(--accent-cyan)',
                  boxShadow: '0 10px 25px rgba(0, 242, 254, 0.3)',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.6rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(0, 242, 254, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-sky-bright)',
                    fontSize: '1.2rem',
                  }}
                >
                  <i className="ri-rocket-fill"></i>
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ffffff' }}>+45% Client Growth</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-sky-bright)' }}>Proven Software Velocity</div>
                </div>
              </div>

              {/* Target Growth Image */}
              <img
                src="/assets/images/client-growth-target.jpg"
                alt="TRIOVEXA Step-by-Step Target Growth and Client Success Milestones"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '480px',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'contrast(1.05) brightness(0.98)',
                }}
              />
            </div>

            {/* Interactive Precision Archer & Bullseye Target Animation */}
            <div
              className="glass-card archer-bullseye-card"
              style={{
                marginTop: '1.25rem',
                padding: '1.25rem 1.5rem',
                background: 'linear-gradient(135deg, rgba(7, 13, 25, 0.96), rgba(13, 27, 54, 0.92))',
                border: '1.5px solid var(--border-glow)',
                boxShadow: 'var(--shadow-glow)',
                borderRadius: 'var(--radius-md)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Header inside the animation box */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(251, 191, 36, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fbbf24',
                      fontSize: '1.1rem',
                      boxShadow: '0 0 10px rgba(251, 191, 36, 0.3)',
                    }}
                  >
                    🏹
                  </div>
                  <div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#ffffff' }}>
                      Target Goal Precision Archery
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-sky-bright)' }}>
                      Arrow Hits 100% Dead-Center Bullseye
                    </div>
                  </div>
                </div>

                <div
                  className="count-pill"
                  style={{
                    background: 'rgba(251, 191, 36, 0.15)',
                    color: '#fbbf24',
                    border: '1px solid #fbbf24',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                  }}
                >
                  🎯 100% BULLSEYE HIT
                </div>
              </div>

              {/* The Interactive Archery Animation Arena */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  background: 'rgba(5, 10, 20, 0.75)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-glass)',
                  padding: '0.5rem 0',
                  overflow: 'hidden',
                }}
              >
                {/* SVG Scene */}
                <svg
                  viewBox="0 0 560 170"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                >
                  <defs>
                    {/* Glowing Filters */}
                    <filter id="goldGlow" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <filter id="cyanGlow" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    {/* Linear Gradients */}
                    <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
                      <stop offset="60%" stopColor="#00f2fe" />
                      <stop offset="100%" stopColor="#fbbf24" />
                    </linearGradient>
                    <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(0, 242, 254, 0)" />
                      <stop offset="80%" stopColor="rgba(0, 242, 254, 0.4)" />
                      <stop offset="100%" stopColor="rgba(251, 191, 36, 0.9)" />
                    </linearGradient>
                  </defs>

                  {/* Range Trajectory Dotted Guideline */}
                  <line
                    x1="105"
                    y1="85"
                    x2="480"
                    y2="85"
                    stroke="rgba(0, 242, 254, 0.2)"
                    strokeWidth="1.5"
                    strokeDasharray="4 5"
                  />
                  {/* Distance markers */}
                  <text x="120" y="105" fill="rgba(148, 163, 184, 0.5)" fontSize="9" fontFamily="inherit">START</text>
                  <text x="280" y="105" fill="rgba(148, 163, 184, 0.5)" fontSize="9" fontFamily="inherit" textAnchor="middle">VELOCITY: 100m/s</text>
                  <text x="480" y="148" fill="#fbbf24" fontSize="9" fontWeight="bold" fontFamily="inherit" textAnchor="middle">TARGET GOAL 🎯</text>

                  {/* ARCHER CHARACTER (PERSON) ON LEFT */}
                  <g className="archery-person-group">
                    {/* Archer Shadow */}
                    <ellipse cx="50" cy="158" rx="28" ry="6" fill="rgba(0, 0, 0, 0.5)" />

                    {/* Legs in steady athletic stance */}
                    <path
                      d="M 48 108 L 26 155 L 18 156"
                      stroke="#38bdf8"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="M 52 108 L 68 155 L 76 156"
                      stroke="#00f2fe"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />

                    {/* Torso & Athletic Jacket */}
                    <path
                      d="M 50 64 L 46 108 L 54 108 Z"
                      fill="#0d1b36"
                      stroke="#00f2fe"
                      strokeWidth="3.5"
                      strokeLinejoin="round"
                    />
                    {/* Chest Glow Stripe */}
                    <line x1="48" y1="72" x2="52" y2="95" stroke="#fbbf24" strokeWidth="2.5" />

                    {/* Archer Head & Cyber Visor */}
                    <circle cx="50" cy="48" r="12" fill="#070d19" stroke="#38bdf8" strokeWidth="2.5" />
                    {/* Visor / Eye Focus line looking forward right */}
                    <path d="M 50 48 L 60 48" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" filter="url(#goldGlow)" />
                    {/* Helmet accent */}
                    <path d="M 42 42 Q 50 36 58 42" stroke="#00f2fe" strokeWidth="2" fill="none" />

                    {/* Extended Bow Arm (Holding the Bow Grip) */}
                    <path
                      d="M 48 68 L 76 75 L 105 85"
                      stroke="#38bdf8"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    {/* Bow Grip Hand */}
                    <circle cx="105" cy="85" r="4" fill="#fbbf24" />

                    {/* Recurve Bow Frame */}
                    <path
                      d="M 105 24 Q 78 85 105 146"
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="4"
                      strokeLinecap="round"
                      filter="url(#goldGlow)"
                    />
                    {/* Bow Limb Tips */}
                    <circle cx="105" cy="24" r="3" fill="#00f2fe" />
                    <circle cx="105" cy="146" r="3" fill="#00f2fe" />

                    {/* Bowstring Drawn Back (Phase 1) */}
                    <path
                      className="bowstring-drawn"
                      d="M 105 24 L 54 85 L 105 146"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.95)"
                      strokeWidth="1.5"
                    />

                    {/* Bowstring Released Straight (Phase 2) */}
                    <path
                      className="bowstring-released"
                      d="M 105 24 L 105 85 L 105 146"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.9)"
                      strokeWidth="1.5"
                    />

                    {/* Archer Draw Hand & Pull Arm */}
                    <path
                      className="draw-arm-animated"
                      d="M 48 68 L 34 82 L 54 85"
                      stroke="#38bdf8"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <circle className="draw-hand-animated" cx="54" cy="85" r="3.5" fill="#00f2fe" />
                  </g>

                  {/* FLYING ARROW (TRAVELS FROM x=0 TO x=375 TO HIT BULLSEYE DEAD-CENTER AT 480, 85) */}
                  <g className="flying-arrow-group">
                    {/* Glowing Speed Streak Trail */}
                    <line
                      x1="0"
                      y1="85"
                      x2="105"
                      y2="85"
                      stroke="url(#trailGradient)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    {/* Carbon Shaft */}
                    <line
                      x1="55"
                      y1="85"
                      x2="105"
                      y2="85"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                    />
                    {/* Fletching (Feathers on back) */}
                    <path d="M 58 81 L 66 85 L 58 89" stroke="#00f2fe" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <path d="M 64 81 L 72 85 L 64 89" stroke="#38bdf8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    {/* Razor Arrowhead (Gold Tip pointing forward) */}
                    <polygon
                      points="105,81 114,85 105,89"
                      fill="#fbbf24"
                      stroke="#f59e0b"
                      strokeWidth="1"
                      filter="url(#goldGlow)"
                    />
                  </g>

                  {/* BULLSEYE CIRCULAR TARGET ON RIGHT */}
                  <g className="target-board-group">
                    {/* Target Stand / Tripod Legs */}
                    <line x1="480" y1="125" x2="455" y2="162" stroke="rgba(148, 163, 184, 0.45)" strokeWidth="3.5" strokeLinecap="round" />
                    <line x1="480" y1="125" x2="505" y2="162" stroke="rgba(148, 163, 184, 0.45)" strokeWidth="3.5" strokeLinecap="round" />
                    <line x1="480" y1="125" x2="480" y2="162" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="3" />
                    <ellipse cx="480" cy="162" rx="35" ry="5" fill="rgba(0, 0, 0, 0.45)" />

                    {/* Target Outer Board */}
                    <circle
                      cx="480"
                      cy="85"
                      r="46"
                      fill="rgba(11, 20, 38, 0.95)"
                      stroke="rgba(255, 255, 255, 0.35)"
                      strokeWidth="2.5"
                    />
                    {/* Ring 2 (Score 8 - Cyan) */}
                    <circle
                      cx="480"
                      cy="85"
                      r="35"
                      fill="rgba(0, 242, 254, 0.08)"
                      stroke="#00f2fe"
                      strokeWidth="2"
                    />
                    {/* Ring 3 (Score 9 - Sky) */}
                    <circle
                      cx="480"
                      cy="85"
                      r="23"
                      fill="rgba(56, 189, 248, 0.16)"
                      stroke="#38bdf8"
                      strokeWidth="2"
                    />

                    {/* Bullseye Impact Shockwave Ring (Radiates upon arrow hit) */}
                    <circle
                      className="bullseye-shockwave-ring"
                      cx="480"
                      cy="85"
                      r="12"
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="3.5"
                    />

                    {/* Spark Burst Rays upon Impact */}
                    <g className="bullseye-sparks">
                      <line x1="480" y1="73" x2="480" y2="63" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="480" y1="97" x2="480" y2="107" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="468" y1="85" x2="458" y2="85" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="492" y1="85" x2="502" y2="85" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="471" y1="76" x2="464" y2="69" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round" />
                      <line x1="489" y1="94" x2="496" y2="101" stroke="#00f2fe" strokeWidth="2" strokeLinecap="round" />
                    </g>

                    {/* CENTER CIRCLE (BULLSEYE 10 POINTS) - EXACT HIT LOCATION */}
                    <circle
                      className="bullseye-center-circle"
                      cx="480"
                      cy="85"
                      r="12"
                      fill="#fbbf24"
                      stroke="#f59e0b"
                      strokeWidth="2"
                      filter="url(#goldGlow)"
                    />
                    <circle cx="480" cy="85" r="4" fill="#ffffff" />
                    {/* Pinpoint Crosshairs */}
                    <line x1="474" y1="85" x2="486" y2="85" stroke="#ffffff" strokeWidth="1" />
                    <line x1="480" y1="79" x2="480" y2="91" stroke="#ffffff" strokeWidth="1" />
                  </g>
                </svg>

                {/* Floating "🎯 100% BULLSEYE HIT!" Score Pill */}
                <div className="bullseye-score-banner">
                  🎯 100% BULLSEYE HIT!
                </div>
              </div>

              {/* Bottom Telemetry Metrics Strip */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.75rem',
                  marginTop: '0.75rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ background: 'rgba(13, 27, 54, 0.65)', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-sky-light)' }}>TARGET ACCURACY</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#fbbf24' }}>100% Dead-Center</div>
                </div>
                <div style={{ background: 'rgba(13, 27, 54, 0.65)', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-sky-light)' }}>TRAJECTORY</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>Zero Deviation</div>
                </div>
                <div style={{ background: 'rgba(13, 27, 54, 0.65)', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-sky-light)' }}>GOAL EXECUTION</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#10b981' }}>🎯 Target Reached</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Step-by-Step Milestone Level Cards */}
          <div className="map-detail-card" style={{ justifyContent: 'flex-start', gap: '1rem' }}>
            <div className="detail-top-badge">
              <span className="badge-pulse-green"></span>
              <span>GROWTH LEVEL BLUEPRINT</span>
            </div>

            <h3 className="detail-city-title" style={{ fontSize: '1.7rem', marginBottom: '1rem' }}>
              How We Build Your Business Success Step-by-Step
            </h3>

            {/* Level Step Cards List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {growthMilestones.map((ms, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveStepIndex(idx)}
                  className="glass-card"
                  style={{
                    padding: '0.9rem 1.25rem',
                    cursor: 'pointer',
                    border: activeStepIndex === idx ? `1.5px solid ${ms.color}` : '1px solid var(--border-glass)',
                    background: activeStepIndex === idx ? 'rgba(0, 242, 254, 0.08)' : 'rgba(7, 13, 25, 0.6)',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: activeStepIndex === idx ? ms.color : 'rgba(255,255,255,0.05)',
                      color: activeStepIndex === idx ? '#070d19' : ms.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    <i className={ms.icon}></i>
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: ms.color }}>{ms.level}</span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontWeight: 700 }}>{ms.badge}</span>
                    </div>
                    <h4 style={{ fontSize: '0.98rem', color: '#ffffff', margin: '0.15rem 0' }}>{ms.title}</h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{ms.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTA Button */}
            <div style={{ marginTop: '1.25rem' }}>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="btn btn-sky"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <i className="ri-whatsapp-line"></i>
                <span>Achieve Your Target Growth Goal Today</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Edge-to-Edge Continuous Review Stream Section */}
      <div className="full-screen-review-section">
        {/* Title Header Aligned with Content Container */}
        <div className="container" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <span className="count-pill" style={{ background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24', border: '1px solid #fbbf24', fontSize: '0.75rem', fontWeight: 800 }}>
                  ⭐ VERIFIED INDIAN CLIENT REVIEWS
                </span>
                <span className="count-pill" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', border: '1px solid #10b981', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span className="pulse-dot" style={{ background: '#10b981' }}></span>
                  Step-and-Pause Stream (நின்று நின்று நகரும்)
                </span>
              </div>
              <h3 style={{ fontSize: '1.65rem', color: '#ffffff', margin: 0, fontWeight: 800 }}>
                Real Indian Client Success Stories & Feedback
              </h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="count-pill" style={{ background: 'rgba(0, 242, 254, 0.12)', color: '#00f2fe', border: '1px solid #00f2fe', fontSize: '0.8rem', fontWeight: 800 }}>
                ⏱️ Auto Step & Pause • Hover to Hold
              </span>
            </div>
          </div>
        </div>

        {/* Full-Width Edge-to-Edge Moving Cards Track with Disappearing Screen Curtains */}
        <div className="edge-to-edge-review-wrapper">
          {/* Left Disappearing Fade Curtain (Screen Start Fade) */}
          <div className="screen-fade-curtain screen-fade-left"></div>

          {/* Continuous Moving Track from Right to Left Across Full Screen */}
          <div className="review-marquee-track">
            {[...clientSuccessCases, ...clientSuccessCases].map((cs, idx) => (
              <div key={`${cs.id}-${idx}`} className="review-marquee-item">
                <div
                  className="glass-card review-card-inner"
                  style={{
                    border: `1.5px solid ${cs.borderGlow}`,
                    background: cs.cardBg,
                    boxShadow: `0 12px 35px ${cs.borderGlow}30`,
                  }}
                >
                  <div>
                    {/* Top Row: Client Avatar, Name & Rating (No 1, 2, 3 numbers) */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.85rem', gap: '0.5rem' }}>
                      <div>
                        <h4 style={{ color: '#ffffff', fontSize: '1.18rem', margin: 0, fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                          <span style={{ fontSize: '1.35rem' }}>{cs.avatar}</span>
                          {cs.name}
                        </h4>
                        <span style={{ fontSize: '0.82rem', color: cs.accentColor, fontWeight: 700, display: 'block', marginTop: '0.15rem' }}>
                          {cs.role}
                        </span>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-sky-light)', marginTop: '0.1rem' }}>
                          {cs.location}
                        </div>
                      </div>
                      <div className="count-pill" style={{ background: 'rgba(251, 191, 36, 0.18)', color: '#fbbf24', border: '1px solid #fbbf24', fontSize: '0.82rem', fontWeight: 800 }}>
                        ⭐ {cs.rating}
                      </div>
                    </div>

                    {/* Specific Domain Tag */}
                    <div style={{ marginBottom: '0.95rem' }}>
                      <span className="count-pill" style={{ background: `${cs.borderGlow}22`, color: cs.accentColor, border: `1px solid ${cs.borderGlow}`, fontSize: '0.8rem', fontWeight: 800 }}>
                        {cs.domain}
                      </span>
                    </div>

                    {/* Client Review Quote Text */}
                    <p style={{ color: '#ffffff', fontSize: '0.92rem', lineHeight: 1.55, marginBottom: '1.25rem', fontStyle: 'italic', background: 'rgba(0, 0, 0, 0.3)', padding: '0.95rem 1.05rem', borderRadius: 'var(--radius-sm)', borderLeft: `3.5px solid ${cs.borderGlow}` }}>
                      "{cs.review}"
                    </p>
                  </div>

                  {/* Bottom Metrics */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '0.85rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                      fontSize: '0.82rem',
                      gap: '0.5rem'
                    }}
                  >
                    <span style={{ color: cs.accentColor, fontWeight: 800 }}>⚡ {cs.metric}</span>
                    <span style={{ color: '#10b981', fontWeight: 800 }}>🎯 {cs.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Disappearing Fade Curtain (Screen End Fade) */}
          <div className="screen-fade-curtain screen-fade-right"></div>
        </div>
      </div>
    </section>
  );
}
