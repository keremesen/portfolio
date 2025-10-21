import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, Code2 } from "lucide-react";
import { Section, SectionHeader } from "./ui/Section";
import { Card } from "./ui/Card";
import { Tag } from "./ui/Tag";

const Projects = () => {
  const projects = [
    {
      title: "CptAI",
      description:
        "A web application that generates AI-powered captions for your images using advanced AI technology.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "Upstash Redis", "Replicate API"],
      category: "AI/ML",
      liveUrl: "https://cptai.vercel.app",
      githubUrl: "https://github.com/keremesen/cptai",
      featured: true,
    },
    {
      title: "Blogz",
      description:
        "A full-featured blog platform to share opinions and ideas with modern web technologies and responsive design.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "App Router", "Auth.js", "MongoDB", "SSR & CSR"],
      category: "Full-Stack",
      liveUrl: "https://blogz.vercel.app",
      githubUrl: "https://github.com/keremesen/blogz",
      featured: true,
    },
    {
      title: "Travelify",
      description:
        "A platform to explore and filter places like hotels, restaurants, and attractions in a specific location.",
      image: "/api/placeholder/400/250",
      technologies: ["React (Web)", "React Native (Mobile)"],
      category: "Cross-Platform",
      liveUrl: "https://travelify.vercel.app",
      githubUrl: "https://github.com/keremesen/travelify",
      featured: true,
    },
    {
      title: "Chatty",
      description:
        "A cross-platform real-time chat app with persistent messaging and real-time updates using Firebase.",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "Firebase (Auth, Firestore, Realtime DB)"],
      category: "Mobile",
      liveUrl: "https://chatty-app.vercel.app",
      githubUrl: "https://github.com/keremesen/chatty",
      featured: false,
    },
    {
      title: "Logicl",
      description:
        "An idea-sharing platform designed for structured discussions through pros and cons contributed by the community.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
      category: "Frontend",
      liveUrl: "https://logicl.vercel.app",
      githubUrl: "https://github.com/keremesen/logicl",
      featured: false,
    },
  ];

  return (
    <Section id="projects" className="bg-dark-800">
      <SectionHeader
        title={(
          <>
            Featured <span className="gradient-text">Projects</span>
          </>
        )}
        subtitle={"A showcase of my recent work, demonstrating my skills in modern web development and design."}
      />

      {/* Featured Projects */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {projects
          .filter((p) => p.featured)
          .map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                    <Code2 className="w-16 h-16 text-primary-400" />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-primary-500 text-white p-3 rounded-full hover:bg-primary-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>

                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-primary-400 font-medium">{project.category}</span>
                    <Tag tone="neutral">Featured</Tag>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Tag key={techIndex}>{tech}</Tag>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
      </div>

      {/* All Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold text-white mb-8 text-center">
          All <span className="gradient-text">Projects</span>
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="relative overflow-hidden">
                <div className="w-full h-32 bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                  <Code2 className="w-12 h-12 text-primary-400" />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary-500 text-white p-2 rounded-full hover:bg-primary-600 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                  </motion.a>

                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-primary-400 font-medium">{project.category}</span>
                </div>

                <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>

                <p className="text-gray-400 text-xs leading-relaxed mb-3">{project.description}</p>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Tag key={techIndex}>{tech}</Tag>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-gray-500 px-2 py-1">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Projects;
