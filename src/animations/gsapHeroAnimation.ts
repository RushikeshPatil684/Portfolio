/**
 * GSAP Hero Animation
 * Handles text entrance animations and background glow effects
 */

import { gsap } from 'gsap';

export const animateHero = () => {
  const tl = gsap.timeline();

  // Animate label
  tl.from('.hero-label', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: 'power3.out',
  })
    // Animate heading
    .from(
      '.hero-heading',
      {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
      },
      '-=0.4'
    )
    // Animate subheading
    .from(
      '.hero-subheading',
      {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: 'power3.out',
      },
      '-=0.6'
    )
    // Animate buttons
    .from(
      '.hero-buttons',
      {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.5'
    )
    // Animate location text
    .from(
      '.hero-location',
      {
        opacity: 0,
        y: 10,
        duration: 0.6,
        ease: 'power3.out',
      },
      '-=0.4'
    );

  // Background glow breathing effect
  gsap.to('.hero-glow', {
    scale: 1.1,
    opacity: 0.6,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
};

