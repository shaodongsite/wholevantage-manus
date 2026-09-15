import type { Metadata } from 'next'
import Image from 'next/image'
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
    path: '/about/our-approach',
    title: `${dict.approach.title} — WholeVantage Advisory`,
    description: dict.approach.subtitle,
  })
}

export default async function OurApproachPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const a = dict.approach

  return (
    <>
      <PageHeader title={a.title} subtitle={a.subtitle} />

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {a.principles.map((p, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <span className="text-sm font-medium uppercase tracking-wide text-primary">
                {p.tag}
              </span>
              <h2 className="mt-3 text-2xl font-bold text-primary">
                {p.title}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          <Image
            src="/images/our-approach.webp"
            alt="A sunlit workspace with an open notebook, pen, and a cup of coffee"
            width={1456}
            height={600}
            className="h-auto w-full object-cover"
          />
        </div>
      </section>
    </>
  )
}
