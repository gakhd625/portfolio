import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaUsers, FaCode } from 'react-icons/fa';

interface Experience {
  title: string;
  description: string;
  image: string;
  date: string;
  type: 'achievement' | 'event' | 'project';
  icon: React.ReactNode;
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences: Experience[] = [
    {
      title: 'AWS Cloud Certification Bootcamp',
      description: 'Completed a 1-month intensive bootcamp on AWS Cloud Club Philippines, focusing on cloud computing fundamentals and AWS services.',
      image: '/images/awsclub.jpg',
      date: '2025',
      type: 'achievement',
      icon: <FaTrophy className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: 'DOST: Innovation Technology Transfer Summit Visayas 2024',
      description: 'Top 10 Finalist in the Pitch Quest (Student Category) at Marco Polo Hotel, showcasing innovative technology solutions.',
      image: '/images/dost.jpg',
      date: 'December 2024',
      type: 'event',
      icon: <FaUsers className="w-6 h-6 text-primary" />,
    },
    {
      title: 'CODERed Hackathon - 2nd Place',
      description: '𝐏𝐫𝐨𝐭𝐞𝐤𝐓𝐚𝐥𝐤—an AI-powered guardian system designed to protect children from online grooming, cyberbullying, and emotional abuse in games',
      image: '/images/trop.jpg',
      date: '2025',
      type: 'achievement',
      icon: <FaCode className="w-6 h-6 text-secondary" />,
    },
  ];

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
        duration: 0.5,
      },
    },
  };

  const getTypeColor = (type: Experience['type']) => {
    switch (type) {
      case 'achievement':
        return 'bg-yellow-500/10 text-yellow-500';
      case 'event':
        return 'bg-primary/10 text-primary';
      case 'project':
        return 'bg-secondary/10 text-secondary';
      default:
        return 'bg-base-200 text-base-content';
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Experience & Highlights
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.title}
              variants={itemVariants}
              className="card glass group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="absolute top-4 right-4">
                  <div className={`p-2 rounded-full ${getTypeColor(exp.type)}`}>
                    {exp.icon}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-base-100 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold gradient-text">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-base-content/60">
                    {exp.date}
                  </span>
                </div>

                <p className="text-base-content/70 mb-4">
                  {exp.description}
                </p>

                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm ${getTypeColor(exp.type)}`}>
                    {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                  </span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional decorative elements */}
        <div className="absolute top-1/4 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-24 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Experience; 