'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { allLocales, localeNames, locales } from '@/lib/i18n'

// 页脚语言切换器：English | 中文 | Español
// 切换时保留当前路径，只替换语言前缀。
export function FooterLangSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname()

  const switchLocalePath = (target: string) => {
    const rest = pathname.replace(/^\/[^/]+/, '')
    return `/${target}${rest}`
  }

  return (
    <div className="mt-2 flex items-center justify-center gap-3 text-sm">
      {allLocales.map((lng, i) => {
        const enabled = (locales as readonly string[]).includes(lng)
        return (
          <span key={lng} className="flex items-center gap-3">
            {i > 0 && (
              <span aria-hidden="true" className="text-muted-foreground/40">
                |
              </span>
            )}
            {enabled ? (
              <Link
                href={switchLocalePath(lng)}
                className={cn(
                  'text-muted-foreground transition-colors hover:text-primary',
                  lng === locale && 'font-medium text-primary',
                )}
              >
                {localeNames[lng]}
              </Link>
            ) : (
              <span className="text-muted-foreground/50">{localeNames[lng]}</span>
            )}
          </span>
        )
      })}
    </div>
  )
}
