/**
 * ContactPage - Contact form and contact information
 */

import { motion } from 'framer-motion';
import { useState } from 'react';
import toast from 'react-hot-toast';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = 'bb6c1a6d-5abc-40d3-a493-eb99f187b265'; // I will replace later

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error('Please fill out all fields before sending.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success("Thank you! Your message has been sent. I'll get back to you soon.");
        setName('');
        setEmail('');
        setMessage('');
      } else {
        toast.error('Something went wrong. Please try again or email me directly at hrushipatil6840@gmail.com.');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again or email me directly at hrushipatil6840@gmail.com.');
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-24 md:pt-28 pb-8 md:pb-12 lg:pb-16">
      <div className="grid md:grid-cols-2 gap-5 md:gap-7 lg:gap-9">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary">Let's Connect</h1>
          <p className="text-text-muted leading-relaxed text-sm md:text-base">
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
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
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
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          onSubmit={handleSubmit}
          className="glass-card p-6 md:p-8 rounded-xl border border-border-subtle space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-text-primary font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              className="w-full px-4 py-3 bg-soft border border-border-subtle rounded-lg text-text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 resize-none"
              placeholder="Your message..."
            />
          </div>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className="w-full px-6 py-3 bg-accent text-soft font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactPage;

