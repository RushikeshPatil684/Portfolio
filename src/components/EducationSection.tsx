/**
 * EducationSection - Academic background display
 * Centered card design
 */

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const EducationSection = () => {
  return (
    <SectionWrapper id="education" title="Education" className="bg-surface">
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 rounded-2xl border border-border-subtle max-w-2xl w-full text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-4xl">🎓</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            B.Tech in Computer Science Engineering (Cybersecurity)
          </h3>
          <p className="text-xl text-accent mb-2">Sanjivani University</p>
          <p className="text-text-muted">2024 – 2028</p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default EducationSection;

