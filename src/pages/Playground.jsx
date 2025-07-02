import React from 'react';
import { motion } from 'framer-motion';
import ExperimentCard from '../components/playground/ExperimentCard';
import { experiments } from '../data/experiments';

const Playground = () => {
  // Add error handling
  if (!experiments || !Array.isArray(experiments)) {
    return (
      <div className="pt-20 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto py-12 text-center">
          <h1 className="text-2xl">No experiments data found</h1>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 px-4 min-h-screen"
    >
      <div className="max-w-7xl mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Code <span className="gradient-text">Playground</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Where I experiment with new ideas, test creative concepts, and push pixels around for fun 🎨
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiments.map((experiment, index) => (
            <motion.div
              key={experiment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ExperimentCard experiment={experiment} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            More experiments coming soon...
          </p>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block text-4xl"
          >
            ⚗️
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Playground;