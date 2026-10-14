import React, { useState, useEffect } from 'react';
import ProjectsNavbar from '../components/ProjectsNavbar';
import NexusStackingCards from '../components/NexusStackingCards';
import ProjectsOverviewGrid from '../components/ProjectsOverviewGrid';
import CTASection from '../components/CTASection';
import ServicesFooter from '../components/ServicesFooter';
import InquiryModal from '../components/InquiryModal';
import WhyChooseInteractiveHero from '../components/WhyChooseInteractiveHero';
import {
  PROJECT_CATEGORIES,
  CLIENT_PROJECTS,
  IN_HOUSE_PRODUCTS,
  ACADEMIC_PROJECTS,
} from '../data/projectsData';
import '../styles/projects.css';

export default function Projects() {
  // Read active tab from URL query param if present
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab');
      if (['client', 'products', 'academic'].includes(tabParam)) {
        return tabParam;
      }
    }
    return 'client';
  });

  // Inquiry modal state
  const [modalState, setModalState] = useState({
    isOpen: false,
    selectedService: null,
  });

  const handleOpenInquiry = (service) => {
    setModalState({
      isOpen: true,
      selectedService: service || { name: 'Projects & Products Consultation', type: 'general' },
    });
  };

  const handleCloseInquiry = () => {
    setModalState({ isOpen: false, selectedService: null });
  };

  // Switch tab and sync with browser URL
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('tab', tabId);
      window.history.pushState(null, '', url.pathname + url.search);

      // Scroll smoothly to top of cards
      const cardsEl = document.getElementById('nexus-cards-showcase');
      if (cardsEl) {
        cardsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleScrollToGrid = () => {
    const gridEl = document.getElementById('all-projects-grid');
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Listen to popstate (back/forward browser buttons)
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab');
      if (['client', 'products', 'academic'].includes(tabParam)) {
        setActiveTab(tabParam);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const currentCategory = PROJECT_CATEGORIES.find((cat) => cat.id === activeTab) || PROJECT_CATEGORIES[0];

  let currentProjects = CLIENT_PROJECTS;
  if (activeTab === 'products') {
    currentProjects = IN_HOUSE_PRODUCTS;
  } else if (activeTab === 'academic') {
    currentProjects = ACADEMIC_PROJECTS;
  }

  return (
    <div className="projects-page-wrapper">
      {/* Navigation Header */}
      <ProjectsNavbar
        activeTab={activeTab}
        onSelectTab={handleTabChange}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* 1. Yellow.ai Nexus Interactive Floating Orbs Hero (Top of Page for All 3 Categories) */}
      <WhyChooseInteractiveHero
        activeTab={activeTab}
        onSelectTab={handleTabChange}
      />

      {/* 2. Step-by-Step White Chevron Transition (Yellow.ai Nexus Reference Style) */}
      <div className="nexus-chevron-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="nexus-chevron-svg">
          <path d="M0,120 L720,0 L1440,120 L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* 3. White Background Showcase Section (Holding Stacking Cards & Overview Grid) */}
      <section className="nexus-white-showcase-section" id="nexus-cards-showcase">
        <div className="nexus-white-container">
          {/* Clean Heading on White Canvas */}
          <div className="nexus-white-header">
            <span className="nexus-white-pill">
              <i className={currentCategory.icon}></i> {currentCategory.label}
            </span>
            <h2 className="nexus-white-title">
              Featured Innovation <span className="nexus-white-title-gradient">Projects</span>
            </h2>
            <p className="nexus-white-subtitle">
              Engineered with industrial precision, zero emulation, and production-grade architectures. Scroll to explore each milestone.
            </p>
          </div>

          {/* Yellow.ai Nexus Interactive Stacking & Zoom-Out Cards Showcase */}
          <div className="nexus-cards-showcase-section">
            <NexusStackingCards
              key={activeTab}
              projects={currentProjects}
              onOpenInquiry={handleOpenInquiry}
              onScrollToGrid={handleScrollToGrid}
            />
          </div>

          {/* All Projects Grid Overview */}
          <ProjectsOverviewGrid
            category={currentCategory}
            projects={currentProjects}
            onOpenInquiry={handleOpenInquiry}
          />
        </div>
      </section>

      {/* 4. CTA Section - View Our Projects button is hidden on projects page per user request */}
      <CTASection onOpenInquiry={handleOpenInquiry} showProjectsButton={false} />

      {/* 4. Footer */}
      <ServicesFooter onOpenInquiry={handleOpenInquiry} />

      {/* 5. Inquiry Modal */}
      <InquiryModal
        isOpen={modalState.isOpen}
        onClose={handleCloseInquiry}
        selectedService={modalState.selectedService}
      />
    </div>
  );
}
