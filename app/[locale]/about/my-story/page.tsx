import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { CtaSection } from '@/components/cta-section'
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
    path: '/about/my-story',
    title: `${dict.story.title} — WholeVantage Advisory`,
    description: dict.story.subtitle,
  })
}

export default async function MyStoryPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const s = dict.story

  return (
    <>
      <PageHeader title={s.title} subtitle={s.subtitle} />

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid items-start gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="flex flex-col gap-5">
            {s.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-pretty leading-relaxed text-muted-foreground"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-card p-3">
            <Image
              src="/images/shephine-portrait.jpeg"
              alt="Portrait of Shephine, founder of WholeVantage Advisory"
              width={840}
              height={1120}
              priority
              className="h-auto w-full rounded-xl object-cover [aspect-ratio:3/4]"
            />
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-8">
          <h2 className="text-xl font-bold text-primary">
            {s.highlightsTitle}
          </h2>
          <ul className="mt-6 flex flex-col gap-4">
            {s.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                <span className="leading-relaxed text-foreground">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection
        locale={locale}
        dict={dict}
        title={dict.contact.title}
        text={dict.contact.subtitle}
      />
    </>
  )
}
