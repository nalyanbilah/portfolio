import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiExternalLink, HiCode, HiLightBulb, HiUserGroup, HiColorSwatch, HiTerminal, HiSparkles } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));
  const [activeSection, setActiveSection] = useState('overview');

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-lavender-600 hover:underline"
          >
            Go back home
          </button>
        </div>
      </div>
    );
  }

  const sections = [
    { id: 'overview', label: 'Overview', icon: HiSparkles },
    { id: 'problem', label: 'Problem', icon: HiLightBulb },
    { id: 'research', label: 'Research', icon: HiUserGroup },
    { id: 'ideation', label: 'Ideation', icon: HiLightBulb },
    { id: 'ui', label: 'UI Design', icon: HiColorSwatch },
    ...(project.development ? [{ id: 'development', label: 'Dev & Build', icon: HiTerminal }] : []),
    { id: 'reflection', label: 'Reflection', icon: HiSparkles },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-lavender-100 to-pink-50 dark:from-lavender-900/20 dark:to-midnight-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
          >
            <HiArrowLeft />
            Back to projects
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-white/80 dark:bg-midnight-800/80 backdrop-blur"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl">
              {project.tagline}
            </p>

            {project.development && (
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href={project.development.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-lavender-500 to-pink-400 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
                >
                  <HiExternalLink />
                  View Live Site
                </motion.a>
                <motion.a
                  href={project.development.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-lavender-500 text-lavender-600 dark:text-lavender-400 rounded-full font-medium hover:bg-lavender-50 dark:hover:bg-lavender-900/20 transition-colors"
                >
                  <FaGithub />
                  View Code
                </motion.a>
              </div>
            )}
          </motion.div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white dark:fill-midnight-900">
            <path d="M0,64 C240,96 480,32 720,48 C960,64 1200,96 1440,64 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-16 z-40 bg-white/80 dark:bg-midnight-900/80 backdrop-blur-md border-b border-gray-200 dark:border-midnight-700">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex overflow-x-auto py-4 gap-8 scrollbar-hide">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-lavender-500 to-pink-400 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <Icon size={18} />
                  {section.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-20">
        {/* Overview Section */}
        <motion.section
          id="overview"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-bold mb-6 gradient-text">Overview</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.overview}
          </p>
        </motion.section>

        {/* Problem Section */}
        <motion.section
          id="problem"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-bold mb-6 gradient-text">The Problem</h2>
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-6 rounded-r-lg">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {project.problem}
            </p>
          </div>
        </motion.section>

        {/* Research Section */}
        <motion.section
          id="research"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-bold mb-6 gradient-text">Research</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-effect rounded-xl p-6">
              <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                <HiUserGroup className="text-lavender-500" />
                Methods Used
              </h3>
              <ul className="space-y-3">
                {project.research.methods.map((method, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-lavender-500 mt-1">✦</span>
                    <span>{method}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="glass-effect rounded-xl p-6">
              <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                <HiLightBulb className="text-pink-500" />
                Key Insights
              </h3>
              <ul className="space-y-3">
                {project.research.insights.map((insight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-700 dark:text-gray-300"
                  >
                    {insight}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Ideation Section */}
        <motion.section
          id="ideation"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-bold mb-6 gradient-text">Ideation</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-xl mb-4">Key Concepts</h3>
              <div className="flex flex-wrap gap-3">
                {project.ideation.concepts.map((concept, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-lavender-100 to-pink-100 dark:from-lavender-900/20 dark:to-pink-900/20 rounded-full"
                  >
                    {concept}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* UI Design Section */}
        <motion.section
          id="ui"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-bold mb-6 gradient-text">UI Design</h2>
          
          <div className="space-y-8">
            {/* Design System */}
            <div className="glass-effect rounded-xl p-6">
              <h3 className="font-semibold text-xl mb-4">Design System</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Color Palette</h4>
                  <div className="flex gap-2">
                    {project.ui.designSystem.colors.map((color, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="w-16 h-16 rounded-lg shadow-md"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Typography</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.ui.designSystem.typography}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Development Section (if applicable) */}
        {project.development && (
          <motion.section
            id="development"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold mb-6 gradient-text">Development</h2>
            
            <div className="space-y-8">
              {/* Tech Stack */}
              <div className="glass-effect rounded-xl p-6">
                <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                  <HiCode className="text-lavender-500" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.development.stack.map((tech) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-lavender-100 to-pink-100 dark:from-lavender-900/20 dark:to-pink-900/20 rounded-full font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* What I Learned */}
              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-6 rounded-r-lg">
                <h3 className="font-semibold text-xl mb-3 flex items-center gap-2">
                  <HiSparkles className="text-green-500" />
                  What I Learned While Coding This
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {project.development.learnings}
                </p>
              </div>
            </div>
          </motion.section>
        )}

        {/* Reflection Section */}
        <motion.section
          id="reflection"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
                    <h2 className="font-display text-3xl font-bold mb-6 gradient-text">Reflection</h2>
          <div className="bg-gradient-to-r from-lavender-50 to-pink-50 dark:from-lavender-900/20 dark:to-pink-900/20 p-8 rounded-2xl">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.reflection}
            </p>
          </div>
        </motion.section>

        {/* Next Project Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 dark:border-midnight-700 pt-12"
        >
          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate('/')}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              ← Back to all projects
            </button>
            
            {projects.length > 1 && (
              <button
                onClick={() => {
                  const currentIndex = projects.findIndex(p => p.id === project.id);
                  const nextIndex = (currentIndex + 1) % projects.length;
                  navigate(`/project/${projects[nextIndex].id}`);
                  window.scrollTo(0, 0);
                }}
                className="flex items-center gap-2 text-lavender-600 dark:text-lavender-400 hover:text-lavender-700 dark:hover:text-lavender-300 transition-colors"
              >
                Next project
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;