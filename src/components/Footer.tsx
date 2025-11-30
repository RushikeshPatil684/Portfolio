/**
 * Footer - Minimal footer with copyright and social links
 */

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-soft border-t border-border-subtle py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © 2025 · Built by Rushikesh Patil
          </p>
          <div className="flex gap-6">
            <motion.a
              href="https://github.com/RushikeshPatil684"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#0AEFFF' }}
              className="text-text-muted hover:text-accent transition-colors duration-300 text-sm"
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rushikesh-patil-972637326"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#0AEFFF' }}
              className="text-text-muted hover:text-accent transition-colors duration-300 text-sm"
            >
              LinkedIn
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

