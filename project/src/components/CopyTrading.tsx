import React from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, Zap, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const CopyTrading: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const steps = [
    {
      icon: Users,
      title: 'Browse Top Traders',
      description: 'Review performance statistics, risk levels, and trading strategies of our verified expert traders.',
    },
    {
      icon: DollarSign,
      title: 'Allocate Funds',
      description: 'Decide how much capital to allocate to each trader. You maintain full control over your investment amounts.',
    },
    {
      icon: Zap,
      title: 'Automate & Profit',
      description: 'Every trade your selected traders make is instantly copied to your account with the same entry/exit prices.',
    },
  ];

  const advantages = [
    'No Trading Experience Needed',
    'Proportional Profit Sharing',
    'Full Withdrawal Control',
    'Risk Management Tools',
  ];

  const scrollToAffiliate = () => {
    const element = document.querySelector('#affiliate');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="copy-trading" className="py-24 bg-apple-gray-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              FXBusiness Copy Trading
            </h2>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              Our innovative copy trading platform lets you automatically replicate the trades of experienced forex traders in real time.
            </p>

            <div className="space-y-8 mb-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-apple-blue to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                      <p className="text-white/70">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  className="liquid-glass p-4 rounded-xl flex items-center space-x-3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                  <span className="text-white font-medium">{advantage}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image and CTA */}
          <motion.div
            className="lg:pl-16"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="liquid-glass rounded-3xl overflow-hidden mb-8 group">
              <img
                src="https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Copy Trading Dashboard"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">
              Why Choose FXBusiness Copy Trading?
            </h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Our platform connects you with carefully vetted traders who have demonstrated consistent profitability over time:
            </p>

            <ul className="space-y-3 text-lg text-white/70 mb-10">
              <li className="flex items-start space-x-2">
                <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                <span><strong className="text-white">Performance Verified:</strong> All stats are real and auditable</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                <span><strong className="text-white">Diverse Strategies:</strong> Choose from various trading styles and risk levels</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
                <span><strong className="text-white">Transparent Fees:</strong> Clear commission structure with no hidden costs</span>
              </li>
            </ul>

            <motion.div
              id="affiliate"
              className="liquid-glass rounded-3xl p-8 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">Start Copy Trading Today!</h3>
              <p className="text-lg text-white/80 mb-6">
                Join our community of successful traders and investors. Get started with just $100.
              </p>
              <motion.button
                className="px-8 py-4 rounded-full bg-white text-apple-blue font-bold text-lg shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 255, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAffiliate}
              >
                Sign Up Now
              </motion.button>
              <p className="text-sm text-white/60 mt-4">
                (You'll be redirected to our trusted broker partner)
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CopyTrading;