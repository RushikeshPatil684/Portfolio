/**
 * ProjectsSection - Featured project showcase
 * Designed to easily add more projects in the future
 */

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const ProjectsSection = () => {
  const project = {
    name: 'CyberSec Toolkit Pro',
    description:
      'CyberSec Toolkit Pro is a beginner-friendly cybersecurity platform that helps students and learners practice fundamental security concepts through hands-on tools like password strength checking, encryption–decryption, hash generation, IP lookup, and file analysis. It provides an easy and interactive way to explore core cybersecurity techniques.',
    techStack: ['React', 'Tailwind CSS', 'Firebase', 'Flask', 'REST APIs', 'GitHub', 'Render'],
    features: [
      'WHOIS lookup, SSL scanner, CVE search',
      'Subdomain enumeration & breach check',
      'Password strength analyzer & hash generator',
      'Real-time report storage using Firestore',
      'Fully deploy-ready with GitHub + Render integration',
    ],
    github: 'https://github.com/RushikeshPatil684/cyberSec-Toolkit-Pro',
    demo: '#',
  };

  return (
    <SectionWrapper id="projects" title="Projects" className="bg-[#050507]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        whileHover={{ y: -5 }}
        className="glass-card p-8 md:p-12 rounded-2xl border border-border-subtle"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Content */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-text-primary">{project.name}</h3>
            <p className="text-text-muted leading-relaxed">{project.description}</p>

            {/* Tech Stack */}
            <div>
              <h4 className="text-text-primary font-semibold mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-text-primary font-semibold mb-3">Key Features</h4>
              <ul className="space-y-2 text-text-muted">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-accent mt-1">▸</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-accent text-soft font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-300"
              >
                GitHub
              </motion.a>
              <motion.a
                href={project.demo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-transparent border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors duration-300"
              >
                Live Demo
              </motion.a>
            </div>
          </div>

          {/* Right: Preview Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full min-h-[400px] rounded-xl overflow-hidden border border-border-subtle"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent flex items-center justify-center">
              <p className="text-text-muted text-lg">Project Preview</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default ProjectsSection;

