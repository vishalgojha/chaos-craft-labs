export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: 'LIVE' | 'BUILDING' | 'OPEN SOURCE';
  stack: string[];
  category: 'Real Estate' | 'Healthcare' | 'Developer Tools' | 'Marketing';
  github?: string;
  features: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'propai-sync',
    name: 'PropAI Sync',
    tagline: 'WhatsApp AI for Mumbai real estate brokers',
    description: 'Automating lead qualification and follow-ups for high-volume real estate brokers in Mumbai using multi-agent WhatsApp systems.',
    status: 'LIVE',
    stack: ['ElevenLabs', 'WhatsApp Business API', 'Node.js', 'AI Agents'],
    category: 'Real Estate',
    features: [
      'Automated lead qualification',
      'Instant property brochure delivery',
      'Follow-up orchestration',
      'Multilingual support'
    ]
  },
  {
    id: 'social-flow',
    name: 'Social Flow',
    tagline: 'AI-powered Meta ads management',
    description: 'A developer-first CLI and dashboard for managing Meta ad campaigns through structured AI prompts.',
    status: 'OPEN SOURCE',
    stack: ['Next.js', 'Meta Graph API', 'AI', 'CLI'],
    category: 'Marketing',
    github: 'https://github.com/chaoscraftlabs/social-flow',
    features: [
      'Programmatic ad creation',
      'AI creative optimization',
      'Performance analysis CLI',
      'Budget management agents'
    ]
  },
  {
    id: 'rakshak',
    name: 'Rakshak',
    tagline: 'Post-chemo patient monitoring agent',
    description: 'A critical health monitoring assistant that checks in on post-chemo patients via WhatsApp to catch early signs of distress.',
    status: 'BUILDING',
    stack: ['ElevenLabs', 'WhatsApp', 'Healthcare API', 'AI Agents'],
    category: 'Healthcare',
    features: [
      'Symptom tracking',
      'Emergency escalation',
      'Medication reminders',
      'Patient mood analysis'
    ]
  },
  {
    id: 'archon',
    name: 'Archon',
    tagline: 'Multi-agent orchestration framework',
    description: 'A modular framework for building, testing, and deploying swarms of specialized AI agents that communicate via events.',
    status: 'OPEN SOURCE',
    stack: ['TypeScript', 'AI Agents', 'Orchestration', 'Node.js'],
    category: 'Developer Tools',
    github: 'https://github.com/chaoscraftlabs/archon',
    features: [
      'Event-driven communication',
      'Swarm state management',
      'Plug-and-play agent modules',
      'Local-first development'
    ]
  }
];

export const MANIFESTO = [
  {
    id: '01',
    title: 'Think Before You Prompt',
    content: 'Architecture first. Understand the problem, design the solution, then prompt. AI amplifies your thinking — it doesn\'t replace it.'
  },
  {
    id: '02',
    title: 'Speed Through Iteration',
    content: 'Shipping is the only way to learn. Build the core, break it, fix it, and ship it before it\'s comfortable.'
  },
  {
    id: '03',
    title: 'Stay in Control',
    content: 'AI is a tool, not a pilot. Code should be human-readable, human-auditabel, and human-authoriative.'
  },
  {
    id: '04',
    shipTitle: 'Ship Relentlessly',
    content: 'The world doesn\'t need more complex plans. It needs more functional outcomes. Reduce scope, increase velocity.'
  },
  {
    id: '05',
    title: 'Embrace the Craft',
    content: 'Obsess over the details that matter. Performance, reliability, and human-centric design are not optional.'
  }
];

export const TECH_STACK = [
  'Node.js', 'TypeScript', 'WhatsApp Business API', 'ElevenLabs', 
  'Supabase', 'Next.js', 'Baileys', 'Framer Motion', 
  'Turborepo', 'Hetzner', 'Coolify', 'AI Agents'
];
