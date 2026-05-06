import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Twitter, Mail, ArrowRight, Check } from 'lucide-react';

export default function Contact() {
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setIsSent(true);
  };

  return (
    <div className="pt-12 md:pt-24 mb-24 max-w-4xl">
      <header className="mb-16 flex flex-col gap-6">
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-display text-accent text-sm tracking-[0.4em] font-medium"
        >
          &gt; CONNECT.req
        </motion.p>
        <h1 className="font-display text-5xl md:text-8xl font-bold tracking-tighter leading-none uppercase">
          Let's build <br /> something.
        </h1>
        <p className="text-fg/60 max-w-xl text-lg mt-4">
          Reach out on Twitter or email. I respond fast. Based in Mumbai, working globally.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <p className="font-display text-[10px] tracking-widest text-fg/30 uppercase font-bold">DIRECT_CHANNELS</p>
            <div className="flex flex-col gap-4">
              <a 
                href="https://twitter.com/vishalgojha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 border border-fg/10 hover:border-accent hover:bg-accent/5 transition-all"
              >
                <div className="flex items-center gap-4">
                  <Twitter className="text-accent" />
                  <div>
                    <p className="font-display text-sm font-bold">Twitter</p>
                    <p className="text-xs text-fg/40">@vishalgojha</p>
                  </div>
                </div>
                <ArrowRight size={18} className="text-fg/20 group-hover:text-accent group-hover:translate-x-2 transition-all" />
              </a>

              <a 
                href="mailto:hello@chaoscraftlabs.com" 
                className="group flex items-center justify-between p-6 border border-fg/10 hover:border-accent hover:bg-accent/5 transition-all"
              >
                <div className="flex items-center gap-4">
                  <Mail className="text-accent" />
                  <div>
                    <p className="font-display text-sm font-bold">Email</p>
                    <p className="text-xs text-fg/40">hello@chaoscraftlabs.com</p>
                  </div>
                </div>
                <ArrowRight size={18} className="text-fg/20 group-hover:text-accent group-hover:translate-x-2 transition-all" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
           <p className="font-display text-[10px] tracking-widest text-fg/30 uppercase font-bold">QUICK_INPUT</p>
           <div className="bg-[#121212] border border-fg/10 p-8 shadow-2xl relative overflow-hidden">
             {isSent ? (
               <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 gap-4 text-center"
               >
                 <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent">
                   <Check size={24} />
                 </div>
                 <div>
                   <p className="font-display text-accent uppercase tracking-widest text-sm">Message received</p>
                   <p className="text-xs text-fg/40 mt-2">Check the logs for response.</p>
                 </div>
                 <button 
                  onClick={() => setIsSent(false)}
                  className="mt-6 font-display text-[10px] text-fg/40 hover:text-fg transition-colors uppercase tracking-[0.2em]"
                 >
                   [ SEND_ANOTHER ]
                 </button>
               </motion.div>
             ) : (
               <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                 <div className="flex flex-col gap-2">
                   <label className="font-display text-[10px] text-fg/40 uppercase">/message_payload</label>
                   <textarea 
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setIsTyping(true);
                    }}
                    onBlur={() => setIsTyping(false)}
                    placeholder="Enter your query..."
                    className="bg-transparent border-b border-fg/10 focus:border-accent outline-none py-4 text-lg font-display placeholder:text-fg/10 resize-none h-32 transition-colors"
                   />
                 </div>
                 <button 
                  type="submit"
                  disabled={!message.trim()}
                  className="w-full bg-accent text-bg py-4 font-display font-bold uppercase tracking-widest text-sm hover:translate-y-[2px] transition-all disabled:opacity-30 disabled:pointer-events-none"
                 >
                   Execute Send_Action
                 </button>
                 <div className="flex items-center justify-between opacity-30">
                    <span className="font-display text-[9px]">ENCRYPTED: SHA-256</span>
                    <span className="font-display text-[9px]">V: 1.0.4</span>
                 </div>
               </form>
             )}
             
             {isTyping && !isSent && (
               <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute top-4 right-8 flex items-center gap-2"
               >
                 <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                 <span className="font-display text-[8px] text-accent font-bold tracking-widest uppercase">Typing...</span>
               </motion.div>
             )}
           </div>
        </div>
      </div>
    </div>
  );
}
