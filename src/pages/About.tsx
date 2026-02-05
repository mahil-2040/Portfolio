import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-12 md:py-20">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
            About
          </h1>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          {/* Image */}
          <div className="relative h-[50vh] md:h-[60vh] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1597166176783-e1d54eb9c8c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBlcnNvbiUyMG1pbmltYWx8ZW58MXx8fHwxNzcwMjI1MDQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Apoorv Tyagi"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bio */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-white text-lg md:text-xl leading-relaxed">
              I'm a full-stack creative designer specializing in product design,
              brand identity, and digital storytelling.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              With over 5 years of experience, I've helped startups and
              established companies craft compelling visual narratives and
              user-centered experiences. My approach combines strategic thinking
              with meticulous attention to detail.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Currently based in San Francisco, working with clients worldwide
              to bring their visions to life through thoughtful design and
              creative problem-solving.
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-8">Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white mb-4">Product Design</h3>
              <ul className="space-y-2 text-gray-400">
                <li>UX/UI Design</li>
                <li>User Research</li>
                <li>Prototyping</li>
                <li>Design Systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white mb-4">Brand Design</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Visual Identity</li>
                <li>Logo Design</li>
                <li>Brand Strategy</li>
                <li>Style Guides</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white mb-4">Tools</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Figma</li>
                <li>Adobe Suite</li>
                <li>Sketch</li>
                <li>Framer</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl text-white mb-8">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-white/10 pl-6 pb-8">
              <div className="text-gray-500 text-sm mb-2">2023 - Present</div>
              <h3 className="text-white text-xl mb-2">Senior Product Designer</h3>
              <p className="text-gray-400">
                Leading design initiatives for a B2B SaaS platform
              </p>
            </div>
            <div className="border-l-2 border-white/10 pl-6 pb-8">
              <div className="text-gray-500 text-sm mb-2">2020 - 2023</div>
              <h3 className="text-white text-xl mb-2">Brand Designer</h3>
              <p className="text-gray-400">
                Developed brand identities for 20+ startups and agencies
              </p>
            </div>
            <div className="border-l-2 border-white/10 pl-6">
              <div className="text-gray-500 text-sm mb-2">2018 - 2020</div>
              <h3 className="text-white text-xl mb-2">UI/UX Designer</h3>
              <p className="text-gray-400">
                Crafted user experiences for mobile and web applications
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
