import { PERSONAL_DATA } from '@/constants/personal-data.constant.ts';
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
  Alert,
} from '@mantine/core';
import { useForm as useFormMantine } from '@mantine/form';
import { useTranslation } from 'react-i18next';
import { useForm } from '@formspree/react';

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export const Contact = () => {
  const emailKey = import.meta.env.VITE_EMAIL_KEY;
  const [state, handleSubmit] = useForm(emailKey);

  const { t } = useTranslation();

  const form = useFormMantine({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },

    validate: {
      name: (value) =>
        value.trim().length < 2 ? t('contact.error.name') || 'Name is too short' : null,
      email: (value) =>
        /^\S+@\S+\.\S+$/.test(value) ? null : t('contact.error.email') || 'Invalid email',
      message: (value) =>
        value.trim().length < 2 ? t('contact.error.message') || 'Message is too short' : null,
    },
  });

  const handleSubmitCustom = async (values: typeof form.values) => {
    await handleSubmit(values);
    form.reset();
  };
  return (
    <Box component="section" id="contact" style={{ paddingTop: 80, paddingBottom: 100 }}>
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={50}>
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

          <Stack gap="md">
            {state.succeeded && (
              <Alert
                variant="light"
                color="green"
                title={t('contact.form.success.title') || 'Message sent!'}
                icon={<CheckIcon />}
              >
                {t('contact.form.success.description') || 'Thank you for reaching out!'}
              </Alert>
            )}
            <form onSubmit={form.onSubmit(handleSubmitCustom)}>
              <Stack gap="md">
                <TextInput
                  id="name"
                  name="name"
                  label={t('contact.form.name') || 'Name'}
                  required
                  {...form.getInputProps('name')}
                />

                <TextInput
                  id="email"
                  name="email"
                  label={t('contact.form.email') || 'Email'}
                  required
                  {...form.getInputProps('email')}
                />

                <Textarea
                  id="message"
                  name="message"
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
                  loading={state.submitting}
                  disabled={state.submitting}
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
            </form>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
