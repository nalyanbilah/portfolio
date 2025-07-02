import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiUser, HiChatAlt } from 'react-icons/hi'; // Fixed: HiChatAlt2 -> HiChatAlt

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focused, setFocused] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto"
    >
      <div className="space-y-6">
        <div className="relative">
          <motion.div
            animate={{
              y: focused === 'name' || formData.name ? -24 : 0,
              scale: focused === 'name' || formData.name ? 0.85 : 1,
              x: focused === 'name' || formData.name ? -10 : 0,
            }}
            className="absolute left-4 top-4 flex items-center gap-2 text-gray-500 dark:text-gray-400 pointer-events-none origin-left"
          >
            <HiUser />
            <span>Your Name</span>
          </motion.div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocused('name')}
            onBlur={() => setFocused('')}
            className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-midnight-700 bg-white dark:bg-midnight-800 focus:border-lavender-500 dark:focus:border-lavender-400 outline-none transition-colors"
            required
          />
        </div>

        <div className="relative">
          <motion.div
            animate={{
              y: focused === 'email' || formData.email ? -24 : 0,
              scale: focused === 'email' || formData.email ? 0.85 : 1,
              x: focused === 'email' || formData.email ? -10 : 0,
            }}
            className="absolute left-4 top-4 flex items-center gap-2 text-gray-500 dark:text-gray-400 pointer-events-none origin-left"
          >
            <HiMail />
            <span>Your Email</span>
          </motion.div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocused('email')}
            onBlur={() => setFocused('')}
            className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-midnight-700 bg-white dark:bg-midnight-800 focus:border-lavender-500 dark:focus:border-lavender-400 outline-none transition-colors"
            required
          />
        </div>

        <div className="relative">
          <motion.div
            animate={{
              y: focused === 'message' || formData.message ? -24 : 0,
              scale: focused === 'message' || formData.message ? 0.85 : 1,
              x: focused === 'message' || formData.message ? -10 : 0,
            }}
            className="absolute left-4 top-4 flex items-center gap-2 text-gray-500 dark:text-gray-400 pointer-events-none origin-left"
          >
            <HiChatAlt />
            <span>Your Message</span>
          </motion.div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocused('message')}
            onBlur={() => setFocused('')}
            rows={5}
            className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-midnight-700 bg-white dark:bg-midnight-800 focus:border-lavender-500 dark:focus:border-lavender-400 outline-none transition-colors resize-none"
            required
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-gradient-to-r from-lavender-500 to-pink-400 text-white rounded-xl font-medium hover:shadow-lg transition-shadow"
        >
          Send Message ✨
        </motion.button>
      </div>
    </motion.form>
  );
};

export default ContactForm;