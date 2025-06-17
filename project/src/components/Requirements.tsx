import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Home, DollarSign, Laptop } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Requirements: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const requirements = [
    {
      icon: CreditCard,
      title: 'Identification',
      description: 'Valid government-issued ID (passport, driver\'s license, or national ID)',
    },
    {
      icon: Home,
      title: 'Proof of Residence',
      description: 'Recent utility bill or bank statement (within last 3 months)',
    },
    {
      icon: DollarSign,
      title: 'Minimum Deposit',
      description: '$100 to start trading (varies by account type)',
    },
    {
      icon: Laptop,
      title: 'Device',
      description: 'Computer or smartphone with internet access',
    },
  ];

  return (
    <section id="requirements" className="py-24 bg-apple-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Account Requirements
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Getting started with FXBusiness is simple and straightforward
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {requirements.map((requirement, index) => {
            const Icon = requirement.icon;
            return (
              <motion.div
                key={index}
                className="liquid-glass p-8 rounded-3xl flex items-center space-x-6 group"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-apple-blue to-cyan-400 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:animate-glow"
                  whileHover={{ rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon className="text-white" size={28} />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-apple-blue transition-colors duration-300">
                    {requirement.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {requirement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Requirements;