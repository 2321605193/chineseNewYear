'use client';

import { useTranslations } from 'next-intl';
import CountdownTimer from '@/components/CountdownTimer';

interface HeroProps {
  targetDate: Date;
  year: number;
}

export default function Hero({ targetDate, year }: HeroProps) {
  const t = useTranslations('hero');

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-cny-red via-red-700 to-cny-red-dark pt-20">
      {/* 动态背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 主要光晕效果 */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-cny-gold/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cny-gold/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-yellow-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-orange-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>

        {/* 中心大光晕 */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>

        {/* 装饰性灯笼 */}
        <div className="absolute top-10 left-1/4 text-6xl animate-float lantern-glow" style={{ animationDelay: '0.5s' }}>
          🏮
        </div>
        <div className="absolute top-20 right-1/4 text-5xl animate-float lantern-glow" style={{ animationDelay: '1.5s' }}>
          🏮
        </div>
        <div className="absolute bottom-32 left-1/3 text-4xl animate-float lantern-glow" style={{ animationDelay: '2s' }}>
          🏮
        </div>

        {/* 烟花效果 */}
        <div className="absolute top-1/4 right-1/3 text-4xl animate-pulse-slow">✨</div>
        <div className="absolute top-1/3 left-1/3 text-3xl animate-pulse-slow" style={{ animationDelay: '0.7s' }}>✨</div>
        <div className="absolute bottom-1/4 right-1/4 text-3xl animate-pulse-slow" style={{ animationDelay: '1.2s' }}>✨</div>

        {/* 祥云装饰 */}
        <div className="absolute top-40 right-20 text-5xl opacity-30 animate-float" style={{ animationDelay: '0.3s' }}>☁️</div>
        <div className="absolute bottom-40 left-20 text-4xl opacity-30 animate-float" style={{ animationDelay: '1.8s' }}>☁️</div>
      </div>

      {/* 主要内容 */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          {/* 红包图标 */}
          <div className="inline-block mb-6 animate-bounce-slow">
            <div className="relative">
              <span className="text-8xl md:text-9xl drop-shadow-2xl filter lantern-glow">🧧</span>
              <div className="absolute inset-0 animate-ping opacity-20">
                <span className="text-8xl md:text-9xl">🧧</span>
              </div>
            </div>
          </div>

          {/* 标题 */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 animate-slide-down text-glow-strong">
            {t('title')}
          </h1>

          {/* 副标题 */}
          <div className="relative inline-block">
            <p className="text-3xl md:text-5xl lg:text-6xl gradient-text-gold font-bold animate-slide-up px-8 py-4 rounded-2xl glass-effect-strong">
              {t('subtitle', { year: year.toString() })}
            </p>
            <div className="absolute -inset-1 bg-gradient-to-r from-cny-gold via-yellow-400 to-cny-gold rounded-2xl blur opacity-30 animate-pulse-slow"></div>
          </div>

          {/* 装饰性文字 */}
          <div className="mt-8 flex justify-center gap-4 text-2xl md:text-3xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <span className="animate-wiggle" style={{ animationDelay: '0s' }}>🎊</span>
            <span className="text-cny-gold font-semibold text-glow">
              {t('blessing')}
            </span>
            <span className="animate-wiggle" style={{ animationDelay: '0.5s' }}>🎊</span>
          </div>
        </div>

        {/* 倒计时组件 */}
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <CountdownTimer targetDate={targetDate} />
        </div>
      </div>

      {/* 底部装饰波浪 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent"></div>
    </section>
  );
}
