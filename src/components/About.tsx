import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
        duration: 0.5,
      },
    },
  };

  return (
    <section id='about' className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="card glass p-6">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Who I Am
              </h3>
              <p className="text-base-content/80 leading-relaxed">
                Hi, I'm <span className="font-semibold text-primary">Gerlie</span>, 
                an aspiring IT professional with a strong interest in cloud computing, 
                artificial intelligence, and cybersecurity. I am passionate about exploring 
                how technology can solve real-world challenges and create positive change.
              </p>
            </div>

            <div className="card glass p-6">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                What I Do
              </h3>
              <p className="text-base-content/80 leading-relaxed">
                I am actively exploring various areas of tech, particularly software 
                development and cloud infrastructure. I remain open to gaining new skills 
                and experiences to broaden my knowledge and stay at the forefront of 
                technological innovation.
              </p>
            </div>

            <div className="card glass p-6">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Beyond Tech
              </h3>
              <p className="text-base-content/80 leading-relaxed">
                In my free time, I volunteer or participate in tech events to expand my 
                network and stay updated in the industry. I also enjoy photography, 
                especially capturing nature, as a creative and relaxing hobby.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="card glass p-8 h-full">
              <div className="space-y-6">
                {/* <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Education</h4>
                    <p className="text-base-content/70">Bachelor of Science in Information Technology</p>
                  </div>
                </div> */}

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Skills</h4>
                    <p className="text-base-content/70">
                      Cloud Computing, AI/ML, Web Development, Cybersecurity
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Goals</h4>
                    <p className="text-base-content/70">
                      To become a full-stack developer and contribute to innovative solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl">📸</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Hobbies</h4>
                    <p className="text-base-content/70">
                      Photography, Tech Events, Volunteering
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 