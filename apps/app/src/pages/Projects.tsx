import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { PROJECTS, Project } from '../lib/data';

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Real Estate' | 'Healthcare' | 'Developer Tools' | 'Marketing'>('All');
  
  const categories = ['All', 'Real Estate', 'Healthcare', 'Developer Tools', 'Marketing'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-12 md:pt-24 mb-24">
      <header className="mb-16 flex flex-col gap-6">
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter">&gt; REGISTRY</h1>
        <p className="text-fg/60 max-w-xl text-lg">
          A systematic record of experiments, products, and open-source contributions. 
          Filtered by sector and mission.
        </p>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat as any)}
            className={`font-display text-xs tracking-widest uppercase px-4 py-2 border transition-all ${
              filter === cat 
                ? 'bg-accent text-bg border-accent' 
                : 'border-fg/10 text-fg/40 hover:border-fg/40 hover:text-fg'
            }`}
          >
            [{filter === cat ? 'x' : ' '}] {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="group border border-fg/10 bg-[#0f0f0f] grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden hover:border-accent/30 transition-colors"
            >
              <div className="lg:col-span-8 p-8 md:p-12 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-display text-[10px] tracking-[0.2em] text-accent font-bold uppercase">{project.category}</span>
                    <span className="w-1 h-1 rounded-full bg-fg/20" />
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${project.status === 'LIVE' ? 'bg-green-500 animate-pulse' : 'bg-amber-500'}`} />
                      <span className="font-display text-[10px] tracking-widest uppercase text-fg/40">{project.status}</span>
                    </div>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight group-hover:text-accent transition-colors">{project.name}</h2>
                  <p className="font-display text-sm text-secondary tracking-widest uppercase">{project.tagline}</p>
                </div>

                <p className="text-lg text-fg/70 leading-relaxed max-w-2xl">
                  {project.description}
                </p>

                <div className="flex flex-col gap-4">
                  <p className="font-display text-[10px] tracking-widest text-fg/30 uppercase font-bold">CORE_FEATURES</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    {project.features.map((f, i) => (
                      <li key={i} className="text-sm text-fg/50 flex items-center gap-2 hover:text-fg/80 transition-colors">
                        <span className="text-accent/60 font-display">&gt;</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-4 bg-fg/[0.02] border-l border-fg/5 p-8 md:p-12 flex flex-col justify-between gap-12">
                <div className="flex flex-col gap-6">
                  <p className="font-display text-[10px] tracking-widest text-fg/30 uppercase font-bold">TECH_STACK</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(s => (
                      <span key={s} className="px-3 py-1 bg-fg/5 border border-fg/5 text-[11px] font-display text-fg/60">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-4 border border-fg/10 font-display text-xs tracking-widest uppercase hover:bg-fg hover:text-bg transition-all"
                    >
                      <Github size={16} /> GitHub
                    </a>
                  )}
                   <button className="flex-[2] flex items-center justify-center gap-2 py-4 bg-accent text-bg font-display text-xs tracking-widest uppercase hover:bg-white transition-all">
                    View Demo <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
