// 春节日期数据类型
export interface ChineseNewYearDate {
  year: number;
  date: string; // ISO 8601 格式
  zodiac: ZodiacAnimal;
  lunarDate: string;
  zodiacNameEn: string;
  zodiacNameZh: string;
}

// 生肖类型
export type ZodiacAnimal =
  | 'rat' | 'ox' | 'tiger' | 'rabbit'
  | 'dragon' | 'snake' | 'horse' | 'goat'
  | 'monkey' | 'rooster' | 'dog' | 'pig';

// 倒计时数据类型
export interface CountdownData {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
  targetDate: Date;
}
