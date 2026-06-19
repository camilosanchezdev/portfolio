import { NAV_LINKS } from '@/constants/nav-links.constant.ts';
import { PERSONAL_DATA } from '@/constants/personal-data.constant.ts';
import { scrollTo } from '@/utils/scroll-to.util.ts';
import { ActionIcon, Box, Button, Container, Group, useMantineColorScheme } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const nextLanguage = i18n.resolvedLanguage === 'en' ? 'es' : 'en';
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <Box
      className="bg-primary"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid #4A3428',
      }}
    >
      <Container size="lg">
        <Group py={14} justify="space-between" wrap="nowrap">
          <button
            className="nav-btn text-primary"
            style={{
              fontSize: 16,
              fontWeight: 800,
              letterSpacing: '-0.3px',
              textTransform: 'none',
              fontFamily: 'monospace',
              whiteSpace: 'nowrap',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span style={{ color: '#E8720C' }}>{'>'} </span>
            {PERSONAL_DATA.name}
          </button>

          <Group gap={20} visibleFrom="sm">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                className="nav-btn text-secondary"
                onClick={() => scrollTo(l.id)}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
              >
                {t(l.key)}
              </button>
            ))}
            <Button
              size="xs"
              radius="sm"
              variant="outline"
              style={{
                borderColor: '#E8720C',
                color: '#E8720C',
                fontSize: 12,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
              onClick={() => scrollTo('contact')}
            >
              {t('header.nav-links.contact')}
            </Button>
          </Group>

          <Group gap={10} wrap="nowrap">
            <ActionIcon
              onClick={toggleLanguage}
              variant="outline"
              size="lg"
              style={{ borderColor: '#b08b69', color: '#E8720C' }}
            >
              {i18n.resolvedLanguage === 'en' ? '🇪🇸' : '🇺🇸'}
            </ActionIcon>

            <ActionIcon
              onClick={() => toggleColorScheme()}
              variant="outline"
              size="lg"
              aria-label="Toggle color scheme"
              style={{ borderColor: '#b08b69', color: '#E8720C' }}
            >
              {isDark ? '☀️' : '🌙'}
            </ActionIcon>
          </Group>
        </Group>
      </Container>
    </Box>
  );
};
