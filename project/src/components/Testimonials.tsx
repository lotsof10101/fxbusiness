import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Testimonials: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const testimonials = [
    {
      quote: "I started with just $500 and was able to grow my account by 27% in my first three months using FXBusiness's copy trading. The platform is incredibly user-friendly.",
      name: "James D.",
      role: "Copy Trader since 2022",
      initials: "JD",
      color: "bg-apple-blue",
    },
    {
      quote: "As a full-time employee, I don't have time to trade actively. FXBusiness's copy trading lets me participate in forex markets passively while focusing on my career.",
      name: "Sarah M.",
      role: "Investor since 2021",
      initials: "SM",
      color: "bg-green-500",
    },
    {
      quote: "The educational resources combined with the copy trading platform helped me understand forex while earning. Now I trade independently but still use copy trading for diversification.",
      name: "Robert K.",
      role: "Trader & Investor",
      initials: "RK",
      color: "bg-yellow-500",
    },
    {
      quote: "FXBusiness has revolutionized my trading experience. The copy trading feature is a game-changer, allowing me to learn from the best without constant monitoring.",
      name: "Alice L.",
      role: "New Trader, 2023",
      initials: "AL",
      color: "bg-purple-500",
    },
    {
      quote: "The platform is intuitive, and the support is exceptional. I highly recommend FXBusiness to anyone looking to get into forex trading or enhance their existing portfolio.",
      name: "Michael B.",
      role: "Experienced Trader",
      initials: "MB",
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="py-24 bg-apple-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Success Stories</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Hear from traders who have transformed their financial journey with FXBusiness
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="liquid-glass rounded-3xl p-8 relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Quote className="absolute top-4 left-4 text-white/20 group-hover:text-apple-blue/30 transition-colors duration-300" size={32} />
              
              <p className="text-lg text-white/80 leading-relaxed mb-6 relative z-10 pt-8">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center space-x-4">
                <div className={`w-14 h-14 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;