import type { ChineseNewYearDate } from '@/types/countdown';

// 春节日期数据（未来几年）
export const chineseNewYearDates: ChineseNewYearDate[] = [
  {
    year: 2026,
    date: '2026-02-17T00:00:00+08:00',
    zodiac: 'horse',
    lunarDate: '正月初一',
    zodiacNameEn: 'Horse',
    zodiacNameZh: '马',
  },
  {
    year: 2027,
    date: '2027-02-06T00:00:00+08:00',
    zodiac: 'goat',
    lunarDate: '正月初一',
    zodiacNameEn: 'Goat',
    zodiacNameZh: '羊',
  },
  {
    year: 2028,
    date: '2028-02-06T00:00:00+08:00',
    zodiac: 'monkey',
    lunarDate: '正月初一',
    zodiacNameEn: 'Monkey',
    zodiacNameZh: '猴',
  },
  {
    year: 2029,
    date: '2029-01-26T00:00:00+08:00',
    zodiac: 'rooster',
    lunarDate: '正月初一',
    zodiacNameEn: 'Rooster',
    zodiacNameZh: '鸡',
  },
  {
    year: 2030,
    date: '2030-02-14T00:00:00+08:00',
    zodiac: 'dog',
    lunarDate: '正月初一',
    zodiacNameEn: 'Dog',
    zodiacNameZh: '狗',
  },
];

/**
 * 获取下一个春节日期
 * 注意：为了演示倒计时功能，返回下一个未来的春节
 */
export function getNextChineseNewYear(): ChineseNewYearDate {
  const now = new Date();
  const nextCNY = chineseNewYearDates.find(
    (d) => new Date(d.date) > now
  );

  return nextCNY || chineseNewYearDates[0];
}

/**
 * 根据年份获取春节日期
 */
export function getChineseNewYearByYear(year: number): ChineseNewYearDate | undefined {
  return chineseNewYearDates.find((d) => d.year === year);
}
