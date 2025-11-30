/**
 * AboutPage - Personal introduction and current focus
 */

import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-24 md:pt-28 pb-8 md:pb-12 lg:pb-16">
      <div className="grid md:grid-cols-2 gap-5 md:gap-7 lg:gap-9 items-start">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">About Me</h1>
          <div className="space-y-3 text-text-muted leading-relaxed">
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="border-l-4 border-accent pl-6 py-4 italic text-text-primary text-lg"
          >
            "Security is not just a skill — it's responsibility, discipline, and innovation."
          </motion.blockquote>
        </motion.div>

          {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-4"
        >
          {/* Current Focus Card */}
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

          {/* Security Focus Areas Card */}
          <div className="rounded-2xl bg-[#101015] border border-white/10 p-5 shadow-lg">
            <h3 className="mb-3 text-lg font-semibold text-cyan-300">
              Security Focus Areas
            </h3>
            <ul className="space-y-1 text-sm text-gray-200">
              <li>• Network security & secure infrastructure</li>
              <li>• Penetration testing fundamentals</li>
              <li>• AI-driven threat detection and automation</li>
              <li>• Building security-focused full-stack projects</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;

