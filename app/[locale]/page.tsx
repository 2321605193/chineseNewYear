import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ZodiacSection from '@/components/ZodiacSection';
import CultureSection from '@/components/CultureSection';
import Footer from '@/components/Footer';
import { getNextChineseNewYear } from '@/lib/cny-dates';

export default function HomePage() {
  const cnyData = getNextChineseNewYear();
  const targetDate = new Date(cnyData.date);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero targetDate={targetDate} year={cnyData.year} />
      <ZodiacSection cnyData={cnyData} />
      <CultureSection />
      <Footer />
    </main>
  );
}
