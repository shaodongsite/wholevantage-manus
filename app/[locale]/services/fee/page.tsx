import type { Metadata } from 'next'
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
    path: '/services/fee',
    title: `${dict.serviceFee.title} — WholeVantage Advisory`,
    description: dict.serviceFee.subtitle,
  })
}

export default async function ServiceFeePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const sf = dict.serviceFee

  return (
    <>
      <PageHeader title={sf.title} subtitle={sf.subtitle} />

      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="grid gap-6 md:grid-cols-2">
          {sf.models.map((m, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-border bg-card p-7"
            >
              <h2 className="text-balance text-xl font-bold text-primary">
                {m.title}
              </h2>
              <dl className="mt-5 flex flex-col gap-4">
                <div>
                  <dt className="text-sm font-semibold text-accent">
                    {m.scenarioLabel}
                  </dt>
                  <dd className="mt-1 leading-relaxed text-muted-foreground">
                    {m.scenario}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-accent">
                    {m.exampleLabel}
                  </dt>
                  <dd className="mt-1 leading-relaxed text-muted-foreground">
                    {m.example}
                  </dd>
                </div>
                <div className="border-t border-border pt-4">
                  <dt className="text-sm font-semibold text-accent">
                    {m.billingLabel}
                  </dt>
                  <dd className="mt-1 leading-relaxed text-foreground">
                    {m.billing}
                  </dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </section>

      <CtaSection
        locale={locale}
        dict={dict}
        title={sf.ctaTitle}
        text={sf.ctaText}
      />
    </>
  )
}
