# 中国新年倒计时网站 - 技术架构设计文档

## 1. 架构概览

### 1.1 整体架构
本项目采用现代化的 Jamstack 架构，基于 Next.js 框架构建，通过 Vercel/Netlify 进行静态部署，实现高性能、高可用的单页应用。

```
┌─────────────────────────────────────────────────────────┐
│                    用户浏览器                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   React UI   │  │  i18n 多语言  │  │  倒计时逻辑   │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                  CDN (Vercel Edge)                       │
│              静态资源 + SSG 页面缓存                       │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│              Google Analytics 4 (GA4)                    │
│                  用户行为数据收集                          │
└─────────────────────────────────────────────────────────┘
```

### 1.2 技术选型理由

| 技术 | 选择理由 |
|------|---------|
| Next.js 14+ | SSG/SSR 支持，优秀的 SEO，内置优化，App Router |
| TypeScript | 类型安全，提高代码质量和可维护性 |
| Tailwind CSS | 快速开发，原子化 CSS，易于响应式设计 |
| React Hooks | 现代化状态管理，简洁的组件逻辑 |
| Vercel/Netlify | 零配置部署，全球 CDN，自动 HTTPS |
| next-intl | Next.js 官方推荐的国际化方案 |

## 2. 项目结构设计

### 2.1 目录结构
```
chineseNewYear/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── [locale]/            # 国际化路由
│   │   │   ├── layout.tsx       # 根布局
│   │   │   ├── page.tsx         # 首页
│   │   │   └── globals.css      # 全局样式
│   │   ├── favicon.ico
│   │   └── robots.ts            # 动态生成 robots.txt
│   ├── components/              # React 组件
│   │   ├── CountdownTimer/      # 倒计时组件
│   │   │   ├── index.tsx
│   │   │   └── CountdownTimer.module.css
│   │   ├── Header/              # 头部组件（语言切换）
│   │   ├── Hero/                # 英雄区组件
│   │   ├── ZodiacSection/       # 生肖信息组件
│   │   ├── CultureSection/      # 文化介绍组件
│   │   ├── Footer/              # 页脚组件
│   │   └── LanguageToggle/      # 语言切换按钮
│   ├── lib/                     # 工具函数库
│   │   ├── countdown.ts         # 倒计时计算逻辑
│   │   ├── cny-dates.ts         # 春节日期数据
│   │   ├── zodiac.ts            # 生肖计算逻辑
│   │   └── analytics.ts         # GA4 事件追踪封装
│   ├── hooks/                   # 自定义 Hooks
│   │   ├── useCountdown.ts      # 倒计时 Hook
│   │   └── useAnalytics.ts      # 分析追踪 Hook
│   ├── types/                   # TypeScript 类型定义
│   │   ├── countdown.ts
│   │   └── zodiac.ts
│   └── messages/                # 国际化文案
│       ├── en.json              # 英文文案
│       └── zh.json              # 中文文案
├── public/                      # 静态资源
│   ├── images/
│   │   ├── zodiac/              # 生肖图片
│   │   └── og-image.jpg         # Open Graph 图片
│   └── fonts/                   # 字体文件（如需要）
├── docs/                        # 文档
│   ├── requirements.md
│   └── technical-architecture.md
├── next.config.js               # Next.js 配置
├── tailwind.config.js           # Tailwind 配置
├── tsconfig.json                # TypeScript 配置
├── package.json
└── .env.local                   # 环境变量（GA ID 等）
```

## 3. 核心模块设计

### 3.1 倒计时模块

#### 3.1.1 数据结构
```typescript
interface CountdownData {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
  targetDate: Date;
}

interface ChineseNewYearDate {
  year: number;
  date: string;          // ISO 8601 格式
  zodiac: ZodiacAnimal;
  lunarDate: string;     // 农历日期
}
```

#### 3.1.2 核心算法
```typescript
// lib/countdown.ts
export function calculateCountdown(targetDate: Date): CountdownData {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, isExpired: false, targetDate };
}

// 获取下一个春节日期
export function getNextChineseNewYear(): ChineseNewYearDate {
  const cnyDates = [
    { year: 2026, date: '2026-01-29T00:00:00+08:00', zodiac: 'horse' },
    { year: 2027, date: '2027-02-17T00:00:00+08:00', zodiac: 'goat' },
    // ...
  ];

  const now = new Date();
  return cnyDates.find(d => new Date(d.date) > now) || cnyDates[0];
}
```

#### 3.1.3 React Hook 实现
```typescript
// hooks/useCountdown.ts
export function useCountdown(targetDate: Date) {
  const [countdown, setCountdown] = useState<CountdownData>(
    calculateCountdown(targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return countdown;
}
```

### 3.2 国际化模块

#### 3.2.1 配置方案
使用 `next-intl` 实现国际化，支持 URL 路由和内容翻译。

```typescript
// next.config.js
const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
  },
});
```

#### 3.2.2 文案结构
```json
// messages/zh.json
{
  "hero": {
    "title": "中国新年倒计时",
    "subtitle": "距离{year}年春节还有"
  },
  "countdown": {
    "days": "天",
    "hours": "小时",
    "minutes": "分钟",
    "seconds": "秒"
  },
  "zodiac": {
    "title": "{year}年生肖",
    "horse": {
      "name": "马",
      "description": "马年象征着活力、自由和进取精神..."
    }
  }
}
```

### 3.3 SEO 优化模块

#### 3.3.1 元数据配置
```typescript
// app/[locale]/layout.tsx
export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      images: ['/images/og-image.jpg'],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    alternates: {
      canonical: `https://yourdomain.com/${locale}`,
      languages: {
        'en': '/en',
        'zh': '/zh',
      },
    },
  };
}
```

#### 3.3.2 结构化数据
```typescript
// 添加 JSON-LD 结构化数据
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Chinese New Year 2026",
  "startDate": "2026-01-29T00:00:00+08:00",
  "description": "Chinese New Year, also known as Spring Festival",
  "eventStatus": "https://schema.org/EventScheduled",
};
```

### 3.4 分析追踪模块

#### 3.4.1 GA4 集成
```typescript
// lib/analytics.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// 页面浏览追踪
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// 自定义事件追踪
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// 语言切换事件
export const trackLanguageChange = (language: string) => {
  event({
    action: 'language_change',
    category: 'engagement',
    label: language,
  });
};
```

#### 3.4.2 事件追踪清单
- `page_view`: 页面浏览
- `language_change`: 语言切换
- `countdown_view`: 倒计时查看
- `zodiac_click`: 生肖信息点击
- `share_click`: 分享按钮点击（未来功能）

## 4. 性能优化策略

### 4.1 渲染优化
- **静态生成 (SSG)**: 使用 `generateStaticParams` 预渲染所有语言版本
- **代码分割**: 按路由自动分割，减少初始加载体积
- **图片优化**: 使用 Next.js `<Image>` 组件，自动 WebP 转换和懒加载
- **字体优化**: 使用 `next/font` 自动优化字体加载

### 4.2 缓存策略
```typescript
// next.config.js
module.exports = {
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=3600, stale-while-revalidate=86400',
        },
      ],
    },
  ],
};
```

### 4.3 性能指标目标
| 指标 | 目标值 | 优化手段 |
|------|--------|---------|
| FCP | < 1.5s | SSG, CDN, 代码分割 |
| LCP | < 2.5s | 图片优化, 预加载关键资源 |
| TTI | < 3.0s | 减少 JavaScript 体积 |
| CLS | < 0.1 | 固定尺寸, 字体优化 |
| Lighthouse | > 90 | 综合优化 |

## 5. 部署架构

### 5.1 Vercel 部署方案（推荐）

```yaml
# vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["sfo1", "hnd1"],  # 美国和亚洲节点
  "env": {
    "NEXT_PUBLIC_GA_ID": "@ga-tracking-id"
  }
}
```

### 5.2 CI/CD 流程
```
开发分支 (dev)
    ↓
  提交代码
    ↓
自动构建测试
    ↓
合并到主分支 (main)
    ↓
自动部署到生产环境
    ↓
CDN 缓存刷新
```

### 5.3 环境变量配置
```bash
# .env.local (本地开发)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# .env.production (生产环境)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 6. 数据流设计

### 6.1 组件数据流
```
App Layout
    ↓
  [locale] 路由
    ↓
  Page 组件
    ├─→ Header (语言切换)
    ├─→ Hero Section
    │     └─→ CountdownTimer (useCountdown Hook)
    ├─→ ZodiacSection (静态数据)
    ├─→ CultureSection (静态数据)
    └─→ Footer
```

### 6.2 状态管理
- **全局状态**: 语言偏好（通过 URL 和 Cookie）
- **本地状态**: 倒计时数值（useCountdown Hook）
- **服务端状态**: 无需服务端状态管理

## 7. 安全性设计

### 7.1 安全措施
- **HTTPS**: 强制使用 HTTPS（Vercel 自动配置）
- **CSP**: 内容安全策略，防止 XSS 攻击
- **环境变量**: 敏感信息通过环境变量管理
- **依赖安全**: 定期更新依赖，使用 `npm audit`

### 7.2 CSP 配置
```typescript
// next.config.js
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https:;
  font-src 'self';
  connect-src 'self' https://www.google-analytics.com;
`;
```

## 8. 监控与日志

### 8.1 监控指标
- **性能监控**: Vercel Analytics / Lighthouse CI
- **错误监控**: 可选集成 Sentry
- **用户行为**: Google Analytics 4
- **可用性监控**: Vercel 自带的 Uptime 监控

### 8.2 日志策略
- **客户端错误**: 通过 GA4 事件追踪
- **构建日志**: Vercel 部署日志
- **访问日志**: Vercel Analytics

## 9. 测试策略

### 9.1 测试类型
- **单元测试**: Jest + React Testing Library
  - 倒计时计算逻辑
  - 生肖计算逻辑
  - 工具函数
- **组件测试**: 关键组件的渲染和交互
- **E2E 测试**: Playwright（可选）
  - 语言切换流程
  - 倒计时显示正确性

### 9.2 测试覆盖率目标
- 核心逻辑函数: 100%
- React 组件: > 80%
- 整体覆盖率: > 70%

## 10. 扩展性设计

### 10.1 未来扩展点
- **多语言支持**: 架构支持轻松添加新语言
- **内容管理**: 可接入 Headless CMS（如 Contentful）
- **API 集成**: 预留 API 路由目录，支持后端功能
- **数据库**: 可接入 Vercel Postgres 存储用户数据

### 10.2 模块化设计
- 组件高度解耦，易于替换和扩展
- 工具函数独立，可复用
- 样式模块化，避免全局污染

## 11. 开发规范

### 11.1 代码规范
- **ESLint**: 使用 Next.js 推荐配置
- **Prettier**: 统一代码格式
- **TypeScript**: 严格模式，禁止 `any`
- **命名规范**:
  - 组件: PascalCase
  - 函数/变量: camelCase
  - 常量: UPPER_SNAKE_CASE
  - 文件: kebab-case 或 PascalCase（组件）

### 11.2 Git 工作流
- **分支策略**: main (生产) / dev (开发) / feature/* (功能)
- **提交规范**: Conventional Commits
  - `feat:` 新功能
  - `fix:` 修复
  - `docs:` 文档
  - `style:` 样式
  - `refactor:` 重构
  - `perf:` 性能优化
  - `test:` 测试

## 12. 技术风险与应对

| 风险 | 影响 | 应对措施 |
|------|------|---------|
| 春节日期数据不准确 | 高 | 使用权威农历算法库，多源验证 |
| 时区处理错误 | 中 | 统一使用 UTC+8，充分测试 |
| 性能不达标 | 中 | 持续监控，优化关键路径 |
| SEO 效果不佳 | 中 | A/B 测试，持续优化元数据 |
| 浏览器兼容性 | 低 | 使用 Polyfill，测试主流浏览器 |

## 13. 里程碑与交付物

### Phase 1: 基础开发（MVP）
- [ ] 项目初始化和配置
- [ ] 倒计时核心功能
- [ ] 基础 UI 组件
- [ ] 国际化配置
- [ ] 响应式布局

### Phase 2: SEO 和分析
- [ ] SEO 元数据优化
- [ ] GA4 集成
- [ ] 性能优化
- [ ] 结构化数据

### Phase 3: 测试和部署
- [ ] 单元测试
- [ ] 跨浏览器测试
- [ ] 生产环境部署
- [ ] 监控配置

## 14. 参考资源

- Next.js 官方文档: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Google Analytics 4: https://developers.google.com/analytics/devguides/collection/ga4
- Vercel 部署指南: https://vercel.com/docs
- Web Vitals: https://web.dev/vitals/

---

**文档版本**: v1.0
**最后更新**: 2026-01-31
**维护者**: 开发团队
