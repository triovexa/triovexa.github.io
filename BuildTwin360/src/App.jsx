import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import BackgroundEffects from './components/BackgroundEffects';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import AboutUs from './pages/AboutUs';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';

import './styles/projects.css';

/**
 * HashUrlRedirector:
 * Handles fallback hashes (e.g. #/services or #/projects) from GitHub Pages
 * and redirects cleanly to standard routes.
 */
function HashUrlRedirector() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#/')) {
      const cleanRoute = hash.slice(1);
      navigate(cleanRoute, { replace: true });
    }
  }, [location, navigate]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Hash fallback redirector for GitHub Pages SPA support */}
      <HashUrlRedirector />

      {/* Custom Red Dot & Trailing Circle Cursor */}
      <CustomCursor />

      {/* Background Ambient Aurora Particles */}
      <BackgroundEffects />

      {/* Global Navigation Bar (Header from Selvamani) */}
      <Navbar />

      {/* Main Page Routing */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/products-projects" element={<Projects />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiry" element={<Contact />} />

          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Footer (Footer from Selvamani) */}
      <Footer />
    </BrowserRouter>
  );
}
