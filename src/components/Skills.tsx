import { LEVEL_COLOR } from '@/constants/level-color.constant.ts';
import { SKILLS } from '@/constants/skills.constant.ts';
import { Box, SimpleGrid, Stack, Text, Title } from '@mantine/core';

export const Skills = () => {
  return (
    <Box component="section" id="skills" style={{ paddingTop: 80, paddingBottom: 60 }}>
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
            Skills
          </Text>
          <Title
            order={2}
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 800,
              letterSpacing: '-1px',
              color: '#F5E6D3',
            }}
          >
            What I work with
          </Title>
        </Stack>
        <SimpleGrid cols={2} spacing="sm">
          {SKILLS.map((s) => (
            <Box
              key={s.label}
              style={{
                background: '#251A12',
                border: '1px solid #4A3428',
                borderRadius: 8,
                padding: '13px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: 500, color: '#D4B896' }}>{s.label}</Text>
              <span
                style={{
                  fontSize: 11,
                  fontFamily: 'monospace',
                  fontWeight: 600,
                  color: LEVEL_COLOR[s.level],
                  letterSpacing: '0.06em',
                }}
              >
                {s.level}
              </span>
            </Box>
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
};
