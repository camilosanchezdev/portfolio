import { NAV_LINKS } from '@/constants/nav-links.constant.ts';
import { PERSONAL_DATA } from '@/constants/personal-data.constant.ts';
import { scrollTo } from '@/utils/scroll-to.util.ts';
import { Box, Burger, Button, Container, Group } from '@mantine/core';
import { Link } from 'react-router';

interface HeaderProps {
  drawerOpen: boolean;
  open: () => void;
}
export const Header = ({ drawerOpen, open }: HeaderProps) => {
  return (
    <Box
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(28,20,16,0.88)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid #4A3428',
      }}
    >
      <Container size="lg">
        <Group py={14}>
          <button
            className="nav-btn"
            style={{
              fontSize: 16,
              fontWeight: 800,
              color: '#F5E6D3',
              letterSpacing: '-0.3px',
              textTransform: 'none',
              fontFamily: 'monospace',
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span style={{ color: '#E8720C' }}>{'>'} </span>
            {PERSONAL_DATA.name}
          </button>
          <Group style={{ display: 'flex' }}>
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
