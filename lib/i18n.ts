// ============================================================================
// 多语言配置（i18n）
// 目前仅启用英文。补全 dictionaries.ts 里的 zh/es 翻译后，
// 把对应语言加入下面的 locales 数组即可自动启用，无需改动任何页面。
// ============================================================================

// 已上线启用的语言
export const locales = ['en', 'zh', 'es', 'de'] as const

// 全部计划支持的语言（用于语言切换菜单展示）
export const allLocales = ['en', 'zh', 'es', 'de'] as const

export type Locale = (typeof allLocales)[number]

// 默认语言
export const defaultLocale: Locale = 'en'

// 语言在菜单中显示的名称
export const localeNames: Record<string, string> = {
  en: 'English',
  zh: '中文',
  es: 'Español',
  de: 'Deutsch',
}
