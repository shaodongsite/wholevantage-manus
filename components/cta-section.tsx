import Link from 'next/link'
import type { Dictionary } from '@/lib/dictionaries'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// 通用 CTA 区块：服务流程页、收费页等都会复用，做一次处处生效。
export function CtaSection({
  dict,
  locale,
  title,
  text,
}: {
  dict: Dictionary
  locale: string
  title: string
  text: string
}) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-2xl border border-border bg-card p-8 text-center sm:p-12">
        <h2 className="text-balance text-2xl font-bold text-foreground">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {text}
        </p>
        <Link
          href={`/${locale}/contact`}
          className={cn(
            buttonVariants({ variant: 'default', size: 'lg' }),
            'mt-6 h-11 px-8 text-base',
          )}
        >
          {dict.serviceProcess.ctaButton}
        </Link>
      </div>
    </section>
  )
}
