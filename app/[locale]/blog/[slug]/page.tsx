import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react'
import { ArticleBody } from '@/components/blog/article-body'
import { ShareButtons } from '@/components/blog/share-buttons'
import { getDictionary } from '@/lib/dictionaries'
import {
  getAllSlugs,
  getPostBySlug,
  getRelatedPosts,
} from '@/lib/blog'
import { locales } from '@/lib/i18n'
import { SITE_URL, formatDate } from '@/lib/site'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  const title = post.title

  const languages: Record<string, string> = {}
  for (const l of locales) languages[l] = `${SITE_URL}/${l}/blog/${slug}`
  languages['x-default'] = `${SITE_URL}/en/blog/${slug}`

  return {
    title: `${title} — WholeVantage Advisory`,
    description: post.excerpt,
    alternates: {
      canonical: `${SITE_URL}/${locale}/blog/${slug}`,
      languages,
    },
  }
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const dict = getDictionary(locale)
  const t = dict.blog
  const base = `/${locale}`
  const title = post.title
  const related = getRelatedPosts(slug)

  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-10">
      {/* 面包屑 */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href={base} className="hover:text-accent">
              {dict.nav.home}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href={`${base}/blog`} className="hover:text-accent">
              {dict.nav.blog}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground/80" aria-current="page">
            {title}
          </li>
        </ol>
      </nav>

      {/* 标题区 */}
      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="rounded-full bg-secondary px-3 py-1 font-semibold text-secondary-foreground">
            {post.lang === 'zh' ? '中文' : 'EN'}
          </span>
          <span className="inline-flex items-center gap-1">
            <CalendarDays className="size-3.5" aria-hidden="true" />
            {formatDate(post.date, locale)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" aria-hidden="true" />
            {post.readingMinutes} {t.minRead}
          </span>
        </div>
        <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        {/* 作者信息 */}
        <div className="flex items-center gap-3 border-y border-border py-4">
          <span className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            {post.author.charAt(0)}
          </span>
          <span className="text-sm text-muted-foreground">
            {t.writtenBy}{' '}
            <span className="font-semibold text-foreground">{post.author}</span>
          </span>
        </div>
      </header>

      {/* 正文 */}
      <div className="mt-8">
        <ArticleBody content={post.content} />
      </div>

      {/* 分享 */}
      <div className="mt-10 border-t border-border pt-6">
        <ShareButtons
          url={`${SITE_URL}/${locale}/blog/${slug}`}
          title={title}
          label={t.shareLabel}
        />
      </div>

      {/* 相关文章 */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-primary">{t.relatedTitle}</h2>
          <div className="mt-5 grid gap-6 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`${base}/blog/${r.slug}`}
                className="flex flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent"
              >
                <span className="text-xs font-semibold text-accent">
                  {r.lang === 'zh' ? '中文' : 'EN'}
                </span>
                <span className="mt-2 text-balance font-bold leading-snug text-primary">
                  {r.title}
                </span>
                <span className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {r.excerpt}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 返回博客 */}
      <div className="mt-12">
        <Link
          href={`${base}/blog`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          {t.backToBlog}
        </Link>
      </div>
    </article>
  )
}
