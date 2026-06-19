import { PERSONAL_DATA } from '@/constants/personal-data.constant.ts';
import { Anchor, Box, Button, Group, Stack, Text, Title } from '@mantine/core';
import { Link } from 'react-router';

export const Contact = () => {
  return (
    <Box component="section" id="contact" style={{ paddingTop: 80, paddingBottom: 100 }}>
      <Stack align="center" style={{ textAlign: 'center' }}>
        <Text
          style={{
            fontFamily: 'monospace',
            fontSize: 11,
            color: '#E8720C',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          Contact
        </Text>
        <Title
          order={2}
          className="text-primary"
          style={{
            fontSize: 'clamp(26px, 5vw, 52px)',
            fontWeight: 800,
            letterSpacing: '-1.5px',
            maxWidth: 520,
          }}
        >
          Let's build something together
        </Title>
        <Text className="text-secondary" style={{ maxWidth: 400, lineHeight: 1.8, fontSize: 15 }}>
          Open to freelance projects, full-time roles, and interesting collaborations. I reply
          within a day.
        </Text>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <Button
            component="a"
            href={`mailto:${PERSONAL_DATA.email}`}
            size="lg"
            radius="sm"
            mt={8}
            style={{
              background: '#E8720C',
              color: '#1C1410',
              fontWeight: 700,
              letterSpacing: '0.02em',
            }}
          >
            Say hello →
          </Button>
        </Link>
        <Group mt={20}>
          {PERSONAL_DATA.links.map((l) => (
            <Anchor
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#7A6050',
                fontSize: 13,
                textDecoration: 'none',
                transition: 'color 0.2s',
                fontFamily: 'monospace',
              }}
            >
              {l.label}
            </Anchor>
          ))}
        </Group>
      </Stack>
    </Box>
  );
};
