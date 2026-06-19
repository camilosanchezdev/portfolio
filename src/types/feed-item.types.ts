import type { FeedType } from '@/types/feed.types.ts';

export interface FeedItemType {
  type: FeedType;
  date: string; // display string, e.g. "Jun 2025"
  title: string;
  description: string;
  href: string;
  tags: string[];
}
