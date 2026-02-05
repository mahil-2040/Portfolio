export default function Projects() {
  const projects = [
    {
      title: "Astra",
      description:
        "Engineered an Electron app to audit repositories using OSV.dev and AI-powered analysis. Integrated Tree-sitter and Gemini CLI to generate contextual patches for vulnerabilities, automating remediation workflows through dedicated fix branches.",
      skills: [
        "Electron",
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Tree-sitter",
        "Gemini CLI",
      ],
      github: "https://github.com/mahil-2040/Astra",
      liveDemo: null,
      viewDemo: "https://youtu.be/XFiMSWMZ4KU", // Optional: Add video demo link if available
      img_url: "/astra.jpeg"
    },
    {
      title: "EchoBox",
      description:
        "Built a file transfer system achieving 12 MB/s speeds in LAN environments via robust TCP protocols. Implemented chunk-based splitting for resumable downloads while optimizing CPU usage to remain under 15% during heavy operations.",
      skills: [
        "Flutter",
        "Node.js",
        "Socket.io",
        "Websockets",
        "TCP",
      ],
      github: "https://github.com/mahil-2040/EchoBox",
      liveDemo: null,
      viewDemo: null, // Optional: Video demo
      img_url: "/echobox.png"
    },
    {
      title: "YelpCamp",
      description:
        "Developed a full-stack campground platform supporting concurrent users with secure authentication. Constructed a fast RESTful backend using MapTiler for interactive maps and Cloudinary for optimized image uploads, ensuring seamless discovery and storage.",
      skills: [
        "Node.js",
        "Express",
        "MongoDB",
        "Map Tiler",
        "Cloudinary",
      ],
      github: "https://github.com/mahil-2040/YelpCamp",
      liveDemo: null,
      viewDemo: null,
      img_url: "/astra.jpeg"
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-6 sm:px-8 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 sm:mb-16 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Projects
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="space-y-24 sm:space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-8 lg:gap-16 items-center"
            >
              {/* Image Placeholder - alternates left/right */}
              <div
                className={`relative aspect-video bg-gradient-to-br from-gray-900 to-black border border-white/10 overflow-hidden ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                {/* Subtle Grid Pattern */}
                <img src={project.img_url} alt={project.title} srcset="" />
              </div>

              {/* Project Details */}
              <div
                className={index % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="space-y-4 sm:space-y-4">
                  {/* Project Number */}
                  <div className="text-gray-700 text-xs sm:text-sm tracking-widest">
                    0{index + 1}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl text-white">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* Skills */}
                  <div className="pt-3">
                    <div className="text-gray-600 text-xs tracking-widest mb-3">
                      SKILLS USED
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm text-gray-400 border border-white/10 bg-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="pt-3">
                    <div className="text-gray-600 text-xs tracking-widest mb-3">
                      LINKS
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm text-gray-400 border border-white/10 bg-white/5 hover:border-[#d6cfc7]/30 hover:text-[#d6cfc7] transition-colors duration-300"
                        >
                          GitHub
                        </a>
                      )}
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm text-gray-400 border border-white/10 bg-white/5 hover:border-[#d6cfc7]/30 hover:text-[#d6cfc7] transition-colors duration-300"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.viewDemo && (
                        <a
                          href={project.viewDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm text-gray-400 border border-white/10 bg-white/5 hover:border-[#d6cfc7]/30 hover:text-[#d6cfc7] transition-colors duration-300"
                        >
                          View Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}