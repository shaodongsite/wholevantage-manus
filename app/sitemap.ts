import type { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n'
import { getAllPosts } from '@/lib/blog'
import { SITE_URL } from '@/lib/site'

// 站点地图：覆盖每个语言的所有页面（含博客列表与文章），
// 并为每条记录附带 hreflang 备用链接（alternates.languages）。
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    '',
    '/about/my-story',
    '/about/our-approach',
    '/services/content',
    '/services/process',
    '/services/fee',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
  ]

  const blogPaths = getAllPosts().map((p) => `/blog/${p.slug}`)
  const allPaths = [...staticPaths, ...blogPaths]

  const entries: MetadataRoute.Sitemap = []

  for (const path of allPaths) {
    const languages: Record<string, string> = {}
    for (const l of locales) languages[l] = `${SITE_URL}/${l}${path}`

    for (const locale of locales) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path.startsWith('/blog/') ? 'monthly' : 'weekly',
        priority: path === '' ? 1 : path.startsWith('/blog') ? 0.7 : 0.6,
        alternates: { languages },
      })
    }
  }

  return entries
}
