'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Globe, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Dictionary } from '@/lib/dictionaries'
import { allLocales, localeNames, locales } from '@/lib/i18n'

type NavItem = {
  label: string
  href?: string
  children?: { label: string; href: string }[]
}

export function SiteHeader({
  dict,
  locale,
}: {
  dict: Dictionary
  locale: string
}) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  // 点击导航区域外部时关闭下拉菜单
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // 切换路由时关闭菜单
  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [pathname])

  const base = `/${locale}`

  const navItems: NavItem[] = [
    { label: dict.nav.home, href: base },
    {
      label: dict.nav.about,
      children: [
        { label: dict.nav.aboutItems.story, href: `${base}/about/my-story` },
        { label: dict.nav.aboutItems.approach, href: `${base}/about/our-approach` },
      ],
    },
    {
      label: dict.nav.services,
      children: [
        { label: dict.nav.servicesItems.content, href: `${base}/services/content` },
        { label: dict.nav.servicesItems.process, href: `${base}/services/process` },
        { label: dict.nav.servicesItems.fee, href: `${base}/services/fee` },
      ],
    },
    { label: dict.nav.blog, href: `${base}/blog` },
    { label: dict.nav.contact, href: `${base}/contact` },
  ]

  const isActive = (href?: string) => {
    if (!href) return false
    if (href === base) return pathname === base
    return pathname.startsWith(href)
  }

  // 切换语言：把路径里的语言前缀替换成目标语言
  const switchLocalePath = (target: string) => {
    const rest = pathname.replace(/^\/[^/]+/, '')
    return `/${target}${rest}`
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href={base}
          className="text-xl font-bold tracking-tight text-primary"
        >
          {dict.brand}
        </Link>

        {/* 桌面导航 */}
        <nav ref={navRef} className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="relative">
                <button
                  onClick={() =>
                    setOpenMenu((cur) => (cur === item.label ? null : item.label))
                  }
                  className="flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
                  aria-expanded={openMenu === item.label}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      'size-4 transition-transform',
                      openMenu === item.label && 'rotate-180',
                    )}
                  />
                </button>
                {openMenu === item.label && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                    <div className="min-w-64 rounded-xl border border-border bg-popover p-2 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            'block rounded-lg px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary',
                            isActive(child.href) && 'bg-secondary text-primary',
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className={cn(
                  'text-sm font-medium text-foreground/80 transition-colors hover:text-accent',
                  isActive(item.href) && 'text-accent',
                )}
              >
                {item.label}
              </Link>
            ),
          )}

          {/* 语言切换 */}
          <div className="relative">
            <button
              onClick={() =>
                setOpenMenu((cur) => (cur === 'lang' ? null : 'lang'))
              }
              className="flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
              aria-expanded={openMenu === 'lang'}
            >
              <Globe className="size-4" />
              {dict.nav.languages}
              <ChevronDown
                className={cn(
                  'size-4 transition-transform',
                  openMenu === 'lang' && 'rotate-180',
                )}
              />
            </button>
            {openMenu === 'lang' && (
              <div className="absolute right-0 top-full pt-3">
                <div className="min-w-32 rounded-xl border border-border bg-popover p-2 shadow-lg">
                  {allLocales.map((lng) => {
                    const enabled = (locales as readonly string[]).includes(lng)
                    return enabled ? (
                      <Link
                        key={lng}
                        href={switchLocalePath(lng)}
                        className={cn(
                          'block rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary',
                          lng === locale && 'bg-secondary text-primary',
                        )}
                      >
                        {localeNames[lng]}
                      </Link>
                    ) : (
                      <span
                        key={lng}
                        className="block cursor-not-allowed rounded-lg px-3 py-2 text-sm text-muted-foreground/50"
                        title="Coming soon"
                      >
                        {localeNames[lng]}
                      </span>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* 移动端汉堡按钮 */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* 移动端菜单 */}
      {mobileOpen && (
        <nav className="border-t border-border bg-background px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between py-2.5 text-sm font-medium text-foreground/90 marker:content-none">
                      {item.label}
                      <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="ml-3 flex flex-col border-l border-border pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="py-2 text-sm text-foreground/70 hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href!}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-sm font-medium text-foreground/90 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="mt-2 border-t border-border pt-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="size-4" />
                {dict.nav.languages}:
                {allLocales.map((lng) => {
                  const enabled = (locales as readonly string[]).includes(lng)
                  return enabled ? (
                    <Link
                      key={lng}
                      href={switchLocalePath(lng)}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'rounded px-1.5 py-0.5 font-medium text-foreground/80 hover:text-primary',
                        lng === locale && 'text-primary',
                      )}
                    >
                      {localeNames[lng]}
                    </Link>
                  ) : (
                    <span key={lng} className="px-1.5 py-0.5 text-muted-foreground/50">
                      {localeNames[lng]}
                    </span>
                  )
                })}
              </div>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
