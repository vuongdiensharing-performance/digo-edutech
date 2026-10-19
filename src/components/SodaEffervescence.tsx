import React, { useEffect, useRef } from 'react';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  opacity: number;
  color: string;
  wobbleSpeed: number;
  wobbleAmp: number;
  birth: number;
  life: number;
}

const BUBBLE_COLORS = [
  'rgba(244, 0, 9, 0.75)',    // Signature Coca-Cola Red
  'rgba(255, 255, 255, 0.85)', // Sparkling Carbonation White
  'rgba(255, 77, 83, 0.7)',   // Crisp Red-Orange
  'rgba(200, 138, 50, 0.65)',  // Amber Caramel Fizz
];

/**
 * SodaEffervescence: Adds interactive Coca-Cola carbonation fizzy bubbles
 * on hover and click over primary buttons and cards.
 */
export const SodaEffervescence: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const lastSpawnRef = useRef<number>(0);
  const nextIdRef = useRef<number>(1);

  useEffect(() => {
    // Respect user's motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const spawnBubble = (x: number, y: number, burst = false) => {
      // Limit max concurrent bubbles for 60fps silky smooth performance
      if (bubblesRef.current.length > 40) return;

      const count = burst ? 7 : 1;
      for (let i = 0; i < count; i++) {
        const spread = burst ? (Math.random() - 0.5) * 40 : (Math.random() - 0.5) * 16;
        const color = BUBBLE_COLORS[Math.floor(Math.random() * BUBBLE_COLORS.length)];
        const size = burst ? 2.5 + Math.random() * 4 : 2 + Math.random() * 3.5;

        bubblesRef.current.push({
          id: nextIdRef.current++,
          x: x + spread,
          y: y + (burst ? (Math.random() - 0.5) * 12 : 0),
          size,
          vx: (Math.random() - 0.5) * (burst ? 2.2 : 0.8),
          vy: burst ? -(2.0 + Math.random() * 3.0) : -(1.2 + Math.random() * 1.8),
          opacity: 0.9,
          color,
          wobbleSpeed: 0.05 + Math.random() * 0.08,
          wobbleAmp: 0.6 + Math.random() * 1.2,
          birth: performance.now(),
          life: burst ? 700 + Math.random() * 500 : 600 + Math.random() * 450,
        });
      }
    };

    // Detect hover on primary buttons and cards
    const isTargetElement = (el: HTMLElement | null): boolean => {
      if (!el) return false;
      return Boolean(
        el.closest(
          '.button-primary, .button, .info-card, .news-card, .portrait-card, .process-step, .evidence-panel, .faq-item, .card-grid > *'
        )
      );
    };

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isTargetElement(target)) {
        const now = performance.now();
        // Throttle hover particle creation
        if (now - lastSpawnRef.current > 65) {
          lastSpawnRef.current = now;
          spawnBubble(e.clientX, e.clientY, false);
        }
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isTargetElement(target)) {
        spawnBubble(e.clientX, e.clientY, true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });

    // Render loop
    const render = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (bubblesRef.current.length > 0) {
        bubblesRef.current = bubblesRef.current.filter((b) => {
          const age = time - b.birth;
          if (age >= b.life) return false;

          const progress = age / b.life;
          const currentOpacity = b.opacity * (1 - progress);

          // Update position with effervescent soda buoyancy & horizontal wobble
          b.x += b.vx + Math.sin(age * b.wobbleSpeed) * b.wobbleAmp;
          b.y += b.vy;
          b.vy -= 0.035; // rising buoyancy acceleration (carbonation physics)

          // Draw fizzy soda bubble
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.size * (1 + progress * 0.3), 0, Math.PI * 2);
          ctx.fillStyle = b.color.replace(/[\d.]+\)$/g, `${currentOpacity})`);
          ctx.fill();

          // Subtle glossy highlight on the bubble
          ctx.beginPath();
          ctx.arc(
            b.x - b.size * 0.28,
            b.y - b.size * 0.28,
            b.size * 0.35,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.9})`;
          ctx.fill();

          return true;
        });
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        width: '100vw',
        height: '100vh',
      }}
      aria-hidden="true"
    />
  );
};
