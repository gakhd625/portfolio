import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero: React.FC = () => {
  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      href: 'https://github.com/gakhd625',
      label: 'GitHub Profile',
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      href: 'https://linkedin.com/in/gerlie-ann-katherine-daga-as-326554305',
      label: 'LinkedIn Profile',
    },
    {
      icon: <FaTwitter className="w-6 h-6" />,
      href: '#',
      label: 'Twitter Profile',
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 animate-gradient-xy" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Gerlie Ann Katherine Daga-as</span>
            </h1>
            <p className="text-xl sm:text-2xl text-base-content/80 mb-6">
              Software Developer & AI Enthusiast
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <p className="text-lg text-base-content/70">
              Passionate about cloud computing, artificial intelligence, and cybersecurity.
              Exploring how technology can solve real-world challenges and create positive change.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link
              to="projects"
              className="btn-primary"
              smooth={true}
              duration={500}
            >
              View My Work
            </Link>
            <Link
              to="contact"
              className="btn-secondary"
              smooth={true}
              duration={500}
            >
              Get in Touch
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content hover:text-primary transition-colors duration-200"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-base-100 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-base-100 to-transparent" />
    </section>
  );
};

export default Hero; 