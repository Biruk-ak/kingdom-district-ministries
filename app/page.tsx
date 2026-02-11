import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { WhoWeAre } from '@/components/WhoWeAre';
import { FocusAreas } from '@/components/FocusAreas';
import { Mission } from '@/components/Mission';
import { GlobalImpact } from '@/components/GlobalImpact';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <FocusAreas />
      <Mission />
      <GlobalImpact />
    </main>
  );
}
