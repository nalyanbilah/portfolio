import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Hero = () => {
  // Floating shapes for background decoration
  const floatingShapes = [
    { size: 'w-64 h-64', color: 'bg-lavender-300', position: 'top-10 -left-32', delay: 0 },
    { size: 'w-96 h-96', color: 'bg-pink-300', position: '-top-48 right-10', delay: 0.5 },
    { size: 'w-72 h-72', color: 'bg-purple-300', position: 'bottom-10 -right-36', delay: 1 },
    { size: 'w-80 h-80', color: 'bg-indigo-300', position: '-bottom-32 left-20', delay: 1.5 },
  ];

  const sparkles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-lavender-50 via-pink-50 to-purple-50 dark:from-midnight-900 dark:via-purple-900/20 dark:to-midnight-900">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-tr from-lavender-400/20 via-transparent to-pink-400/20 animate-gradient" />
      </div>

      {/* Floating shapes */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.size} ${shape.position} ${shape.color} rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-20 dark:opacity-10`}
          animate={{
            y: [0, -30, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        >
          <div
            className="bg-white dark:bg-lavender-300 rounded-full"
            style={{
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              boxShadow: '0 0 6px rgba(255,255,255,0.8)',
            }}
          />
        </motion.div>
      ))}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative element above name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <div className="flex items-center gap-2">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="text-2xl"
              >
                ✦
              </motion.span>
              <span className="text-sm font-medium text-lavender-600 dark:text-lavender-400 tracking-wider uppercase">
                Portfolio 2025
              </span>
              <motion.span
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="text-2xl"
              >
                ✦
              </motion.span>
            </div>
          </motion.div>

          <motion.h1 
            className="font-display text-7xl md:text-9xl font-bold mb-6 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="relative">
              <span className="gradient-text">Alya</span>
              {/* Decorative underline */}
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 20"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
              >
                <motion.path
                  d="M10,10 Q150,20 290,10"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#f472b6" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Design-first creative crafting joyful digital experiences ✨
            <br />
            <span className="text-lg text-gray-600 dark:text-gray-400">
              UX/UI Designer • Full-stack Developer
            </span>
          </motion.p>

          {/* Fun emoji decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-4 mb-8"
          >
            {['💜', '🎨', '✨', '🚀', '🌟'].map((emoji, index) => (
              <motion.span
                key={emoji}
                className="text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.3, rotate: 10 }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px -10px rgba(124, 58, 237, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-lavender-500 to-pink-400 text-white rounded-full font-medium transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 border-2 border-lavender-500 text-lavender-600 dark:text-lavender-400 rounded-full font-medium hover:bg-lavender-50 dark:hover:bg-lavender-900/20 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Let's Chat</span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Floating doodles around buttons */}
          <div className="relative">
            <motion.div
              className="absolute -left-20 -top-10 text-4xl hidden sm:block"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 10, 0] 
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🌈
            </motion.div>
            <motion.div
              className="absolute -right-20 -top-10 text-4xl hidden sm:block"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -10, 0] 
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ⭐
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - properly positioned */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-sm text-gray-500 dark:text-gray-400">Scroll to explore</span>
          <HiArrowDown className="text-2xl text-gray-400" />
        </motion.div>
      </motion.div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full h-24 fill-white dark:fill-midnight-800">
          <path d="M0,64 C240,96 480,32 720,48 C960,64 1200,96 1440,64 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;