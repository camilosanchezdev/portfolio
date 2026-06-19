import { Contact } from '@/components/Contact.tsx';
import { Footer } from '@/components/Footer.tsx';
import { Header } from '@/components/Header.tsx';
import { HeroBanner } from '@/components/HeroBanner.tsx';
import { MobileDrawer } from '@/components/MobileDrawer.tsx';
import { Skills } from '@/components/Skills.tsx';
import { UpdatesFeed } from '@/components/UpdatesFeed.tsx';
import { Container, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function App() {
  const [drawerOpen, { open, close }] = useDisclosure(false);

  return (
    <>
      <Header open={open} drawerOpen={drawerOpen} />
      <MobileDrawer drawerOpen={drawerOpen} close={close} />

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
}
