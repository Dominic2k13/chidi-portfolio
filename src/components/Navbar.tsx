import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaWhatsapp, 
  FaLinkedin, 
  FaEnvelope 
} from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-semibold tracking-tighter hover:text-violet-400 transition-colors cursor-pointer"
        >
          Chidiebere.
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-white relative group"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-violet-400 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>

        {/* Contact Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <motion.a
            href="https://wa.me/234XXXXXXXXXX"  // ← Replace with your WhatsApp number (with country code)
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 hover:bg-zinc-900 rounded-xl text-emerald-400 hover:text-emerald-500 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <FaWhatsapp size={22} />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/yourusername"  // ← Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 hover:bg-zinc-900 rounded-xl text-blue-400 hover:text-blue-500 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedin size={22} />
          </motion.a>

          <motion.a
            href="mailto:chidiebereijeoma135@gmail.com"
            className="p-3 hover:bg-zinc-900 rounded-xl text-zinc-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <FaEnvelope size={22} />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-zinc-300 hover:text-white transition-colors"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-zinc-950 border-t border-zinc-800"
        >
          <div className="flex flex-col px-6 py-6 gap-6 text-lg">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-violet-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Contact Icons */}
            <div className="flex gap-6 pt-4 border-t border-zinc-800">
              <a href="https://wa.me/234XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-emerald-400">
                <FaWhatsapp size={28} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400">
                <FaLinkedin size={28} />
              </a>
              <a href="mailto:chidiebereijeoma135@gmail.com" className="text-zinc-400">
                <FaEnvelope size={28} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}