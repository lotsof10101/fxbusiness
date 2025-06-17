import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Wallet, BarChart3, TrendingUp } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const HowToTrade: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const steps = [
    {
      icon: UserPlus,
      title: 'Create Account',
      description: 'Complete our quick registration and verify your identity',
    },
    {
      icon: Wallet,
      title: 'Fund Account',
      description: 'Deposit funds via bank transfer, credit card, or e-wallet',
    },
    {
      icon: BarChart3,
      title: 'Choose Strategy',
      description: 'Select manual trading or copy trading based on your preference',
    },
    {
      icon: TrendingUp,
      title: 'Start Trading',
      description: 'Execute trades or select traders to copy based on performance',
    },
  ];

  return (
    <section id="how-to-trade" className="py-24 bg-apple-gray-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How Forex Trading Works
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Follow these simple steps to start your trading journey with FXBusiness
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              >
                <motion.div
                  className="w-24 h-24 bg-gradient-to-br from-apple-blue to-cyan-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon className="text-white" size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-apple-blue transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowToTrade;