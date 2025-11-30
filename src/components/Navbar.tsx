/**
 * Navbar - Sticky navigation bar with React Router links
 * Features blur effect, scroll-based styling changes, and hover animations
 */

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const navigate = useNavigate();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'CTF & Club', path: '/ctf' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Blur Overlay - Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
        />
      )}

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-soft/80 backdrop-blur-md border-b border-border-subtle'
            : 'bg-transparent'
        } ${mobileMenuOpen ? 'bg-soft/95 backdrop-blur-md md:bg-soft/80' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl md:text-2xl font-bold text-text-primary cursor-pointer mr-6 lg:mr-8"
            onClick={() => navigate('/')}
          >
            Rushikesh Patil
          </motion.div>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-4 lg:gap-5 xl:gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-xs lg:text-sm transition-colors duration-300 ${
                    isActive ? 'text-accent' : 'text-text-muted hover:text-text-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"
                        layoutId="navbar-indicator"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Download Resume Button */}
          {/* TODO: Replace with actual resume file path */}
          <motion.a
            href="/Resume_Rushikesh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-3 lg:px-4 py-2 text-xs lg:text-sm font-medium text-text-primary bg-accent/20 border border-accent/30 rounded-lg hover:bg-accent/30 transition-colors duration-300 ml-4 lg:ml-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-primary"
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <motion.span
                className="w-full h-0.5 bg-text-primary"
                animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-text-primary"
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-text-primary"
                animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: mobileMenuOpen ? 'auto' : 0,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden relative z-50"
        >
          <div className="py-4 space-y-2 border-t border-border-subtle bg-soft/95 backdrop-blur-md">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block w-full text-left px-4 py-2 rounded-lg transition-colors duration-300 ${
                    isActive
                      ? 'text-accent bg-accent/10'
                      : 'text-text-muted hover:text-text-primary hover:bg-accent/10'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <motion.a
              href="/Resume_Rushikesh.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-4 py-2 text-text-primary bg-accent/20 border border-accent/30 rounded-lg hover:bg-accent/30 transition-colors duration-300 mt-2"
              whileTap={{ scale: 0.98 }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
    </>
  );
};

export default Navbar;
