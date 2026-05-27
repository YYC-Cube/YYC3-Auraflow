/**
 * file i18n-client.ts
 * description Client-side i18n Configuration - 纯客户端国际化配置（无Node.js依赖）
 * module @/lib/i18n-client
 * author YanYuCloudCube Team <admin@0379.email>
 * version 2.0.0
 * created 2026-05-27
 * updated 2026-05-27
 * status active
 * tags [i18n],[configuration],[client]
 */

// ===== 支持的语言配置 =====
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

export type Locale = SupportedLocale;

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

// ===== 辅助函数：检查是否RTL语言 =====
export function isRTLLocale(locale?: SupportedLocale): boolean {
  const currentLocale = locale || DEFAULT_LOCALE;
  return LOCALE_META[currentLocale]?.direction === 'rtl';
}

// ===== 辅助函数：获取语言方向 =====
export function getLocaleDirection(locale?: SupportedLocale): 'ltr' | 'rtl' {
  const currentLocale = locale || DEFAULT_LOCALE;
  return LOCALE_META[currentLocale]?.direction || 'ltr';
}
