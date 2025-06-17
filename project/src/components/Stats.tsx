import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const Stats: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const stats = [
    { value: '$6T+', label: 'Daily Trading Volume' },
    { value: '24/7', label: 'Market Access' },
    { value: '170+', label: 'Currency Pairs' },
    { value: '10M+', label: 'Traders Worldwide' },
  ];

  return (
    <section className="py-20 bg-apple-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 liquid-glass rounded-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="text-5xl font-bold text-apple-blue mb-4"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-lg font-medium text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;