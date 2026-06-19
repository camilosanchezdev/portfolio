import { FeedCard } from '@/components/FeedCard.tsx';
import { FEED_META } from '@/constants/feed-meta.constant.ts';
import { FEED } from '@/constants/feed.constant.ts';
import type { FeedType } from '@/types/feed.types.ts';
import { Box, Group, Stack, Text, Title } from '@mantine/core';
import { useState } from 'react';

export const UpdatesFeed = () => {
  const [filter, setFilter] = useState<FeedType | 'all'>('all');

  const filtered = filter === 'all' ? FEED : FEED.filter((f) => f.type === filter);
  return (
    <Box component="section" id="updates" style={{ paddingTop: 80, paddingBottom: 60 }}>
      <Stack>
        <Stack>
          <Text
            style={{
              fontFamily: 'monospace',
              fontSize: 11,
              color: '#E8720C',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            Latest updates
          </Text>
          <Title
            order={2}
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 800,
              letterSpacing: '-1px',
              color: '#F5E6D3',
            }}
          >
            What I've been working on
          </Title>
          <Text style={{ color: '#7A6050', fontSize: 14, marginTop: 4 }}>
            Projects, blog posts, and tutorials — newest first.
          </Text>
        </Stack>

        {/* Filter bar */}
        <Group>
          {(['all', 'project', 'blog', 'tutorial'] as const).map((f) => (
            <button
              key={f}
              className={`filter-btn${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All' : FEED_META[f].icon + ' ' + FEED_META[f].label}
            </button>
          ))}
        </Group>

        {/* Feed */}
        <Stack>
          {filtered.map((item, i) => (
            <FeedCard key={i} item={item} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};
