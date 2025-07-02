import React from 'react';
import { motion } from 'framer-motion';

const Sparkles = ({ color = "#C8A2C8" }) => {
  const sparkleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: Math.random() * 3
      }
    }
  };

  const getRandomPosition = () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  });

  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          variants={sparkleVariants}
          initial="initial"
          animate="animate"
          style={{
            position: 'absolute',
            ...getRandomPosition(),
          }}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 0L6.12257 3.87743L10 5L6.12257 6.12257L5 10L3.87743 6.12257L0 5L3.87743 3.87743L5 0Z"
              fill={color}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default Sparkles;