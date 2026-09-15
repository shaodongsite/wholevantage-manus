import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import type { Dictionary } from '@/lib/dictionaries'
import { SubscribeForm } from '@/components/subscribe-form'
import { FooterLangSwitcher } from '@/components/footer-lang-switcher'

export function SiteFooter({
  dict,
  locale,
}: {
  dict: Dictionary
  locale: string
}) {
  const base = `/${locale}`

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* 品牌简介 */}
          <div>
            <h3 className="text-lg font-bold text-primary">{dict.brand}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {dict.footer.about}
            </p>
          </div>

          {/* 联系方式 */}
          <div>
            <h4 className="text-sm font-bold text-foreground">
              {dict.footer.contactTitle}
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 shrink-0 text-accent" />
                {dict.contact.office}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-accent" />
                <a href={`tel:${dict.contact.phone}`} className="hover:text-primary">
                  {dict.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-accent" />
                <a
                  href={`mailto:${dict.contact.email}`}
                  className="hover:text-primary"
                >
                  {dict.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* 关注我们 */}
          <div>
            <h4 className="text-sm font-bold text-foreground">
              {dict.footer.followTitle}
            </h4>
            <a
              href="https://www.linkedin.com/in/shephinexu/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="mt-4 inline-flex size-9 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <svg
                className="size-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
          </div>

          {/* 订阅 */}
          <div>
            <h4 className="text-sm font-bold text-foreground">
              {dict.footer.subscribeTitle}
            </h4>
            <SubscribeForm dict={dict} />
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          {dict.footer.languageNote}
        </p>
        <FooterLangSwitcher locale={locale} />

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>{dict.footer.rights}</p>
          <div className="flex gap-6">
            <Link href={`${base}/privacy`} className="hover:text-primary">
              {dict.footer.privacy}
            </Link>
            <Link href={`${base}/terms`} className="hover:text-primary">
              {dict.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
