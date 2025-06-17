import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaTrophy, FaUsers, FaCode } from "react-icons/fa";

interface Experience {
  title: string;
  description: string;
  image: string;
  date: string;
  type: "achievement" | "event" | "project" | "volunteer";
  icon: React.ReactNode;
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences: Experience[] = [
    {
      title: "Google Developer Group Cebu - Volunteer",
      description:
        "Contributed as a volunteer for GDG Cebu, assisting participants in hands-on workshops",
      image: "/images/gdg.jpg",
      date: "2024",
      type: "volunteer",
      icon: <FaUsers className="w-6 h-6 text-primary" />,
    },
    {
      title: "DOST: Innovation Technology Transfer Summit Visayas 2024",
      description:
        "Top 10 Finalist in the Pitch Quest (Student Category) at Marco Polo Hotel, showcasing innovative technology solutions.",
      image: "/images/dost.jpg",
      date: "December 2024",
      type: "achievement",
      icon: <FaUsers className="w-6 h-6 text-primary" />,
    },
    {
      title: "CODERed Hackathon - 2nd Place",
      description:
        "𝐏𝐫𝐨𝐭𝐞𝐤𝐓𝐚𝐥𝐤—an AI-powered guardian system designed to protect children from online grooming, cyberbullying, and emotional abuse in games",
      image: "/images/trop.jpg",
      date: "2025",
      type: "achievement",
      icon: <FaCode className="w-6 h-6 text-secondary" />,
    },
    {
      title: "AWS Cloud Certification Bootcamp",
      description:
        "Completed a 1-month intensive bootcamp on AWS Cloud Club Philippines, focusing on cloud computing fundamentals and AWS services.",
      image: "/images/awsclub.jpg",
      date: "2025",
      type: "achievement",
      icon: <FaTrophy className="w-6 h-6 text-yellow-500" />,
    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const getTypeColor = (type: Experience["type"]) => {
    switch (type) {
      case "achievement":
        return "bg-yellow-500/10 text-yellow-500";
      case "event":
        return "bg-primary/10 text-primary";
      case "project":
        return "bg-secondary/10 text-secondary";
      default:
        return "bg-base-200 text-base-content";
    }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-12"
        >
          Experience & Highlights
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.title}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-300" />
              <div className="relative bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-40">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <motion.div
                      className={`p-2 rounded-full ${getTypeColor(exp.type)}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {exp.icon}
                    </motion.div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold gradient-text line-clamp-1">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-base-content/60 whitespace-nowrap ml-2">
                      {exp.date}
                    </span>
                  </div>

                  <p className="text-sm text-base-content/70 mb-4 line-clamp-3">
                    {exp.description}
                  </p>

                  <div className="flex items-center gap-2">
                    <motion.span
                      className={`px-3 py-1 rounded-full text-xs ${getTypeColor(
                        exp.type
                      )}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                    </motion.span>
                  </div>
                </div>

                {/* Animated decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.5, 0.3, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Background decorative elements */}
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

export default Experience;
