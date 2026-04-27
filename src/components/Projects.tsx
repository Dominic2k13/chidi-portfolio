import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Fullstack online store built with React, Go, and PostgreSQL. Features cart, payment integration, and admin dashboard.",
    tech: ["React", "TypeScript", "Go", "PostgreSQL", "Tailwind"],
    github: "#",
    live: "#",
    category: "Fullstack"
  },
  {
    title: "Task Management App",
    description: "Beautiful productivity app with real-time sync using Supabase and Flutter for mobile.",
    tech: ["Flutter", "Dart", "Supabase", "Tailwind"],
    github: "#",
    live: "#",
    category: "Mobile"
  },
  {
    title: "AI Portfolio Generator",
    description: "Web app that generates personalized portfolios using modern AI tools and Firebase backend.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind"],
    github: "#",
    live: "#",
    category: "Frontend"
  },
  {
    title: "Blog Platform",
    description: "Modern blogging website with markdown support, comments, and SEO optimization.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    github: "#",
    live: "#",
    category: "Fullstack"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-semibold mb-4"
          >
            Featured Projects
          </motion.h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've built. Each one showcases different skills and technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-zinc-900 border border-zinc-800 hover:border-violet-500 rounded-3xl overflow-hidden transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="h-56 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center relative overflow-hidden">
                <div className="text-6xl text-zinc-700 group-hover:scale-110 transition-transform duration-500">
                  💻
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-2xl text-sm font-medium transition-all"
                  >
                    <FaGithub /> Code
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-2xl text-sm font-medium transition-all"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}