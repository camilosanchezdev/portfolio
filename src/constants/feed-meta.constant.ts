import type { FeedType } from '@/types/feed.types.ts';

export const FEED_META: Record<FeedType, { label: string; color: string; icon: string }> = {
  project: { label: 'updates-feed.filters.projects', color: '#E8720C', icon: '🚀' },
  blog: { label: 'updates-feed.filters.blog-posts', color: '#C9580A', icon: '📝' },
  tutorial: { label: 'updates-feed.filters.tutorials', color: '#A84108', icon: '🎓' },
};
