'use client';

import { useTranslations } from 'next-intl';

export default function CultureSection() {
  const t = useTranslations('culture');

  const traditions = [
    { name: t('traditions.items.0.name'), description: t('traditions.items.0.description'), emoji: '🍜' },
    { name: t('traditions.items.1.name'), description: t('traditions.items.1.description'), emoji: '🧧' },
    { name: t('traditions.items.2.name'), description: t('traditions.items.2.description'), emoji: '🎆' },
    { name: t('traditions.items.3.name'), description: t('traditions.items.3.description'), emoji: '🧹' },
  ];

  const foods = [
    { name: t('foods.items.0.name'), meaning: t('foods.items.0.meaning'), emoji: '🥟' },
    { name: t('foods.items.1.name'), meaning: t('foods.items.1.meaning'), emoji: '🐟' },
    { name: t('foods.items.2.name'), meaning: t('foods.items.2.meaning'), emoji: '🥢' },
    { name: t('foods.items.3.name'), meaning: t('foods.items.3.meaning'), emoji: '🍰' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 right-20 w-72 h-72 bg-cny-red/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-cny-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 left-1/4 text-9xl opacity-5 animate-spin-slow">🏮</div>
        <div className="absolute bottom-1/3 right-1/4 text-8xl opacity-5 animate-spin-slow" style={{ animationDelay: '2s' }}>🎊</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* 标题和介绍 */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-4">
                <span className="text-5xl animate-float">🎋</span>
                <h2 className="text-5xl md:text-6xl font-bold gradient-text">
                  {t('title')}
                </h2>
                <span className="text-5xl animate-float" style={{ animationDelay: '0.5s' }}>🎋</span>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              {t('intro')}
            </p>
            <div className="mt-6 flex justify-center gap-3 text-3xl">
              <span className="animate-bounce-slow">✨</span>
              <span className="animate-bounce-slow" style={{ animationDelay: '0.3s' }}>✨</span>
              <span className="animate-bounce-slow" style={{ animationDelay: '0.6s' }}>✨</span>
            </div>
          </div>

          {/* 传统习俗 */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                {t('traditions.title')}
              </h3>
              <div className="h-1 w-32 bg-gradient-to-r from-cny-red to-cny-gold rounded-full mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {traditions.map((tradition, index) => (
                <div
                  key={index}
                  className="relative group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* 卡片发光效果 */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cny-red to-cny-gold rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>

                  {/* 主卡片 */}
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-cny-gold/30">
                    <div className="flex items-start gap-6">
                      {/* Emoji图标 */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-cny-red/10 to-cny-gold/10 rounded-2xl flex items-center justify-center text-5xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 lantern-glow">
                          {tradition.emoji}
                        </div>
                      </div>

                      {/* 内容 */}
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-cny-red transition-colors">
                          {tradition.name}
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {tradition.description}
                        </p>
                      </div>
                    </div>

                    {/* 装饰性角标 */}
                    <div className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse-slow">
                      🎊
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 传统美食 */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                {t('foods.title')}
              </h3>
              <div className="h-1 w-32 bg-gradient-to-r from-cny-gold to-cny-red rounded-full mx-auto"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {foods.map((food, index) => (
                <div
                  key={index}
                  className="relative group perspective-1000 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* 发光背景 */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-cny-red to-cny-gold rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse-slow"></div>

                  {/* 主卡片 */}
                  <div className="relative bg-gradient-to-br from-white via-cny-gold/5 to-cny-red/5 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 card-3d border-2 border-cny-gold/20">
                    {/* Emoji */}
                    <div className="text-7xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 lantern-glow">
                      {food.emoji}
                    </div>

                    {/* 名称 */}
                    <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-cny-red transition-colors">
                      {food.name}
                    </h4>

                    {/* 寓意 */}
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-cny-gold/20 to-cny-red/20 rounded-xl blur"></div>
                      <p className="relative text-base text-gray-700 italic font-medium px-3 py-2 bg-white/50 rounded-xl backdrop-blur-sm">
                        {food.meaning}
                      </p>
                    </div>

                    {/* 装饰星星 */}
                    <div className="absolute -top-2 -right-2 text-2xl animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity">
                      ⭐
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 底部装饰 */}
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="inline-flex items-center gap-4 px-8 py-4 glass-effect rounded-full">
              <span className="text-3xl animate-wiggle">🏮</span>
              <p className="text-lg text-gray-700 font-medium">
                {t('heritage')}
              </p>
              <span className="text-3xl animate-wiggle" style={{ animationDelay: '0.5s' }}>🏮</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
