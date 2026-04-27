import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-900 border border-zinc-700 rounded-full text-sm"
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            Open to opportunities
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-7xl font-bold tracking-tighter leading-none"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              Ijeoma Chidiebere
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl text-zinc-400 font-light"
          >
            Fullstack Web Developer
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-lg text-lg text-zinc-400 leading-relaxed"
          >
            I build fast, scalable, and beautiful web applications using modern technologies.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-6"
          >
            <a 
              href="#projects" 
              className="bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-2xl font-semibold transition-all active:scale-95"
            >
              View My Projects →
            </a>
            <a 
              href="#contact" 
              className="border border-zinc-600 hover:bg-zinc-900 px-8 py-4 rounded-2xl font-semibold transition-all"
            >
              Let's Talk
            </a>
          </motion.div>
        </div>

        {/* Cartoon Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="flex justify-center md:justify-end pt-8 md:pt-0"
        >
          <div className="relative w-80 h-80 md:w-[380px] md:h-[380px]">
            {/* Soft glow effect for cartoon look */}
            <div className="absolute -inset-8 bg-gradient-to-br from-violet-400/30 to-fuchsia-400/20 rounded-[4rem] -rotate-6 blur-xl"></div>
            
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-8 border-zinc-700 shadow-2xl bg-zinc-900">
              <img 
                src="/hero.png" 
                alt="Ijeoma Chidiebere - Fullstack Web Developer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}