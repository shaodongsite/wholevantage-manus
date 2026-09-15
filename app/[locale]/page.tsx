import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import { pageMetadata } from '@/lib/site'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = getDictionary(locale)
  return pageMetadata({
    locale,
    path: '',
    title: `${dict.home.heroTitle} — WholeVantage Advisory`,
    description: dict.home.heroText,
  })
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const base = `/${locale}`
  const qrSrc =
    locale === 'zh' ? '/images/wechat-qr-zh.png' : '/images/wechat-qr-en.png'

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {dict.home.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {dict.home.heroText}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`${base}/contact`}
                className={cn(
                  buttonVariants({ variant: 'default', size: 'lg' }),
                  'h-12 px-7 text-base',
                )}
              >
                {dict.home.bookConsultation}
              </Link>
              <Link
                href={`${base}/services/content`}
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'h-12 px-7 text-base',
                )}
              >
                {dict.home.exploreServices}
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/hero-consulting.png"
              alt="Two business professionals reviewing an organizational development diagram together"
              width={720}
              height={560}
              priority
              className="w-full rounded-2xl object-cover shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* 服务介绍区 */}
      <section className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/hr-consulting.png"
                alt="Colorful post-it notes on a glass board representing HR consulting and planning"
                width={720}
                height={520}
                className="w-full rounded-2xl object-cover shadow-sm"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {dict.home.introTitle}
              </h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                {dict.home.introText}
              </p>
              <Link
                href={`${base}/about/my-story`}
                className={cn(
                  buttonVariants({ variant: 'default', size: 'lg' }),
                  'mt-7 h-11 px-6 text-base',
                )}
              >
                {dict.nav.about}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 微信二维码区 */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="flex flex-col items-center gap-5 rounded-2xl border border-border bg-card p-10 text-center">
          <h3 className="text-2xl font-bold text-primary">
            {dict.home.wechatTitle}
          </h3>
          <Image
            src={qrSrc}
            alt="WeChat QR code to add WholeVantage Advisory as a contact"
            width={180}
            height={180}
            className="rounded-xl border border-border"
          />
          <p className="text-sm font-medium tracking-wide text-muted-foreground">
            {dict.home.wechatText}
          </p>
        </div>
      </section>
    </>
  )
}
