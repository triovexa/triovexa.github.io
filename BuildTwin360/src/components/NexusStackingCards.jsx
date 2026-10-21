import React, { useState, useEffect, useRef, useCallback } from 'react';
import ProjectImageSlideshow from './ProjectImageSlideshow';

export default function NexusStackingCards({ projects, onOpenInquiry }) {
  const trackRef = useRef(null);
  const cardsRef = useRef([]);
  const dimOverlayRefs = useRef([]);

  // Settled, soft light pastel themes matching Yellow.ai Nexus reference aesthetic (Images 1, 2, 3)
  // Clean solid dark typography, zero eye-straining high-contrast neon/multicolor
  const cardThemes = [
    {
      bg: '#FEF38B', // Soft Pastel Lemon Yellow (Exact Yellow.ai Image 1 Reference)
      textColor: '#070b13',
      pillBg: '#070b13',
      pillColor: '#ffffff',
      descColor: '#1e293b',
      checkColor: '#070b13',
      chipBg: 'rgba(0, 0, 0, 0.07)',
      chipColor: '#070b13',
      badgeBg: 'rgba(0, 0, 0, 0.08)',
      badgeColor: '#070b13',
      btnBg: '#070b13',
      btnColor: '#ffffff',
    },
    {
      bg: '#F5F3E9', // Warm Oatmeal / Cream (Exact Yellow.ai Image 2 Reference)
      textColor: '#070b13',
      pillBg: '#070b13',
      pillColor: '#ffffff',
      descColor: '#1e293b',
      checkColor: '#070b13',
      chipBg: 'rgba(0, 0, 0, 0.07)',
      chipColor: '#070b13',
      badgeBg: 'rgba(0, 0, 0, 0.08)',
      badgeColor: '#070b13',
      btnBg: '#070b13',
      btnColor: '#ffffff',
    },
    {
      bg: '#EBE4F9', // Soft Pastel Lavender / Lilac (Exact Yellow.ai Image 3 Reference)
      textColor: '#070b13',
      pillBg: '#070b13',
      pillColor: '#ffffff',
      descColor: '#1e293b',
      checkColor: '#070b13',
      chipBg: 'rgba(0, 0, 0, 0.07)',
      chipColor: '#070b13',
      badgeBg: 'rgba(0, 0, 0, 0.08)',
      badgeColor: '#070b13',
      btnBg: '#070b13',
      btnColor: '#ffffff',
    },
    {
      bg: '#E2F4E9', // Subtle Mint / Sage Mist
      textColor: '#070b13',
      pillBg: '#070b13',
      pillColor: '#ffffff',
      descColor: '#1e293b',
      checkColor: '#070b13',
      chipBg: 'rgba(0, 0, 0, 0.07)',
      chipColor: '#070b13',
      badgeBg: 'rgba(0, 0, 0, 0.08)',
      badgeColor: '#070b13',
      btnBg: '#070b13',
      btnColor: '#ffffff',
    },
    {
      bg: '#E6F0FA', // Soft Sky / Ice Blue Mist
      textColor: '#070b13',
      pillBg: '#070b13',
      pillColor: '#ffffff',
      descColor: '#1e293b',
      checkColor: '#070b13',
      chipBg: 'rgba(0, 0, 0, 0.07)',
      chipColor: '#070b13',
      badgeBg: 'rgba(0, 0, 0, 0.08)',
      badgeColor: '#070b13',
      btnBg: '#070b13',
      btnColor: '#ffffff',
    },
    {
      bg: '#FDEEE2', // Subtle Warm Apricot / Peach
      textColor: '#070b13',
      pillBg: '#070b13',
      pillColor: '#ffffff',
      descColor: '#1e293b',
      checkColor: '#070b13',
      chipBg: 'rgba(0, 0, 0, 0.07)',
      chipColor: '#070b13',
      badgeBg: 'rgba(0, 0, 0, 0.08)',
      badgeColor: '#070b13',
      btnBg: '#070b13',
      btnColor: '#ffffff',
    },
    {
      bg: '#FCE7F3', // Soft Pastel Rose Blush
      textColor: '#070b13',
      pillBg: '#070b13',
      pillColor: '#ffffff',
      descColor: '#1e293b',
      checkColor: '#070b13',
      chipBg: 'rgba(0, 0, 0, 0.07)',
      chipColor: '#070b13',
      badgeBg: 'rgba(0, 0, 0, 0.08)',
      badgeColor: '#070b13',
      btnBg: '#070b13',
      btnColor: '#ffffff',
    },
    {
      bg: '#F1F5F9', // Crisp Pearl / Slate Neutral
      textColor: '#070b13',
      pillBg: '#070b13',
      pillColor: '#ffffff',
      descColor: '#1e293b',
      checkColor: '#070b13',
      chipBg: 'rgba(0, 0, 0, 0.07)',
      chipColor: '#070b13',
      badgeBg: 'rgba(0, 0, 0, 0.08)',
      badgeColor: '#070b13',
      btnBg: '#070b13',
      btnColor: '#ffffff',
    },
  ];

  const totalCards = projects.length;
  const numTransitions = Math.max(1, totalCards - 1);
  const step = 1 / numTransitions;

  // Track height calculation: Each transition gets 70vh of scroll distance
  const trackHeightStyle = `${100 + numTransitions * 70}vh`;

  // Hardware-accelerated direct DOM transform applicator (zero React re-render lag during scroll)
  // Universal multi-card cascading deck physics: EVERY card from 0 to N-1 follows the exact same continuous mapping
  const applyCardTransforms = useCallback(
    (progressVal) => {
      // currentFloatIndex ranges smoothly from 0.0 (Card 0 active) to numTransitions (Card N-1 active)
      const currentFloatIndex = progressVal * numTransitions;

      cardsRef.current.forEach((cardEl, index) => {
        if (!cardEl) return;
        const dimOverlayEl = dimOverlayRefs.current[index];

        // rel: relative position of current scroll point to this card
        // rel < 0: card is in future (has not arrived or is sliding up)
        // rel == 0: card is active in center
        // rel > 0: card has been passed and is stacked behind
        const rel = currentFloatIndex - index;

        if (rel <= -1.0) {
          // Card has not reached entrance window yet: cleanly parked off-stage below
          cardEl.style.transform = 'translate3d(0, 105%, 0) scale(1)';
          cardEl.style.opacity = '0';
          cardEl.style.visibility = 'hidden';
          cardEl.style.pointerEvents = 'none';
          if (dimOverlayEl) dimOverlayEl.style.opacity = '0';
          return;
        }

        if (rel < 0) {
          // Card is currently sliding UP directly over the previous card
          // enterProgress goes from 0.0 (at rel = -1) to 1.0 (at rel = 0)
          const enterProgress = rel + 1.0;
          
          // Silky smooth sine ease-out curve ensuring momentum matches natural wheel scroll
          const easeProgress = Math.sin((enterProgress * Math.PI) / 2);
          const translateY = (1 - easeProgress) * 104;

          cardEl.style.transform = `translate3d(0, ${translateY.toFixed(2)}%, 0) scale(1)`;
          cardEl.style.opacity = '1';
          cardEl.style.visibility = 'visible';
          cardEl.style.pointerEvents = 'auto';
          if (dimOverlayEl) dimOverlayEl.style.opacity = '0';
          return;
        }

        // rel >= 0: Card is active (rel = 0) or stacked behind newer cards (rel > 0)
        // Multi-card physical deck cascade:
        // Each stacked card shifts UP progressively (-22px, -44px, -66px) and scales down gently (0.96, 0.92, 0.88)
        // This ensures the top colored edge of EVERY previous card is always clearly visible behind newer cards!
        const clampedRel = Math.min(3.5, rel);
        const translateY = -clampedRel * 22;
        const scale = Math.max(0.88, 1 - clampedRel * 0.04);
        const dimOpacity = Math.min(0.35, clampedRel * 0.11);

        // Older cards beyond 3 layers back gracefully fade out to avoid top-edge clutter
        let opacity = 1;
        if (rel > 3.0) {
          opacity = Math.max(0, 1 - (rel - 3.0) * 1.5);
        }

        cardEl.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
        cardEl.style.opacity = `${opacity.toFixed(2)}`;
        cardEl.style.visibility = opacity > 0.01 ? 'visible' : 'hidden';
        cardEl.style.pointerEvents = rel < 0.85 ? 'auto' : 'none';
        if (dimOverlayEl) dimOverlayEl.style.opacity = `${dimOpacity.toFixed(2)}`;
      });
    },
    [numTransitions]
  );

  // Buttery-smooth 60-120 FPS requestAnimationFrame Scroll Listener (Zero React re-render overhead)
  useEffect(() => {
    let animId = null;
    let ticking = false;

    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const trackHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Early exit if completely off-screen to save GPU/CPU cycles
      if (rect.bottom < -120 || rect.top > windowHeight + 120) return;

      const totalScrollable = trackHeight - windowHeight;
      if (totalScrollable <= 0) {
        applyCardTransforms(0);
        return;
      }

      const scrolled = -rect.top;
      const rawProgress = scrolled / totalScrollable;
      const clamped = Math.max(0, Math.min(1, rawProgress));

      applyCardTransforms(clamped);
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
    window.addEventListener('resize', onScroll, { passive: true });

    // Initial setup on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [applyCardTransforms]);

  return (
    <div
      ref={trackRef}
      className="nexus-track-container"
      style={{ height: trackHeightStyle }}
    >
      {/* Sticky Stage: Locks in viewport while cards stack */}
      <div className="nexus-sticky-stage">
        <div className="nexus-deck-wrapper">
          {/* Deck Container with bounded, responsive height */}
          <div className="nexus-card-deck">
            {projects.map((project, index) => {
              const theme = cardThemes[index % cardThemes.length];

              return (
                <article
                  key={project.id}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="nexus-stack-card"
                  style={{
                    backgroundColor: theme.bg,
                    color: theme.textColor,
                    zIndex: 10 + index,
                  }}
                >
                  {/* Zero-filter GPU dimming overlay replacing heavy brightness() filter */}
                  <div
                    ref={(el) => (dimOverlayRefs.current[index] = el)}
                    className="nexus-card-dim-overlay"
                    aria-hidden="true"
                  />

                  <div className="nexus-card-inner">
                    {/* Left Column: Clean Project Details per Yellow.ai Reference */}
                    <div className="nexus-card-left">
                      {/* Single Clean Tag Pill */}
                      <div className="nexus-pill-row">
                        <span
                          className="nexus-tag-pill"
                          style={{
                            backgroundColor: theme.pillBg,
                            color: theme.pillColor,
                          }}
                        >
                          {project.tagPill}
                        </span>
                      </div>

                      {/* Project Heading */}
                      <h2
                        className="nexus-card-title"
                        style={{ color: theme.textColor }}
                      >
                        {project.title}
                      </h2>

                      {/* What is What: Clean Bullet Points with Round Dots */}
                      {project.features && (
                        <ul className="nexus-card-bullets">
                          {project.features.map((feat, fIdx) => (
                            <li key={fIdx} style={{ color: theme.textColor }}>
                              <span
                                className="nexus-bullet-dot"
                                style={{ color: theme.checkColor }}
                              >
                                •
                              </span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Tech Stack Chips */}
                      {project.techStack && (
                        <div className="nexus-card-chips">
                          {project.techStack.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="nexus-tech-chip"
                              style={{
                                backgroundColor: theme.chipBg,
                                color: theme.chipColor,
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Action: Live Demo / Authorized Software */}
                      <div className="nexus-card-actions">
                        {project.hasLiveLink && project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn nexus-btn-action"
                            style={{
                              backgroundColor: theme.btnBg,
                              color: theme.btnColor,
                            }}
                          >
                            <span>Live Demo</span>
                            <i className="ri-external-link-line"></i>
                          </a>
                        ) : project.portalDomain ? (
                          <div
                            className="nexus-private-badge"
                            style={{
                              backgroundColor: theme.badgeBg,
                              color: theme.badgeColor,
                            }}
                          >
                            <i className="ri-shield-keyhole-line"></i>
                            <span>Authorized Software</span>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() =>
                              onOpenInquiry &&
                              onOpenInquiry({
                                name: project.title,
                                type: project.demoModalTag || 'project-demo-request',
                              })
                            }
                            className="btn nexus-btn-action"
                            style={{
                              backgroundColor: theme.btnBg,
                              color: theme.btnColor,
                            }}
                          >
                            <span>Request Live Demo</span>
                            <i className="ri-arrow-right-up-line"></i>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Clean Photo Preview with 1.5-second Auto-Slideshow */}
                    <div className="nexus-card-right">
                      <div className="nexus-card-device">
                        <ProjectImageSlideshow
                          images={project.images || (project.image ? [project.image] : [])}
                          fallback={project.image || '/assets/images/projects/lithin-transport.jpg'}
                          alt={project.title}
                          className="nexus-slideshow-container"
                          imgClassName="nexus-chrome-img"
                          interval={1500}
                          isActive={true}
                        />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
