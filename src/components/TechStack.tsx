import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "Java", icon: <SiOpenjdk />, color: "#007396" },
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
  { name: "AWS", icon: <SiAmazon />, color: "#232F3E" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "PHP", icon: <SiPhp />, color: "#777BB4" },
  { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
];

const TechStack: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="tech-stack" className="py-16 relative">
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
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.05 },
            },
          }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 mt-10"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col items-center text-center space-y-2"
            >
              <div
                className="p-3 rounded-lg"
                style={{ backgroundColor: `${skill.color}20` }}
              >
                {React.cloneElement(skill.icon, {
                  className: "w-6 h-6",
                  color: skill.color,
                })}
              </div>
              <span className="text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative glow orbs (optional) */}
        <div className="absolute top-1/4 -left-24 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-24 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default TechStack;
