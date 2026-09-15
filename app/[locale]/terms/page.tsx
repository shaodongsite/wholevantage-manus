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
    path: '/terms',
    title: `${dict.footer.terms} — WholeVantage Advisory`,
    description: 'The terms that govern your use of this website.',
  })
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = getDictionary(locale)

  return (
    <>
      <PageHeader
        title={dict.footer.terms}
        subtitle="The terms that govern your use of this website."
      />
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <div className="flex flex-col gap-8 leading-relaxed text-foreground/80">
          <p>
            Welcome to WholeVantage Advisory. By accessing or using this website,
            you agree to be bound by the following terms and conditions. Please
            read them carefully.
          </p>

          <div>
            <h2 className="mb-3 text-xl font-bold text-foreground">
              Use of This Website
            </h2>
            <p>
              The content on this website is provided for general informational
              purposes only. It does not constitute legal, financial, or
              professional advice, and should not be relied upon as a substitute
              for a formal consulting engagement.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-foreground">
              Intellectual Property
            </h2>
            <p>
              All content on this website, including text, graphics, and logos,
              is the property of WholeVantage Advisory and is protected by
              applicable intellectual property laws. You may not reproduce or
              distribute it without our prior written consent.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-foreground">
              Limitation of Liability
            </h2>
            <p>
              WholeVantage Advisory shall not be liable for any damages arising
              from the use of, or inability to use, this website or the
              information contained on it.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-foreground">Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at{' '}
              <a
                href={`mailto:${dict.contact.email}`}
                className="font-medium text-primary hover:underline"
              >
                {dict.contact.email}
              </a>
              .
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            Last updated: June 2026
          </p>
        </div>
      </section>
    </>
  )
}
