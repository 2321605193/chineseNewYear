import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ZodiacSection from '@/components/ZodiacSection';
import CultureSection from '@/components/CultureSection';
import Footer from '@/components/Footer';
import { getNextChineseNewYear } from '@/lib/cny-dates';
import { setRequestLocale } from 'next-intl/server';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const cnyData = getNextChineseNewYear();
  const targetDate = new Date(cnyData.date);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero targetDate={targetDate} year={cnyData.year} />
        <article>
          <ZodiacSection cnyData={cnyData} />
          <CultureSection />
        </article>
      </main>
      <Footer />
    </>
  );
}
