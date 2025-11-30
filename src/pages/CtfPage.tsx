/**
 * CtfPage - CTF and club involvement showcase
 */

import { motion } from 'framer-motion';

const CtfPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-24 md:pt-28 pb-8 md:pb-12 lg:pb-16">
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-3xl md:text-4xl font-bold mb-8 text-text-primary"
      >
        CTF & Club Involvement
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-5 md:gap-7 lg:gap-9">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="glass-card p-6 md:p-8 rounded-xl border border-border-subtle"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🚩</span>
            <h3 className="text-2xl font-bold text-text-primary">CTF & Events</h3>
          </div>
          <div className="space-y-3 text-text-muted">
            <p>
              Organized CTF challenges as part of the Cyber Security & Blockchain Club.
            </p>
            <p>
              Actively participate in internal security challenges and technical activities.
            </p>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="glass-card p-6 md:p-8 rounded-xl border border-border-subtle"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🤝</span>
            <h3 className="text-2xl font-bold text-text-primary">Leadership & Community</h3>
          </div>
          <div className="space-y-3 text-text-muted">
            <p>
              <strong className="text-text-primary">Networking Team Lead</strong> — managing,
              coordinating, and contributing to technical events in the CSBC.
            </p>
            <p>Emphasizing teamwork & community-building in cybersecurity education.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CtfPage;

