import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/gakhd625",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/gerlie-ann-katherine-daga-as-326554305",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter className="w-5 h-5" />,
      href: "#",
      label: "Twitter",
    },
  ];

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="relative py-1 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Brand Section */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold gradient-text">
              Gerlie Ann Katherine Daga-as
            </h3>
            <p className="text-base-content/70 text-sm">
              A passionate software developer focused on creating innovative
              solutions and delivering exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base-content/70 hover:text-primary transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base-content/70 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <ul className="space-y-1 text-base-content/70 text-sm">
              <li>
                <a
                  href="mailto:gerlieannkatherine.dagaas@gmail.com"
                  className="hover:text-primary transition-colors duration-200"
                >
                  gerlieannkatherine.dagaas@gmail.com
                </a>
              </li>
              <li>Based in the Philippines</li>
              <li>Available for remote work</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-base-content/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base-content/70 text-sm">
              © {currentYear} Gerlie Ann Katherine Daga-as. All rights reserved.
            </p>
            <p className="text-base-content/50 text-sm mt-2 md:mt-0">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>

        {/* Decorative elements - reduced size and better positioning */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-20" />
        <div className="absolute top-1/4 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute top-1/4 -left-16 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
      </div>
    </footer>
  );
};

export default Footer;
