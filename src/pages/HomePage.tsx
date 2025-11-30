/**
 * HomePage - Landing page with Hero and HighlightStrip
 */

import Hero from '../components/Hero';
import HighlightStrip from '../components/HighlightStrip';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HighlightStrip />
      {/* Blog Coming Soon Card */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="glass-card p-8 rounded-xl border-2 border-dashed border-border-subtle text-center"
        >
          <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full mb-4 border border-accent/30">
            Coming Soon
          </span>
          <h3 className="text-2xl font-bold text-text-primary mb-2">Blog & Writeups</h3>
          <p className="text-text-muted">
            Writing about cybersecurity learning, projects, and research coming soon.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;

