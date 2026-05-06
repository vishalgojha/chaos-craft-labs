import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Projects', path: '/projects' },
    { name: 'Manifesto', path: '/manifesto' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 lg:px-24 py-8 flex justify-between items-center bg-bg/80 backdrop-blur-sm border-b border-[#F0EDE620]">
      <Link to="/" className="font-display text-accent font-bold tracking-tighter text-lg md:text-xl hover:opacity-80 transition-opacity">
        chaos_craft_labs/
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-12">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`font-display text-[10px] tracking-widest uppercase transition-all relative group font-semibold ${
              location.pathname === link.path ? 'text-accent border-b border-accent pb-1' : 'text-fg/60 hover:text-accent'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button 
        className="md:hidden text-fg p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-bg z-40 flex flex-col items-center justify-center gap-8 md:hidden px-6"
          >
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-display text-4xl tracking-tighter transition-all ${
                  location.pathname === link.path ? 'text-accent' : 'text-fg'
                }`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
            <button 
              onClick={() => setIsOpen(false)}
              className="mt-12 font-display text-sm text-fg/40 uppercase tracking-[0.2em]"
            >
              [ CLOSE_TERMINAL ]
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
