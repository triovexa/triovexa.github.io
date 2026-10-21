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
      id: 'pricing',
      label: 'Lowest Price & Top Quality',
      icon: 'ri-price-tag-3-line',
      bg: '#d8b4fe',
      textColor: '#3b0764',
      tagColor: '#581c87',
      glowColor: 'rgba(216, 180, 254, 0.6)',
      top: '46%',
      left: '16%',
      floatClass: 'float-anim-1',
      tag: 'BEST PRICE GUARANTEE',
      title: 'Lowest Price & Top Quality',
      desc: 'Industry-grade projects at student-friendly rates, far lower than competitors. Guaranteed working hardware, premium quality, and zero hidden costs.',
    },
    {
      id: 'ideas',
      label: '100+ Ideas & Custom Topics',
      icon: 'ri-lightbulb-line',
      bg: '#fde047',
      textColor: '#422006',
      tagColor: '#713f12',
      glowColor: 'rgba(253, 224, 71, 0.6)',
      top: '18%',
      left: '33%',
      floatClass: 'float-anim-2',
      tag: 'YOUR IDEA OR OURS',
      title: '100+ Ideas or Custom Topics',
      desc: 'Have your own unique idea? We build it from scratch! Need inspiration? Choose from 100+ trending IEEE and industry topics ready for faculty approval.',
    },
    {
      id: 'hardware-ai',
      label: 'Hardware & AI Integration',
      icon: 'ri-cpu-line',
      bg: '#84cc16',
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
      bg: '#fb923c',
      textColor: '#431407',
      tagColor: '#7c2d12',
      glowColor: 'rgba(251, 146, 60, 0.6)',
      top: '44%',
      left: '67%',
      floatClass: 'float-anim-4',
      tag: 'FULL REVIEW SUPPORT',
      title: 'Review PPTs & Report Included',
      desc: 'Full support for every review! Custom slide decks for Review 0, 1, 2, and Final Viva, plus a complete report in your college format.',
    },
    {
      id: 'mentoring',
      label: 'Live Mentoring & Trending Tech',
      icon: 'ri-customer-service-2-line',
      bg: '#38bdf8',
      textColor: '#082f49',
      tagColor: '#0369a1',
      glowColor: 'rgba(56, 189, 248, 0.6)',
      top: '20%',
      left: '84%',
      floatClass: 'float-anim-5',
      tag: '1-ON-1 VIVA PREP',
      title: 'Live Mentoring & Trending Tech',
      desc: 'Projects built on trending tech: Python, React, AI/ML, and Mobile. Includes 1-on-1 live mentoring and code explanation so you ace your viva defense.',
    },
  ],
  client: [
    {
      id: 'vision-mission',
      label: 'Your Vision, Our Mission',
      icon: 'ri-shake-hands-line',
      bg: '#d8b4fe',
      textColor: '#3b0764',
      tagColor: '#581c87',
      glowColor: 'rgba(216, 180, 254, 0.6)',
      top: '46%',
      left: '16%',
      floatClass: 'float-anim-1',
      tag: 'GOAL ALIGNED',
      title: 'Your Vision, Our Mission',
      desc: 'We understand your business needs and turn your ideas into practical software solutions built around your goals.',
    },
    {
      id: 'quality-trust',
      label: 'Quality You Can Trust',
      icon: 'ri-shield-check-line',
      bg: '#fde047',
      textColor: '#422006',
      tagColor: '#713f12',
      glowColor: 'rgba(253, 224, 71, 0.6)',
      top: '18%',
      left: '33%',
      floatClass: 'float-anim-2',
      tag: 'TESTED & DEPENDABLE',
      title: 'Quality You Can Trust',
      desc: 'We focus on reliable functionality, clean design, and thorough testing to deliver a solution you can depend on.',
    },
    {
      id: 'clear-communication',
      label: 'Clear Communication',
      icon: 'ri-chat-3-line',
      bg: '#84cc16',
      textColor: '#14532d',
      tagColor: '#166534',
      glowColor: 'rgba(132, 204, 22, 0.65)',
      top: '62%',
      left: '50%',
      floatClass: 'float-anim-3',
      tag: 'TRANSPARENT SPRINT',
      title: 'Clear Communication',
      desc: 'Stay informed throughout the project with regular updates, open discussions, and transparent progress.',
    },
    {
      id: 'built-around-business',
      label: 'Built Around Your Business',
      icon: 'ri-equalizer-line',
      bg: '#fb923c',
      textColor: '#431407',
      tagColor: '#7c2d12',
      glowColor: 'rgba(251, 146, 60, 0.6)',
      top: '44%',
      left: '67%',
      floatClass: 'float-anim-4',
      tag: 'CUSTOM TAILORED',
      title: 'Built Around Your Business',
      desc: 'Every business is different. We tailor features and workflows to fit your actual requirements.',
    },
    {
      id: 'support-beyond',
      label: 'Support Beyond Delivery',
      icon: 'ri-line-chart-line',
      bg: '#38bdf8',
      textColor: '#082f49',
      tagColor: '#0369a1',
      glowColor: 'rgba(56, 189, 248, 0.6)',
      top: '20%',
      left: '84%',
      floatClass: 'float-anim-5',
      tag: 'LONG-TERM PARTNER',
      title: 'Support Beyond Delivery',
      desc: "Our relationship doesn't have to end at launch. We can help with maintenance, improvements, and future enhancements.",
    },
  ],
  products: [
    {
      id: 'simplify-work',
      label: 'Simplify Everyday Work',
      icon: 'ri-flashlight-line',
      bg: '#d8b4fe',
      textColor: '#3b0764',
      tagColor: '#581c87',
      glowColor: 'rgba(216, 180, 254, 0.6)',
      top: '46%',
      left: '16%',
      floatClass: 'float-anim-1',
      tag: 'EASY OPERATIONS',
      title: 'Simplify Everyday Work',
      desc: 'Reduce repetitive tasks and make everyday business operations easier with practical software tools.',
    },
    {
      id: 'everything-one-place',
      label: 'Everything in One Place',
      icon: 'ri-apps-2-line',
      bg: '#fde047',
      textColor: '#422006',
      tagColor: '#713f12',
      glowColor: 'rgba(253, 224, 71, 0.6)',
      top: '18%',
      left: '33%',
      floatClass: 'float-anim-2',
      tag: 'ALL-IN-ONE HUB',
      title: 'Everything in One Place',
      desc: 'Organize important information, workflows, and business activities through a convenient, centralized interface.',
    },
    {
      id: 'simple-team',
      label: 'Simple for Your Team',
      icon: 'ri-team-line',
      bg: '#84cc16',
      textColor: '#14532d',
      tagColor: '#166534',
      glowColor: 'rgba(132, 204, 22, 0.65)',
      top: '62%',
      left: '50%',
      floatClass: 'float-anim-3',
      tag: 'USER FRIENDLY',
      title: 'Simple for Your Team',
      desc: 'User-friendly interfaces help teams learn the system and complete tasks with less confusion.',
    },
    {
      id: 'security-conscious',
      label: 'Security-Conscious Design',
      icon: 'ri-lock-line',
      bg: '#fb923c',
      textColor: '#431407',
      tagColor: '#7c2d12',
      glowColor: 'rgba(251, 146, 60, 0.6)',
      top: '44%',
      left: '67%',
      floatClass: 'float-anim-4',
      tag: 'SECURE ACCESS',
      title: 'Security-Conscious Design',
      desc: "Build confidence with appropriate access controls and security practices designed for the product's needs.",
    },
    {
      id: 'ready-to-grow',
      label: 'Ready to Grow With You',
      icon: 'ri-puzzle-2-line',
      bg: '#38bdf8',
      textColor: '#082f49',
      tagColor: '#0369a1',
      glowColor: 'rgba(56, 189, 248, 0.6)',
      top: '20%',
      left: '84%',
      floatClass: 'float-anim-5',
      tag: 'FUTURE PROOF',
      title: 'Ready to Grow With You',
      desc: 'Choose software designed to support evolving workflows and future business needs.',
    },
  ],
};

const CATEGORY_TITLES = {
  academic: 'Why Future Engineers Choose',
  client: 'Why Industry Clients Choose',
  products: 'Why Scale-Ups & Enterprises Choose',
};

export default function WhyChooseInteractiveHero({ activeTab, onSelectTab }) {
  const [hoveredOrb, setHoveredOrb] = useState(null);
  const [pinnedOrb, setPinnedOrb] = useState(null);
  const stageRef = useRef(null);
  const isTouchDeviceRef = useRef(false);

  // activeOrbId is pinned (clicked) or hovered (desktop preview)
  const activeOrbId = pinnedOrb || hoveredOrb;
  const currentOrbs = CATEGORY_ORBS[activeTab] || CATEGORY_ORBS.client;
  const introTitle = CATEGORY_TITLES[activeTab] || 'Why Choose';

  // Detect touch devices to avoid sticky hover states on mobile/touch screens
  useEffect(() => {
    const handleTouch = () => {
      isTouchDeviceRef.current = true;
    };
    window.addEventListener('touchstart', handleTouch, { passive: true, once: true });
    return () => window.removeEventListener('touchstart', handleTouch);
  }, []);

  // Prevent mobile double-tap zoom on rapid taps within the hero
  useEffect(() => {
    let lastTouch = 0;
    const preventDoubleTapZoom = (e) => {
      const now = Date.now();
      if (now - lastTouch <= 300) {
        if (e.target.closest && e.target.closest('.why-choose-hero-section')) {
          e.preventDefault();
        }
      }
      lastTouch = now;
    };
    document.addEventListener('touchend', preventDoubleTapZoom, { passive: false });
    return () => {
      document.removeEventListener('touchend', preventDoubleTapZoom);
    };
  }, []);

  // Outside click listener: clicking/tapping anywhere else on the website closes the expanded circle
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.student-orb-node')) {
        setPinnedOrb(null);
        setHoveredOrb(null);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('touchend', handleOutsideClick, { passive: true });
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('touchend', handleOutsideClick);
    };
  }, []);

  // Clicking an orb:
  // If this orb is already open (activeOrbId === id), clicking it closes it back to normal icon!
  // If it is closed, clicking it opens it.
  const handleOrbClick = (e, id) => {
    e.stopPropagation();
    if (activeOrbId === id) {
      setPinnedOrb(null);
      setHoveredOrb(null);
    } else {
      setPinnedOrb(id);
      setHoveredOrb(null);
    }
  };

  // Direct touch handler for mobile: prevents synthetic click delays and closes instantly
  const handleOrbTouchEnd = (e, id) => {
    if (activeOrbId === id) {
      e.preventDefault();
      e.stopPropagation();
      setPinnedOrb(null);
      setHoveredOrb(null);
    }
  };

  const handleMouseEnter = (id) => {
    // Only allow hover expansion on desktop mice when no orb is pinned
    if (!isTouchDeviceRef.current && !pinnedOrb) {
      setHoveredOrb(id);
    }
  };

  const handleMouseLeave = () => {
    if (!pinnedOrb) {
      setHoveredOrb(null);
    }
  };

  return (
    <section className="why-choose-hero-section" ref={stageRef} id="why-choose-hero">
      {/* Interactive Cyber Dot Grid with Mouse-Tracking Blue Pixel Morph (User Image 5) */}
      <InteractiveMatrixCanvas />
      <div className="why-choose-ambient-purple"></div>

      {/* Screen Backdrop: when an orb is open, tapping anywhere on the screen dismisses it cleanly */}
      {activeOrbId && (
        <div
          className="why-choose-backdrop-dismiss"
          onClick={() => {
            setPinnedOrb(null);
            setHoveredOrb(null);
          }}
          onTouchEnd={(e) => {
            e.preventDefault();
            setPinnedOrb(null);
            setHoveredOrb(null);
          }}
          aria-hidden="true"
        />
      )}

      <div className="why-choose-container">
        {/* Dynamic Category-Tailored Title in Outfit font matching Yellow.ai Reference */}
        <span className="why-choose-intro-title">{introTitle}</span>

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
                  onMouseEnter={() => handleMouseEnter(orb.id)}
                  onMouseLeave={handleMouseLeave}
                  onClick={(e) => handleOrbClick(e, orb.id)}
                  onTouchEnd={(e) => handleOrbTouchEnd(e, orb.id)}
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
                    <button
                      type="button"
                      className="orb-close-pill-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPinnedOrb(null);
                        setHoveredOrb(null);
                      }}
                      onTouchEnd={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setPinnedOrb(null);
                        setHoveredOrb(null);
                      }}
                      aria-label="Close"
                    >
                      <i className="ri-close-line"></i>
                    </button>
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

        {/* Integrated Category Switcher Tabs (Tagline removed per user request) */}
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
