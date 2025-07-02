import React from 'react';
import { motion } from 'framer-motion';

const Bio = () => {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-lavender-300 to-pink-300 dark:from-lavender-600 dark:to-pink-600 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-midnight-900 flex items-center justify-center">
                  <span className="text-8xl">👩‍💻</span>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-cream rounded-full flex items-center justify-center shadow-lg"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-3xl">✨</span>
              </motion.div>
            </motion.div>
          </div>
          
          <div>
            <h2 className="font-display text-3xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Your Name</span>! 👋
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I'm an ENFP designer who believes in creating digital experiences that spark joy and make life a little easier. My approach? Start with empathy, design with purpose, and sprinkle in some magic ✨
              </p>
              <p>
                As a design-first creative, I begin every project by understanding the humans behind the screens. From user research to pixel-perfect interfaces, and sometimes bringing them to life with code, I love every step of the journey.
              </p>
              <p>
                When I'm not designing, you'll find me exploring new coffee shops ☕, doodling in my sketchbook, or learning the latest web technologies. I believe the best designs come from a blend of creativity, strategy, and a dash of playfulness.
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {['Empathetic', 'Creative', 'Detail-oriented', 'Collaborative', 'Curious'].map((trait, index) => (
                <motion.span
                  key={trait}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-lavender-100 to-pink-100 dark:from-lavender-900/20 dark:to-pink-900/20 text-gray-700 dark:text-gray-300"
                >
                  {trait}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Bio;