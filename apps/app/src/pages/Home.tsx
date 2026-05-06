import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import TerminalBlock from '../components/TerminalBlock';
import TechMarquee from '../components/TechMarquee';
import { PROJECTS } from '../lib/data';

export default function Home() {
  return (
    <div className="flex flex-col gap-32 mb-24">
      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start pt-12 md:pt-24">
        <div className="lg:col-span-12">
           <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-accent text-sm md:text-base mb-6 tracking-[0.2em] font-medium"
          >
            // MUMBAI. SOLO. SHIPPING SINCE 2024.
          </motion.p>
        </div>

        <div className="lg:col-span-7 flex flex-col items-start gap-8">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] uppercase"
          >
            Building AI<br />products that<br />
            <span className="text-accent">actually work.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-fg/50 max-w-xl leading-relaxed font-medium"
          >
            Mumbai-based focus. Shipping agents for real estate, healthcare, and growth. 
            Out of frustration with how broken things are.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4"
          >
            <Link 
              to="/projects"
              className="group relative inline-flex items-center gap-4 bg-accent text-bg px-8 py-4 font-display font-bold uppercase tracking-widest text-sm hover:translate-y-[2px] transition-all artistic-shadow"
            >
              &gt; See what I'm building
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="lg:col-span-5 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <TerminalBlock />
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <TechMarquee />

      {/* Featured Products */}
      <section className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-accent tracking-[0.3em] font-medium">&gt; WHAT I'M BUILDING</h2>
          <div className="w-24 h-[1px] bg-accent/30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* About Strip / Quote */}
      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#121212] py-24 px-6 md:px-12 lg:px-24 border-y border-fg/5">
        <div className="max-w-4xl mx-auto border-l-4 border-accent pl-8 md:pl-12 py-4">
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
            className="text-2xl md:text-4xl font-light italic leading-tight text-fg/90 mb-8"
          >
            "Vibe coding isn't about AI replacing developers. It's about developers using AI to ship faster, learn quicker, and build things that matter."
          </motion.p>
          <p className="font-display text-sm tracking-widest uppercase text-accent/80">
            — Vishal Ojha, Chaos Craft Labs
          </p>
        </div>
      </section>
    </div>
  );
}

interface ProjectCardProps {
  project: any;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'LIVE': return 'bg-green-500';
      case 'BUILDING': return 'bg-amber-500';
      case 'OPEN SOURCE': return 'border border-fg/40';
      default: return 'bg-fg/20';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative flex flex-col bg-[#F0EDE605] border-l-2 p-8 md:p-10 hover:amber-glow transition-all hover:bg-[#F0EDE608] cursor-pointer ${
        project.status === 'LIVE' || project.status === 'BUILDING' ? 'border-accent' : 'border-fg/20'
      }`}
    >
      <div className="absolute top-6 right-8 flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)} ${project.status === 'LIVE' ? 'animate-pulse' : ''}`} />
        <span className="font-display text-[9px] tracking-widest uppercase font-bold text-fg/60">
          {project.status === 'OPEN SOURCE' ? '⊕ OPEN SOURCE' : project.status === 'LIVE' ? '● LIVE' : '◎ BUILDING'}
        </span>
      </div>

      <div className="mb-6">
        <h3 className="font-display text-lg font-bold mb-2 uppercase group-hover:text-accent transition-colors">{project.name}</h3>
        <p className="font-display text-[11px] text-fg/60 tracking-wide">{project.tagline}</p>
      </div>

      <p className="text-fg/60 text-sm mb-12 line-clamp-2">{project.description}</p>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.stack.map((s: string) => (
          <span key={s} className="px-2 py-1 bg-fg/5 text-[10px] font-display text-fg/40 hover:text-fg/80 transition-colors">
            {s}
          </span>
        ))}
      </div>

      <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
        <ArrowRight size={20} className="text-accent" />
      </div>
      
      <div className="absolute left-0 top-0 w-[1px] h-0 bg-accent group-hover:h-full transition-all duration-300" />
    </motion.div>
  );
}
