import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'web' | 'mobile' | 'ai' | 'cloud';
  status?: 'completed' | 'in-progress' | 'upcoming';
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState<string>('all');

  const projects: Project[] = [
    {
      title: 'SaApp',
      description: 'SaAPP (Sustainable Agriculture App for Farmers) is a web platform that empowers Filipino farmers by providing tech-driven solutions to improve agricultural practices and overcome industry challenges.',
      image: '/images/saapp.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'web',
      status: 'in-progress',
    },
    {
      title: 'PN Counterpart Management System',
      description: 'A web-based payment system for efficient management of counterpart payment.',
      image: '/images/PNPH.png',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'web',
      status: 'completed',
    },
    {
      title: '𝐏𝐫𝐨𝐭𝐞𝐤𝐓𝐚𝐥𝐤',
      description: 'An AI-powered API that integrates with gaming platforms to detect and prevent online grooming, cyberbullying, and emotional abuse in real-time. Designed specifically to safeguard children and promote a safer digital play environment.',
      image: '/images/trop.jpg',
      technologies: ['Python','Django'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'web',
      status: 'in-progress',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'cloud', name: 'Cloud Solutions' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

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

  return (
    <section id='projects' className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Projects
        </motion.h2>

        {/* Category Filter */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-base-200 hover:bg-base-300 text-base-content'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="card group"
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 gradient-text">
                  {project.title}
                </h3>
                <p className="text-base-content/70 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.status && (
                    <span
                      className={`px-3 py-1 text-sm rounded-full ${
                        project.status === 'completed'
                          ? 'bg-green-500/10 text-green-500'
                          : project.status === 'in-progress'
                          ? 'bg-yellow-500/10 text-yellow-500'
                          : 'bg-gray-500/10 text-gray-500'
                      }`}
                    >
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </span>
                  )}
                </div>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-base-content hover:text-primary transition-colors duration-200"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-base-content hover:text-primary transition-colors duration-200"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-24 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Projects; 