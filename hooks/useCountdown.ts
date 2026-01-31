'use client';

import { useState, useEffect } from 'react';
import { calculateCountdown } from '@/lib/countdown';
import type { CountdownData } from '@/types/countdown';

/**
 * 倒计时 Hook
 * @param targetDate 目标日期
 * @returns 倒计时数据
 */
export function useCountdown(targetDate: Date): CountdownData {
  const [countdown, setCountdown] = useState<CountdownData>(() =>
    calculateCountdown(targetDate)
  );

  useEffect(() => {
    // 立即计算一次
    setCountdown(calculateCountdown(targetDate));

    // 每秒更新一次
    const timer = setInterval(() => {
      setCountdown(calculateCountdown(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return countdown;
}
