import React from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { FaGithub, FaCodepen } from 'react-icons/fa';

const ExperimentCard = ({ experiment }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-midnight-800 rounded-xl shadow-lg overflow-hidden group"
    >
      <div className="h-48 bg-gradient-to-br from-lavender-100 to-pink-100 dark:from-lavender-900/40 dark:to-pink-900/40 flex items-center justify-center">
        <span className="text-6xl opacity-50">🧪</span>
      </div>
      
      <div className="p-6">
        <h3 className="font-display text-xl font-bold mb-2 group-hover:gradient-text transition-all">
          {experiment.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {experiment.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm px-3 py-1 rounded-full bg-lavender-100 dark:bg-lavender-900/20 text-lavender-700 dark:text-lavender-400">
            {experiment.type}
          </span>
          
          <div className="flex gap-2">
            {experiment.githubLink && (
              <motion.a
                href={experiment.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-lg bg-gray-100 dark:bg-midnight-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaGithub size={16} />
              </motion.a>
            )}
            {experiment.codeLink && (
              <motion.a
                href={experiment.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-lg bg-gray-100 dark:bg-midnight-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaCodepen size={16} />
              </motion.a>
            )}
            {experiment.liveLink && (
              <motion.a
                href={experiment.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-lg bg-gray-100 dark:bg-midnight-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <HiExternalLink size={16} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperimentCard;