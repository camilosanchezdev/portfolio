import { PERSONAL_DATA } from '@/constants/personal-data.constant.ts';
import { Box, Text } from '@mantine/core';

export const Footer = () => (
  <Box style={{ borderTop: '1px solid #4A3428', padding: '22px 0', textAlign: 'center' }}>
    <Text style={{ color: '#4A3428', fontSize: 12, fontFamily: 'monospace' }}>
      © {new Date().getFullYear()} {PERSONAL_DATA.name} · built with React & Mantine
    </Text>
  </Box>
);
