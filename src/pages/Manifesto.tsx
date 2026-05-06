import { motion } from 'motion/react';
import { MANIFESTO } from '../lib/data';

export default function Manifesto() {
  return (
    <div className="max-w-4xl pt-12 md:pt-24 mb-24">
      <header className="mb-24 flex flex-col gap-8 relative">
        <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-accent/20 hidden md:block" />
        <motion.p 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           className="font-display text-accent text-sm tracking-[0.4em] font-medium"
        >
          // CORE_PRINCIPLES.log
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-display text-5xl md:text-8xl font-bold tracking-tighter leading-none"
        >
          THE CHAOS <br /> CRAFT <br /> MANIFESTO
        </motion.h1>
      </header>

      <div className="flex flex-col gap-24 relative">
         <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-fg/10 hidden md:block md:-left-12" />
        
        {MANIFESTO.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col md:flex-row gap-8 md:gap-16 items-start"
          >
            <span className="font-display text-5xl md:text-7xl font-bold text-accent/20 tracking-tighter shrink-0 select-none">
              {item.id}
            </span>
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-fg group flex items-center gap-4">
                <span className="text-accent">&gt;</span> {item.title || (item as any).shipTitle}
              </h3>
              <p className="text-lg md:text-xl text-fg/70 leading-relaxed max-w-2xl">
                {item.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-32 p-12 bg-accent/5 border border-dashed border-accent/20 flex flex-col gap-6 items-center text-center"
      >
        <p className="font-display text-accent text-sm tracking-widest uppercase">END_OF_MANIFESTO</p>
        <p className="text-fg/60 max-w-sm">These principles guide every line of code written at Chaos Craft Labs. Stay focused. Ship fast.</p>
      </motion.div>
    </div>
  );
}
