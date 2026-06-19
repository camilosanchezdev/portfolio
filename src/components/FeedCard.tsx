import { FEED_META } from '@/constants/feed-meta.constant.ts';
import type { FeedItemType } from '@/types/feed-item.types.ts';
import { Box, Group, Text } from '@mantine/core';

export function FeedCard({ item }: { item: FeedItemType }) {
  const meta = FEED_META[item.type];
  return (
    <Box
      component="a"
      href={item.href}
      style={{
        display: 'block',
        textDecoration: 'none',
        background: '#251A12',
        border: '1px solid #4A3428',
        borderLeft: `3px solid ${meta.color}`,
        borderRadius: 10,
        padding: '20px 22px',
        transition: 'border-color 0.2s, background 0.2s, transform 0.15s',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = '#2E1E13';
        (e.currentTarget as HTMLElement).style.transform = 'translateX(3px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = '#251A12';
        (e.currentTarget as HTMLElement).style.transform = 'translateX(0)';
      }}
    >
      <Group align="flex-start" mb={10}>
        <Group align="center">
          <span style={{ fontSize: 14 }}>{meta.icon}</span>
          <Text
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: meta.color,
              fontFamily: 'monospace',
            }}
          >
            {meta.label}
          </Text>
        </Group>
        <Text style={{ fontSize: 12, color: '#7A6050', fontFamily: 'monospace' }}>{item.date}</Text>
      </Group>

      <Text
        style={{
          fontSize: 16,
          fontWeight: 700,
          color: '#F5E6D3',
          marginBottom: 8,
          lineHeight: 1.35,
        }}
      >
        {item.title}
      </Text>
      <Text style={{ fontSize: 13.5, color: '#A89080', lineHeight: 1.7, marginBottom: 14 }}>
        {item.description}
      </Text>
      <Group>
        {item.tags.map((t) => (
          <span
            key={t}
            style={{
              fontSize: 11,
              fontFamily: 'monospace',
              color: '#A89080',
              background: '#1C1410',
              border: '1px solid #4A3428',
              borderRadius: 4,
              padding: '2px 8px',
            }}
          >
            {t}
          </span>
        ))}
      </Group>
    </Box>
  );
}
