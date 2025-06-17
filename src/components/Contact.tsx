import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const socialLinks = [
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      url: "https://linkedin.com/in/gerlie-ann-katherine-daga-as-326554305",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      url: "https://github.com/gakhd625",
      label: "GitHub",
    },
    {
      icon: <FaTwitter className="w-6 h-6" />,
      url: "#",
      label: "Twitter",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-12"
        >
          Get in Touch
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-8 bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <FaEnvelope className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-base-content/60">Email</p>
                      <a
                        href="mailto:gerlieannkatherine.dagaas@gmail.com"
                        className="text-base-content hover:text-primary transition-colors"
                      >
                        gerlieannkatherine.dagaas@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <FaPhone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-base-content/60">Phone</p>
                      <a
                        href="tel:+639171234567"
                        className="text-base-content hover:text-primary transition-colors"
                      >
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <FaMapMarkerAlt className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-base-content/60">Location</p>
                      <p className="text-base-content">
                        Based in the Philippines, available for remote work and
                        collaboration worldwide.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={link.label}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-8 bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  Send Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-base-content/70 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-base-200 border border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-base-content/70 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-base-200 border border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-base-content/70 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-base-200 border border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-base-content/70 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-base-200 border border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-none"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Animated decorative elements */}
        <motion.div
          className="absolute top-1/4 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-24 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};

export default Contact;
