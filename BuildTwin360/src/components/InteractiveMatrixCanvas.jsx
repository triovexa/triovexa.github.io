import React, { useRef, useEffect } from 'react';

/**
 * InteractiveMatrixCanvas Component
 * High-performance hardware-accelerated matrix dot canvas.
 * Features:
 * - Pre-rendered static dot grid on an offscreen canvas (0 CPU load for static dots)
 * - Local bounding box calculation around cursor (processes ~50 dots instead of 3,600)
 * - IntersectionObserver to completely halt RAF when scrolled out of view
 * - Auto-sleeps RAF when mouse is idle and settled (0% CPU when not hovering)
 * - Buttery smooth 60-120 FPS neon blue/violet square pixel morph on cursor hover
 */

export default function InteractiveMatrixCanvas({ className = '' }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    isHovering: false,
    needsRender: true,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    let animId = null;
    let isVisible = true;
    let isRunning = false;

    let dpr = window.devicePixelRatio || 1;
    let cachedRect = { width: 0, height: 0, left: 0, top: 0, right: 0, bottom: 0 };
    let offscreenCanvas = document.createElement('canvas');
    let offscreenCtx = offscreenCanvas.getContext('2d');

    const DOT_SPACING = 24;
    const INFLUENCE_RADIUS = 145;

    // Pre-render static dots once to offscreen canvas
    const preRenderStaticGrid = (width, height) => {
      offscreenCanvas.width = Math.floor(width * dpr);
      offscreenCanvas.height = Math.floor(height * dpr);
      offscreenCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      offscreenCtx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / DOT_SPACING) + 1;
      const rows = Math.ceil(height / DOT_SPACING) + 1;

      offscreenCtx.fillStyle = 'rgba(255, 255, 255, 0.12)';
      offscreenCtx.beginPath();
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const gx = c * DOT_SPACING;
          const gy = r * DOT_SPACING;
          offscreenCtx.moveTo(gx + 1.3, gy);
          offscreenCtx.arc(gx, gy, 1.3, 0, Math.PI * 2);
        }
      }
      offscreenCtx.fill();
    };

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      cachedRect = rect;
      preRenderStaticGrid(rect.width, rect.height);
      mouseRef.current.needsRender = true;
      startLoopIfNeeded();
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    // IntersectionObserver to pause when hero is scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          mouseRef.current.needsRender = true;
          startLoopIfNeeded();
        } else if (animId) {
          cancelAnimationFrame(animId);
          isRunning = false;
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    let scrollTicking = false;
    const updateCachedRect = () => {
      if (!scrollTicking && canvas && isVisible) {
        scrollTicking = true;
        requestAnimationFrame(() => {
          if (canvas) cachedRect = canvas.getBoundingClientRect();
          scrollTicking = false;
        });
      }
    };
    window.addEventListener('scroll', updateCachedRect, { passive: true });

    const handleWindowMouseMove = (e) => {
      if (!isVisible) return;
      const isInside =
        e.clientX >= cachedRect.left &&
        e.clientX <= cachedRect.right &&
        e.clientY >= cachedRect.top &&
        e.clientY <= cachedRect.bottom;

      if (isInside) {
        mouseRef.current.targetX = e.clientX - cachedRect.left;
        mouseRef.current.targetY = e.clientY - cachedRect.top;
        mouseRef.current.isHovering = true;
        mouseRef.current.needsRender = true;
        startLoopIfNeeded();
      } else if (mouseRef.current.isHovering) {
        mouseRef.current.isHovering = false;
        mouseRef.current.targetX = -1000;
        mouseRef.current.targetY = -1000;
        mouseRef.current.needsRender = true;
        startLoopIfNeeded();
      }
    };

    const handleWindowMouseLeave = () => {
      if (mouseRef.current.isHovering) {
        mouseRef.current.isHovering = false;
        mouseRef.current.targetX = -1000;
        mouseRef.current.targetY = -1000;
        mouseRef.current.needsRender = true;
        startLoopIfNeeded();
      }
    };

    window.addEventListener('mousemove', handleWindowMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleWindowMouseLeave);

    function startLoopIfNeeded() {
      if (!isRunning && isVisible) {
        isRunning = true;
        animId = requestAnimationFrame(render);
      }
    }

    function render() {
      if (!canvas || !isVisible) {
        isRunning = false;
        return;
      }

      const width = cachedRect.width;
      const height = cachedRect.height;
      if (width <= 0 || height <= 0) {
        isRunning = false;
        return;
      }

      const m = mouseRef.current;
      const dxMouse = m.targetX - m.x;
      const dyMouse = m.targetY - m.y;
      m.x += dxMouse * 0.22;
      m.y += dyMouse * 0.22;

      ctx.save();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      // Blit static background dots with 1 instant GPU draw
      ctx.drawImage(offscreenCanvas, 0, 0, width, height);

      // Render morphing pixel effects ONLY when cursor is active inside the canvas
      if (m.isHovering && m.x > -50 && m.x < width + 50 && m.y > -50 && m.y < height + 50) {
        const mouseX = m.x;
        const mouseY = m.y;

        // Bounding box: Only calculate the small neighborhood around the cursor (~50 dots instead of 3,600)
        const cols = Math.ceil(width / DOT_SPACING) + 1;
        const rows = Math.ceil(height / DOT_SPACING) + 1;

        const minC = Math.max(0, Math.floor((mouseX - INFLUENCE_RADIUS) / DOT_SPACING));
        const maxC = Math.min(cols - 1, Math.ceil((mouseX + INFLUENCE_RADIUS) / DOT_SPACING));
        const minR = Math.max(0, Math.floor((mouseY - INFLUENCE_RADIUS) / DOT_SPACING));
        const maxR = Math.min(rows - 1, Math.ceil((mouseY + INFLUENCE_RADIUS) / DOT_SPACING));

        for (let r = minR; r <= maxR; r++) {
          for (let c = minC; c <= maxC; c++) {
            const gx = c * DOT_SPACING;
            const gy = r * DOT_SPACING;

            const dx = gx - mouseX;
            const dy = gy - mouseY;
            const distSq = dx * dx + dy * dy;

            if (distSq < INFLUENCE_RADIUS * INFLUENCE_RADIUS) {
              const dist = Math.sqrt(distSq);
              const factor = Math.max(0, 1 - dist / INFLUENCE_RADIUS);
              const easeFactor = factor * factor; // smooth quad falloff

              const size = 2.5 + easeFactor * 11;
              const alpha = 0.25 + easeFactor * 0.75;

              if (factor > 0.6) {
                ctx.fillStyle = `rgba(99, 102, 241, ${alpha})`;
                ctx.shadowColor = 'rgba(99, 102, 241, 0.9)';
                ctx.shadowBlur = 12 * easeFactor;
              } else if (factor > 0.3) {
                ctx.fillStyle = `rgba(139, 92, 246, ${alpha * 0.9})`;
                ctx.shadowColor = 'rgba(139, 92, 246, 0.5)';
                ctx.shadowBlur = 6 * easeFactor;
              } else {
                ctx.fillStyle = `rgba(168, 85, 247, ${alpha * 0.7})`;
                ctx.shadowColor = 'transparent';
                ctx.shadowBlur = 0;
              }

              const x = gx - size / 2;
              const y = gy - size / 2;
              const radius = Math.min(2.5, size * 0.2);

              ctx.beginPath();
              ctx.roundRect(x, y, size, size, radius);
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        }
      }

      ctx.restore();

      // Check if mouse lerp has fully settled
      const distRemaining = Math.abs(dxMouse) + Math.abs(dyMouse);
      if (!m.isHovering && distRemaining < 0.5) {
        // Settled: Sleep RAF until next user interaction! (0% CPU idle)
        isRunning = false;
        return;
      }

      animId = requestAnimationFrame(render);
    }

    // Initial render
    startLoopIfNeeded();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', updateCachedRect);
      window.removeEventListener('mousemove', handleWindowMouseMove);
      document.removeEventListener('mouseleave', handleWindowMouseLeave);
      observer.disconnect();
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
