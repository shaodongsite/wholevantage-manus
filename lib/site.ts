import type { Metadata } from 'next'
import { locales } from '@/lib/i18n'

// 站点级常量：用于 hreflang、sitemap 等绝对 URL 生成。
// 部署后可通过 NEXT_PUBLIC_SITE_URL 覆盖为真实域名。
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://wholevantage.com'
).replace(/\/$/, '')

// 统一生成页面级 metadata：canonical 指向当前语言版本，
// alternates.languages 覆盖全部语言 + x-default，供搜索引擎做 hreflang。
// path 为不含语言前缀的路径（首页传 ''，其余如 '/services/content'）。
export function pageMetadata(opts: {
  locale: string
  path: string
  title: string
  description: string
}): Metadata {
  const { locale, path, title, description } = opts
  const languages: Record<string, string> = {}
  for (const l of locales) languages[l] = `${SITE_URL}/${l}${path}`
  languages['x-default'] = `${SITE_URL}/en${path}`

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}${path}`,
      languages,
    },
  }
}

// 应用语言 → BCP-47 标签（用于日期本地化与 hreflang）。
export const bcp47: Record<string, string> = {
  en: 'en-US',
  zh: 'zh-CN',
  es: 'es-ES',
  de: 'de-DE',
}

export function formatDate(date: string, locale: string): string {
  // 固定 timeZone 为 UTC：日期字符串（如 "2026-06-10"）按 UTC 午夜解析，
  // 统一时区可保证服务端与客户端格式化结果一致，避免 hydration 不匹配。
  return new Intl.DateTimeFormat(bcp47[locale] ?? 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date))
}
