import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiOpenjdk,
  SiPython,
  SiAmazon,
  SiMysql,
  SiPhp,
  SiLaravel,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiDocker,
} from 'react-icons/si';

interface TechSkill {
  name: string;
  icon: React.ReactNode;
  level: number;
  color: string;
}

const TechStack: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills: TechSkill[] = [
    {
      name: 'HTML5',
      icon: <SiHtml5 className="w-8 h-8" />,
      level: 90,
      color: '#E34F26',
    },
    {
      name: 'CSS3',
      icon: <SiCss3 className="w-8 h-8" />,
      level: 85,
      color: '#1572B6',
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript className="w-8 h-8" />,
      level: 80,
      color: '#F7DF1E',
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript className="w-8 h-8" />,
      level: 75,
      color: '#3178C6',
    },
    {
      name: 'React',
      icon: <SiReact className="w-8 h-8" />,
      level: 85,
      color: '#61DAFB',
    },
    {
      name: 'Java',
      icon: <SiOpenjdk className="w-8 h-8" />,
      level: 80,
      color: '#007396',
    },
    {
      name: 'Python',
      icon: <SiPython className="w-8 h-8" />,
      level: 75,
      color: '#3776AB',
    },
    {
      name: 'AWS',
      icon: <SiAmazon className="w-8 h-8" />,
      level: 70,
      color: '#232F3E',
    },
    {
      name: 'MySQL',
      icon: <SiMysql className="w-8 h-8" />,
      level: 80,
      color: '#4479A1',
    },
    {
      name: 'PHP',
      icon: <SiPhp className="w-8 h-8" />,
      level: 75,
      color: '#777BB4',
    },
    {
      name: 'Laravel',
      icon: <SiLaravel className="w-8 h-8" />,
      level: 70,
      color: '#FF2D20',
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss className="w-8 h-8" />,
      level: 85,
      color: '#06B6D4',
    },
    {
      name: 'Git',
      icon: <SiGit className="w-8 h-8" />,
      level: 80,
      color: '#F05032',
    },
    {
      name: 'Docker',
      icon: <SiDocker className="w-8 h-8" />,
      level: 65,
      color: '#2496ED',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id='tech-stack' className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Tech Stack
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="card glass p-6 flex flex-col items-center group hover:scale-105 transition-transform duration-300"
            >
              <div
                className="mb-4 p-3 rounded-lg"
                style={{ backgroundColor: `${skill.color}20` }}
              >
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-base-300 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-2.5 rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
              <span className="text-sm text-base-content/70 mt-2">
                {skill.level}%
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-24 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default TechStack; 