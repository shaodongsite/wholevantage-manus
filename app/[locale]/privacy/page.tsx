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
    path: '/privacy',
    title: `${dict.footer.privacy} — WholeVantage Advisory`,
    description: 'How we collect, use, and protect your information.',
  })
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = getDictionary(locale)

  return (
    <>
      <PageHeader
        title={dict.footer.privacy}
        subtitle="How we collect, use, and protect your information."
      />
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <div className="flex flex-col gap-8 leading-relaxed text-foreground/80">
          <p>
            WholeVantage Advisory (&quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;) respects your privacy and is committed to protecting
            the personal information you share with us. This Privacy Policy
            explains how we handle information collected through this website.
          </p>

          <div>
            <h2 className="mb-3 text-xl font-bold text-foreground">
              Information We Collect
            </h2>
            <p>
              When you submit our contact form, we collect the name, email
              address, subject, and message you provide. We use this information
              solely to respond to your inquiry and to communicate with you about
              our services.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-foreground">
              How We Use Your Information
            </h2>
            <p>
              We use the information you provide to respond to your questions,
              deliver requested services, and improve our offerings. We do not
              sell, rent, or trade your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-foreground">
              Data Security
            </h2>
            <p>
              We take reasonable measures to protect your personal information
              against unauthorized access, alteration, disclosure, or
              destruction. However, no method of transmission over the internet
              is completely secure.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-foreground">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact
              us at{' '}
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
