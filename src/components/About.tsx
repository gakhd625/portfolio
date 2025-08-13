import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaCode,
  FaCloud,
  FaBrain,
  FaGraduationCap,
  FaHeart,
  FaUsers,
  FaEnvelope,
  FaLinkedin,
  FaCalendarAlt,
  FaGithub,
  FaShieldAlt,
} from "react-icons/fa";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const interests = [
    {
      // icon: <FaBrain className="w-5 h-5" />,
      text: "AI & Machine Learning",
      // color: "from-purple-500 to-pink-500",
    },
    {
      // icon: <FaCloud className="w-5 h-5" />,
      text: "Cloud Technologies",
      // color: "from-blue-500 to-cyan-500",
    },
    {
      // icon: <FaShieldAlt className="w-5 h-5" />,
      text: "Cybersecurity",
      // color: "from-green-500 to-emerald-500",
    },
    {
      // icon: <FaCode className="w-5 h-5" />,
      text: "Full-Stack Development",
      // color: "from-orange-500 to-red-500",
    },
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      text: "gerlieannkatherine.dagaas@gmail.com",
      link: "mailto:gerlieannkatherine.dagaas@gmail.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      text: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/gerlie-ann-katherine-daga-as-326554305/",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      text: "GitHub Portfolio",
      link: "https://github.com/gakhd625",
      color: "from-gray-600 to-gray-700",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">About Me</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Main About Card */}
          <motion.div
            variants={itemVariants}
            className="relative bg-base-200 rounded-3xl p-8 md:p-12 shadow-2xl border border-base-content/10 overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
              {/* Left Column - Photo & Story */}
              <div className="lg:col-span-2 space-y-8">
                {/* Photo and Story Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                  {/* Photo Space */}
                  <div className="md:col-span-1 flex justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-4 border-primary/30 flex items-center justify-center overflow-hidden">
                      {/* Placeholder for your photo - replace src with your actual photo */}
                      <div className="w-full h-full bg-base-300 flex items-center justify-center"></div>
                      <img
                        src="/images/profile3.png"
                        alt="Your Name"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Story */}
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      My Journey
                    </h3>
                    <p className="text-base-content/80 leading-relaxed">
                      I'm a passionate developer deeply fascinated by AI, cloud
                      technologies, and cybersecurity. My journey in tech
                      started with curiosity about how systems work, and now I'm
                      building intelligent solutions that bridge the gap between
                      innovation and security.
                    </p>
                  </div>
                </div>

                {/* What Drives Me */}
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    What Drives Me
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {interests.map((interest, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex items-center space-x-3 p-3 bg-base-100 rounded-xl border border-base-content/10 hover:border-primary/30 transition-all duration-300 group"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-r ${interest.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                        >
                          {interest.icon}
                        </div>
                        <span className="text-base-content/80 font-medium text-sm">
                          {interest.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Info Only */}
              <div className="space-y-6">
                {/* Contact Information */}
                <div className="bg-base-100 rounded-2xl p-6 border border-base-content/10">
                  <h4 className="text-lg font-bold text-primary mb-4">
                    Get In Touch
                  </h4>
                  <div className="space-y-3">
                    {contactInfo.map((contact, index) => (
                      <motion.a
                        key={index}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={itemVariants}
                        className="flex items-center space-x-3 p-3 bg-base-200 rounded-xl hover:bg-base-300 transition-all duration-300 group"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-r ${contact.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                        >
                          {contact.icon}
                        </div>
                        <span className="text-base-content/80 font-medium text-sm group-hover:text-primary transition-colors duration-300 truncate">
                          {contact.text}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>
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

export default About;
