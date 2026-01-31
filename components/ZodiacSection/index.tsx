'use client';

import { useTranslations } from 'next-intl';
import type { ChineseNewYearDate } from '@/types/countdown';

interface ZodiacSectionProps {
  cnyData: ChineseNewYearDate;
}

export default function ZodiacSection({ cnyData }: ZodiacSectionProps) {
  const t = useTranslations('zodiac');

  // 生肖 emoji 映射
  const zodiacEmojis: Record<string, string> = {
    rat: '🐀',
    ox: '🐂',
    tiger: '🐅',
    rabbit: '🐇',
    dragon: '🐉',
    snake: '🐍',
    horse: '🐴',
    goat: '🐐',
    monkey: '🐵',
    rooster: '🐓',
    dog: '🐕',
    pig: '🐖',
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cny-red/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cny-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/3 text-9xl opacity-5 animate-spin-slow">🎊</div>
        <div className="absolute top-1/3 right-1/4 text-8xl opacity-5 animate-spin-slow" style={{ animationDelay: '2s' }}>🎉</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* 标题区域 */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-4">
                <span className="text-5xl animate-wiggle">🎋</span>
                <h2 className="text-5xl md:text-6xl font-bold gradient-text">
                  {t('title', { year: cnyData.year, animal: t(`${cnyData.zodiac}.name`) })}
                </h2>
                <span className="text-5xl animate-wiggle" style={{ animationDelay: '0.5s' }}>🎋</span>
              </div>
            </div>
            <p className="text-xl text-gray-600 font-medium">
              {t('subtitle', { year: cnyData.year })}
            </p>
          </div>

          {/* 主卡片 */}
          <div className="relative group perspective-1000">
            {/* 外层发光效果 */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cny-red via-cny-gold to-cny-red bg-200% rounded-[2.5rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-gradient-shift"></div>

            {/* 主卡片容器 */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-[1.02] card-3d">
              {/* 顶部装饰条 */}
              <div className="h-3 bg-gradient-to-r from-cny-red via-cny-gold to-cny-red bg-200% animate-gradient-shift"></div>

              {/* 内容区域 */}
              <div className="p-8 md:p-14">
                <div className="flex flex-col md:flex-row items-center gap-10">
                  {/* 生肖图标区域 */}
                  <div className="flex-shrink-0 relative group/icon">
                    {/* 图标背景光晕 */}
                    <div className="absolute -inset-6 bg-gradient-to-br from-cny-red via-cny-gold to-orange-500 rounded-full blur-2xl opacity-40 group-hover/icon:opacity-60 transition-opacity duration-500 animate-pulse-slow"></div>

                    {/* 图标容器 */}
                    <div className="relative w-40 h-40 md:w-52 md:h-52 bg-gradient-to-br from-cny-red via-red-600 to-cny-gold rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover/icon:rotate-12 group-hover/icon:scale-110">
                      {/* 内圈装饰 */}
                      <div className="absolute inset-2 rounded-full border-4 border-white/30 animate-spin-slow"></div>
                      <div className="absolute inset-4 rounded-full border-2 border-white/20"></div>

                      {/* 生肖emoji */}
                      <div className="relative text-9xl md:text-[10rem] animate-bounce-slow filter drop-shadow-2xl">
                        {zodiacEmojis[cnyData.zodiac]}
                      </div>

                      {/* 闪光效果 */}
                      <div className="absolute inset-0 rounded-full overflow-hidden">
                        <div className="absolute inset-0 shimmer-effect"></div>
                      </div>
                    </div>

                    {/* 装饰星星 */}
                    <div className="absolute -top-4 -right-4 text-4xl animate-spin-slow">⭐</div>
                    <div className="absolute -bottom-4 -left-4 text-3xl animate-spin-slow" style={{ animationDelay: '1s' }}>✨</div>
                  </div>

                  {/* 生肖信息区域 */}
                  <div className="flex-1 text-center md:text-left space-y-6">
                    {/* 生肖名称 */}
                    <div className="space-y-2">
                      <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cny-red via-red-600 to-cny-gold bg-clip-text text-transparent animate-gradient-shift bg-200%">
                        {t(`${cnyData.zodiac}.name`)}
                      </h3>
                      <div className="h-1 w-24 bg-gradient-to-r from-cny-red to-cny-gold rounded-full mx-auto md:mx-0"></div>
                    </div>

                    {/* 描述 */}
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                      {t(`${cnyData.zodiac}.description`)}
                    </p>

                    {/* 特征标签 */}
                    <div className="relative inline-block">
                      <div className="absolute -inset-2 bg-gradient-to-r from-cny-red/20 via-cny-gold/20 to-cny-red/20 rounded-2xl blur-lg animate-pulse-slow"></div>
                      <div className="relative px-8 py-4 bg-gradient-to-r from-cny-red/10 via-cny-gold/10 to-orange-500/10 rounded-2xl border-2 border-cny-gold/30 backdrop-blur-sm">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🌟</span>
                          <p className="text-base md:text-lg font-bold text-gray-800">
                            {t(`${cnyData.zodiac}.traits`)}
                          </p>
                          <span className="text-2xl">🌟</span>
                        </div>
                      </div>
                    </div>

                    {/* 装饰性元素 */}
                    <div className="flex justify-center md:justify-start gap-3 text-3xl pt-4">
                      <span className="animate-bounce-slow">🎊</span>
                      <span className="animate-bounce-slow" style={{ animationDelay: '0.2s' }}>🎉</span>
                      <span className="animate-bounce-slow" style={{ animationDelay: '0.4s' }}>🎈</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 底部装饰条 */}
              <div className="h-3 bg-gradient-to-r from-cny-gold via-cny-red to-cny-gold bg-200% animate-gradient-shift"></div>

              {/* 角落装饰 */}
              <div className="absolute top-8 right-8 text-4xl opacity-20 animate-spin-slow">🏮</div>
              <div className="absolute bottom-8 left-8 text-4xl opacity-20 animate-spin-slow" style={{ animationDelay: '1.5s' }}>🏮</div>
            </div>
          </div>

          {/* 底部装饰文字 */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-gray-600 font-medium">
              <span className="text-2xl mr-2">🧧</span>
              {t('blessing', { animal: t(`${cnyData.zodiac}.name`) })}
              <span className="text-2xl ml-2">🧧</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
