/**
 * AchievementsSection - Timeline-style display of achievements and certifications
 * Alternating left-right slide animations
 */

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

interface Achievement {
  title: string;
  description: string;
  date: string;
}

const AchievementsSection = () => {
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
    <SectionWrapper id="achievements" title="Achievements & Certifications" className="bg-surface">
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 glowing-border hidden md:block" />

        <div className="space-y-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              <div
                className={`flex flex-col md:flex-row items-start gap-6 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-soft transform -translate-x-2 md:-translate-x-1/2 glowing-border hidden md:block" />

                {/* Content Card */}
                <div className="glass-card p-6 md:p-8 rounded-xl border border-border-subtle w-full md:w-5/12 ml-0 md:ml-auto">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-text-primary">{achievement.title}</h3>
                    <span className="text-sm text-accent whitespace-nowrap">{achievement.date}</span>
                  </div>
                  <p className="text-text-muted leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AchievementsSection;

