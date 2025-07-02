import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDribbble, FaTwitter, FaBehance, FaInstagram } from 'react-icons/fa';

const SocialLinks = () => {
  const socials = [
    { icon: FaGithub, href: 'https://github.com/nalyanbilah', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/nur-alya-nabilah-zulkifli-92932b259/', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: FaBehance, href: 'https://www.behance.net/alyanabilah4', label: 'Behance', color: 'hover:text-blue-500' },
    { icon: FaInstagram, href: 'https://instagram.com/nalyanbilahhh', label: 'Instagram', color: 'hover:text-purple-600' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {socials.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.2, rotate: 5 }}
          className={`p-4 bg-white dark:bg-midnight-800 rounded-xl shadow-lg text-gray-600 dark:text-gray-400 ${social.color} transition-colors`}
        >
          <social.icon size={24} />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;