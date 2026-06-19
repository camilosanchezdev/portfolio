import type { FeedType } from '@/types/feed.types.ts';

export const FEED_META: Record<FeedType, { label: string; color: string; icon: string }> = {
  project: { label: 'Project', color: '#E8720C', icon: '🚀' },
  blog: { label: 'Blog post', color: '#C9580A', icon: '📝' },
  tutorial: { label: 'Tutorial', color: '#A84108', icon: '🎓' },
};
