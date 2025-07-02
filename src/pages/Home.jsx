import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import FeaturedProjects from '../components/home/FeaturedProjects';
import AnimatedBackground from '../components/home/AnimatedBackground';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatedBackground />
      <Hero />
      <FeaturedProjects />
    </motion.div>
  );
};

export default Home;