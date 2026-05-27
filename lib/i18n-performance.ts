/**
 * file i18n-performance.ts
 * description i18n Performance Optimization - 国际化性能优化工具
 * module @/lib/i18n-performance
 * author YanYuCloudCube Team <admin@0379.email>
 * version 2.0.0
 * created 2026-05-27
 * updated 2026-05-27
 * status active
 * tags [i18n],[performance],[optimization]
 */

import type { SupportedLocale } from './i18n-client';

// 性能配置
export const I18N_PERFORMANCE_CONFIG = {
  // 预加载的语言（默认语言 + 用户上次选择的语言）
  PRELOAD_LOCALES: ['zh-CN', 'en'] as SupportedLocale[],

  // 缓存过期时间（毫秒）- 24小时
  CACHE_EXPIRY: 24 * 60 * 60 * 1000,

  // 是否启用压缩传输
  ENABLE_COMPRESSION: true,

  // 是否启用CDN缓存
  ENABLE_CDN_CACHE: true,

  // 最大缓存大小（MB）
  MAX_CACHE_SIZE: 50,
};

// 缓存管理器
class TranslationCacheManager {
  private cache = new Map<string, { data: any; timestamp: number; size: number }>();
  private maxSize: number;

  constructor(maxSizeMB: number = 50) {
    this.maxSize = maxSizeMB * 1024 * 1024; // 转换为字节
  }

  /**
   * 设置缓存
   */
  set(key: string, data: any): void {
    const size = new Blob([JSON.stringify(data)]).size;
    const now = Date.now();

    // 检查是否超过最大缓存大小
    if (this.getCurrentCacheSize() + size > this.maxSize) {
      this.evictOldest();
    }

    this.cache.set(key, { data, timestamp: now, size });
  }

  /**
   * 获取缓存
   */
  get(key: string): any | null {
    const item = this.cache.get(key);
    if (!item) return null;

    // 检查是否过期
    if (Date.now() - item.timestamp > I18N_PERFORMANCE_CONFIG.CACHE_EXPIRY) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  /**
   * 检查是否存在
   */
  has(key: string): boolean {
    return this.get(key) !== null;
  }

  /**
   * 删除缓存
   */
  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  /**
   * 清空所有缓存
   */
  clear(): void {
    this.cache.clear();
  }

  /**
   * 获取当前缓存大小
   */
  private getCurrentCacheSize(): number {
    let totalSize = 0;
    this.cache.forEach((item) => {
      totalSize += item.size;
    });
    return totalSize;
  }

  /**
   * 淘汰最旧的缓存条目
   */
  private evictOldest(): void {
    let oldestKey: string | null = null;
    let oldestTime = Infinity;

    this.cache.forEach((item, key) => {
      if (item.timestamp < oldestTime) {
        oldestTime = item.timestamp;
        oldestKey = key;
      }
    });

    if (oldestKey) {
      this.cache.delete(oldestKey);
    }
  }

  /**
   * 获取缓存统计信息
   */
  getStats(): { entries: number; sizeMB: number; hitRate: number } {
    let totalSize = 0;
    this.cache.forEach((item) => {
      totalSize += item.size;
    });

    return {
      entries: this.cache.size,
      sizeMB: totalSize / (1024 * 1024),
      hitRate: 0, // TODO: 实现命中率跟踪
    };
  }
}

// 全局缓存实例
export const translationCache = new TranslationCacheManager();

/**
 * 预加载语言包
 */
export async function preloadLocales(locales: SupportedLocale[]): Promise<void> {
  const promises = locales.map(async (locale) => {
    try {
      const localeModule = await import(`@/lib/locales/${locale}`);
      const translationMap = Object.values(localeModule)[0];
      translationCache.set(`locale_${locale}`, translationMap);
      console.log(`✅ Preloaded locale: ${locale}`);
    } catch (error) {
      console.error(`❌ Failed to preload locale: ${locale}`, error);
    }
  });

  await Promise.allSettled(promises);
}

/**
 * 懒加载单个语言包
 */
export async function lazyLoadLocale(locale: SupportedLocale): Promise<any> {
  const cacheKey = `locale_${locale}`;

  // 先检查缓存
  const cached = translationCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  // 动态导入
  try {
    const localeModule = await import(`@/lib/locales/${locale}`);
    const translationMap = Object.values(localeModule)[0];

    // 存入缓存
    translationCache.set(cacheKey, translationMap);

    return translationMap;
  } catch (error) {
    console.error(`Failed to load locale: ${locale}`, error);
    throw error;
  }
}

/**
 * 批量预取语言包（非阻塞）
 */
export function prefetchLocales(locales: SupportedLocale[]): void {
  if (typeof window === 'undefined') return;

  // 使用 requestIdleCallback 在浏览器空闲时预加载
  const prefetch = () => {
    locales.forEach((locale) => {
      // 使用 link[rel=prefetch] 进行预取
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = `/locales/${locale}.js`;
      link.as = 'script';
      document.head.appendChild(link);
    });
  };

  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(prefetch);
  } else {
    setTimeout(prefetch, 1000);
  }
}

/**
 * 清理未使用的语言包缓存
 */
export function cleanupUnusedLocales(currentLocale: SupportedLocale, keepCount: number = 3): void {
  const allKeys = Array.from(translationCache['cache'].keys());
  const localeKeys = allKeys.filter((key) => key.startsWith('locale_'));

  // 保留当前语言和最近使用的N个语言
  const keysToKeep = [`locale_${currentLocale}`];
  const keysToRemove = localeKeys.filter((key) => !keysToKeep.includes(key));

  // 如果保留的数量超过keepCount，移除多余的
  if (keysToRemove.length > 0 && localeKeys.length > keepCount) {
    keysToRemove.slice(0, -keepCount).forEach((key) => {
      translationCache.delete(key);
    });
  }
}

/**
 * 监控i18n性能指标
 */
export function monitorI18nPerformance(): void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name.includes('i18n') || entry.name.includes('locale')) {
          console.log(`📊 i18n Performance: ${entry.name} took ${entry.duration}ms`);
        }
      }
    });

    observer.observe({ entryTypes: ['resource', 'measure'] });
  } catch (error) {
    console.warn('Performance monitoring not supported:', error);
  }
}
