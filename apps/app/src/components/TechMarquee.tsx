import { motion } from 'motion/react';
import { TECH_STACK } from '../lib/data';

export default function TechMarquee() {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden bg-bg border-y border-accent/20 py-4 opacity-80">
      <motion.div 
        animate={{ x: [0, -1035] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex gap-12 items-center whitespace-nowrap px-12"
      >
        {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
          <div key={i} className="flex items-center gap-4">
            <span className="font-display text-sm tracking-[0.2em] uppercase text-accent/80">{tech}</span>
            <span className="text-secondary/40">·</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
