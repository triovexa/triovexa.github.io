import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AboutSection from '../components/AboutSection';
import '../styles/about-achievements.css';

export default function AboutUs() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!targetId) return;

    if (targetId === '#achievements' || targetId === 'achievements') {
      navigate('/achievements');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetId === '#contact' || targetId === 'contact' || targetId === '#enquiry') {
      navigate('/enquiry');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetId === '#services' || targetId === 'services') {
      navigate('/services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetId === '#projects' || targetId === 'projects') {
      navigate('/projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetId === '#home' || targetId === 'home') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="about-page-view" style={{ paddingTop: '5.5rem' }}>
      <AboutSection handleSmoothScroll={handleSmoothScroll} />
    </div>
  );
}
