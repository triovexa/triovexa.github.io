import React, { useState, useEffect, useRef } from 'react';

/**
 * NexusMetricsShowcase Component
 * Inspired by Yellow.ai "The Nexus Effect" (User Images 3 & 4).
 * Features:
 * - Fixed/Sticky scroll stage where numbers morph in place as you scroll
 * - Signature tilted neon card/lozenge in center with massive font count
 * - Left column metric scope, Right column concise believable description
 * - Category-tailored achievements for Client, Products, and Academic
 * - Interactive dot indicator pills for 1-click preview
 */

const CATEGORY_METRICS = {
  client: [
    {
      id: 'sla',
      number: '99.4%',
      title: 'Production SLA',
      scope: 'across all deployed systems',
      desc: 'Zero-downtime microservices, real-time WebSocket data streaming, and edge CDN cloud infrastructure.',
      bg: '#84cc16', // Neon Lime
      textColor: '#0f291e',
      glow: 'rgba(132, 204, 22, 0.45)',
      rotation: '-4deg',
    },
    {
      id: 'concurrency',
      number: '45k+',
      title: 'Daily Concurrency',
      scope: 'handled with sub-second latency',
      desc: 'High-throughput road logistics transactions, tonnage calculators, and automated GST invoicing.',
      bg: '#38bdf8', // Electric Cyan
      textColor: '#082f49',
      glow: 'rgba(56, 189, 248, 0.45)',
      rotation: '3deg',
    },
    {
      id: 'deployments',
      number: '180+',
      title: 'Enterprise Releases',
      scope: 'commercial production handoffs',
      desc: 'Custom software actively powering commercial road logistics, textile mills, and manufacturing ERPs.',
      bg: '#fde047', // Cyber Yellow
      textColor: '#422006',
      glow: 'rgba(253, 224, 71, 0.45)',
      rotation: '-3deg',
    },
  ],
  products: [
    {
      id: 'latency',
      number: '< 12ms',
      title: 'Processing Latency',
      scope: 'sub-millisecond indexing',
      desc: 'Optimized full-text search, barcode scanning, and multi-vehicle routing calculated in microseconds.',
      bg: '#84cc16',
      textColor: '#0f291e',
      glow: 'rgba(132, 204, 22, 0.45)',
      rotation: '-4deg',
    },
    {
      id: 'offline',
      number: '100%',
      title: 'Offline Reliability',
      scope: 'zero downtime field capture',
      desc: 'Operate smoothly in low-connectivity textile mills and remote freight routes with conflict-free cloud sync.',
      bg: '#38bdf8',
      textColor: '#082f49',
      glow: 'rgba(56, 189, 248, 0.45)',
      rotation: '3deg',
    },
    {
      id: 'engines',
      number: '12+',
      title: 'Proprietary SaaS',
      scope: 'purpose-built vertical engines',
      desc: 'Specialized enterprise ERPs and logistics automation platforms engineered with multi-tenant isolated storage.',
      bg: '#fde047',
      textColor: '#422006',
      glow: 'rgba(253, 224, 71, 0.45)',
      rotation: '-3deg',
    },
  ],
  academic: [
    {
      id: 'ip',
      number: '100%',
      title: 'Student IP Rights',
      scope: 'zero claim institutional policy',
      desc: 'You retain full ownership of every line of code, schematic, and patent draft. We mentor IEEE papers and viva defense.',
      bg: '#84cc16',
      textColor: '#0f291e',
      glow: 'rgba(132, 204, 22, 0.45)',
      rotation: '-4deg',
    },
    {
      id: 'silicon',
      number: 'Zero',
      title: 'Breadboard Emulation',
      scope: 'real physical hardware rigs',
      desc: 'No toy simulations. Built on real ESP32-S3, STM32 Nucleo, and factory-grade industrial sensor rigs ready for real deployment.',
      bg: '#38bdf8',
      textColor: '#082f49',
      glow: 'rgba(56, 189, 248, 0.45)',
      rotation: '3deg',
    },
    {
      id: 'trials',
      number: '15+',
      title: 'Field-Tested Trials',
      scope: 'validated with real human subjects',
      desc: 'Benchmarked in real physical environments—tested with actual visually impaired testers and live clinical vitals.',
      bg: '#fde047',
      textColor: '#422006',
      glow: 'rgba(253, 224, 71, 0.45)',
      rotation: '-3deg',
    },
  ],
};

export default function NexusMetricsShowcase({ activeTab, onOpenInquiry }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const metricsList = CATEGORY_METRICS[activeTab] || CATEGORY_METRICS.client;
  const currentMetric = metricsList[activeIndex] || metricsList[0];

  useEffect(() => {
    let animId = null;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalDist = rect.height - windowHeight;
      if (totalDist <= 0) return;

      const scrolled = -rect.top;
      const rawProgress = scrolled / totalDist;
      const clamped = Math.max(0, Math.min(0.999, rawProgress));

      // Map progress to active index (0, 1, 2)
      const count = metricsList.length;
      const newIndex = Math.min(count - 1, Math.floor(clamped * count));

      animId = requestAnimationFrame(() => {
        setActiveIndex(newIndex);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [metricsList.length]);

  return (
    <section className="nexus-metrics-section" ref={containerRef} id="nexus-impact-effect">
      <div className="nexus-metrics-track">
        {/* Sticky Stage: Locks in viewport while user scrolls through metrics */}
        <div className="nexus-metrics-sticky-stage">
          <div className="nexus-metrics-dot-grid" aria-hidden="true"></div>

          <div className="nexus-metrics-container">
            {/* Header: The Nexus Effect style */}
            <div className="nexus-metrics-header">
              <span className="nexus-metrics-eyebrow">THE TRIOVEXA IMPACT</span>
              <h2 className="nexus-metrics-main-title">Real Numbers. Production Proof.</h2>
              <p className="nexus-metrics-subtitle">
                Built for teams who need real-world production engineering. Here are the verified numbers showing our impact.
              </p>
            </div>

            {/* Morphing Metrics Showcase Row (User Images 3 & 4 Reference) */}
            <div className="nexus-metrics-row">
              {/* Left Column: Scope & Title */}
              <div className="nexus-metric-col-left">
                <span className="nexus-metric-title">{currentMetric.title}</span>
                <span className="nexus-metric-scope">{currentMetric.scope}</span>
              </div>

              {/* Center Column: The Signature Tilted Neon Lozenge / Card */}
              <div className="nexus-metric-col-center">
                <div
                  className="nexus-metric-lozenge"
                  key={currentMetric.id}
                  style={{
                    backgroundColor: currentMetric.bg,
                    color: currentMetric.textColor,
                    boxShadow: `0 0 65px ${currentMetric.glow}, 0 25px 60px rgba(0, 0, 0, 0.65)`,
                    transform: `rotate(${currentMetric.rotation})`,
                  }}
                >
                  <span className="nexus-metric-number">{currentMetric.number}</span>
                </div>
              </div>

              {/* Right Column: Clear Concise Explanation */}
              <div className="nexus-metric-col-right">
                <p className="nexus-metric-desc">{currentMetric.desc}</p>
              </div>
            </div>

            {/* Interactive Step Switcher Pills */}
            <div className="nexus-metrics-pills">
              {metricsList.map((m, idx) => (
                <button
                  key={m.id}
                  type="button"
                  className={`nexus-metric-pill ${idx === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <span className="metric-pill-dot" style={{ backgroundColor: m.bg }}></span>
                  <span>{m.title}</span>
                </button>
              ))}
            </div>

            {/* Floating Mentor / Consultation Pill (Yellow.ai Image 3 & 4 style) */}
            <div className="nexus-metrics-mentor-bar">
              <div className="metrics-speech-bubble">
                <span>Hi, have custom architectural specifications or milestone goals?</span>
              </div>
              <button
                type="button"
                className="metrics-mentor-pill"
                onClick={() =>
                  onOpenInquiry &&
                  onOpenInquiry({
                    name: 'Project Architecture & Metric Consultation',
                    type: activeTab,
                  })
                }
              >
                <div className="metrics-mentor-avatar">
                  <i className="ri-user-star-line"></i>
                  <span className="avatar-live-status"></span>
                </div>
                <div className="metrics-mentor-text">
                  <span className="mentor-primary-action">Consult TrioVexa Engineering Team</span>
                  <span className="mentor-secondary-note">Direct response within 2 hours</span>
                </div>
                <i className="ri-arrow-right-up-line mentor-action-arrow"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
