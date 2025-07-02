import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDribbble, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: FaDribbble, href: 'https://dribbble.com/yourusername', label: 'Dribbble' },
    { icon: FaTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' }
  ];

  return (
    <footer className="py-12 px-4 border-t border-gray-200 dark:border-midnight-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-600 dark:text-gray-400"
          >
            Designed & coded with love by Alya
          </motion.p>
          
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-gray-600 dark:text-gray-400 hover:text-lavender-600 dark:hover:text-lavender-400 transition-colors"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;