import React from 'react';
import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg bg-lavender-100 dark:bg-midnight-800 text-lavender-600 dark:text-lavender-400"
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? <HiMoon size={20} /> : <HiSun size={20} />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;