import React from 'react';
import { motion } from 'framer-motion';
import Bio from '../components/about/Bio';
import Process from '../components/about/Process';
import Skills from '../components/about/Skills';
import CatPawEasterEgg from '../components/about/CatPawEasterEgg';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-12"
        >
          About <span className="gradient-text">Me</span>
        </motion.h1>
        
        <Bio />
        <Process />
        <Skills />
        <CatPawEasterEgg />
      </div>
    </motion.div>
  );
};

export default About;