import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CatPawEasterEgg = () => {
  const [showPaw, setShowPaw] = useState(false);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'p' && e.ctrlKey) {
        setShowPaw(true);
        setTimeout(() => setShowPaw(false), 3000);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleLogoClick = () => {
    setClicks(prev => prev + 1);
    if (clicks >= 4) {
      setShowPaw(true);
      setTimeout(() => {
        setShowPaw(false);
        setClicks(0);
      }, 3000);
    }
  };

  return (
    <>
      <div 
        onClick={handleLogoClick}
        className="fixed bottom-4 right-4 w-12 h-12 cursor-pointer opacity-0 hover:opacity-10"
      />
      
      <AnimatePresence>
        {showPaw && (
          <motion.div
            initial={{ x: 100, rotate: -45 }}
            animate={{ x: 0, rotate: 0 }}
            exit={{ x: 100, rotate: 45 }}
            className="fixed bottom-20 right-10 text-6xl z-50"
          >
            🐾
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-8 -left-16 bg-white dark:bg-midnight-800 rounded-lg px-3 py-1 text-sm shadow-lg"
            >
              Meow! 😸
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CatPawEasterEgg;