import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/contact/ContactForm';
import SocialLinks from '../components/contact/SocialLinks';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 px-4 min-h-screen"
    >
      <div className="max-w-4xl mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">bring ideas to life!</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Have a project in mind? I'd love to hear about it. Let's create something beautiful together ✨
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">
                Or find me on <span className="gradient-text">social media</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I love connecting with fellow creatives! Feel free to reach out on any of these platforms.
              </p>
              <SocialLinks />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="glass-effect rounded-xl p-6"
            >
              <h4 className="font-semibold mb-2">Prefer email?</h4>
              <a 
                href="mailto:hello@yourname.com" 
                className="text-lavender-600 dark:text-lavender-400 hover:underline"
              >
                nalyanbilah.work@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center p-8 rounded-xl bg-gradient-to-br from-lavender-100 to-pink-100 dark:from-lavender-900/20 dark:to-pink-900/20"
            >
              <span className="text-4xl mb-4 block">☕</span>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Based in Kuala Lumpur<br />
                Always up for coffee chats!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;