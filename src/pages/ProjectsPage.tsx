import { motion } from 'framer-motion';
import previewImage from '../assets/cybersec-toolkit-preview.png';

const cyberSecProject = {
  name: 'CyberSec Toolkit Pro',
  status: 'Completed',
  shortDescription:
    'A beginner-friendly cybersecurity platform with tools like password strength analysis, encrypt/decrypt utilities, hash generation, IP lookup, WHOIS, SSL scan, CVE search and more.',
  techStack: ['React', 'Tailwind CSS', 'Firebase', 'Flask', 'REST APIs', 'Render'],
  features: [
    'Password strength analyzer & hash generator',
    'WHOIS lookup, SSL scanner, CVE search',
    'Subdomain enumeration & breach check',
    'Real-time report storage in Firestore',
    'Deploy-ready full-stack architecture',
  ],
  githubUrl: 'https://github.com/RushikeshPatil684/cyberSec-Toolkit-Pro',
  liveDemoUrl: 'https://cyber-sec-toolkit-pro.vercel.app/',
};

const ProjectsPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 pt-24 md:pt-28 pb-8 md:pb-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="space-y-6"
      >
        {/* Page title */}
        <header className="space-y-1.5">
          <h1 className="text-3xl font-semibold md:text-4xl text-text-primary">Projects</h1>
          <p className="text-sm text-gray-300">
            Real-world security-focused projects I&apos;ve been building and learning from.
          </p>
        </header>

        {/* Featured project */}
        <section className="grid items-start gap-6 md:gap-8 lg:gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          {/* Left: Details */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-semibold md:text-3xl text-text-primary">
                {cyberSecProject.name}
              </h2>
              <span className="rounded-full bg-emerald-600/25 px-3 py-1 text-xs font-medium text-emerald-300">
                {cyberSecProject.status}
              </span>
            </div>

            <p className="text-sm leading-relaxed text-gray-200">{cyberSecProject.shortDescription}</p>

            {/* Tech stack */}
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-300">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {cyberSecProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200 border border-cyan-400/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-300">
                Key Features
              </h3>
              <ul className="space-y-1 text-sm text-gray-200">
                {cyberSecProject.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-[6px] h-[4px] w-[4px] rounded-full bg-cyan-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={cyberSecProject.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-medium text-black shadow-md transition hover:bg-cyan-400"
              >
                View Live Demo
              </a>
              <a
                href={cyberSecProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cyan-400/70 px-5 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/10"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Right: Preview */}
          <div className="w-full">
            <div className="w-full rounded-3xl bg-[#05080e] border border-cyan-400/20 shadow-[0_0_55px_rgba(34,211,238,0.35)] overflow-hidden">
              {/* Header */}
              <div className="flex items-center px-4 py-3 border-b border-white/5 text-xs text-gray-300">
                <span className="font-medium">Project Preview</span>
              </div>

              {/* Screenshot */}
              <div className="w-full aspect-[16/9] overflow-hidden bg-black">
                <img
                  src={previewImage}
                  alt="CyberSec Toolkit Pro Preview"
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>

              {/* Caption */}
              <div className="px-4 py-3 border-t border-white/5 text-xs text-gray-400">
                Preview of the CyberSec Toolkit Pro interface. Open the live demo to explore all features.
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
