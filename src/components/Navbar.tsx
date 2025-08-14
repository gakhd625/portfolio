import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavbarProps {
  theme: 'light' | 'dark';
}

const Navbar: React.FC<NavbarProps> = ({ theme }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
  { name: 'About', to: 'about', type: 'scroll' },
  // { name: 'Tech Stack', to: 'tech-stack', type: 'scroll' },
  // { name: 'Certifications', to: 'certifications', type: 'scroll' },
  { name: 'Projects', to: 'projects', type: 'scroll' },
  { name: 'Experience', to: 'experience', type: 'scroll' },
  // { name: 'Contact', to: 'contact', type: 'scroll' },
  { name: 'Blog', to: '/blog', type: 'route' },
  { name: 'Highlights', to: '/highlights', type: 'route' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-base-100/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="home"
            className="text-2xl font-bold gradient-text cursor-pointer"
            smooth={true}
            duration={500}
          >
            gerleyy
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                item.type === 'route' ? (
                  <RouterLink
                    key={item.name}
                    to={item.to}
                    className="nav-link"
                  >
                    {item.name}
                  </RouterLink>
                ) : (
                  location.pathname === '/' ? (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="nav-link"
                      smooth={true}
                      duration={500}
                      offset={-70}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      key={item.name}
                      className="nav-link bg-transparent border-none cursor-pointer"
                      onClick={() => {
                        navigate('/');
                        setTimeout(() => {
                          const target = document.getElementById(item.to);
                          if (target) {
                            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }, 100);
                      }}
                    >
                      {item.name}
                    </button>
                  )
                )
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-base-content hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-base-100/95 backdrop-blur-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                item.type === 'route' ? (
                  <RouterLink
                    key={item.name}
                    to={item.to}
                    className="block px-3 py-2 rounded-md text-base font-medium text-base-content nav-link hover:text-primary hover:bg-base-200 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </RouterLink>
                ) : (
                  location.pathname === '/' ? (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="block px-3 py-2 rounded-md text-base font-medium text-base-content nav-link hover:text-primary hover:bg-base-200 transition-colors duration-200"
                      smooth={true}
                      duration={500}
                      offset={-70}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      key={item.name}
                      className="block px-3 py-2 rounded-md text-base font-medium text-base-content nav-link hover:text-primary hover:bg-base-200 transition-colors duration-200 bg-transparent border-none cursor-pointer"
                      onClick={() => {
                        setIsOpen(false);
                        navigate('/');
                        setTimeout(() => {
                          const target = document.getElementById(item.to);
                          if (target) {
                            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }, 100);
                      }}
                    >
                      {item.name}
                    </button>
                  )
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 