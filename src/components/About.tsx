import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-semibold mb-6"
        >
          About Me
        </motion.h2>
        <p className="text-xl text-zinc-300 leading-relaxed">
          I'm a passionate Fullstack Web Developer who enjoys building complete solutions — 
          from beautiful, responsive frontends to scalable backends.
        </p>
      </div>
    </section>
  );
}