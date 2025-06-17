import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, ArrowLeftRight, Clock, Globe } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const features = [
    {
      icon: DollarSign,
      title: 'Currency Pairs',
      description: 'Forex trading involves buying one currency while selling another. Major pairs like EUR/USD and GBP/USD dominate trading volume with tight spreads.',
    },
    {
      icon: ArrowLeftRight,
      title: 'Market Liquidity',
      description: 'The forex market\'s enormous size means you can enter and exit positions quickly with minimal price fluctuations in major currency pairs.',
    },
    {
      icon: Clock,
      title: '24/5 Trading',
      description: 'The forex market operates 24 hours a day, five days a week across major financial centers worldwide, allowing flexible trading times.',
    },
    {
      icon: Globe,
      title: 'Global Market',
      description: 'Forex trading connects participants from all over the world, including banks, corporations, governments, and individual traders.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-apple-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Understanding Forex Trading
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            The foreign exchange market is where currencies are traded. It's the most liquid market in the world with an average daily trading volume exceeding $6 trillion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="liquid-glass rounded-3xl p-8 group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-apple-blue to-cyan-400 rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon className="text-white" size={28} />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-apple-blue transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;