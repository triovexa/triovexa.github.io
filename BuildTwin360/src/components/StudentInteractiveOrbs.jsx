import React, { useState, useRef, useEffect } from 'react';

/**
 * StudentInteractiveOrbs Component
 * Inspired by Yellow.ai NEXUS interactive circular nodes showcase.
 * Replaces generic static cards with dynamic, floating, expandable circular orbs.
 * Features believable, minimized, high-impact student R&D highlights.
 */

const ORB_NODES = [
  {
    id: 'ip',
    label: 'IP & Patents',
    icon: 'ri-shield-check-line',
    bg: '#d8b4fe', // Lilac / Violet
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
    label: 'Silicon Hardware',
    icon: 'ri-cpu-line',
    bg: '#fde047', // Cyber Yellow
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
    icon: 'ri-eye-line', // Exact match to Yellow.ai eye icon in screenshot
    bg: '#84cc16', // Vibrant Lime Green
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
    label: 'Live Mesh & Cloud',
    icon: 'ri-radar-line',
    bg: '#fb923c', // Sunset Coral Orange
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
    label: 'Industrial Git & Career',
    icon: 'ri-git-branch-line',
    bg: '#38bdf8', // Electric Cyan
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
];

export default function StudentInteractiveOrbs({ onOpenInquiry }) {
  const [hoveredOrb, setHoveredOrb] = useState(null);
  const [pinnedOrb, setPinnedOrb] = useState(null);
  const sectionRef = useRef(null);

  const activeOrbId = hoveredOrb || pinnedOrb;

  const handleOrbClick = (id) => {
    setPinnedOrb((prev) => (prev === id ? null : id));
  };

  // Close pinned orb on click outside
  useEffect(() => {
    const handleDocClick = (e) => {
      if (sectionRef.current && !sectionRef.current.contains(e.target)) {
        setPinnedOrb(null);
      }
    };
    document.addEventListener('click', handleDocClick);
    return () => document.removeEventListener('click', handleDocClick);
  }, []);

  return (
    <section className="student-nexus-showcase-section" ref={sectionRef} id="academic-pillars">
      <div className="student-nexus-dot-grid"></div>
      <div className="student-nexus-ambient-purple"></div>

      <div className="student-nexus-container">
        {/* Top Header Tagline */}
        <div className="student-nexus-intro-pill">
          <span className="pulsing-live-dot"></span>
          <span>WHY FUTURE ENGINEERS CHOOSE</span>
        </div>

        {/* The Central Stage: Big Typography & Floating Interactive Orbs */}
        <div className="student-nexus-stage">
          {/* Big Bold Central Letters */}
          <h2 className="student-nexus-hero-wordmark">
            <span className="nexus-char">T</span>
            <span className="nexus-char">R</span>
            <span className="nexus-char">I</span>
            <span className="nexus-char">O</span>
            <span className="nexus-char">V</span>
            <span className="nexus-char">E</span>
            <span className="nexus-char">X</span>
            <span className="nexus-char">A</span>
          </h2>

          {/* Interactive Floating Orbs */}
          <div className="student-nexus-orbs-layer">
            {ORB_NODES.map((orb) => {
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

                  {/* Expanded Circular Modal Content (Image 3 & 4 Style) */}
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

        {/* Subtitle Beneath the Letters */}
        <p className="student-nexus-tagline">
          The intelligence is the interface. <span className="tagline-highlight">Where student innovation meets production reality.</span>
        </p>

        {/* Interactive Quick-Pill Indicator Buttons */}
        <div className="student-nexus-quick-pills">
          {ORB_NODES.map((orb) => {
            const isActive = activeOrbId === orb.id;
            return (
              <button
                key={orb.id}
                type="button"
                className={`nexus-pill-btn ${isActive ? 'active' : ''}`}
                style={{
                  '--pill-accent': orb.bg,
                  '--pill-glow': orb.glowColor,
                }}
                onMouseEnter={() => setHoveredOrb(orb.id)}
                onMouseLeave={() => setHoveredOrb(null)}
                onClick={() => handleOrbClick(orb.id)}
              >
                <i className={orb.icon}></i>
                <span>{orb.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Call to Action Bar (Yellow.ai Image 3 & 4 style) */}
        <div className="student-nexus-action-bar">
          <div className="student-nexus-action-buttons">
            <button
              type="button"
              className="student-nexus-btn-primary"
              onClick={() =>
                onOpenInquiry &&
                onOpenInquiry({
                  name: 'Student Engineering & Patent Mentorship',
                  type: 'academic',
                })
              }
            >
              <span>Start Your Student Project</span>
              <i className="ri-arrow-right-up-line"></i>
            </button>
            <a href="#nexus-cards-showcase" className="student-nexus-btn-ghost">
              <i className="ri-stack-line"></i>
              <span>View R&D Projects</span>
            </a>
          </div>

          {/* Mentor Chat Card (Inspired by Yellow.ai Alex speech card) */}
          <div className="student-nexus-mentor-card">
            <div className="mentor-speech-bubble">
              <span>Hi, need help structuring your final year or patent project?</span>
            </div>
            <button
              type="button"
              className="mentor-contact-pill"
              onClick={() =>
                onOpenInquiry &&
                onOpenInquiry({
                  name: 'Talk to TrioVexa R&D Mentor',
                  type: 'academic',
                })
              }
            >
              <div className="mentor-avatar">
                <i className="ri-user-star-line"></i>
                <span className="mentor-online-badge"></span>
              </div>
              <div className="mentor-info">
                <span className="mentor-action-text">Talk to our R&D Mentor</span>
                <span className="mentor-response-time">Average response: &lt; 2 hrs</span>
              </div>
              <i className="ri-chat-voice-line mentor-voice-icon"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
