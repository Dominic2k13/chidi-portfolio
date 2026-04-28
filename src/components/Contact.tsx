import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-semibold mb-4"
          >
            Get In Touch
          </motion.h2>
          <p className="text-zinc-400 text-lg">
            I'm currently open to new opportunities and collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Email Card */}
          <motion.a
            href="mailto:chidiebereijeoma135@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="group bg-zinc-950 border border-zinc-800 hover:border-violet-500 p-8 rounded-3xl flex flex-col items-center text-center transition-all"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-violet-900/30 text-violet-400 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <FaEnvelope size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Me</h3>
            <p className="text-zinc-400 text-sm break-all">chidiebereijeoma135@gmail.com</p>
          </motion.a>

          {/* WhatsApp Card */}
          <motion.a
            href="https://wa.me/2348132598777"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="group bg-zinc-950 border border-zinc-800 hover:border-emerald-500 p-8 rounded-3xl flex flex-col items-center text-center transition-all"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-emerald-900/30 text-emerald-400 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <FaWhatsapp size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2">WhatsApp / Call</h3>
            <p className="text-zinc-400 text-sm">+234 813 259 8777</p>
            <p className="text-emerald-400 text-xs mt-1">Click to chat or call</p>
          </motion.a>

          {/* Phone Card */}
          <motion.a
            href="tel:+2348132598777"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="group bg-zinc-950 border border-zinc-800 hover:border-blue-500 p-8 rounded-3xl flex flex-col items-center text-center transition-all"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-blue-900/30 text-blue-400 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <FaPhone size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Me</h3>
            <p className="text-zinc-400 text-sm">+234 813 259 8777</p>
          </motion.a>

        </div>

        <div className="text-center mt-12 text-zinc-500 text-sm">
          I'll get back to you as soon as possible
        </div>
      </div>
    </section>
  );
}