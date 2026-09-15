'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import type { Dictionary } from '@/lib/dictionaries'

export function SubscribeForm({ dict }: { dict: Dictionary }) {
  const f = dict.footer
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    // 目前仅做前端反馈；后续可接入邮件列表服务（如 Resend Audiences / Mailchimp）
    setDone(true)
    setEmail('')
  }

  if (done) {
    return (
      <div className="mt-4 flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-3 text-sm text-primary">
        <CheckCircle2 className="size-4 shrink-0" />
        {f.subscribeSuccess}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={f.emailPlaceholder}
        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
      />
      <button
        type="submit"
        className="w-full rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        {f.subscribe}
      </button>
    </form>
  )
}
