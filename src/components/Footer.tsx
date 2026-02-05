import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Mahil Patel. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a
              href="https://www.linkedin.com/in/mahil-patel08/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#d6cfc7] transition-colors duration-300 text-xs sm:text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mahil-2040"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#d6cfc7] transition-colors duration-300 text-xs sm:text-sm"
            >
              GitHub
            </a>
            <a
              href="http://codeforces.com/profile/Mahil08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#d6cfc7] transition-colors duration-300 text-xs sm:text-sm"
            >
              Codeforces
            </a>
            <a
              href="https://leetcode.com/u/mahil_patel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#d6cfc7] transition-colors duration-300 text-xs sm:text-sm"
            >
              LeetCode
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}