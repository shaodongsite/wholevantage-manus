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
    path: '/services/process',
    title: `${dict.serviceProcess.title} — WholeVantage Advisory`,
    description: dict.serviceProcess.subtitle,
  })
}

export default async function ServiceProcessPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const sp = dict.serviceProcess

  return (
    <>
      <PageHeader title={sp.title} subtitle={sp.subtitle} />

      <section className="mx-auto max-w-4xl px-6 pb-8">
        <div className="flex flex-col gap-5">
          {sp.steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 sm:flex-row sm:gap-6"
            >
              <div className="shrink-0">
                <span className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">
                  {step.step}
                </span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-primary">{step.title}</h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection
        locale={locale}
        dict={dict}
        title={sp.ctaTitle}
        text={sp.ctaText}
      />
    </>
  )
}
