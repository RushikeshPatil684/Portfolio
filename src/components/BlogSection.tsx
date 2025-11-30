/**
 * BlogSection - Coming soon placeholder for blog posts
 * Ghost cards with shimmer effect
 */

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const BlogSection = () => {
  const comingSoonPosts = [
    {
      title: 'Writing about cybersecurity learning, projects, and research.',
    },
    {
      title: 'Case studies on security incidents and tools.',
    },
    {
      title: 'Practical notes on Red & Blue Team concepts.',
    },
  ];

  return (
    <SectionWrapper id="blog" title="Blog & Writeups (Coming Soon)" className="bg-[#050507]">
      <div className="grid md:grid-cols-3 gap-6">
        {comingSoonPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-card p-6 rounded-xl border-2 border-dashed border-border-subtle relative overflow-hidden"
          >
            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'linear',
              }}
            />
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full mb-4 border border-accent/30">
                Coming Soon
              </span>
              <p className="text-text-muted">{post.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default BlogSection;

