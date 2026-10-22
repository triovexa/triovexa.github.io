import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import BackgroundEffects from './components/BackgroundEffects';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Services from './pages/Services';
import ProductsProjects from './pages/ProductsProjects';
import AboutUs from './pages/AboutUs';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      {/* Custom Red Dot & Trailing Circle Cursor */}
      <CustomCursor />

      {/* Background Ambient Aurora Particles */}
      <BackgroundEffects />

      {/* Global Navigation Bar */}
      <Navbar />

      {/* Main Page Routing - Exactly 6 Dedicated Pages */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products-projects" element={<ProductsProjects />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiry" element={<Contact />} />

          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
    </BrowserRouter>
  );
}
