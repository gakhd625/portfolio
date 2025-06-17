import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiOpenjdk,
  // SiPython,
  SiAmazon,
  SiMysql,
  SiPhp,
  SiLaravel,
  SiReact,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "Java", icon: <SiOpenjdk />, color: "#007396" },
  // { name: "Python", icon: <SiPython />, color: "#3776AB" },
  { name: "AWS", icon: <SiAmazon />, color: "#232F3E" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "PHP", icon: <SiPhp />, color: "#777BB4" },
  { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
];

const TechStack: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Create a duplicate array for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills];

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let animationFrameId: number;
    let startTime: number | null = null;
    const duration = 20000; // 20 seconds for one complete cycle
    const distance = container.scrollWidth / 2;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) % duration;
      const scrollPosition = (progress / duration) * distance;

      container.scrollLeft = scrollPosition;

      // Reset scroll position when reaching the end
      if (container.scrollLeft >= distance) {
        container.scrollLeft = 0;
        startTime = timestamp;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="tech-stack" className="py-16 relative overflow-hidden">
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
          Tech Stack
        </motion.h2>

        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-base-100 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-base-100 to-transparent z-10" />

          {/* Infinite scrolling container */}
          <div
            ref={containerRef}
            className="flex overflow-x-hidden whitespace-nowrap py-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {duplicatedSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                }}
                className="inline-flex items-center mx-4"
              >
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-base-200/50 backdrop-blur-sm"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: `${skill.color}15`,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  {React.cloneElement(skill.icon, {
                    className: "w-6 h-6",
                    color: skill.color,
                  })}
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated decorative elements */}
        <motion.div
          className="absolute top-1/4 -left-24 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 -right-24 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"
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

export default TechStack;
