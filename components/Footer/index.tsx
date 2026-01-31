'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-cny-red via-red-700 to-cny-red-dark text-white py-16 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-10 left-10 w-48 h-48 bg-cny-gold/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-cny-gold/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-10 animate-spin-slow">🎊</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* 装饰图标 */}
          <div className="mb-8">
            <div className="flex justify-center items-center space-x-4 mb-6">
              <span className="text-5xl animate-wiggle lantern-glow">🏮</span>
              <span className="text-5xl animate-bounce-slow lantern-glow" style={{ animationDelay: '0.3s' }}>🧧</span>
              <span className="text-5xl animate-wiggle lantern-glow" style={{ animationDelay: '0.6s' }}>🎆</span>
            </div>

            {/* 祝福语 */}
            <div className="mb-6 space-y-3">
              <p className="text-2xl md:text-3xl font-bold gradient-text-gold text-glow">
                {t('greeting')}
              </p>
              <p className="text-lg md:text-xl text-white/90 font-medium">
                {t('madeWith')}
              </p>
            </div>

            {/* 装饰性分隔线 */}
            <div className="flex items-center justify-center gap-4 my-8">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-cny-gold to-transparent"></div>
              <span className="text-3xl animate-spin-slow">✨</span>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-cny-gold to-transparent"></div>
            </div>
          </div>

          {/* 版权信息 */}
          <div className="glass-effect-strong rounded-2xl p-6 backdrop-blur-xl">
            <p className="text-sm md:text-base text-white/90 font-medium">
              {t('copyright', { year: currentYear.toString() })}
            </p>
            <div className="mt-4 flex justify-center gap-3 text-2xl">
              <span className="animate-pulse-slow">🎉</span>
              <span className="animate-pulse-slow" style={{ animationDelay: '0.5s' }}>🎊</span>
              <span className="animate-pulse-slow" style={{ animationDelay: '1s' }}>🎈</span>
            </div>
          </div>

          {/* 底部装饰 */}
          <div className="mt-8 flex justify-center gap-2 text-xl opacity-60">
            <span className="animate-bounce-slow">🌟</span>
            <span className="animate-bounce-slow" style={{ animationDelay: '0.2s' }}>🌟</span>
            <span className="animate-bounce-slow" style={{ animationDelay: '0.4s' }}>🌟</span>
          </div>
        </div>
      </div>

      {/* 顶部波浪装饰 */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/10 to-transparent"></div>
    </footer>
  );
}
