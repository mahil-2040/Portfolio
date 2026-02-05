import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const roles = ["Developer", "Competitive Programmer", "Born Genius"];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      {/* Background Grid with Fade */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          opacity: 0.05,
          maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)'
        }}
      />

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Greeting */}
          <div className="text-gray-500 text-xs sm:text-sm md:text-base tracking-wider uppercase">
            Hi, Mahil here
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light text-white leading-tight">
            Software Engineer <span className="text-gray-600">&</span> Problem Solver
          </h1>

          {/* Animated Role */}
          <div className="flex items-center gap-3 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 min-h-[2rem]">
            <span>{displayedText}</span>
            <span className="w-0.5 h-5 sm:h-6 bg-gray-400 animate-pulse" />
          </div>

          {/* Divider */}
          <div className="pt-8">
            <div className="w-16 h-px bg-white/20" />
          </div>

          {/* Bio */}
          <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
            Building scalable solutions through elegant code.
            Passionate about algorithms and competitive programming.
          </p>
        </motion.div>
      </div>
    </div>
  );
}