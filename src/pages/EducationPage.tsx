/**
 * EducationPage - Academic background display
 */

import { motion } from 'framer-motion';

const EducationPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-24 md:pt-28 pb-8 md:pb-12 lg:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-text-primary">
          Education
        </h1>
        <div className="flex justify-center">
          <div className="glass-card p-6 md:p-10 rounded-2xl border border-border-subtle max-w-2xl w-full text-center">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="text-4xl">🎓</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              B.Tech in Computer Science Engineering (Cybersecurity)
            </h3>
            <p className="text-xl text-accent mb-2">Sanjivani University</p>
            <p className="text-text-muted">2024 – 2028</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EducationPage;

