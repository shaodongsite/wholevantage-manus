import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { getDictionary } from '@/lib/dictionaries'
import { pageMetadata } from '@/lib/site'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = getDictionary(locale)
  return pageMetadata({
    locale,
    path: '/services/content',
    title: `${dict.serviceContent.title} — WholeVantage Advisory`,
    description: dict.serviceContent.subtitle,
  })
}

export default async function ServiceContentPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const sc = dict.serviceContent

  return (
    <>
      <PageHeader title={sc.title} subtitle={sc.subtitle} />

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {sc.items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-border bg-card p-7"
            >
              <span className="text-sm font-semibold text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="mt-2 text-balance text-xl font-bold text-primary">
                {item.title}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {item.intro}
              </p>
              <ul className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                {item.points.map((pt, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm leading-relaxed text-foreground"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
