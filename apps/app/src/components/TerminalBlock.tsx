import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function TerminalBlock() {
  const [lines, setLines] = useState<string[]>([]);
  const logs = [
    '> initializing_swarm...',
    '> auth_success: vishal_ojha',
    '> loading_modules: "AI", "Mumbai", "Code"',
    '> npm run build:agents',
    '> [DONE] agent_01: lead_qualified',
    '> [DONE] agent_02: patients_notified',
    '> [DONE] agent_03: ads_optimized',
    '> status: SHIPPING_RELENTLESSLY',
    '> chaos_craft_labs_v1.0.4',
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < logs.length) {
        setLines(prev => [...prev, logs[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#121212] border border-fg/10 rounded-sm p-4 h-[300px] font-display text-xs md:text-sm overflow-hidden relative shadow-2xl">
      <div className="flex gap-1.5 mb-4 opacity-30">
        <div className="w-2 h-2 rounded-full bg-fg" />
        <div className="w-2 h-2 rounded-full bg-fg" />
        <div className="w-2 h-2 rounded-full bg-fg" />
      </div>
      <div className="flex flex-col gap-1.5">
        {lines.map((line, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            className={line?.includes('[DONE]') ? 'text-accent' : 'text-fg/60'}
          >
            {line}
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-2 h-4 bg-accent mt-1"
        />
      </div>
    </div>
  );
}
