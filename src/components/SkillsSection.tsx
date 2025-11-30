/**
 * SkillsSection - Technical skills and tools organized by category
 * Glass cards with hover animations
 */

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: ['Python', 'C++', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Frontend & UI Development',
      icon: '🌐',
      skills: ['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Vite'],
    },
    {
      title: 'Backend & APIs',
      icon: '⚙️',
      skills: ['Flask', 'REST APIs'],
    },
    {
      title: 'Databases & Cloud',
      icon: '☁️',
      skills: ['MongoDB', 'Firebase'],
    },
    {
      title: 'Cybersecurity Tools',
      icon: '🛡️',
      skills: ['Nmap', 'Wireshark'],
    },
    {
      title: 'Operating Systems & Platforms',
      icon: '🖥️',
      skills: ['Linux', 'Windows', 'Kali Linux'],
    },
    {
      title: 'Tools, Frameworks & Workflow',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'React Router', 'Framer Motion', 'Render'],
    },
    {
      title: 'Soft Skills',
      icon: '🤝',
      skills: ['Communication', 'Teamwork', 'Research', 'Presentation'],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
      {skillCategories.map((category, index) => (
        <div
          key={index}
          className="glass-card p-5 md:p-6 rounded-xl border border-border-subtle transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(10,239,255,0.1)] hover:border-cyan-400/30"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">{category.icon}</span>
            <h3 className="text-lg font-semibold text-text-primary">{category.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;

