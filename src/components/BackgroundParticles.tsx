/**
 * BackgroundParticles - Global animated particles background
 * Lightweight particles that appear on every page
 * Uses constant array and CSS-only animations for optimal performance
 */

import React from 'react';

// Constant particle configuration - generated once, never changes
const PARTICLES = Array.from({ length: 18 }).map((_, i) => {
  // Fixed positions using simple distribution
  const positions = [
    [5, 10], [15, 25], [25, 15], [35, 30], [45, 20], [55, 35],
    [65, 15], [75, 25], [85, 20], [10, 50], [20, 60], [30, 55],
    [40, 65], [50, 70], [60, 60], [70, 75], [80, 65], [90, 70],
  ];
  const [left, top] = positions[i] || [50, 50];
  
  return {
    id: i,
    top: `${top}%`,
    left: `${left}%`,
    isCyan: i % 5 === 0,
    delay: (i % 5) * 2,
  };
});

const BackgroundParticles: React.FC = () => {
  return (
    <div className="pointer-events-none select-none absolute inset-0 -z-10 overflow-hidden">
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className={`absolute h-[3px] w-[3px] rounded-full animate-float-particle ${
            p.isCyan ? 'bg-cyan-300/40' : 'bg-white/35'
          }`}
          style={{
            top: p.top,
            left: p.left,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;

