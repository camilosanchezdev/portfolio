import { PERSONAL_DATA } from '@/constants/personal-data.constant.ts';
// 1. Import necessary components and useForm hook
import {
  Anchor,
  Box,
  Button,
  Group,
  Stack,
  Text,
  Title,
  TextInput,
  Textarea,
  Container,
  SimpleGrid,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();

  // 2. Initialize the form controller
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },

    // Optional validation logic
    validate: {
      name: (value) =>
        value.trim().length < 2 ? t('contact.error.name') || 'Name is too short' : null,
      email: (value) =>
        /^\S+@\S+\.\S+$/.test(value) ? null : t('contact.error.email') || 'Invalid email',
      message: (value) =>
        value.trim().length < 10 ? t('contact.error.message') || 'Message is too short' : null,
    },
  });

  // 3. Handle submission logic (replace with your API endpoint later)
  const handleSubmit = (values: typeof form.values) => {
    console.log('Form data submitted:', values);
    // e.g., fetch('/api/contact', { method: 'POST', body: JSON.stringify(values) })
    form.reset();
  };

  return (
    <Box component="section" id="contact" style={{ paddingTop: 80, paddingBottom: 100 }}>
      <Container size="lg">
        {/* SimpleGrid automatically handles stacking on mobile viewports */}
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={50}>
          {/* Left Side: Copy and Links */}
          <Stack align="flex-start" style={{ textAlign: 'left' }}>
            <Text
              style={{
                fontFamily: 'monospace',
                fontSize: 11,
                color: '#E8720C',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              {t('contact.hint-text')}
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
              {t('contact.title')}
            </Title>
            <Text
              className="text-secondary"
              style={{ maxWidth: 400, lineHeight: 1.8, fontSize: 15 }}
            >
              {t('contact.description')}
            </Text>

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

          {/* Right Side: The Interactive Contact Form */}
          <Box component="form" onSubmit={form.onSubmit(handleSubmit)}>
            <Stack gap="md">
              <TextInput
                label={t('contact.form.name') || 'Name'}
                required
                {...form.getInputProps('name')}
              />

              <TextInput
                label={t('contact.form.email') || 'Email'}
                required
                {...form.getInputProps('email')}
              />

              <Textarea
                label={t('contact.form.message') || 'Message'}
                minRows={4}
                required
                {...form.getInputProps('message')}
              />

              <Button
                type="submit"
                size="md"
                radius="sm"
                mt={8}
                style={{
                  background: '#E8720C',
                  color: '#1C1410',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  alignSelf: 'flex-start',
                }}
              >
                {t('contact.form.button')} →
              </Button>
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
