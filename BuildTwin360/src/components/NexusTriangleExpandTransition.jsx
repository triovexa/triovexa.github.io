import React, { useEffect, useRef } from 'react';
import NexusStackingCards from './NexusStackingCards';

/**
 * NexusTriangleExpandTransition Component (Yellow.ai NEXUS Exact Architecture)
 * Unified single-UI section:
 * - All project details, heading, and stacking cards live in ONE white-background layer
 * - The white layer is directly clipped by the expanding triangle polygon
 * - Zero separate canvas layers, zero opacity ghosting, zero duplicate headings
 * - Starts immediately below the hero with zero empty black gap
 */

export default function NexusTriangleExpandTransition({
  activeTab,
  currentCategory,
  currentProjects,
  onOpenInquiry,
}) {
  const sectionRef = useRef(null);
  const whiteLayerRef = useRef(null);

  useEffect(() => {
    let animId = null;
    let targetProgress = 0;
    let currentProgress = 0;
    let isAnimating = false;

    const updateFrame = () => {
      // Responsive lerp interpolation for buttery smooth scroll
      const diff = targetProgress - currentProgress;
      currentProgress += diff * 0.35;

      if (Math.abs(diff) < 0.001) {
        currentProgress = targetProgress;
        isAnimating = false;
      }

      const p = currentProgress;

      if (p >= 0.98) {
        // Full screen expansion: On mobile, bottom is straight to avoid cutting metrics heading.
        // On desktop, right-side slant smoothly straightens out as user reaches The Triovexa Effect.
        if (whiteLayerRef.current) {
          if (window.innerWidth <= 880) {
            whiteLayerRef.current.style.clipPath = 'none';
          } else {
            const rect = sectionRef.current?.getBoundingClientRect();
            const windowHeight = window.innerHeight || 800;
            const distFromBottom = rect ? rect.bottom - windowHeight : 1000;
            if (distFromBottom < 450) {
              const factor = Math.max(0, Math.min(1, distFromBottom / 450));
              const slant = Math.round(150 * factor);
              whiteLayerRef.current.style.clipPath = slant > 4
                ? `polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - ${slant}px))`
                : 'none';
            } else {
              whiteLayerRef.current.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 150px))';
            }
          }
        }
      } else {
        // Geometry calculations for expanding triangle (Yellow.ai Nexus Reference)
        // Apex is locked at top-center of white layer (0px), while width and side slopes expand
        const peakY = 0;
        let leftX = 40;
        let rightX = 60;
        const baseSideY = Math.min(650, (window.innerHeight || 800) * 0.72);
        let sideY = baseSideY;

        if (p <= 0.72) {
          const p1 = p / 0.72;
          // Widens from 20% (40-60) to 100% (0-100)
          const halfWidth = 10 + p1 * 42;
          leftX = Math.max(0, 50 - halfWidth);
          rightX = Math.min(100, 50 + halfWidth);
          sideY = baseSideY;
        } else {
          // Progress > 0.72: width is 100%, side slopes rise up to 0px to form full rectangular canvas
          const p2 = (p - 0.72) / 0.28;
          leftX = 0;
          rightX = 100;
          sideY = Math.max(0, baseSideY - p2 * baseSideY);
        }

        const clipPathString = `polygon(50% ${peakY}px, ${rightX.toFixed(1)}% ${sideY.toFixed(1)}px, 100% 100%, 0% 100%, ${leftX.toFixed(1)}% ${sideY.toFixed(1)}px)`;

        if (whiteLayerRef.current) {
          whiteLayerRef.current.style.clipPath = clipPathString;
        }
      }

      if (isAnimating) {
        animId = requestAnimationFrame(updateFrame);
      }
    };

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || 800;

      // Starts only when section scrolls into viewport from below
      // Completes in ~480px of natural scroll as section meets navbar
      const travel = Math.min(500, windowHeight * 0.65);
      const scrolled = windowHeight - rect.top;
      const rawProgress = Math.max(0, Math.min(1, scrolled / travel));
      targetProgress = rawProgress;

      if (!isAnimating) {
        isAnimating = true;
        animId = requestAnimationFrame(updateFrame);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="nexus-showcase-unified-section" id="nexus-cards-showcase">
      {/* Background Cyber Dot Grid outside the triangle */}
      <div className="nexus-unified-bg-grid" aria-hidden="true"></div>

      {/* The ONE White Layer containing heading & cards, clipped by the expanding triangle */}
      <div
        ref={whiteLayerRef}
        className="nexus-unified-white-layer"
        style={{ clipPath: 'polygon(50% 0px, 60% 500px, 100% 100%, 0% 100%, 40% 500px)' }}
      >

        {/* All Project Details and Heading inside the ONE white UI */}
        <div className="nexus-white-container">
          <div className="nexus-white-header">
            <div className="nexus-white-pill">
              <i className={currentCategory.icon}></i>
              <span>{currentCategory.label}</span>
            </div>
            <h2 className="nexus-white-title">
              Featured Innovation <span className="nexus-white-title-gradient">Projects</span>
            </h2>

          </div>

          {/* Stacking Cards Deck directly inside the white UI */}
          <div className="nexus-cards-showcase-section">
            <NexusStackingCards
              key={activeTab}
              projects={currentProjects}
              onOpenInquiry={onOpenInquiry}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
