import router from '@/Router.tsx';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

const theme = {
  colorScheme: 'dark' as const,
  primaryColor: 'orange',
  fontFamily: "'Inter', 'Segoe UI', sans-serif",
  headings: { fontFamily: "'Inter', 'Segoe UI', sans-serif" },
  colors: {},
};

createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme} defaultColorScheme="light">
    <RouterProvider router={router} />
  </MantineProvider>,
);
