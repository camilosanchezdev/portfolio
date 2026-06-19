import { FeedCard } from '@/components/FeedCard.tsx';
import { FEED_META } from '@/constants/feed-meta.constant.ts';
import { FEED } from '@/constants/feed.constant.ts';
import type { FeedType } from '@/types/feed.types.ts';
import { Box, Group, Stack, Text, Title } from '@mantine/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const UpdatesFeed = () => {
  const { t } = useTranslation();
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
            {t('updates-feed.hint-text')}
          </Text>
          <Title
            order={2}
            className="text-primary"
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 800,
              letterSpacing: '-1px',
            }}
          >
            {t('updates-feed.title')}
          </Title>
          <Text className="text-secondary" style={{ fontSize: 14, marginTop: 4 }}>
            {t('updates-feed.description')}
          </Text>
        </Stack>

        {/* Filter bar */}
        <Group>
          {(['all', 'project', 'blog', 'tutorial'] as const).map((f) => (
            <button
              key={f}
              className={`bg-secondary text-secondary filter-btn${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all'
                ? t('updates-feed.filters.all')
                : FEED_META[f].icon + ' ' + t(FEED_META[f].label)}
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
