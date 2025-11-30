/**
 * ContactSection - Contact form and contact information
 * Two-column layout with form animations
 */

import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionWrapper from './SectionWrapper';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { label: 'Email', value: 'hrushipatil6840@gmail.com', link: 'mailto:hrushipatil6840@gmail.com' },
    { label: 'Phone', value: '+91 9022554513', link: 'tel:+919022554513' },
    {
      label: 'LinkedIn',
      value: 'rushikesh-patil-972637326',
      link: 'https://www.linkedin.com/in/rushikesh-patil-972637326',
    },
    {
      label: 'GitHub',
      value: 'RushikeshPatil684',
      link: 'https://github.com/RushikeshPatil684',
    },
  ];

  return (
    <SectionWrapper id="contact" className="bg-surface">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Let's Connect</h2>
          <p className="text-text-muted leading-relaxed">
            Whether it's about cybersecurity, collaboration, internships, or projects — I'd be happy
            to connect.
          </p>
          <div className="space-y-4 pt-4">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="block group"
              >
                <p className="text-sm text-text-muted mb-1">{info.label}</p>
                <p className="text-text-primary group-hover:text-accent transition-colors duration-300">
                  {info.value}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="glass-card p-8 rounded-xl border border-border-subtle space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-text-primary font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-soft border border-border-subtle rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-text-primary font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-soft border border-border-subtle rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-text-primary font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-soft border border-border-subtle rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 resize-none"
              placeholder="Your message..."
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-6 py-3 bg-accent text-soft font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-300"
          >
            {submitted ? "Thank you! I'll get back to you soon." : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;

