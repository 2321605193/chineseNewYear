'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function Header() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('language');

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'zh' : 'en';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect-strong border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo区域 */}
        <div className="flex items-center space-x-3 group">
          <span className="text-3xl animate-wiggle lantern-glow">🏮</span>
          <h1 className="text-2xl font-bold gradient-text-gold text-glow">
            {locale === 'zh' ? '春节倒计时' : 'CNY Countdown'}
          </h1>
          <span className="text-2xl animate-bounce-slow">🎊</span>
        </div>

        {/* 语言切换按钮 */}
        <button
          onClick={toggleLanguage}
          className="relative group/btn px-6 py-3 rounded-full bg-gradient-to-r from-cny-red via-red-600 to-cny-gold text-white font-bold hover:shadow-2xl transition-all duration-300 hover:scale-110 overflow-hidden"
          aria-label={t('switch')}
        >
          {/* 按钮发光效果 */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cny-gold to-cny-red rounded-full blur opacity-50 group-hover/btn:opacity-75 transition-opacity"></div>

          {/* 按钮内容 */}
          <span className="relative flex items-center gap-2">
            <span className="text-lg">🌐</span>
            {t('switch')}
          </span>

          {/* 闪光效果 */}
          <div className="absolute inset-0 shimmer-effect opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
        </button>
      </div>
    </header>
  );
}
