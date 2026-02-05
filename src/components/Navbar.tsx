import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleDownloadResume = () => {
    // Open resume in new tab
    window.open('https://drive.google.com/file/d/17oUu2FmisKSv0BwxmNhCSFbXdUQDgNc3/view?usp=sharing', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center h-20">
          {/* Centered - Name and Navigation Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-8 md:gap-12"
          >
            <Link to="/" className="text-white tracking-wide">
              Mahil Patel
            </Link>

            <div className="w-px h-4 bg-white/20" />

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm md:text-base transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-[#d6cfc7]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[#d6cfc7]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            <button
              onClick={handleDownloadResume}
              className="text-sm md:text-base text-gray-400 hover:text-white transition-colors duration-300"
            >
              Download Resume
            </button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-end h-16">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu with Sliding Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 w-full h-screen bg-black md:hidden z-50 flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-white p-2"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            {/* Menu Items - Centered */}
            <div className="flex flex-col items-center space-y-2">
              {/* Mahil Patel as first menu item */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
              >
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-4 px-6 text-xl transition-all duration-300 ${
                    location.pathname === '/'
                      ? 'text-[#d6cfc7]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Mahil Patel
                </Link>
              </motion.div>

              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 1) * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-4 px-6 text-xl transition-all duration-300 ${
                      location.pathname === link.path
                        ? 'text-[#d6cfc7]'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.1 }}
              >
                <button
                  onClick={() => {
                    handleDownloadResume();
                    setIsMenuOpen(false);
                  }}
                  className="block py-4 px-6 text-xl text-gray-400 hover:text-white transition-all duration-300"
                >
                  Download Resume
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}