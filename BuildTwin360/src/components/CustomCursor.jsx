import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const posRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });
  const isVisibleRef = useRef(false);
  const animFrameRef = useRef(null);

  useEffect(() => {
    // Only disable on touch devices without a fine pointer
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      return;
    }

    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    const handleMouseMove = (e) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
        posRef.current.x = e.clientX;
        posRef.current.y = e.clientY;
      }

      // Tip dot tracks cursor synchronously with zero latency
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    // Smooth lerp trailing loop for outline circle (60-120fps GPU smooth)
    const renderLoop = () => {
      if (isVisibleRef.current) {
        const dx = targetRef.current.x - posRef.current.x;
        const dy = targetRef.current.y - posRef.current.y;

        posRef.current.x += dx * 0.2;
        posRef.current.y += dy * 0.2;

        if (outline) {
          outline.style.left = `${posRef.current.x}px`;
          outline.style.top = `${posRef.current.y}px`;
        }
      }
      animFrameRef.current = requestAnimationFrame(renderLoop);
    };

    animFrameRef.current = requestAnimationFrame(renderLoop);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    // Dynamic hover scaling over interactive elements
    const handleElementHover = (e) => {
      const target = e.target;
      if (
        target &&
        target.closest &&
        target.closest('a, button, .btn, input, textarea, select, [role="button"], .service-pro-card, .faq-question-btn, .industry-fan-card, .nexus-nav-link')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    document.addEventListener('mouseover', handleElementHover, { passive: true });

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, []);

  return (
    <>
      {/* Electric Cyan Neon Dot at Cursor Tip */}
      <div
        ref={dotRef}
        className={`cursor-dot ${isVisible ? 'visible' : ''} ${isClicking ? 'clicking' : ''}`}
      />

      {/* Smooth Trailing Outer Outline Circle in Electric Sky Blue */}
      <div
        ref={outlineRef}
        className={`cursor-outline ${isVisible ? 'visible' : ''} ${isHovered ? 'hovered' : ''} ${isClicking ? 'clicking' : ''}`}
      />
    </>
  );
}
