import { Contact } from '@/components/Contact.tsx';
import { Footer } from '@/components/Footer.tsx';
import { Header } from '@/components/Header.tsx';
import { HeroBanner } from '@/components/HeroBanner.tsx';
import { Skills } from '@/components/Skills.tsx';
import { UpdatesFeed } from '@/components/UpdatesFeed.tsx';
import { Container, Divider } from '@mantine/core';

export const HomePage = () => {
  return (
    <>
      <Header />

      <Container size="lg" pt={80}>
        <HeroBanner />
        <Divider color="#4A3428" />
        <UpdatesFeed />
        <Divider color="#4A3428" />
        <Skills />
        <Divider color="#4A3428" />
        <Contact />
        <Footer />
      </Container>
    </>
  );
};
