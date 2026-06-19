import { NAV_LINKS } from '@/constants/nav-links.constant.ts';
import { PERSONAL_DATA } from '@/constants/personal-data.constant.ts';
import { scrollTo } from '@/utils/scroll-to.util.ts';
import {
  ActionIcon,
  Box,
  Burger,
  Button,
  Container,
  Group,
  useMantineColorScheme,
} from '@mantine/core';
import { Link } from 'react-router';

interface HeaderProps {
  drawerOpen: boolean;
  open: () => void;
}
export const Header = ({ drawerOpen, open }: HeaderProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
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
        <Group py={14}>
          <Group style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Box style={{ display: 'flex', gap: 20 }}>
              <button
                className="nav-btn text-primary"
                style={{
                  fontSize: 16,
                  fontWeight: 800,
                  letterSpacing: '-0.3px',
                  textTransform: 'none',
                  fontFamily: 'monospace',
                }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <span style={{ color: '#E8720C' }}>{'>'} </span>
                {PERSONAL_DATA.name}
              </button>
              {NAV_LINKS.map((l) => (
                <button key={l} className="nav-btn" onClick={() => scrollTo(l)}>
                  {l}
                </button>
              ))}
              <Link to="/contact" style={{ textDecoration: 'none' }}>
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
                >
                  Hire me
                </Button>
              </Link>
            </Box>

            <ActionIcon
              onClick={() => toggleColorScheme()}
              variant="outline"
              size="lg"
              aria-label="Toggle color scheme"
              style={{ borderColor: '#E8720C', color: '#E8720C', marginLeft: 'auto 0' }}
            >
              {isDark ? '☀️' : '🌙'}
            </ActionIcon>
          </Group>
          <Burger
            opened={drawerOpen}
            onClick={open}
            color="#F5E6D3"
            size="sm"
            style={{ display: 'none' }}
          />
        </Group>
      </Container>
    </Box>
  );
};
