/**
 * AchievementsPage - Timeline-style display of achievements and certifications
 */

import { motion } from 'framer-motion';

interface Achievement {
  title: string;
  description: string;
  date: string;
}

const AchievementsPage = () => {
  const achievements: Achievement[] = [
    {
      title: "Winner – 'This is Bizness' Hackathon, Bengal E-Summit 2025",
      description:
        "Won the 'This is Bizness' event at Bengal E-Summit 2025, organized by Institute of Engineering & Management, Kolkata. Worked in a team to build and present an innovative solution with strong execution and presentation.",
      date: 'July 2025',
    },
    {
      title: 'Special Recognition – Industry Hackathon, Sanjivani University',
      description:
        'Received special recognition for performance, contribution, and dedication in an industry-focused hackathon hosted at Sanjivani University.',
      date: '2025',
    },
    {
      title: '6+ Verified Cybersecurity Certifications',
      description:
        'Completed multiple cybersecurity certifications from platforms and organizations such as Fortinet, LearnTube, Tata Strive, and Microsoft. Covered topics like cybersecurity fundamentals, threat landscape, FortiGate operation, and practical cybersecurity concepts.',
      date: 'Ongoing',
    },
    {
      title: 'Networking Team Lead – Cyber Security & Blockchain Club (CSBC)',
      description:
        'Leading networking-related activities, helping organize cybersecurity events, CTFs, and knowledge-sharing sessions for peers.',
      date: 'Current',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-24 md:pt-28 pb-8 md:pb-12 lg:pb-16">
      <div className="grid gap-5 md:gap-7 lg:gap-9 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)]">
        {/* Left Column */}
        <aside className="space-y-3">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-3xl md:text-4xl font-semibold text-text-primary"
          >
            Achievements &amp; Certifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="text-sm text-gray-300"
          >
            A snapshot of hackathons, leadership roles, and certifications that reflect my journey in cybersecurity so far.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="rounded-2xl bg-[#101015] border border-white/10 p-4 text-sm text-gray-200"
          >
            <p className="text-text-primary font-semibold mb-2">Highlights:</p>
            <ul className="mt-2 space-y-1">
              <li>• Hackathon winner &amp; special recognition</li>
              <li>• 6+ verified cybersecurity certifications</li>
              <li>• Networking Team Lead in CSBC club</li>
            </ul>
          </motion.div>
        </aside>

        {/* Right Column: Timeline */}
        <section className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/30 glowing-border" />

          <div className="space-y-8 md:space-y-10">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 w-4 h-4 bg-accent rounded-full border-4 border-soft transform -translate-x-2 glowing-border" />

                {/* Content Card */}
                <div className="glass-card p-5 md:p-7 rounded-xl border border-border-subtle ml-8">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-xl font-bold text-text-primary">{achievement.title}</h3>
                    <span className="text-sm text-accent whitespace-nowrap">{achievement.date}</span>
                  </div>
                  <p className="text-text-muted leading-relaxed">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AchievementsPage;

