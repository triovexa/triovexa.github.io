import React, { useState, useEffect, useRef } from 'react';

/**
 * NexusTriangleExpandTransition Component
 * Replicates the Yellow.ai NEXUS scroll-driven expanding triangle transition.
 * Starts as a small sharp white triangle peak at the bottom of the dark hero,
 * and smoothly zooms/expands into a full-width white canvas as the user scrolls down.
 */

export default function NexusTriangleExpandTransition({ currentCategory }) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animId = null;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start transition as soon as track enters viewport and completes when pinned stage scrolls through
      const totalScrollable = rect.height;
      const currentScroll = windowHeight - rect.top;
      const rawProgress = currentScroll / totalScrollable;
      const clamped = Math.max(0, Math.min(1, rawProgress));

      animId = requestAnimationFrame(() => {
        setProgress(clamped);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  // Geometry calculations for expanding triangle
  let peakY = 88;
  let leftX = 42;
  let rightX = 58;
  let sideY = 100;

  if (progress <= 0.75) {
    const p1 = progress / 0.75;
    peakY = Math.max(2, Math.round(88 - p1 * 86)); // from 88% down to 2%
    const halfWidth = 8 + p1 * 44; // from 8% up to 52%
    leftX = Math.max(0, Math.round(50 - halfWidth));
    rightX = Math.min(100, Math.round(50 + halfWidth));
    sideY = 100;
  } else {
    // When progress > 0.75, width has hit 100%, and side vertices rise up to 0% to form full canvas
    const p2 = (progress - 0.75) / 0.25;
    peakY = 0;
    leftX = 0;
    rightX = 100;
    sideY = Math.max(0, Math.round(100 - p2 * 100));
  }

  const clipPathString = `polygon(50% ${peakY}%, ${rightX}% ${sideY}%, 100% 100%, 0% 100%, ${leftX}% ${sideY}%)`;

  return (
    <div ref={containerRef} className="nexus-triangle-scroll-track" id="triangle-transition-zone">
      <div className="nexus-triangle-sticky-viewport">
        {/* Background Dot Grid for the surrounding space outside the triangle */}
        <div className="nexus-triangle-bg-grid" aria-hidden="true"></div>

        {/* The White Canvas Layer masked by the dynamically expanding triangle polygon */}
        <div
          className="nexus-expanding-triangle-canvas"
          style={{ clipPath: clipPathString }}
        >
          {/* Content revealed inside the growing white triangle */}
          <div
            className="nexus-triangle-content"
            style={{
              opacity: Math.min(1, Math.max(0, (progress - 0.12) * 2.2)),
              transform: `translateY(${Math.max(0, 35 - progress * 35)}px)`,
            }}
          >
            <div className="nexus-white-pill">
              <i className={currentCategory.icon}></i>
              <span>{currentCategory.label}</span>
            </div>
            <h2 className="nexus-white-title">
              Featured Innovation <span className="nexus-white-title-gradient">Projects</span>
            </h2>
            <p className="nexus-white-subtitle">
              Engineered with industrial precision, zero emulation, and production-grade architectures. Scroll to inspect each milestone.
            </p>
          </div>
        </div>

        {/* Floating speech card on triangle tip when small (Yellow.ai Image 1 reference) */}
        {progress < 0.45 && (
          <div
            className="nexus-triangle-tip-badge"
            style={{
              top: `${Math.max(20, peakY - 14)}%`,
              opacity: Math.max(0, 1 - progress * 2.8),
            }}
          >
            <div className="triangle-tip-speech">
              <span>Scroll down to inspect our production systems</span>
            </div>
            <div className="triangle-tip-pill">
              <i className="ri-arrow-down-double-line"></i>
              <span>Interactive Architecture Deck</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
