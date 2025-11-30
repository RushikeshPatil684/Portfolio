/**
 * AboutSection - Personal introduction and current focus
 * Two-column layout with animations
 */

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="bg-[#050507]">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">About Me</h2>
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              I'm <strong className="text-text-primary">Rushikesh Patil</strong>, a passionate
              Cybersecurity student driven by curiosity, innovation, and the mission to build
              secure and resilient digital systems. My motivation for entering cybersecurity began
              with a natural interest in solving complex problems and understanding how technology
              works beneath the surface. As I explored the world of cyber defense and ethical
              hacking, I realized how critical cybersecurity is in protecting individuals,
              organizations, and industries across the modern digital world.
            </p>
            <p>
              I am working towards becoming a <strong className="text-text-primary">successful Cybersecurity Engineer</strong>, with a strong ambition to contribute to high-impact areas like
              large-scale systems, infrastructure security, and modern security automation. I enjoy
              hands-on learning, building real-world security tools, participating in hackathons,
              and leading technical initiatives at the Cyber Security & Blockchain Club as the
              Networking Team Lead. I believe in continuous improvement and practical
              implementation that creates real impact.
            </p>
          </div>
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-l-4 border-accent pl-6 py-4 italic text-text-primary text-lg"
          >
            "Security is not just a skill — it's responsibility, discipline, and innovation."
          </motion.blockquote>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-card p-8 rounded-2xl border border-border-subtle">
            <h3 className="text-2xl font-bold text-text-primary mb-6">Current Focus</h3>
            <div className="space-y-4 text-text-muted">
              <div>
                <p className="text-text-primary font-semibold mb-2">
                  B.Tech in Computer Science Engineering (Cybersecurity)
                </p>
                <p className="text-accent">Sanjivani University · 2024–2028</p>
              </div>
              <div className="pt-4 border-t border-border-subtle">
                <p className="text-sm">
                  <span className="text-text-primary font-medium">Focusing on:</span> foundational
                  security, full-stack projects, Red & Blue Team concepts
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;

