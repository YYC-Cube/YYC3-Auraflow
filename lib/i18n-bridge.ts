/**
 * file i18n-bridge.ts
 * description i18n Bridge - 桥接新旧i18n系统，提供兼容层
 * module @/lib/i18n-bridge
 * author YanYuCloudCube Team <admin@0379.email>
 * version 2.0.0
 * created 2026-05-27
 * updated 2026-05-27
 * status active
 * tags [i18n],[bridge],[compatibility]
 */

import type { SupportedLocale } from './i18n-client';
import type { TranslationMap } from '@yyc3/i18n-core';

/**
 * 将扁平的TranslationMap转换为嵌套的Translations对象
 * 支持点分路径访问：brand.fullName -> brand: { fullName: ... }
 */
export function flattenToNested(flatMap: TranslationMap): Record<string, any> {
  const nested: Record<string, any> = {};

  Object.entries(flatMap).forEach(([key, value]) => {
    const keys = key.split('_');
    let current = nested;

    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) {
        current[keys[i]] = {};
      }
      current = current[keys[i]];
    }

    current[keys[keys.length - 1]] = value;
  });

  return nested;
}

/**
 * 从嵌套对象获取值（支持点分路径）
 */
export function getNestedValue(obj: Record<string, any>, path: string): string | undefined {
  const keys = path.split('.');
  let current: any = obj;

  for (const key of keys) {
    if (current === undefined || current === null) {
      return undefined;
    }
    current = current[key];
  }

  return typeof current === 'string' ? current : undefined;
}

/**
 * 兼容旧版Translations接口的类型定义
 */
export interface LegacyTranslations {
  nav: {
    services: string;
    testimonials: string;
    pricing: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badge1: string;
    badge2: string;
  };
  brand: {
    fullName: string;
    shortName: string;
    motto: string;
    mottoEn: string;
  };
  fiveHighs: {
    sectionTitle: string;
    sectionSubtitle: string;
    tag: string;
  };
  fiveStandards: {
    sectionTitle: string;
    sectionSubtitle: string;
    tag: string;
  };
  fiveDimensions: {
    sectionTitle: string;
    sectionSubtitle: string;
    tag: string;
  };
  closedLoop: {
    sectionTitle: string;
    sectionSubtitle: string;
    tag: string;
    coreValue: string;
    coreDescription: string;
  };
}

/**
 * 将扁平翻译转换为LegacyTranslations格式
 */
export function convertToLegacyFormat(flatMap: TranslationMap): LegacyTranslations {
  const nested = flattenToNested(flatMap);

  return {
    nav: {
      services: nested.nav?.services || '',
      testimonials: nested.nav?.testimonials || '',
      pricing: nested.nav?.pricing || '',
      contact: nested.nav?.contact || '',
    },
    hero: {
      title: nested.hero?.title || '',
      subtitle: nested.hero?.subtitle || '',
      ctaPrimary: nested.hero?.ctaPrimary || '',
      ctaSecondary: nested.hero?.ctaSecondary || '',
      badge1: nested.hero?.badge1 || '',
      badge2: nested.hero?.badge2 || '',
    },
    brand: {
      fullName: nested.brand?.fullName || '',
      shortName: nested.brand?.shortName || '',
      motto: nested.brand?.motto || '',
      mottoEn: nested.brand?.mottoEn || '',
    },
    fiveHighs: {
      sectionTitle: nested.fiveHighs?.sectionTitle || '',
      sectionSubtitle: nested.fiveHighs?.sectionSubtitle || '',
      tag: nested.fiveHighs?.tag || '',
    },
    fiveStandards: {
      sectionTitle: nested.fiveStandards?.sectionTitle || '',
      sectionSubtitle: nested.fiveStandards?.sectionSubtitle || '',
      tag: nested.fiveStandards?.tag || '',
    },
    fiveDimensions: {
      sectionTitle: nested.fiveDimensions?.sectionTitle || '',
      sectionSubtitle: nested.fiveDimensions?.sectionSubtitle || '',
      tag: nested.fiveDimensions?.tag || '',
    },
    closedLoop: {
      sectionTitle: nested.closedLoop?.sectionTitle || '',
      sectionSubtitle: nested.closedLoop?.sectionSubtitle || '',
      tag: nested.closedLoop?.tag || '',
      coreValue: nested.closedLoop?.coreValue || '',
      coreDescription: nested.closedLoop?.coreDescription || '',
    },
  };
}
