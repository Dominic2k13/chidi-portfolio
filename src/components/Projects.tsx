import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Lushosa Frontend",
    description: "Modern and elegant frontend website with clean UI/UX design built with React and Tailwind CSS.",
    live: "https://lushosafrontend.vercel.app/",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: "/lushosa.png",
  },
  {
    title: "Highscore EdTech",
    description: "Educational technology platform focused on academic excellence and student success.",
    live: "https://highscoreedtech.com/",
    tech: ["React", "Go", "PostgreSQL", "Tailwind"],
    image: "/highscore.png",
  },
  {
    title: "Venny Designo",
    description: "Creative design agency website with smooth animations and modern design system.",
    live: "https://venny-designo.netlify.app/",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/venny.png",
  },
  {
    title: "RosyMax Pharmacy",
    description: "Professional pharmacy website with product catalog and wholesale supplies.",
    live: "https://rosymaxpharmacy.com/",
    tech: ["React", "Tailwind CSS"],
    image: "/rosymax.png",
  },
  {
    title: "Maria Rosa Mystica Parish",
    description: "Official website for Maria Rosa Mystica Parish featuring events, sermons and community information.",
    live: "https://mariarosamysticaparish.org/",
    tech: ["React", "Tailwind CSS"],
    image: "/maria-rosa.png",
  },
  {
    title: "JDPC Enugu",
    description: "Official website for Justice, Development and Peace Commission (JDPC) Enugu Diocese - a faith-based NGO focused on social justice, good governance, and community development.",
    live: "https://jdpc.netlify.app/",           // Change this later to your actual Netlify URL
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/jdpc-logo.jpeg",
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
          <p className="text-zinc-400 text-lg">Real projects I have designed and developed</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group bg-zinc-900 border border-zinc-800 hover:border-violet-500 rounded-3xl overflow-hidden transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden bg-zinc-800">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.live} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 py-3.5 rounded-2xl text-sm font-medium transition-all w-full"
                >
                  <FaExternalLinkAlt /> View Live Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}