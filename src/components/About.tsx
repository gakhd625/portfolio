import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCode, FaLaptopCode, FaServer } from "react-icons/fa";

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

  const services = [
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Frontend Development",
      description:
        "Creating responsive and interactive user interfaces using modern frameworks and best practices.",
    },
    {
      icon: <FaServer className="w-6 h-6" />,
      title: "Backend Development",
      description:
        "Building robust server-side applications and APIs with scalable architecture.",
    },
    {
      icon: <FaLaptopCode className="w-6 h-6" />,
      title: "Beyond Tech",
      description:
        "In my free time, I volunteer or participate in tech events to expand my network and stay updated in the industry. I also enjoy photography,  network and stay updated in the industry. I also enjoy photography,   .",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">About Me</h2>
          <p className="text-lg text-base-content/70 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a keen eye for creating
            elegant solutions in the least amount of time. I specialize in
            building responsive web applications and delivering exceptional user
            experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-6 bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 gradient-text">
                  {service.title}
                </h3>
                <p className="text-base-content/70">{service.description}</p>
              </div>
            </motion.div>
          ))}
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
