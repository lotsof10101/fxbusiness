import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const FAQ: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How does FXBusiness work?',
      answer: 'FXBusiness offers both direct forex trading and a copy trading platform. You can either trade manually using our tools or automatically replicate the trades of expert traders.',
    },
    {
      question: 'What types of accounts can I open?',
      answer: 'We offer various account types tailored to different experience levels and investment sizes, including Standard, ECN, and Islamic accounts. Details are available on our platform.',
    },
    {
      question: 'Is copy trading risky?',
      answer: 'All trading involves risk. While copy trading allows you to leverage the experience of professional traders, past performance is not indicative of future results. We provide risk management tools to help you manage your exposure.',
    },
    {
      question: 'How can I deposit and withdraw funds?',
      answer: 'You can deposit and withdraw funds using various methods, including bank transfers, credit/debit cards, and popular e-wallets. Processing times vary by method.',
    },
    {
      question: 'Do you provide educational resources?',
      answer: 'Yes, FXBusiness is committed to educating our traders. We offer a comprehensive library of resources, including articles, video tutorials, webinars, and market analysis.',
    },
    {
      question: 'I have more questions!',
      answer: 'Please feel free to contact our 24/5 support team via live chat, email, or phone. We\'re here to assist you with any inquiries you may have.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-apple-gray-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Got Questions?</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about FXBusiness and our services.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="liquid-glass rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            >
              <motion.button
                className="w-full px-8 py-6 text-left flex justify-between items-center text-xl font-semibold text-white hover:text-apple-blue transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
                whileHover={{ backgroundColor: 'rgba(0, 122, 255, 0.1)' }}
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-lg text-white/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;