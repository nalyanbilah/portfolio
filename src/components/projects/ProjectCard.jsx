import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="cursor-pointer group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-midnight-800 shadow-lg hover:shadow-xl transition-shadow">
        <div className="h-48 bg-gradient-to-br from-lavender-200 to-pink-100 dark:from-lavender-900/40 dark:to-pink-900/40">
          <div className="flex items-center justify-center h-full">
            <span className="text-6xl opacity-50">🎨</span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="font-display text-2xl font-bold mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {project.tagline}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-lavender-100 dark:bg-lavender-900/20 text-lavender-700 dark:text-lavender-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;