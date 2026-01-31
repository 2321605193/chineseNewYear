import { getNextChineseNewYear } from '@/lib/cny-dates';

export default function StructuredData({ locale }: { locale: string }) {
  const cnyData = getNextChineseNewYear();
  const baseUrl = 'https://yourdomain.com';

  // Event Schema - 春节活动
  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: locale === 'zh' ? `${cnyData.year}年中国新年` : `Chinese New Year ${cnyData.year}`,
    description: locale === 'zh'
      ? `${cnyData.year}年中国新年（${cnyData.zodiacNameZh}年）将于${cnyData.date.split('T')[0]}到来。春节是中国最重要的传统节日。`
      : `Chinese New Year ${cnyData.year} (Year of the ${cnyData.zodiacNameEn}) will arrive on ${cnyData.date.split('T')[0]}. It is the most important traditional festival in Chinese culture.`,
    startDate: cnyData.date,
    endDate: new Date(new Date(cnyData.date).getTime() + 15 * 24 * 60 * 60 * 1000).toISOString(),
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: locale === 'zh' ? '全球华人社区' : 'Global Chinese Communities',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CN',
      },
    },
    image: [`${baseUrl}/og-image.jpg`],
    organizer: {
      '@type': 'Organization',
      name: 'Chinese New Year Countdown',
      url: baseUrl,
    },
  };

  // WebSite Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Chinese New Year Countdown',
    alternateName: locale === 'zh' ? '春节倒计时' : 'CNY Countdown',
    url: baseUrl,
    description: locale === 'zh'
      ? '实时倒计时到中国新年，了解春节传统习俗和生肖文化'
      : 'Real-time countdown to Chinese New Year, learn about Spring Festival traditions and zodiac culture',
    inLanguage: [locale === 'zh' ? 'zh-CN' : 'en-US'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: locale === 'zh' ? '首页' : 'Home',
        item: `${baseUrl}/${locale}`,
      },
    ],
  };

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Chinese New Year Countdown',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: [
      'https://twitter.com/chinesenewyear',
      'https://facebook.com/chinesenewyear',
    ],
  };

  // FAQPage Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: locale === 'zh' ? `${cnyData.year}年春节是什么时候？` : `When is Chinese New Year ${cnyData.year}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'zh'
            ? `${cnyData.year}年春节是${cnyData.date.split('T')[0]}，这是${cnyData.zodiacNameZh}年。`
            : `Chinese New Year ${cnyData.year} is on ${cnyData.date.split('T')[0]}, the Year of the ${cnyData.zodiacNameEn}.`,
        },
      },
      {
        '@type': 'Question',
        name: locale === 'zh' ? '春节有哪些传统习俗？' : 'What are the traditional customs of Chinese New Year?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: locale === 'zh'
            ? '春节的传统习俗包括：年夜饭、发红包、放烟花爆竹、大扫除、贴春联、拜年等。'
            : 'Traditional customs include: family reunion dinner, red envelopes (hongbao), fireworks, spring cleaning, posting couplets, and New Year greetings.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
