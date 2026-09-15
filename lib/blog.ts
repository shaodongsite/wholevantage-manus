import { generatedBlogPosts } from './blog-content.generated'

export type BlogCategory = 'compliance' | 'hiring' | 'expansion'

export type BlogFrontmatter = {
  title: string
  date: string
  excerpt: string
  author: string
  lang: string
  category?: BlogCategory
  subtitle?: string
  tags?: string[]
}

export type BlogPost = BlogFrontmatter & {
  slug: string
  content: string
  readingMinutes: number
}

function estimateReadingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}

const posts: BlogPost[] = generatedBlogPosts
  .map((post) => ({
    slug: post.slug,
    title: post.title,
    date: post.date,
    excerpt: post.excerpt,
    author: post.author,
    lang: post.lang,
    content: post.content,
    readingMinutes: estimateReadingMinutes(post.content),
    ...(post.subtitle ? { subtitle: post.subtitle } : {}),
    ...(post.category ? { category: post.category as BlogCategory } : {}),
    ...(post.tags ? { tags: [...post.tags] } : {}),
  }))
  .sort((a, b) => +new Date(b.date) - +new Date(a.date))

// 可选 locale：传入 'zh' 仅保留中文文章；传入 'en' 保留英文文章或未标注 lang 的旧文章；
// 其他/不传则返回全部，保持向后兼容。
export function getAllPosts(locale?: string): BlogPost[] {
  if (locale === 'zh') {
    return posts.filter((post) => post.lang === 'zh')
  }
  if (locale === 'en') {
    return posts.filter((post) => post.lang === 'en' || !post.lang)
  }
  return posts
}

export function getAllSlugs(): string[] {
  return posts.map((post) => post.slug)
}

export function getPostBySlug(slug: string): BlogPost | null {
  return posts.find((post) => post.slug === slug) ?? null
}

// 相关文章：优先同语言，其次按最新补足，最多返回 limit 篇。
export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
  const current = posts.find((post) => post.slug === slug)
  if (!current) return posts.slice(0, limit)
  const sameLang = posts.filter(
    (post) => post.slug !== slug && post.lang === current.lang,
  )
  const others = posts.filter(
    (post) => post.slug !== slug && post.lang !== current.lang,
  )
  return [...sameLang, ...others].slice(0, limit)
}
