import React, { useState, useRef, useEffect } from 'react';
import { PROJECT_CATEGORIES } from '../data/projectsData';
import InteractiveMatrixCanvas from './InteractiveMatrixCanvas';

/**
 * WhyChooseInteractiveHero Component
 * Universal Hero for TrioVexa Projects page (Client, Products, Academic).
 * Features:
 * - Dynamic category-tailored 5 floating icon orbs
 * - Smooth hover zoom expansion into illuminated circular content lenses
 * - Clean animated "WHY CHOOSE TRIOVEXA" typography
 * - Direct Category Switcher Tabs for all 3 categories
 */

const CATEGORY_ORBS = {
  academic: [
    {
      id: 'ip',
      label: 'Student IP & Patents',
      icon: 'ri-shield-check-line',
      bg: '#d8b4fe',
      textColor: '#3b0764',
      tagColor: '#581c87',
      glowColor: 'rgba(216, 180, 254, 0.6)',
      top: '46%',
      left: '12%',
      floatClass: 'float-anim-1',
      tag: '100% OWNERSHIP',
      title: 'Student IP & Patents',
      desc: 'You retain full rights to your code, schematics, and patent drafts. We mentor IEEE papers and university viva defense with zero IP claims.',
    },
    {
      id: 'silicon',
      label: 'Real Silicon Rig',
      icon: 'ri-cpu-line',
      bg: '#fde047',
      textColor: '#422006',
      tagColor: '#713f12',
      glowColor: 'rgba(253, 224, 71, 0.6)',
      top: '18%',
      left: '32%',
      floatClass: 'float-anim-2',
      tag: 'PHYSICAL RIGS',
      title: 'Real Silicon, Zero Emulation',
      desc: 'No toy breadboard simulations. You build on ESP32-S3, STM32 Nucleo, and industrial sensor rigs ready for real factory deployment.',
    },
    {
      id: 'vision',
      label: 'Field-Tested AI',
      icon: 'ri-eye-line',
      bg: '#84cc16',
      textColor: '#14532d',
      tagColor: '#166534',
      glowColor: 'rgba(132, 204, 22, 0.65)',
      top: '62%',
      left: '50%',
      floatClass: 'float-anim-3',
      tag: 'FIELD TESTED',
      title: 'Field-Validated AI & Vision',
      desc: 'It sees everything. It builds anything. Tested with actual visually impaired individuals and live clinical vitals in real physical trials.',
    },
    {
      id: 'telemetry',
      label: 'Live Cloud Telemetry',
      icon: 'ri-radar-line',
      bg: '#fb923c',
      textColor: '#431407',
      tagColor: '#7c2d12',
      glowColor: 'rgba(251, 146, 60, 0.6)',
      top: '44%',
      left: '69%',
      floatClass: 'float-anim-4',
      tag: 'REAL-TIME MQTT',
      title: 'Live Cloud Telemetry',
      desc: 'Production MQTT brokers, WebSockets, and low-latency microservices. Watch your physical hardware stream live telemetry to web and mobile apps.',
    },
    {
      id: 'git',
      label: 'Production Git & Portfolio',
      icon: 'ri-git-branch-line',
      bg: '#38bdf8',
      textColor: '#082f49',
      tagColor: '#0369a1',
      glowColor: 'rgba(56, 189, 248, 0.6)',
      top: '20%',
      left: '86%',
      floatClass: 'float-anim-5',
      tag: 'CAREER READY',
      title: 'Production Git & Portfolio',
      desc: 'Clean Git branching, Dockerized services, and modular architectures. A GitHub portfolio engineered to clear tier-1 tech lead interviews.',
    },
  ],
  client: [
    {
      id: 'delivery',
      label: 'Rapid Production Delivery',
      icon: 'ri-rocket-line',
      bg: '#d8b4fe',
      textColor: '#3b0764',
      tagColor: '#581c87',
      glowColor: 'rgba(216, 180, 254, 0.6)',
      top: '46%',
      left: '12%',
      floatClass: 'float-anim-1',
      tag: 'ZERO SCOPE-CREEP',
      title: 'Milestone-Driven Sprints',
      desc: 'On-time production releases with transparent weekly staging demos. Zero guesswork, zero surprises—just reliable, production-ready code.',
    },
    {
      id: 'architecture',
      label: 'High-Throughput Core',
      icon: 'ri-cpu-line',
      bg: '#fde047',
      textColor: '#422006',
      tagColor: '#713f12',
      glowColor: 'rgba(253, 224, 71, 0.6)',
      top: '18%',
      left: '32%',
      floatClass: 'float-anim-2',
      tag: '99.9% UPTIME',
      title: 'Resilient Microservices',
      desc: 'Engineered on modern React, Vite, FastAPI, and scalable cloud edge caching. Built to handle heavy concurrent traffic without latency spikes.',
    },
    {
      id: 'design',
      label: 'Conversion-Driven UI/UX',
      icon: 'ri-eye-line',
      bg: '#84cc16',
      textColor: '#14532d',
      tagColor: '#166534',
      glowColor: 'rgba(132, 204, 22, 0.65)',
      top: '62%',
      left: '50%',
      floatClass: 'float-anim-3',
      tag: 'BESPOKE DESIGN',
      title: 'Next-Gen Interface Aesthetics',
      desc: 'Fluid micro-animations, tailored dark/light modes, and intuitive workflows that immediately capture client confidence and elevate brand prestige.',
    },
    {
      id: 'realtime',
      label: 'Real-Time Telemetry',
      icon: 'ri-radar-line',
      bg: '#fb923c',
      textColor: '#431407',
      tagColor: '#7c2d12',
      glowColor: 'rgba(251, 146, 60, 0.6)',
      top: '44%',
      left: '69%',
      floatClass: 'float-anim-4',
      tag: 'LIVE ANALYTICS',
      title: 'Instant Data Pipelines',
      desc: 'WebSockets, MQTT telemetry, and automated GST/ERP sync that update dashboards in sub-second intervals for critical operations.',
    },
    {
      id: 'ownership',
      label: '100% Code Ownership',
      icon: 'ri-shield-keyhole-line',
      bg: '#38bdf8',
      textColor: '#082f49',
      tagColor: '#0369a1',
      glowColor: 'rgba(56, 189, 248, 0.6)',
      top: '20%',
      left: '86%',
      floatClass: 'float-anim-5',
      tag: 'FULL HANDOVER',
      title: 'Complete Enterprise IP',
      desc: 'You receive all source repositories, deployment manifests, Docker containers, and database schemas with zero vendor lock-in.',
    },
  ],
  products: [
    {
      id: 'proprietary',
      label: 'Proprietary IP Engines',
      icon: 'ri-lightbulb-line',
      bg: '#d8b4fe',
      textColor: '#3b0764',
      tagColor: '#581c87',
      glowColor: 'rgba(216, 180, 254, 0.6)',
      top: '46%',
      left: '12%',
      floatClass: 'float-anim-1',
      tag: 'VERTICAL SAAS',
      title: 'Purpose-Built Software',
      desc: 'Tailored specifically for real manufacturing, transport, and clinical domains instead of generic one-size-fits-all software templates.',
    },
    {
      id: 'speed',
      label: 'Sub-Millisecond Engine',
      icon: 'ri-flashlight-line',
      bg: '#fde047',
      textColor: '#422006',
      tagColor: '#713f12',
      glowColor: 'rgba(253, 224, 71, 0.6)',
      top: '18%',
      left: '32%',
      floatClass: 'float-anim-2',
      tag: 'ULTRA-FAST',
      title: 'Optimized Data Indexing',
      desc: 'Instant full-text searches, barcode scanning, and multi-vehicle route calculations computed in microseconds with native web concurrency.',
    },
    {
      id: 'offline',
      label: 'Offline-First Sync',
      icon: 'ri-eye-line',
      bg: '#84cc16',
      textColor: '#14532d',
      tagColor: '#166534',
      glowColor: 'rgba(132, 204, 22, 0.65)',
      top: '62%',
      left: '50%',
      floatClass: 'float-anim-3',
      tag: 'ALWAYS READY',
      title: 'Zero Downtime Field Work',
      desc: 'Operate smoothly in low-connectivity textile mills and remote transport routes with automatic offline caching and conflict-free cloud sync.',
    },
    {
      id: 'cloud',
      label: 'Multi-Tenant Cloud',
      icon: 'ri-cloud-line',
      bg: '#fb923c',
      textColor: '#431407',
      tagColor: '#7c2d12',
      glowColor: 'rgba(251, 146, 60, 0.6)',
      top: '44%',
      left: '69%',
      floatClass: 'float-anim-4',
      tag: 'ENTERPRISE SAAS',
      title: 'Isolated Tenant Storage',
      desc: 'Dedicated database schemas, automated daily backups, and role-based permissions designed to comply with enterprise data audits.',
    },
    {
      id: 'cicd',
      label: 'Continuous CI/CD Delivery',
      icon: 'ri-git-merge-line',
      bg: '#38bdf8',
      textColor: '#082f49',
      tagColor: '#0369a1',
      glowColor: 'rgba(56, 189, 248, 0.6)',
      top: '20%',
      left: '86%',
      floatClass: 'float-anim-5',
      tag: 'ZERO DOWNTIME',
      title: 'Automated Test Pipelines',
      desc: 'Every feature release undergoes automated regression test suites and containerized blue-green deployments for 99.9% availability.',
    },
  ],
};

const CATEGORY_TITLES = {
  academic: 'WHY FUTURE ENGINEERS CHOOSE',
  client: 'WHY INDUSTRY CLIENTS CHOOSE',
  products: 'WHY SCALE-UPS CHOOSE',
};

export default function WhyChooseInteractiveHero({ activeTab, onSelectTab }) {
  const [hoveredOrb, setHoveredOrb] = useState(null);
  const [pinnedOrb, setPinnedOrb] = useState(null);
  const stageRef = useRef(null);

  const activeOrbId = hoveredOrb || pinnedOrb;
  const currentOrbs = CATEGORY_ORBS[activeTab] || CATEGORY_ORBS.client;
  const introTitle = CATEGORY_TITLES[activeTab] || 'WHY CHOOSE';

  const handleOrbClick = (id) => {
    setPinnedOrb((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleDocClick = (e) => {
      if (stageRef.current && !stageRef.current.contains(e.target)) {
        setPinnedOrb(null);
      }
    };
    document.addEventListener('click', handleDocClick);
    return () => document.removeEventListener('click', handleDocClick);
  }, []);

  return (
    <section className="why-choose-hero-section" ref={stageRef} id="why-choose-hero">
      {/* Interactive Cyber Dot Grid with Mouse-Tracking Blue Pixel Morph (User Image 5) */}
      <InteractiveMatrixCanvas />
      <div className="why-choose-ambient-purple"></div>

      <div className="why-choose-container">
        {/* Animated Glowing Top Badge */}
        <div className="why-choose-top-badge">
          <span className="pulsing-live-dot"></span>
          <span className="why-choose-badge-text">{introTitle} TRIOVEXA</span>
        </div>

        {/* The Central Wordmark & Floating Interactive Orbs */}
        <div className="why-choose-stage">
          <h1 className="why-choose-hero-wordmark" aria-label="TRIOVEXA">
            <span className="nexus-char">T</span>
            <span className="nexus-char">R</span>
            <span className="nexus-char">I</span>
            <span className="nexus-char">O</span>
            <span className="nexus-char">V</span>
            <span className="nexus-char">E</span>
            <span className="nexus-char">X</span>
            <span className="nexus-char">A</span>
          </h1>

          {/* Interactive Floating Orbs */}
          <div className="why-choose-orbs-layer">
            {currentOrbs.map((orb) => {
              const isExpanded = activeOrbId === orb.id;
              const isDimmed = activeOrbId && !isExpanded;

              return (
                <div
                  key={orb.id}
                  className={`student-orb-node ${orb.floatClass} ${isExpanded ? 'is-expanded' : ''} ${
                    isDimmed ? 'is-dimmed' : ''
                  }`}
                  style={{
                    '--orb-bg': orb.bg,
                    '--orb-text': orb.textColor,
                    '--orb-tag-color': orb.tagColor,
                    '--orb-glow': orb.glowColor,
                    '--orb-top': orb.top,
                    '--orb-left': orb.left,
                  }}
                  onMouseEnter={() => setHoveredOrb(orb.id)}
                  onMouseLeave={() => setHoveredOrb(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOrbClick(orb.id);
                  }}
                  title={orb.label}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                >
                  {/* Small Circle Idle State (Icon Only) */}
                  <div className="orb-icon-idle">
                    <i className={orb.icon}></i>
                  </div>

                  {/* Expanded Circular Modal Content (Yellow.ai Image 3 & 4 Style) */}
                  <div className="orb-expanded-content">
                    <div className="orb-expanded-icon">
                      <i className={orb.icon}></i>
                    </div>
                    <span className="orb-expanded-tag">{orb.tag}</span>
                    <h3 className="orb-expanded-title">{orb.title}</h3>
                    <p className="orb-expanded-desc">{orb.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clean, Focused Tagline */}
        <p className="why-choose-tagline">
          The intelligence is the interface.{' '}
          <span className="tagline-highlight">Hover any floating node to inspect our engineering standard.</span>
        </p>

        {/* Integrated Category Switcher Tabs */}
        <div className="why-choose-category-tabs">
          {PROJECT_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className={`why-choose-tab-pill ${isActive ? 'active' : ''}`}
                onClick={() => onSelectTab && onSelectTab(cat.id)}
              >
                <i className={cat.icon}></i>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
