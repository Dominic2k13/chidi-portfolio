import { motion } from 'framer-motion';
import { 
  SiReact, SiTypescript, SiTailwindcss, SiJavascript, 
  SiGo, SiPython, SiFlutter, SiDart, 
  SiPostgresql, SiGit, SiFigma, 
  SiFirebase, SiSupabase 
} from 'react-icons/si';

const skills = [
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Go", icon: SiGo, color: "text-cyan-500" },
  { name: "Python", icon: SiPython, color: "text-emerald-400" },
  { name: "Flutter", icon: SiFlutter, color: "text-blue-500" },
  { name: "Dart", icon: SiDart, color: "text-blue-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-indigo-400" },
  { name: "Firebase", icon: SiFirebase, color: "text-orange-400" },
  { name: "Supabase", icon: SiSupabase, color: "text-emerald-500" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "Figma", icon: SiFigma, color: "text-pink-400" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-semibold mb-4"
          >
            Skills & Technologies
          </motion.h2>
          <p className="text-zinc-400 text-lg">Tools and platforms I use to build modern applications</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group bg-zinc-950 border border-zinc-800 hover:border-violet-500 
                         p-8 rounded-3xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className={`text-5xl mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon />
              </div>
              <span className="text-xl font-medium text-zinc-200">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}