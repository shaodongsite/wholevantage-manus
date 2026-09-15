import type { Metadata } from 'next'
import { Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { PageHeader } from '@/components/page-header'
import { getDictionary } from '@/lib/dictionaries'

export const metadata: Metadata = {
  title: 'Contact Shephine — WholeVantage Advisory',
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const c = dict.contact

  const infoItems = [
    { icon: Mail, label: c.emailLabel, value: c.email, href: `mailto:${c.email}` },
    { icon: Phone, label: c.phoneLabel, value: c.phone, href: `tel:${c.phone}` },
    { icon: MapPin, label: c.officeLabel, value: c.office },
  ]

  return (
    <>
      <PageHeader title={c.pageTitle} subtitle={c.pageSubtitle} />

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* 联系信息 */}
          <div className="flex flex-col gap-4">
            {infoItems.map((item, i) => {
              const Icon = item.icon
              const content = (
                <>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="block font-medium text-foreground">
                      {item.value}
                    </span>
                  </span>
                </>
              )
              return item.href ? (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
                >
                  {content}
                </div>
              )
            })}
          </div>

          {/* 留言表单 */}
          <div className="rounded-2xl border border-border bg-card p-7 sm:p-9">
            <h2 className="text-2xl font-bold text-foreground">
              {c.formTitle}
            </h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              {c.formSubtitle}
            </p>
            <div className="mt-6">
              <ContactForm dict={dict} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
