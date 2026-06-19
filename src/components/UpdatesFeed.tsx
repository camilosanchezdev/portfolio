import { FeedCard } from '@/components/FeedCard.tsx';
import { FEED_META } from '@/constants/feed-meta.constant.ts';
import { FEED } from '@/constants/feed.constant.ts';
import type { FeedType } from '@/types/feed.types.ts';
import type { FeedItemType } from '@/types/feed-item.types.ts';
// 1. Import Modal and Button components from Mantine core
import { Box, Group, Stack, Text, Title, Modal, Button } from '@mantine/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ITEMS_PER_PAGE = 3; // Change this to whatever layout size you want

export const UpdatesFeed = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<FeedType | 'all'>('all');

  // 2. States for Pagination & Active Modal Content
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState<FeedItemType | null>(null);

  // Filter first
  const filtered = filter === 'all' ? FEED : FEED.filter((f) => f.type === filter);

  // 3. Compute Pagination Slices
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Reset page safely if active filter drops item count below current page boundary
  const safeItems = paginatedItems.length > 0 ? paginatedItems : filtered.slice(0, ITEMS_PER_PAGE);

  const handleFilterChange = (newFilter: FeedType | 'all') => {
    setFilter(newFilter);
    setCurrentPage(1); // Crucial: Go back to page 1 when switching tabs
  };

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
              onClick={() => handleFilterChange(f)}
            >
              {f === 'all'
                ? t('updates-feed.filters.all')
                : FEED_META[f].icon + ' ' + t(FEED_META[f].label)}
            </button>
          ))}
        </Group>

        {/* Feed Listing */}
        <Stack>
          {safeItems.map((item, i) => (
            <FeedCard
              key={i}
              item={item}
              onClick={() => setSelectedItem(item)} // Open modal on click
            />
          ))}
        </Stack>

        {/* 4. Pagination Navigation Controls */}
        {totalPages > 1 && (
          <Group justify="space-between" mt="md">
            <Button
              variant="default"
              size="sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              ← {t('pagination.previous') || 'Previous'}
            </Button>

            <Text size="sm" style={{ fontFamily: 'monospace' }}>
              {currentPage} / {totalPages}
            </Text>

            <Button
              variant="default"
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            >
              {t('pagination.next') || 'Next'} →
            </Button>
          </Group>
        )}
      </Stack>

      {/* 5. Detail Modal View */}
      <Modal
        opened={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        title={
          selectedItem
            ? `${FEED_META[selectedItem.type].icon} ${t(FEED_META[selectedItem.type].label)}`
            : ''
        }
        centered
        className="bg-primary"
        size="90%"
        styles={{
          header: { borderBottom: '1px solid #4A3428' },
          content: { border: '1px solid #4A3428', borderRadius: '12px', minHeight: '50vh' },
        }}
      >
        {selectedItem && (
          <Stack gap="md" pt="md">
            <Text size="xs" style={{ color: '#7A6050', fontFamily: 'monospace' }}>
              {selectedItem.date}
            </Text>
            <Title order={3} className="text-primary" style={{ lineHeight: 1.3 }}>
              {selectedItem.title}
            </Title>
            <Text size="sm" className="text-secondary" style={{ lineHeight: 1.6 }}>
              {selectedItem.description}
            </Text>
            <Group gap="xs" mt="xs">
              {selectedItem.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-secondary text-secondary"
                  style={{
                    fontSize: 11,
                    fontFamily: 'monospace',
                    border: '1px solid #4A3428',
                    borderRadius: 4,
                    padding: '2px 8px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </Group>
          </Stack>
        )}
      </Modal>
    </Box>
  );
};
