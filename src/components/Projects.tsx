import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: "web" | "mobile" | "ai" | "cloud";
  status?: "completed" | "in-progress" | "upcoming";
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  const projects: Project[] = [
    {
      title: "PN Counterpart Management System",
      description:
        "A web-based payment system for efficient management of counterpart payment.",
      image: "/images/PNPH.png",
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      githubUrl: "https://github.com/gakhd625/peyen",
      liveUrl: "#",
      category: "web",
      status: "completed",
    },

    {
      title: "Safeplay",
      description:
        "Safeplay is an AI-powered Chrome Extension that protects children in online games by monitoring real-time chat to detect grooming, cyberbullying, and emotional abuse. It integrates seamlessly with browser-based games to promote a safer digital play environment.",
      image: "/images/safeplay.png",
      technologies: ["HTML", "CSS", "JS", "GEMINI API"],
      githubUrl: "#",
      liveUrl: "#",
      category: "web",
      status: "completed",
    },
    {
      title: "SaApp",
      description:
        "SaAPP (Sustainable Agriculture App for Farmers) is a web platform that empowers Filipino farmers by providing tech-driven solutions to improve agricultural practices and overcome industry challenges.",
      image: "/images/saapp.png",
      technologies: ["HTML", "CSS", "JS", "PHP"],
      githubUrl: "https://github.com/gakhd625/SAAPP-CODE",
      liveUrl: "#",
      category: "web",
      status: "in-progress",
    },  
    {
      title: "Protektalk",
      description:
        "An API AI-powered guardian system designed to protect children from online grooming, cyberbullying, and emotional abuse in games",
      image: "/images/trop.jpg",
      technologies: ["Django", "GEMINI API", "HTML", "CSS"],
      githubUrl: "https://github.com/gakhd625/Protektalk",
      liveUrl: "#",
      category: "web",
      status: "in-progress",
    },
    {
      title: "Finsync",
      description:
        "Finsync is a mobile-responsive web app that helps users track their daily expenses and monitor their savings.",
      image: "/images/finsync.png",
      technologies: ["HTML", "CSS", "JS"],
      githubUrl: "https://github.com/gakhd625/Finsync",
      liveUrl: "#",
      category: "web",
      status: "completed",
    },
    {
      title: "Snapbooth",
      description:
        "Snapbooth is a photo booth web application where users can capture photos using their webcam, customize them with filters and decorations, and download the final image.",
      image: "/images/snapbooth.png",
      technologies: ["typescript","HTML", "CSS", "JS"],
      githubUrl: "https://github.com/gakhd625/snapbooth",
      liveUrl: "#",
      category: "web",
      status: "completed",
    },
    
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "ai", name: "AI/ML" },
    { id: "cloud", name: "Cloud Solutions" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth * 0.2
          : scrollLeft + clientWidth * 0.2;

      carouselRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (filteredProjects.length > 1) {
      autoScrollInterval.current = setInterval(() => {
        if (carouselRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
          const isAtEnd = scrollLeft + clientWidth >= scrollWidth;

          if (isAtEnd) {
            // If at the end, scroll back to start
            carouselRef.current.scrollTo({
              left: 0,
              behavior: "smooth",
            });
          } else {
            // Otherwise, scroll right
            scroll("right");
          }
        }
      }, 2000); // Auto-scroll every 2 seconds
    }

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, [filteredProjects.length]);

  // Pause auto-scroll when hovering over carousel
  const handleCarouselHover = (isHovering: boolean) => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }

    if (!isHovering && filteredProjects.length > 1) {
      autoScrollInterval.current = setInterval(() => {
        if (carouselRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
          const isAtEnd = scrollLeft + clientWidth >= scrollWidth;

          if (isAtEnd) {
            carouselRef.current.scrollTo({
              left: 0,
              behavior: "smooth",
            });
          } else {
            scroll("right");
          }
        }
      }, 2000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
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
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        mass: 0.8,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 100,
          }}
          className="section-title text-center mb-12"
        >
          Projects
        </motion.h2>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-base-200 hover:bg-base-300 text-base-content"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Navigation Button */}
          <motion.button
            onClick={() => scroll("left")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 p-3 rounded-full bg-base-100 shadow-lg hover:bg-primary hover:text-white transition-colors"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="w-5 h-5" />
          </motion.button>

          {/* Carousel */}
          <motion.div
            ref={carouselRef}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 px-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={() => handleCarouselHover(true)}
            onMouseLeave={() => handleCarouselHover(false)}
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover="hover"
                  className="min-w-[280px] max-w-[280px] snap-start mx-3 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="card group h-[320px] bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="relative overflow-hidden rounded-t-xl h-40">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2 gradient-text line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-base-content/70 mb-3 text-sm line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.slice(0, 2).map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ scale: 1.05 }}
                            className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary"
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.technologies.length > 2 && (
                          <motion.span
                            whileHover={{ scale: 1.05 }}
                            className="px-2 py-0.5 text-xs rounded-full bg-base-200 text-base-content"
                          >
                            +{project.technologies.length - 2}
                          </motion.span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        {project.status && (
                          <motion.span
                            whileHover={{ scale: 1.05 }}
                            className={`px-2 py-0.5 text-xs rounded-full ${
                              project.status === "completed"
                                ? "bg-green-500/10 text-green-500"
                                : project.status === "in-progress"
                                ? "bg-yellow-500/10 text-yellow-500"
                                : "bg-gray-500/10 text-gray-500"
                            }`}
                          >
                            {project.status.charAt(0).toUpperCase() +
                              project.status.slice(1)}
                          </motion.span>
                        )}
                        {/* View button */}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="ml-2 text-xs font-semibold text-primary hover:underline"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering the modal on the whole card
                            setSelectedProject(project);
                          }}
                        >
                          View
                        </motion.button>
                      </div>

                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full text-center py-12"
              >
                <p className="text-lg text-base-content/70">
                  Currently working on projects in this category. Stay tuned for
                  updates!
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Right Navigation Button */}
          <motion.button
            onClick={() => scroll("right")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 p-3 rounded-full bg-base-100 shadow-lg hover:bg-primary hover:text-white transition-colors"
            aria-label="Scroll right"
          >
            <FaChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-base-100 rounded-xl max-w-lg w-full max-h-[80vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <motion.img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <FaTimes />
                </motion.button>
              </div>

              <div className="p-5">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl font-bold mb-2 gradient-text"
                >
                  {selectedProject.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-base-content/80 mb-4 text-sm"
                >
                  {selectedProject.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-4"
                >
                  <h4 className="text-xs uppercase tracking-wider text-base-content/60 mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-3"
                >
                  {selectedProject.githubUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-base-200 hover:bg-primary hover:text-white transition-colors duration-200 text-sm"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>View Code</span>
                    </motion.a>
                  )}
                  {/* {selectedProject.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary text-white hover:bg-primary/80 transition-colors duration-200 text-sm"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      <span>Live Demo</span>
                    </motion.a>
                  )} */}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}

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

export default Projects;
