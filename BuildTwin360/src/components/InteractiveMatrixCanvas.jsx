import React, { useRef, useEffect } from 'react';

/**
 * InteractiveMatrixCanvas Component
 * Replicates the signature Yellow.ai dot-grid cursor interaction (User Image 5).
 * Moving the mouse over the dark canvas causes the grid dots to morph into
 * glowing neon blue / violet square pixels with radial falloff.
 */

export default function InteractiveMatrixCanvas({ className = '' }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000, isHovering: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId = null;

    let dpr = window.devicePixelRatio || 1;

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleWindowMouseMove = (e) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (isInside) {
        mouseRef.current.targetX = e.clientX - rect.left;
        mouseRef.current.targetY = e.clientY - rect.top;
        mouseRef.current.isHovering = true;
      } else {
        mouseRef.current.isHovering = false;
      }
    };

    const handleWindowMouseLeave = () => {
      mouseRef.current.isHovering = false;
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    window.addEventListener('mousemove', handleWindowMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleWindowMouseLeave);

    const DOT_SPACING = 24;
    const INFLUENCE_RADIUS = 145;

    const render = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Smooth mouse lerping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.18;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.18;

      ctx.save();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      const cols = Math.ceil(width / DOT_SPACING) + 1;
      const rows = Math.ceil(height / DOT_SPACING) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const gx = c * DOT_SPACING;
          const gy = r * DOT_SPACING;

          const dx = gx - mouseX;
          const dy = gy - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < INFLUENCE_RADIUS && mouseRef.current.isHovering) {
            // Interactive pixel expansion (User Image 5 style)
            const factor = Math.max(0, 1 - dist / INFLUENCE_RADIUS);
            const easeFactor = factor * factor; // smooth quad curve

            // Size grows from 2.5px up to 13.5px square
            const size = 2.5 + easeFactor * 11;

            // Gradient color from electric violet to neon blue
            // Matches User Image 5: bright center square with deep purple falloff
            const alpha = 0.25 + easeFactor * 0.75;
            if (factor > 0.6) {
              ctx.fillStyle = `rgba(99, 102, 241, ${alpha})`; // Bright Electric Indigo
              ctx.shadowColor = 'rgba(99, 102, 241, 0.9)';
              ctx.shadowBlur = 12 * easeFactor;
            } else if (factor > 0.3) {
              ctx.fillStyle = `rgba(139, 92, 246, ${alpha * 0.9})`; // Electric Violet
              ctx.shadowColor = 'rgba(139, 92, 246, 0.5)';
              ctx.shadowBlur = 6 * easeFactor;
            } else {
              ctx.fillStyle = `rgba(168, 85, 247, ${alpha * 0.7})`; // Soft Purple
              ctx.shadowColor = 'transparent';
              ctx.shadowBlur = 0;
            }

            // Draw rounded square pixel (matching Image 5)
            const x = gx - size / 2;
            const y = gy - size / 2;
            const radius = Math.min(2.5, size * 0.2);

            ctx.beginPath();
            ctx.roundRect(x, y, size, size, radius);
            ctx.fill();
            ctx.shadowBlur = 0;
          } else {
            // Default idle dot (clean matrix dot)
            ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
            ctx.beginPath();
            ctx.arc(gx, gy, 1.3, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleWindowMouseMove);
      document.removeEventListener('mouseleave', handleWindowMouseLeave);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`interactive-matrix-canvas ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}
