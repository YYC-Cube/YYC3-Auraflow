/**
 * file i18n-config.ts
 * description YYC³ AuraFlow 国际化配置 - 基于 @yyc3/i18n-core v2.4.0
 * module @/lib/i18n-config
 * author YanYuCloudCube Team <admin@0379.email>
 * version 2.0.0
 * created 2026-05-27
 * updated 2026-05-27
 * status active
 * tags [i18n],[configuration],[internationalization]
 */

import type { Locale } from '@yyc3/i18n-core';
import { i18n } from '@yyc3/i18n-core';

// ===== 支持的语言配置（与@yyc3/i18n-core保持一致）=====
export const SUPPORTED_LOCALES = [
  'zh-CN',
  'en',
  'ja',
  'ko',
  'fr',
  'de',
  'es',
  'pt-BR',
  'ar',
] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: SupportedLocale = 'zh-CN';

// ===== 语言元数据（国旗、名称、方向）=====
export interface LocaleMeta {
  name: string;
  nativeName: string;
  flag: string;
  direction: 'ltr' | 'rtl';
}

export const LOCALE_META: Record<SupportedLocale, LocaleMeta> = {
  'zh-CN': { name: 'Chinese (Simplified)', nativeName: '简体中文', flag: '🇨🇳', direction: 'ltr' },
  'en': { name: 'English', nativeName: 'English', flag: '🇺🇸', direction: 'ltr' },
  'ja': { name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', direction: 'ltr' },
  'ko': { name: 'Korean', nativeName: '한국어', flag: '🇰🇷', direction: 'ltr' },
  'fr': { name: 'French', nativeName: 'Français', flag: '🇫🇷', direction: 'ltr' },
  'de': { name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', direction: 'ltr' },
  'es': { name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', direction: 'ltr' },
  'pt-BR': { name: 'Portuguese (Brazil)', nativeName: 'Português (Brasil)', flag: '🇧🇷', direction: 'ltr' },
  'ar': { name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', direction: 'rtl' },
};

// ===== 初始化函数 =====
export async function setupI18n(): Promise<void> {
  // 动态导入语言包（按需加载）
  const { zhCN } = await import('./locales/zh-CN');
  const { en } = await import('./locales/en');
  const { ja } = await import('./locales/ja');
  const { ko } = await import('./locales/ko');
  const { fr } = await import('./locales/fr');
  const { de } = await import('./locales/de');
  const { es } = await import('./locales/es');
  const { ptBR } = await import('./locales/pt-BR');
  const { ar } = await import('./locales/ar');

  // 注册所有翻译到 i18n 引擎
  i18n.registerTranslation('zh-CN', zhCN);
  i18n.registerTranslation('en', en);
  i18n.registerTranslation('ja', ja);
  i18n.registerTranslation('ko', ko);
  i18n.registerTranslation('fr', fr);
  i18n.registerTranslation('de', de);
  i18n.registerTranslation('es', es);
  i18n.registerTranslation('pt-BR', ptBR);
  i18n.registerTranslation('ar', ar);

  console.log('🌐 YYC³ i18n initialized - 9 languages ready');
}

// ===== 导出工具函数 =====

// ===== 辅助函数：获取当前语言 =====
export function getCurrentLocale(): Locale {
  return i18n.getLocale();
}

// ===== 辅助函数：切换语言 =====
export async function changeLocale(locale: SupportedLocale): Promise<void> {
  i18n.setLocale(locale);
}

// ===== 辅助函数：检查是否RTL语言 =====
export function isRTLLocale(locale?: Locale): boolean {
  const currentLocale = locale || i18n.getLocale();
  return LOCALE_META[currentLocale as SupportedLocale]?.direction === 'rtl';
}
