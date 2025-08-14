import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Highlights from "./components/Highlights";

import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute(
          "href"
        );
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      });
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-base-100 text-base-content">
        {/* Progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
          style={{ scaleX }}
        />

        {/* Main content */}
        <Navbar theme="light" />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <TechStack />
              <Projects />
              <Experience />
              {/* <Contact /> */}
            </>
          } />
          <Route path="/blog" element={<Blog />} />
          <Route path ="/highlights" element={<Highlights />} />
        </Routes>
        <Footer />

        {/* Decorative background elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>
      </div>
    </Router>
  );
};

export default App;
