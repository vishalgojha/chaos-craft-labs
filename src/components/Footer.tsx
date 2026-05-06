import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-24 pb-12 px-6 md:px-12 lg:px-24">
      <div className="w-full h-[1px] bg-accent/20 mb-12" />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-2">
          <p className="font-display text-sm tracking-tight text-fg/60">
            Chaos Craft Labs © 2025
          </p>
          <p className="font-display text-xs text-secondary/60">
            // Built with AI. Controlled by humans.
          </p>
        </div>

        <div className="flex gap-8 items-center">
          <a 
            href="https://twitter.com/vishalgojha" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-fg/60 hover:text-accent transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a 
            href="https://github.com/chaoscraftlabs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-fg/60 hover:text-accent transition-colors"
          >
            <Github size={20} />
          </a>
          <a 
            href="mailto:hello@chaoscraftlabs.com" 
            className="text-fg/60 hover:text-accent transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
