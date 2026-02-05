import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black pt-20 sm:pt-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-6 lg:px-12 py-12 md:py-20">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 md:mb-24"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6">
            Get In Touch
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl">
            Have a project in mind? Let's collaborate and create something
            extraordinary together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h2 className="text-white text-xl sm:text-2xl mb-3 sm:mb-4">Email</h2>
              <a
                href="mailto:mahilpatel0808@gmail.com"
                className="text-gray-400 hover:text-[#d6cfc7] transition-colors duration-300 text-base sm:text-lg break-words"
              >
                mahilpatel0808@gmail.com
              </a>
            </div>

            <div>
              <h2 className="text-white text-xl sm:text-2xl mb-3 sm:mb-4">Social</h2>
              <div className="space-y-2 sm:space-y-3">
                <a
                  href="https://www.linkedin.com/in/mahil-patel08/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-[#d6cfc7] transition-colors duration-300 text-sm sm:text-base"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/mahil-2040"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-[#d6cfc7] transition-colors duration-300 text-sm sm:text-base"
                >
                  GitHub
                </a>
                <a
                  href="http://codeforces.com/profile/Mahil08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-[#d6cfc7] transition-colors duration-300 text-sm sm:text-base"
                >
                  Codeforces
                </a>
                <a
                  href="https://leetcode.com/u/mahil_patel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-[#d6cfc7] transition-colors duration-300 text-sm sm:text-base"
                >
                  LeetCode
                </a>
              </div>
            </div>
          </motion.div>

          {/* Schedule a Call CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold">
                Let's Talk
              </h2>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg">
                Book a 15-minute call to discuss your project, ideas, or just to connect.
              </p>
              
              <motion.a
                href="https://cal.com/mahil-patel/15min"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-black py-4 sm:py-5 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors duration-300 text-base sm:text-lg font-medium"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Call
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}