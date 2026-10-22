import React, { useState, useEffect, useRef } from 'react';
import InteractiveMatrixCanvas from './InteractiveMatrixCanvas';

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
      id: 'projects-delivered',
      number: '250+',
      title: 'Projects Delivered',
      desc: 'Websites, business software and custom digital solutions.',
      bg: '#84cc16', // Neon Lime (User Image 2 reference)
      textColor: '#070b13',
      glow: 'rgba(132, 204, 22, 0.45)',
      rotation: '-4deg',
    },
    {
      id: 'business-sectors',
      number: '10+',
      title: 'Business Sectors',
      desc: 'Solutions tailored to different industries and business needs.',
      bg: '#38bdf8', // Electric Cyan
      textColor: '#070b13',
      glow: 'rgba(56, 189, 248, 0.45)',
      rotation: '3deg',
    },
    {
      id: 'client-focused',
      number: '100%',
      title: 'Client-Focused Approach',
      desc: "Every project starts by understanding the client's requirements.",
      bg: '#fde047', // Cyber Yellow
      textColor: '#070b13',
      glow: 'rgba(253, 224, 71, 0.45)',
      rotation: '-3deg',
    },
  ],
  products: [
    {
      id: 'digital-products',
      number: '10+',
      title: 'Digital Products',
      desc: 'Practical tools and software built to solve everyday problems.',
      bg: '#84cc16',
      textColor: '#070b13',
      glow: 'rgba(132, 204, 22, 0.45)',
      rotation: '-4deg',
    },
    {
      id: 'tech-areas',
      number: '5+',
      title: 'Technology Areas',
      desc: 'Web, mobile, automation, AI and business software.',
      bg: '#38bdf8',
      textColor: '#070b13',
      glow: 'rgba(56, 189, 248, 0.45)',
      rotation: '3deg',
    },
    {
      id: 'access-24-7',
      number: '24/7',
      title: 'Access When You Need It',
      desc: 'Suitable for products designed for online, always-available access.',
      bg: '#fde047',
      textColor: '#070b13',
      glow: 'rgba(253, 224, 71, 0.45)',
      rotation: '-3deg',
    },
  ],
  academic: [
    {
      id: 'student-projects',
      number: '120+',
      title: 'Student Projects',
      desc: 'Academic ideas developed into practical project implementations.',
      bg: '#84cc16',
      textColor: '#070b13',
      glow: 'rgba(132, 204, 22, 0.45)',
      rotation: '-4deg',
    },
    {
      id: 'tech-domains',
      number: '10+',
      title: 'Technology Domains',
      desc: 'Java, web development, AI/ML, IoT and embedded systems.',
      bg: '#38bdf8',
      textColor: '#070b13',
      glow: 'rgba(56, 189, 248, 0.45)',
      rotation: '3deg',
    },
    {
      id: 'project-support',
      number: '3-in-1',
      title: 'Complete Project Support',
      desc: 'Development, documentation and demonstration preparation.',
      bg: '#fde047',
      textColor: '#070b13',
      glow: 'rgba(253, 224, 71, 0.45)',
      rotation: '-3deg',
    },
  ],
};

export default function NexusMetricsShowcase({ activeTab, onOpenInquiry }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  const metricsList = CATEGORY_METRICS[activeTab] || CATEGORY_METRICS.client;
  const currentMetric = metricsList[activeIndex] || metricsList[0];

  useEffect(() => {
    let animId = null;
    let ticking = false;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Early exit if off-screen to save CPU
      if (rect.bottom < -100 || rect.top > windowHeight + 100) return;

      const totalDist = rect.height - windowHeight;
      if (totalDist <= 0) return;

      const scrolled = -rect.top;
      const rawProgress = scrolled / totalDist;
      const clamped = Math.max(0, Math.min(0.999, rawProgress));

      // Map progress to active index (0, 1, 2)
      const count = metricsList.length;
      const newIndex = Math.min(count - 1, Math.floor(clamped * count));

      if (newIndex !== activeIndexRef.current) {
        activeIndexRef.current = newIndex;
        setActiveIndex(newIndex);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        animId = requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [metricsList.length]);

  return (
    <section className="nexus-metrics-section" ref={containerRef} id="nexus-impact-effect">
      <div className="nexus-metrics-track">
        {/* Sticky Stage: Locks in viewport while user scrolls through metrics */}
        <div className="nexus-metrics-sticky-stage">
          {/* Interactive Cyber Dot Grid with Mouse-Tracking Blue Pixel Morph (Same as Top Hero) */}
          <InteractiveMatrixCanvas />
          <div className="why-choose-ambient-purple"></div>

          <div className="nexus-metrics-container">
            {/* Header: Exact font style and size from Yellow.ai Image 2 */}
            <div className="nexus-metrics-header">
              <h2 className="nexus-metrics-main-title">The Triovexa Effect</h2>
              
            </div>

            {/* Clean 3-Column Metrics Showcase Row (Image 2 Reference) */}
            <div className="nexus-metrics-row">
              {/* Left Column: Scope & Title */}
              <div className="nexus-metric-col-left">
                <span className="nexus-metric-title">{currentMetric.title}</span>
                <span className="nexus-metric-scope">{currentMetric.scope}</span>
              </div>

              {/* Center Column: The Signature Tilted Neon Card + Attached Agent Pill */}
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

                {/* Sleek Agent Pill directly beneath the tilted card (User Image 2 exact match) */}
                <div className="nexus-agent-interactive-container">
                  
                  <button
                    type="button"
                    className="nexus-agent-action-pill"
                    onClick={() =>
                      onOpenInquiry &&
                      onOpenInquiry({
                        name: 'The Triovexa Effect Consultation',
                        type: activeTab,
                      })
                    }
                  >
                    
                    <i className="ri-volume-up-line nexus-agent-sound-icon"></i>
                    <span className="nexus-agent-btn-text">Talk to our team</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Clear Concise Explanation */}
              <div className="nexus-metric-col-right">
                <p className="nexus-metric-desc">{currentMetric.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
