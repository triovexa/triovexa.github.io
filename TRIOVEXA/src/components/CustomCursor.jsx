import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Check if the device uses touch screen without fine pointer
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      return;
    }

    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Glowing dot follows real default cursor position
      dot.style.left = `${posX}px`;
      dot.style.top = `${posY}px`;

      // Trailing outline circle follows with smooth delay
      outline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        {
          duration: 500,
          fill: 'forwards',
        }
      );
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Dynamic hover scaling over buttons, links, and inputs
    const handleElementHover = (e) => {
      const target = e.target;
      if (
        target &&
        target.closest &&
        target.closest('a, button, .btn, input, textarea, select, [role="button"]')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleElementHover);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, [isVisible]);

  return (
    <>
      {/* Chinna Glowing Dot in Website UI Color at Cursor Tip */}
      <div
        ref={dotRef}
        className={`cursor-dot ${isVisible ? 'visible' : ''} ${isClicking ? 'clicking' : ''}`}
      />

      {/* Trailing Outer Outline Circle in Website UI Color */}
      <div
        ref={outlineRef}
        className={`cursor-outline ${isVisible ? 'visible' : ''} ${isHovered ? 'hovered' : ''} ${isClicking ? 'clicking' : ''}`}
      />
    </>
  );
}
