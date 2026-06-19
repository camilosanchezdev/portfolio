import { MainLayout } from '@/layout/MainLayout.tsx';
import { ContactPage } from '@/pages/ContactPage.tsx';
import { HomePage } from '@/pages/HomePage.tsx';
import { createBrowserRouter, type RouteObject } from 'react-router';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },

      {
        path: '*',
        element: <div>404 Not Found</div>,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
