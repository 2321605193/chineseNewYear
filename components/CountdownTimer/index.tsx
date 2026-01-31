'use client';

import { useCountdown } from '@/hooks/useCountdown';
import { padZero } from '@/lib/countdown';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const countdown = useCountdown(targetDate);
  const t = useTranslations('countdown');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white text-glow animate-pulse-slow">
          {t('title')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {['00', '00', '00', '00'].map((value, index) => (
            <div
              key={index}
              className="relative glass-effect-strong rounded-3xl p-6 md:p-10 text-center"
            >
              <div className="text-6xl md:text-8xl font-bold gradient-text-gold text-glow-strong">
                {value}
              </div>
              <div className="text-base md:text-xl text-white/90 font-bold uppercase tracking-widest mt-3">
                {index === 0
                  ? t('days')
                  : index === 1
                    ? t('hours')
                    : index === 2
                      ? t('minutes')
                      : t('seconds')}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (countdown.isExpired) {
    return (
      <div className="text-center py-12">
        <div className="relative inline-block">
          <h2 className="text-6xl md:text-8xl font-bold gradient-text-gold animate-scale-pulse text-glow-strong">
            {t('expired')}
          </h2>
          <div className="absolute inset-0 animate-ping opacity-20">
            <h2 className="text-6xl md:text-8xl font-bold gradient-text-gold">
              {t('expired')}
            </h2>
          </div>
        </div>
        <div className="mt-8 text-4xl animate-bounce-slow">
          🎉🎊🎆
        </div>
      </div>
    );
  }

  const timeUnits = [
    { value: countdown.days, label: t('days'), icon: '📅', color: 'from-red-500 to-pink-500' },
    { value: countdown.hours, label: t('hours'), icon: '⏰', color: 'from-orange-500 to-yellow-500' },
    { value: countdown.minutes, label: t('minutes'), icon: '⏱️', color: 'from-yellow-500 to-amber-500' },
    { value: countdown.seconds, label: t('seconds'), icon: '⚡', color: 'from-amber-500 to-orange-500' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* 标题 */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white text-glow animate-pulse-slow">
        {t('title')}
      </h2>

      {/* 倒计时卡片 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 perspective-1000">
        {timeUnits.map((unit, index) => (
          <div
            key={unit.label}
            className="relative group animate-fade-in"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* 外层ping动画效果（类似红包） */}
            <div className={`absolute -inset-2 bg-gradient-to-r ${unit.color} rounded-3xl blur-xl opacity-30 animate-ping`} style={{ animationDuration: '2s' }}></div>

            {/* 发光背景 */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${unit.color} rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse-slow`}></div>

            {/* 主卡片 */}
            <div className="relative glass-effect-strong rounded-3xl p-6 md:p-10 text-center transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 card-3d">
              {/* 图标容器 - 添加旋转和缩放动画 */}
              <div className="relative mb-3">
                <div className="text-3xl md:text-4xl animate-bounce-slow" style={{ animationDelay: `${index * 0.2}s` }}>
                  {unit.icon}
                </div>
                {/* 图标ping效果 */}
                <div className="absolute inset-0 text-3xl md:text-4xl animate-ping opacity-20" style={{ animationDelay: `${index * 0.2}s` }}>
                  {unit.icon}
                </div>
              </div>

              {/* 数字容器 - 增强动效 */}
              <div className="relative mb-3">
                {/* 主数字 */}
                <div className="relative">
                  <div className="text-6xl md:text-8xl font-bold gradient-text-gold text-glow-strong animate-scale-pulse">
                    {padZero(unit.value)}
                  </div>

                  {/* 数字外层ping效果 */}
                  <div className="absolute inset-0 text-6xl md:text-8xl font-bold gradient-text-gold opacity-10 animate-ping" style={{ animationDuration: '1.5s' }}>
                    {padZero(unit.value)}
                  </div>

                  {/* 数字反射效果 */}
                  <div className="absolute inset-0 text-6xl md:text-8xl font-bold gradient-text-gold opacity-20 blur-sm">
                    {padZero(unit.value)}
                  </div>
                </div>
              </div>

              {/* 标签 */}
              <div className="text-base md:text-xl text-white/90 font-bold uppercase tracking-widest">
                {unit.label}
              </div>

              {/* 装饰性边框动画 */}
              <div className="absolute inset-0 rounded-3xl border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300"></div>

              {/* 闪光效果 */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* 四角装饰星星 */}
              <div className="absolute -top-2 -right-2 text-xl animate-spin-slow opacity-60 group-hover:opacity-100 transition-opacity">
                ✨
              </div>
              <div className="absolute -bottom-2 -left-2 text-xl animate-spin-slow opacity-60 group-hover:opacity-100 transition-opacity" style={{ animationDelay: '1s' }}>
                ⭐
              </div>
            </div>

            {/* 底部装饰阴影 */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full blur-sm"></div>
          </div>
        ))}
      </div>

      {/* 底部装饰文字 */}
      <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <div className="relative inline-block">
          {/* 外层发光 */}
          <div className="absolute -inset-2 bg-gradient-to-r from-cny-gold to-cny-red rounded-full blur-lg opacity-30 animate-pulse-slow"></div>

          {/* 主容器 */}
          <div className="relative inline-flex items-center gap-3 px-8 py-4 glass-effect-strong rounded-full">
            <span className="text-2xl animate-spin-slow">🎯</span>
            <p className="text-lg md:text-xl text-white/90 font-bold">
              {t('daysRemaining', { days: countdown.days.toString() })}
            </p>
            <span className="text-2xl animate-spin-slow" style={{ animationDelay: '1.5s' }}>🎯</span>
          </div>
        </div>
      </div>
    </div>
  );
}
