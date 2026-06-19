import { NAV_LINKS } from '@/constants/nav-links.constant.ts';
import { scrollTo } from '@/utils/scroll-to.util.ts';
import { Drawer, NavLink, Stack, Text } from '@mantine/core';

interface MobileDrawerProps {
  drawerOpen: boolean;
  close: () => void;
}
export const MobileDrawer = ({ drawerOpen, close }: MobileDrawerProps) => (
  <Drawer
    opened={drawerOpen}
    onClose={close}
    position="right"
    size={220}
    styles={{
      header: { background: '#1C1410', borderBottom: '1px solid #4A3428' },
    }}
    title={<Text style={{ color: '#E8720C', fontFamily: 'monospace', fontWeight: 700 }}>menu</Text>}
  >
    <Stack mt="md">
      {NAV_LINKS.map((l) => (
        <NavLink
          key={l}
          label={l}
          onClick={() => scrollTo(l)}
          styles={{
            label: { color: '#D4B896', fontFamily: 'monospace' },
            root: { borderRadius: 6 },
          }}
        />
      ))}
    </Stack>
  </Drawer>
);
