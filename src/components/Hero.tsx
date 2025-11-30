/**
 * Hero Section - Main landing section with animated text and profile photo
 * Uses Framer Motion for animations and features a circular neon glow frame
 */

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import rushikeshPhoto from '../assets/rushikesh.jpg';

const Hero = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative overflow-hidden text-white min-h-screen"
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-30" />
      </div>


      {/* Main Content Container */}
      <div className="mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center gap-5 md:gap-7 px-4 sm:px-6 md:px-8 pt-24 md:pt-28 pb-12 md:pb-16 md:flex-row md:justify-between">
        {/* Left Column - Text Content */}
        <motion.div
          className="space-y-4 md:space-y-5 text-center md:text-left w-full md:w-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="text-accent text-sm md:text-base font-medium uppercase tracking-wider"
          >
            Cybersecurity Student
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight"
          >
            Securing the Future of Digital Infrastructure
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-text-muted leading-relaxed"
          >
            Cybersecurity student focused on Red & Blue Team concepts, AI-driven threat detection, and building real-world security tools.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 pt-2 justify-center md:justify-start relative z-10"
          >
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                navigate('/projects');
              }}
              className="px-6 py-3 bg-accent text-soft font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-300 cursor-pointer relative z-10"
            >
              View Projects
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                navigate('/contact');
              }}
              className="px-6 py-3 bg-transparent border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors duration-300 cursor-pointer relative z-10"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm text-text-muted pt-2"
          >
            Based in India · Open to internships & security-focused roles
          </motion.p>
        </motion.div>

        {/* Right Column - Photo with Circular Neon Glow Frame */}
        <motion.div
          className="flex justify-center md:justify-end w-full md:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.8 },
          }}
        >
          <motion.div
            className="relative w-48 h-48 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto md:mx-0"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Outer Breathing Glow */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/40 via-transparent to-sky-500/40 blur-2xl animate-breathing-glow"
            />

            {/* Circular Glass Frame */}
            <div className="relative w-full h-full rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl p-1 shadow-[0_0_40px_rgba(56,189,248,0.35)]">
              <img
                src={rushikeshPhoto}
                alt="Rushikesh Patil"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 right-8"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-text-muted rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
