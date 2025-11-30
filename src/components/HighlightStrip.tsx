/**
 * HighlightStrip - Horizontal stats strip below hero section
 * Displays key achievements and highlights
 */

import { motion } from 'framer-motion';

const HighlightStrip = () => {
  const highlights = [
    '1+ Full-Stack Security Project',
    '6+ Cybersecurity Certifications',
    'Hackathon Winner',
    'Networking Team Lead – CSBC',
  ];

  return (
    <section className="bg-[#111111] py-8 border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                borderColor: 'rgba(10, 239, 255, 0.3)',
              }}
              className="glass-card p-4 md:p-6 rounded-lg border border-border-subtle text-center cursor-pointer transition-all duration-300"
            >
              <p className="text-sm md:text-base text-text-primary font-medium">{highlight}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightStrip;

