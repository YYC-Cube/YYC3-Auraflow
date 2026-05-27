/**
 * file use-translation.ts
 * description Client-side i18n Hook - 客户端国际化翻译Hook（性能优化版）
 * module @/hooks/use-translation
 * author YanYuCloudCube Team <admin@0379.email>
 * version 2.0.0
 * created 2026-05-27
 * updated 2026-05-27
 * status active
 * tags [i18n],[hooks],[client],[performance]
 */

'use client';

import type { LocaleMeta, SupportedLocale } from '@/lib/i18n-client';
import { LOCALE_META, SUPPORTED_LOCALES } from '@/lib/i18n-client';
import {
  cleanupUnusedLocales,
  lazyLoadLocale,
  preloadLocales,
  translationCache,
} from '@/lib/i18n-performance';
import { useCallback, useEffect, useRef, useState } from 'react';

// 全局状态管理（优化版）
let globalLocale: SupportedLocale = 'zh-CN';
let globalTranslations: Record<string, string> = {};
const listeners = new Set<() => void>();

function emitChange() {
  listeners.forEach((listener) => listener());
}

export function useTranslation(initialLocale: SupportedLocale = 'zh-CN') {
  const [locale, setLocale] = useState<SupportedLocale>(initialLocale);
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);
  const isInitialized = useRef(false);

  const t = useCallback(
    (key: string): string => {
      return translations[key] || key;
    },
    [translations]
  );

  const loadTranslations = useCallback(async (loc: SupportedLocale) => {
    setIsLoading(true);
    try {
      // 使用优化的缓存加载器
      const translationMap = await lazyLoadLocale(loc);

      // 更新全局状态
      globalTranslations = translationMap;
      globalLocale = loc;

      setTranslations(translationMap);
      setLocale(loc);

      // 更新HTML属性
      if (typeof document !== 'undefined') {
        document.documentElement.lang = loc;
        const meta = LOCALE_META[loc];
        if (meta?.direction === 'rtl') {
          document.documentElement.dir = 'rtl';
          document.body.classList.add('rtl');
        } else {
          document.documentElement.dir = 'ltr';
          document.body.classList.remove('rtl');
        }
      }

      // 清理未使用的缓存
      cleanupUnusedLocales(loc);

      console.log(`✅ Loaded locale: ${loc} (${Object.keys(translationMap).length} keys)`);
    } catch (error) {
      console.error('Failed to load translations:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const changeLocale = useCallback(
    async (newLocale: SupportedLocale) => {
      await loadTranslations(newLocale);
    },
    [loadTranslations]
  );

  // 初始化 + 预加载
  useEffect(() => {
    if (!isInitialized.current) {
      isInitialized.current = true;

      // 加载默认语言
      loadTranslations(initialLocale);

      // 预加载其他常用语言（非阻塞）
      preloadLocales(['en', 'ja'] as SupportedLocale[]).catch(console.error);
    }
  }, [initialLocale, loadTranslations]);

  return {
    t,
    translations,  // 添加原始翻译对象供Proxy使用
    locale,
    changeLocale,
    isLoading,
    isRTL: LOCALE_META[locale]?.direction === 'rtl',
    supportedLocales: SUPPORTED_LOCALES,
    localeMeta: LOCALE_META as Record<string, LocaleMeta>,
    cacheStats: translationCache.getStats(),
  };
}
