import { BlinkingCursor } from '@/components/BlinkingCursor.tsx';
import { PERSONAL_DATA } from '@/constants/personal-data.constant.ts';
import { scrollTo } from '@/utils/scroll-to.util.ts';
import { Box, Button, Group, Stack, Text, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export const HeroBanner = () => {
  const { t } = useTranslation();
  return (
    <Box component="section" style={{ paddingTop: 100, paddingBottom: 72 }}>
      <Stack>
        <Text
          style={{
            fontFamily: 'monospace',
            fontSize: 13,
            color: '#E8720C',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}
        >
          {t('hero-banner.hint-text')}
        </Text>
        <Title
          order={1}
          className="text-primary"
          style={{
            fontSize: 'clamp(40px, 7vw, 76px)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-2.5px',
          }}
        >
          {PERSONAL_DATA.name}
          <BlinkingCursor />
        </Title>
        <Text
          className="text-secondary"
          style={{
            marginTop: 6,
            fontSize: 'clamp(15px, 2.2vw, 19px)',
            maxWidth: 520,
            lineHeight: 1.75,
          }}
        >
          {t('hero-banner.subtitle')}
        </Text>
        <Group mt={36}>
          <Button
            size="md"
            radius="sm"
            style={{ background: '#E8720C', color: '#1C1410', fontWeight: 700 }}
            onClick={() => scrollTo('Updates')}
          >
            {t('hero-banner.primary-button')}
          </Button>

          <Button
            size="md"
            radius="sm"
            variant="subtle"
            className="text-secondary"
            onClick={() => scrollTo('contact')}
          >
            {t('hero-banner.secondary-button')} →
          </Button>
        </Group>
      </Stack>
    </Box>
  );
};
