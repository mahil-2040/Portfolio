import { motion } from 'motion/react';

const projects = [
  {
    title: 'E-Commerce Platform Redesign',
    category: 'Product Design',
    year: '2025',
    description:
      'Complete redesign of a major e-commerce platform, focusing on user experience and conversion optimization.',
    image: 'https://images.unsplash.com/photo-1762242298589-582f5f6c3fb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwYWJzdHJhY3QlMjBjb2RlfGVufDF8fHx8MTc3MDIyNDczN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Brand Identity for Tech Startup',
    category: 'Brand Design',
    year: '2025',
    description:
      'Developed comprehensive brand identity including logo, color palette, and brand guidelines.',
    image: 'https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGV2ZWxvcGVyfGVufDF8fHx8MTc3MDIyNDczN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Mobile Banking App',
    category: 'Product Design',
    year: '2024',
    description:
      'Designed a secure and intuitive mobile banking experience with focus on accessibility.',
    image: 'https://images.unsplash.com/photo-1765046255479-669cf07a0230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhdGElMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3MDE5NTY0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export default function Work() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-20">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Selected Work
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
            A collection of projects spanning product design, brand identity,
            and digital experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-20 md:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative w-full h-[40vh] md:h-[60vh] rounded-2xl overflow-hidden mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              {/* Project Info */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h2 className="text-2xl md:text-3xl text-white mb-2 group-hover:text-gray-300 transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 max-w-2xl">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-col md:items-end gap-2">
                  <span className="text-gray-500 text-sm">
                    {project.category}
                  </span>
                  <span className="text-gray-600 text-sm">{project.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
