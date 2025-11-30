/**
 * CtfSection - CTF and club involvement showcase
 * Two-column layout with glass cards
 */

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const CtfSection = () => {
  return (
    <SectionWrapper id="ctf" title="CTF & Club Involvement" className="bg-[#050507]">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 rounded-xl border border-border-subtle"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🚩</span>
            <h3 className="text-2xl font-bold text-text-primary">CTF & Events</h3>
          </div>
          <div className="space-y-4 text-text-muted">
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 rounded-xl border border-border-subtle"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🤝</span>
            <h3 className="text-2xl font-bold text-text-primary">Leadership & Community</h3>
          </div>
          <div className="space-y-4 text-text-muted">
            <p>
              <strong className="text-text-primary">Networking Team Lead</strong> — managing,
              coordinating, and contributing to technical events in the CSBC.
            </p>
            <p>Emphasizing teamwork & community-building in cybersecurity education.</p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default CtfSection;

