'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight, Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Dictionary } from '@/lib/dictionaries'
import { formatDate } from '@/lib/site'

export type PostMeta = {
  slug: string
  title: string
  excerpt: string
  lang: string
  date: string
  author: string
  readingMinutes: number
}

const POSTS_PER_PAGE = 6

// 语言筛选项：按任务要求固定为 All / 中文 / English。
const LANG_FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'zh', label: '中文' },
  { key: 'en', label: 'English' },
] as const

type LangFilter = (typeof LANG_FILTERS)[number]['key']

// 文章卡片上的语言标签。
function langTag(lang: string): string {
  return lang === 'zh' ? '中文' : 'EN'
}

export function BlogList({
  posts,
  locale,
  t,
}: {
  posts: PostMeta[]
  locale: string
  t: Dictionary['blog']
}) {
  const [query, setQuery] = useState('')
  // 默认筛选跟随当前路由语言：/zh → 中文，/en → English，其余 → 全部。
  // All 按钮保留，用户仍可手动点回查看全部文章。
  const initialLang: LangFilter =
    locale === 'zh' ? 'zh' : locale === 'en' ? 'en' : 'all'
  const [lang, setLang] = useState<LangFilter>(initialLang)
  const [page, setPage] = useState(1)

  const base = `/${locale}`

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return posts.filter((p) => {
      const matchesLang = lang === 'all' || p.lang === lang
      const matchesQuery =
        q === '' ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q)
      return matchesLang && matchesQuery
    })
  }, [posts, query, lang])

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const visible = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  )

  // 筛选或搜索变化时回到第一页
  function onFilterChange(next: () => void) {
    next()
    setPage(1)
  }

  return (
    <div className="flex flex-col gap-8">
      {/* 搜索 + 语言筛选 */}
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => onFilterChange(() => setQuery(e.target.value))}
            placeholder={t.searchPlaceholder}
            aria-label={t.searchPlaceholder}
            className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm text-foreground outline-none transition-colors focus:border-accent"
          />
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Language">
          {LANG_FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => onFilterChange(() => setLang(f.key))}
              aria-pressed={lang === f.key}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                lang === f.key
                  ? 'border-accent bg-accent text-accent-foreground'
                  : 'border-border bg-card text-foreground/80 hover:border-accent hover:text-accent',
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* 文章网格 */}
      {visible.length === 0 ? (
        <p className="rounded-2xl border border-border bg-card px-6 py-16 text-center text-muted-foreground">
          {t.noResults}
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <article
              key={p.slug}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-secondary px-3 py-1 font-semibold text-secondary-foreground">
                  {langTag(p.lang)}
                </span>
                <span>
                  {p.readingMinutes} {t.minRead}
                </span>
              </div>
              <h2 className="mt-4 text-balance text-lg font-bold leading-snug text-primary">
                <Link
                  href={`${base}/blog/${p.slug}`}
                  className="outline-none after:absolute hover:underline"
                >
                  {p.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                {p.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <span>{formatDate(p.date, locale)}</span>
                <Link
                  href={`${base}/blog/${p.slug}`}
                  className="inline-flex items-center gap-1 font-semibold text-accent hover:gap-2 transition-all"
                >
                  {t.readMore}
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* 分页 */}
      {totalPages > 1 && (
        <nav
          className="flex items-center justify-center gap-2"
          aria-label="Pagination"
        >
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:border-accent disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
            {t.prev}
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              aria-current={currentPage === n ? 'page' : undefined}
              className={cn(
                'size-9 rounded-full border text-sm font-medium transition-colors',
                currentPage === n
                  ? 'border-accent bg-accent text-accent-foreground'
                  : 'border-border bg-card text-foreground/80 hover:border-accent',
              )}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:border-accent disabled:cursor-not-allowed disabled:opacity-40"
          >
            {t.next}
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </nav>
      )}
    </div>
  )
}
