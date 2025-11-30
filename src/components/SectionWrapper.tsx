/**
 * SectionWrapper - Reusable wrapper component for sections
 * Provides consistent layout, padding, and entrance animations
 */

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, title, children, className = '' }: SectionWrapperProps) => {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-text-primary"
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;

