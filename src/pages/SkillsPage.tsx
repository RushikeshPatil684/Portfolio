/**
 * SkillsPage - Technical skills and tools organized by category
 */

import { motion } from 'framer-motion';
import SkillsSection from '../components/SkillsSection';

const SkillsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-24 md:pt-28 pb-8 md:pb-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <h1 className="mb-5 text-3xl md:text-4xl font-semibold text-text-primary">
          Skills &amp; Tools
        </h1>
        <SkillsSection />
      </motion.div>
    </div>
  );
};

export default SkillsPage;

