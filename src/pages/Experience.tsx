export default function Experience() {
  const experiences = [
    {
      company: "Palisadoes Foundation & Volcano-sh",
      role: "Open Source Contributor",
      duration: "Dec 2025 - Present",
      description:
        "Contributed to scalable open-source ecosystems by enhancing backend observability, authentication security, and cloud-native resource efficiency.",
      achievements: [
        "Implemented Google OAuth providers and unit tests to ensure secure, robust identity management.",
        "Integrated OpenTelemetry tracing to enhance observability for complex GraphQL and database operations.",
        "Optimized AgentCube's pod cache mechanism to significantly reduce memory overhead for cloud-native agents.",
      ],
      technologies: [
        "TypeScript",
        "Go",
        "GraphQL",
        "CI/CD",
        "Git",
        "Docker",
      ],
    },
    {
      company: "Gharit",
      role: "Flutter Development Intern",
      duration: "Oct 2025 - Dec 2025",
      description:
        "Developed a scalable laundry application managing 3000+ daily orders. Focused on optimized architecture and intuitive UI components for seamless user experiences.",
      achievements: [
        "Streamlined processing for 3000+ daily orders via real-time API integration.",
        "Built modular UI components including skeleton loading and dynamic filtering.",
        "Optimized application performance to handle large datasets efficiently.",
      ],
      technologies: [
        "Flutter",
        "GetX",
        "Dart",
        "API Integration",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-6 sm:px-8 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 sm:mb-16 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Experience
          </h1>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />

          {/* Experience Items */}
          <div className="space-y-16 sm:space-y-16 md:space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-2 h-2 bg-[#d6cfc7] rounded-full -translate-x-[3.5px] hidden md:block" />
                <div className="absolute left-0 top-0 w-2 h-2 bg-[#d6cfc7]/30 rounded-full -translate-x-[3.5px] blur-sm hidden md:block" />

                {/* Content */}
                <div className="md:ml-12">
                  {/* Header Section */}
                  <div className="mb-4 sm:mb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h2 className="text-xl sm:text-2xl md:text-3xl text-white">
                        {exp.role}
                      </h2>
                      <span className="text-gray-500 text-xs sm:text-sm tracking-wider">
                        {exp.duration}
                      </span>
                    </div>
                    <div className="text-gray-400">
                      <span className="text-base sm:text-lg">
                        {exp.company}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-5 sm:mb-4 text-sm sm:text-base">
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-5 sm:mb-4">
                    <div className="text-gray-600 text-xs tracking-widest mb-3 sm:mb-3">
                      KEY ACHIEVEMENTS
                    </div>
                    <ul className="space-y-2.5 sm:space-y-2">
                      {exp.achievements.map(
                        (achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 sm:gap-3 text-gray-400 text-xs sm:text-sm"
                          >
                            <span className="text-gray-700 mt-1">
                              ▸
                            </span>
                            <span className="flex-1">
                              {achievement}
                            </span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div className="text-gray-600 text-xs tracking-widest mb-3 sm:mb-3">
                      TECHNOLOGIES
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm text-gray-400 border border-white/10 bg-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-500 pointer-events-none -m-4 sm:-m-6 p-4 sm:p-6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}