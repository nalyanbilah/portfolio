import React from 'react';
import { motion } from 'framer-motion';
import { HiLightBulb, HiUserGroup, HiColorSwatch, HiCode, HiSparkles } from 'react-icons/hi';

const Process = () => {
  const steps = [
    {
      icon: HiUserGroup,
      title: "Understand",
      description: "Deep dive into user needs through research and empathy",
      color: "lavender"
    },
    {
      icon: HiLightBulb,
      title: "Ideate",
      description: "Brainstorm creative solutions that delight",
      color: "pink"
    },
    {
      icon: HiColorSwatch,
      title: "Design",
      description: "Craft beautiful, intuitive interfaces",
      color: "lavender"
    },
    {
      icon: HiCode,
      title: "Build",
      description: "Bring designs to life with clean code",
      color: "pink"
    },
    {
      icon: HiSparkles,
      title: "Refine",
      description: "Polish until it sparkles ✨",
      color: "lavender"
    }
  ];

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h3 className="font-display text-3xl font-bold text-center mb-12">
          My Design <span className="gradient-text">Process</span>
        </h3>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-lavender-300 to-pink-300 dark:from-lavender-600 dark:to-pink-600 transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-${step.color}-200 to-${step.color}-300 dark:from-${step.color}-800 dark:to-${step.color}-700 flex items-center justify-center shadow-lg`}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Process;