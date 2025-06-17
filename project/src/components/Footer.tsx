import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { href: '#about', label: 'About Forex' },
      { href: '#requirements', label: 'Requirements' },
      { href: '#how-to-trade', label: 'How to Trade' },
      { href: '#copy-trading', label: 'Copy Trading' },
      { href: '#contact', label: 'Contact Us' },
    ],
    'Education': [
      { href: '#', label: 'Forex Basics' },
      { href: '#', label: 'Trading Strategies' },
      { href: '#', label: 'Market Analysis' },
      { href: '#', label: 'Risk Management' },
      { href: '#', label: 'Video Tutorials' },
    ],
    'Legal': [
      { href: '#', label: 'Terms of Service' },
      { href: '#', label: 'Privacy Policy' },
      { href: '#', label: 'Risk Disclosure' },
      { href: '#', label: 'Affiliate Program' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="h-8 w-8 text-apple-blue" />
              <span className="text-2xl font-bold">
                FX<span className="text-apple-blue">Business</span>
              </span>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Your trusted partner in professional forex trading and copy trading solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-apple-blue rounded-full flex items-center justify-center transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6">{title}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/70 hover:text-apple-blue transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Copyright */}
        <motion.div
          className="pt-8 border-t border-white/10 text-center text-white/60 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; {currentYear} FXBusiness. All rights reserved. Forex trading involves substantial risk of loss and is not suitable for all investors.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;