import type { FeedItemType } from '@/types/feed-item.types.ts';

export const FEED: FeedItemType[] = [
  {
    type: 'project',
    date: 'Jun 2025',
    title: 'DevBoard — real-time kanban',
    description:
      'Launched v1 of my project management dashboard. Built with Next.js, Socket.io and PostgreSQL. Drag-and-drop boards, team mentions, and live activity feeds.',
    href: '#',
    tags: ['Next.js', 'Socket.io', 'PostgreSQL'],
  },
  {
    type: 'blog',
    date: 'May 2025',
    title: 'Why I stopped using ORMs for complex queries',
    description:
      "After three years of fighting Prisma and TypeORM on reporting queries, I switched to raw SQL with a thin query-builder. Here's what I learned.",
    href: '#',
    tags: ['PostgreSQL', 'Architecture', 'Backend'],
  },
  {
    type: 'tutorial',
    date: 'Apr 2025',
    title: 'Build a type-safe API with tRPC and Next.js',
    description:
      'Step-by-step guide to setting up tRPC in a Next.js 14 app with Zod validation, React Query integration, and a working auth example.',
    href: '#',
    tags: ['tRPC', 'Next.js', 'TypeScript'],
  },
  {
    type: 'project',
    date: 'Mar 2025',
    title: 'Cliché CLI — scaffold projects in one command',
    description:
      'Open-source scaffolding tool that generates production-ready Node/React projects. Hit 2k GitHub stars last month.',
    href: '#',
    tags: ['TypeScript', 'CLI', 'Open Source'],
  },
  {
    type: 'blog',
    date: 'Feb 2025',
    title: 'Lessons from rewriting a monolith into services',
    description:
      "We split a 4-year-old Rails monolith into 6 Node.js services over 8 months. What went well, what didn't, and what I'd do differently.",
    href: '#',
    tags: ['Architecture', 'Node.js', 'DevOps'],
  },
  {
    type: 'tutorial',
    date: 'Jan 2025',
    title: 'Docker multi-stage builds for Node.js',
    description:
      'Cut your production image size by 80% using multi-stage builds. Covers layer caching, non-root users, and health checks.',
    href: '#',
    tags: ['Docker', 'Node.js', 'DevOps'],
  },
];
