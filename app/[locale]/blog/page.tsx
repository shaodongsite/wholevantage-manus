import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { BlogList, type PostMeta } from '@/components/blog/blog-list'
import { getDictionary } from '@/lib/dictionaries'
import { getAllPosts } from '@/lib/blog'
import { locales } from '@/lib/i18n'
import { SITE_URL } from '@/lib/site'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = getDictionary(locale)
  const languages: Record<string, string> = {}
  for (const l of locales) languages[l] = `${SITE_URL}/${l}/blog`
  languages['x-default'] = `${SITE_URL}/en/blog`

  return {
    title: `${dict.blog.title} — WholeVantage Advisory`,
    description: dict.blog.subtitle,
    alternates: {
      canonical: `${SITE_URL}/${locale}/blog`,
      languages,
    },
  }
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = getDictionary(locale)

  // 展示全部文章（不按页面语言过滤），语言切换交给客户端筛选器。
  // 只把列表所需的可序列化字段传给客户端组件（不含正文）。
  const posts: PostMeta[] = getAllPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    lang: p.lang,
    date: p.date,
    author: p.author,
    readingMinutes: p.readingMinutes,
  }))

  return (
    <>
      <PageHeader title={dict.blog.title} subtitle={dict.blog.subtitle} />
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <BlogList posts={posts} locale={locale} t={dict.blog} />
      </section>
    </>
  )
}
