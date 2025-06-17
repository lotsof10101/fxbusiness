import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Contact: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-apple-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact FXBusiness</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Our support team is available 24/5 to answer your questions about forex trading
          </p>
        </motion.div>

        <motion.form
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="liquid-glass p-4 rounded-2xl bg-transparent border-0 text-white placeholder-white/50 focus:ring-2 focus:ring-apple-blue transition-all duration-300"
            whileFocus={{ scale: 1.02 }}
          />
          
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="liquid-glass p-4 rounded-2xl bg-transparent border-0 text-white placeholder-white/50 focus:ring-2 focus:ring-apple-blue transition-all duration-300"
            whileFocus={{ scale: 1.02 }}
          />
          
          <motion.input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="md:col-span-2 liquid-glass p-4 rounded-2xl bg-transparent border-0 text-white placeholder-white/50 focus:ring-2 focus:ring-apple-blue transition-all duration-300"
            whileFocus={{ scale: 1.02 }}
          />
          
          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            className="md:col-span-2 liquid-glass p-4 rounded-2xl bg-transparent border-0 text-white placeholder-white/50 focus:ring-2 focus:ring-apple-blue transition-all duration-300 resize-none"
            whileFocus={{ scale: 1.02 }}
          />
          
          <motion.button
            type="submit"
            className="md:col-span-2 mx-auto px-10 py-4 rounded-full gradient-button text-white font-bold text-xl flex items-center gap-2 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send size={20} />
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;