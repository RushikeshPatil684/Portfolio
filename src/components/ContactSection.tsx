/**
 * ContactSection - Contact form and contact information
 * Two-column layout with form animations
 * Uses Web3Forms API for form submission
 */

import { motion } from 'framer-motion';
import { useState } from 'react';
import toast from 'react-hot-toast';
import SectionWrapper from './SectionWrapper';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success('Message Sent Successfully');
        form.reset();
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
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
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 rounded-xl border border-border-subtle"
        >
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="hidden"
              name="access_key"
              value="a87da262-6d74-4afd-9c3e-13a73b857fc2"
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-white/5 border border-white/10 focus:border-cyan-400 text-text-primary focus:outline-none transition-all duration-300"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-white/5 border border-white/10 focus:border-cyan-400 text-text-primary focus:outline-none transition-all duration-300"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="w-full p-3 rounded-md bg-white/5 border border-white/10 focus:border-cyan-400 text-text-primary focus:outline-none transition-all duration-300 resize-none"
            ></textarea>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition text-white font-semibold w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;

