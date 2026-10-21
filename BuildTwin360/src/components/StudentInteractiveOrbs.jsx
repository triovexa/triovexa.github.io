import React, { useState, useRef, useEffect } from 'react';

/**
 * StudentInteractiveOrbs Component
 * Inspired by Yellow.ai NEXUS interactive circular nodes showcase.
 * Replaces generic static cards with dynamic, floating, expandable circular orbs.
 * Features believable, minimized, high-impact student R&D highlights.
 */

const ORB_NODES = [
  {
    id: 'pricing',
    label: 'Lowest Price & Top Quality',
    icon: 'ri-price-tag-3-line',
    bg: '#d8b4fe', // Lilac / Violet
    textColor: '#3b0764',
    tagColor: '#581c87',
    glowColor: 'rgba(216, 180, 254, 0.6)',
    top: '46%',
    left: '12%',
    floatClass: 'float-anim-1',
    tag: 'BEST PRICE GUARANTEE',
    title: 'Lowest Price & Top Quality',
    desc: 'Industry-grade projects at student-friendly rates, far lower than competitors. Guaranteed working hardware, premium quality, and zero hidden costs.',
  },
  {
    id: 'ideas',
    label: '100+ Ideas & Custom Topics',
    icon: 'ri-lightbulb-line',
    bg: '#fde047', // Cyber Yellow
    textColor: '#422006',
    tagColor: '#713f12',
    glowColor: 'rgba(253, 224, 71, 0.6)',
    top: '18%',
    left: '32%',
    floatClass: 'float-anim-2',
    tag: 'YOUR IDEA OR OURS',
    title: '100+ Ideas or Custom Topics',
    desc: 'Have your own unique idea? We build it from scratch! Need inspiration? Choose from 100+ trending IEEE and industry topics ready for faculty approval.',
  },
  {
    id: 'hardware-ai',
    label: 'Hardware & AI Integration',
    icon: 'ri-cpu-line',
    bg: '#84cc16', // Vibrant Lime Green
    textColor: '#14532d',
    tagColor: '#166534',
    glowColor: 'rgba(132, 204, 22, 0.65)',
    top: '62%',
    left: '50%',
    floatClass: 'float-anim-3',
    tag: 'AI + HARDWARE KITS',
    title: 'Hardware with Real AI',
    desc: 'From ESP32, Arduino, and STM32 to robotics and Raspberry Pi. Complete physical hardware setups powered by Computer Vision and real-time AI.',
  },
  {
    id: 'reviews-report',
    label: 'Review PPTs & Full Report',
    icon: 'ri-slideshow-line',
    bg: '#fb923c', // Sunset Coral Orange
    textColor: '#431407',
    tagColor: '#7c2d12',
    glowColor: 'rgba(251, 146, 60, 0.6)',
    top: '44%',
    left: '69%',
    floatClass: 'float-anim-4',
    tag: 'FULL REVIEW SUPPORT',
    title: 'Review PPTs & Report Included',
    desc: 'Full support for every review! Custom slide decks for Review 0, 1, 2, and Final Viva, plus a complete  report in your college format.',
  },
  {
    id: 'mentoring',
    label: 'Live Mentoring & Trending Tech',
    icon: 'ri-customer-service-2-line',
    bg: '#38bdf8', // Electric Cyan
    textColor: '#082f49',
    tagColor: '#0369a1',
    glowColor: 'rgba(56, 189, 248, 0.6)',
    top: '20%',
    left: '86%',
    floatClass: 'float-anim-5',
    tag: '1-ON-1 VIVA PREP',
    title: 'Live Mentoring & Trending Tech',
    desc: 'Projects built on trending tech: Python, React, AI/ML, and Mobile. Includes 1-on-1 live mentoring and code explanation so you ace your viva defense.',
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
